/* ==========================================================================
   APP - Carné B en 15 Días
   Lógica de estado, navegación y simulador de test. Sin frameworks.
   ========================================================================== */

const STORAGE_KEY = 'carnetB_estado_v1';

/* ---------- Estado persistente ---------- */
function defaultState() {
  const studied = {}, testDone = {}, testResult = {};
  for (let d = 1; d <= 15; d++) { studied[d] = false; testDone[d] = false; testResult[d] = null; }
  return {
    studied, testDone, testResult,
    errorNotebook: [],
    simulacro: { completed: [false, false, false, false, false, false], scores: [null, null, null, null, null, null] }
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    const base = defaultState();
    return Object.assign(base, parsed, {
      studied: Object.assign(base.studied, parsed.studied),
      testDone: Object.assign(base.testDone, parsed.testDone),
      testResult: Object.assign(base.testResult, parsed.testResult),
      simulacro: Object.assign(base.simulacro, parsed.simulacro)
    });
  } catch (e) {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();
let currentPage = { name: 'dashboard' };
let testState = null;
let lastRenderedPageName = null;

/* ---------- Utilidades ---------- */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom(arr, n) {
  return shuffle(arr).slice(0, Math.min(n, arr.length));
}

function shuffleQuestionOptions(q) {
  const order = shuffle([0, 1, 2]);
  const opciones = order.map(i => q.opciones[i]);
  const correcta = order.indexOf(q.correcta);
  return Object.assign({}, q, { opciones, correcta });
}

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const s = Math.floor(totalSeconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function showToast(msg) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.classList.add('toast-visible'), 10);
  setTimeout(() => { toast.classList.remove('toast-visible'); setTimeout(() => toast.remove(), 300); }, 2600);
}

function getPlan(day) {
  return PLAN_DIAS.find(d => d.dia === day);
}

/* ---------- Lógica de estado de días ---------- */
function isDayCompleted(day) {
  return !!state.studied[day] && !!state.testDone[day];
}

function isDayUnlocked(day) {
  if (day === 1) return true;
  return isDayCompleted(day - 1);
}

function dayStatus(day) {
  if (!isDayUnlocked(day)) return 'bloqueado';
  if (isDayCompleted(day)) return 'completado';
  if (state.studied[day]) return 'estudiado';
  return 'disponible';
}

function addToErrorNotebook(q) {
  const exists = state.errorNotebook.some(e => e.id === q.id);
  if (!exists) {
    state.errorNotebook.push({
      id: q.id, pregunta: q.pregunta, opciones: q.opciones, correcta: q.correcta,
      explicacion: q.explicacion, temaId: q.temaId, temaTitulo: q.temaTitulo
    });
  }
}

/* ==========================================================================
   RENDER: DASHBOARD
   ========================================================================== */
function viewDashboard() {
  const completedCount = [...Array(15).keys()].map(i => i + 1).filter(isDayCompleted).length;
  const pct = Math.round((completedCount / 15) * 100);
  let nextDay = [...Array(15).keys()].map(i => i + 1).find(d => !isDayCompleted(d));
  const headline = nextDay ? `Día ${nextDay} de 15` : '¡Plan completado! 🎉';

  const statusIcon = { bloqueado: '🔒', disponible: '👉', estudiado: '📖', completado: '✅' };
  const statusLabel = { bloqueado: 'Bloqueado', disponible: 'Disponible', estudiado: 'Estudiado', completado: 'Completado' };

  const cards = PLAN_DIAS.map(p => {
    const st = dayStatus(p.dia);
    return `
      <button class="day-card status-${st}" data-action="go-day" data-day="${p.dia}">
        <span class="day-card-top">
          ${dayIcon(p, 'sm')}
          <span class="day-card-status">${statusIcon[st]}</span>
        </span>
        <span class="day-card-num">Día ${p.dia}</span>
        <span class="day-card-title">${p.titulo}</span>
        <span class="day-card-label">${statusLabel[st]}</span>
      </button>`;
  }).join('');

  return `
    <section class="view">
      <div class="dashboard-header">
        <h2>🚦 Tu plan de 15 días</h2>
        <p class="dashboard-headline">${headline}</p>
        <div class="progress-bar-track">
          <div class="progress-bar-fill" style="width:${pct}%"></div>
        </div>
        <p class="progress-bar-text">${completedCount} / 15 días completados (${pct}%)</p>
      </div>
      <div class="day-grid">${cards}</div>
      <p class="dashboard-hint">Cada día se desbloquea al completar el anterior: 1 hora de <strong>Estudio</strong> + 1 hora de <strong>Test</strong>.</p>
    </section>`;
}

/* ==========================================================================
   RENDER: VISTA DE DÍA (Estudio / Test)
   ========================================================================== */
function tabLabels(plan) {
  if (plan.tipo === 'estudio') return { estudio: 'Estudio Dinámico', test: 'Batería de Test' };
  if (plan.tipo === 'examen') return { estudio: 'Repaso de Errores', test: 'Test de Examen' };
  return { estudio: 'Repaso de Cifras', test: 'Gran Simulacro' };
}

function viewDay(day, tab) {
  const plan = getPlan(day);
  const labels = tabLabels(plan);
  const content = tab === 'estudio' ? renderEstudioTab(plan) : renderTestTab(plan);

  return `
    <section class="view">
      <div class="day-header">
        <h2>Día ${plan.dia} · ${plan.titulo}</h2>
      </div>
      <div class="tab-bar">
        <button class="tab-btn ${tab === 'estudio' ? 'active' : ''}" data-action="tab" data-tab="estudio">📖 ${labels.estudio}</button>
        <button class="tab-btn ${tab === 'test' ? 'active' : ''}" data-action="tab" data-tab="test">📝 ${labels.test}</button>
      </div>
      <div class="tab-content">${content}</div>
    </section>`;
}

function renderConceptCard(tema, concepto) {
  return `
    <div class="concept-card">
      <div class="concept-card-header">
        ${temaIcon(tema.id, 'md')}
        <h4>${concepto.titulo}</h4>
      </div>
      <p class="concept-explicacion">${concepto.explicacion}</p>
      <div class="callout callout-ejemplo">
        <span class="callout-tag">🧩 Ejemplo cotidiano</span>
        ${temaScene(tema.id, 'thumb', 'a')}
        <p>${concepto.ejemplo}</p>
      </div>
      <div class="callout callout-trampa">
        <span class="callout-tag">⚠️ Pregunta Trampa DGT</span>
        <p>${concepto.trampa}</p>
      </div>
    </div>`;
}

function renderEstudioTab(plan) {
  const day = plan.dia;
  const studied = state.studied[day];
  const markBtn = studied
    ? `<div class="mark-done">✅ Repaso/Estudio marcado como completado</div>`
    : `<button class="btn btn-primary btn-block" data-action="mark-studied">Marcar estudio como completado</button>`;

  if (plan.tipo === 'estudio') {
    const temasHtml = plan.temas.map(tid => {
      const tema = TEMAS[tid];
      const conceptos = tema.conceptos.map(c => renderConceptCard(tema, c)).join('');
      return `<div class="tema-block">
                <h3 class="tema-block-title">${temaIcon(tid, 'md')} Tema ${tid}: ${tema.titulo}</h3>
                ${conceptos}
              </div>`;
    }).join('');
    return `${temasHtml}${markBtn}`;
  }

  if (plan.tipo === 'examen') {
    const errors = state.errorNotebook;
    const list = errors.length === 0
      ? `<div class="empty-state">📭 Aún no tienes errores guardados. Completa tests en días anteriores para rellenar tu Cuaderno de Errores y repasarlo aquí.</div>`
      : errors.map(e => renderErrorReviewCard(e)).join('');
    return `<div class="repaso-intro">Repasa aquí, sin prisa, todas las preguntas que has fallado hasta ahora.</div>${list}${markBtn}`;
  }

  // simulacro (día 15): repaso rápido de cifras
  const categorias = {};
  CIFRAS_CLAVE.forEach(c => { (categorias[c.categoria] = categorias[c.categoria] || []).push(c); });
  const cifrasHtml = Object.keys(categorias).map(cat => `
    <div class="cifras-block">
      <h4>${cat}</h4>
      <ul class="cifras-list">
        ${categorias[cat].map(c => `<li><span>${c.dato}</span><strong>${c.valor}</strong></li>`).join('')}
      </ul>
    </div>`).join('');
  return `<div class="repaso-intro">Repaso exprés de las cifras clave antes del gran simulacro.</div>${cifrasHtml}${markBtn}`;
}

function renderErrorReviewCard(e) {
  const opciones = e.opciones.map((op, i) => `
    <div class="option-static ${i === e.correcta ? 'is-correct' : ''}">${String.fromCharCode(65 + i)}) ${op}</div>`).join('');
  return `
    <div class="error-card">
      <div class="error-card-tema">
        <span class="error-card-tema-label">${temaIcon(e.temaId, 'sm')} Tema ${e.temaId}: ${e.temaTitulo}</span>
      </div>
      <p class="error-card-pregunta">${e.pregunta}</p>
      ${temaScene(e.temaId, 'thumb', 'b')}
      <div class="options-static">${opciones}</div>
      <div class="callout callout-explicacion"><p>💡 ${e.explicacion}</p></div>
    </div>`;
}

function renderTestTab(plan) {
  const day = plan.dia;

  if (plan.tipo === 'estudio') {
    const total = plan.temas.reduce((acc, tid) => acc + TEMAS[tid].preguntas.length, 0);
    const result = state.testResult[day];
    const resultHtml = result ? renderLastResult(result) : '';
    return `
      <div class="test-intro">
        <h3>📝 Batería de Test del Día ${day}</h3>
        <p>${total} preguntas sobre los temas estudiados hoy. Necesitas 3 fallos o menos para considerarte APTO.</p>
        ${resultHtml}
        <button class="btn btn-primary btn-block" data-action="start-test">${result ? 'Repetir Test' : `Comenzar Test (${total} preguntas)`}</button>
      </div>`;
  }

  if (plan.tipo === 'examen') {
    const result = state.testResult[day];
    const resultHtml = result ? renderLastResult(result) : '';
    return `
      <div class="test-intro">
        <h3>📝 Test de Examen Global</h3>
        <p>30 preguntas aleatorias mezcladas de todo el temario (1 al 18). Simula un examen real.</p>
        ${resultHtml}
        <button class="btn btn-primary btn-block" data-action="start-test">${result ? 'Repetir Test' : 'Comenzar Test (30 preguntas)'}</button>
      </div>`;
  }

  // simulacro día 15
  const tests = [0, 1, 2, 3, 4, 5].map(i => {
    const done = state.simulacro.completed[i];
    const score = state.simulacro.scores[i];
    const unlocked = i === 0 || state.simulacro.completed[i - 1];
    let statusText = 'Pendiente';
    let cls = 'pendiente';
    if (done && score) { statusText = `${score.apto ? 'APTO ✅' : 'NO APTO ❌'} · ${score.correct}/${score.total}`; cls = score.apto ? 'aprobado' : 'no-aprobado'; }
    const btn = !unlocked
      ? `<span class="locked-label">🔒 Completa el test anterior</span>`
      : `<button class="btn btn-secondary" data-action="start-simulacro-test" data-index="${i}">${done ? 'Repetir' : 'Comenzar'}</button>`;
    return `
      <div class="simulacro-test-card ${cls}">
        <div class="simulacro-test-info">
          <strong>Test ${i + 1} de 6</strong>
          <span>${statusText}</span>
        </div>
        ${btn}
      </div>`;
  }).join('');

  return `
    <div class="test-intro">
      <h3>🏁 Gran Simulacro Final</h3>
      <p>6 test consecutivos de 30 preguntas, con un temporizador de 30 minutos por test. ¡Tal y como será el examen real!</p>
    </div>
    <div class="simulacro-list">${tests}</div>`;
}

function renderLastResult(result) {
  return `
    <div class="last-result ${result.apto ? 'apto' : 'noapto'}">
      Último resultado: <strong>${result.apto ? 'APTO ✅' : 'NO APTO ❌'}</strong> — ${result.correct}/${result.total} correctas (${result.failsCount} fallos)
    </div>`;
}

/* ==========================================================================
   RENDER: CUADERNO DE ERRORES
   ========================================================================== */
function viewErrors() {
  const errors = state.errorNotebook;
  const practiceBtn = errors.length > 0
    ? `<button class="btn btn-primary btn-block" data-action="start-practice-errors">🎯 Practicar estos ${errors.length} errores</button>`
    : '';
  const list = errors.length === 0
    ? `<div class="empty-state">📭 Tu Cuaderno de Errores está vacío. Las preguntas que falles en cualquier test aparecerán aquí automáticamente.</div>`
    : errors.map(e => `
      <div class="error-card">
        <div class="error-card-tema">
          <span class="error-card-tema-label">${temaIcon(e.temaId, 'sm')} Tema ${e.temaId}: ${e.temaTitulo}</span>
          <button class="btn-remove" data-action="remove-error" data-id="${e.id}" title="Eliminar">🗑️</button>
        </div>
        <p class="error-card-pregunta">${e.pregunta}</p>
        ${temaScene(e.temaId, 'thumb', 'b')}
        <div class="options-static">${e.opciones.map((op, i) => `<div class="option-static ${i === e.correcta ? 'is-correct' : ''}">${String.fromCharCode(65 + i)}) ${op}</div>`).join('')}</div>
        <div class="callout callout-explicacion"><p>💡 ${e.explicacion}</p></div>
      </div>`).join('');

  return `
    <section class="view">
      <div class="day-header"><h2>📕 Cuaderno de Errores</h2></div>
      ${practiceBtn}
      <div class="error-list">${list}</div>
    </section>`;
}

