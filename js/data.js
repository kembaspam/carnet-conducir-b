/* ==========================================================================
   DATOS DEL TEMARIO - Permiso B (carné de conducir)
   18 temas con conceptos de estudio (con ejemplo y "trampa DGT") y un banco
   de preguntas tipo test por tema. Repartidos en un plan estricto de 15 días.
   ========================================================================== */

const TEMAS = {
  1: {
    id: 1, titulo: 'Definiciones y la Vía',
    conceptos: [
      {
        titulo: 'Vía, calzada y arcén',
        explicacion: 'La "vía" es todo el espacio público destinado a la circulación: calzada, arcenes, aceras, medianas... La "calzada" es solo la parte reservada a la circulación de vehículos. El "arcén" es la franja lateral destinada a paradas de emergencia, no a circular.',
        ejemplo: 'Cuando un coche se avería en autovía y se detiene en el arcén, sigue dentro de "la vía", pero ha abandonado "la calzada".',
        trampa: '¿El arcén forma parte de la calzada? NO. El arcén no es calzada, aunque sí forma parte de la vía en su conjunto.'
      },
      {
        titulo: 'Carril y sentido de circulación',
        explicacion: 'Un carril es cada franja longitudinal en que se divide la calzada. Un sentido de circulación puede tener uno o varios carriles.',
        ejemplo: 'Una autovía con 2 carriles por sentido permite circular y adelantar sin invadir el sentido contrario.',
        trampa: 'Tener un solo carril por sentido NO significa que esté prohibido adelantar: se puede, si hay visibilidad y ninguna norma o marca lo prohíbe.'
      },
      {
        titulo: 'Berma, mediana e isleta',
        explicacion: 'La berma es la zona, normalmente sin pavimentar, situada fuera del arcén. La mediana separa los sentidos opuestos de circulación. La isleta es una zona delimitada en un cruce para ordenar el tráfico.',
        ejemplo: 'La franja de césped que separa los carriles de subida y bajada de una autovía es la mediana.',
        trampa: 'No confundas la mediana (separa sentidos opuestos) con la isleta (organiza el tráfico en cruces, no separa sentidos contrarios).'
      }
    ],
    preguntas: [
      { id: 't1-1', pregunta: '¿Se debe considerar a los peatones como usuarios de la vía?', opciones: ['Sí', 'No', 'Sólo son usuarios los vehículos'], correcta: 0, explicacion: 'Según el RGC, son usuarios de la vía los conductores, peatones y pasajeros. Los peatones tienen derechos y obligaciones en la vía.' },
      { id: 't1-2', pregunta: 'Si conduces a pie una motocicleta, se considera que eres...', opciones: ['Peatón', 'Conductor', 'Ambas son correctas dependiendo de la situación'], correcta: 0, explicacion: 'El RGC considera peatón a quien empuja o arrastra a pie un ciclomotor o vehículo de dos ruedas.' },
      { id: 't1-3', pregunta: 'Como norma general, ¿cuál es la parte de la vía destinada a la circulación de vehículos?', opciones: ['La calzada', 'La mediana', 'Los carriles y arcenes'], correcta: 0, explicacion: 'La calzada es la parte de la vía destinada a la circulación de vehículos. El arcén no forma parte de la calzada.' },
      { id: 't1-4', pregunta: '¿Qué es una glorieta?', opciones: ['Una intersección donde sólo circulan automóviles', 'Una intersección con circulación rotatoria alrededor de una isleta central', 'No es una intersección, sino una vía rápida'], correcta: 1, explicacion: 'La glorieta es una intersección donde la circulación se realiza de forma rotatoria alrededor de una isleta central.' },
      { id: 't1-5', pregunta: '¿Qué clase de vía es una travesía?', opciones: ['Una autovía', 'Una vía interurbana', 'Un tramo de vía de poblado perteneciente a una carretera'], correcta: 2, explicacion: 'La travesía es un tramo de carretera que atraviesa un núcleo urbano; aunque tenga características de calle, pertenece a la red de carreteras.' },
      { id: 't1-6', pregunta: 'Un cambio de rasante es...', opciones: ['Un lugar donde se encuentran dos tramos de vía de distinta inclinación longitudinal', 'Un tramo donde no se ve todo el ancho de la calzada por una curva', 'Un lugar donde hay un cambio de dirección horizontal'], correcta: 0, explicacion: 'El cambio de rasante es el punto donde se unen dos inclinaciones distintas del perfil longitudinal de la vía, pudiendo limitar la visibilidad.' },
      { id: 't1-7', pregunta: '¿A quién se considera "conductor" según el RGC?', opciones: ['Al que conduce a pie un ciclomotor de dos ruedas', 'Al que maneja el volante en prácticas sin ser el titular del permiso', 'Al que maneja el mecanismo de dirección o va al mando de un vehículo en circulación'], correcta: 2, explicacion: 'El conductor es quien maneja el mecanismo de dirección o va al mando de un vehículo. El que conduce a pie un ciclomotor es peatón.' },
      { id: 't1-8', pregunta: '¿Se consideran peatones las personas que circulan en silla de ruedas con motor?', opciones: ['Sí, a efectos del RGC son considerados peatones', 'Depende de la cilindrada del motor de la silla', 'No, porque pueden circular por la calzada al igual que los vehículos'], correcta: 0, explicacion: 'Las personas que circulan en silla de ruedas, con o sin motor, tienen la consideración de peatones según el RGC.' }
    ]
  },
  2: {
    id: 2, titulo: 'Documentación, ITV y Seguro',
    conceptos: [
      {
        titulo: 'Documentación obligatoria',
        explicacion: 'El conductor debe tener en vigor el permiso de conducir; el vehículo debe contar con el permiso de circulación y el seguro obligatorio vigente.',
        ejemplo: 'Igual que tú llevas tu DNI, el coche tiene su propio "documento de identidad": el permiso de circulación.',
        trampa: 'No es obligatorio llevar el justificante de seguro en papel encima, pero sí tenerlo en vigor y poder acreditarlo si te lo solicita un agente.'
      },
      {
        titulo: 'La ITV',
        explicacion: 'La Inspección Técnica de Vehículos comprueba que el coche cumple condiciones de seguridad y medioambientales. Un turismo nuevo pasa su primera ITV a los 4 años, luego cada 2 años hasta los 10, y a partir de ahí anualmente.',
        ejemplo: 'Es como una revisión médica periódica obligatoria, pero para el vehículo.',
        trampa: 'No confundas la periodicidad de turismos con la de otros vehículos (motos, camiones), que tienen plazos distintos.'
      },
      {
        titulo: 'Seguro obligatorio vs voluntario',
        explicacion: 'El seguro de responsabilidad civil es obligatorio y cubre los daños causados a terceros. El seguro voluntario (a todo riesgo) cubre además los daños del propio vehículo.',
        ejemplo: 'Si chocas y dañas el coche ajeno, el seguro obligatorio paga esos daños; si quieres que también arreglen el tuyo, necesitas el voluntario.',
        trampa: 'El seguro obligatorio NO cubre los daños propios del vehículo, solo los causados a terceros.'
      }
    ],
    preguntas: [
      { id: 't2-1', pregunta: '¿Qué determina la caducidad del permiso de conducir?', opciones: ['Solo el tiempo (los años de vigencia)', 'Solo los puntos disponibles', 'Tanto el tiempo como los puntos disponibles'], correcta: 2, explicacion: 'El permiso de conducir caduca tanto por el transcurso del periodo de vigencia como por la pérdida total de todos los puntos.' },
      { id: 't2-2', pregunta: 'Si tu turismo ha pasado favorablemente la primera ITV, ¿cuándo tiene que pasar la próxima?', opciones: ['Dentro de 6 meses', 'Dentro de 1 año', 'Dentro de 2 años'], correcta: 2, explicacion: 'Un turismo que supera la primera ITV (a los 4 años de matriculación) no debe volver a pasarla hasta 2 años después, cuando tenga 6 años.' },
      { id: 't2-3', pregunta: '¿Cuántos puntos dispone un conductor novel al obtener el permiso por primera vez?', opciones: ['8 puntos', '12 puntos', '15 puntos'], correcta: 0, explicacion: 'Los conductores que obtienen el permiso por primera vez disponen de 8 puntos, frente a los 12 de los conductores con permiso consolidado.' },
      { id: 't2-4', pregunta: '¿Cuántos puntos se detraen por usar el teléfono móvil sujetándolo con la mano al conducir?', opciones: ['3 puntos', '4 puntos', '6 puntos'], correcta: 2, explicacion: 'El uso del teléfono móvil sujetado con la mano mientras se conduce conlleva la pérdida de 6 puntos del permiso.' },
      { id: 't2-5', pregunta: '¿Cuáles son los daños NO cubiertos por el seguro obligatorio para el conductor causante del accidente?', opciones: ['Los daños en el vehículo contrario', 'Los daños personales que sufra el propio conductor responsable', 'Los daños a los ocupantes del vehículo ajeno'], correcta: 1, explicacion: 'El seguro obligatorio no cubre al conductor causante en sus propios daños personales; sí cubre a terceros (incluidos sus pasajeros).' },
      { id: 't2-6', pregunta: 'La vigencia del permiso de conducción, ¿está condicionada a no haber perdido todos los puntos?', opciones: ['No, los puntos solo afectan a las sanciones económicas', 'No, su vigencia solo está limitada en el tiempo', 'Sí, perder todos los puntos implica la pérdida de vigencia del permiso'], correcta: 2, explicacion: 'La pérdida de todos los puntos conlleva la pérdida de vigencia del permiso; el conductor no puede circular hasta recuperarlos mediante cursos.' },
      { id: 't2-7', pregunta: 'Si vende su vehículo, ¿debe comunicarlo a la Jefatura de Tráfico?', opciones: ['No, el nuevo titular lo comunicará en su nombre', 'Sí, sin plazo concreto', 'Sí, en un plazo de 10 días indicando los datos del nuevo titular'], correcta: 2, explicacion: 'El vendedor debe notificar la transmisión del vehículo a la DGT en 10 días, indicando los datos del nuevo propietario, para evitar responsabilidades.' },
      { id: 't2-8', pregunta: 'El seguro obligatorio, ¿cubre los daños materiales al vehículo inocente aunque el conductor no sea el propietario?', opciones: ['Sí, cubre los daños causados a terceros con independencia de quién conduzca', 'No, solo si el conductor es el propietario del vehículo asegurado', 'Solo en turismos con menos de 10 años de antigüedad'], correcta: 0, explicacion: 'El seguro obligatorio cubre los daños causados a terceros por el uso del vehículo, independientemente de quién lo conduzca.' }
    ]
  },
  3: {
    id: 3, titulo: 'Uso de Vías y Carriles',
    conceptos: [
      {
        titulo: 'Circulación por la derecha y uso de carriles',
        explicacion: 'La norma general es circular por la derecha. En vías con varios carriles por sentido, el carril izquierdo se reserva para adelantamientos o maniobras, no para circular de forma habitual.',
        ejemplo: 'En una autovía de tres carriles, si vas a velocidad de crucero sin adelantar a nadie, debes ir por el carril derecho o central, no por el izquierdo.',
        trampa: 'Ir "pegado" al carril izquierdo en autovía sin estar adelantando es una infracción, aunque no se note a primera vista.'
      },
      {
        titulo: 'Carriles especiales: BUS-VAO y bici',
        explicacion: 'El carril BUS-VAO permite circular a autobuses y vehículos con un número mínimo de ocupantes. El carril bici está reservado a bicicletas.',
        ejemplo: 'Si vas solo en tu coche, normalmente no puedes usar un carril VAO que exige, por ejemplo, 2 o más ocupantes.',
        trampa: 'No confundas un carril "BUS" exclusivo (solo autobuses) con un carril "VAO" (vehículos de alta ocupación, varios pasajeros).'
      },
      {
        titulo: 'Uso temporal del arcén como carril',
        explicacion: 'El arcén solo puede usarse como carril de circulación cuando esté expresamente señalizado para ello en momentos de saturación del tráfico.',
        ejemplo: 'En accesos a grandes ciudades en horas punta, a veces se habilita el arcén con paneles luminosos que indican su uso temporal.',
        trampa: 'Nunca se puede usar el arcén como carril "porque hay atasco" si no existe señalización expresa que lo autorice.'
      }
    ],
    preguntas: [
      { id: 't3-1', pregunta: 'Al señalizar un cambio de carril, ¿tienes prioridad sobre los vehículos que ya circulan por ese carril?', opciones: ['No, debes ceder el paso a los que ya circulan por el carril al que te incorporas', 'Sí, la señalización con intermitente te da preferencia', 'Sí, cuando lo haces con antelación suficiente'], correcta: 0, explicacion: 'El intermitente anuncia la maniobra pero no da prioridad; quien se desplaza debe ceder el paso a los que ya circulan por el carril destino.' },
      { id: 't3-2', pregunta: 'En zona urbana, ¿es obligatorio facilitar a un autobús la incorporación desde una parada señalizada?', opciones: ['Sí, siempre que el autobús haya señalizado su incorporación', 'No, el autobús debe ceder el paso igual que cualquier vehículo', 'Sólo en condiciones meteorológicas adversas'], correcta: 0, explicacion: 'En zonas urbanas, cuando un autobús señaliza su incorporación desde una parada señalizada, los demás conductores deben facilitársela.' },
      { id: 't3-3', pregunta: 'Un vehículo circula por el carril izquierdo sin adelantar. ¿Está permitido adelantarle por la derecha?', opciones: ['No, el adelantamiento siempre se realiza por la izquierda salvo excepciones', 'Sí, siempre que haya varios carriles en el mismo sentido y el tráfico sea denso', 'Sí, pero solo dentro de poblado con carril bici delimitado'], correcta: 1, explicacion: 'Cuando hay varios carriles en el mismo sentido y el tráfico fluye de forma continua (tráfico denso), es posible adelantar por la derecha.' },
      { id: 't3-4', pregunta: 'En una vía de sentido único, ¿por dónde puede adelantar a un tranvía que circula por el centro?', opciones: ['Por la izquierda solamente', 'Por la derecha solamente', 'Tanto por la derecha como por la izquierda'], correcta: 2, explicacion: 'En vía de sentido único, cuando el tranvía circula por el centro, puede adelantarse tanto por la derecha como por la izquierda si hay espacio suficiente.' },
      { id: 't3-5', pregunta: 'En una autovía con varios carriles, si no está adelantando, ¿qué carril debe usar?', opciones: ['El carril izquierdo para mayor seguridad frente a los lentos que puedan incorporarse', 'El más adecuado a su velocidad, preferentemente el de la derecha', 'Es indiferente, cualquier carril libre es válido'], correcta: 1, explicacion: 'La norma obliga a circular por el carril de la derecha cuando no se adelanta; el izquierdo se reserva para adelantar.' },
      { id: 't3-6', pregunta: '¿Puede un turismo circular habitualmente por el arcén de una autovía?', opciones: ['Sí, si circula despacio y no entorpece a otros', 'No, el arcén es únicamente para paradas de emergencia y vehículos autorizados', 'Sí, si el arcén está completamente libre de obstáculos'], correcta: 1, explicacion: 'El arcén de las autovías no es un carril de circulación; su uso está reservado para emergencias y vehículos autorizados.' },
      { id: 't3-7', pregunta: 'El símbolo de una bicicleta pintado en el suelo de un carril urbano indica que...', opciones: ['Los ciclistas deben usar ese carril preferentemente pero no de forma exclusiva', 'Ese carril está reservado exclusivamente a bicicletas', 'Los ciclistas tienen prioridad en ese punto frente a los peatones'], correcta: 1, explicacion: 'Un carril bici señalizado en el suelo está reservado exclusivamente para la circulación de bicicletas.' },
      { id: 't3-8', pregunta: 'Al incorporarse a la circulación desde un carril de aceleración, ¿quién debe ceder el paso?', opciones: ['El tráfico ya circulante en la vía principal, que debe facilitar la incorporación', 'El que se incorpora, que debe adaptarse al tráfico de la vía principal', 'Nadie; el que llegue antes al punto de fusión tiene prioridad'], correcta: 1, explicacion: 'El conductor que se incorpora desde un carril de aceleración debe ceder el paso al tráfico ya circulante en la vía principal.' }
    ]
  },
  4: {
    id: 4, titulo: 'Sentido de la Marcha y Carriles Especiales',
    conceptos: [
      {
        titulo: 'Cambio de sentido',
        explicacion: 'El cambio de sentido solo está permitido donde no lo prohíba la señalización. En autopistas y autovías está prohibido salvo en los lugares específicamente habilitados.',
        ejemplo: 'No puedes dar la vuelta en mitad de una autovía aunque no veas tráfico; debes esperar a una salida o lugar habilitado.',
        trampa: 'No confundas "cambio de sentido" con "marcha atrás": ambas maniobras están muy restringidas en autopistas y autovías.'
      },
      {
        titulo: 'Prioridad en rotondas (glorietas)',
        explicacion: 'En las rotondas se circula en sentido contrario a las agujas del reloj y tiene prioridad el vehículo que ya circula por el interior de la rotonda.',
        ejemplo: 'Al entrar en una rotonda, aunque vengas con cierta velocidad, debes cederle el paso al que ya está girando dentro.',
        trampa: 'Quien va a ENTRAR en la rotonda NO tiene prioridad; la tiene quien ya circula por dentro.'
      },
      {
        titulo: 'Carriles de aceleración y deceleración',
        explicacion: 'El carril de aceleración permite alcanzar la velocidad adecuada antes de incorporarse al tráfico de la vía principal; el de deceleración permite reducir la velocidad antes de salir de ella.',
        ejemplo: 'Al entrar en una autovía desde una incorporación, usas el carril de aceleración para igualar tu velocidad a la del tráfico antes de fusionarte.',
        trampa: 'El carril de aceleración no es para circular de forma indefinida: es solo para incorporarse adaptando la velocidad.'
      }
    ],
    preguntas: [
      { id: 't4-1', pregunta: '¿Cuál debe ser su comportamiento al ceder el paso a otro vehículo?', opciones: ['Detenerse siempre que se aproxime algún vehículo', 'Parar y comprobar si otro usuario tiene prioridad sobre usted', 'No obligar al vehículo prioritario a modificar bruscamente su trayectoria o velocidad'], correcta: 2, explicacion: 'Ceder el paso significa no obligar al vehículo prioritario a modificar bruscamente su trayectoria ni su velocidad; no implica necesariamente detenerse.' },
      { id: 't4-2', pregunta: 'En zona de obras, un operario le indica que detenga su vehículo. ¿Está obligado a obedecer?', opciones: ['No, solo los agentes autorizados pueden regular el tráfico', 'No, el personal de obras solo puede advertir de peligros pero no regular el tráfico', 'Sí, en ausencia de agentes, el personal de obras puede regular la circulación'], correcta: 2, explicacion: 'En zonas de obras, a falta de agentes de circulación, el personal encargado de las obras puede regular el tráfico y sus indicaciones son obligatorias.' },
      { id: 't4-3', pregunta: 'En una intersección no señalizada, ¿qué vehículos tienen prioridad sobre los demás usuarios?', opciones: ['Los que circulan sobre raíles (tranvías)', 'Los trenes, pero no los tranvías', 'Los que tengan el vehículo que viene por su izquierda'], correcta: 0, explicacion: 'Los vehículos que circulan sobre raíles (tranvías) tienen prioridad en las intersecciones sobre los demás vehículos.' },
      { id: 't4-4', pregunta: 'Un conductor que gira para entrar en otra vía, ¿debe ceder el paso a un peatón que esté cruzándola?', opciones: ['Solo cuando exista un paso de peatones señalizado', 'Sí, aunque no haya paso señalizado', 'No, tiene prioridad por llevar el semáforo en verde'], correcta: 1, explicacion: 'El conductor que gira para entrar en otra vía debe ceder el paso a los peatones que estén cruzándola, con o sin paso señalizado.' },
      { id: 't4-5', pregunta: 'Los conductores de vehículos prioritarios en servicio urgente...', opciones: ['Procurarán no vulnerar la prioridad de paso en las intersecciones innecesariamente', 'Están exentos de cumplir cualquier norma de circulación', 'Obedecerán los semáforos en todo caso como el resto de conductores'], correcta: 0, explicacion: 'Aunque los vehículos prioritarios pueden incumplir normas en urgencias, deben hacerlo con precaución y procurando no crear nuevos peligros.' },
      { id: 't4-6', pregunta: 'En tramos de gran pendiente sin señalización expresa, ¿quién tiene preferencia?', opciones: ['El vehículo que sube, en todo caso', 'El vehículo que sube, salvo si puede llegar antes a un apartadero o ensanchamiento', 'El vehículo que baja, salvo si puede llegar antes a un apartadero o ensanchamiento'], correcta: 1, explicacion: 'En pendientes sin señalizar tiene prioridad el vehículo que sube; el que baja debe retroceder al apartadero si puede alcanzarlo antes.' },
      { id: 't4-7', pregunta: 'En un cruce con semáforo en verde para usted, ¿cuándo puede continuar?', opciones: ['Siempre; el semáforo en verde le otorga preferencia total', 'Cediendo el paso a los vehículos que vengan por la derecha', 'Solo cuando pueda atravesar el cruce sin bloquear la intersección'], correcta: 2, explicacion: 'El verde permite avanzar pero no obliga a entrar si no se puede salir del cruce; bloquear la intersección está prohibido.' },
      { id: 't4-8', pregunta: '¿Cuándo puede realizar un cambio de sentido en una autopista?', opciones: ['Cuando el tramo esté libre de tráfico en ese momento', 'Activando las luces de emergencia para avisar a otros conductores', 'Solo en los lugares expresamente habilitados para ello'], correcta: 2, explicacion: 'El cambio de sentido en autopistas está prohibido con carácter general; únicamente está permitido en los lugares señalizados al efecto.' }
    ]
  },
  5: {
    id: 5, titulo: 'Velocidades Máximas y Mínimas',
    conceptos: [
      {
        titulo: 'Límites genéricos para turismos',
        explicacion: 'Autopista/autovía: 120 km/h. Vía convencional con arcén pavimentado de 1,5 m o más: 100 km/h (90 km/h si no lo tiene). En vías urbanas (tras la reforma de 2021): calles de un solo carril sin acera diferenciada 20 km/h, calles de un solo carril con acera diferenciada 30 km/h, vías de dos o más carriles por sentido 50 km/h.',
        ejemplo: 'En una calle estrecha de un pueblo donde acera y calzada están al mismo nivel (plataforma única), el límite es 20 km/h, aunque no haya señal expresa.',
        trampa: 'No todas las calles urbanas son "50 km/h": desde la reforma de 2021 muchas calles de un solo carril están limitadas a 20 o 30 km/h por defecto.'
      },
      {
        titulo: 'Velocidad mínima',
        explicacion: 'En autopistas y autovías existe una velocidad mínima (con carácter general 60 km/h, salvo señalización distinta) para no entorpecer la circulación normal.',
        ejemplo: 'Circular a 40 km/h en una autovía sin justificación puede ser tan sancionable como circular demasiado rápido.',
        trampa: 'Pensar que en autovías "no hay límite mínimo" es un error: existe, para evitar entorpecer al resto de la circulación.'
      },
      {
        titulo: 'Reducción para conductores noveles',
        explicacion: 'Los conductores noveles (menos de un año de carné) no pueden superar los 80 km/h en vías donde el límite genérico sea superior a esa cifra (p. ej. autovías a 120 o 100).',
        ejemplo: 'Un conductor con el carné recién obtenido que circula por una autovía limitada a 120 km/h, como mucho puede ir a 80 km/h.',
        trampa: 'Si el límite de la vía ya es igual o inferior a 80 km/h, NO se aplica ninguna reducción adicional al novel.'
      }
    ],
    preguntas: [
      { id: 't5-1', pregunta: 'Al circular a mayor velocidad...', opciones: ['Se perciben peor las señales de tráfico y los obstáculos de la vía', 'Se perciben mejor porque hay más tiempo para reaccionar', 'Se puede ver y analizar mejor lo que ocurre en la vía'], correcta: 0, explicacion: 'A mayor velocidad, el campo visual se estrecha y se perciben peor las señales y los obstáculos, aumentando el riesgo.' },
      { id: 't5-2', pregunta: 'Como norma general en una autovía, ¿está permitido circular a 50 km/h?', opciones: ['No, como mínimo hay que circular a 100 km/h para no obstaculizar', 'No, como mínimo hay que circular a 60 km/h en condiciones normales', 'Sí, ya que 60 km/h es la velocidad mínima y 50 km/h no se permite'], correcta: 1, explicacion: 'En autopistas y autovías la velocidad mínima es de 60 km/h en condiciones normales; circular a 50 km/h supone un riesgo para otros y es sancionable.' },
      { id: 't5-3', pregunta: 'El conductor que acaba de obtener su primer permiso de conducir B, ¿a qué velocidad máxima le está permitido circular?', opciones: ['A la misma que el resto de conductores en cualquier vía', 'A un máximo de 80 km/h en vías cuyo límite genérico supere esa cifra, durante los dos primeros años', 'A 90 km/h el primer año y 100 km/h el segundo'], correcta: 1, explicacion: 'Los conductores noveles (permiso con menos de 2 años) tienen una limitación de 80 km/h en vías donde el límite genérico sea superior.' },
      { id: 't5-4', pregunta: 'Circular por debajo de la velocidad mínima permitida, ¿podría ser un factor de riesgo?', opciones: ['No, nunca; ir más despacio siempre es más seguro', 'No, siempre se considera una velocidad adecuada o prudente', 'Sí, una velocidad anormalmente reducida puede provocar situaciones peligrosas'], correcta: 2, explicacion: 'Circular a velocidad anormalmente baja puede sorprender a otros conductores y provocar alcances o maniobras peligrosas.' },
      { id: 't5-5', pregunta: '¿Cuál es la velocidad máxima permitida para un turismo en una travesía (tramo urbano de carretera)?', opciones: ['90 km/h', '50 km/h', '45 km/h'], correcta: 1, explicacion: 'En las travesías, el límite máximo es el propio de las vías urbanas: 50 km/h, salvo señalización específica distinta.' },
      { id: 't5-6', pregunta: 'La velocidad máxima en travesías y vías urbanas es de 50 km/h. ¿Puede establecerse una velocidad inferior?', opciones: ['No, el límite de 50 km/h es mínimo e inamovible en vías urbanas', 'Sí, mediante señalización expresa puede reducirse', 'En vías urbanas sí, pero en travesías no'], correcta: 1, explicacion: 'El límite de 50 km/h (o 30/20 km/h según el tipo de vía) es un máximo genérico; mediante señales puede rebajarse más.' },
      { id: 't5-7', pregunta: 'Circular por una autovía a 120 km/h con lluvia intensa es una velocidad...', opciones: ['Inadecuada, porque las condiciones adversas exigen reducir la velocidad', 'Adecuada, porque está dentro del límite máximo establecido', 'De diseño, la autovía está construida para soportarla en cualquier condición'], correcta: 0, explicacion: 'El límite máximo es el que nunca puede superarse, pero debe adaptarse a las condiciones; con lluvia intensa, 120 km/h es excesivo.' },
      { id: 't5-8', pregunta: 'En una autovía dentro de poblado sin señalización específica de velocidad, ¿a qué velocidad máxima puede circular un turismo?', opciones: ['120 km/h', '100 km/h', '80 km/h'], correcta: 2, explicacion: 'En tramos de autovía situados dentro de poblado, el límite genérico se reduce a 80 km/h salvo señal que indique otro valor.' }
    ]
  },
  6: {
    id: 6, titulo: 'Distancias de Seguridad',
    conceptos: [
      {
        titulo: 'Regla de los 2 segundos',
        explicacion: 'Para mantener la distancia de seguridad con el vehículo de delante en seco, se recomienda dejar al menos 2 segundos de margen; en mojado o con poca visibilidad, hay que aumentarlo a 3 o 4 segundos.',
        ejemplo: 'Fíjate en una señal fija; cuando el coche de delante la pasa, cuenta "un segundo, dos segundos"; si llegas tú antes de terminar la cuenta, vas demasiado pegado.',
        trampa: 'La distancia de seguridad NO depende solo de la velocidad: también del firme, los neumáticos, la carga y el estado del conductor.'
      },
      {
        titulo: 'Distancia lateral al adelantar a ciclistas',
        explicacion: 'Al adelantar a un ciclista en vía convencional, se debe dejar una separación lateral mínima de 1,5 metros, invadiendo el carril contrario si es necesario y seguro hacerlo.',
        ejemplo: 'Adelantar a un ciclista "rozándolo" sin dejar margen lateral es tan peligroso como ir demasiado pegado por detrás a otro coche.',
        trampa: 'No basta con "no tocar" al ciclista: la norma exige una distancia lateral mínima concreta, no una simple ausencia de contacto.'
      },
      {
        titulo: 'Distancia de detención',
        explicacion: 'La distancia de detención es la suma de la distancia de reacción (lo que recorre el vehículo mientras el conductor reacciona) más la distancia de frenado (lo que recorre desde que se pisa el freno hasta detenerse).',
        ejemplo: 'Si vas distraído un instante, ese tiempo de reacción añade metros recorridos antes incluso de empezar a frenar.',
        trampa: 'Si la velocidad se duplica, la distancia de frenado NO se duplica: se multiplica aproximadamente por cuatro.'
      }
    ],
    preguntas: [
      { id: 't6-1', pregunta: '¿Qué factores pueden hacer que aumente la distancia de reacción del conductor?', opciones: ['El mal estado del vehículo (frenos o neumáticos)', 'El mal estado de la calzada (baches, agua)', 'El mal estado del conductor (fatiga, alcohol, distracciones)'], correcta: 2, explicacion: 'La distancia de reacción depende del tiempo que tarda el conductor en reaccionar; el cansancio, el alcohol y las distracciones la aumentan.' },
      { id: 't6-2', pregunta: 'Si el conductor se encuentra mal (enfermo, cansado), la distancia de detención...', opciones: ['No se ve afectada, ya que depende solo del vehículo', 'Disminuye porque el conductor presta más atención', 'Aumenta, porque el tiempo de reacción es mayor'], correcta: 2, explicacion: 'El mal estado del conductor alarga el tiempo de reacción y, por tanto, la distancia total de detención aumenta.' },
      { id: 't6-3', pregunta: '¿Cómo debe ser la distancia de detención de tu vehículo respecto a la distancia que te separa del vehículo de delante?', opciones: ['Mayor que la distancia al vehículo precedente', 'Menor que la distancia al vehículo precedente', 'Igual a la distancia al vehículo precedente'], correcta: 1, explicacion: 'Para poder detenerse antes de alcanzar al vehículo de delante, la distancia de detención debe ser menor que la distancia que los separa.' },
      { id: 't6-4', pregunta: '¿Qué vehículos deben guardar una distancia mínima de 50 metros entre sí en vías interurbanas?', opciones: ['Los vehículos de más de 7 metros de longitud', 'Los camiones y vehículos articulados de más de 3.500 kg de MMA', 'Los camiones de menos de 3.500 kg de MMA'], correcta: 1, explicacion: 'Los vehículos de transporte de mercancías y personas de más de 3.500 kg de MMA deben mantener entre sí una distancia mínima de 50 metros en vías interurbanas.' },
      { id: 't6-5', pregunta: 'La distancia de detención de un vehículo depende de...', opciones: ['Solo de la velocidad del vehículo en ese momento', 'La velocidad, el tiempo de reacción, el estado de frenos, neumáticos y firme', 'Solo del estado de los frenos y neumáticos del vehículo'], correcta: 1, explicacion: 'La distancia total de detención combina la distancia de reacción (velocidad × tiempo de reacción) y la de frenado (influida por frenos, neumáticos y firme).' },
      { id: 't6-6', pregunta: 'Si la velocidad se duplica, la distancia de frenado...', opciones: ['Se duplica también', 'Se multiplica aproximadamente por cuatro', 'Permanece igual porque los frenos son los mismos'], correcta: 1, explicacion: 'La distancia de frenado es proporcional al cuadrado de la velocidad; al doblar la velocidad, la distancia de frenado se cuadruplica.' },
      { id: 't6-7', pregunta: '¿Cuál es la separación lateral mínima que debe dejar al adelantar a un ciclista?', opciones: ['0,5 metros', '1 metro', '1,5 metros'], correcta: 2, explicacion: 'Al adelantar a un ciclista es obligatorio dejar una separación lateral mínima de 1,5 metros, pudiendo invadir el carril contrario si es necesario y seguro.' },
      { id: 't6-8', pregunta: 'A 120 km/h, ¿cuántos metros aproximados recorre el vehículo durante el tiempo de reacción de 1 segundo?', opciones: ['Unos 17 metros', 'Unos 33 metros', 'Unos 50 metros'], correcta: 1, explicacion: 'A 120 km/h se recorren aproximadamente 33 metros por segundo; ese trecho se recorre antes de siquiera empezar a frenar.' }
    ]
  },
  7: {
    id: 7, titulo: 'Prioridades de Paso',
    conceptos: [
      {
        titulo: 'Regla general de la derecha',
        explicacion: 'En cruces sin ninguna señalización, tiene prioridad el vehículo que circula por la derecha.',
        ejemplo: 'Dos calles de un pueblo se cruzan sin señales de ningún tipo: el que viene por tu derecha pasa primero.',
        trampa: 'Si el cruce tiene señalización (STOP, Ceda el Paso, semáforo), la regla de la derecha NO se aplica: manda la señalización.'
      },
      {
        titulo: 'Pasos estrechos',
        explicacion: 'En un paso estrecho donde solo puede circular un vehículo (puente de un solo carril, calzada angosta), tiene prioridad el vehículo que ya esté circulando por él o el que indique la señalización.',
        ejemplo: 'Si ya estás cruzando un puente de un solo carril, el coche que llega por el otro lado debe esperar a que termines.',
        trampa: 'No es "quien llega primero al inicio" quien decide siempre, sino quien indique la señal o quien ya esté dentro del paso.'
      },
      {
        titulo: 'Vehículos prioritarios',
        explicacion: 'Los vehículos de emergencia con señales luminosas y acústicas activadas tienen prioridad de paso. Hay que facilitarles la circulación, pero ellos también deben actuar con precaución, sin saltarse las normas de forma temeraria.',
        ejemplo: 'Al oír una ambulancia con sirena, debes apartarte con precaución, aunque tengas el semáforo en verde para ti.',
        trampa: 'Un vehículo prioritario NO puede incumplir cualquier norma sin precaución: sigue obligado a circular con cuidado para no crear peligro.'
      }
    ],
    preguntas: [
      { id: 't7-1', pregunta: '¿Cuál debe ser su comportamiento al ceder el paso?', opciones: ['Detenerse siempre que se aproxime algún vehículo al cruce', 'Parar y comprobar si otro usuario tiene prioridad sobre usted', 'No obligar al vehículo prioritario a modificar bruscamente su trayectoria ni velocidad'], correcta: 2, explicacion: 'Ceder el paso significa no forzar al vehículo prioritario a frenar o esquivar; no siempre implica detenerse por completo.' },
      { id: 't7-2', pregunta: 'En una intersección sin señalización expresa, la norma general de preferencia de paso es...', opciones: ['Ceder el paso a los vehículos que vienen por la derecha', 'Ceder el paso a los que vienen por la izquierda', 'Ceder el paso a los que circulan más rápido y a los peatones'], correcta: 0, explicacion: 'La regla general en intersecciones sin señalizar es que tiene prioridad el vehículo que viene por la derecha.' },
      { id: 't7-3', pregunta: 'El conductor que se aproxime a una intersección sin señales está obligado a ceder el paso...', opciones: ['Solo a los usuarios que se aproximen por su derecha', 'Solo a los vehículos de mayor tamaño que se aproximen por su derecha', 'A todos los vehículos que circulen por la vía transversal que venga por su derecha'], correcta: 0, explicacion: 'La norma obliga a ceder el paso a los que vengan por la derecha; a los de la izquierda le corresponde a ellos cederte el paso.' },
      { id: 't7-4', pregunta: 'Un vehículo que sale de una vía sin pavimentar (camino de tierra), ¿a qué vehículos debe ceder el paso?', opciones: ['Solo a los que vienen por su izquierda', 'Solo a los que vienen por su derecha', 'A todos los que circulen por la vía pavimentada, vengan de donde vengan'], correcta: 2, explicacion: 'Al salir de una vía sin pavimentar o de servicio, se debe ceder el paso a todos los vehículos de la vía principal pavimentada.' },
      { id: 't7-5', pregunta: 'En un paso para ciclistas señalizado, ¿tienen éstos prioridad sobre otros vehículos?', opciones: ['No, deben ceder el paso igual que los peatones fuera del paso', 'Sí, los ciclistas tienen prioridad en los pasos señalizados', 'Sí, pero solo si vienen por la derecha del conductor'], correcta: 1, explicacion: 'En los pasos para ciclistas debidamente señalizados, los ciclistas tienen prioridad sobre los vehículos que circulan por la calzada.' },
      { id: 't7-6', pregunta: 'Un conductor que gira para entrar en otra vía, ¿debe ceder el paso a un peatón que esté cruzándola?', opciones: ['Solo cuando exista un paso de peatones señalizado', 'Sí, aunque no haya paso señalizado', 'No, el semáforo en verde le da prioridad total'], correcta: 1, explicacion: 'El conductor que gira para entrar en otra vía debe ceder el paso a los peatones que estén cruzándola, exista o no paso señalizado.' },
      { id: 't7-7', pregunta: '¿Tienen prioridad de paso los vehículos prioritarios?', opciones: ['No, deben respetar las mismas normas de prioridad que los demás', 'Sí, siempre y en cualquier circunstancia', 'Solo cuando circulen en servicio de urgencia con señales acústicas y luminosas activadas'], correcta: 2, explicacion: 'Los vehículos prioritarios (ambulancias, policía, bomberos) solo tienen prioridad de paso cuando circulan en servicio de urgencia con las señales correspondientes activadas.' },
      { id: 't7-8', pregunta: '¿Está permitido que los vehículos prioritarios en servicio de urgencia utilicen únicamente la señal luminosa sin la acústica?', opciones: ['No, deben usar simultáneamente la señal luminosa y la acústica', 'Sí, cuando no suponga peligro para los demás usuarios', 'Sí, pero solo en vías urbanas con poco tráfico'], correcta: 0, explicacion: 'Para que los vehículos prioritarios tengan prioridad de paso, deben usar simultáneamente la señal luminosa y la acústica.' }
    ]
  },
  8: {
    id: 8, titulo: 'Maniobras, Giros e Incorporaciones',
    conceptos: [
      {
        titulo: 'Señalizar y comprobar antes de maniobrar',
        explicacion: 'Antes de cualquier maniobra (girar, cambiar de carril, adelantar) hay que señalizarla con antelación y comprobar los retrovisores y el punto ciego.',
        ejemplo: 'Antes de cambiar de carril en autovía, miras el retrovisor, pones el intermitente con antelación y giras la cabeza para comprobar el ángulo muerto.',
        trampa: 'Poner el intermitente justo en el momento de girar, sin antelación ni comprobación previa, no es señalizar correctamente.'
      },
      {
        titulo: 'Punto ciego o ángulo muerto',
        explicacion: 'Es la zona que no se ve por los retrovisores y que obliga a girar la cabeza para comprobarla, especialmente importante con camiones y autobuses.',
        ejemplo: 'Una moto puede "desaparecer" del retrovisor lateral justo antes de que decidas cambiar de carril: por eso hay que mirar también por encima del hombro.',
        trampa: 'Confiar solo en el retrovisor para cambiar de carril es un error: hay zonas que el espejo no cubre.'
      },
      {
        titulo: 'Giro a la izquierda en doble sentido',
        explicacion: 'Para girar a la izquierda en una calzada de doble sentido, hay que situarse lo más próximo posible al centro de la calzada (o al carril izquierdo si existe) antes de iniciar el giro.',
        ejemplo: 'Antes de girar a la izquierda para entrar a un camino, te colocas pegado a la línea central, dejando sitio a tu derecha para los que circulan rectos.',
        trampa: 'Girar a la izquierda desde el carril derecho, sin haberte colocado antes en el centro, puede sorprender y poner en peligro a otros conductores.'
      }
    ],
    preguntas: [
      { id: 't8-1', pregunta: 'Al realizar una maniobra que requiere desplazamiento lateral, ¿cómo debe señalizarse?', opciones: ['Solo con el brazo extendido hacia el lado del desplazamiento', 'Solo con los indicadores de dirección (intermitentes)', 'Con los indicadores de dirección hasta adoptar la nueva trayectoria, o con el brazo si los indicadores fallan'], correcta: 2, explicacion: 'Los desplazamientos laterales deben señalizarse con los indicadores; el brazo es sustituto válido si los indicadores no funcionan.' },
      { id: 't8-2', pregunta: '¿Cuándo debe apagar el indicador de dirección al desplazarse lateralmente para adelantar?', opciones: ['Al haber adelantado y antes de regresar al carril de la derecha', 'Cuando haya terminado el desplazamiento lateral hacia el carril de adelantamiento', 'Cuando vuelva al carril derecho tras completar el adelantamiento'], correcta: 1, explicacion: 'El indicador izquierdo se apaga una vez terminado el desplazamiento al carril de adelantamiento; luego se pondrá el derecho al regresar.' },
      { id: 't8-3', pregunta: 'El turismo blanco circula por su carril; el rojo quiere incorporarse desde la derecha. ¿Tiene alguna obligación el blanco?', opciones: ['Sí, deberá detenerse completamente para que el rojo pueda incorporarse', 'Sí, deberá facilitar en la medida de lo posible la incorporación del rojo', 'No tiene ninguna obligación; el rojo debe ceder el paso al blanco'], correcta: 1, explicacion: 'Aunque el que se incorpora debe ceder el paso, el conductor que ya circula debe facilitar la incorporación en la medida que pueda hacerlo con seguridad.' },
      { id: 't8-4', pregunta: 'Al incorporarse a una autovía, los conductores deberán...', opciones: ['Detenerse siempre al final del carril de aceleración antes de entrar', 'Tener en cuenta la posición, trayectoria y velocidad de los vehículos próximos para incorporarse con seguridad', 'Aumentar la velocidad para incorporarse rápidamente sin necesidad de ceder el paso'], correcta: 1, explicacion: 'La incorporación a una autovía requiere observar el tráfico existente y adaptar la velocidad, cediendo el paso al tráfico ya circulante.' },
      { id: 't8-5', pregunta: 'Un turismo sale de una gasolinera para incorporarse a la carretera. ¿Cuándo debe ceder el paso?', opciones: ['Solo cuando se incorpora por la izquierda cruzando el sentido contrario', 'Solo cuando se incorpora por la derecha desde el arcén', 'Tanto si se incorpora por la derecha como por la izquierda'], correcta: 2, explicacion: 'Al incorporarse desde una propiedad privada (gasolinera, garaje) a la vía pública, se debe ceder el paso en todos los casos.' },
      { id: 't8-6', pregunta: 'Si va a realizar un nuevo adelantamiento inmediato, ¿puede continuar en el carril izquierdo?', opciones: ['Sí, siempre que no obstaculice a vehículos más rápidos que vienen por detrás', 'Sí, si va a la velocidad máxima permitida en ese momento', 'No, debe volver obligatoriamente al carril de la derecha entre adelantamientos'], correcta: 0, explicacion: 'Si inmediatamente va a adelantar a otro vehículo, puede permanecer en el carril izquierdo siempre que no obstaculice a los que vienen detrás.' },
      { id: 't8-7', pregunta: 'Antes de girar a la izquierda en una calzada de doble sentido, ¿dónde debe situarse el vehículo?', opciones: ['A la derecha de su carril para facilitar el giro', 'Lo más próximo posible al eje central de la calzada', 'En el arcén izquierdo si existe'], correcta: 1, explicacion: 'Para girar a la izquierda en una calzada de doble sentido, el vehículo debe colocarse junto al eje central antes de iniciar el giro.' },
      { id: 't8-8', pregunta: 'En una vía interurbana, ¿está el vehículo obligado a apartarse al arcén para facilitar el adelantamiento?', opciones: ['No, ninguna norma obliga a circular por el arcén para ser adelantado', 'Sí, cuando el que adelanta es un camión que circula a menos de 70 km/h', 'Sí, cuando el vehículo adelantado es un vehículo pesado'], correcta: 0, explicacion: 'Ninguna norma obliga al vehículo adelantado a circular por el arcén; debe mantenerse en su carril y no obstaculizar, pero el arcén no es un carril de circulación.' }
    ]
  },
  9: {
    id: 9, titulo: 'Adelantamientos',
    conceptos: [
      {
        titulo: 'Comprobaciones antes de adelantar',
        explicacion: 'Antes de adelantar hay que comprobar que el carril contrario está libre, que hay distancia suficiente para completar la maniobra, que ninguna señal o marca lo prohíbe, y que el vehículo a adelantar no ha indicado que va a girar o adelantar él mismo.',
        ejemplo: 'Ves el carril contrario libre, pero el coche de delante lleva puesto el intermitente izquierdo: no debes iniciar el adelantamiento por ese lado.',
        trampa: 'Que el carril contrario esté libre en ese instante no basta: hay que calcular si hay distancia suficiente para completar la maniobra antes de que llegue otro vehículo.'
      },
      {
        titulo: 'Prohibiciones de adelantamiento',
        explicacion: 'Está prohibido adelantar en curvas y cambios de rasante sin visibilidad, en pasos de peatones, pasos a nivel, intersecciones (salvo excepciones señalizadas) y cuando exista línea continua.',
        ejemplo: 'En la cima de una loma sin ver qué hay al otro lado, aunque parezca que no viene nadie, adelantar está prohibido.',
        trampa: 'No ver ningún coche de frente en una curva sin visibilidad no convierte el adelantamiento en legal: sigue prohibido por falta de visibilidad suficiente.'
      },
      {
        titulo: 'Volver al carril tras adelantar',
        explicacion: 'Tras completar el adelantamiento, hay que volver al carril original en cuanto sea posible, sin entorpecer al vehículo adelantado, manteniendo la distancia de seguridad.',
        ejemplo: 'Una vez has pasado al otro coche con margen suficiente, te incorporas de nuevo a tu carril, no te quedas indefinidamente en el carril de adelantamiento.',
        trampa: 'Permanecer en el carril izquierdo "porque sí" después de adelantar también es una infracción.'
      }
    ],
    preguntas: [
      { id: 't9-1', pregunta: 'Como norma general, ¿está permitido adelantar en los pasos para peatones?', opciones: ['Sí, si no hay peatones cruzando en ese momento', 'No, está prohibido adelantar en los pasos para peatones', 'No, aunque podría hacerse a velocidad muy reducida que permita detenerse si hay peligro'], correcta: 1, explicacion: 'Está prohibido adelantar en los pasos para peatones, independientemente de que haya o no peatones cruzando.' },
      { id: 't9-2', pregunta: '¿Está prohibido adelantar en los pasos a nivel o en sus proximidades?', opciones: ['No, puede adelantarse si se hace con rapidez', 'Sí, está prohibido en los pasos a nivel y en sus proximidades', 'En los pasos a nivel sí, pero no en sus proximidades inmediatas'], correcta: 1, explicacion: 'Adelantar está prohibido tanto en los pasos a nivel como en sus proximidades, dado el peligro que supone quedar cruzado con un tren.' },
      { id: 't9-3', pregunta: 'En las glorietas (rotondas), ¿está prohibido adelantar?', opciones: ['Sí, solo en vías interurbanas donde hay más velocidad', 'Sí, está prohibido adelantar en las glorietas', 'No, puede adelantarse si hay visibilidad suficiente'], correcta: 1, explicacion: 'Las glorietas son intersecciones y en ellas está prohibido adelantar.' },
      { id: 't9-4', pregunta: '¿Está permitido adelantar en una curva o cambio de rasante de visibilidad reducida?', opciones: ['Sí, moderando la velocidad al máximo', 'No, en ningún caso, ya que la visibilidad reducida lo prohíbe', 'No, salvo si los dos sentidos están delimitados por línea continua y no se invade el contrario'], correcta: 1, explicacion: 'En curvas y cambios de rasante con visibilidad reducida está prohibido adelantar, sea cual sea la velocidad.' },
      { id: 't9-5', pregunta: 'Si el vehículo de delante ha encendido el intermitente izquierdo para adelantar, ¿quién tiene prioridad para adelantar?', opciones: ['El que circule a mayor velocidad en ese instante', 'El que inicie antes el desplazamiento lateral independientemente del intermitente', 'El conductor que ya ha encendido el intermitente y va a iniciar el adelantamiento'], correcta: 2, explicacion: 'El conductor que ya ha señalizado su intención de adelantar tiene prioridad; no se debe iniciar otro adelantamiento por ese lado.' },
      { id: 't9-6', pregunta: 'Adelantar a varios vehículos a la vez, ¿está permitido?', opciones: ['Sí, cuando puede volver a la derecha sin peligro aunque encontrase vehículos en sentido contrario', 'Sí, solo cuando los vehículos a adelantar circulan muy por debajo del límite de velocidad', 'No, siempre está prohibido adelantar a más de un vehículo a la vez'], correcta: 0, explicacion: 'Puede adelantarse a varios vehículos simultáneamente siempre que pueda retornar al carril derecho con seguridad en cualquier momento de la maniobra.' },
      { id: 't9-7', pregunta: 'Al adelantar a un ciclista, ¿se permite invadir el carril de sentido contrario?', opciones: ['No, está prohibido adelantar a los ciclistas invadiendo el sentido contrario', 'No, en ningún caso puede invadirse el sentido contrario', 'Sí, se permite invadir el sentido contrario para garantizar la distancia de 1,5 metros'], correcta: 2, explicacion: 'Para adelantar a un ciclista con la separación mínima de 1,5 metros, el RGC permite invadir el sentido contrario si no viene tráfico.' },
      { id: 't9-8', pregunta: 'Durante un adelantamiento, si ve que no puede completarlo, ¿qué está obligado a hacer?', opciones: ['Terminar el adelantamiento lo antes posible aumentando la velocidad', 'Frenar bruscamente y quedarse en el carril contrario hasta que pueda volver', 'Desistir, reduciendo la marcha rápidamente y regresando a su carril de forma segura'], correcta: 2, explicacion: 'Si no puede completar el adelantamiento, debe desistir reduciendo velocidad y retornando a su carril sin poner en peligro a nadie.' }
    ]
  },
  10: {
    id: 10, titulo: 'Parada, Estacionamiento y Detención',
    conceptos: [
      {
        titulo: 'Parada vs. estacionamiento vs. detención',
        explicacion: 'La "parada" es una inmovilización de hasta 2 minutos sin que el conductor abandone el vehículo. El "estacionamiento" es una inmovilización de más de 2 minutos o con abandono del vehículo. La "detención" es una inmovilización forzada por las circunstancias del tráfico (un semáforo, un atasco), no voluntaria.',
        ejemplo: 'Detenerte 1 minuto para que suba un pasajero es una parada; dejar el coche 10 minutos para entrar a una tienda es estacionamiento.',
        trampa: 'Si abandonas el vehículo, aunque sea menos de 2 minutos, ya se considera estacionamiento, no parada.'
      },
      {
        titulo: 'Lugares prohibidos para parar y estacionar',
        explicacion: 'Está prohibido parar y estacionar en pasos de peatones, carriles bus, curvas y cambios de rasante con visibilidad reducida, intersecciones y sus proximidades, y sobre las aceras.',
        ejemplo: 'Aparcar "un momento" sobre un paso de peatones para hacer un recado está prohibido, aunque sea breve.',
        trampa: 'La brevedad no justifica estacionar en estos lugares: la prohibición aplica independientemente del tiempo que dure.'
      },
      {
        titulo: 'Doble fila y zona regulada',
        explicacion: 'Estacionar en doble fila está prohibido salvo que esté expresamente señalizado o autorizado. En zonas de estacionamiento regulado (zona azul/verde) hay que obtener el ticket o usar la app correspondiente y respetar el tiempo máximo.',
        ejemplo: 'Dejar el coche en doble fila "solo un minuto" para bajar una bolsa también está prohibido si no hay autorización expresa.',
        trampa: 'Creer que la doble fila está permitida durante "un momento" sin restricción es un error frecuente.'
      }
    ],
    preguntas: [
      { id: 't10-1', pregunta: 'Una vez inmovilizado el vehículo, los ocupantes deberán entrar o salir...', opciones: ['Siempre por el lado del conductor para mayor seguridad', 'Por cualquier lado, según les resulte más cómodo', 'Como norma general, por el lado más próximo a la acera o arcén'], correcta: 2, explicacion: 'Los ocupantes deben salir por el lado de la acera o arcén para evitar ponerse en peligro al bajar al carril de circulación.' },
      { id: 't10-2', pregunta: 'Si queda detenido en el interior de un túnel por más de dos minutos sin peligro inmediato, ¿qué debe hacer?', opciones: ['Apagar el motor', 'Apagar el motor y las luces de posición', 'Encender solo la luz de emergencia (warning)'], correcta: 0, explicacion: 'En caso de detención prolongada en un túnel, se debe apagar el motor para reducir la contaminación y el riesgo de incendio.' },
      { id: 't10-3', pregunta: 'Cuando en un túnel se produce una detención de emergencia, es obligatorio...', opciones: ['Dejar el motor encendido y la llave puesta para poder mover el vehículo rápidamente', 'Que todos los ocupantes permanezcan en el vehículo con el cinturón abrochado', 'Apagar el motor, conectar la señal de emergencia y mantener las luces de posición encendidas'], correcta: 2, explicacion: 'En una parada de emergencia en túnel: motor apagado, warning encendido y luces de posición para señalizar el vehículo parado.' },
      { id: 't10-4', pregunta: 'Si queda detenido en un túnel y se produce un incendio, ¿qué debe hacer?', opciones: ['Apartar el vehículo a la derecha, apagar el motor y dirigirse a pie a la salida de emergencia más próxima', 'Esperar dentro del vehículo a los servicios de emergencia', 'Dar marcha atrás hasta el inicio del túnel'], correcta: 0, explicacion: 'Ante un incendio en túnel: apartar a la derecha, apagar el motor, salir del vehículo y dirigirse a la salida de emergencia más próxima.' },
      { id: 't10-5', pregunta: 'En una curva de visibilidad reducida, ¿está permitido parar o estacionar?', opciones: ['No, está prohibido parar y estacionar en curvas con visibilidad reducida', 'Sí, si no hay señal que lo prohíba expresamente', 'Sí, siempre que no comprometa la seguridad según el criterio del conductor'], correcta: 0, explicacion: 'Las curvas con visibilidad reducida son uno de los lugares donde expresamente está prohibido parar y estacionar.' },
      { id: 't10-6', pregunta: 'En el borde izquierdo de una calzada de doble sentido, ¿se puede parar con carácter general?', opciones: ['Sí, si no obstaculiza la circulación ni compromete la seguridad', 'Sí, en vías urbanas de sentido único', 'No, en ningún caso; la parada se realiza en el borde derecho'], correcta: 1, explicacion: 'La parada y estacionamiento se realizan en el borde derecho de la calzada; en vías de sentido único también se permite en el borde izquierdo.' },
      { id: 't10-7', pregunta: '¿Está permitido estacionar en doble fila?', opciones: ['No, en ningún caso; la doble fila está prohibida', 'Sí, cuando no hay ningún espacio libre disponible', 'Sí, cuando dura menos de 2 minutos y el conductor permanece al volante'], correcta: 0, explicacion: 'Estacionar en doble fila está prohibido; no existe excepción por brevedad ni por permanencia del conductor.' },
      { id: 't10-8', pregunta: '¿Dónde debe estacionar en caso de emergencia en una autopista?', opciones: ['No se puede estacionar en ningún caso en una autopista', 'En el arcén derecho pero sin salir completamente de la calzada', 'En los lugares señalizados para ello; el arcén es solo para emergencias puntuales'], correcta: 2, explicacion: 'El estacionamiento en autopistas solo está permitido en áreas de servicio u otros lugares expresamente señalizados; el arcén es solo para paradas de emergencia.' }
    ]
  },
  11: {
    id: 11, titulo: 'Alumbrado y Luces',
    conceptos: [
      {
        titulo: 'Luces de cruce y de carretera',
        explicacion: 'Las luces de cruce son obligatorias de noche, en túneles y con escasa visibilidad. Las luces de carretera (largas) solo pueden usarse fuera de poblado cuando no se deslumbre a otros conductores.',
        ejemplo: 'Si ves los faros de otro coche acercándose de frente, debes cambiar de largas a cortas antes de que te deslumbre.',
        trampa: 'Usar las luces largas "porque no hay nadie cerca" sin comprobar también lo que ves por el retrovisor (alguien detrás) puede deslumbrar igualmente.'
      },
      {
        titulo: 'Luces antiniebla',
        explicacion: 'Las luces antiniebla, delanteras o traseras, solo deben usarse en condiciones de niebla, nieve, lluvia intensa o humo, no de forma habitual.',
        ejemplo: 'Llevar encendidos los antiniebla traseros en una noche despejada solo deslumbra al que va detrás, sin aportar ninguna ventaja.',
        trampa: 'Usar las antiniebla como "luz extra" de forma habitual está prohibido: solo son para condiciones meteorológicas adversas.'
      },
      {
        titulo: 'Luces de emergencia (warning)',
        explicacion: 'Las luces de emergencia advierten de un peligro u obstáculo (como una parada de emergencia o avería), no sustituyen al uso del intermitente en maniobras normales.',
        ejemplo: 'Si te detienes en el arcén por una avería, enciendes el warning para avisar a los que vienen detrás.',
        trampa: 'Usar el warning para "señalizar" un giro normal en vez del intermitente correspondiente no es su función ni es correcto.'
      }
    ],
    preguntas: [
      { id: 't11-1', pregunta: '¿Qué debe hacer un conductor que ha sido deslumbrado por las luces de otro vehículo?', opciones: ['Desviarse a la derecha y detenerse en el arcén lo antes posible', 'Reducir la velocidad e incluso detenerse si es necesario hasta recuperar la visibilidad', 'Encender el alumbrado de largo alcance en respuesta al deslumbramiento'], correcta: 1, explicacion: 'Ante el deslumbramiento, lo correcto es reducir la velocidad y, si no se ve lo suficiente, detenerse hasta recuperar la visión.' },
      { id: 't11-2', pregunta: '¿Está permitido circular solo con el alumbrado de posición entre la puesta y la salida del sol?', opciones: ['Sí, en cualquier vía suficientemente iluminada', 'Sí, en vías de poblado suficientemente iluminadas artificialmente', 'No, debe usarse también el alumbrado de cruce o carretera según el caso'], correcta: 2, explicacion: 'Las luces de posición solas no son suficientes para circular de noche; deben combinarse con las luces de cruce o carretera.' },
      { id: 't11-3', pregunta: 'Por un túnel insuficientemente iluminado se debe circular con las luces de...', opciones: ['Posición y largo alcance (largas)', 'Posición y corto alcance (cruce)', 'Posición y antiniebla delantera'], correcta: 1, explicacion: 'En túneles, incluso insuficientemente iluminados, se usan las luces de cruce (corto alcance); las largas están prohibidas dentro.' },
      { id: 't11-4', pregunta: 'Con niebla densa que reduce sensiblemente la visibilidad, ¿está permitido conducir solo con luces de posición y corto alcance?', opciones: ['Sí, las luces de cruce son suficientes en cualquier condición', 'No, deben activarse también las luces delanteras de niebla si el vehículo las tiene', 'No, debe encenderse el alumbrado trasero de niebla además de las luces de cruce'], correcta: 2, explicacion: 'Con niebla que reduzca sensiblemente la visibilidad, es obligatorio activar la luz trasera de niebla; la delantera es opcional pero recomendable.' },
      { id: 't11-5', pregunta: 'En caso de lluvia no intensa, ¿está permitido utilizar las luces antiniebla?', opciones: ['No, las antiniebla solo se usan con niebla, nieve intensa o humo que reduzcan la visibilidad', 'Sí, pero solo la trasera', 'Sí, tanto delantera como trasera para aumentar la visibilidad'], correcta: 0, explicacion: 'Las luces antiniebla no deben usarse en lluvia ligera ni en condiciones normales; su uso está reservado a visibilidad sensiblemente reducida.' },
      { id: 't11-6', pregunta: '¿Está permitido circular en travesía con la luz de largo alcance (largas)?', opciones: ['No, las luces largas están prohibidas dentro de poblado', 'Sí, siempre que no se deslumbre a ningún usuario de la vía', 'Sí, cuando la vía esté insuficientemente iluminada artificialmente'], correcta: 1, explicacion: 'Dentro de poblado se pueden usar las luces largas si con ello no se deslumbra a otros conductores o peatones.' },
      { id: 't11-7', pregunta: 'La luz rotativa amarilla o azul que llevan los vehículos especiales (grúas, maquinaria), ¿les concede prioridad sobre otros conductores?', opciones: ['Sí, cuando circulan con ella encendida siempre tienen prioridad', 'Sí, en cualquier caso y circunstancia', 'No, solo señaliza su situación especial; no concede prioridad de paso'], correcta: 2, explicacion: 'La luz rotativa o destellante de los vehículos especiales avisa de su presencia pero no les otorga prioridad de paso.' },
      { id: 't11-8', pregunta: 'Las motocicletas están obligadas a llevar encendida la luz de cruce...', opciones: ['Solo entre la puesta y la salida del sol (de noche)', 'Durante todo el día por cualquier tipo de vía', 'Solo de día en vías interurbanas y de noche en todas las vías'], correcta: 1, explicacion: 'Las motocicletas deben circular siempre con la luz de cruce encendida, tanto de día como de noche y en cualquier tipo de vía.' }
    ]
  },
  12: {
    id: 12, titulo: 'Señales de los Agentes y Paneles',
    conceptos: [
      {
        titulo: 'Jerarquía de las señales',
        explicacion: 'El orden de prioridad entre las distintas señales es: primero las indicaciones de los agentes, después los semáforos, después las señales verticales y horizontales, y por último las normas generales de circulación.',
        ejemplo: 'Si el semáforo está en verde pero un agente de tráfico te ordena detenerte, debes obedecer al agente.',
        trampa: 'Pensar que una señal vertical o un semáforo "manda más" que un agente es un error muy común: el agente siempre tiene prioridad sobre ambos.'
      },
      {
        titulo: 'Posturas básicas del agente',
        explicacion: 'Brazo levantado verticalmente: detención obligatoria para todos los afectados. Brazo extendido horizontalmente: detención de los conductores cuya trayectoria corte esa dirección. Movimiento de balanceo con el brazo: aviso para reducir la velocidad.',
        ejemplo: 'Si un agente extiende el brazo en horizontal señalando tu dirección, debes detenerte aunque el resto de tráfico continúe.',
        trampa: 'El brazo extendido horizontalmente no detiene a todo el mundo, solo a quienes circulan en la dirección que ese brazo corta.'
      },
      {
        titulo: 'Paneles de mensaje variable',
        explicacion: 'Los paneles de mensaje variable (PMV) en autovías informan de incidencias, cierres de carril o límites de velocidad temporales, y tienen carácter de señal reglamentaria mientras se muestran.',
        ejemplo: 'Un panel que muestra "80" sobre un carril cerrado obliga a respetar ese límite mientras esté activo, igual que una señal fija.',
        trampa: 'Pensar que un límite mostrado en un PMV es "solo informativo" es un error: mientras se muestra, es obligatorio igual que una señal vertical.'
      }
    ],
    preguntas: [
      { id: 't12-1', pregunta: 'Como norma general, las señales de tráfico se aplican...', opciones: ['A toda la anchura de la calzada, a todos los carriles del mismo sentido', 'Solo al carril en el que están físicamente situadas', 'Solo al tráfico pesado en vías interurbanas'], correcta: 0, explicacion: 'Las señales verticales afectan con carácter general a todos los vehículos que circulan por la calzada, no solo al carril donde están colocadas.' },
      { id: 't12-2', pregunta: '¿Cuándo termina la prohibición de adelantar establecida por una señal?', opciones: ['Al pasar la curva o el tramo peligroso que motivó la señal', 'Al finalizar el tramo peligroso, aunque no haya señal de fin de prohibición', 'Al encontrar expresamente la señal de fin de prohibición de adelantar'], correcta: 2, explicacion: 'La prohibición de adelantar termina únicamente al encontrar la señal de fin de la prohibición; no termina sola al pasar el tramo.' },
      { id: 't12-3', pregunta: 'Si circula por una vía preferente señalizada, ¿debe facilitar la incorporación de los vehículos que entran por la derecha?', opciones: ['Sí, en la medida de lo posible y sin comprometer la seguridad', 'No, la señal de vía preferente le otorga la prioridad y no tiene ninguna obligación', 'Solo si son autobuses o transportes colectivos'], correcta: 1, explicacion: 'En una vía preferente, el conductor tiene prioridad; los vehículos que se incorporan desde otras vías deben cederle el paso.' },
      { id: 't12-4', pregunta: 'Si en un estrechamiento hay una señal de paso preferente a su favor, ¿tiene prioridad de paso?', opciones: ['No, la prioridad siempre es del que viene de frente en el estrechamiento', 'Sí, pero solo en pendiente ascendente', 'Sí, la señal le otorga la prioridad para pasar el estrechamiento'], correcta: 2, explicacion: 'La señal de paso preferente (flecha ancha con flechitas estrechas) concede prioridad al conductor a favor del cual está puesta.' },
      { id: 't12-5', pregunta: 'Un panel debajo de una señal de peligro, ¿qué indica habitualmente?', opciones: ['La distancia donde comienza el peligro', 'La distancia donde termina el peligro', 'La longitud del tramo peligroso o la distancia al inicio del mismo'], correcta: 2, explicacion: 'Los paneles complementarios debajo de señales de peligro suelen indicar la longitud del tramo peligroso o la distancia a su inicio.' },
      { id: 't12-6', pregunta: 'Un panel de mensaje variable que muestra un aspa roja (X) sobre un carril, ¿qué indica?', opciones: ['Que debe reducir la velocidad a 40 km/h en ese carril', 'Que el carril está cerrado al tráfico y debe cambiar de carril', 'Que ese carril es de emergencia y solo pueden usarlo vehículos de auxilio'], correcta: 1, explicacion: 'El aspa roja sobre un carril en los paneles de mensaje variable indica que ese carril está cerrado; debe cambiar a otro carril.' },
      { id: 't12-7', pregunta: '¿Cuál es el orden de prioridad de la señalización de mayor a menor?', opciones: ['Señales verticales, semáforos, agentes de tráfico, normas generales', 'Agentes de tráfico, semáforos, señales verticales y horizontales, normas generales de circulación', 'Semáforos, agentes, señales verticales, normas generales'], correcta: 1, explicacion: 'La jerarquía es: 1.º agentes, 2.º semáforos, 3.º señales verticales y horizontales, 4.º normas generales de circulación.' },
      { id: 't12-8', pregunta: 'Un agente de circulación le indica que se detenga, pero el semáforo está en verde. ¿Qué hace?', opciones: ['Continúo, porque el semáforo en verde tiene prioridad sobre el agente', 'Obedezco al agente, que prevalece sobre el semáforo en todo caso', 'Reduzco la velocidad pero continúo si el cruce está despejado'], correcta: 1, explicacion: 'Las indicaciones del agente de tráfico prevalecen sobre los semáforos y cualquier otra señal.' }
    ]
  },
  13: {
    id: 13, titulo: 'Señales Verticales',
    conceptos: [
      {
        titulo: 'Clasificación por forma y color',
        explicacion: 'Triangulares: peligro. Circulares con borde rojo: prohibición o restricción. Circulares de fondo azul (sin borde rojo): obligación. Cuadradas o rectangulares azules: indicación o información. Octogonal roja: STOP.',
        ejemplo: 'Un círculo blanco con borde rojo y el número 90 dentro prohíbe superar esa velocidad; un círculo azul con una flecha blanca obliga a seguir esa dirección.',
        trampa: 'No confundas la señal de "prohibición" (fondo blanco, borde rojo) con la de "obligación" (fondo azul, sin borde rojo): comunican justo lo contrario.'
      },
      {
        titulo: 'Señales de prioridad',
        explicacion: 'El STOP es octogonal y de color rojo; "Ceda el paso" es un triángulo invertido. Ambas regulan quién tiene prioridad en una intersección.',
        ejemplo: 'Ante un triángulo invertido en un cruce, debes reducir y, si viene alguien, cederle el paso; no es obligatorio detenerse si no viene nadie.',
        trampa: 'STOP siempre obliga a detenerse completamente, exista o no tráfico; Ceda el Paso solo obliga a detenerse si realmente viene algún vehículo.'
      },
      {
        titulo: 'Fin de prohibición o restricción',
        explicacion: 'Las señales de fin de una prohibición o restricción se representan de forma similar a la original, pero tachadas con una línea diagonal, indicando que cesa la limitación anterior.',
        ejemplo: 'Una señal de "fin de limitación de velocidad" indica que a partir de ahí deja de aplicarse el límite especial impuesto antes.',
        trampa: 'La línea diagonal sobre una señal de prohibición no significa "doble prohibición", sino justamente lo contrario: que esa prohibición termina.'
      }
    ],
    preguntas: [
      { id: 't13-1', pregunta: '¿Cuándo finaliza la limitación de velocidad impuesta por una señal de prohibición?', opciones: ['Al salir del tramo o curva que la motivó, automáticamente', 'Al llegar a una intersección o cruce de cualquier tipo', 'Al encontrar expresamente la señal de fin de la limitación o una nueva señal de velocidad'], correcta: 2, explicacion: 'Una señal de limitación de velocidad solo finaliza al encontrar la señal de fin de la limitación o cuando entra en vigor un nuevo límite.' },
      { id: 't13-2', pregunta: 'La señal que prohíbe a los camiones de más de 3.500 kg de MMA adelantar...', opciones: ['Prohíbe a los camiones adelantar a cualquier vehículo, salvo motocicletas de dos ruedas', 'Prohíbe a los camiones >3.500 kg MMA adelantar a vehículos que no sean motocicletas de dos ruedas', 'Prohíbe adelantar a todos los vehículos sin excepción alguna'], correcta: 1, explicacion: 'La señal de prohibición de adelantar para camiones >3.500 kg MMA solo permite adelantar a motocicletas de dos ruedas si no se invade el sentido contrario.' },
      { id: 't13-3', pregunta: 'Una señal de prohibición de parada y estacionamiento alternativa (solo en un lado), ¿qué indica?', opciones: ['Que está prohibida la parada y estacionamiento en el lado derecho de la calzada', 'Que está prohibida en ambos lados de la calzada simultáneamente', 'Que está prohibida solo la parada en el lado señalado'], correcta: 0, explicacion: 'La señal de estacionamiento alternativo prohíbe la parada y estacionamiento en el lado indicado durante el período señalado.' },
      { id: 't13-4', pregunta: 'Las señales que muestran una velocidad entre paréntesis o en recuadro especial, ¿qué carácter tienen?', opciones: ['Obligan a circular exactamente a esa velocidad, ni más ni menos', 'Prohíben circular a más de esa velocidad en cualquier caso', 'Aconsejan no circular a más de esa velocidad en esas condiciones'], correcta: 2, explicacion: 'Las velocidades entre paréntesis o en recuadro son recomendaciones, no prohibiciones; aconsejan no superar ese valor.' },
      { id: 't13-5', pregunta: 'En una intersección con señal de giro obligatorio a la izquierda, ¿está permitido cambiar el sentido de la marcha?', opciones: ['Sí, el cambio de sentido está incluido en el giro a la izquierda', 'No, la señal solo autoriza el giro a la izquierda, no el cambio de sentido', 'No, porque la señal aconseja girar pero no obliga'], correcta: 0, explicacion: 'La señal de giro obligatorio a la izquierda permite tanto girar a la izquierda como dar la vuelta (cambio de sentido), que también es hacia la izquierda.' },
      { id: 't13-6', pregunta: 'La señal que obliga a llevar cadenas o neumáticos de nieve, ¿prohíbe seguir sin ellas?', opciones: ['Sí, en cualquier caso y sin excepción', 'Sí, a no ser que disponga de neumáticos de nieve u otros dispositivos igualmente eficaces y autorizados', 'No, solo recomienda el uso de cadenas cuando las condiciones lo hagan conveniente'], correcta: 1, explicacion: 'La señal de cadenas obliga a llevarlas o a disponer de neumáticos de invierno u otros dispositivos equivalentes autorizados.' },
      { id: 't13-7', pregunta: 'Una señal circular de fondo blanco y borde rojo con una diagonal encima, ¿qué indica?', opciones: ['Doble prohibición; está doblemente restringido ese tramo', 'Fin de la prohibición o restricción anterior', 'Prohibición de carácter temporal por obras o condiciones meteorológicas'], correcta: 1, explicacion: 'La diagonal sobre una señal de prohibición indica el fin de esa prohibición o restricción.' },
      { id: 't13-8', pregunta: 'La señal que muestra un ciclomotor dentro de un círculo prohibitorio, ¿qué indica?', opciones: ['Prohibido el paso a ciclos (bicicletas)', 'Prohibido el paso a ciclomotores', 'Prohibido el paso a motocicletas y ciclomotores'], correcta: 1, explicacion: 'La señal con la silueta de un ciclomotor en círculo prohibitorio prohíbe específicamente el paso a ciclomotores.' }
    ]
  },
  14: {
    id: 14, titulo: 'Marcas Viales y Semáforos',
    conceptos: [
      {
        titulo: 'Líneas longitudinales',
        explicacion: 'La línea continua prohíbe cruzarla o circular sobre ella. La línea discontinua permite cruzarla con precaución (para adelantar o cambiar de carril). La línea mixta solo permite cruzar desde el lado de la discontinua.',
        ejemplo: 'Si tu carril tiene la línea discontinua más cerca y el contrario la continua, tú puedes cruzar para adelantar, pero el que viene de frente no puede.',
        trampa: 'En una línea mixta, quién puede cruzar depende de qué línea tiene cada conductor más próxima a su carril, no del sentido general de circulación.'
      },
      {
        titulo: 'Semáforos',
        explicacion: 'El ámbar (amarillo) significa detenerse si se puede hacer con seguridad, ya que el ciclo va a cambiar a rojo. La flecha verde solo permite circular en esa dirección concreta, estando el resto de direcciones en rojo.',
        ejemplo: 'Cuando el semáforo cambia a ámbar, lo correcto es frenar si te da tiempo con seguridad, no acelerar para intentar pasar.',
        trampa: 'El ámbar NO significa "acelerar para pasar": indica que hay que detenerse si se puede hacer con seguridad.'
      },
      {
        titulo: 'Marcas transversales',
        explicacion: 'Incluyen los pasos de peatones, las líneas de detención (pintadas junto a un STOP o semáforo) y el cebreado (zona excluida de la circulación).',
        ejemplo: 'Antes de un semáforo en rojo, debes detener el vehículo justo en la línea de detención pintada en el suelo, no más allá.',
        trampa: 'El cebreado no es una zona "libre para estacionar": está excluida de la circulación y, por tanto, también prohibida para parar o estacionar.'
      }
    ],
    preguntas: [
      { id: 't14-1', pregunta: 'Si circula por una vía con línea longitudinal continua adosada a otra discontinua (línea mixta)...', opciones: ['Debe tener en cuenta solo la línea más cercana a su carril para saber si puede cruzar', 'Indica que es un carril reversible que puede cambiar de sentido', 'No se puede atravesar en ningún caso desde ningún sentido'], correcta: 0, explicacion: 'En una línea mixta, puede cruzarla quien tiene la discontinua en su lado (más próxima); no puede cruzarla quien tiene la continua en su lado.' },
      { id: 't14-2', pregunta: '¿Puede sobrepasar la marca continua central de la calzada?', opciones: ['No, la marca continua no puede ser cruzada ni circulada sobre ella', 'Sí, para realizar un cambio de dirección cuando no viene nadie', 'Sí, si la calzada es de sentido único'], correcta: 0, explicacion: 'La marca vial continua no puede cruzarse ni circularse sobre ella en ninguna circunstancia.' },
      { id: 't14-3', pregunta: 'En una calzada con los dos sentidos separados por línea continua, ¿está permitido girar a la izquierda para entrar en una propiedad?', opciones: ['Sí, cuando no se comprometa la seguridad y no venga nadie', 'Solo dentro de poblado con semáforo en verde', 'No, la línea continua no puede cruzarse para girar a la izquierda'], correcta: 2, explicacion: 'La línea continua no puede cruzarse bajo ninguna circunstancia, incluido el giro a la izquierda para entrar en una propiedad.' },
      { id: 't14-4', pregunta: 'Las flechas de selección de carril pintadas en la calzada...', opciones: ['Aconsejan seguir las direcciones indicadas pero permiten otras si se avisa', 'Obligan a seguir la dirección indicada, prohibiendo cualquier otra maniobra', 'Obligan a la dirección pero permiten cambiar de carril si la señalización vertical lo permite'], correcta: 1, explicacion: 'Las flechas de carril son obligatorias: el conductor debe seguir la dirección indicada en ese carril.' },
      { id: 't14-5', pregunta: 'El triángulo blanco pintado en la calzada (vértice apuntando hacia el conductor), ¿qué significa?', opciones: ['El conductor tiene preferencia al llegar a ese punto', 'Debe detenerse completamente en todo caso', 'Es la marca vial equivalente a la señal de "Ceda el paso"; es obligatorio ceder el paso'], correcta: 2, explicacion: 'El triángulo en el suelo equivale a la señal vertical de "Ceda el paso" y obliga a ceder el paso a quien circula por la vía transversal.' },
      { id: 't14-6', pregunta: 'La marca vial de color amarillo discontinua en el borde de la calzada, ¿qué prohíbe?', opciones: ['Parar (inmovilización incluso breve)', 'Estacionar (inmovilización prolongada o con abandono del vehículo)', 'Tanto parar como estacionar'], correcta: 1, explicacion: 'La línea amarilla discontinua en el borde prohíbe el estacionamiento, pero no la parada breve; la continua prohíbe también parar.' },
      { id: 't14-7', pregunta: 'Las marcas viales de color blanco, ¿tienen el mismo rango que las señales verticales?', opciones: ['Sí, tienen exactamente el mismo rango y prevalencia', 'No, en ningún caso; las verticales siempre prevalecen sobre las horizontales', 'No, salvo las marcas de "Ceda el paso" y "Stop" que tienen el mismo valor que las señales verticales correspondientes'], correcta: 2, explicacion: 'Las marcas viales horizontales tienen en general menos rango que las verticales, salvo las específicas de ceda el paso y stop.' },
      { id: 't14-8', pregunta: '¿Puede inmovilizar el vehículo abandonándolo en una zona con línea amarilla discontinua en el borde de la calzada?', opciones: ['Sí, hasta un máximo de dos minutos', 'Sí, es una zona de parada breve permitida', 'No, abandonar el vehículo se considera estacionamiento y la línea amarilla lo prohíbe'], correcta: 2, explicacion: 'La línea amarilla discontinua prohíbe el estacionamiento. Si el conductor abandona el vehículo, ya es estacionamiento, aunque sea por poco tiempo.' }
    ]
  },
  15: {
    id: 15, titulo: 'Alcohol y Drogas',
    conceptos: [
      {
        titulo: 'Límites legales de alcohol',
        explicacion: 'El límite general es de 0,25 mg/l en aire espirado (0,5 g/l en sangre). Para conductores noveles (menos de 2 años de carné) y profesionales, el límite es más estricto: 0,15 mg/l en aire espirado (0,3 g/l en sangre).',
        ejemplo: 'Un conductor con el carné desde hace 1 año tiene un límite más bajo que uno con 10 años de experiencia.',
        trampa: 'No confundas el límite general (0,25 mg/l) con el de noveles y profesionales (0,15 mg/l), claramente más restrictivo.'
      },
      {
        titulo: 'Drogas: tolerancia cero',
        explicacion: 'A diferencia del alcohol, en el caso de las drogas no existe un límite "permitido": cualquier presencia detectada de sustancias estupefacientes es motivo de sanción.',
        ejemplo: 'Mientras que con el alcohol hay un margen legal, con las drogas no existe ningún margen: detectarse algo ya es sancionable.',
        trampa: 'Pensar que existe un "límite tolerable" de drogas, igual que con el alcohol, es un error: la norma aplica tolerancia cero.'
      },
      {
        titulo: 'Efectos del alcohol incluso por debajo del límite',
        explicacion: 'El alcohol afecta a la percepción, los reflejos y la capacidad de juicio incluso en cantidades por debajo del límite legal; el riesgo de accidente aumenta de forma progresiva con la tasa.',
        ejemplo: 'Aunque dieras un resultado legal, una sola copa ya puede haber alterado ligeramente tus reflejos.',
        trampa: 'Estar "dentro del límite legal" no equivale a estar "sin ningún efecto": el alcohol afecta progresivamente desde la primera copa.'
      }
    ],
    preguntas: [
      { id: 't15-1', pregunta: '¿Cuál es la tasa de alcohol máxima permitida para un conductor novel en aire espirado?', opciones: ['0,30 mg/l en aire espirado', '0,25 mg/l en aire espirado', '0,15 mg/l en aire espirado'], correcta: 2, explicacion: 'Los conductores noveles (menos de 2 años de permiso) tienen un límite más restrictivo: 0,15 mg/l en aire espirado, equivalente a 0,3 g/l en sangre.' },
      { id: 't15-2', pregunta: '¿Cuál es la tasa máxima de alcohol en sangre para conductores con carácter general?', opciones: ['0,50 g/l en sangre', '0,30 g/l en sangre', '0,25 g/l en sangre'], correcta: 0, explicacion: 'El límite general en sangre es de 0,5 g/l, equivalente a 0,25 mg/l en aire espirado.' },
      { id: 't15-3', pregunta: '¿Cuál es la tasa máxima para un conductor mayor de edad con permiso de menos de 2 años?', opciones: ['0,15 mg/l en aire espirado o 0,3 g/l en sangre', '0,25 mg/l en aire espirado o 0,5 g/l en sangre', '0,10 mg/l en aire espirado o 0,2 g/l en sangre'], correcta: 0, explicacion: 'Los conductores noveles, independientemente de la edad, tienen el límite más restrictivo: 0,15 mg/l en aire o 0,3 g/l en sangre.' },
      { id: 't15-4', pregunta: 'Tomar alimentos o beber agua abundante después de consumir alcohol, ¿reduce la tasa de alcoholemia?', opciones: ['Sí, comer después de beber reduce la absorción del alcohol', 'Sí, beber agua diluye el alcohol en sangre', 'No, comer o beber agua solo puede retrasar ligeramente la absorción pero no elimina el alcohol'], correcta: 2, explicacion: 'El alcohol ya absorbido solo lo elimina el organismo con el tiempo; comer o beber agua no reduce la tasa de alcoholemia.' },
      { id: 't15-5', pregunta: 'La percepción del riesgo, ¿resulta afectada por el consumo de drogas?', opciones: ['No, las drogas no alteran la percepción del riesgo', 'Sí, la percepción del riesgo aumenta (el conductor va con más cuidado)', 'Sí, la percepción del riesgo disminuye (el conductor se cree capaz de hacer más de lo que puede)'], correcta: 2, explicacion: 'Las drogas distorsionan la percepción del riesgo, haciéndola menor; el conductor sobreestima su capacidad y subestima los peligros.' },
      { id: 't15-6', pregunta: 'El consumo de drogas, ¿afecta a la capacidad de reacción del conductor?', opciones: ['Sí, la disminuye notablemente', 'Sí, la aumenta temporalmente en algunas drogas estimulantes', 'No, no tiene relación con la capacidad de reacción'], correcta: 0, explicacion: 'Las drogas, en general, disminuyen la capacidad de reacción; las estimulantes pueden dar sensación de mayor reacción pero con errores de juicio.' },
      { id: 't15-7', pregunta: 'El consumo de alcohol, ¿altera la posibilidad de deslumbramiento del conductor?', opciones: ['Sí, la aumenta; el conductor se deslumbra más fácilmente', 'Sí, la disminuye; el conductor es menos sensible al deslumbramiento', 'No, el alcohol no afecta a la sensibilidad lumínica'], correcta: 0, explicacion: 'El alcohol aumenta la sensibilidad al deslumbramiento y alarga el tiempo de recuperación visual tras ser deslumbrado.' },
      { id: 't15-8', pregunta: '¿Cómo afectan las anfetaminas a la conducción?', opciones: ['Aumentan la somnolencia y dificultan mantener la atención', 'Aumentan la sensación de fatiga y reducen el tiempo de reacción', 'Reducen la sensación de fatiga produciendo falsa seguridad y agresividad al volante'], correcta: 2, explicacion: 'Las anfetaminas son estimulantes que enmascaran el cansancio y producen sensación de falsa seguridad y conducción agresiva, lo que aumenta el riesgo.' }
    ]
  },
  16: {
    id: 16, titulo: 'Fatiga, Sueño y Distracciones',
    conceptos: [
      {
        titulo: 'Descanso periódico',
        explicacion: 'La fatiga y el sueño reducen la atención, el tiempo de reacción y la capacidad de tomar decisiones. Se recomienda parar a descansar cada 2 horas o 200 km aproximadamente.',
        ejemplo: 'En un viaje largo, planificar una parada cada 2 horas evita que la fatiga se acumule sin que te des cuenta.',
        trampa: 'Abrir la ventanilla o subir la música no "cura" el sueño: solo el descanso real (parar y dormir) es realmente eficaz.'
      },
      {
        titulo: 'Uso del móvil y otras distracciones',
        explicacion: 'El uso del teléfono móvil sujetándolo con la mano mientras se conduce está prohibido, ya que desvía la atención visual, manual y cognitiva del conductor, multiplicando el riesgo de accidente.',
        ejemplo: 'Mirar un mensaje un par de segundos a 100 km/h equivale a conducir una distancia considerable "a ciegas".',
        trampa: 'Pensar que "solo un segundo" mirando el móvil es seguro: a esa velocidad, ese segundo supone recorrer muchos metros sin atención visual.'
      },
      {
        titulo: 'Microsueños',
        explicacion: 'Un microsueño es una breve pérdida de consciencia de pocos segundos que puede pasar inadvertida para el propio conductor, especialmente peligrosa de noche o en trayectos monótonos.',
        ejemplo: 'En una autovía recta y monótona de noche, el cerebro cansado puede "desconectar" unos segundos sin que el conductor lo perciba.',
        trampa: 'Creer que "no me he dormido, solo he despistado un segundo" puede ser, en realidad, un microsueño no percibido.'
      }
    ],
    preguntas: [
      { id: 't16-1', pregunta: 'Por la noche, la agudeza visual del conductor...', opciones: ['Disminuye notablemente respecto al día', 'Aumenta porque los ojos se adaptan a la oscuridad', 'No varía; la agudeza visual no depende de la luz'], correcta: 0, explicacion: 'De noche, la agudeza visual se reduce significativamente, lo que disminuye la capacidad de percibir detalles, colores y distancias.' },
      { id: 't16-2', pregunta: 'El efecto túnel producido por la velocidad hace que el conductor...', opciones: ['Sea más sensible a los deslumbramientos por el contraste', 'Solo sea capaz de percibir con nitidez el centro de la vía, reduciendo el campo visual periférico', 'Solo sea capaz de percibir la parte lateral de la vía, ignorando el centro'], correcta: 1, explicacion: 'A mayor velocidad, el campo visual se estrecha (efecto túnel): el conductor ve con nitidez el centro pero pierde visión periférica.' },
      { id: 't16-3', pregunta: '¿Qué circunstancias favorecen la aparición de la fatiga al volante?', opciones: ['Mantener posturas inadecuadas, temperatura alta en el habitáculo, viajes monótonos sin pausas', 'Mantener los hábitos normales de conducción y respetar los descansos previstos', 'Planificar los viajes con antelación y programar los descansos necesarios'], correcta: 0, explicacion: 'La fatiga se favorece por mala postura, calor, monotonía de la vía y ausencia de pausas; planificar los descansos la previene.' },
      { id: 't16-4', pregunta: '¿Qué efectos tiene la fatiga sobre los conductores?', opciones: ['Aumenta el campo visual y la agudeza de reflejos por el estado de alerta extremo', 'La visión puede volverse borrosa, aumenta el tiempo de reacción y disminuye la capacidad de decisión', 'Produce una conducción más prudente y segura por el estado de concentración'], correcta: 1, explicacion: 'La fatiga deteriora la visión, los reflejos y el juicio; el conductor puede no percibir la disminución de sus capacidades.' },
      { id: 't16-5', pregunta: 'Los accidentes por sueño al volante, ¿suceden también durante el día?', opciones: ['Sí, especialmente tras el almuerzo y en las primeras horas de la tarde', 'Sí, pero solo a las primeras horas de la mañana antes de que el conductor se despabile', 'No, los accidentes por sueño solo ocurren de noche'], correcta: 0, explicacion: 'El sueño aparece con frecuencia tras el almuerzo (somnolencia postprandial) y en las primeras horas de la tarde, no solo de noche.' },
      { id: 't16-6', pregunta: 'En general, el sueño aparece con mayor frecuencia...', opciones: ['En las primeras horas de la mañana y al final de la tarde', 'Durante la madrugada y en las primeras horas de la tarde (somnolencia postprandial)', 'Durante las horas centrales de la mañana y a primera hora de la noche'], correcta: 1, explicacion: 'Los períodos de mayor somnolencia son de madrugada (2-6 h) y después de comer (14-16 h), coincidiendo con el ritmo circadiano.' },
      { id: 't16-7', pregunta: 'Conducir bajo los efectos de un medicamento que produce somnolencia, ¿está permitido?', opciones: ['No, en ningún caso y bajo ninguna circunstancia', 'Sí, mientras no se mezcle con alcohol', 'Solo si el medicamento no altera el estado físico o mental necesario para conducir con seguridad'], correcta: 2, explicacion: 'No está prohibido conducir por tomar medicamentos, pero sí está prohibido hacerlo si el medicamento altera las capacidades necesarias para conducir.' },
      { id: 't16-8', pregunta: 'El tipo de accidente más frecuente asociado al uso del teléfono móvil al volante es...', opciones: ['El choque frontolateral en intersecciones', 'La salida de la vía por pérdida de control de la dirección', 'El alcance al vehículo de delante por distracción y pérdida de la distancia de seguridad'], correcta: 2, explicacion: 'El alcance es el accidente más frecuente asociado al móvil: la distracción impide percibir que el vehículo de delante ha frenado.' }
    ]
  },
  17: {
    id: 17, titulo: 'Conducción Adversa',
    conceptos: [
      {
        titulo: 'Lluvia y aquaplaning',
        explicacion: 'La lluvia reduce la adherencia entre el neumático y la calzada y aumenta la distancia de frenado. El aquaplaning se produce cuando una capa de agua hace que el vehículo pierda contacto con el firme, generalmente por exceso de velocidad.',
        ejemplo: 'Circular muy rápido sobre un charco extenso puede hacer que las ruedas "floten" sobre el agua, perdiendo el control de la dirección.',
        trampa: 'El aquaplaning no es un fallo del vehículo: depende directamente de la velocidad y la cantidad de agua en la calzada.'
      },
      {
        titulo: 'Niebla',
        explicacion: 'La niebla reduce drásticamente la visibilidad. Hay que reducir mucho la velocidad, usar las luces de cruce o antiniebla, aumentar la distancia de seguridad y evitar los adelantamientos.',
        ejemplo: 'En un tramo con niebla densa, aunque conozcas bien la carretera, no debes mantener tu velocidad habitual.',
        trampa: 'Pensar que "conozco esta carretera de memoria" permite mantener la velocidad en niebla es un error grave: la visibilidad manda, no el conocimiento de la vía.'
      },
      {
        titulo: 'Viento y hielo',
        explicacion: 'El viento lateral fuerte afecta especialmente a vehículos altos, autocaravanas y los que llevan remolque. El hielo, en especial el "hielo negro" en puentes y zonas sombreadas, reduce drásticamente la adherencia y es casi invisible.',
        ejemplo: 'Un puente a la sombra en una mañana fría puede tener hielo invisible aunque el resto de la carretera esté seca.',
        trampa: 'El hielo negro es peligroso precisamente porque NO se ve a simple vista sobre el asfalto, a diferencia de la nieve.'
      }
    ],
    preguntas: [
      { id: 't17-1', pregunta: 'El "aquaplaning" se produce cuando...', opciones: ['El motor se recalienta al pasar el vehículo sobre grandes charcos', 'Los neumáticos pierden contacto con el firme por una capa de agua al circular a velocidad excesiva', 'Los frenos se mojan y pierden eficacia temporalmente hasta que se secan'], correcta: 1, explicacion: 'El aquaplaning ocurre cuando a velocidad excesiva el agua no puede evacuarse por los canales del neumático y el vehículo "flota" sobre ella.' },
      { id: 't17-2', pregunta: 'Si en marcha sufre "aquaplaning", debe...', opciones: ['Frenar bruscamente para detener el vehículo lo antes posible', 'Girar el volante bruscamente hacia el lado del deslizamiento para corregirlo', 'Soltar el acelerador progresivamente y mantener firme el volante sin realizar frenadas ni giros bruscos'], correcta: 2, explicacion: 'Ante el aquaplaning: pie del acelerador, volante firme y recto, sin frenar bruscamente hasta que las ruedas recuperen contacto con el firme.' },
      { id: 't17-3', pregunta: 'Con niebla densa, ¿debe encender las luces de largo alcance para ver mejor?', opciones: ['Sí, permiten iluminar más lejos y anticipar los peligros', 'No, las luces largas se reflejan en la niebla y reducen aún más la visibilidad', 'Solo si llueve también, para compensar la menor visibilidad'], correcta: 1, explicacion: 'Las luces largas en niebla provocan un efecto de reflexión que empeora la visibilidad; deben usarse las luces de cruce y las antiniebla.' },
      { id: 't17-4', pregunta: 'El "hielo negro" es especialmente peligroso porque...', opciones: ['Es de color negro oscuro, visible sobre el asfalto claro', 'Es casi transparente e imperceptible visualmente, confundiéndose con la calzada mojada', 'Solo aparece en zonas de alta montaña con mucha nieve acumulada'], correcta: 1, explicacion: 'El hielo negro es una capa de hielo transparente sobre el asfalto, prácticamente invisible; el conductor puede no percibir el peligro.' },
      { id: 't17-5', pregunta: '¿Qué vehículos se ven más afectados por el viento lateral fuerte?', opciones: ['Los vehículos bajos y deportivos, por su mayor velocidad', 'Los vehículos altos, autocaravanas y los que llevan remolque, por su mayor superficie expuesta', 'Todos los vehículos por igual, independientemente de su tamaño y forma'], correcta: 1, explicacion: 'Los vehículos con mayor superficie lateral (camiones, autocaravanas, remolques) son los más afectados por el viento lateral.' },
      { id: 't17-6', pregunta: 'En firme mojado, la distancia de frenado respecto al firme seco...', opciones: ['Es similar, la diferencia no es significativa en condiciones normales', 'Es menor por la lubricación que el agua proporciona entre freno y disco', 'Es notablemente mayor, pudiendo duplicarse o más en función de la velocidad'], correcta: 2, explicacion: 'El firme mojado reduce la adherencia; la distancia de frenado puede ser el doble o más que en firme seco.' },
      { id: 't17-7', pregunta: 'Al aproximarse a un puente en mañana invernal con heladas, debe...', opciones: ['Acelerar para cruzar el puente rápidamente antes de que el hielo aumente', 'Reducir la velocidad con antelación, ya que los puentes se hielan antes que el resto de la calzada', 'Frenar bruscamente al notar el primer deslizamiento sobre el puente'], correcta: 1, explicacion: 'Los puentes se enfrían y hielan antes que el resto de la calzada al estar expuestos al aire por ambas caras; hay que reducir antes de llegar.' },
      { id: 't17-8', pregunta: '¿Cuándo es especialmente probable encontrar "hielo negro" en la carretera?', opciones: ['En tramos soleados durante las horas centrales del día', 'En puentes, zonas sombreadas y de madrugada con temperaturas cercanas o bajo cero', 'En verano durante tormentas eléctricas con lluvia intensa'], correcta: 1, explicacion: 'El hielo negro aparece especialmente en puentes, tramos sombreados, curvas al norte y de madrugada cuando la temperatura baja de cero.' }
    ]
  },
  18: {
    id: 18, titulo: 'Primeros Auxilios (PAS) y Mecánica',
    conceptos: [
      {
        titulo: 'El método PAS',
        explicacion: 'Ante un accidente, el orden correcto de actuación es: Proteger la zona, Avisar a los servicios de emergencia, y Socorrer a los heridos. Proteger primero evita que se produzcan nuevos accidentes.',
        ejemplo: 'Antes de acercarte a ayudar a un herido, coloca el triángulo de señalización y enciende las luces de emergencia para proteger la zona.',
        trampa: 'Acudir directamente a socorrer al herido sin proteger antes la zona puede provocar un segundo accidente con más víctimas.'
      },
      {
        titulo: 'Aviso a emergencias y atención al herido',
        explicacion: 'Al llamar al 112 hay que indicar el lugar exacto, el número de heridos y su estado aparente, y no colgar hasta que te lo indiquen. Por norma general no se debe mover al herido, salvo peligro inminente (incendio, riesgo de nuevo atropello).',
        ejemplo: 'Si encuentras a un motorista caído, no le quites el casco salvo que sea imprescindible para reanimarlo, por riesgo de lesión en la columna.',
        trampa: 'Mover al herido "para que esté más cómodo" sin que exista peligro real puede agravar lesiones graves, especialmente en la columna.'
      },
      {
        titulo: 'Mantenimiento básico del vehículo',
        explicacion: 'Conviene revisar periódicamente los niveles de aceite y refrigerante, la presión y el estado de los neumáticos, y el sistema de frenos. El desgaste de los neumáticos influye directamente en la distancia de frenado y el riesgo de aquaplaning.',
        ejemplo: 'Unos neumáticos muy desgastados aumentan notablemente el riesgo de aquaplaning con lluvia, aunque conduzcas con cuidado.',
        trampa: 'Pensar que el estado de los neumáticos "solo afecta al consumo" es un error: también afecta directamente a la seguridad y la distancia de frenado.'
      }
    ],
    preguntas: [
      { id: 't18-1', pregunta: 'Para recordar las pautas básicas de actuación en un accidente se utiliza la regla PAS. ¿Qué significan estas siglas?', opciones: ['Prevenir, Atender y Servir', 'Proteger, Alertar y Socorrer', 'Precaución, Atención y Seguridad'], correcta: 1, explicacion: 'PAS: Proteger la zona (evitar nuevos accidentes), Alertar al 112, Socorrer a los heridos. Siempre en este orden.' },
      { id: 't18-2', pregunta: '¿Cómo debe inmovilizar los vehículos implicados en un accidente para evitar nuevos peligros?', opciones: ['Quitando el contacto de la batería', 'Con el freno de mano y cortando el contacto del motor', 'Con unos calzos o cualquier elemento que impida el movimiento'], correcta: 1, explicacion: 'Para inmovilizar los vehículos accidentados: freno de mano puesto y motor cortado; si hay pendiente, además se calzan las ruedas.' },
      { id: 't18-3', pregunta: '¿Es aconsejable quitar el casco a un motorista accidentado?', opciones: ['Sí, lo antes posible para evitar asfixias y facilitar la respiración', 'Sí, siempre que el herido esté consciente y pueda colaborar', 'No, salvo que sea estrictamente necesario para reanimar y se conozca la técnica'], correcta: 2, explicacion: 'Quitar el casco puede agravar lesiones cervicales; solo debe retirarse si es imprescindible para realizar la RCP y por quien conozca la técnica.' },
      { id: 't18-4', pregunta: 'Para hacer la respiración boca a boca a un herido, ¿qué debe hacer primero?', opciones: ['Colocar al herido en posición de defensa (decúbito lateral)', 'Abrir y limpiar las vías respiratorias (hiperextensión de la cabeza)', 'Taparle la nariz e insuflar directamente'], correcta: 1, explicacion: 'Lo primero es asegurar la vía aérea: inclinar la cabeza hacia atrás (hiperextensión) y limpiar la boca de objetos extraños.' },
      { id: 't18-5', pregunta: '¿Cuál es la principal causa de los accidentes por alcance?', opciones: ['Las velocidades superiores a 100 km/h en vías convencionales', 'Las velocidades anormalmente reducidas que sorprenden a los conductores de atrás', 'No mantener la distancia de seguridad suficiente con el vehículo de delante'], correcta: 2, explicacion: 'El alcance es el accidente más frecuente en autopistas y autovías; la causa principal es la distancia de seguridad insuficiente.' },
      { id: 't18-6', pregunta: 'Un herido tiene quemaduras. ¿Qué debe hacer como primera medida?', opciones: ['Limpiar la herida con agua fría y jabón', 'Intentar quitar la ropa pegada a la quemadura para evitar infecciones', 'Tapar la quemadura con gasas húmedas y no intentar retirar la ropa adherida'], correcta: 2, explicacion: 'En quemaduras: cubrir con gasas húmedas y limpias; nunca retirar ropa pegada ni aplicar pomadas, aceites o remedios caseros.' },
      { id: 't18-7', pregunta: 'El número de teléfono de emergencias europeo en caso de accidente de tráfico es...', opciones: ['061 (urgencias médicas)', '112 (emergencias europeo)', '911 (emergencias americano)'], correcta: 1, explicacion: 'El 112 es el número de emergencias único en España y en toda la Unión Europea, válido para cualquier tipo de emergencia.' },
      { id: 't18-8', pregunta: '¿Cuántas compresiones e insuflaciones hay que realizar en una RCP básica (reanimación cardiopulmonar)?', opciones: ['30 compresiones y 2 insuflaciones (30:2)', '20 compresiones y 2 insuflaciones (20:2)', '10 compresiones y 1 insuflación (10:1)'], correcta: 0, explicacion: 'La RCP básica sigue el protocolo 30:2: 30 compresiones torácicas seguidas de 2 insuflaciones de rescate, de forma continua.' }
    ]
  }
};

