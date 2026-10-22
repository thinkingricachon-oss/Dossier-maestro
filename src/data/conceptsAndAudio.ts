/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Biblioteca de Conceptos por Capas (C01-C06), Guiones Sonoros (A01-A03),
 * Capa Socrática («Del Caso al Aula») y Línea MCR / Mente Extendida.
 */

export interface LayeredConcept {
  id: string;
  code: string;
  name: string;
  category: "Principios DUA" | "Pedagogía y Contexto" | "Aspectos Legales";
  layer1: string; // En una frase
  layer2: {
    explanation: string;
    classroomExample: string;
  };
  layer3: {
    academicFoundation: string;
    scientificLimits: string;
    keyReference: string;
  };
}

export const LAYERED_CONCEPTS: LayeredConcept[] = [
  {
    id: "c01",
    code: "C01",
    name: "Diseño Universal para el Aprendizaje (DUA)",
    category: "Principios DUA",
    layer1: "Diseñar experiencias y materiales educativos anticipando barreras de acceso, para ofrecer a todo el alumnado múltiples formas de acceder, expresar y comprometerse con el saber.",
    layer2: {
      explanation: "No consiste en esperar a que un alumno fracase para elaborar una 'adaptación curricular individualizada' de urgencia. Consiste en flexibilizar metas, medios, materiales y métodos desde la propia concepción del diseño didáctico.",
      classroomExample: "En lugar de mandar leer obligatoriamente un texto de 4 páginas en papel para responder 5 preguntas escritas, el docente ofrece el texto escrito, la versión leída en audio y un esquema conceptual; y permite responder por escrito, en audio o mediante un organizador gráfico.",
    },
    layer3: {
      academicFoundation: "Originado en la arquitectura accesible (Ron Mace) y trasladado a la neurociencia del aprendizaje por CAST (Rose & Meyer, 2002; CAST, 2024). Se fundamenta en tres redes neuronales cerebrales: redes de reconocimiento (el qué), redes estratégicas (el cómo) y redes afectivas (el porqué).",
      scientificLimits: "Una herramienta digital o una tableta NO es 'DUA' por sí misma. Lo es el diseño pedagógico deliberado con que se utiliza en el aula. Confundir soporte digital con inclusión automática es un error común.",
      keyReference: "CAST (2024). Universal Design for Learning Guidelines version 3.0. Wakefield, MA.",
    },
  },
  {
    id: "c02",
    code: "C02",
    name: "Múltiples formas de representación",
    category: "Principios DUA",
    layer1: "Ofrecer distintas vías sensoriales y conceptuales para percibir y comprender la información esencial.",
    layer2: {
      explanation: "El alumnado difiere en el modo en que percibe y asimila la información. Por ello se combinan textos, narraciones orales, esquemas visuales o manipulaciones interactivas, explicitando siempre cómo se relacionan entre sí.",
      classroomExample: "Al explicar el ciclo del agua en 3.º de Primaria, se presenta una infografía clara con flechas numeradas, una locución explicativa sin música distractora y una réplica en maqueta física o simulación interactiva.",
    },
    layer3: {
      academicFoundation: "Basado en la Teoría de la Carga Cognitiva (Sweller, 2011) y la Teoría del Aprendizaje Multimedia (Mayer, 2020). Principio de modalidad y principio de contigüidad espacial y temporal.",
      scientificLimits: "Duplicar formatos de manera redundante sin criterio didáctico sobrecarga la memoria de trabajo. Añadir elementos cosméticos o 'detalles seductores' reduce la retención y la comprensión.",
      keyReference: "Mayer, R. E. (2020). Designing multimedia instruction to maximize cognitive processing. Educational Psychology Review.",
    },
  },
  {
    id: "c03",
    code: "C03",
    name: "Múltiples formas de acción y expresión",
    category: "Principios DUA",
    layer1: "Facilitar alternativas viables para interactuar con los materiales y demostrar de manera fehaciente lo aprendido.",
    layer2: {
      explanation: "Si el objetivo didáctico no es evaluar la caligrafía o la rapidez motriz con el lápiz, el docente debe admitir que el estudiante exprese su razonamiento mediante la palabra hablada, un mapa de conceptos, una construcción física o una redacción digital.",
      classroomExample: "Para evaluar la comprensión de un conflicto histórico o una regla de seguridad digital, el alumnado puede elegir entre grabar un mini-podcast de 90 segundos, diseñar una tira cómica o responder un cuestionario interactivo.",
    },
    layer3: {
      academicFoundation: "Conectado con las funciones ejecutivas prefrontales y la autorregulación motriz (Diamond, 2013). Reduce la penalización por barreras mecánicas en la expresión del conocimiento.",
      scientificLimits: "Cambiar la modalidad de respuesta nunca debe desvirtuar el constructo a evaluar. Si el objetivo evaluable ES la ortografía o la caligrafía, la modalidad debe ser congruente con dicha meta.",
      keyReference: "Rose, D. H., & Meyer, A. (2002). Teaching Every Student in the Digital Age: Universal Design for Learning. ASCD.",
    },
  },
  {
    id: "c04",
    code: "C04",
    name: "Múltiples formas de implicación o compromiso",
    category: "Principios DUA",
    layer1: "Crear condiciones óptimas para que el alumnado conecte con la tarea, mantenga el esfuerzo sostenido y autorregule su aprendizaje.",
    layer2: {
      explanation: "Las personas aprenden cuando la tarea tiene sentido, cuando se minimizan las amenazas o la frustración destructiva y cuando se ofrecen opciones de autonomía personal y trabajo colaborativo.",
      classroomExample: "Permitir elegir el contexto del problema (ej. calcular presupuestos de un viaje espacial vs. de una protectora de animales), facilitando rúbricas de autocomprobación antes de la entrega final.",
    },
    layer3: {
      academicFoundation: "Fundamentado en la Teoría de la Autodeterminación (Ryan & Deci, 2000) y la autoeficacia percibida (Bandura, 1997). Redes afectivas del sistema límbico.",
      scientificLimits: "Entretener, divertir o 'gamificar con puntos' no equivale a implicación cognitiva profunda. Las mecánicas extrínsecas sin significado suelen extinguirse con rapidez y generar dependencia externa.",
      keyReference: "Ryan, R. M., & Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation. American Psychologist.",
    },
  },
  {
    id: "c05",
    code: "C05",
    name: "Competencia digital en el aula",
    category: "Pedagogía y Contexto",
    layer1: "Uso crítico, reflexivo, seguro y creativo de las tecnologías digitales para aprender, colaborar y ejercer la ciudadanía.",
    layer2: {
      explanation: "Va mucho más allá del mero manejo instrumental de una pantalla táctil. Comprende la capacidad de buscar fuentes fiables, proteger la privacidad propia y ajena, comprender la huella digital y resolver dilemas éticos.",
      classroomExample: "En la actividad 'GiraTIC', los alumnos analizan situaciones reales: qué datos no compartir en redes sociales, cómo identificar contraseñas seguras y cómo intervenir ante el ciberacoso.",
    },
    layer3: {
      academicFoundation: "Marco Europeo de Competencia Digital DigCompEdu (Redecker, 2017) y modelos empíricos desarrollados por el Grupo EduDIG de la Universidad de Salamanca (cuestionarios ECODIES; Basilotta & Cabezas, 2021).",
      scientificLimits: "El concepto de 'nativo digital' es un mito desacreditado. Los menores requieren enseñanza explícita y andamiaje pedagógico para desarrollar competencia crítica con la tecnología.",
      keyReference: "Basilotta-Gómez-Pablos, V., & Cabezas-González, M. (2021). Evaluación de la competencia digital docente. Revista de Educación.",
    },
  },
  {
    id: "c06",
    code: "C06",
    name: "Licencias abiertas y derechos de autor (REA)",
    category: "Aspectos Legales",
    layer1: "Condiciones legales y éticas bajo las cuales un recurso educativo puede ser reutilizado, adaptado, mezclado y redistribuido libremente.",
    layer2: {
      explanation: "Permite a los centros y docentes utilizar materiales con absoluta seguridad jurídica, reconociendo la autoría institucional y sabiendo con exactitud si pueden modificar el contenido o no.",
      classroomExample: "Una ficha con licencia CC BY-SA permite al maestro traducir el texto al euskera o catalán y redistribuir la nueva versión citando la autoría original de la USAL y manteniendo la misma licencia libre.",
    },
    layer3: {
      academicFoundation: "Iniciativa de Recursos Educativos Abiertos de la UNESCO (2019) y marco de licenciamiento Creative Commons 4.0 Internacional.",
      scientificLimits: "Descargar un recurso libre no exime de verificar la procedencia de imágenes o fragmentos de terceros que pudieran estar sujetos a copyright tradicional.",
      keyReference: "UNESCO (2019). Recommendation on Open Educational Resources (OER). General Conference.",
    },
  },
];