/* ==========================================================================
   SIMULADOR DE TEST
   ========================================================================== */
function startTest(context) {
  let questions = [];

  if (context.kind === 'day') {
    const plan = getPlan(context.day);
    plan.temas.forEach(tid => {
      TEMAS[tid].preguntas.forEach(p => questions.push(Object.assign({ temaId: tid, temaTitulo: TEMAS[tid].titulo }, p)));
    });
    questions = shuffle(questions);
  } else if (context.kind === 'exam' || context.kind === 'simulacro') {
    questions = pickRandom(getTodasLasPreguntas(), context.kind === 'simulacro' ? PLAN_DIAS[14].preguntasPorTest : 30);
  } else if (context.kind === 'practice-errors') {
    if (state.errorNotebook.length === 0) { showToast('Tu Cuaderno de Errores está vacío.'); return; }
    questions = shuffle(state.errorNotebook);
  }

  questions = questions.map(shuffleQuestionOptions);

  const timerSeconds = context.kind === 'simulacro' ? PLAN_DIAS[14].minutosPorTest * 60 : null;

  testState = {
    context, questions, idx: 0, selected: null, answered: false,
    fails: [], correct: 0, timerSeconds, timerHandle: null
  };

  if (timerSeconds !== null) {
    testState.timerHandle = setInterval(() => {
      testState.timerSeconds--;
      const el = document.getElementById('timer-value');
      if (el) el.textContent = formatTime(Math.max(testState.timerSeconds, 0));
      if (testState.timerSeconds <= 0) {
        clearInterval(testState.timerHandle);
        finishTest(true);
      }
    }, 1000);
  }

  currentPage = { name: 'test-running' };
  render();
}

