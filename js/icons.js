/* ==========================================================================
   ILUSTRACIONES SVG - un icono propio por tema (en vez de depender de la
   fuente emoji del sistema, que varía mucho entre dispositivos).
   Todas las formas usan stroke/fill="currentColor" para heredar el color
   de texto del badge que las envuelve (ver .icon-badge en styles.css).
   ========================================================================== */

const TEMA_COLOR = {
  1: 'blue', 2: 'navy', 3: 'blue', 4: 'navy', 5: 'warning', 6: 'blue',
  7: 'warning', 8: 'blue', 9: 'navy', 10: 'blue', 11: 'navy', 12: 'blue',
  13: 'warning', 14: 'navy', 15: 'danger', 16: 'danger', 17: 'navy', 18: 'danger'
};

const TEMA_SVG = {
  // 1. Vía: carretera con línea discontinua central
  1: '<path d="M16 40 L20 8 M32 40 L28 8" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M24 10v6M24 20v6M24 30v6" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
  // 2. Documentación: ficha con sello de validación
  2: '<rect x="13" y="9" width="22" height="30" rx="3" stroke="currentColor" stroke-width="3" fill="none"/><path d="M18 17h12M18 23h12M18 29h7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none"/><circle cx="29.5" cy="30.5" r="4" stroke="currentColor" stroke-width="2" fill="none"/><path d="M27.7 30.5l1.1 1.1 2.2-2.4" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  // 3. Carriles: dos carriles con flecha de sentido
  3: '<path d="M14 38V10M34 38V10" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M24 33V15M19 20l5-5 5 5" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  // 4. Sentido de la marcha: rotonda con flecha de giro
  4: '<circle cx="24" cy="24" r="11" stroke="currentColor" stroke-width="3" fill="none"/><path d="M24 13a11 11 0 0 1 9.3 5.2" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M30.3 16l3.6 2.2-1.2 4.1" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  // 5. Velocidad: velocímetro con aguja
  5: '<path d="M11 30a13 13 0 1 1 26 0" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M24 30l7-10" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="24" cy="30" r="2.4" fill="currentColor"/>',
  // 6. Distancias: dos vehículos con margen medido
  6: '<rect x="7" y="26" width="11" height="7" rx="2" stroke="currentColor" stroke-width="2.5" fill="none"/><rect x="30" y="26" width="11" height="7" rx="2" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M21 29.5h6M23 27l-2.3 2.5L23 32M25 27l2.3 2.5L25 32" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  // 7. Prioridades: triángulo de ceda el paso
  7: '<path d="M24 9l13 24H11z" stroke="currentColor" stroke-width="3" fill="none" stroke-linejoin="round"/><path d="M24 19v8" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="24" cy="31" r="1.7" fill="currentColor"/>',
  // 8. Maniobras: flecha de giro
  8: '<path d="M14 32V20a8 8 0 0 1 8-8h12" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M29 7l5 5-5 5" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  // 9. Adelantamientos: vehículo rebasando con flecha
  9: '<rect x="7" y="24" width="15" height="8" rx="2.5" stroke="currentColor" stroke-width="2.5" fill="none"/><rect x="24" y="12" width="15" height="8" rx="2.5" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M30 30h7.5M34 27l3.5 3-3.5 3" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  // 10. Parada y estacionamiento: señal de "P"
  10: '<rect x="11" y="9" width="26" height="30" rx="5" stroke="currentColor" stroke-width="3" fill="none"/><path d="M19.5 33V15h6a5 5 0 0 1 0 10h-6" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  // 11. Alumbrado: foco con haces de luz
  11: '<circle cx="19" cy="22" r="7" stroke="currentColor" stroke-width="3" fill="none"/><path d="M26 22h11M26 17l9-4M26 27l9 4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none"/><path d="M15 33h8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>',
  // 12. Agentes y paneles: mano indicando alto
  12: '<path d="M17 23v-9.5a2.3 2.3 0 0 1 4.6 0V21M21.6 21v-2a2.2 2.2 0 0 1 4.4 0v2M26 21.3a2.2 2.2 0 0 1 4.4 0V23" stroke="currentColor" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 23v6.5a8 8 0 0 0 8 8h.5a8 8 0 0 0 8-8V23" stroke="currentColor" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  // 13. Señales verticales: disco de prohibición
  13: '<circle cx="24" cy="24" r="13" stroke="currentColor" stroke-width="3" fill="none"/><line x1="15" y1="33" x2="33" y2="15" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
  // 14. Marcas viales y semáforos: semáforo
  14: '<rect x="18" y="8" width="12" height="28" rx="4" stroke="currentColor" stroke-width="3" fill="none"/><circle cx="24" cy="15" r="2.6" fill="currentColor"/><circle cx="24" cy="22" r="2.6" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="24" cy="29" r="2.6" stroke="currentColor" stroke-width="2" fill="none"/>',
  // 15. Alcohol y drogas: copa tachada
  15: '<path d="M16 11h16l-2.5 11a5.5 5.5 0 0 1-11 0z" stroke="currentColor" stroke-width="3" fill="none" stroke-linejoin="round"/><path d="M24 22v9M19 35h10" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><line x1="13" y1="36" x2="35" y2="10" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>',
  // 16. Fatiga y sueño: ojo cerrado
  16: '<path d="M11 24c4-5 9-7 13-7s9 2 13 7c-4 5-9 7-13 7s-9-2-13-7z" stroke="currentColor" stroke-width="2.6" fill="none" stroke-linejoin="round"/><path d="M14 24h20" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M30 32h5.5l-5.5 5h5.5" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  // 17. Conducción adversa: nube de lluvia
  17: '<path d="M16 24a6 6 0 1 1 1-11.9A8 8 0 0 1 32 16a6 6 0 0 1 1 12H16z" stroke="currentColor" stroke-width="2.8" fill="none" stroke-linejoin="round"/><path d="M18 31l-2 5M25 31l-2 5M32 31l-2 5" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>',
  // 18. Primeros auxilios: cruz sanitaria en escudo
  18: '<path d="M24 8l12 4v11c0 9-6 14-12 17-6-3-12-8-12-17V12z" stroke="currentColor" stroke-width="2.8" fill="none" stroke-linejoin="round"/><path d="M24 18v12M18 24h12" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>'
};