export interface AudioScript {
  id: string;
  code: string;
  title: string;
  targetAudience: string;
  durationEstimate: string;
  wordCount: number;
  transcript: string;
  synthesisConfig: {
    recommendedVoiceLang: string;
    recommendedRate: number;
    recommendedPitch: number;
  };
}

export const AUDIO_SCRIPTS: AudioScript[] = [
  {
    id: "a01",
    code: "A01",
    title: "Bienvenida y orientación al portal DUA-DIG",
    targetAudience: "Profesorado que accede por primera vez al repositorio",
    durationEstimate: "48 segundos",
    wordCount: 104,
    transcript: "Te damos la bienvenida a Recursos Digitales DUA-DIG de la Universidad de Salamanca. Este espacio reúne materiales y orientaciones para profesorado de Infantil y Primaria. Puedes buscar un recurso directamente por su formato o consultar cómo aplicar las pautas del Diseño Universal para el Aprendizaje. Antes de llevar un material a tu aula, revisa su ficha para comprobar qué objetivos trabaja, qué preparación requiere y sus condiciones de uso. Todos los materiales son de libre acceso para la comunidad educativa.",
    synthesisConfig: {
      recommendedVoiceLang: "es-ES",
      recommendedRate: 0.95,
      recommendedPitch: 1.0,
    },
  },
  {
    id: "a02",
    code: "A02",
    title: "¿Qué es el Diseño Universal para el Aprendizaje?",
    targetAudience: "Docentes que buscan clarificar el marco conceptual sin tecnicismos",
    durationEstimate: "58 segundos",
    wordCount: 118,
    transcript: "El Diseño Universal para el Aprendizaje es un marco pedagógico orientado a derribar barreras en el aula. En lugar de pensar que las dificultades residen en el alumno, el DUA examina el diseño de la propia clase. Nos invita a plantear múltiples formas de presentar la información, diversas maneras de responder y opciones variadas para captar el interés de cada estudiante. Una tecnología no es inclusiva por sí misma: lo que marca la diferencia es el propósito y la flexibilidad con que la utilices.",
    synthesisConfig: {
      recommendedVoiceLang: "es-ES",
      recommendedRate: 0.95,
      recommendedPitch: 1.0,
    },
  },
  {
    id: "a03",
    code: "A03",
    title: "El principio de Representación en el aula de Primaria",
    targetAudience: "Docentes preparando unidades didácticas y materiales de lectura",
    durationEstimate: "52 segundos",
    wordCount: 110,
    transcript: "El principio de representación se centra en cómo percibe y procesa la información el alumnado. Un esquema visual puede clarificar lo que un párrafo extenso oscurece; un apoyo de audio puede permitir a un alumno acceder a un concepto complejo antes de dominar la lectura fluida. La meta es asegurar que ningún estudiante quede excluido del aprendizaje por barreras en el formato en que se presenta el contenido.",
    synthesisConfig: {
      recommendedVoiceLang: "es-ES",
      recommendedRate: 0.95,
      recommendedPitch: 1.0,
    },
  },
];