function stopTimer() {
  if (testState && testState.timerHandle) {
    clearInterval(testState.timerHandle);
    testState.timerHandle = null;
  }
}

function selectOption(index) {
  if (!testState || testState.answered) return;
  testState.answered = true;
  testState.selected = index;
  const q = testState.questions[testState.idx];
  if (index === q.correcta) {
    testState.correct++;
  } else {
    testState.fails.push(q);
  }
  render();
}

function nextQuestion() {
  if (!testState) return;
  if (testState.idx >= testState.questions.length - 1) {
    finishTest(false);
    return;
  }
  testState.idx++;
  testState.answered = false;
  testState.selected = null;
  render();
}

function finishTest(timeExpired) {
  if (!testState) return;
  stopTimer();

  if (timeExpired) {
    for (let i = testState.idx + (testState.answered ? 1 : 0); i < testState.questions.length; i++) {
      testState.fails.push(testState.questions[i]);
    }
  }

  testState.fails.forEach(addToErrorNotebook);

  const total = testState.questions.length;
  const failsCount = testState.fails.length;
  const correct = total - failsCount;
  const apto = failsCount <= 3;
  const result = { correct, total, failsCount, apto, timeExpired: !!timeExpired };

  const ctx = testState.context;
  if (ctx.kind === 'day' || ctx.kind === 'exam') {
    state.studied[ctx.day] = state.studied[ctx.day]; // sin cambios, solo por claridad
    state.testDone[ctx.day] = true;
    state.testResult[ctx.day] = result;
  } else if (ctx.kind === 'simulacro') {
    state.simulacro.completed[ctx.testIndex] = true;
    state.simulacro.scores[ctx.testIndex] = result;
    if (state.simulacro.completed.every(Boolean)) state.testDone[15] = true;
  }
  saveState();

  currentPage = { name: 'test-result', context: ctx, result };
  testState = null;
  render();
}

