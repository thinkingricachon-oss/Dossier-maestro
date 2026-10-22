/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Catálogo Normalizado de Recursos DUA-DIG (USAL)
 * Ficha Operativa Normalizada de 9 Bloques según Sección 4.2 del Dossier Maestro.
 */

export interface ResourceItem {
  id: string;
  officialTitle: string;
  shortDescription: string;
  formatType: "Juego Interactivo" | "Secuencia de Vídeo" | "Infografía Didáctica" | "Guía / Manual" | "Actividad Multimodal";
  stage: "Infantil" | "1.º-2.º Primaria" | "3.º-4.º Primaria" | "5.º-6.º Primaria";
  stageCategory: "infantil" | "primaria-inicial" | "primaria-media" | "primaria-superior";
  techRequirement: "Sin pantallas (offline)" | "1 proyector colectivo" | "Dispositivos compartidos" | "1 dispositivo por alumno";
  duaAccessModality: "Con soporte auditivo" | "Con transcripción/lectura" | "Con apoyos pictográficos";
  duaResponseModality: "Respuesta oral" | "Manipulativa/gráfica" | "Escrita pautada";
  evidenceStatus: "Revisión interna" | "Pilotado en centros" | "Investigado con evidencia";
  
  // 9-Block Standardized Schema
  block1Decision: {
    targetCompetence: string;
    observableLearningGoal: string;
    whyUseIt: string;
  };
  block2Preparation: {
    estimatedTimeMinutes: number;
    requiredHardware: string;
    internetRequired: boolean;
    priorSetupSteps: string[];
  };
  block3Prerequisites: {
    readingLevelRequired: string;
    digitalSkillsRequired: string;
    priorCurricularConcepts: string[];
  };
  block4UsageSequence: {
    introStep: string;
    developmentStep: string;
    closureStep: string;
  };
  block5DuaOptions: {
    representationOptions: string[];
    actionExpressionOptions: string[];
    engagementOptions: string[];
  };
  block6Adaptability: {
    invariableCore: string;
    flexibleElements: string[];
  };
  block7ObservationRubric: {
    observableSuccessIndicator: string;
    commonObstacleToDetect: string;
    suggestedAdjustment: string;
  };
  block8FilesAndLicensing: {
    directDownloadFormat: string;
    fileSizeBytes: string;
    licenseType: "CC BY-SA 4.0 Internacional" | "CC BY-NC 4.0 Internacional" | "CC BY 4.0 Internacional";
    institutionalAttribution: string;
    downloadUrl: string;
  };
  block9EvidenceStatus: {
    category: "Revisión interna" | "Pilotado en centros" | "Investigado con evidencia";
    empiricalNotes: string;
    publicationsRelated: string;
  };
}

