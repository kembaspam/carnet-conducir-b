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
      { id: 't1-1', pregunta: '¿Cuál de los siguientes elementos NO forma parte de la calzada?', opciones: ['Un carril de circulación normal', 'Un carril reservado para autobuses', 'El arcén de la vía'], correcta: 2, explicacion: 'El arcén es parte de la vía pero queda fuera de la calzada; está destinado principalmente a paradas de emergencia.' },
      { id: 't1-2', pregunta: 'La mediana de una autovía es:', opciones: ['La franja que separa los dos sentidos de circulación', 'El carril central de la autovía', 'La zona destinada al estacionamiento de emergencia'], correcta: 0, explicacion: 'La mediana es el elemento que separa físicamente los dos sentidos opuestos de circulación en una autovía o autopista.' },
      { id: 't1-3', pregunta: '¿Qué se entiende por "vía" en el Reglamento General de Circulación?', opciones: ['Únicamente la calzada destinada a los vehículos', 'El espacio destinado a la circulación que incluye calzada, arcenes, aceras y medianas', 'Solo las autopistas y autovías de peaje'], correcta: 1, explicacion: 'La "vía" engloba todo el espacio destinado a la circulación pública, no solo la calzada.' },
      { id: 't1-4', pregunta: 'Un carril es:', opciones: ['Cada franja longitudinal de la calzada por la que puede circular una fila de vehículos', 'El espacio total entre dos líneas continuas de cualquier tipo', 'Cualquier zona con asfalto, incluido el arcén'], correcta: 0, explicacion: 'El carril es cada franja longitudinal de la calzada destinada a la circulación de una fila de vehículos.' },
      { id: 't1-5', pregunta: 'La berma es:', opciones: ['La zona sin pavimentar situada más allá del arcén, en el límite exterior de la vía', 'Un tipo especial de arcén pavimentado para bicis', 'La línea de pintura que separa los carriles'], correcta: 0, explicacion: 'La berma es la franja, normalmente sin pavimentar, que queda fuera del arcén, en el límite exterior de la vía.' },
      { id: 't1-6', pregunta: 'La "isleta" en una intersección tiene como función:', opciones: ['Separar los sentidos opuestos de circulación en autopistas', 'Encauzar y ordenar los distintos movimientos del tráfico en el cruce', 'Señalizar el fin de la calzada'], correcta: 1, explicacion: 'La isleta organiza y canaliza los movimientos de los vehículos en las intersecciones.' },
      { id: 't1-7', pregunta: '¿El arcén forma parte de la calzada?', opciones: ['Sí, en todos los tipos de vía', 'Solo en autopistas y autovías', 'No; el arcén es parte de la vía pero no de la calzada'], correcta: 2, explicacion: 'El arcén pertenece a la vía en su conjunto, pero no a la calzada, que es la zona reservada a la circulación de vehículos.' },
      { id: 't1-8', pregunta: 'En una autovía con dos calzadas separadas por mediana, cada calzada tiene carriles para:', opciones: ['Ambos sentidos de circulación', 'Un único sentido de circulación', 'El sentido que más tráfico tenga en cada momento'], correcta: 1, explicacion: 'En autovías y autopistas, cada calzada está destinada a un único sentido de circulación, separadas ambas por la mediana.' }
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
      { id: 't2-1', pregunta: '¿Cuándo debe pasar la primera ITV un turismo nuevo?', opciones: ['Al año de su matriculación', 'A los 2 años de su matriculación', 'A los 4 años de su matriculación'], correcta: 2, explicacion: 'Un turismo nuevo pasa su primera Inspección Técnica de Vehículos a los 4 años de la matriculación.' },
      { id: 't2-2', pregunta: 'Un turismo de 7 años de antigüedad, ¿con qué frecuencia debe pasar la ITV?', opciones: ['Cada año', 'Cada 2 años', 'Cada 4 años'], correcta: 1, explicacion: 'Entre los 4 y los 10 años de antigüedad, los turismos pasan la ITV cada 2 años.' },
      { id: 't2-3', pregunta: 'Un turismo con 12 años de antigüedad debe pasar la ITV:', opciones: ['Cada 2 años', 'Cada 4 años', 'Cada año'], correcta: 2, explicacion: 'A partir de los 10 años de antigüedad, los turismos pasan la ITV anualmente.' },
      { id: 't2-4', pregunta: 'El seguro obligatorio de responsabilidad civil cubre:', opciones: ['Los daños materiales del propio vehículo asegurado', 'Los daños causados a terceros (personas y sus bienes)', 'El robo del vehículo asegurado'], correcta: 1, explicacion: 'El seguro obligatorio cubre únicamente los daños causados a terceros; no cubre los del propio vehículo.' },
      { id: 't2-5', pregunta: 'Circular con el seguro obligatorio caducado, aunque no haya accidente:', opciones: ['No tiene consecuencias si no se produce siniestro', 'Constituye una infracción grave sancionable', 'Solo se sanciona si el vehículo tiene más de 10 años'], correcta: 1, explicacion: 'Circular sin seguro obligatorio en vigor es una infracción grave, independientemente de que se produzca o no un accidente.' },
      { id: 't2-6', pregunta: 'El permiso de circulación identifica:', opciones: ['Al conductor y su historial de infracciones', 'Al vehículo y a su titular', 'A la compañía aseguradora del vehículo'], correcta: 1, explicacion: 'El permiso de circulación acredita la identidad del vehículo y lo vincula a su titular, no al conductor.' },
      { id: 't2-7', pregunta: 'Tras la primera ITV a los 4 años, ¿cuándo se realizará la siguiente si no hay defectos graves?', opciones: ['Al año siguiente (a los 5 años)', 'A los 2 años (a los 6 años)', 'A los 4 años (a los 8 años)'], correcta: 1, explicacion: 'Tras la primera ITV a los 4 años, la periodicidad es bienal (cada 2 años) hasta los 10 años.' },
      { id: 't2-8', pregunta: '¿Qué cubre el seguro voluntario "a todo riesgo" que NO cubre el seguro obligatorio?', opciones: ['Los daños causados a los ocupantes del otro vehículo', 'Los daños materiales del propio vehículo y otros riesgos adicionales', 'Los daños a infraestructuras públicas como farolas'], correcta: 1, explicacion: 'El seguro voluntario amplía la cobertura a los daños del propio vehículo, entre otras coberturas adicionales.' }
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
      { id: 't3-1', pregunta: 'La norma general de circulación en España obliga a conducir:', opciones: ['Por la izquierda de la calzada', 'Por el centro de la calzada', 'Por la derecha de la calzada'], correcta: 2, explicacion: 'En España se debe circular por la derecha de la calzada, lo más cerca posible al borde derecho.' },
      { id: 't3-2', pregunta: 'En una autopista con tres carriles por sentido, el carril izquierdo está destinado a:', opciones: ['La circulación habitual de todos los vehículos', 'Adelantamientos y maniobras temporales, no para circular de forma continua', 'Los vehículos de alta cilindrada exclusivamente'], correcta: 1, explicacion: 'El carril izquierdo se reserva para adelantar o maniobras puntuales; ocuparlo de forma habitual es una infracción.' },
      { id: 't3-3', pregunta: 'Un conductor que viaja solo, ¿puede usar un carril VAO que exige mínimo 2 ocupantes?', opciones: ['Sí, si circula a la velocidad mínima del carril', 'No, no cumple el requisito mínimo de ocupantes', 'Sí, siempre que sea un turismo y no una furgoneta'], correcta: 1, explicacion: 'El carril VAO exige el número mínimo de ocupantes indicado por la señalización; un conductor solo no puede usarlo.' },
      { id: 't3-4', pregunta: '¿Cuándo está permitido circular por el arcén como carril adicional?', opciones: ['Cuando hay atasco en la calzada principal', 'Solo cuando esté expresamente señalizado y habilitado para ello', 'En horario nocturno si no hay otro tráfico'], correcta: 1, explicacion: 'El arcén solo puede usarse como carril cuando exista señalización específica que así lo autorice temporalmente.' },
      { id: 't3-5', pregunta: 'Un carril señalizado como BUS puede ser usado habitualmente por:', opciones: ['Cualquier vehículo fuera del horario de autobuses', 'Solo los autobuses (y en algunos casos taxis o bicicletas, según señalización)', 'Todos los vehículos en horas punta'], correcta: 1, explicacion: 'Los carriles BUS tienen sus condiciones de uso marcadas por señalización; normalmente solo autobuses, aunque algunos también permiten taxis o bicicletas.' },
      { id: 't3-6', pregunta: 'En una calzada de dos carriles por sentido, si no vas a adelantar, debes circular:', opciones: ['Por el carril izquierdo para dejar el derecho libre a los lentos', 'Por el carril derecho, reservando el izquierdo para adelantamientos', 'Indistintamente por cualquier carril'], correcta: 1, explicacion: 'Hay que circular por el carril derecho y dejar el izquierdo libre para adelantar.' },
      { id: 't3-7', pregunta: 'En una vía de doble sentido con un único carril por sentido, adelantar:', opciones: ['Está siempre prohibido', 'Está permitido si la señalización no lo prohíbe y existe visibilidad suficiente', 'Solo pueden hacerlo las motocicletas'], correcta: 1, explicacion: 'Un solo carril por sentido no implica prohibición de adelantar; depende de la señalización y la visibilidad disponible.' },
      { id: 't3-8', pregunta: 'Un carril reversible es aquel que:', opciones: ['Solo puede usarse circulando en marcha atrás', 'Cambia su sentido de circulación según las necesidades del tráfico (hora punta, etc.)', 'Está reservado exclusivamente para vehículos de emergencia'], correcta: 1, explicacion: 'El carril reversible adapta su sentido de circulación a los flujos de tráfico, que varían a lo largo del día.' }
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
      { id: 't4-1', pregunta: 'En las rotondas españolas, la circulación se realiza:', opciones: ['En el sentido de las agujas del reloj', 'En sentido contrario a las agujas del reloj', 'En el sentido que elija el primer conductor que llega'], correcta: 1, explicacion: 'En España se circula por las rotondas (glorietas) en sentido contrario a las agujas del reloj.' },
      { id: 't4-2', pregunta: 'Al llegar a una rotonda con señal de "Ceda el paso", tienes que:', opciones: ['Entrar con prioridad porque ya te incorporas', 'Ceder el paso a los vehículos que ya circulan por el interior de la rotonda', 'Detenerte completamente aunque no haya tráfico interior'], correcta: 1, explicacion: 'Al entrar en una rotonda se cede el paso a quien ya circula por su interior.' },
      { id: 't4-3', pregunta: '¿Se puede cambiar de sentido en una autopista?', opciones: ['Sí, si el tramo está libre de tráfico', 'Sí, usando las luces de emergencia', 'No, salvo en los lugares expresamente habilitados para ello'], correcta: 2, explicacion: 'El cambio de sentido en autopistas y autovías está prohibido salvo en los lugares específicamente habilitados.' },
      { id: 't4-4', pregunta: 'El carril de aceleración en una incorporación a autovía sirve para:', opciones: ['Reducir la velocidad antes de salir de la autovía', 'Alcanzar la velocidad adecuada antes de incorporarse al flujo de la vía principal', 'Circular de forma habitual cuando hay atasco en la autovía'], correcta: 1, explicacion: 'El carril de aceleración permite ganar velocidad para incorporarse con seguridad al tráfico ya existente en la vía.' },
      { id: 't4-5', pregunta: '¿Quién tiene prioridad al incorporarse desde un carril de aceleración a la vía principal?', opciones: ['El que se incorpora, siempre', 'El tráfico ya circulante por la vía principal', 'El que lleva mayor velocidad en ese momento'], correcta: 1, explicacion: 'Quien se incorpora debe ceder el paso a los vehículos que ya circulan por la vía principal.' },
      { id: 't4-6', pregunta: '¿Se puede dar marcha atrás en una autovía?', opciones: ['Sí, si no viene nadie de atrás', 'Sí, con las luces de emergencia activadas', 'No, está prohibido salvo en zonas habilitadas y por necesidad imprescindible'], correcta: 2, explicacion: 'La marcha atrás está prohibida en autopistas y autovías; solo se permite en situaciones excepcionales en zonas habilitadas.' },
      { id: 't4-7', pregunta: 'El carril de deceleración en una salida de autovía se usa para:', opciones: ['Acelerar al reincorporarse a la vía principal', 'Reducir la velocidad antes de abandonar la vía principal', 'Adelantar a los vehículos más lentos'], correcta: 1, explicacion: 'El carril de deceleración permite frenar progresivamente antes de salir de la vía principal de forma segura.' },
      { id: 't4-8', pregunta: 'Para cambiar de sentido en una vía ordinaria donde no está prohibido, el conductor debe:', opciones: ['Girar bruscamente sin señalizar para no entorpecer', 'Señalizarlo y comprobar que no existe riesgo ni prohibición alguna', 'Hacerlo solo si hay un semáforo próximo que lo facilite'], correcta: 1, explicacion: 'Toda maniobra, incluido el cambio de sentido, debe señalizarse y verificarse que es segura y legalmente permitida.' }
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
      { id: 't5-1', pregunta: '¿Cuál es el límite de velocidad genérico para un turismo en autopista o autovía?', opciones: ['110 km/h', '100 km/h', '120 km/h'], correcta: 2, explicacion: 'El límite genérico en autopistas y autovías para turismos es de 120 km/h.' },
      { id: 't5-2', pregunta: 'En una vía convencional con arcén pavimentado de al menos 1,5 metros, el límite para un turismo es:', opciones: ['120 km/h', '100 km/h', '90 km/h'], correcta: 1, explicacion: 'El límite genérico en vías convencionales con arcén pavimentado ≥1,5 m es de 100 km/h.' },
      { id: 't5-3', pregunta: 'En una vía convencional SIN arcén pavimentado suficiente, el límite para un turismo es:', opciones: ['100 km/h', '80 km/h', '90 km/h'], correcta: 2, explicacion: 'Sin ese arcén pavimentado mínimo de 1,5 m, el límite en vía convencional baja a 90 km/h.' },
      { id: 't5-4', pregunta: 'En una calle urbana de un solo carril donde la acera NO está diferenciada de la calzada (plataforma única), el límite genérico es:', opciones: ['30 km/h', '20 km/h', '50 km/h'], correcta: 1, explicacion: 'En calles de plataforma única (sin desnivel ni bordillo entre acera y calzada), el límite genérico es 20 km/h.' },
      { id: 't5-5', pregunta: 'En una calle urbana de un solo carril por sentido con acera diferenciada y bordillo, el límite genérico es:', opciones: ['20 km/h', '50 km/h', '30 km/h'], correcta: 2, explicacion: 'Con un solo carril por sentido y acera diferenciada, el límite genérico urbano desde la reforma de 2021 es 30 km/h.' },
      { id: 't5-6', pregunta: 'En una calle urbana con dos o más carriles por sentido, el límite genérico es:', opciones: ['30 km/h', '50 km/h', '70 km/h'], correcta: 1, explicacion: 'En vías urbanas con dos o más carriles por sentido el límite genérico es 50 km/h.' },
      { id: 't5-7', pregunta: 'Un conductor novel (menos de 1 año de permiso) circula por una vía convencional con límite de 100 km/h. ¿Cuál es su límite?', opciones: ['100 km/h, el mismo que todos', '90 km/h', '80 km/h'], correcta: 2, explicacion: 'Los conductores noveles tienen un límite máximo de 80 km/h en vías cuyo límite genérico supere esa cifra.' },
      { id: 't5-8', pregunta: 'En autopistas y autovías, la velocidad mínima general es:', opciones: ['No existe ninguna velocidad mínima', 'La mitad del límite máximo fijado', '60 km/h en condiciones normales, para no entorpecer la circulación'], correcta: 2, explicacion: 'Existe una velocidad mínima (generalmente 60 km/h) en autopistas y autovías para evitar entorpecer la circulación normal.' }
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
      { id: 't6-1', pregunta: 'La distancia de seguridad tiene como finalidad principal:', opciones: ['Facilitar el adelantamiento en cualquier momento', 'Poder detenerse a tiempo si el vehículo precedente frena bruscamente', 'Cumplir una exigencia estética de tráfico ordenado'], correcta: 1, explicacion: 'La distancia de seguridad garantiza que puedas detenerte sin colisionar si el vehículo de delante frena.' },
      { id: 't6-2', pregunta: 'La "regla de los 2 segundos" se usa para:', opciones: ['Calcular el tiempo necesario para adelantar', 'Estimar si se mantiene una distancia de seguridad suficiente con el vehículo precedente', 'Determinar el tiempo máximo de reacción permitido'], correcta: 1, explicacion: 'Contar dos segundos desde que el vehículo de delante pasa un punto fijo permite verificar si la distancia es suficiente.' },
      { id: 't6-3', pregunta: 'Al adelantar a un ciclista en vía convencional, la separación lateral mínima exigida es de:', opciones: ['1 metro', '0,5 metros', '1,5 metros'], correcta: 2, explicacion: 'La normativa exige una separación lateral mínima de 1,5 metros al adelantar a ciclistas.' },
      { id: 't6-4', pregunta: 'Si la velocidad de un vehículo se duplica, su distancia de frenado:', opciones: ['Aumenta el doble', 'Aumenta aproximadamente cuatro veces', 'Permanece igual'], correcta: 1, explicacion: 'La distancia de frenado es proporcional al cuadrado de la velocidad; al duplicarla, la distancia se cuadruplica aproximadamente.' },
      { id: 't6-5', pregunta: 'La distancia total de detención de un vehículo es la suma de:', opciones: ['Solo la distancia de frenado desde que se pisa el freno', 'La distancia recorrida durante la reacción más la recorrida hasta detenerse tras frenar', 'La distancia de adelantamiento más la de frenado'], correcta: 1, explicacion: 'La distancia total de detención incluye la distancia de reacción y la distancia de frenado.' },
      { id: 't6-6', pregunta: 'Con lluvia intensa o calzada mojada, la distancia de seguridad debe:', opciones: ['Mantenerse igual que en condiciones de seco', 'Reducirse ligeramente para reaccionar antes', 'Aumentarse, ya que la adherencia es menor y la distancia de frenado mayor'], correcta: 2, explicacion: 'El firme mojado reduce la adherencia y alarga la distancia de frenado, por lo que debe aumentarse la distancia de seguridad.' },
      { id: 't6-7', pregunta: '¿Cuál de estos factores NO influye en la distancia de frenado?', opciones: ['El estado de los neumáticos', 'El color de la carrocería del vehículo', 'La velocidad del vehículo'], correcta: 1, explicacion: 'El color de la carrocería no tiene ninguna influencia en la distancia de frenado; sí la tienen la velocidad, los neumáticos y el estado del firme.' },
      { id: 't6-8', pregunta: 'El consumo de alcohol por parte del conductor afecta a la distancia de seguridad porque:', opciones: ['Aumenta el tiempo de reacción, incrementando la distancia total de detención', 'Mejora los reflejos y reduce la distancia de reacción', 'No tiene ninguna relación con la distancia de frenado'], correcta: 0, explicacion: 'El alcohol aumenta el tiempo de reacción; como consecuencia, también aumenta la distancia recorrida antes de comenzar a frenar.' }
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
      { id: 't7-1', pregunta: 'En un cruce donde no existe ninguna señalización ni semáforo, la prioridad general corresponde a:', opciones: ['El vehículo que circula más rápido', 'El vehículo que lleva más tiempo esperando', 'El vehículo que viene por la derecha'], correcta: 2, explicacion: 'La norma general en intersecciones sin señalizar es que tiene prioridad quien circula por la derecha.' },
      { id: 't7-2', pregunta: 'La señal de "Ceda el paso" obliga al conductor a:', opciones: ['Detenerse completamente aunque no haya ningún vehículo', 'Reducir la velocidad y ceder el paso si hay tráfico que lo requiera', 'Acelerar para cruzar antes que los demás'], correcta: 1, explicacion: '"Ceda el paso" exige ceder el paso si hay tráfico, pero no obliga a detenerse si la vía está completamente libre.' },
      { id: 't7-3', pregunta: 'La señal de STOP obliga a:', opciones: ['Solo reducir considerablemente la velocidad', 'Detenerse completamente y ceder el paso, exista o no tráfico visible', 'Ceder el paso solo si hay peatones en el cruce'], correcta: 1, explicacion: 'El STOP exige detención total siempre, independientemente de si hay tráfico visible o no.' },
      { id: 't7-4', pregunta: 'Un vehículo de emergencia (ambulancia, policía) con señales luminosas y acústicas activadas:', opciones: ['Tiene prioridad total y puede ignorar cualquier norma sin precaución', 'Tiene prioridad pero debe circular con la precaución necesaria para no generar nuevos riesgos', 'Solo tiene prioridad en vías urbanas'], correcta: 1, explicacion: 'Los vehículos prioritarios tienen preferencia de paso, pero siguen obligados a actuar con la precaución necesaria.' },
      { id: 't7-5', pregunta: 'Tienes la señal de "Ceda el paso" y un ciclista cruza la vía. ¿A quién debes ceder el paso?', opciones: ['Solo a los vehículos a motor, no a bicicletas', 'Solo si el ciclista ya ha entrado en la calzada', 'Al ciclista, igual que a cualquier otro vehículo'], correcta: 2, explicacion: 'La señal de "Ceda el paso" obliga a ceder el paso a todos los usuarios de la vía, incluidos ciclistas.' },
      { id: 't7-6', pregunta: 'En un cruce sin señalizar, simultáneamente llegan un turismo y una moto que viene por tu izquierda. ¿Quién tiene prioridad?', opciones: ['La moto porque es más maniobrable', 'El turismo porque la moto viene por su izquierda', 'Ninguno; gana el que llega primero'], correcta: 1, explicacion: 'La regla de la derecha otorga prioridad al turismo, ya que la moto viene por su izquierda.' },
      { id: 't7-7', pregunta: 'En una vía señalizada como preferente, los vehículos que circulan por ella:', opciones: ['Deben ceder el paso a los que se incorporan desde otras vías', 'Tienen prioridad sobre los vehículos que se incorporan desde vías secundarias', 'Pierden prioridad ante vehículos que vienen por su derecha'], correcta: 1, explicacion: 'Los conductores en la vía preferente tienen prioridad sobre quienes se incorporan desde las vías secundarias.' },
      { id: 't7-8', pregunta: 'Ante una señal de STOP deteriorada e ilegible, el conductor debe:', opciones: ['Continuar sin reducir, ya que la señal no es válida', 'Actuar con la misma precaución: detenerse y ceder el paso', 'Comunicarlo a la DGT antes de proceder'], correcta: 1, explicacion: 'Aunque la señal esté deteriorada, la obligación de detenerse y ceder el paso sigue vigente.' }
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
      { id: 't8-1', pregunta: 'Antes de realizar un cambio de carril, el conductor debe:', opciones: ['Hacerlo rápido para no molestar a otros conductores', 'Señalizarlo, comprobar retrovisores y verificar el ángulo muerto', 'Solo comprobar que no hay vehículos en el retrovisor central'], correcta: 1, explicacion: 'Todo cambio de carril requiere señalización previa y comprobación de retrovisores y ángulo muerto.' },
      { id: 't8-2', pregunta: '¿Qué es el "ángulo muerto" o "punto ciego"?', opciones: ['La zona que cubre el retrovisor central', 'El área lateral que queda fuera del campo de visión de los retrovisores y exige girar la cabeza para comprobarla', 'La zona que cubre el retrovisor exterior del conductor'], correcta: 1, explicacion: 'El ángulo muerto es la zona que no cubren los espejos retrovisores; hay que girar la cabeza para verificarla.' },
      { id: 't8-3', pregunta: 'Para girar a la izquierda en una calzada de doble sentido, antes de iniciar el giro debes:', opciones: ['Situarte lo más a la derecha posible de tu carril', 'Situarte lo más próximo posible al eje central de la calzada (o carril izquierdo si existe)', 'Situarte en el arcén izquierdo'], correcta: 1, explicacion: 'Para girar a la izquierda hay que colocarse próximo al centro de la calzada antes de iniciar el giro.' },
      { id: 't8-4', pregunta: 'La señalización (intermitente) de una maniobra debe hacerse:', opciones: ['En el mismo instante de iniciar el giro', 'Con la antelación suficiente para que otros usuarios puedan percibirla y reaccionar', 'Solo si hay otro vehículo visible detrás de ti'], correcta: 1, explicacion: 'La señalización debe anticiparse lo suficiente para que el resto de usuarios puedan reaccionar de forma segura.' },
      { id: 't8-5', pregunta: 'Al girar a la derecha en un cruce, los ciclistas que continúan recto por su carril:', opciones: ['Deben ceder el paso al coche porque este gira', 'Tienen prioridad; el conductor que gira debe cederles el paso', 'Depende de la velocidad de cada uno'], correcta: 1, explicacion: 'El ciclista que continúa recto tiene prioridad sobre el conductor que gira a la derecha.' },
      { id: 't8-6', pregunta: 'Especial atención al ángulo muerto se debe tener al circular junto a:', opciones: ['Bicicletas en carril bici', 'Camiones y vehículos grandes, cuyo ángulo muerto es considerablemente mayor', 'Vehículos eléctricos, por su silencio'], correcta: 1, explicacion: 'Los vehículos pesados y altos tienen un ángulo muerto mucho más amplio que los turismos, lo que hace más peligroso circular en esa zona.' },
      { id: 't8-7', pregunta: 'Al incorporarse a una autovía por un carril de aceleración:', opciones: ['Tienes prioridad sobre el tráfico ya circulante', 'Debes detenerte y esperar a que no venga nadie', 'Debes adaptar tu velocidad al tráfico de la vía principal y ceder el paso si es necesario'], correcta: 2, explicacion: 'Quien se incorpora debe ceder el paso y adaptar su velocidad al flujo de la vía principal.' },
      { id: 't8-8', pregunta: 'Al girar a la izquierda en un cruce con semáforo, respecto a los peatones que cruzan en verde:', opciones: ['Tienes prioridad porque el semáforo también está en verde para ti', 'Los peatones tienen prioridad; debes cederles el paso', 'Depende de si los peatones llevan paso preferente señalizado'], correcta: 1, explicacion: 'Los peatones que cruzan en verde tienen siempre prioridad sobre los vehículos que giran, aunque el semáforo de vehículos también esté en verde.' }
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
      { id: 't9-1', pregunta: 'Antes de iniciar un adelantamiento, el conductor debe verificar:', opciones: ['Que el vehículo a adelantar va a una velocidad suficientemente baja', 'Que el carril contrario está libre, hay distancia suficiente, ninguna señal lo prohíbe y el de delante no va a maniobrar', 'Solo que el carril contrario esté libre en ese preciso instante'], correcta: 1, explicacion: 'Hay que comprobar múltiples condiciones antes de adelantar: visibilidad, distancia, señalización y maniobras del vehículo a adelantar.' },
      { id: 't9-2', pregunta: 'La línea longitudinal continua en el centro de la calzada:', opciones: ['Permite cruzarla siempre que no haya tráfico en sentido contrario', 'Permite cruzarla solo para aparcar al otro lado', 'Prohíbe cruzarla para adelantar o cambiar de sentido'], correcta: 2, explicacion: 'La línea continua no puede cruzarse; por tanto, no se puede adelantar en el tramo señalizado con esta marca.' },
      { id: 't9-3', pregunta: 'Está prohibido adelantar en un paso de peatones:', opciones: ['Solo si hay peatones cruzando', 'Solo de noche', 'Siempre, independientemente de si hay o no peatones'], correcta: 2, explicacion: 'Adelantar en pasos de peatones está prohibido con carácter general, con o sin peatones.' },
      { id: 't9-4', pregunta: 'Adelantar en una intersección:', opciones: ['Siempre está permitido si hay visibilidad suficiente', 'Solo lo pueden hacer las motocicletas', 'Está prohibido, salvo en los supuestos expresamente permitidos o señalizados'], correcta: 2, explicacion: 'Adelantar en intersecciones está prohibido con carácter general, salvo excepciones señalizadas.' },
      { id: 't9-5', pregunta: 'Si el vehículo de delante activa el intermitente izquierdo para girar, ¿puedes adelantarlo por la izquierda?', opciones: ['Sí, si el carril contrario está libre', 'No, no debes adelantar por el lado hacia el que va a girar', 'Sí, si llevas mayor velocidad'], correcta: 1, explicacion: 'No se debe adelantar por el lado hacia el que el vehículo precedente ha indicado que va a girar.' },
      { id: 't9-6', pregunta: 'Adelantar en una curva o cambio de rasante con visibilidad insuficiente:', opciones: ['Está permitido si vas despacio', 'Está prohibido, independientemente de la velocidad', 'Solo está prohibido de noche'], correcta: 1, explicacion: 'La visibilidad insuficiente en curvas y cambios de rasante prohíbe adelantar, sea cual sea la velocidad.' },
      { id: 't9-7', pregunta: 'Tras completar el adelantamiento, el conductor debe:', opciones: ['Quedarse en el carril izquierdo por precaución el mayor tiempo posible', 'Volver a su carril en cuanto sea posible y con seguridad, sin obligar al adelantado a frenar', 'Frenar bruscamente para dejar espacio al vehículo adelantado'], correcta: 1, explicacion: 'Hay que reincorporarse al carril derecho en cuanto sea seguro hacerlo, sin entorpecer al vehículo que se acaba de adelantar.' },
      { id: 't9-8', pregunta: 'El vehículo que está siendo adelantado:', opciones: ['Puede acelerar para evitar el adelantamiento', 'Debe reducir la velocidad obligatoriamente para facilitar la maniobra', 'No debe aumentar su velocidad ni dificultar la maniobra del adelantante'], correcta: 2, explicacion: 'El vehículo adelantado no debe aumentar su velocidad ni obstaculizar el adelantamiento.' }
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
      { id: 't10-1', pregunta: '¿Cuándo se considera que un vehículo realiza una "parada"?', opciones: ['Cuando se inmoviliza por más de 2 minutos', 'Cuando se inmoviliza hasta 2 minutos sin que el conductor abandone el vehículo', 'Cuando se inmoviliza con el motor apagado'], correcta: 1, explicacion: 'La parada es una inmovilización breve (hasta 2 minutos) con el conductor en el interior del vehículo.' },
      { id: 't10-2', pregunta: '¿En qué caso la inmovilización se convierte automáticamente en "estacionamiento"?', opciones: ['Cuando dura más de 5 minutos', 'Cuando el conductor abandona el vehículo, aunque sea por menos de 2 minutos', 'Cuando se apaga el motor del vehículo'], correcta: 1, explicacion: 'Si el conductor abandona el vehículo, aunque sea un instante, ya se considera estacionamiento, no parada.' },
      { id: 't10-3', pregunta: 'Una "detención" del vehículo se produce cuando:', opciones: ['El conductor decide parar voluntariamente para hacer una gestión', 'La inmovilización es forzada por las circunstancias del tráfico (semáforo, atasco, etc.)', 'El vehículo se aparca en zona regulada'], correcta: 1, explicacion: 'La detención es involuntaria, forzada por circunstancias externas del tráfico como un semáforo o un atasco.' },
      { id: 't10-4', pregunta: '¿Está permitido parar "solo un momento" en un paso de peatones?', opciones: ['Sí, si no hay peatones en ese momento', 'Sí, si se activan las luces de emergencia', 'No, parar y estacionar en pasos de peatones está prohibido siempre'], correcta: 2, explicacion: 'Está prohibido parar y estacionar en pasos de peatones bajo cualquier circunstancia, aunque no haya peatones.' },
      { id: 't10-5', pregunta: '¿Está permitido estacionar en doble fila brevemente para bajar una bolsa de la compra?', opciones: ['Sí, si se activan las luces de emergencia', 'No, la doble fila está prohibida salvo autorización expresa', 'Sí, si no obstaculiza el paso de otros vehículos'], correcta: 1, explicacion: 'Estacionar en doble fila está prohibido salvo que exista señalización expresa que lo autorice.' },
      { id: 't10-6', pregunta: 'Está prohibido parar y estacionar en:', opciones: ['Cualquier vía urbana sin excepción', 'Curvas con visibilidad reducida, intersecciones, pasos de peatones y sobre las aceras', 'Todas las vías excepto en autopistas'], correcta: 1, explicacion: 'La ley prohíbe parar y estacionar en lugares que comprometan la seguridad vial: curvas, cruces, pasos de peatones, aceras, etc.' },
      { id: 't10-7', pregunta: 'En una zona de estacionamiento regulado (zona azul o verde), el conductor debe:', opciones: ['Aparcar con las luces de emergencia encendidas como aviso', 'Obtener el ticket o activar el pago mediante app, respetando el tiempo máximo permitido', 'Avisar al ayuntamiento antes de aparcar'], correcta: 1, explicacion: 'En zonas reguladas es obligatorio cumplir con el procedimiento de pago y el tiempo límite establecidos.' },
      { id: 't10-8', pregunta: 'Estacionar montando las ruedas sobre el bordillo de la acera:', opciones: ['Está permitido si no impide el paso de peatones', 'Está permitido en calles muy estrechas sin otra opción', 'Está prohibido con carácter general'], correcta: 2, explicacion: 'Estacionar sobre la acera está prohibido en general, independientemente de la anchura de la calle.' }
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
      { id: 't11-1', pregunta: 'En un túnel (sea iluminado o no), el conductor debe circular con:', opciones: ['Luces largas para ver mejor a distancia', 'Sin luces si el túnel tiene alumbrado propio', 'Luces de cruce encendidas obligatoriamente'], correcta: 2, explicacion: 'En todos los túneles es obligatorio circular con las luces de cruce encendidas, independientemente de si tienen iluminación artificial.' },
      { id: 't11-2', pregunta: 'Las luces largas (de carretera) deben sustituirse por las de cruce cuando:', opciones: ['El vehículo supere los 80 km/h', 'Se vaya a cruzar con otro vehículo o se circule detrás de otro, para no deslumbrarlo', 'Se entre en una autopista'], correcta: 1, explicacion: 'Las luces largas deben cambiarse a cruce para no deslumbrar a conductores que vienen de frente o van delante.' },
      { id: 't11-3', pregunta: '¿Cuándo deben usarse las luces antiniebla (delanteras o traseras)?', opciones: ['Siempre que se circule de noche fuera de poblado', 'Solo en condiciones de niebla, lluvia muy intensa, nieve o humo que reduzcan la visibilidad', 'Para aumentar la visibilidad en cualquier situación de oscuridad'], correcta: 1, explicacion: 'Las antiniebla solo se usan en condiciones meteorológicas adversas que reducen la visibilidad; no son de uso general.' },
      { id: 't11-4', pregunta: 'Las luces de emergencia o "warning" (intermitentes simultáneos) tienen como función:', opciones: ['Señalizar el giro a la izquierda en cruces', 'Indicar que se va a adelantar', 'Advertir de un peligro, obstáculo o situación de emergencia (avería, accidente, etc.)'], correcta: 2, explicacion: 'El warning advierte a otros conductores de un peligro o situación de emergencia; no sustituye al intermitente habitual.' },
      { id: 't11-5', pregunta: '¿Es obligatorio circular con las luces de cruce encendidas durante el día en vías interurbanas?', opciones: ['No, solo es obligatorio de noche', 'Sí, en todas las vías interurbanas, incluso de día', 'Solo cuando llueve o hay poca visibilidad'], correcta: 1, explicacion: 'En España es obligatorio usar las luces de cruce en vías interurbanas durante el día.' },
      { id: 't11-6', pregunta: 'Llevar encendidas las luces antiniebla traseras en una noche despejada:', opciones: ['Es una medida de seguridad recomendable siempre', 'Puede molestar y deslumbrar al conductor de detrás y está prohibido en esas condiciones', 'Está permitido a velocidades superiores a 90 km/h'], correcta: 1, explicacion: 'Usar las antiniebla fuera de las condiciones que lo justifican deslumbra al conductor de atrás y está prohibido.' },
      { id: 't11-7', pregunta: 'Si un vehículo averiado queda parado de noche fuera de poblado, debe señalizarse con:', opciones: ['Solo el warning (intermitentes simultáneos)', 'Luces de posición encendidas y triángulos de preseñalización de peligro', 'Solo los triángulos de preseñalización'], correcta: 1, explicacion: 'Ante una avería de noche fuera de poblado, se usan tanto las luces de posición como los triángulos de preseñalización.' },
      { id: 't11-8', pregunta: 'Las luces antiniebla delanteras NO deben usarse cuando:', opciones: ['La visibilidad es normal y no hay niebla, lluvia intensa ni humo', 'Se circula de noche en autopista', 'Se viaja por montaña en invierno'], correcta: 0, explicacion: 'Las antiniebla delanteras solo pueden usarse cuando la visibilidad esté realmente reducida; usarlas en condiciones normales puede deslumbrar a otros conductores.' }
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
      { id: 't12-1', pregunta: 'En la jerarquía de la señalización vial, ¿qué prevalece sobre el semáforo?', opciones: ['La señal vertical de prohibición', 'Las indicaciones del agente de tráfico', 'Las marcas viales horizontales'], correcta: 1, explicacion: 'El orden de prioridad es: agente > semáforo > señal vertical/horizontal > normas generales.' },
      { id: 't12-2', pregunta: 'Un agente de tráfico levanta el brazo verticalmente. Esto significa:', opciones: ['Que los conductores pueden continuar', 'Que solo los peatones deben detenerse', 'Detención obligatoria para todos los conductores afectados'], correcta: 2, explicacion: 'El brazo en alto del agente ordena la detención obligatoria a todos los que se dirigen hacia él.' },
      { id: 't12-3', pregunta: 'Un agente extiende el brazo horizontalmente en la dirección de tu trayectoria. Debes:', opciones: ['Continuar porque la señal solo afecta al tráfico transversal', 'Detenerte, ya que la señal corta tu trayectoria', 'Reducir la velocidad pero continuar'], correcta: 1, explicacion: 'El brazo extendido horizontalmente ordena la detención a los conductores cuya trayectoria sea cortada por ese gesto.' },
      { id: 't12-4', pregunta: 'Un agente realiza un movimiento de balanceo con el brazo de arriba hacia abajo. Esto indica:', opciones: ['Detención inmediata', 'Reducción de velocidad', 'Vía libre; puede continuar'], correcta: 1, explicacion: 'El movimiento de balanceo hacia abajo es la señal del agente para que los conductores reduzcan la velocidad.' },
      { id: 't12-5', pregunta: 'El semáforo está en verde para ti, pero un agente de policía te indica que pares. ¿Qué haces?', opciones: ['Continúas porque el semáforo en verde tiene prioridad', 'Obedeces al agente, que prevalece sobre el semáforo', 'Reduces la velocidad pero continúas despacio'], correcta: 1, explicacion: 'Las indicaciones del agente prevalecen siempre sobre los semáforos y el resto de señalización.' },
      { id: 't12-6', pregunta: 'Un panel de mensaje variable (PMV) en autopista muestra una velocidad máxima de 80 km/h:', opciones: ['Es una sugerencia informativa, no obligatoria', 'Solo aplica a los vehículos pesados', 'Es de obligado cumplimiento mientras se muestre, igual que una señal fija'], correcta: 2, explicacion: 'Los paneles de mensaje variable tienen carácter de señal reglamentaria mientras muestran su contenido.' },
      { id: 't12-7', pregunta: '¿Qué orden de prioridad siguen las señales de mayor a menor?', opciones: ['Señales verticales, semáforos, agentes, normas generales', 'Agente, semáforo, señales verticales y horizontales, normas generales de circulación', 'Normas generales, señales, semáforos, agentes'], correcta: 1, explicacion: 'La jerarquía es: agente > semáforo > señal vertical/horizontal > norma general de circulación.' },
      { id: 't12-8', pregunta: 'Un panel de mensaje variable muestra un aspa roja (X) sobre el carril por el que circulas. Debes:', opciones: ['Continuar si el asfalto del carril está en buen estado', 'Cambiar de carril; el aspa roja indica que ese carril está cerrado al tráfico', 'Reducir la velocidad a 40 km/h pero puedes continuar por él'], correcta: 1, explicacion: 'El aspa roja en un panel de mensajes variables indica cierre de carril; no puede seguir circulando por él.' }
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
      { id: 't13-1', pregunta: 'Las señales de tráfico con forma triangular y borde rojo indican generalmente:', opciones: ['Una obligación para el conductor', 'Una prohibición de circulación', 'Un peligro próximo'], correcta: 2, explicacion: 'Las señales triangulares con borde rojo advierten de la existencia de un peligro próximo en la vía.' },
      { id: 't13-2', pregunta: 'Una señal circular con fondo blanco y borde rojo indica:', opciones: ['Una información o recomendación', 'Una prohibición o restricción', 'Una obligación de hacer algo'], correcta: 1, explicacion: 'Las señales circulares con fondo blanco y borde rojo son de prohibición o restricción.' },
      { id: 't13-3', pregunta: 'Una señal circular de fondo azul sin borde rojo indica:', opciones: ['Una prohibición', 'Un peligro', 'Una obligación'], correcta: 2, explicacion: 'Las señales de fondo azul circular (sin borde rojo) imponen una obligación al conductor.' },
      { id: 't13-4', pregunta: 'La señal de STOP se distingue de todas las demás por su:', opciones: ['Forma octogonal (8 lados) y color rojo', 'Forma triangular y color amarillo', 'Forma circular y color azul'], correcta: 0, explicacion: 'La señal de STOP tiene forma octogonal (8 lados) y fondo rojo con letras blancas.' },
      { id: 't13-5', pregunta: 'La señal de "Ceda el paso" tiene forma de:', opciones: ['Círculo con borde rojo', 'Cuadrado azul', 'Triángulo invertido (vértice hacia abajo) con borde rojo'], correcta: 2, explicacion: '"Ceda el paso" es un triángulo invertido con borde rojo, diferente del triángulo de peligro que tiene el vértice hacia arriba.' },
      { id: 't13-6', pregunta: 'Una señal de límite de velocidad con una línea diagonal encima indica:', opciones: ['Doble límite de velocidad', 'Fin de esa limitación de velocidad', 'Zona de velocidad variable'], correcta: 1, explicacion: 'La línea diagonal sobre una señal de restricción indica que esa restricción ha finalizado.' },
      { id: 't13-7', pregunta: 'Las señales cuadradas o rectangulares de fondo azul son señales de:', opciones: ['Peligro', 'Prohibición', 'Información o indicación (autopista, parking, etc.)'], correcta: 2, explicacion: 'Las señales cuadradas o rectangulares azules son informativas o de indicación.' },
      { id: 't13-8', pregunta: 'Una señal de peligro (triangular) que muestra la silueta de un niño caminando indica:', opciones: ['Zona escolar o zona de juego; precaución por presencia de niños', 'Prohibido el paso a peatones menores de edad', 'Obligatorio reducir a 20 km/h inmediatamente'], correcta: 0, explicacion: 'La señal triangular con un niño avisa de zona escolar o zona de juego; el conductor debe extremar las precauciones.' }
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
      { id: 't14-1', pregunta: 'Una línea longitudinal continua en el centro de la calzada:', opciones: ['Permite adelantar si la maniobra es rápida', 'Prohíbe cruzarla o circular sobre ella', 'Solo aplica a los vehículos pesados'], correcta: 1, explicacion: 'La línea continua no puede cruzarse ni circular sobre ella; prohíbe adelantar en ese tramo.' },
      { id: 't14-2', pregunta: 'Una línea longitudinal discontinua en el centro de la calzada:', opciones: ['Prohíbe siempre adelantar', 'Permite cruzarla con precaución cuando sea necesario y seguro', 'Solo puede cruzarla en dirección a la izquierda'], correcta: 1, explicacion: 'La línea discontinua indica que puede cruzarse con precaución para adelantar o cambiar de carril cuando las condiciones lo permiten.' },
      { id: 't14-3', pregunta: 'En una marca vial mixta (una línea continua junto a una discontinua), ¿quién puede cruzarla?', opciones: ['Los conductores de ambos sentidos pueden cruzarla', 'Solo quien tiene la línea continua más próxima a su carril', 'Solo quien tiene la línea discontinua más próxima a su carril'], correcta: 2, explicacion: 'En la línea mixta, solo puede cruzarla el conductor que tiene la discontinua en su lado.' },
      { id: 't14-4', pregunta: 'El semáforo cambia a ámbar (amarillo) cuando estás a poca distancia del cruce. ¿Qué debes hacer?', opciones: ['Acelerar para pasar antes de que se ponga rojo', 'Detenerte antes del cruce si puedes hacerlo con seguridad', 'Continuar siempre; el ámbar significa que aún puedes pasar'], correcta: 1, explicacion: 'El ámbar indica que el ciclo va a cambiar a rojo; hay que detenerse si se puede hacer con seguridad.' },
      { id: 't14-5', pregunta: 'Una flecha verde en un semáforo permite:', opciones: ['Circular en cualquier dirección', 'Únicamente circular en el sentido que indica la flecha; el resto de direcciones está en rojo', 'Circular a mayor velocidad que con luz verde normal'], correcta: 1, explicacion: 'La flecha verde solo autoriza el movimiento en la dirección indicada; el resto permanece en rojo.' },
      { id: 't14-6', pregunta: 'El cebreado (área con líneas oblicuas blancas pintadas en la calzada) indica:', opciones: ['Zona donde está permitido el estacionamiento temporal', 'Zona excluida de la circulación de vehículos', 'Carril preferente para determinados vehículos'], correcta: 1, explicacion: 'El cebreado delimita una zona prohibida para la circulación de vehículos.' },
      { id: 't14-7', pregunta: 'La línea de detención transversal antes de un semáforo en rojo obliga al conductor a:', opciones: ['Detenerse justo en esa línea, sin pasarla', 'Detenerse 5 metros antes de la línea por seguridad', 'No tiene valor legal, es solo orientativa'], correcta: 0, explicacion: 'El conductor debe detener su vehículo en la línea de detención cuando el semáforo o la señalización así lo exijan.' },
      { id: 't14-8', pregunta: 'Un semáforo con luz ámbar parpadeante (intermitente) sin otra señal equivale a:', opciones: ['Señal de STOP: detención obligatoria siempre', 'Señal de Ceda el paso: reducir y ceder paso si hay tráfico', 'Vía libre sin ninguna restricción'], correcta: 1, explicacion: 'El semáforo ámbar intermitente equivale a una señal de "Ceda el paso": hay que reducir y ceder el paso si es necesario.' }
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
      { id: 't15-1', pregunta: 'El límite legal de alcohol en aire espirado para conductores en general es de:', opciones: ['0,15 mg/l', '0,50 mg/l', '0,25 mg/l'], correcta: 2, explicacion: 'El límite general de alcohol en aire espirado es de 0,25 mg/l (equivale a 0,5 g/l en sangre).' },
      { id: 't15-2', pregunta: 'Los conductores noveles (menos de 2 años de permiso) tienen un límite de alcohol en aire espirado de:', opciones: ['0,25 mg/l, igual que los conductores generales', '0,15 mg/l, un límite más restrictivo', 'No tienen ningún límite específico'], correcta: 1, explicacion: 'Conductores noveles y profesionales tienen un límite más restrictivo: 0,15 mg/l en aire espirado.' },
      { id: 't15-3', pregunta: 'Respecto a las drogas y la conducción, la normativa española:', opciones: ['Establece un límite de tolerancia equivalente al del alcohol', 'Aplica tolerancia cero: cualquier presencia detectada es motivo de sanción', 'Solo sanciona si se produce un accidente'], correcta: 1, explicacion: 'Con las drogas no existe ningún límite de tolerancia; cualquier presencia detectada conlleva sanción.' },
      { id: 't15-4', pregunta: 'El alcohol afecta a la conducción incluso en cantidades:', opciones: ['Por encima del límite legal únicamente', 'Por debajo del límite legal, ya que deteriora reflejos y percepción desde la primera copa', 'Solo si se mezcla con ciertos medicamentos'], correcta: 1, explicacion: 'El alcohol comienza a afectar los reflejos y la percepción del riesgo desde cantidades muy pequeñas, aunque se esté por debajo del límite legal.' },
      { id: 't15-5', pregunta: 'El límite general de alcohol en sangre equivale a:', opciones: ['0,8 g/l', '0,3 g/l', '0,5 g/l'], correcta: 2, explicacion: 'El límite general en sangre es de 0,5 g/l, equivalente a 0,25 mg/l en aire espirado.' },
      { id: 't15-6', pregunta: 'Los conductores profesionales (camioneros, conductores de autobús) tienen el mismo límite de alcohol que:', opciones: ['Los conductores en general (0,25 mg/l)', 'Los conductores noveles (0,15 mg/l), siendo un límite más restrictivo', 'No están sujetos a ningún límite específico'], correcta: 1, explicacion: 'Los conductores profesionales comparten con los noveles el límite más restrictivo: 0,15 mg/l en aire espirado.' },
      { id: 't15-7', pregunta: 'A medida que aumenta la tasa de alcohol en sangre, el riesgo de sufrir un accidente:', opciones: ['Permanece constante hasta el límite legal', 'Disminuye por el efecto relajante del alcohol', 'Aumenta de forma progresiva y exponencial'], correcta: 2, explicacion: 'El riesgo de accidente crece de manera exponencial con la tasa de alcohol; no es lineal.' },
      { id: 't15-8', pregunta: 'Un conductor novel da 0,20 mg/l en el control de alcoholemia. ¿Está dentro de su límite legal?', opciones: ['Sí, porque no supera el límite general de 0,25 mg/l', 'No, porque supera su límite específico de 0,15 mg/l', 'Sí, porque solo los profesionales tienen límite más estricto'], correcta: 1, explicacion: 'El conductor novel tiene un límite de 0,15 mg/l; con 0,20 mg/l lo supera y comete una infracción.' }
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
      { id: 't16-1', pregunta: 'Para evitar la fatiga en un viaje largo por carretera, se recomienda hacer paradas cada:', opciones: ['30 minutos', 'Solo cuando se note somnolencia', 'Aproximadamente 2 horas o 200 km'], correcta: 2, explicacion: 'Se aconseja parar cada 2 horas o 200 km para prevenir la acumulación de fatiga.' },
      { id: 't16-2', pregunta: 'Conducir sujetando el teléfono móvil con la mano mientras se circula:', opciones: ['Está permitido si la conversación es breve', 'Constituye una infracción grave y está prohibido', 'Solo está prohibido en autopistas y autovías'], correcta: 1, explicacion: 'Sujetar o manipular el móvil con la mano mientras se conduce está prohibido y constituye una infracción grave.' },
      { id: 't16-3', pregunta: 'Un "microsueño" mientras se conduce se caracteriza por:', opciones: ['Ser una técnica de descanso recomendada en viajes largos', 'Una pérdida de consciencia de pocos segundos que puede pasar inadvertida para el conductor', 'Solo ocurrir de noche en vías mal iluminadas'], correcta: 1, explicacion: 'El microsueño es una breve desconexión de la consciencia que el conductor puede no percibir y resulta muy peligrosa.' },
      { id: 't16-4', pregunta: '¿Qué medida es REALMENTE eficaz para combatir la somnolencia al volante?', opciones: ['Abrir la ventanilla y poner la música alta', 'Tomar café y continuar circulando', 'Detener el vehículo y descansar o dormir'], correcta: 2, explicacion: 'Solo el descanso real (parar y dormir) elimina la somnolencia; el resto de remedios son temporales e ineficaces.' },
      { id: 't16-5', pregunta: 'Las distracciones mientras se conduce (móvil, GPS, comer) son peligrosas porque:', opciones: ['Desvían la atención visual, manual y/o cognitiva necesaria para conducir con seguridad', 'Solo son peligrosas si se realizan durante más de 5 segundos', 'Solo afectan de noche o con lluvia'], correcta: 0, explicacion: 'Cualquier distracción desvía parte de la atención necesaria para la conducción segura, aumentando el riesgo de accidente.' },
      { id: 't16-6', pregunta: 'La fatiga acumulada en un viaje prolongado:', opciones: ['Incrementa los reflejos por el estado de alerta', 'No afecta significativamente a conductores experimentados', 'Aumenta el tiempo de reacción y reduce la capacidad de atención y juicio'], correcta: 2, explicacion: 'La fatiga deteriora progresivamente todos los aspectos de la conducción: reacción, atención y toma de decisiones.' },
      { id: 't16-7', pregunta: 'Conducir habiendo dormido menos horas de las necesarias la noche anterior:', opciones: ['Solo es peligroso en trayectos superiores a 2 horas', 'No tiene efectos significativos si el conductor se siente despierto', 'Aumenta significativamente el riesgo de sufrir un accidente'], correcta: 2, explicacion: 'La falta de sueño deteriora la capacidad de conducción de manera comparable a la intoxicación etílica.' },
      { id: 't16-8', pregunta: 'La medida más eficaz para prevenir la fatiga en un viaje largo es:', opciones: ['Beber bebidas energéticas durante la conducción', 'Descansar bien antes de salir y planificar paradas periódicas durante el viaje', 'Conducir siempre de noche para evitar el calor y el sol'], correcta: 1, explicacion: 'El descanso previo y las paradas programadas son las medidas de prevención más efectivas frente a la fatiga al volante.' }
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
      { id: 't17-1', pregunta: 'El fenómeno del "aquaplaning" se produce cuando:', opciones: ['El motor del vehículo se recalienta por el agua', 'El vehículo pierde contacto con el firme al interponerse una capa de agua entre el neumático y el asfalto', 'Los frenos se mojan y pierden eficacia temporalmente'], correcta: 1, explicacion: 'El aquaplaning ocurre cuando el agua no puede evacuarse por los canales del neumático y el vehículo "flota" sobre ella, perdiendo la adherencia.' },
      { id: 't17-2', pregunta: 'Con niebla densa que reduce notablemente la visibilidad, el conductor debe:', opciones: ['Mantener la velocidad y encender las luces largas para ver más lejos', 'Adelantar para salir antes de la zona de niebla', 'Reducir considerablemente la velocidad, usar luces de cruce/antiniebla y aumentar la distancia de seguridad'], correcta: 2, explicacion: 'En niebla densa hay que reducir la velocidad, aumentar las distancias y usar el alumbrado adecuado. Las largas no deben usarse porque aumentan el deslumbramiento.' },
      { id: 't17-3', pregunta: 'El "hielo negro" es especialmente peligroso porque:', opciones: ['Funde con el calor del freno en lugar de deslizarse', 'Es prácticamente invisible sobre el asfalto y puede confundirse con la calzada mojada', 'Solo aparece en zonas de alta montaña con nieve acumulada'], correcta: 1, explicacion: 'El hielo negro es una fina capa de hielo casi transparente, muy difícil de detectar visualmente sobre el asfalto.' },
      { id: 't17-4', pregunta: '¿A qué tipo de vehículos afecta especialmente el viento lateral fuerte?', opciones: ['A vehículos bajos y deportivos por su mayor velocidad', 'A todos los vehículos por igual', 'A vehículos altos (furgonetas, camiones), autocaravanas y los que arrastran remolque'], correcta: 2, explicacion: 'Los vehículos con mayor superficie lateral son más susceptibles a la desestabilización por el viento.' },
      { id: 't17-5', pregunta: 'En firme mojado, la distancia de frenado en comparación con el firme seco:', opciones: ['Es similar; no varía significativamente', 'Es menor por la lubricación del firme', 'Es notablemente mayor por la reducción de la adherencia'], correcta: 2, explicacion: 'El firme mojado reduce la adherencia, lo que alarga significativamente la distancia necesaria para detenerse.' },
      { id: 't17-6', pregunta: 'Al aproximarse a un puente en una mañana fría e invernal, debes:', opciones: ['Frenar bruscamente si notas deslizamiento sobre el puente', 'Reducir la velocidad con antelación y evitar frenadas y giros bruscos, ya que los puentes se hielan antes', 'Acelerar para cruzar el puente rápidamente'], correcta: 1, explicacion: 'Los puentes se enfrían más rápido que el resto de la calzada y pueden tener hielo aunque el resto de la vía esté seca.' },
      { id: 't17-7', pregunta: 'En caso de aquaplaning, la reacción correcta del conductor es:', opciones: ['Frenar bruscamente para detener el vehículo', 'Girar el volante bruscamente hacia el lado del deslizamiento', 'Soltar el acelerador progresivamente y mantener firme el volante sin frenadas bruscas'], correcta: 2, explicacion: 'Ante el aquaplaning, se debe levantar el pie del acelerador suavemente y mantener el volante recto hasta recuperar la adherencia.' },
      { id: 't17-8', pregunta: 'Con lluvia intensa, además de reducir la velocidad, se recomienda:', opciones: ['Circular más cerca del vehículo precedente para ver sus luces traseras', 'Aumentar la distancia de seguridad y encender las luces de cruce (y antiniebla si la visibilidad lo requiere)', 'Apagar las luces para no reflejar el agua y deslumbrar'], correcta: 1, explicacion: 'Con lluvia intensa, más distancia de seguridad y el alumbrado adecuado son las medidas clave; nunca reducir la distancia.' }
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
      { id: 't18-1', pregunta: 'El método PAS ante un accidente de tráfico indica actuar en este orden:', opciones: ['Proteger, Avisar, Socorrer', 'Avisar, Proteger, Socorrer', 'Socorrer, Avisar, Proteger'], correcta: 0, explicacion: 'El método PAS: primero Proteger la zona, luego Avisar al 112 y por último Socorrer a los heridos.' },
      { id: 't18-2', pregunta: '¿Por qué es fundamental proteger la zona antes de socorrer a los heridos?', opciones: ['Para identificar a los conductores implicados', 'Para evitar que se produzcan nuevos accidentes con más víctimas', 'Por protocolo policial, no hay otra razón práctica'], correcta: 1, explicacion: 'Proteger la zona evita que otros vehículos colisionen con el accidente y generen víctimas adicionales.' },
      { id: 't18-3', pregunta: 'Al llamar al 112 para informar de un accidente, lo más importante es indicar:', opciones: ['Tu nombre, DNI y número de póliza de seguro', 'El lugar exacto, el número aproximado de heridos y su estado aparente', 'El modelo y matrícula de los vehículos implicados'], correcta: 1, explicacion: 'Los servicios de emergencia necesitan sobre todo la ubicación precisa y el estado de los heridos para actuar eficazmente.' },
      { id: 't18-4', pregunta: 'Ante un herido inconsciente tras un accidente, en general:', opciones: ['Debe moverse inmediatamente al arcén para alejarlo del peligro', 'Debe incorporarse para que respire mejor', 'No debe moverse salvo que exista un peligro inmediato real (incendio, riesgo de atropello)'], correcta: 2, explicacion: 'Mover a un herido puede agravar lesiones de columna; solo se hace si el riesgo de permanecer en el lugar es mayor.' },
      { id: 't18-5', pregunta: '¿Cuándo se debe quitar el casco a un motorista herido?', opciones: ['Siempre, como primera medida de socorro', 'Nunca, bajo ninguna circunstancia', 'Solo si es imprescindible para realizar maniobras de reanimación (RCP)'], correcta: 2, explicacion: 'Quitar el casco puede agravar lesiones cervicales; solo se hace si no hay otra opción para reanimar al herido.' },
      { id: 't18-6', pregunta: 'El desgaste excesivo de los neumáticos influye directamente en:', opciones: ['Solo el consumo de combustible del vehículo', 'La distancia de frenado, la adherencia y el riesgo de aquaplaning', 'La estética del vehículo y el nivel de ruido exterior'], correcta: 1, explicacion: 'Los neumáticos desgastados reducen la adherencia, aumentan la distancia de frenado y el riesgo de aquaplaning.' },
      { id: 't18-7', pregunta: 'Antes de emprender un viaje largo, es recomendable revisar:', opciones: ['Solo el nivel de combustible para no quedarse sin gasolina', 'El nivel de aceite, el refrigerante, la presión de los neumáticos y el estado de los frenos', 'Solo la presión de los neumáticos delanteros'], correcta: 1, explicacion: 'Una revisión básica pre-viaje (aceite, refrigerante, neumáticos, frenos) reduce el riesgo de averías y accidentes.' },
      { id: 't18-8', pregunta: 'Tu vehículo sufre una avería en una autopista. Lo correcto es:', opciones: ['Detenerte en el carril de circulación y activar las luces de emergencia', 'Sacar el vehículo al arcén, encender el warning, ponerte el chaleco antes de salir y señalizar con triángulos', 'Abandonar inmediatamente el vehículo y caminar hacia la salida más próxima por el arcén'], correcta: 1, explicacion: 'Ante avería en autopista: arcén, warning, chaleco reflectante antes de salir del vehículo, triángulos de señalización y ponerse a resguardo.' }
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