export interface SocraticCase {
  id: string;
  difficultyTitle: string;
  classroomContext: string;
  diagnosticTrap: string;
  socraticQuestions: string[];
  reformulation: string;
  methodologicalIntervention: {
    title: string;
    action: string;
    fadingStrategy: string;
    observableCheck: string;
  };
  recommendedResourceTitle: string;
  recommendedResourceId: string;
}

export const SOCRATIC_CASES: SocraticCase[] = [
  {
    id: "case-1",
    difficultyTitle: "Comprende la consigna oral pero no inicia la actividad en el cuaderno",
    classroomContext: "4.º de Primaria, tarea de reflexión sobre huella digital y privacidad.",
    diagnosticTrap: "Asumir desinterés, déficit atencional clínico o falta de motivación intrínseca.",
    socraticQuestions: [
      "¿El alumno es capaz de parafrasear con sus propias palabras qué se pide hacer?",
      "¿La consigna escrita contiene más de dos subtareas concatenadas sin guía visual?",
      "¿Sabe exactamente qué debe figurar en la primera línea del papel o en la pantalla?",
    ],
    reformulation: "La barrera no reside en la comprensión semántica ni en la voluntad, sino en la sobrecarga ejecutiva ante el lienzo en blanco y la falta de un modelo resuelto del paso inicial.",
    methodologicalIntervention: {
      title: "Andamiaje de modelado con desvanecimiento (Prompt Fading)",
      action: "Proporcionar una plantilla con el primer paso ya completado como ejemplo ('Paso 1: Escribe tu alias ficticio'), el segundo paso con pauta guiada ('Paso 2: Marca 2 opciones...') y el tercer paso libre.",
      fadingStrategy: "Retirar gradualmente las oraciones iniciadoras en las dos sesiones siguientes conforme disminuya el tiempo de latencia de inicio.",
      observableCheck: "El alumno inicia la escritura o interacción en menos de 90 segundos tras recibir la plantilla.",
    },
    recommendedResourceTitle: "Vídeo y Ficha Didáctica: Identidad Digital (Partes 1-3)",
    recommendedResourceId: "res-identidad-digital",
  },
  {
    id: "case-2",
    difficultyTitle: "Resuelve la tarea con ayuda directa pero fracasa en la ejecución autónoma",
    classroomContext: "2.º de Primaria, emparejamiento de conceptos de seguridad y contraseñas seguras.",
    diagnosticTrap: "Concluir que el alumno 'no llega al nivel curricular' y necesita derivación médica.",
    socraticQuestions: [
      "¿Qué porcentaje de la tarea ejecuta realmente el estudiante y qué decisiones asume el docente en el diálogo de ayuda?",
      "¿La ayuda docente actúa como apoyo de acceso o está sustituyendo el razonamiento del aprendiz?",
      "¿Dispone el alumno de un mecanismo intermedio para comprobar si su respuesta es correcta sin mirar al adulto?",
    ],
    reformulation: "Existe una dependencia del apuntalamiento verbal del adulto por falta de hitos visibles de autocomprobación intermedia (bucle de retroalimentación cerrado).",
    methodologicalIntervention: {
      title: "Segmentación en 3 hitos intermedios con autocomprobación",
      action: "Introducir una tarjeta de contraste con claves visuales ocultas tras una solapa o código de color para validar el paso 1 antes de pasar al paso 2.",
      fadingStrategy: "El docente se sitúa a 2 metros y solo interviene si tras 2 intentos de autocomprobación persiste el bloqueo.",
      observableCheck: "El alumno completa el hito 1 y 2 sin demandar confirmación verbal del profesor.",
    },
    recommendedResourceTitle: "GiraTIC: Juego de Retos y Preguntas TIC Inclusivas",
    recommendedResourceId: "res-giratic",
  },
  {
    id: "case-3",
    difficultyTitle: "Responde con éxito al ejercicio mecánico pero no transfiere a situaciones nuevas",
    classroomContext: "6.º de Primaria, identificación de noticias falsas y bulos en internet.",
    diagnosticTrap: "Confundir memorización de reglas fijas con comprensión relacional y pensamiento crítico.",
    socraticQuestions: [
      "¿En qué medida el ejercicio original permitía acertar por mera pista superficial o formato de las preguntas?",
      "¿Qué variables superficiales han cambiado en la nueva situación que desconciertan al estudiante?",
      "¿Se ha enseñado a aislar la estructura invariable del problema frente a la anécdota del texto?",
    ],
    reformulation: "El aprendizaje se acopló a los rasgos perceptivos superficiales del primer ejercicio (pistas de formato), sin abstracción de la invariante conceptual.",
    methodologicalIntervention: {
      title: "Variación sistemática con mantenimiento de la estructura de relación",
      action: "Mantener idéntica la estructura lógica (buscar fuente, fecha, autor y tono) variando drásticamente el canal (noticia de prensa escrita vs. meme de red social vs. titular sonoro).",
      fadingStrategy: "Pedir al alumno que explicite la regla común antes de juzgar la veracidad de la pieza.",
      observableCheck: "Aplica los cuatro criterios de verificación a un meme desconocido sin consultar el manual.",
    },
    recommendedResourceTitle: "Infografía: Participación Ciudadana y Derechos Digitales",
    recommendedResourceId: "res-participacion-ciudadana",
  },
];