/* ==========================================================================
   PLAN DE 15 DÍAS
   ========================================================================== */
const PLAN_DIAS = [
  { dia: 1, titulo: 'La Vía y la Documentación', tipo: 'estudio', temas: [1, 2] },
  { dia: 2, titulo: 'Carriles y Sentido de la Marcha', tipo: 'estudio', temas: [3, 4] },
  { dia: 3, titulo: 'Velocidad y Distancias', tipo: 'estudio', temas: [5, 6] },
  { dia: 4, titulo: 'Prioridad y Maniobras', tipo: 'estudio', temas: [7, 8] },
  { dia: 5, titulo: 'Adelantamientos y Parada', tipo: 'estudio', temas: [9, 10] },
  { dia: 6, titulo: 'Luces y Agentes', tipo: 'estudio', temas: [11, 12] },
  { dia: 7, titulo: 'Señales y Marcas Viales', tipo: 'estudio', temas: [13, 14] },
  { dia: 8, titulo: 'Alcohol, Drogas y Fatiga', tipo: 'estudio', temas: [15, 16] },
  { dia: 9, titulo: 'Conducción Adversa y Auxilios', tipo: 'estudio', temas: [17, 18] },
  { dia: 10, titulo: 'Fase de Examen · Repaso 1', tipo: 'examen', preguntasCount: 30 },
  { dia: 11, titulo: 'Fase de Examen · Repaso 2', tipo: 'examen', preguntasCount: 30 },
  { dia: 12, titulo: 'Fase de Examen · Repaso 3', tipo: 'examen', preguntasCount: 30 },
  { dia: 13, titulo: 'Fase de Examen · Repaso 4', tipo: 'examen', preguntasCount: 30 },
  { dia: 14, titulo: 'Fase de Examen · Repaso 5', tipo: 'examen', preguntasCount: 30 },
  { dia: 15, titulo: 'Gran Simulacro Final', tipo: 'simulacro', numTests: 6, preguntasPorTest: 30, minutosPorTest: 30 }
];