/* Iconos genéricos para días de examen / simulacro (no ligados a un único tema) */
const GENERIC_SVG = {
  examen: {
    color: 'navy',
    svg: '<rect x="13" y="10" width="22" height="28" rx="3" stroke="currentColor" stroke-width="3" fill="none"/><rect x="18" y="7" width="12" height="6" rx="2" fill="currentColor"/><path d="M18 24l4 4 8-9" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
  },
  simulacro: {
    color: 'warning',
    svg: '<path d="M17 10h14v9a7 7 0 0 1-14 0z" stroke="currentColor" stroke-width="3" fill="none" stroke-linejoin="round"/><path d="M17 13h-4a5 5 0 0 0 5 7M31 13h4a5 5 0 0 1-5 7" stroke="currentColor" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M24 26v6M18 38h12M20 38v-3h8v3" stroke="currentColor" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
  }
};

function iconBadge(svgInner, color, size) {
  return `<span class="icon-badge icon-${size} icon-bg-${color || 'blue'}"><svg viewBox="0 0 48 48" aria-hidden="true">${svgInner || ''}</svg></span>`;
}

function temaIcon(temaId, size) {
  return iconBadge(TEMA_SVG[temaId], TEMA_COLOR[temaId], size);
}

function dayIcon(plan, size) {
  if (plan.tipo === 'estudio') return temaIcon(plan.temas[0], size);
  const g = GENERIC_SVG[plan.tipo === 'examen' ? 'examen' : 'simulacro'];
  return iconBadge(g.svg, g.color, size);
}