function viewTestRunning() {
  const q = testState.questions[testState.idx];
  const total = testState.questions.length;
  const pct = Math.round(((testState.idx) / total) * 100);

  const timerHtml = testState.timerSeconds !== null
    ? `<div class="timer-display">⏱️ <span id="timer-value">${formatTime(testState.timerSeconds)}</span></div>`
    : '';

  const optionsHtml = q.opciones.map((op, i) => {
    let cls = 'option-btn';
    if (testState.answered) {
      if (i === q.correcta) cls += ' correct';
      else if (i === testState.selected) cls += ' incorrect';
    }
    return `<button class="${cls}" data-action="select-option" data-index="${i}" ${testState.answered ? 'disabled' : ''}>
              <span class="option-letter">${String.fromCharCode(65 + i)}</span>
              <span class="option-text">${op}</span>
            </button>`;
  }).join('');

  const feedback = testState.answered ? `
    <div class="callout ${testState.selected === q.correcta ? 'callout-correct' : 'callout-incorrect'}">
      <span class="callout-tag">${testState.selected === q.correcta ? '✅ ¡Correcto!' : '❌ Fallo'}</span>
      ${temaScene(q.temaId, 'thumb', 'b')}
      <p>${q.explicacion}</p>
    </div>
    <button class="btn btn-primary btn-block" data-action="next-question">${testState.idx >= total - 1 ? 'Ver resultados' : 'Siguiente pregunta'}</button>
  ` : '';

  return `
    <section class="view test-running">
      <div class="test-running-header">
        <span class="test-progress-text">Pregunta ${testState.idx + 1} de ${total}</span>
        ${timerHtml}
      </div>
      <div class="progress-bar-track"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
      <div class="question-card">
        ${temaScene(q.temaId, 'banner', 'b')}
        <p class="question-text">${q.pregunta}</p>
      </div>
      <div class="options-group">${optionsHtml}</div>
      ${feedback}
    </section>`;
}