/* Cifras clave para el repaso rápido del Día 15 */
const CIFRAS_CLAVE = [
  { categoria: 'Velocidades', dato: 'Autopista / autovía', valor: '120 km/h' },
  { categoria: 'Velocidades', dato: 'Convencional con arcén ≥1,5 m', valor: '100 km/h' },
  { categoria: 'Velocidades', dato: 'Convencional sin ese arcén', valor: '90 km/h' },
  { categoria: 'Velocidades', dato: 'Urbana, 1 carril sin acera diferenciada', valor: '20 km/h' },
  { categoria: 'Velocidades', dato: 'Urbana, 1 carril con acera diferenciada', valor: '30 km/h' },
  { categoria: 'Velocidades', dato: 'Urbana, 2 o más carriles/sentido', valor: '50 km/h' },
  { categoria: 'Velocidades', dato: 'Conductor novel en vías de más de 80', valor: 'máx. 80 km/h' },
  { categoria: 'Alcohol', dato: 'Límite general (aire espirado)', valor: '0,25 mg/l' },
  { categoria: 'Alcohol', dato: 'Límite novel/profesional (aire espirado)', valor: '0,15 mg/l' },
  { categoria: 'Alcohol', dato: 'Límite general (sangre)', valor: '0,5 g/l' },
  { categoria: 'Alcohol', dato: 'Límite novel/profesional (sangre)', valor: '0,3 g/l' },
  { categoria: 'Drogas', dato: 'Tolerancia permitida', valor: 'Cero (ninguna)' },
  { categoria: 'Distancias', dato: 'Regla de seguridad en seco', valor: '2 segundos' },
  { categoria: 'Distancias', dato: 'Margen lateral al adelantar ciclistas', valor: '1,5 metros' },
  { categoria: 'Documentación', dato: 'Primera ITV de un turismo', valor: 'A los 4 años' },
  { categoria: 'Documentación', dato: 'ITV turismo de 4 a 10 años', valor: 'Cada 2 años' },
  { categoria: 'Documentación', dato: 'ITV turismo +10 años', valor: 'Cada año' },
  { categoria: 'Parada/Estacionamiento', dato: 'Tiempo máximo de "parada"', valor: '2 minutos' },
  { categoria: 'Descanso', dato: 'Parada recomendada en viaje largo', valor: 'Cada 2 h / 200 km' },
  { categoria: 'Examen', dato: 'Fallos máximos para ser APTO', valor: '3 fallos o menos' }
];

/* Devuelve un array plano con TODAS las preguntas de todos los temas */
function getTodasLasPreguntas() {
  const todas = [];
  Object.values(TEMAS).forEach(tema => {
    tema.preguntas.forEach(p => {
      todas.push(Object.assign({ temaId: tema.id, temaTitulo: tema.titulo }, p));
    });
  });
  return todas;
}
