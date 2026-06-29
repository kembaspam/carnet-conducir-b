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
      { id: 't1-1', pregunta: '¿Qué parte de la vía está destinada exclusivamente a la circulación de vehículos?', opciones: ['El arcén', 'La calzada', 'La berma'], correcta: 1, explicacion: 'La calzada es la zona reservada para la circulación de vehículos; el arcén no forma parte de ella.' },
      { id: 't1-2', pregunta: 'El arcén se puede utilizar para:', opciones: ['Circular habitualmente con el vehículo', 'Detenerse en caso de emergencia', 'Adelantar a otros vehículos'], correcta: 1, explicacion: 'El arcén está reservado, entre otros usos, para paradas de emergencia, no para la circulación habitual.' },
      { id: 't1-3', pregunta: 'La mediana de una autovía sirve para:', opciones: ['Separar los carriles del mismo sentido', 'Separar los sentidos opuestos de circulación', 'Aparcar vehículos'], correcta: 1, explicacion: 'La mediana es el elemento que separa los dos sentidos de circulación opuestos.' },
      { id: 't1-4', pregunta: 'Un carril es:', opciones: ['Solo el espacio reservado a bicicletas', 'Cada franja longitudinal de la calzada por la que puede circular una fila de vehículos', 'Lo mismo que el arcén'], correcta: 1, explicacion: 'El carril es cada una de las franjas longitudinales en que se divide la calzada.' },
      { id: 't1-5', pregunta: 'La berma se encuentra:', opciones: ['Dentro de la calzada', 'Entre el arcén y el exterior de la vía', 'En el centro de la calzada'], correcta: 1, explicacion: 'La berma queda fuera del arcén, en el límite exterior de la vía.' },
      { id: 't1-6', pregunta: '¿Forma el arcén parte de la vía?', opciones: ['No, nunca', 'Sí, aunque no de la calzada', 'Solo en autopistas'], correcta: 1, explicacion: 'El arcén es parte de la vía, aunque queda fuera de la calzada.' },
      { id: 't1-7', pregunta: 'En una vía de doble sentido con un único carril por sentido:', opciones: ['Está prohibido adelantar siempre', 'Se puede adelantar si hay visibilidad y no hay prohibición', 'Solo pueden adelantar las motos'], correcta: 1, explicacion: 'Un único carril por sentido no implica prohibición de adelantar; depende de la visibilidad y la señalización.' },
      { id: 't1-8', pregunta: 'La isleta en una intersección sirve para:', opciones: ['Encauzar y ordenar los movimientos del tráfico', 'Aparcar momentáneamente', 'Separar sentidos en autovía'], correcta: 0, explicacion: 'La isleta organiza y canaliza los movimientos de los vehículos en un cruce.' }
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
      { id: 't2-1', pregunta: '¿Qué documento acredita que el vehículo cumple las condiciones técnicas de seguridad?', opciones: ['El permiso de circulación', 'El certificado de la ITV', 'El seguro obligatorio'], correcta: 1, explicacion: 'La ITV certifica que el vehículo cumple las condiciones técnicas y medioambientales exigidas.' },
      { id: 't2-2', pregunta: 'Un turismo nuevo debe pasar su primera ITV:', opciones: ['Al año', 'A los 4 años', 'A los 2 años'], correcta: 1, explicacion: 'Los turismos pasan su primera inspección a los 4 años de su matriculación.' },
      { id: 't2-3', pregunta: 'El seguro obligatorio de un vehículo cubre:', opciones: ['Los daños propios del conductor', 'Los daños causados a terceros', 'El robo del vehículo'], correcta: 1, explicacion: 'El seguro obligatorio cubre la responsabilidad civil frente a terceros.' },
      { id: 't2-4', pregunta: '¿Es obligatorio para circular tener el seguro en vigor?', opciones: ['No, es opcional', 'Sí, es obligatorio', 'Solo en autopistas'], correcta: 1, explicacion: 'Circular sin seguro obligatorio en vigor es una infracción, exista o no accidente.' },
      { id: 't2-5', pregunta: 'El permiso de circulación es un documento que corresponde:', opciones: ['Al conductor', 'Al vehículo', 'A la compañía de seguros'], correcta: 1, explicacion: 'El permiso de circulación identifica y autoriza al vehículo, no al conductor.' },
      { id: 't2-6', pregunta: 'Tras la primera ITV a los 4 años, un turismo debe pasarla:', opciones: ['Cada año', 'Cada 2 años hasta los 10 años', 'Cada 5 años'], correcta: 1, explicacion: 'Entre los 4 y los 10 años la periodicidad es bienal; a partir de los 10 años, anual.' },
      { id: 't2-7', pregunta: 'Si circulas sin seguro obligatorio en vigor:', opciones: ['No pasa nada si no tienes accidente', 'Es una infracción grave aunque no tengas accidente', 'Solo es infracción si superas los 10 años de antigüedad'], correcta: 1, explicacion: 'La falta de seguro obligatorio en vigor es sancionable de forma independiente a que se produzca un accidente.' },
      { id: 't2-8', pregunta: 'El seguro a todo riesgo (voluntario):', opciones: ['Es obligatorio en vehículos nuevos', 'Cubre también daños propios del vehículo', 'Sustituye a la ITV'], correcta: 1, explicacion: 'El seguro voluntario amplía la cobertura a los daños del propio vehículo, entre otras cosas.' }
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
      { id: 't3-1', pregunta: 'En una autovía con tres carriles por sentido, el carril de la izquierda se debe usar:', opciones: ['Para circular habitualmente', 'Solo para adelantar o maniobras temporales', 'Para vehículos lentos'], correcta: 1, explicacion: 'El carril izquierdo se reserva para adelantamientos, no para la circulación habitual.' },
      { id: 't3-2', pregunta: 'El carril BUS-VAO permite circular a:', opciones: ['Solo autobuses', 'Autobuses y vehículos con el número mínimo de ocupantes establecido', 'Todos los vehículos sin restricción'], correcta: 1, explicacion: 'El carril VAO está reservado a vehículos de alta ocupación, además de los autobuses.' },
      { id: 't3-3', pregunta: '¿Se puede circular habitualmente por el arcén?', opciones: ['Sí, siempre que esté libre', 'No, salvo que esté señalizado para ello temporalmente', 'Solo motocicletas'], correcta: 1, explicacion: 'El arcén solo se habilita como carril cuando hay señalización expresa que lo autoriza.' },
      { id: 't3-4', pregunta: 'Un carril reversible es aquel:', opciones: ['Que cambia su sentido de circulación según la hora o tráfico', 'Reservado para emergencias', 'Que solo usan bicicletas'], correcta: 0, explicacion: 'El carril reversible adapta su sentido de circulación a las necesidades del tráfico.' },
      { id: 't3-5', pregunta: 'La norma general de circulación en España es:', opciones: ['Por la izquierda', 'Por la derecha', 'Indistinto'], correcta: 1, explicacion: 'En España se circula por el lado derecho de la calzada.' },
      { id: 't3-6', pregunta: '¿Qué indica un carril señalizado con el símbolo de una bicicleta?', opciones: ['Carril compartido obligatoriamente con turismos', 'Carril reservado para bicicletas', 'Carril de adelantamiento'], correcta: 1, explicacion: 'Ese símbolo indica que el carril está reservado a las bicicletas.' },
      { id: 't3-7', pregunta: 'Cuando varios carriles tienen el mismo sentido, el conductor debe circular:', opciones: ['Siempre por el carril izquierdo', 'Por el carril más adecuado a su velocidad, generalmente el derecho', 'Por el central'], correcta: 1, explicacion: 'Se debe ocupar el carril adecuado a la velocidad, dejando libres los de la izquierda para adelantar.' },
      { id: 't3-8', pregunta: 'El carril VAO exige:', opciones: ['Un número mínimo de ocupantes en el vehículo', 'Llevar mercancías', 'Ser un vehículo eléctrico'], correcta: 0, explicacion: 'VAO significa "Vehículo de Alta Ocupación", exige un mínimo de ocupantes.' }
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
      { id: 't4-1', pregunta: 'Está prohibido cambiar de sentido:', opciones: ['En cualquier vía sin excepción', 'En autopistas y autovías, salvo en lugares habilitados', 'Solo en travesías'], correcta: 1, explicacion: 'El cambio de sentido está prohibido en autopistas y autovías salvo en los lugares habilitados para ello.' },
      { id: 't4-2', pregunta: 'En una rotonda (glorieta), la prioridad la tiene:', opciones: ['El vehículo que va a entrar', 'El vehículo que ya circula por dentro de la rotonda', 'El vehículo más grande'], correcta: 1, explicacion: 'Tiene prioridad quien ya circula por el interior de la rotonda.' },
      { id: 't4-3', pregunta: 'El sentido de circulación dentro de una rotonda en España es:', opciones: ['Horario (a favor de las agujas del reloj)', 'Antihorario (contrario a las agujas del reloj)', 'Indistinto'], correcta: 1, explicacion: 'En España se circula por rotondas en sentido contrario a las agujas del reloj.' },
      { id: 't4-4', pregunta: 'El carril de aceleración en una incorporación a autovía sirve para:', opciones: ['Permanecer circulando de forma habitual', 'Alcanzar una velocidad adecuada antes de incorporarse al tráfico', 'Hacer cambios de sentido'], correcta: 1, explicacion: 'Su función es permitir ganar velocidad para incorporarse con seguridad.' },
      { id: 't4-5', pregunta: 'Al incorporarte por un carril de aceleración debes:', opciones: ['Tener siempre prioridad sobre los que ya circulan', 'Adaptar tu velocidad y ceder el paso si es necesario', 'Detenerte siempre antes de incorporarte'], correcta: 1, explicacion: 'Quien se incorpora debe adaptar su velocidad y ceder el paso a quienes ya circulan por la vía principal.' },
      { id: 't4-6', pregunta: '¿Se puede dar marcha atrás en una autopista?', opciones: ['Sí, si no hay tráfico', 'No, está prohibido salvo maniobras imprescindibles en zonas habilitadas', 'Sí, siempre con las luces de emergencia'], correcta: 1, explicacion: 'La marcha atrás está prohibida en autopistas y autovías, salvo excepciones muy concretas.' },
      { id: 't4-7', pregunta: 'Un carril de deceleración se utiliza para:', opciones: ['Aumentar la velocidad antes de incorporarse', 'Reducir la velocidad antes de salir de la vía', 'Adelantar'], correcta: 1, explicacion: 'Permite reducir la velocidad de forma segura antes de abandonar la vía principal.' },
      { id: 't4-8', pregunta: 'Para cambiar de sentido en una vía donde está permitido, debes:', opciones: ['Hacerlo sin mirar si hay tráfico próximo', 'Señalizarlo y cerciorarte de que no hay riesgo ni lo prohíbe ninguna señal', 'Hacerlo solo de noche'], correcta: 1, explicacion: 'Toda maniobra debe señalizarse y realizarse comprobando que no existe riesgo ni prohibición.' }
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
      { id: 't5-1', pregunta: 'El límite de velocidad genérico para turismos en autovía es:', opciones: ['100 km/h', '120 km/h', '110 km/h'], correcta: 1, explicacion: 'El límite genérico en autovías y autopistas para turismos es de 120 km/h.' },
      { id: 't5-2', pregunta: 'En una vía convencional sin arcén pavimentado de al menos 1,5 m, el límite para turismos es:', opciones: ['100 km/h', '90 km/h', '80 km/h'], correcta: 1, explicacion: 'Sin ese arcén pavimentado mínimo, el límite se reduce a 90 km/h.' },
      { id: 't5-3', pregunta: 'En una calle urbana de un solo carril por sentido sin acera diferenciada del nivel de la calzada, el límite es:', opciones: ['50 km/h', '30 km/h', '20 km/h'], correcta: 2, explicacion: 'Las calles de plataforma única (sin acera diferenciada) tienen un límite genérico de 20 km/h.' },
      { id: 't5-4', pregunta: 'En una calle urbana de un solo carril por sentido con acera diferenciada, el límite es:', opciones: ['20 km/h', '30 km/h', '50 km/h'], correcta: 1, explicacion: 'Con acera diferenciada y un solo carril por sentido, el límite genérico es 30 km/h.' },
      { id: 't5-5', pregunta: 'En vías urbanas de dos o más carriles por sentido, el límite general es:', opciones: ['30 km/h', '50 km/h', '70 km/h'], correcta: 1, explicacion: 'En vías urbanas con dos o más carriles por sentido, el límite genérico es de 50 km/h.' },
      { id: 't5-6', pregunta: '¿Existe velocidad mínima obligatoria en autovías y autopistas?', opciones: ['No, nunca', 'Sí, para no entorpecer la circulación, salvo señal en contra', 'Solo para camiones'], correcta: 1, explicacion: 'Existe una velocidad mínima para no entorpecer la circulación normal del resto de vehículos.' },
      { id: 't5-7', pregunta: 'Un conductor novel (primer año) circulando por una autovía con límite de 120 km/h, no puede superar:', opciones: ['100 km/h', '90 km/h', '80 km/h'], correcta: 2, explicacion: 'Los conductores noveles tienen un límite máximo de 80 km/h en vías con límite superior.' },
      { id: 't5-8', pregunta: 'Si llueve, el límite de velocidad en autopista para turismos:', opciones: ['Se mantiene igual siempre', 'Se reduce respecto al límite en seco', 'Sube para compensar'], correcta: 1, explicacion: 'Con lluvia, los límites de velocidad en autopistas y autovías se reducen respecto a los de firme seco.' }
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
      { id: 't6-1', pregunta: 'La distancia de seguridad con el vehículo de delante debe permitir, ante todo:', opciones: ['Tocar el parachoques sin frenar', 'Detenerse a tiempo si el de delante frena', 'Adelantar en cualquier momento'], correcta: 1, explicacion: 'La finalidad de la distancia de seguridad es poder detenerse a tiempo ante un frenazo del vehículo precedente.' },
      { id: 't6-2', pregunta: 'En condiciones de lluvia o poca visibilidad, la distancia de seguridad debe:', opciones: ['Mantenerse igual', 'Aumentarse', 'Disminuirse'], correcta: 1, explicacion: 'En condiciones adversas se debe aumentar la distancia de seguridad respecto a la habitual.' },
      { id: 't6-3', pregunta: 'Al adelantar a un ciclista en vía convencional, la distancia lateral mínima debe ser de:', opciones: ['0,5 metros', '1 metro', '1,5 metros'], correcta: 2, explicacion: 'La normativa exige un margen lateral mínimo de 1,5 metros al adelantar a ciclistas.' },
      { id: 't6-4', pregunta: 'Si la velocidad de un vehículo se duplica, la distancia de frenado:', opciones: ['Se duplica también', 'Se multiplica aproximadamente por cuatro', 'No varía'], correcta: 1, explicacion: 'La distancia de frenado crece de forma proporcional al cuadrado de la velocidad.' },
      { id: 't6-5', pregunta: 'La distancia de detención total se compone de:', opciones: ['Solo la distancia de frenado', 'Distancia de reacción + distancia de frenado', 'Solo la distancia de reacción'], correcta: 1, explicacion: 'La distancia de detención suma el tiempo de reacción y el de frenado.' },
      { id: 't6-6', pregunta: 'La "regla de los 2 segundos" sirve para:', opciones: ['Calcular el tiempo de adelantamiento', 'Mantener una distancia de seguridad adecuada con el vehículo de delante', 'Medir el tiempo de frenada'], correcta: 1, explicacion: 'Es un método práctico para estimar si se mantiene una distancia de seguridad suficiente.' },
      { id: 't6-7', pregunta: 'La fatiga y el alcohol afectan a la distancia de seguridad porque:', opciones: ['Aumentan el tiempo de reacción del conductor', 'Reducen la velocidad del vehículo', 'No tienen ninguna relación'], correcta: 0, explicacion: 'Al aumentar el tiempo de reacción, también aumenta la distancia necesaria para detenerse.' },
      { id: 't6-8', pregunta: 'En caso de circular con un remolque pesado, la distancia de seguridad debe:', opciones: ['Reducirse', 'Aumentarse, por el mayor peso y distancia de frenado', 'Mantenerse igual que sin remolque'], correcta: 1, explicacion: 'A mayor peso y distancia de frenado, mayor debe ser la distancia de seguridad mantenida.' }
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
      { id: 't7-1', pregunta: 'En un cruce sin ninguna señalización, la prioridad de paso corresponde a:', opciones: ['El vehículo de mayor tamaño', 'El que circula por la izquierda', 'El que circula por la derecha'], correcta: 2, explicacion: 'Sin señalización, la prioridad general es para quien circula por la derecha.' },
      { id: 't7-2', pregunta: 'Si en un cruce hay una señal de STOP para ti y el resto de vías no tienen señal:', opciones: ['Tienes prioridad igualmente por venir de la derecha', 'Debes ceder el paso a todos los vehículos', 'Solo cedes el paso a las bicicletas'], correcta: 1, explicacion: 'La señalización (STOP) prevalece sobre la regla general de prioridad de la derecha.' },
      { id: 't7-3', pregunta: 'Ante un vehículo de emergencia con las señales luminosas y acústicas activadas:', opciones: ['Debes facilitarle el paso aunque tengas que apartarte con precaución', 'No tienes obligación de hacer nada', 'Debes seguir igual sin alterar tu marcha'], correcta: 0, explicacion: 'Hay que facilitar la circulación a los vehículos prioritarios, apartándose con precaución.' },
      { id: 't7-4', pregunta: 'En un paso estrecho donde solo puede circular un vehículo, tiene prioridad:', opciones: ['El vehículo más rápido', 'El que ya esté circulando por el paso o el que indique la señalización', 'El que pite primero'], correcta: 1, explicacion: 'Tiene prioridad quien ya circula por el paso estrecho o lo que determine la señalización.' },
      { id: 't7-5', pregunta: '¿Un vehículo prioritario en servicio de urgencia puede incumplir cualquier norma sin precaución?', opciones: ['Sí, siempre', 'No, debe actuar con la precaución necesaria para no crear peligro', 'Solo de noche'], correcta: 1, explicacion: 'Aun teniendo prioridad, debe circular con la precaución necesaria para no generar riesgos.' },
      { id: 't7-6', pregunta: 'Si dos vehículos llegan a la vez a una intersección sin señalizar y proceden de calles perpendiculares:', opciones: ['Tiene prioridad el de la izquierda', 'Tiene prioridad el de la derecha', 'Tiene prioridad el más grande'], correcta: 1, explicacion: 'La regla general de prioridad de la derecha resuelve este caso.' },
      { id: 't7-7', pregunta: 'La señal de "Ceda el paso" obliga a:', opciones: ['Detenerse siempre aunque no venga nadie', 'Reducir la velocidad y ceder el paso si viene algún vehículo', 'Acelerar para cruzar antes'], correcta: 1, explicacion: 'Ceda el Paso obliga a reducir la velocidad y, si es necesario, detenerse para ceder el paso.' },
      { id: 't7-8', pregunta: 'La señal de STOP obliga a:', opciones: ['Detención obligatoria y ceder el paso', 'Solo reducir la velocidad', 'Ceder el paso solo si hay peatones'], correcta: 0, explicacion: 'La señal de STOP exige detención obligatoria, exista o no tráfico visible en ese momento.' }
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
      { id: 't8-1', pregunta: 'Antes de realizar cualquier maniobra, el conductor debe:', opciones: ['Señalizarla y comprobar que puede hacerla con seguridad', 'Hacerla rápido para no entorpecer', 'Solo poner el intermitente'], correcta: 0, explicacion: 'Toda maniobra debe señalizarse y comprobarse previamente que se puede realizar con seguridad.' },
      { id: 't8-2', pregunta: 'El "punto ciego" o ángulo muerto es:', opciones: ['Una zona totalmente visible por el retrovisor central', 'Una zona no visible por los retrovisores que requiere girar la cabeza para comprobarla', 'Solo existe en motocicletas'], correcta: 1, explicacion: 'El ángulo muerto exige comprobación visual directa, no basta con los retrovisores.' },
      { id: 't8-3', pregunta: 'Para girar a la izquierda en una calzada de doble sentido sin marcas, debes situarte:', opciones: ['Lo más a la derecha posible', 'Lo más próximo posible al centro de la calzada', 'Indistintamente'], correcta: 1, explicacion: 'Antes de girar a la izquierda hay que colocarse próximo al centro de la calzada.' },
      { id: 't8-4', pregunta: 'Al incorporarte a una vía con más prioridad debes:', opciones: ['Tener siempre preferencia', 'Ceder el paso a quienes circulan por ella, salvo señal en contra', 'Pitar para avisar'], correcta: 1, explicacion: 'Quien se incorpora debe ceder el paso a los que ya circulan por la vía principal.' },
      { id: 't8-5', pregunta: 'La señalización de una maniobra (intermitente) debe hacerse:', opciones: ['En el mismo instante de iniciar el giro', 'Con la antelación suficiente para que otros usuarios la perciban', 'No es necesario si no hay tráfico'], correcta: 1, explicacion: 'La señalización debe anticiparse para que el resto de usuarios puedan reaccionar.' },
      { id: 't8-6', pregunta: 'Antes de cambiar de carril, además del retrovisor, conviene:', opciones: ['Girar la cabeza para comprobar el punto ciego', 'Acelerar para hacerlo más rápido', 'No es necesario nada más'], correcta: 0, explicacion: 'Hay que comprobar visualmente el ángulo muerto, que no cubre el retrovisor.' },
      { id: 't8-7', pregunta: 'Una incorporación a una autovía debe realizarse:', opciones: ['A la velocidad mínima posible deteniéndose si es necesario', 'Adaptando la velocidad del carril de aceleración a la del tráfico de la vía principal', 'Sin mirar, ya que tienen prioridad los que se incorporan'], correcta: 1, explicacion: 'La incorporación debe hacerse adaptando la velocidad al tráfico ya existente en la vía principal.' },
      { id: 't8-8', pregunta: 'Especial cuidado se debe tener con el ángulo muerto de:', opciones: ['Bicicletas', 'Camiones y autobuses, por ser más amplio', 'Ninguno en particular'], correcta: 1, explicacion: 'Los vehículos grandes tienen un ángulo muerto más amplio, requiriendo mayor precaución.' }
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
      { id: 't9-1', pregunta: 'Antes de adelantar, el conductor debe asegurarse de:', opciones: ['Que el carril contrario esté libre y haya distancia suficiente para completar la maniobra', 'Solo de que no venga nadie justo en ese instante', 'Que el vehículo a adelantar vaya despacio'], correcta: 0, explicacion: 'Hay que comprobar tanto que el carril está libre como que existe distancia suficiente para completar la maniobra con seguridad.' },
      { id: 't9-2', pregunta: 'Está prohibido adelantar:', opciones: ['En cualquier recta con buena visibilidad', 'En curvas o cambios de rasante sin visibilidad suficiente', 'En autovías'], correcta: 1, explicacion: 'La falta de visibilidad en curvas o cambios de rasante prohíbe el adelantamiento.' },
      { id: 't9-3', pregunta: 'Una línea continua en el centro de la calzada indica que:', opciones: ['Se puede adelantar con precaución', 'Está prohibido adelantar o cambiar de carril invadiéndola', 'Solo prohíbe parar'], correcta: 1, explicacion: 'La línea continua prohíbe cruzarla, por lo que impide adelantar invadiéndola.' },
      { id: 't9-4', pregunta: 'Tras completar un adelantamiento, el conductor debe:', opciones: ['Permanecer en el carril izquierdo el mayor tiempo posible', 'Volver a su carril en cuanto sea posible sin entorpecer al adelantado', 'Frenar bruscamente'], correcta: 1, explicacion: 'Hay que volver al carril de origen en cuanto se pueda hacer con seguridad.' },
      { id: 't9-5', pregunta: '¿Se puede adelantar en un paso de peatones?', opciones: ['Sí, si no hay peatones cruzando', 'No, está prohibido', 'Solo en zona urbana'], correcta: 1, explicacion: 'Adelantar en un paso de peatones está prohibido con carácter general.' },
      { id: 't9-6', pregunta: 'Si el vehículo que circula delante ha indicado que va a girar a la izquierda:', opciones: ['Puedes adelantarlo igualmente por la izquierda', 'No debes iniciar el adelantamiento por ese lado', 'Debes adelantarlo por la derecha sin más'], correcta: 1, explicacion: 'No se debe adelantar por el lado hacia el que el vehículo precedente ha indicado que va a girar.' },
      { id: 't9-7', pregunta: 'En un cambio de rasante (una loma) sin visibilidad del tramo siguiente:', opciones: ['Se puede adelantar si no se ve a nadie de frente', 'Está prohibido adelantar', 'Solo está prohibido de noche'], correcta: 1, explicacion: 'La falta de visibilidad por el cambio de rasante prohíbe adelantar, independientemente de si se ve tráfico o no.' },
      { id: 't9-8', pregunta: 'Adelantar a otro vehículo en una intersección está:', opciones: ['Permitido siempre', 'Prohibido, salvo excepciones señalizadas', 'Permitido solo a motocicletas'], correcta: 1, explicacion: 'Adelantar en intersecciones está prohibido salvo en los supuestos expresamente permitidos o señalizados.' }
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
      { id: 't10-1', pregunta: 'Se considera "parada" cuando la inmovilización del vehículo:', opciones: ['Dura más de 2 minutos', 'Dura como máximo 2 minutos y el conductor no lo abandona', 'El conductor abandona el vehículo'], correcta: 1, explicacion: 'La parada es una inmovilización breve (máx. 2 minutos) sin abandonar el vehículo.' },
      { id: 't10-2', pregunta: 'Se considera "estacionamiento" cuando:', opciones: ['La inmovilización dura más de 2 minutos o el conductor abandona el vehículo', 'Dura menos de 2 minutos', 'Es forzada por el tráfico'], correcta: 0, explicacion: 'El estacionamiento implica más de 2 minutos de inmovilización o el abandono del vehículo.' },
      { id: 't10-3', pregunta: 'La "detención" del vehículo se produce por:', opciones: ['Voluntad del conductor para hacer una gestión', 'Necesidad impuesta por las circunstancias del tráfico (p. ej. un semáforo)', 'Estacionamiento prolongado'], correcta: 1, explicacion: 'La detención es forzada por las circunstancias del tráfico, no es una decisión voluntaria del conductor.' },
      { id: 't10-4', pregunta: '¿Está permitido estacionar en un paso de peatones?', opciones: ['Sí, brevemente', 'No, está prohibido', 'Solo de noche'], correcta: 1, explicacion: 'Estacionar en un paso de peatones está prohibido en cualquier circunstancia.' },
      { id: 't10-5', pregunta: 'Estacionar en doble fila:', opciones: ['Está permitido sin restricciones', 'Está prohibido salvo que esté expresamente señalizado o autorizado', 'Solo lo pueden hacer las motos'], correcta: 1, explicacion: 'La doble fila está prohibida salvo autorización o señalización expresa.' },
      { id: 't10-6', pregunta: 'En una curva con visibilidad reducida:', opciones: ['Se puede parar brevemente', 'Está prohibido parar y estacionar', 'Solo está prohibido estacionar, no parar'], correcta: 1, explicacion: 'En curvas con visibilidad reducida está prohibido tanto parar como estacionar.' },
      { id: 't10-7', pregunta: 'En zona de estacionamiento regulado (zona azul), el conductor debe:', opciones: ['Nada, es gratuito siempre', 'Obtener el ticket o usar la app y respetar el tiempo máximo', 'Avisar a la policía local'], correcta: 1, explicacion: 'Hay que cumplir el procedimiento de pago/tiempo establecido en la zona regulada.' },
      { id: 't10-8', pregunta: 'Estacionar sobre la acera:', opciones: ['Está permitido si no hay peatones', 'Está prohibido con carácter general', 'Solo está prohibido en capitales de provincia'], correcta: 1, explicacion: 'Estacionar sobre la acera está prohibido con carácter general.' }
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
      { id: 't11-1', pregunta: 'Las luces de cruce son obligatorias:', opciones: ['Solo en autopistas', 'De noche, en túneles y con escasa visibilidad', 'Nunca son obligatorias'], correcta: 1, explicacion: 'Las luces de cruce son obligatorias de noche, en túneles y con escasa visibilidad.' },
      { id: 't11-2', pregunta: 'Las luces de carretera (largas) deben apagarse o cambiarse a cruce cuando:', opciones: ['Se vaya a cruzar con otro vehículo o se circule tras otro vehículo, para no deslumbrar', 'Llueva ligeramente', 'Se entre en una autovía'], correcta: 0, explicacion: 'Hay que evitar deslumbrar a otros conductores, tanto de frente como por delante de ti.' },
      { id: 't11-3', pregunta: 'Las luces antiniebla deben usarse:', opciones: ['Siempre que se circule de noche', 'Solo en condiciones de niebla, nieve, lluvia intensa o humo', 'Para circular más rápido'], correcta: 1, explicacion: 'Las antiniebla son exclusivamente para condiciones meteorológicas adversas concretas.' },
      { id: 't11-4', pregunta: 'Las luces de emergencia (warning) se utilizan para:', opciones: ['Sustituir el intermitente en cualquier giro', 'Advertir de un peligro u obstáculo, como una parada de emergencia', 'Indicar que vas a adelantar'], correcta: 1, explicacion: 'El warning advierte de un peligro o situación de emergencia, no sustituye al intermitente habitual.' },
      { id: 't11-5', pregunta: 'En un túnel iluminado, ¿es obligatorio encender las luces de cruce?', opciones: ['No, si está iluminado no es necesario', 'Sí, es obligatorio en todos los túneles, iluminados o no', 'Solo en túneles largos'], correcta: 1, explicacion: 'En todos los túneles es obligatorio circular con las luces de cruce encendidas.' },
      { id: 't11-6', pregunta: 'Circular de noche sin ningún tipo de alumbrado encendido:', opciones: ['Está permitido si hay alumbrado público suficiente', 'Está prohibido, se debe usar al menos el alumbrado de cruce', 'Solo es obligatorio en carretera, no en ciudad'], correcta: 1, explicacion: 'De noche es obligatorio circular como mínimo con las luces de cruce encendidas.' },
      { id: 't11-7', pregunta: 'Si un vehículo que circula detrás de ti te va a adelantar de noche, tú debes:', opciones: ['Poner las luces de carretera para verle mejor', 'Mantener las luces de cruce para no deslumbrarle', 'Apagar todas las luces'], correcta: 1, explicacion: 'Hay que evitar deslumbrar al vehículo que está adelantando, manteniendo las luces de cruce.' },
      { id: 't11-8', pregunta: 'Las luces de posición (delanteras y traseras) deben usarse:', opciones: ['Solo de día', 'Siempre que el vehículo circule o esté parado en vía sin iluminación suficiente', 'Nunca'], correcta: 1, explicacion: 'Las luces de posición deben estar encendidas, junto con las de cruce o como mínimo ellas, en situaciones de baja visibilidad.' }
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
      { id: 't12-1', pregunta: 'El orden de prioridad entre las distintas señales es:', opciones: ['Semáforo, agente, señal vertical', 'Agente, semáforo, señal vertical/horizontal, normas generales', 'Señal vertical, semáforo, agente'], correcta: 1, explicacion: 'El agente tiene prioridad sobre el semáforo, y este sobre las señales y normas generales.' },
      { id: 't12-2', pregunta: 'Un agente con el brazo levantado verticalmente indica:', opciones: ['Vía libre', 'Detención obligatoria para todos los afectados', 'Solo aviso de peligro'], correcta: 1, explicacion: 'El brazo en alto del agente ordena la detención obligatoria.' },
      { id: 't12-3', pregunta: 'Un agente con el brazo extendido horizontalmente ordena detenerse a:', opciones: ['Todos los vehículos sin excepción', 'A los conductores cuya trayectoria corte esa dirección señalada', 'Solo a los peatones'], correcta: 1, explicacion: 'Solo deben detenerse quienes circulan en la dirección que el brazo extendido corta.' },
      { id: 't12-4', pregunta: 'Las indicaciones de un agente de circulación prevalecen sobre:', opciones: ['Solo las señales horizontales', 'Las señales, semáforos y normas generales de circulación', 'Nada, son solo orientativas'], correcta: 1, explicacion: 'Las indicaciones del agente prevalecen sobre cualquier otra señalización y sobre las normas generales.' },
      { id: 't12-5', pregunta: 'Un panel de mensaje variable que indica un límite de velocidad:', opciones: ['Es solo informativo, no obligatorio', 'Tiene carácter de señal reglamentaria mientras se muestra', 'Solo aplica a camiones'], correcta: 1, explicacion: 'Mientras el panel muestre el límite, este es de obligado cumplimiento.' },
      { id: 't12-6', pregunta: 'El movimiento de balanceo del agente con el brazo hacia abajo indica:', opciones: ['Aumentar la velocidad', 'Reducir la velocidad', 'Detenerse inmediatamente'], correcta: 1, explicacion: 'Ese movimiento es un aviso para que los conductores reduzcan la velocidad.' },
      { id: 't12-7', pregunta: 'Si un semáforo está en verde pero un agente ordena detenerse:', opciones: ['Debes seguir porque el semáforo manda', 'Debes obedecer al agente', 'Depende de la hora del día'], correcta: 1, explicacion: 'El agente prevalece sobre la indicación del semáforo.' },
      { id: 't12-8', pregunta: 'Los paneles de mensaje variable en autovías sirven para informar de:', opciones: ['Solo publicidad', 'Incidencias, cierres de carril o límites temporales de velocidad', 'El tiempo meteorológico exclusivamente'], correcta: 1, explicacion: 'Los PMV informan de incidencias de tráfico, cierres de carril o límites temporales.' }
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
      { id: 't13-1', pregunta: 'Una señal triangular con borde rojo indica generalmente:', opciones: ['Una obligación', 'Un peligro', 'Una prohibición'], correcta: 1, explicacion: 'Las señales triangulares advierten de un peligro.' },
      { id: 't13-2', pregunta: 'Una señal circular de fondo blanco y borde rojo indica:', opciones: ['Obligación de hacer algo', 'Prohibición o restricción', 'Información'], correcta: 1, explicacion: 'El círculo blanco con borde rojo indica prohibición o restricción.' },
      { id: 't13-3', pregunta: 'Una señal circular de fondo azul (sin borde rojo) indica:', opciones: ['Prohibición', 'Obligación', 'Peligro'], correcta: 1, explicacion: 'El círculo de fondo azul, sin borde rojo, indica obligación.' },
      { id: 't13-4', pregunta: 'La señal de STOP tiene forma:', opciones: ['Triangular', 'Circular', 'Octogonal'], correcta: 2, explicacion: 'La señal de STOP es octogonal y de color rojo.' },
      { id: 't13-5', pregunta: 'La señal de "Ceda el paso" tiene forma de:', opciones: ['Triángulo invertido', 'Círculo', 'Cuadrado'], correcta: 0, explicacion: 'Ceda el Paso se representa con un triángulo invertido.' },
      { id: 't13-6', pregunta: 'Una señal con una línea diagonal sobre otra señal de prohibición suele indicar:', opciones: ['Refuerzo de la prohibición', 'Fin de la prohibición o restricción', 'Doble prohibición'], correcta: 1, explicacion: 'La línea diagonal indica que finaliza la prohibición o restricción anterior.' },
      { id: 't13-7', pregunta: 'Las señales cuadradas o rectangulares de fondo azul suelen indicar:', opciones: ['Peligro', 'Información o indicación (p. ej. autopista, aparcamiento)', 'Prohibición'], correcta: 1, explicacion: 'Estas señales aportan información o indicaciones útiles para el conductor.' },
      { id: 't13-8', pregunta: 'Ante una señal de peligro (triangular), el conductor debe:', opciones: ['Ignorarla si conoce la vía', 'Adoptar precauciones especiales ante el riesgo indicado', 'Acelerar para pasar el tramo rápido'], correcta: 1, explicacion: 'Las señales de peligro exigen adoptar precauciones específicas ante el riesgo señalado.' }
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
      { id: 't14-1', pregunta: 'Una línea longitudinal continua en el centro de la calzada significa:', opciones: ['Se puede adelantar con cuidado', 'Prohibido cruzarla o circular sobre ella', 'Solo aplica a camiones'], correcta: 1, explicacion: 'La línea continua prohíbe cruzarla o circular sobre ella.' },
      { id: 't14-2', pregunta: 'Una línea discontinua permite:', opciones: ['Cruzarla para adelantar o cambiar de carril con precaución', 'Nunca cruzarla', 'Solo cruzarla de noche'], correcta: 0, explicacion: 'La línea discontinua permite cruzarla con precaución cuando sea necesario y seguro.' },
      { id: 't14-3', pregunta: 'En una línea mixta (continua y discontinua), puede cruzarla:', opciones: ['Cualquiera de los dos sentidos', 'Solo el conductor que tiene la línea discontinua más próxima a su carril', 'Nadie'], correcta: 1, explicacion: 'Solo puede cruzar quien tiene la línea discontinua en su lado.' },
      { id: 't14-4', pregunta: 'El color amarillo (ámbar) en el semáforo significa:', opciones: ['Aumentar la velocidad para pasar', 'Detenerse si se puede hacer con seguridad, el ciclo va a cambiar a rojo', 'Tiene el mismo significado que el verde'], correcta: 1, explicacion: 'El ámbar avisa de que el semáforo va a cambiar a rojo; hay que detenerse si es seguro hacerlo.' },
      { id: 't14-5', pregunta: 'Una flecha verde en el semáforo indica que:', opciones: ['Se puede circular en cualquier dirección', 'Solo se permite la circulación en el sentido de la flecha, estando el resto de direcciones en rojo', 'Es solo informativa'], correcta: 1, explicacion: 'La flecha verde habilita exclusivamente esa dirección concreta.' },
      { id: 't14-6', pregunta: 'El cebreado en la calzada (líneas oblicuas blancas) indica:', opciones: ['Zona donde está permitido estacionar', 'Zona excluida de la circulación de vehículos', 'Carril preferente'], correcta: 1, explicacion: 'El cebreado señala una zona excluida de la circulación de vehículos.' },
      { id: 't14-7', pregunta: 'Una línea de detención pintada en el suelo antes de un cruce obliga a:', opciones: ['Detenerse exactamente en ella si la señal correspondiente lo exige', 'Es meramente decorativa', 'Solo indica el paso de peatones'], correcta: 0, explicacion: 'Hay que detenerse en esa línea cuando la señalización (STOP, semáforo) lo exija.' },
      { id: 't14-8', pregunta: 'Un semáforo en ámbar intermitente, sin otra señalización, equivale a:', opciones: ['Una señal de Ceda el Paso', 'Una señal de STOP', 'Vía libre sin restricciones'], correcta: 0, explicacion: 'El ámbar intermitente equivale a una señal de Ceda el Paso.' }
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
      { id: 't15-1', pregunta: 'El límite general de alcohol en aire espirado para conductores en general es de:', opciones: ['0,15 mg/l', '0,25 mg/l', '0,50 mg/l'], correcta: 1, explicacion: 'El límite general en aire espirado es de 0,25 mg/l.' },
      { id: 't15-2', pregunta: 'Para conductores noveles (menos de 2 años de carné) el límite de alcohol en aire espirado es:', opciones: ['0,25 mg/l, igual que el general', '0,15 mg/l, más restrictivo', 'No tienen límite especial'], correcta: 1, explicacion: 'Los noveles tienen un límite más estricto: 0,15 mg/l.' },
      { id: 't15-3', pregunta: 'En relación con las drogas, la normativa española establece:', opciones: ['Un límite permitido similar al del alcohol', 'Tolerancia cero, cualquier presencia detectada es sancionable', 'Solo se sanciona si hay accidente'], correcta: 1, explicacion: 'Con las drogas se aplica tolerancia cero, sin margen permitido.' },
      { id: 't15-4', pregunta: 'El alcohol, incluso en cantidades por debajo del límite legal:', opciones: ['No afecta a la conducción', 'Puede afectar a los reflejos y la percepción del riesgo', 'Mejora los reflejos'], correcta: 1, explicacion: 'El alcohol afecta a la conducción de forma progresiva, incluso en pequeñas cantidades.' },
      { id: 't15-5', pregunta: 'El límite de alcohol en sangre equivalente al límite general en aire espirado es de:', opciones: ['0,5 g/l', '0,3 g/l', '0,8 g/l'], correcta: 0, explicacion: 'El límite general equivale a 0,5 gramos por litro en sangre.' },
      { id: 't15-6', pregunta: 'Los conductores profesionales tienen el mismo límite de alcohol que:', opciones: ['Los conductores noveles, más restrictivo', 'Los conductores generales', 'No tienen ningún límite'], correcta: 0, explicacion: 'Profesionales y noveles comparten el límite más restrictivo de 0,15 mg/l.' },
      { id: 't15-7', pregunta: 'A medida que aumenta la tasa de alcohol en sangre, el riesgo de sufrir un accidente:', opciones: ['Se mantiene igual', 'Disminuye', 'Aumenta progresivamente, de forma más que proporcional'], correcta: 2, explicacion: 'El riesgo de accidente crece de forma exponencial con la tasa de alcohol.' },
      { id: 't15-8', pregunta: 'Si un conductor novel da un resultado de 0,20 mg/l en aire espirado:', opciones: ['Está dentro del límite legal para él', 'Supera el límite permitido para conductores noveles', 'Es indiferente porque no hay límite especial'], correcta: 1, explicacion: '0,20 mg/l supera el límite de 0,15 mg/l aplicable a los conductores noveles.' }
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
      { id: 't16-1', pregunta: 'Se recomienda hacer una parada de descanso en viajes largos aproximadamente cada:', opciones: ['30 minutos', '2 horas o 200 km', '6 horas'], correcta: 1, explicacion: 'Se recomienda parar cada 2 horas o 200 km en viajes largos.' },
      { id: 't16-2', pregunta: 'El uso del teléfono móvil sujetándolo con la mano mientras se conduce:', opciones: ['Está permitido si es breve', 'Está prohibido', 'Solo está prohibido en autopistas'], correcta: 1, explicacion: 'Está prohibido conducir sujetando o manipulando el móvil con la mano.' },
      { id: 't16-3', pregunta: 'Un "microsueño" es:', opciones: ['Una breve pérdida de consciencia de pocos segundos que puede pasar inadvertida', 'Un tipo de frenada', 'Una señal de tráfico'], correcta: 0, explicacion: 'El microsueño es una pérdida de consciencia muy breve, a veces imperceptible para quien la sufre.' },
      { id: 't16-4', pregunta: '¿Qué remedio es realmente eficaz contra la somnolencia al volante?', opciones: ['Abrir la ventanilla', 'Subir el volumen de la música', 'Detenerse y descansar/dormir'], correcta: 2, explicacion: 'Solo el descanso real es eficaz contra la somnolencia; el resto son remedios ineficaces.' },
      { id: 't16-5', pregunta: 'Las distracciones (móvil, comer, manipular el GPS) afectan a la conducción porque:', opciones: ['No afectan si se hace rápido', 'Desvían la atención visual, manual y/o mental del conductor', 'Solo afectan de noche'], correcta: 1, explicacion: 'Cualquier distracción desvía parte de la atención necesaria para conducir con seguridad.' },
      { id: 't16-6', pregunta: 'La fatiga acumulada en un viaje largo:', opciones: ['No influye en la capacidad de reacción', 'Aumenta el tiempo de reacción y reduce la atención', 'Mejora la concentración'], correcta: 1, explicacion: 'La fatiga deteriora el tiempo de reacción y la capacidad de atención.' },
      { id: 't16-7', pregunta: 'Conducir tras dormir pocas horas:', opciones: ['Es seguro si el trayecto es corto', 'Aumenta significativamente el riesgo de sufrir un accidente', 'No tiene ningún efecto'], correcta: 1, explicacion: 'Dormir poco antes de conducir aumenta de forma notable el riesgo de accidente.' },
      { id: 't16-8', pregunta: 'Para evitar la fatiga en un viaje largo es recomendable:', opciones: ['Planificar paradas periódicas y dormir bien antes de salir', 'Tomar bebidas energéticas en lugar de descansar', 'Conducir de noche siempre para evitar el calor'], correcta: 0, explicacion: 'La mejor prevención es planificar descansos y partir con un buen descanso previo.' }
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
      { id: 't17-1', pregunta: 'El "aquaplaning" se produce cuando:', opciones: ['El vehículo pierde contacto con el firme por una capa de agua a velocidad excesiva', 'Se pincha una rueda', 'Se calienta el motor'], correcta: 0, explicacion: 'El aquaplaning ocurre cuando una capa de agua impide el contacto del neumático con el asfalto, normalmente por exceso de velocidad.' },
      { id: 't17-2', pregunta: 'En caso de niebla densa, el conductor debe:', opciones: ['Mantener la velocidad y usar luces largas', 'Reducir mucho la velocidad, usar luces de cruce/antiniebla y aumentar la distancia de seguridad', 'Adelantar en cuanto pueda para salir de la zona'], correcta: 1, explicacion: 'En niebla densa hay que reducir mucho la velocidad y aumentar precauciones, evitando adelantamientos.' },
      { id: 't17-3', pregunta: 'El "hielo negro" es peligroso porque:', opciones: ['Es muy visible y fácil de evitar', 'Es prácticamente invisible sobre el asfalto', 'Solo aparece en verano'], correcta: 1, explicacion: 'El hielo negro pasa casi inadvertido a la vista, lo que lo hace especialmente peligroso.' },
      { id: 't17-4', pregunta: 'El viento lateral fuerte afecta especialmente a:', opciones: ['Vehículos bajos y deportivos', 'Vehículos altos, autocaravanas y los que llevan remolque', 'Solo a las bicicletas'], correcta: 1, explicacion: 'Los vehículos altos o con remolque ofrecen más superficie al viento, siendo más vulnerables.' },
      { id: 't17-5', pregunta: 'En firme mojado, la distancia de frenado respecto al firme seco:', opciones: ['Es menor', 'Es mayor', 'Es igual'], correcta: 1, explicacion: 'En firme mojado se reduce la adherencia y aumenta la distancia necesaria para frenar.' },
      { id: 't17-6', pregunta: 'Ante una zona con posible hielo (puentes, zonas sombreadas en invierno), se debe:', opciones: ['Frenar bruscamente al notarlo', 'Reducir la velocidad con antelación y evitar frenadas o giros brusco', 'Acelerar para salir cuanto antes'], correcta: 1, explicacion: 'Hay que anticiparse reduciendo la velocidad y evitando maniobras bruscas sobre el hielo.' },
      { id: 't17-7', pregunta: 'Con lluvia intensa, además de reducir la velocidad, es recomendable:', opciones: ['Usar las luces antiniebla si la visibilidad lo requiere y aumentar la distancia de seguridad', 'Apagar todas las luces', 'Circular más cerca del vehículo de delante para verlo mejor'], correcta: 0, explicacion: 'Conviene aumentar la distancia de seguridad y usar el alumbrado adecuado según la visibilidad.' },
      { id: 't17-8', pregunta: 'La adherencia de los neumáticos al asfalto en condiciones de lluvia:', opciones: ['Aumenta', 'Disminuye', 'No varía'], correcta: 1, explicacion: 'La lluvia reduce la adherencia entre el neumático y el firme.' }
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
      { id: 't18-1', pregunta: 'El orden correcto de actuación ante un accidente según el método PAS es:', opciones: ['Socorrer, Avisar, Proteger', 'Proteger, Avisar, Socorrer', 'Avisar, Socorrer, Proteger'], correcta: 1, explicacion: 'El método PAS sigue el orden: Proteger, Avisar, Socorrer.' },
      { id: 't18-2', pregunta: 'Proteger la zona de un accidente sirve para:', opciones: ['Decorar la escena', 'Evitar que se produzcan nuevos accidentes o víctimas', 'Identificar a los culpables'], correcta: 1, explicacion: 'Proteger la zona busca evitar que se produzcan nuevos accidentes.' },
      { id: 't18-3', pregunta: 'Al llamar al 112 para avisar de un accidente, es importante indicar:', opciones: ['Solo tu nombre', 'El lugar exacto, número de heridos y su estado aparente', 'Nada, basta con llamar y colgar'], correcta: 1, explicacion: 'Es fundamental dar datos precisos sobre el lugar, los heridos y su estado.' },
      { id: 't18-4', pregunta: 'Ante un herido tras un accidente, en general:', opciones: ['Hay que moverlo inmediatamente a un lugar cómodo', 'No se debe mover, salvo peligro inminente (incendio, etc.)', 'Hay que sentarlo siempre'], correcta: 1, explicacion: 'No se debe mover al herido salvo que exista un peligro real e inminente.' },
      { id: 't18-5', pregunta: 'A un motorista herido tras una caída, se le debe quitar el casco:', opciones: ['Siempre, lo primero', 'Solo si es imprescindible para realizar maniobras de reanimación', 'Nunca, bajo ninguna circunstancia'], correcta: 1, explicacion: 'Quitar el casco solo está indicado si es imprescindible para reanimar, por el riesgo de lesión medular.' },
      { id: 't18-6', pregunta: 'La presión y el desgaste de los neumáticos influyen en:', opciones: ['Solo en el consumo de combustible', 'La distancia de frenado y el riesgo de aquaplaning', 'No influyen en la seguridad'], correcta: 1, explicacion: 'El estado de los neumáticos afecta directamente a la seguridad: frenada y adherencia.' },
      { id: 't18-7', pregunta: 'Antes de un viaje largo, conviene revisar:', opciones: ['Solo la gasolina', 'Niveles de aceite y refrigerante, presión de neumáticos y frenos', 'Nada en particular'], correcta: 1, explicacion: 'Una revisión básica previa reduce el riesgo de averías y accidentes.' },
      { id: 't18-8', pregunta: 'Si tu vehículo sufre una avería en autopista, debes:', opciones: ['Quedarte dentro del vehículo en el carril', 'Detenerte en el arcén, señalizar y, si es posible, situarte tras el quitamiedos antes de avisar', 'Abandonar el vehículo en el carril e ir a pie por el carril'], correcta: 1, explicacion: 'Hay que apartarse de la calzada, señalizar y ponerse a salvo tras la protección lateral antes de avisar.' }
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