function viewTestResult() {
  const { context, result } = currentPage;
  const badgeClass = result.apto ? 'apto' : 'noapto';
  const badgeText = result.apto ? 'APTO ✅' : 'NO APTO ❌';
  const expiredMsg = result.timeExpired ? `<p class="time-expired-msg">⏰ Se acabó el tiempo. Las preguntas no respondidas cuentan como fallo.</p>` : '';

  let actions = '';
  if (context.kind === 'day' || context.kind === 'exam') {
    actions = `
      <button class="btn btn-secondary" data-action="go-day" data-day="${context.day}">Volver al Día</button>
      <button class="btn btn-primary" data-action="go-dashboard">Ir al Dashboard</button>`;
  } else if (context.kind === 'simulacro') {
    const next = context.testIndex + 1;
    if (next < 6) {
      actions = `
        <button class="btn btn-primary btn-block" data-action="start-simulacro-test" data-index="${next}">Comenzar Test ${next + 1} de 6</button>
        <button class="btn btn-secondary btn-block" data-action="go-day" data-day="15">Volver al Día 15</button>`;
    } else {
      const scores = state.simulacro.scores;
      const avgCorrect = (scores.reduce((a, s) => a + s.correct, 0) / scores.length).toFixed(1);
      actions = `
        <div class="simulacro-final-summary">
          <h3>🏁 Simulacro completo</h3>
          <p>Media de aciertos: <strong>${avgCorrect} / 30</strong> en los 6 test.</p>
        </div>
        <button class="btn btn-primary btn-block" data-action="go-dashboard">Ir al Dashboard</button>`;
    }
  } else if (context.kind === 'practice-errors') {
    actions = `
      <button class="btn btn-secondary" data-action="go-errors">Volver al Cuaderno</button>
      <button class="btn btn-primary" data-action="go-dashboard">Ir al Dashboard</button>`;
  }

  return `
    <section class="view test-result">
      <div class="result-badge ${badgeClass}">${badgeText}</div>
      <p class="result-score">${result.correct} / ${result.total} correctas</p>
      <p class="result-fails">${result.failsCount} fallos ${result.failsCount > 0 ? '· guardados en tu Cuaderno de Errores 📕' : ''}</p>
      ${expiredMsg}
      <div class="result-actions">${actions}</div>
    </section>`;
}