export const RESOURCES_CATALOGUE: ResourceItem[] = [
  {
    id: "res-giratic",
    officialTitle: "GiraTIC: Juego de Retos y Preguntas TIC Inclusivas",
    shortDescription: "Ruleta interactiva accesible con desafíos cooperativos de seguridad digital, navegación crítica y uso equilibrado de pantallas.",
    formatType: "Juego Interactivo",
    stage: "3.º-4.º Primaria",
    stageCategory: "primaria-media",
    techRequirement: "1 proyector colectivo",
    duaAccessModality: "Con soporte auditivo",
    duaResponseModality: "Respuesta oral",
    evidenceStatus: "Investigado con evidencia",

    block1Decision: {
      targetCompetence: "Competencia digital (Área de Seguridad y Resolución de problemas - DigCompEdu).",
      observableLearningGoal: "El alumnado identifica y explica al menos 3 pautas seguras de gestión de contraseñas y privacidad en redes ante situaciones hipotéticas.",
      whyUseIt: "Evita la memorización pasiva convirtiendo dilemas de ciberseguridad en dinámicas participativas con respuesta colectiva oral o gestual.",
    },
    block2Preparation: {
      estimatedTimeMinutes: 45,
      requiredHardware: "1 ordenador conectado a proyector o pizarra digital interactiva (PDI). Opcionalmente tarjetas físicas de respuesta A/B/C.",
      internetRequired: false,
      priorSetupSteps: [
        "Abrir el archivo ejecutable o versión web local en el navegador del aula.",
        "Comprobar el volumen de los altavoces para que las locuciones de las preguntas se escuchen con nitidez.",
        "Dividir el aula en pequeños equipos heterogéneos de 3 o 4 alumnos.",
      ],
    },
    block3Prerequisites: {
      readingLevelRequired: "Comprensión lectora básica de enunciados cortos (o escucha activa con el apoyo de audio integrado).",
      digitalSkillsRequired: "Ninguna destreza técnica individual previa por parte del alumno; el control puede llevarlo el docente o un portavoz rotatorio.",
      priorCurricularConcepts: ["Concepto elemental de internet", "Diferencia entre información pública y privada"],
    },
    block4UsageSequence: {
      introStep: "Inicio (10 min): Proyección de la ruleta, presentación de las categorías temáticas y acuerdo de turnos de diálogo por parejas.",
      developmentStep: "Desarrollo (25 min): Giro de ruleta, escucha de la pregunta en voz alta, deliberación en pequeño grupo (60 s) y selección de respuesta justificada.",
      closureStep: "Cierre (10 min): Síntesis en gran grupo de las dos ideas más relevantes aprendidas y registro en el panel de aula.",
    },
    block5DuaOptions: {
      representationOptions: [
        "Locución de texto integrada para estudiantes con dificultad de decodificación lectora.",
        "Iconografía de alto contraste con código cromático dual (color + pictograma) para cada categoría.",
        "Glosario rápido desplegable para términos técnicos (pishing, contraseña, huella).",
      ],
      actionExpressionOptions: [
        "Respuesta por portavoz oral rotatorio.",
        "Levantamiento de tarjetas físicas de colores o tarjetas con letras de gran tamaño.",
        "Uso de puntero táctil en la pizarra digital.",
      ],
      engagementOptions: [
        "Modalidad cooperativa sin puntuaciones competitivas ni penalizaciones por error.",
        "Desafíos graduados en tres niveles de complejidad según el ritmo del grupo.",
        "Reflexión guiada sobre experiencias vividas por el propio alumnado.",
      ],
    },
    block6Adaptability: {
      invariableCore: "La deliberación ética y la identificación de riesgos reales en el uso de la tecnología.",
      flexibleElements: [
        "El tiempo de deliberación entre giros puede ampliarse o pausarse indefinidamente.",
        "Se pueden desactivar categorías complejas para ajustarse a 2.º de Primaria o adaptaciones curriculares.",
        "Puede jugarse completamente offline con las tarjetas impresas descargables.",
      ],
    },
    block7ObservationRubric: {
      observableSuccessIndicator: "El grupo justifica su respuesta aludiendo a la protección de datos o el respeto a terceros, no por azar.",
      commonObstacleToDetect: "Un alumno dominante acapara el pulsador o la respuesta del equipo.",
      suggestedAdjustment: "Asignar roles rotatorios explícitos (lector, cronometrador, portavoz, moderador de turno).",
    },
    block8FilesAndLicensing: {
      directDownloadFormat: "Paquete HTML5 offline (.zip) + Ficha imprimible (.pdf)",
      fileSizeBytes: "14.2 MB",
      licenseType: "CC BY-SA 4.0 Internacional",
      institutionalAttribution: "Universidad de Salamanca · Grupo EduDIG · Proyecto DUA-DIG",
      downloadUrl: "#descarga-giratic",
    },
    block9EvidenceStatus: {
      category: "Investigado con evidencia",
      empiricalNotes: "Pilotado y evaluado empíricamente en 12 centros educativos de Castilla y León durante el curso 2024-2025 (N = 340 alumnos; análisis de fiabilidad de ítems y mejora pre-post estadísticamente significativa en competencia digital p < .01).",
      publicationsRelated: "García-Valcárcel, A., & Casillas-Martín, S. (2025). Recursos lúdicos digitales e inclusión: evaluación del impacto de GiraTIC. Revista de Educación Inclusiva.",
    },
  },
  {
    id: "res-identidad-digital",
    officialTitle: "Vídeo y Ficha Didáctica: Identidad Digital (Partes 1-3 Unificadas)",
    shortDescription: "Secuencia audiovisual narrativa estructurada para reflexionar sobre la huella digital duradera, la privacidad y la convivencia pacífica en línea.",
    formatType: "Secuencia de Vídeo",
    stage: "5.º-6.º Primaria",
    stageCategory: "primaria-superior",
    techRequirement: "1 proyector colectivo",
    duaAccessModality: "Con transcripción/lectura",
    duaResponseModality: "Escrita pautada",
    evidenceStatus: "Investigado con evidencia",

    block1Decision: {
      targetCompetence: "Identidad digital, privacidad y ciudadanía responsable (Área 2 DigCompEdu).",
      observableLearningGoal: "El alumnado distingue entre huella digital activa y pasiva, y redacta 3 compromisos de aula para proteger la intimidad propia y de sus compañeros.",
      whyUseIt: "Corrige la fragmentación previa del recurso (Partes 1, 2 y 3) ofreciendo una secuencia pedagógica unificada con descansos reflexivos.",
    },
    block2Preparation: {
      estimatedTimeMinutes: 50,
      requiredHardware: "Proyector con altavoces y fichas de trabajo impresas (1 por pareja) o visualización en pantalla compartida.",
      internetRequired: false,
      priorSetupSteps: [
        "Descargar el vídeo con subtítulos quemados o verificar la reproducción offline del archivo MP4.",
        "Imprimir las guías de observación con pautas de respuesta rápida.",
      ],
    },
    block3Prerequisites: {
      readingLevelRequired: "Lectura de subtítulos a ritmo medio (o audición clara del diálogo con lenguaje adaptado a 10-12 años).",
      digitalSkillsRequired: "Comprensión de qué es una publicación en internet, una fotografía digital y un perfil de usuario.",
      priorCurricularConcepts: ["Derechos a la intimidad", "Concepto de permanencia en la red"],
    },
    block4UsageSequence: {
      introStep: "Inicio (10 min): Pregunta detonante: '¿Qué información sobre ti podría encontrar alguien en internet dentro de 10 años?'. Registro de hipótesis en la pizarra.",
      developmentStep: "Desarrollo (30 min): Proyección de los tres módulos (Módulo 1: La huella imborrable; Módulo 2: Fotos ajenas sin consentimiento; Módulo 3: Huella positiva). Pausa de 3 min entre módulos para debate en parejas.",
      closureStep: "Cierre (10 min): Elaboración del 'Decálogo de respeto a la imagen ajena' del aula.",
    },
    block5DuaOptions: {
      representationOptions: [
        "Subtítulos sincronizados accesibles y transcripción completa descargable en texto enriquecido.",
        "Marcas visuales de advertencia en los instantes clave del vídeo que señalan los momentos de decisión de los personajes.",
        "Esquema visual resumen que conecta los tres episodios en un solo panel gráfico.",
      ],
      actionExpressionOptions: [
        "Ficha con opción de respuesta escrita, esquemática o dibujo de una viñeta alternativa.",
        "Puesta en común mediante dramatización corta de 1 minuto sobre cómo pedir permiso antes de subir una foto.",
        "Grabación de nota de voz con el compromiso personal del alumno.",
      ],
      engagementOptions: [
        "Personajes cercanos de edad similar a los estudiantes con dilemas cotidianos creíbles.",
        "Debate abierto sin juicios punitivos para facilitar la sinceridad de experiencias reales.",
      ],
    },
    block6Adaptability: {
      invariableCore: "El principio de consentimiento previo y la imposibilidad de eliminar con total certeza un contenido subido a la red.",
      flexibleElements: [
        "Los tres módulos pueden proyectarse en sesiones independientes de 20 minutos.",
        "El debate puede focalizarse en videojuegos multijugador o en redes sociales según las vivencias del grupo.",
      ],
    },
    block7ObservationRubric: {
      observableSuccessIndicator: "El estudiante argumenta por qué no debe publicarse una foto de un amigo sin su consentimiento explícito.",
      commonObstacleToDetect: "Respuesta complaciente memorizada ('porque está mal') sin entender la consecuencia real del perjuicio al otro.",
      suggestedAdjustment: "Plantear el ejercicio de inversión de roles: '¿Cómo te sentirías si esa foto en la que sales distraído la viera toda la escuela?'.",
    },
    block8FilesAndLicensing: {
      directDownloadFormat: "Archivo MP4 (1080p y 720p optimizado) + Subtítulos SRT + Ficha PDF",
      fileSizeBytes: "86.4 MB (Vídeo completo optimizado)",
      licenseType: "CC BY-NC 4.0 Internacional",
      institutionalAttribution: "Universidad de Salamanca · EduDIG · Autores: Dr. Marcos Cabezas y Dra. Verónica Basilotta",
      downloadUrl: "#descarga-identidad-digital",
    },
    block9EvidenceStatus: {
      category: "Investigado con evidencia",
      empiricalNotes: "Instrumento derivado de los estudios sobre ciberequidad y seguridad en Primaria del Grupo EduDIG. Datos psicométricos validados en el marco de la escala ECODIES.",
      publicationsRelated: "Cabezas-González, M., & Basilotta-Gómez-Pablos, V. (2023). Educación mediática e identidad digital en la infancia. Comunicar, 31(74).",
    },
  },
  {
    id: "res-participacion-ciudadana",
    officialTitle: "Infografía Interactiva: Participación Ciudadana y Derechos Digitales",
    shortDescription: "Póster didáctico desplegable con itinerarios de acción para aprender a opinar, contrastar bulos y participar constructivamente en la comunidad escolar.",
    formatType: "Infografía Didáctica",
    stage: "5.º-6.º Primaria",
    stageCategory: "primaria-superior",
    techRequirement: "Sin pantallas (offline)",
    duaAccessModality: "Con apoyos pictográficos",
    duaResponseModality: "Manipulativa/gráfica",
    evidenceStatus: "Pilotado en centros",

    block1Decision: {
      targetCompetence: "Ciudadanía digital, pensamiento crítico y convivencia democrática.",
      observableLearningGoal: "El alumnado analiza una propuesta escolar y propone una vía digital o presencial inclusiva para recoger las opiniones de todos sus compañeros.",
      whyUseIt: "Facilita un marco visual claro que no requiere pantallas obligatorias en el pupitre y resuelve la carencia de resumen HTML de la web previa.",
    },
    block2Preparation: {
      estimatedTimeMinutes: 40,
      requiredHardware: "Infografía proyectada en pantalla o ejemplares impresos en tamaño A3 para trabajo en grupos de 4.",
      internetRequired: false,
      priorSetupSteps: [
        "Imprimir el póster central o proyectarlo en el visor de alta resolución.",
        "Tener preparados post-its o tarjetas de propuestas.",
      ],
    },
    block3Prerequisites: {
      readingLevelRequired: "Lectura autónoma de párrafos breves.",
      digitalSkillsRequired: "Comprensión de qué es una votación, un formulario o un buzón de sugerencias.",
      priorCurricularConcepts: ["Democracia participativa básica", "Respeto a las opiniones minoritarias"],
    },
    block4UsageSequence: {
      introStep: "Inicio (10 min): Exploración libre del mapa infográfico guiada por la pregunta: '¿Cómo podemos mejorar el patio del recreo entre todos?'.",
      developmentStep: "Desarrollo (20 min): Los equipos escogen una de las rutas de participación ciudadana y redactan una propuesta concreta.",
      closureStep: "Cierre (10 min): Colocación de propuestas en el panel mural del aula y votación por consenso.",
    },
    block5DuaOptions: {
      representationOptions: [
        "Estructura jerárquica con números grandes del 1 al 5 y flechas de flujo claras.",
        "Pictogramas de lectura fácil asociados a cada concepto abstracto (derecho, deber, escucha, consenso).",
        "Resumen en audio accesible escaneando un código QR impreso en la esquina inferior.",
      ],
      actionExpressionOptions: [
        "Elaboración de propuesta en post-it escrito, dibujo explicativo o mensaje de audio.",
        "Debate con portavoz rotatorio.",
      ],
      engagementOptions: [
        "Conexión directa con un problema real del centro (el recreo, los juegos del comedor, la biblioteca).",
      ],
    },
    block6Adaptability: {
      invariableCore: "El proceso deliberativo: escuchar distintas posturas antes de tomar una decisión que afecte a todos.",
      flexibleElements: [
        "El tema de la asamblea escolar puede adecuarse a cualquier conflicto real de la semana.",
        "Se puede usar en versión 100% digital o 100% analógica impresa.",
      ],
    },
    block7ObservationRubric: {
      observableSuccessIndicator: "La propuesta del equipo incluye medidas para que nadie quede excluido de la participación.",
      commonObstacleToDetect: "Reducción de la participación a la imposición de la mayoría numérica sin diálogo.",
      suggestedAdjustment: "El docente pregunta: '¿Qué hacemos con los que han votado que no para que también disfruten?'.",
    },
    block8FilesAndLicensing: {
      directDownloadFormat: "PDF Vectorial Imprimible (A3/A4) + PNG Alta Resolución + Ficha Didáctica HTML",
      fileSizeBytes: "8.5 MB",
      licenseType: "CC BY-SA 4.0 Internacional",
      institutionalAttribution: "Universidad de Salamanca · EduDIG · DUA-DIG",
      downloadUrl: "#descarga-participacion",
    },
    block9EvidenceStatus: {
      category: "Pilotado en centros",
      empiricalNotes: "Pilotado durante el primer trimestre del curso 2025 en 6 aulas de 5.º de Primaria de Salamanca y Zamora.",
      publicationsRelated: "Informe técnico de transferencia DUA-DIG / EduDIG (2025).",
    },
  },
  {
    id: "res-roscotic",
    officialTitle: "RoscoTIC: El Léxico de la Seguridad Digital en Primaria",
    shortDescription: "Dinámica interactiva inspirada en pasapalabra con 26 definiciones clave de seguridad, convivencia y tecnología con apoyos de lectura fácil.",
    formatType: "Juego Interactivo",
    stage: "3.º-4.º Primaria",
    stageCategory: "primaria-media",
    techRequirement: "Dispositivos compartidos",
    duaAccessModality: "Con transcripción/lectura",
    duaResponseModality: "Respuesta oral",
    evidenceStatus: "Revisión interna",

    block1Decision: {
      targetCompetence: "Alfabetización digital y vocabulario técnico accesible.",
      observableLearningGoal: "El alumnado define y ejemplifica con precisión términos como cortafuegos, contraseña, copia de seguridad, enlace sospechoso y antivirus.",
      whyUseIt: "Consolida el vocabulario técnico sin memorizaciones vacías, vinculando cada letra con un consejo de seguridad aplicable en su vida diaria.",
    },
    block2Preparation: {
      estimatedTimeMinutes: 35,
      requiredHardware: "1 tableta por cada 2-3 alumnos o proyector colectivo para juego en gran grupo.",
      internetRequired: false,
      priorSetupSteps: [
        "Cargar el recurso en el navegador de las tabletas compartidas.",
        "Seleccionar el modo 'Con pistas' para el primer pase.",
      ],
    },
    block3Prerequisites: {
      readingLevelRequired: "Lectura comprensiva de oraciones simples.",
      digitalSkillsRequired: "Pulsar botones táctiles o teclado para escribir la letra inicial.",
      priorCurricularConcepts: ["Uso básico de navegadores y dispositivos táctiles"],
    },
    block4UsageSequence: {
      introStep: "Inicio (5 min): Explicación del funcionamiento del rosco y presentación de la regla de 'Pasapalabra' sin penalización.",
      developmentStep: "Desarrollo (25 min): Resolución en parejas de las letras; debate entre compañeros para consensuar la respuesta antes de confirmarla.",
      closureStep: "Cierre (5 min): Recopilación de las 3 palabras más difíciles en el muro de léxico digital de clase.",
    },
    block5DuaOptions: {
      representationOptions: [
        "Definición escrita en tipografía clara de alto contraste con lectura sintética opcional mediante botón de altavoz.",
        "Pistas visuales progresivas si no se recuerda la palabra al primer intento.",
      ],
      actionExpressionOptions: [
        "Respuesta por teclado, selección entre 3 alternativas o respuesta oral al docente.",
      ],
      engagementOptions: [
        "Sin límite de tiempo angustioso por letra; el docente o el alumno regulan el ritmo del cronómetro.",
      ],
    },
    block6Adaptability: {
      invariableCore: "La precisión en el significado operativo de las medidas de protección digital.",
      flexibleElements: [
        "Se puede jugar con el rosco completo de 26 letras o con versiones cortas de 10 letras.",
        "Permite competición cooperativa de toda el aula contra el reto global.",
      ],
    },
    block7ObservationRubric: {
      observableSuccessIndicator: "El estudiante no solo recuerda la palabra sino que explica por qué es necesaria en su vida diaria.",
      commonObstacleToDetect: "Frustración por no recordar la palabra exacta en la primera vuelta.",
      suggestedAdjustment: "Reforzar la función del botón 'Pasar' para volver a intentarlo en la segunda vuelta sin perder puntos.",
    },
    block8FilesAndLicensing: {
      directDownloadFormat: "HTML5 ejecutable offline + Ficha docente imprimible",
      fileSizeBytes: "11.8 MB",
      licenseType: "CC BY 4.0 Internacional",
      institutionalAttribution: "Universidad de Salamanca · Grupo EduDIG",
      downloadUrl: "#descarga-roscotic",
    },
    block9EvidenceStatus: {
      category: "Revisión interna",
      empiricalNotes: "Diseñado por el equipo de investigación de EduDIG; en fase de validación pedagógica interna previa al pilotaje de campo.",
      publicationsRelated: "Material interno de trabajo del Proyecto DUA-DIG.",
    },
  },
  {
    id: "res-ciberseguridad-colegio",
    officialTitle: "Guía de Ciberseguridad Escolar: Navegar con Confianza",
    shortDescription: "Cuaderno modular de estrategias para el aula sin pantallas o con un solo equipo, enfocado en la prevención de riesgos y hábitos saludables.",
    formatType: "Guía / Manual",
    stage: "1.º-2.º Primaria",
    stageCategory: "primaria-inicial",
    techRequirement: "Sin pantallas (offline)",
    duaAccessModality: "Con apoyos pictográficos",
    duaResponseModality: "Manipulativa/gráfica",
    evidenceStatus: "Investigado con evidencia",

    block1Decision: {
      targetCompetence: "Protección de dispositivos y salud digital en edades tempranas (6-8 años).",
      observableLearningGoal: "El alumnado clasifica conductas digitales en seguras vs. de riesgo y propone alternativas de juego activo frente al uso abusivo de pantallas.",
      whyUseIt: "Atiende a la primera etapa de Primaria donde las pantallas individuales no son pedagógicamente recomendables, priorizando materiales manipulativos.",
    },
    block2Preparation: {
      estimatedTimeMinutes: 45,
      requiredHardware: "Ninguno imprescindible. Cartulinas o fichas de recorte suministradas en el material.",
      internetRequired: false,
      priorSetupSteps: [
        "Descargar e imprimir las tarjetas de situaciones (1 juego por cada 4 estudiantes).",
        "Tijeras y pegamento escolar para la dinámica de clasificación.",
      ],
    },
    block3Prerequisites: {
      readingLevelRequired: "Lectura emergente. Cada tarjeta contiene un pictograma explicativo de apoyo.",
      digitalSkillsRequired: "Ninguna destreza técnica.",
      priorCurricularConcepts: ["Diferencia entre personas de confianza y desconocidos"],
    },
    block4UsageSequence: {
      introStep: "Inicio (10 min): Narración del cuento breve de la mascota 'Digi', que aprende a pedir ayuda a un adulto cuando algo en la pantalla le hace sentir incómodo.",
      developmentStep: "Desarrollo (25 min): Clasificación cooperativa de 8 tarjetas de situaciones en dos buzones: 'Semáforo Verde' (seguro) y 'Semáforo Rojo' (pedir ayuda).",
      closureStep: "Cierre (10 min): Repetición de la regla de oro: 'Si algo no te gusta o te da miedo en la pantalla, no toques nada y avisa a mamá, papá o la maestra'.",
    },
    block5DuaOptions: {
      representationOptions: [
        "Cuento oral con láminas visuales de gran formato (Kamishibai o tarjetas A4).",
        "Pictogramas validados de la asociación ARASAAC para facilitar el acceso a alumnado con necesidades de comunicación aumentativa.",
      ],
      actionExpressionOptions: [
        "Colocación física de tarjetas en los buzones de colores.",
        "Gesto de pulgar arriba o pulgar abajo para expresar acuerdo.",
      ],
      engagementOptions: [
        "Mascota empática que no juzga a los niños y refuerza la petición de ayuda al adulto como conducta inteligente.",
      ],
    },
    block6Adaptability: {
      invariableCore: "El mensaje de desculpabilización del menor y la búsqueda activa de ayuda ante situaciones incómodas.",
      flexibleElements: [
        "Las situaciones pueden adaptarse al entorno rural o urbano del colegio.",
        "Se puede trabajar en Educación Infantil (5 años) simplificando a 4 tarjetas.",
      ],
    },
    block7ObservationRubric: {
      observableSuccessIndicator: "El menor verbaliza a quién acudiría en el colegio si ve algo extraño en una tableta.",
      commonObstacleToDetect: "Sentimiento de culpa o miedo a ser castigado sin pantallas si avisa de un problema.",
      suggestedAdjustment: "El docente insiste explícitamente: 'En esta clase nunca te castigaremos por avisarnos de algo raro en la pantalla'.",
    },
    block8FilesAndLicensing: {
      directDownloadFormat: "PDF Imprimible a color y blanco/negro de alta economía de tinta",
      fileSizeBytes: "6.1 MB",
      licenseType: "CC BY-SA 4.0 Internacional",
      institutionalAttribution: "Universidad de Salamanca · EduDIG · DUA-DIG",
      downloadUrl: "#descarga-ciberseguridad-colegio",
    },
    block9EvidenceStatus: {
      category: "Investigado con evidencia",
      empiricalNotes: "Instrumento con respaldo de los proyectos financiados de seguridad infantil dirigidos por la Dra. Ana García-Valcárcel.",
      publicationsRelated: "García-Valcárcel, A., & Basilotta-Gómez-Pablos, V. (2024). Ciberseguridad y prevención temprana en Educación Primaria. Edutec.",
    },
  },
  {
    id: "res-podcast-accesible",
    officialTitle: "Laboratorio Sonoro: Creación de Podcast Escolar DUA",
    shortDescription: "Taller paso a paso para producir píldoras de audio inclusivas, fomentando la expresión oral, la accesibilidad de contenidos y el trabajo colaborativo.",
    formatType: "Actividad Multimodal",
    stage: "5.º-6.º Primaria",
    stageCategory: "primaria-superior",
    techRequirement: "Dispositivos compartidos",
    duaAccessModality: "Con soporte auditivo",
    duaResponseModality: "Respuesta oral",
    evidenceStatus: "Pilotado en centros",

    block1Decision: {
      targetCompetence: "Comunicación lingüística, alfabetización mediática y accesibilidad sonora.",
      observableLearningGoal: "El equipo redacta un guion de 2 minutos, graba una cápsula sonora y elabora su transcripción textual para que sea accesible a personas sordas.",
      whyUseIt: "Desarrolla la empatía hacia la diversidad sensorial enseñando a los propios alumnos a generar recursos accesibles en doble formato (audio + texto).",
    },
    block2Preparation: {
      estimatedTimeMinutes: 90,
      requiredHardware: "1 tableta o smartphone escolar con aplicación de grabación gratuita (ej. Audacity o grabadora nativa) y auriculares con micrófono.",
      internetRequired: false,
      priorSetupSteps: [
        "Comprobar los permisos del micrófono en el dispositivo.",
        "Habilitar rincones silenciosos en el aula o biblioteca para la toma de sonido.",
      ],
    },
    block3Prerequisites: {
      readingLevelRequired: "Lectura fluida de guion propio.",
      digitalSkillsRequired: "Pulsar botones de inicio y parada de grabación.",
      priorCurricularConcepts: ["Estructura de un texto divulgativo: presentación, cuerpo y conclusión"],
    },
    block4UsageSequence: {
      introStep: "Inicio (15 min): Escucha de un ejemplo de podcast escolar de 60 segundos y análisis de los efectos de sonido y la claridad de voz.",
      developmentStep: "Desarrollo (50 min): Redacción del guion por parejas (25 min) y ensayo/grabación de la cápsula (25 min).",
      closureStep: "Cierre (25 min): Redacción de la transcripción textual y escucha compartida de las producciones del aula.",
    },
    block5DuaOptions: {
      representationOptions: [
        "Plantilla de guion sonoro con marcas visuales de pausas, entonación y efectos.",
        "Ejemplos auditivos en diferentes niveles de dicción.",
      ],
      actionExpressionOptions: [
        "Roles complementarios en el equipo: locutor principal, técnico de sonido, redactor de transcripción, director de tiempos.",
      ],
      engagementOptions: [
        "Difusión interna en el boletín sonoro de la escuela o para las familias.",
      ],
    },
    block6Adaptability: {
      invariableCore: "El emparejamiento indisoluble del audio con su transcripción escrita accesible.",
      flexibleElements: [
        "El tema del podcast es 100% abierto (ciencias, literatura, historia o convivencia escolar).",
        "Se puede realizar sin tecnología de edición, grabando en una sola toma continua.",
      ],
    },
    block7ObservationRubric: {
      observableSuccessIndicator: "La cápsula sonora se comprende con claridad y la transcripción escrita es fiel al mensaje grabado.",
      commonObstacleToDetect: "Música de fondo demasiado alta que enmascara la voz humana.",
      suggestedAdjustment: "Enseñar a regular el volumen relativo (música al 15% durante la voz).",
    },
    block8FilesAndLicensing: {
      directDownloadFormat: "Guía docente PDF + Plantilla editable de guion (.odt/.docx) + Fichas de autoevaluación",
      fileSizeBytes: "4.9 MB",
      licenseType: "CC BY-SA 4.0 Internacional",
      institutionalAttribution: "Universidad de Salamanca · EduDIG",
      downloadUrl: "#descarga-podcast-accesible",
    },
    block9EvidenceStatus: {
      category: "Pilotado en centros",
      empiricalNotes: "Experiencia pilotada en centros adscritos a los convenios de investigación de la Facultad de Educación de la USAL durante 2025.",
      publicationsRelated: "Actas del Congreso Internacional de Tecnología, Aprendizaje y Sociedad (2025).",
    },
  },
];