/* ==========================================================================
   RENDER PRINCIPAL Y NAVEGACIÓN
   ========================================================================== */
function render() {
  const app = document.getElementById('app');
  const isNewPage = lastRenderedPageName !== currentPage.name;
  lastRenderedPageName = currentPage.name;

  switch (currentPage.name) {
    case 'dashboard': app.innerHTML = viewDashboard(); break;
    case 'day': app.innerHTML = viewDay(currentPage.day, currentPage.tab); break;
    case 'errors': app.innerHTML = viewErrors(); break;
    case 'test-running': app.innerHTML = viewTestRunning(); break;
    case 'test-result': app.innerHTML = viewTestResult(); break;
    default: app.innerHTML = viewDashboard();
  }

  // La transición de entrada solo se reproduce al cambiar de pantalla,
  // no en cada actualización interna (responder, cambiar de pestaña...).
  if (isNewPage) {
    const viewEl = app.querySelector('.view');
    if (viewEl) viewEl.classList.add('fade-in');
  }
  window.scrollTo(0, 0);
}

document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const action = el.dataset.action;

  switch (action) {
    case 'go-dashboard':
      stopTimer(); testState = null;
      currentPage = { name: 'dashboard' };
      render();
      break;

    case 'go-day': {
      const day = Number(el.dataset.day);
      if (!isDayUnlocked(day)) { showToast('Completa el día anterior para desbloquear este día.'); return; }
      stopTimer(); testState = null;
      currentPage = { name: 'day', day, tab: 'estudio' };
      render();
      break;
    }

    case 'go-errors':
      stopTimer(); testState = null;
      currentPage = { name: 'errors' };
      render();
      break;

    case 'tab':
      currentPage.tab = el.dataset.tab;
      render();
      break;

    case 'mark-studied':
      state.studied[currentPage.day] = true;
      saveState();
      showToast('¡Marcado como completado!');
      render();
      break;

    case 'start-test': {
      const day = currentPage.day;
      const plan = getPlan(day);
      startTest({ kind: plan.tipo === 'examen' ? 'exam' : 'day', day });
      break;
    }

    case 'start-simulacro-test': {
      const index = Number(el.dataset.index);
      startTest({ kind: 'simulacro', day: 15, testIndex: index });
      break;
    }

    case 'start-practice-errors':
      startTest({ kind: 'practice-errors' });
      break;

    case 'select-option':
      selectOption(Number(el.dataset.index));
      break;

    case 'next-question':
      nextQuestion();
      break;

    case 'remove-error':
      state.errorNotebook = state.errorNotebook.filter(q => q.id !== el.dataset.id);
      saveState();
      render();
      showToast('Pregunta eliminada del cuaderno.');
      break;

    default:
      break;
  }
});

/* ---------- Arranque ---------- */
render();
