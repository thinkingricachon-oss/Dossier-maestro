/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * DOSSIER MAESTRO INTEGRAL: AUDITORÍA, EVIDENCIA EMPÍRICA Y REDISEÑO DE «RECURSOS DIGITALES DUA-DIG» (USAL)
 * Universidad de Salamanca · Grupo EduDIG · Convocatoria 2026/R055/01 · 21 de octubre de 2026
 */

export interface DossierSection {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  readingTimeMinutes: number;
  summary: string;
}

export const DOSSIER_META = {
  title: "Dossier Maestro Integral: Auditoría, Evidencia Empírica y Rediseño de «Recursos Digitales DUA-DIG»",
  institution: "Universidad de Salamanca",
  faculty: "Facultad de Educación · Departamento de Didáctica, Organización y Métodos de Investigación",
  group: "Grupo de Investigación en Innovación y Educación Digital (EduDIG)",
  project: "Diseño de recursos digitales para fomentar el Diseño Universal de Aprendizaje en los centros educativos (DUA-DIG)",
  callReference: "Convocatoria 2026/R055/01",
  consolidationDate: "21 de octubre de 2026",
  scientificDirectors: [
    { name: "Dra. Ana García-Valcárcel Muñoz-Repiso", role: "Directora Científica / Catedrática de Didáctica" },
    { name: "Dra. Sonia Casillas Martín", role: "Coordinadora Científica / Profesora Titular" },
    { name: "Dr. Marcos Cabezas González", role: "Investigador de Referencia / Métodos de Investigación" },
    { name: "Dra. Verónica Basilotta Gómez-Pablos", role: "Investigadora de Referencia / Tecnología Educativa" },
  ],
};

export const SECTIONS: DossierSection[] = [
  {
    id: "sec-1",
    number: "01",
    title: "Marco Institucional y Finalidad del Portal",
    subtitle: "Identidad del grupo EduDIG, misión pública documentada y límites de la memoria técnica",
    readingTimeMinutes: 4,
    summary: "Establece el anclaje del proyecto en la Facultad de Educación de la USAL, la dirección científica y la delimitación oficial como repositorio de transferencia y apoyo práctico al profesorado de Infantil y Primaria.",
  },
  {
    id: "sec-2",
    number: "02",
    title: "Fundamentación Empírica y Cuantificación de Barreras Docentes",
    subtitle: "Evidencia de carga laboral (TALIS 2024, OCDE, INEE) y desmitificación de sesgos",
    readingTimeMinutes: 7,
    summary: "Sustenta el rediseño en datos objetivos: 60% de sobrecarga administrativa, 42% estrés en preparación, 25.4h lectivas y dificultades con REA (Tang 2020; Tosun & Altintas 2024; Baas 2019), desmontando pseudociencias.",
  },
  {
    id: "sec-3",
    number: "03",
    title: "Auditoría Crítica del Sitio Actual y Accesibilidad (WCAG 2.2 AA)",
    subtitle: "Flujo docente, verificabilidad HTML y verificación de 6 criterios técnicos de accesibilidad",
    readingTimeMinutes: 6,
    summary: "Diagnostica la fricción del flujo tradicional y evalúa el cumplimiento estricto de WCAG 2.2 AA (contraste 4.5:1, foco visible, reflujo a 320px y accesibilidad de fichas descargables).",
  },
  {
    id: "sec-4",
    number: "04",
    title: "Arquitectura de Información y las 4 Pantallas Clave",
    subtitle: "Navegación editorial, catálogo facetado no diagnóstico y ficha normalizada de 9 bloques",
    readingTimeMinutes: 8,
    summary: "Especifica la portada orientada a tareas, los filtros funcionales anti-etiquetas diagnósticas, la ficha operativa de 9 bloques aplicable a GiraTIC/Identidad Digital y la guía 'Cómo empezar'.",
  },
  {
    id: "sec-5",
    number: "05",
    title: "Capa Pedagógica y Orientador: «Del Caso al Aula»",
    subtitle: "Motor socrático estructurado sin alucinaciones y evaluación crítica de la gamificación",
    readingTimeMinutes: 6,
    summary: "Describe el árbol de reformulación de barreras del entorno frente a la tarea, el mapa de situaciones didácticas y la restricción de la 'Ciudad Educativa' a una metáfora ilustrada estrictamente opcional sin puntos.",
  },
  {
    id: "sec-6",
    number: "06",
    title: "Biblioteca de Conceptos por Capas y Guiones Sonoros",
    subtitle: "Inventario C01 a C06 en 3 niveles de profundidad y guiones accesibles de locución A01 a A03",
    readingTimeMinutes: 6,
    summary: "Estructura los conceptos clave (DUA, Representación, Acción/Expresión, Compromiso, Competencia digital, Licencias abiertas) y aporta transcripciones sonoras completas para síntesis de voz.",
  },
  {
    id: "sec-7",
    number: "07",
    title: "Línea de Investigación Avanzada: MCR, Mente Extendida e IA",
    subtitle: "Protocolo Clark & Chalmers (1998), figuras de delegación cognitiva y neurodivergencia",
    readingTimeMinutes: 8,
    summary: "Formaliza la distinción entre apoyo de acceso permanente, andamiaje desvanecible y sustitución indebida, con el ciclo MCR de acoplamiento y pautas rigurosas para TDAH, autismo y altas capacidades.",
  },
  {
    id: "sec-8",
    number: "08",
    title: "Matriz de los 10 Cambios Prioritarios y Plan de Validación",
    subtitle: "Priorización cualitativa (P1/P2/P3), riesgos, tareas docentes y pruebas de usabilidad",
    readingTimeMinutes: 5,
    summary: "Jerarquiza las 10 intervenciones técnicas con métricas objetivas de éxito (≥85% finalización autónoma, cero barreras críticas) y dos fases de contraste empírico con docentes en ejercicio.",
  },
  {
    id: "sec-9",
    number: "09",
    title: "Preparación de Candidatura y Tareas del Puesto (USAL)",
    subtitle: "Convocatoria 2026/R055/01: Cadena operativa, análisis SPSS/NVivo y discurso para la entrevista",
    readingTimeMinutes: 6,
    summary: "Desglosa las 5 funciones clave (gestión web, intervenciones escolares, recogida/depuración, análisis estadístico y cualitativo, redacción científica) y el argumentario sólido para la entrevista.",
  },
  {
    id: "sec-10",
    number: "10",
    title: "Preguntas Bloqueantes para el Equipo Técnico y Científico",
    subtitle: "Siete consultas operativas previas al despliegue técnico sobre CMS, licencias y ética",
    readingTimeMinutes: 4,
    summary: "Detalla las cuestiones críticas de infraestructura (CMS, staging, versión de directrices CAST, autorías CC, RGPD) que deben resolverse con la dirección antes de tocar producción.",
  },
  {
    id: "sec-11",
    number: "11",
    title: "Dos Estructuras del Portal y Áreas Nuevas",
    subtitle: "Modelo taxonómico curricular vs. Modelo por flujos de trabajo docente y 3 áreas ampliadas",
    readingTimeMinutes: 6,
    summary: "Documento 'DUA_DIG_Dos_estructuras_y_areas_nuevas': Coexistencia de las dos arquitecturas de información y especificación de las 3 nuevas áreas de contenido (Moodle/EVA, Laboratorio Multimodal y Banco de Evidencias).",
  },
  {
    id: "sec-12",
    number: "12",
    title: "Dos Respuestas Completas: Herramientas Digitales y Moodle",
    subtitle: "Pautas de integración en Moodle (SCORM, H5P, entregas multimodales) y matriz de herramientas de autor",
    readingTimeMinutes: 7,
    summary: "Documento 'DUA_DIG_Dos_Respuestas_Completas_Herramientas_y_Moodle (2)': Protocolo técnico para Entornos Virtuales de Aprendizaje y evaluación de 8 herramientas (Genially, Canva, Edpuzzle, Scratch, etc.) bajo criterios DUA y RGPD.",
  },
  {
    id: "sec-13",
    number: "13",
    title: "Protocolo de Evaluación Formativa Inclusiva",
    subtitle: "Evaluación continua sin penalización del formato, escalas de progreso y triangulación DUA",
    readingTimeMinutes: 7,
    summary: "Documento 'DUA_DIG_Protocolo_Evaluación_Formativa': Marco metodológico para evaluar el aprendizaje sin sesgos de decodificación o motricidad, cuaderno de observación no punitivo y rúbricas visuales de autorregulación.",
  },
  {
    id: "sec-14",
    number: "14",
    title: "Hoja de Ruta de Transferencia Pedagógica y Escalabilidad",
    subtitle: "Fases de despliegue en centros educativos, articulación con la red de CFIE y sostenibilidad USAL",
    readingTimeMinutes: 8,
    summary: "Documento 'DUA_DIG_Hoja_Ruta_Transferencia_Pedagógica': Protocolo en 4 fases (diagnóstico, co-diseño, pilotaje y sostenibilidad institucional), vinculación con centros de formación docente y extensión a familias.",
  },
];

export interface WcagCriterion {
  id: string;
  criterion: string;
  level: string;
  element: string;
  technicalRequirement: string;
  currentStatus: "Falla" | "Parcial" | "Verificado";
  remedy: string;
}

export const WCAG_AUDIT_DATA: WcagCriterion[] = [
  {
    id: "1.1.1",
    criterion: "1.1.1 Contenido no textual",
    level: "A",
    element: "Infografías y recursos gráficos",
    technicalRequirement: "Alternativa textual completa o transcripción en síntesis HTML accesible, no meramente la etiqueta <img>.",
    currentStatus: "Falla",
    remedy: "Incorporar el Bloque 1 y Bloque 4 en texto plano nativo bajo cada infografía para lectores de pantalla.",
  },
  {
    id: "1.4.3",
    criterion: "1.4.3 Contraste mínimo",
    level: "AA",
    element: "Textos de interfaz y botones",
    technicalRequirement: "Ratio de contraste ≥ 4.5:1 en texto normal (<18pt) y ≥ 3:1 en texto grande o titulares sobre su fondo.",
    currentStatus: "Parcial",
    remedy: "Oscurecer etiquetas secundarias a #44403C sobre fondos claros y sustituir grises descoloridos por carbón mineral #1C1917.",
  },
  {
    id: "2.1.1",
    criterion: "2.1.1 y 2.1.2 Teclado y sin trampas",
    level: "A",
    element: "Menú global, modales y fichas",
    technicalRequirement: "Navegación 100% operable exclusivamente mediante Tab/Shift+Tab/Enter/Espacio sin quedar atrapado.",
    currentStatus: "Parcial",
    remedy: "Añadir gestión de foco mediante aria-modal, inert en capas de fondo y trampas de escape con tecla Esc.",
  },
  {
    id: "2.4.7",
    criterion: "2.4.7 Foco visible",
    level: "AA",
    element: "Enlaces, campos de formulario y botones",
    technicalRequirement: "Indicador de foco de alto contraste (mínimo 2px de ancho con contraste 3:1 respecto a superficies adyacentes).",
    currentStatus: "Falla",
    remedy: "Definir clase global outline-stone-900 outline-offset-2 en :focus-visible para todos los elementos interactivos.",
  },
  {
    id: "1.4.10",
    criterion: "1.4.10 Reflujo (Reflow)",
    level: "AA",
    element: "Dispositivos móviles y zoom al 400%",
    technicalRequirement: "Vista plenamente funcional a 320 px CSS de ancho sin desplazamiento horizontal forzado (scroll 2D).",
    currentStatus: "Parcial",
    remedy: "Reestructurar tablas de doble entrada en tarjetas verticales adaptables bajo 640px de ancho.",
  },
  {
    id: "2.4.4",
    criterion: "2.4.4 Propósito de enlaces",
    level: "A",
    element: "Descargas y accesos a fichas",
    technicalRequirement: "Textos de enlace contextuales y explícitos ('Ver ficha didáctica de GiraTIC') en lugar de 'Clic aquí' o enlaces vacíos.",
    currentStatus: "Falla",
    remedy: "Auditar y reescribir todos los enlaces de tarjetas con atributo aria-label explicativo que detalle título y formato.",
  },
];

export interface PriorityChange {
  id: number;
  intervention: string;
  teacherTask: string;
  risk: string;
  validationMethod: string;
  priority: "P1" | "P2" | "P3";
  priorityLabel: string;
  category: "Contenido" | "Estructura" | "Navegación" | "Metadatos";
}

export const PRIORITY_MATRIX: PriorityChange[] = [
  {
    id: 1,
    intervention: "Resumen HTML de decisión en cada ficha",
    teacherTask: "Valorar pertinencia pedagógica y requisitos técnicos en menos de 60 segundos antes de descargar archivos pesados.",
    risk: "Transcribir datos erróneos o desactualizados procedentes de memorias no vigentes.",
    validationMethod: "Cotejar síntesis con originales; test de decisión con docentes sin abrir los archivos.",
    priority: "P1",
    priorityLabel: "P1 · Urgente sin riesgo técnico",
    category: "Contenido",
  },
  {
    id: 2,
    intervention: "Identificación y corrección de partes (ej. Identidad Digital)",
    teacherTask: "Seleccionar la pieza didáctica adecuada y comprender la secuencia de aula sin descargar duplicados.",
    risk: "Desvincular erróneamente las partes del recurso pedagógico integral.",
    validationMethod: "Validar enlaces y orden lógico de la secuencia con la autoría original (Dr. Cabezas / Dra. Basilotta).",
    priority: "P1",
    priorityLabel: "P1 · Urgente sin riesgo técnico",
    category: "Estructura",
  },
  {
    id: 3,
    intervention: "Portada orientada a tareas («¿Qué necesitas preparar hoy?»)",
    teacherTask: "Comprensión inmediata de la oferta del portal e inicio ágil de la búsqueda sin desorientación.",
    risk: "Prometer funciones de filtrado profundo que aún no tengan todos los recursos categorizados.",
    validationMethod: "Test de primer clic y medición del tiempo medio hasta el primer recurso relevante.",
    priority: "P1",
    priorityLabel: "P1 · Urgente sin riesgo técnico",
    category: "Navegación",
  },
  {
    id: 4,
    intervention: "Descripciones explícitas en títulos de juegos (GiraTIC, RoscoTIC)",
    teacherTask: "Elegir recursos por adecuación curricular y no por la atracción cosmética del nombre lúdico.",
    risk: "Sobrecargar visualmente las tarjetas del catálogo con texto redundante.",
    validationMethod: "Evaluación de pertinencia curricular realizada por docentes basándose únicamente en la tarjeta.",
    priority: "P1",
    priorityLabel: "P1 · Urgente sin riesgo técnico",
    category: "Contenido",
  },
  {
    id: 5,
    intervention: "Inventario técnico de destinos y requisitos de archivo",
    teacherTask: "Anticipar bloqueos por cortafuegos escolares, requisitos de registro, proyector o conectividad previa.",
    risk: "Existencia de enlaces rotos o servicios de pago imprevistos no documentados.",
    validationMethod: "Apertura sistemática de todos los enlaces de la muestra en una red escolar limpia sin credenciales.",
    priority: "P1",
    priorityLabel: "P1 · Urgente sin riesgo técnico",
    category: "Metadatos",
  },
  {
    id: 6,
    intervention: "Diferenciación de estatus de evidencia científica",
    teacherTask: "Juzgar el grado de certidumbre pedagógica que merece cada material (Revisión interna vs Pilotado vs Investigado).",
    risk: "Atribuir evaluaciones globales o sellos no justificados empíricamente.",
    validationMethod: "Revisión científica colegiada del Grupo EduDIG y asignación explícita de categorías.",
    priority: "P1",
    priorityLabel: "P1 · Urgente sin riesgo técnico",
    category: "Metadatos",
  },
  {
    id: 7,
    intervention: "Aclaración de créditos y estructura institucional USAL",
    teacherTask: "Reconocer el rigor universitario y facilitar la citación formal en proyectos de centro.",
    risk: "Omitir logotipos institucionales preceptivos o vulnerar manuales de identidad USAL.",
    validationMethod: "Aprobación formal del Servicio de Comunicación USAL y las coordinadoras científicas.",
    priority: "P2",
    priorityLabel: "P2 · Estructural necesaria",
    category: "Estructura",
  },
  {
    id: 8,
    intervention: "Guía breve «Cómo empezar» en 5 pasos",
    teacherTask: "Planificar y adaptar un recurso en pocos pasos sin requerir formación teórica previa.",
    risk: "Generar un manual denso y prolijo que aumente la carga cognitiva en vez de reducirla.",
    validationMethod: "Comparación de tiempos de preparación docente entre grupos con y sin guía.",
    priority: "P2",
    priorityLabel: "P2 · Estructural necesaria",
    category: "Contenido",
  },
  {
    id: 9,
    intervention: "Conservación de contexto e integridad idiomática",
    teacherTask: "Volver al catálogo sin perder filtros seleccionados ni desorientarse en rutas bilingües /en/ vacías.",
    risk: "Generar bucles de redirección o promesas de traducción ausentes.",
    validationMethod: "Prueba de navegación de retorno tras consultar fichas y auditoría del selector de idioma.",
    priority: "P2",
    priorityLabel: "P2 · Estructural necesaria",
    category: "Navegación",
  },
  {
    id: 10,
    intervention: "Búsqueda facetada funcional no diagnóstica",
    teacherTask: "Localizar materiales por dotación tecnológica y vías de representación sensorial en un solo clic.",
    risk: "Generar combinaciones de filtros que arrojen resultados vacíos por falta de metadatos exhaustivos.",
    validationMethod: "Piloto sobre inventario verificado de 30 recursos antes del despliegue masivo.",
    priority: "P3",
    priorityLabel: "P3 · Condicionada a base de datos",
    category: "Navegación",
  },
];

export interface BlockingQuestion {
  id: number;
  topic: string;
  question: string;
  impact: string;
  suggestedAction: string;
  status: "Pendiente" | "En análisis" | "Documentado";
}

export const BLOCKING_QUESTIONS: BlockingQuestion[] = [
  {
    id: 1,
    topic: "CMS y Permisos de Servidor",
    question: "¿Qué versión exacta de CMS (WordPress multisitio, Diarium USAL o Drupal) gestiona actualmente el dominio recursosdigitalesdua.usal.es y qué perfil de usuario (Editor de contenidos o Administrador de plataforma) tiene asignado el puesto de la convocatoria?",
    impact: "Determina si el rediseño puede implementarse mediante plantillas PHP/CSS a medida o debe restringirse estrictamente a bloques Gutenberg nativos.",
    suggestedAction: "Solicitar credenciales de prueba al Servicio de Informática de la USAL antes de escribir código de tema.",
    status: "Pendiente",
  },
  {
    id: 2,
    topic: "Entorno de Pruebas (Staging)",
    question: "¿Existe una réplica o servidor de desarrollo aislado para validar maquetas, accesibilidad y cambios de hoja de estilo antes de tocar la web pública de EduDIG?",
    impact: "Evita cortes en el servicio a docentes en ejercicio durante la actualización de fichas y tablas.",
    suggestedAction: "Configurar un subdominio o clon local verificado con la base de datos de producción anonimizada.",
    status: "Pendiente",
  },
  {
    id: 3,
    topic: "Público y Alcance Temático Vigente",
    question: "¿El proyecto DUA-DIG exige que todos los materiales del catálogo trabajen competencia digital (identidad, seguridad, alfabetización), o se admiten áreas curriculares genéricas de Infantil y Primaria (matemáticas, lengua, conocimiento del medio)?",
    impact: "Define el esquema de taxonomías curriculares y los filtros del catálogo facetado.",
    suggestedAction: "Revisar los anexos de la memoria del proyecto con las directoras científicas (Dra. García-Valcárcel y Dra. Casillas).",
    status: "En análisis",
  },
  {
    id: 4,
    topic: "Custodia de Originales Descargables",
    question: "¿Dónde se custodian los archivos editables y documentos descargables de recursos clave como 'Participación ciudadana', 'GiraTIC' e 'Identidad Digital' para elaborar sus resúmenes HTML completos?",
    impact: "Condiciona la resolución inmediata del problema de fichas didácticas inaccesibles en texto base.",
    suggestedAction: "Solicitar acceso a la carpeta de trabajo del Grupo EduDIG en el repositorio institucional.",
    status: "Documentado",
  },
  {
    id: 5,
    topic: "Licencias y Propiedad Intelectual",
    question: "¿Bajo qué licencia Creative Commons específica (CC BY 4.0, CC BY-NC 4.0, CC BY-SA 4.0) están registrados los materiales de producción propia y qué obras incorporadas pertenecen a terceros?",
    impact: "Garantiza la seguridad jurídica de los centros escolares que descargan, modifican y redistribuyen materiales.",
    suggestedAction: "Incorporar el Bloque 8 normalizado con el distintivo de licencia y enlace formal a la licencia legal.",
    status: "Documentado",
  },
  {
    id: 6,
    topic: "Versión Oficial del Marco DUA",
    question: "¿El equipo de investigación trabaja formalmente con las Pautas DUA 2.2 tradicionales o ha adoptado la reciente actualización de Directrices CAST 3.0 para la descripción de recursos?",
    impact: "Afecta a la terminología pedagógica de las fichas (ej. 'redes afectivas' vs. 'pautas de acogida, equidad y compromiso').",
    suggestedAction: "Proponer una tabla de equivalencias operativa en el Atlas DUA que soporte ambas versiones sin confusión.",
    status: "En análisis",
  },
  {
    id: 7,
    topic: "Protocolo Ético y RGPD en Centros",
    question: "¿Qué identificadores y modelos de consentimiento informado aprobó el Comité de Ética de la USAL para las intervenciones con menores de edad en los colegios participantes?",
    impact: "Condiciona el protocolo de recogida de datos del puesto (pruebas de competencia digital y entrevistas a docentes).",
    suggestedAction: "Consultar el código de aprobación ética y los protocolos de custodia segura de transcripciones.",
    status: "Documentado",
  },
];

export interface InternalDocumentFile {
  fileName: string;
  sourceDocId: string;
  topicCategory: string;
  sectionMapped: string;
  relatedTab: "dossier" | "prototype" | "socratic" | "concepts" | "moodle" | "candidacy";
  keyContributions: string;
  fullTextDigest: string[];
  keyQuotes: string[];
  practicalDirectives: string[];
  targetDeliverables: string[];
}

export const DOCUMENT_FILES_INVENTORY: InternalDocumentFile[] = [
  {
    fileName: "Auditoria_DUA_DIG_USAL (2).docx",
    sourceDocId: "doc-01",
    topicCategory: "Auditoría Técnica y Accesibilidad",
    sectionMapped: "Capítulo 03 · WCAG 2.2 AA",
    relatedTab: "dossier",
    keyContributions: "Evaluación empírica del sitio actual, ratios de contraste, barreras de teclado y propuesta de 6 criterios WCAG.",
    fullTextDigest: [
      "El documento recoge la auditoría técnica exhaustiva realizada sobre el portal actual 'recursosdigitalesdua.usal.es'. Se analizan las limitaciones de la arquitectura heredada en WordPress/Diarium, donde las fichas didácticas de materiales como GiraTIC, Identidad Digital y Participación Ciudadana solo presentan etiquetas estáticas sin acceso textual completo al contenido pedagógico ni a los archivos de descarga directa.",
      "Se identifican 6 barreras críticas de accesibilidad bajo el estándar internacional WCAG 2.2 Nivel AA: falta de alternativa textual (1.1.1), contraste insuficiente en botones secundarios inferior a 4.5:1 (1.4.3), elementos interactivos no operables mediante tabulación de teclado (2.1.1/2.1.2), ausencia de anillo de foco visible (2.4.7), fallo de reflujo horizontal a 320px en dispositivos móviles (1.4.10) y textos de enlace genéricos como 'clic aquí' (2.4.4).",
      "Concluye que el flujo actual traslada toda la fricción al maestro (formato abstracto -> descarga a ciegas -> sorpresa por incompatibilidad) y propone la transición obligatoria al recorrido de 5 hitos: Encontrar, Decidir, Preparar, Utilizar y Recuperar."
    ],
    keyQuotes: [
      "«El 74% de las fichas didácticas actuales no exponen sus metas pedagógicas ni requerimientos técnicos en la capa HTML accesible, obligando a descargas innecesarias».",
      "«La accesibilidad no es un añadido cosmético: una ficha ilegible para un lector de pantalla excluye al docente con discapacidad visual antes de entrar al aula»."
    ],
    practicalDirectives: [
      "Implementar el Bloque 1 y Bloque 4 en texto plano nativo bajo cada recurso sin obligar a descargar PDFs pesados.",
      "Garantizar relación de contraste ≥ 4.5:1 sustituyendo los tonos grises claros por carbón mineral (#1C1917).",
      "Incorporar indicador de foco visible outline de 2px con desplazamiento en todos los elementos interactivos."
    ],
    targetDeliverables: [
      "Matriz de auditoría WCAG 2.2 AA verificada.",
      "Hoja de estilos de accesibilidad corregida.",
      "Fichas didácticas con transcripción HTML completa."
    ]
  },
  {
    fileName: "DUA_DIG_Dos_estructuras_y_areas_nuevas.docx",
    sourceDocId: "doc-02",
    topicCategory: "Arquitectura de Información Ampliada",
    sectionMapped: "Capítulo 11 · Dos Estructuras & Áreas Nuevas",
    relatedTab: "moodle",
    keyContributions: "Contraste entre Estructura A (Taxonomía Curricular) y Estructura B (Flujos de Trabajo Docente); creación de las 3 nuevas áreas temáticas.",
    fullTextDigest: [
      "Este documento aborda la discusión metodológica central sobre la arquitectura de la información del portal. Analiza la disyuntiva entre mantener una estructura taxonómica tradicional (Estructura A: etapa educativa -> área curricular LOMLOE -> formato -> recurso) o migrar a una arquitectura orientada a la resolución de problemas de aula (Estructura B: Encontrar -> Adaptar -> Flexibilizar -> Evaluar).",
      "Se demuestra empíricamente que la Estructura B ahorra más de un 70% de tiempo al profesorado en la preparación semanal, al permitir localizar materiales según su dotación técnica real (sin pantallas, proyector colectivo o tabletas compartidas) sin obligar a navegar por 13 categorías abstractas de formato.",
      "Formaliza la ampliación del proyecto hacia tres nuevas áreas temáticas no previstas en el diseño inicial: 1) Área de Integración en Moodle/EVA (formatos SCORM y H5P); 2) Laboratorio de Recursos Multimodales y Herramientas de Autor (evaluación de Genially, Canva, Scratch, etc.); 3) Banco de Evidencias e Intervenciones Escolares (transferencia de datos psicométricos de los colegios de Castilla y León)."
    ],
    keyQuotes: [
      "«El profesor no busca 'una infografía' o 'un podcast' por fetichismo del formato; busca una respuesta didáctica viable para los 45 minutos de su clase de mañana».",
      "«Las tres nuevas áreas transforman el repositorio en un ecosistema vivo de transferencia universitaria y apoyo real a los centros»."
    ],
    practicalDirectives: [
      "Configurar la Estructura B orientada a tareas como la interfaz principal y predeterminada del portal.",
      "Mantener la Estructura A curricular como un modo secundario de consulta para inspectores y jefaturas de estudios.",
      "Habilitar los repositorios descargables de paquetes H5P y cursos Moodle modelo (.mbz) en el Área 1."
    ],
    targetDeliverables: [
      "Selector dual de arquitectura de navegación.",
      "Especificación funcional de las 3 nuevas áreas temáticas.",
      "Paquetes de cursos modelo Moodle restaurables."
    ]
  },
  {
    fileName: "DUA_DIG_Dos_Respuestas_Completas_Herramientas_y_Moodle (2).docx",
    sourceDocId: "doc-03",
    topicCategory: "Integración Tecnológica y Aulas Virtuales",
    sectionMapped: "Capítulo 12 · Moodle y Herramientas Digitales",
    relatedTab: "moodle",
    keyContributions: "Dos respuestas completas: protocolo de despliegue en Moodle (SCORM, H5P, entregas multimodales) y matriz DUA de 8 herramientas de autor.",
    fullTextDigest: [
      "El documento formaliza dos respuestas operativas completas y detalladas para dotar a los maestros de herramientas prácticas de aula digital inclusiva.",
      "Respuesta Completa 1: Manual de ingeniería pedagógica para la configuración accesible de Moodle y aulas virtuales institucionales (Educacyl Moodle, Campus USAL). Detalla cómo activar tareas con doble vía de entrega (texto en línea + notas de audio grabadas), cómo duplicar la representación mediante reproductores integrados, cómo emplear las restricciones de acceso como andamiajes positivos de apoyo y cómo configurar rúbricas cualitativas DUA en el calificador.",
      "Respuesta Completa 2: Matriz de evaluación técnica de las 8 herramientas de autor más empleadas en educación elemental (H5P, Genially, Canva for Education, Scratch, Book Creator, Edpuzzle, Padlet y Kahoot). Aplica criterios de soberanía de datos (RGPD de menores sin cuentas obligatorias), navegabilidad por teclado y nivel de distracción por 'detalles seductores' cognitivamente dañinos."
    ],
    keyQuotes: [
      "«Exigir que un alumno con dificultades disgráficas entregue un ensayo escrito en Moodle para evaluar si comprende qué es una contraseña segura es una barrera añadida que desvirtúa la evaluación».",
      "«El uso de Kahoot con temporizadores de cuenta atrás genera ansiedad y penaliza el procesamiento reflexivo: no cumple las directrices DUA de acogida y autorregulación»."
    ],
    practicalDirectives: [
      "Desaconsejar el uso de cuestionarios con temporizadores angustiosos en Educación Primaria.",
      "Priorizar herramientas de autor de estándar abierto como H5P y Book Creator sobre plataformas comerciales cerradas.",
      "Distribuir las plantillas de rúbricas DUA en formato editable para importación directa en el módulo de tareas de Moodle."
    ],
    targetDeliverables: [
      "Guía técnica de 5 pasos para configuración DUA en Moodle.",
      "Matriz comparativa de 8 herramientas de autor descargable en PDF.",
      "Plantilla de rúbrica cualitativa para evaluación no diagnóstica."
    ]
  },
  {
    fileName: "DUA_DIG_finalidad_web.docx",
    sourceDocId: "doc-04",
    topicCategory: "Marco Institucional y Transferencia",
    sectionMapped: "Capítulo 01 · Marco Institucional",
    relatedTab: "dossier",
    keyContributions: "Misión pública oficial del Grupo EduDIG, límites de la memoria técnica y compromiso de transferencia a Infantil y Primaria.",
    fullTextDigest: [
      "Recoge la declaración formal de propósitos y la misión institucional pública del portal 'Recursos Digitales DUA-DIG'. Certifica el respaldo del Grupo de Investigación en Innovación y Educación Digital (EduDIG) de la Universidad de Salamanca, bajo la dirección de la Dra. Ana García-Valcárcel y la Dra. Sonia Casillas.",
      "Delimita con rigor los compromisos oficiales adquiridos en la convocatoria pública: el sitio web está concebido como un repositorio universitario de transferencia y apoyo práctico al profesorado de Infantil y Primaria, y no como una red social, un sistema de gestión escolar privado o una plataforma de inteligencia artificial generativa autónoma.",
      "Establece las obligaciones de accesibilidad, transparencia y rigor científico que deben guiar cualquier rediseño de interfaz, protegiendo la reputación académica de la Universidad de Salamanca."
    ],
    keyQuotes: [
      "«Esperamos que este sitio se convierta en un punto de encuentro para la comunidad educativa, facilitando la creación de entornos inclusivos y equitativos».",
      "«La web no debe prometer capacidades automatizadas que no cuenten con validación empírica en las aulas de los colegios participantes»."
    ],
    practicalDirectives: [
      "Hacer visibles en todas las pantallas los créditos oficiales de EduDIG, la Facultad de Educación y la Universidad de Salamanca.",
      "Evitar la sobrecarga del portal con herramientas accesorias o chatbots sin trazabilidad científica.",
      "Garantizar el acceso público y universal a todos los materiales sin requerir inicio de sesión obligatorio."
    ],
    targetDeliverables: [
      "Sección 'Quiénes Somos' y marco institucional actualizado.",
      "Pie legal con atribución y licencias oficiales.",
      "Declaración institucional de transferencia científica."
    ]
  },
  {
    fileName: "DUA_DIG_informe_y_evidencia_docente.docx",
    sourceDocId: "doc-05",
    topicCategory: "Evidencia Cuantitativa Docente",
    sectionMapped: "Capítulo 02 · Barreras Docentes & TALIS",
    relatedTab: "dossier",
    keyContributions: "Datos objetivos de carga docente (TALIS 2024, Tang 2020, Tosun & Altintas 2024) y desmitificación de estilos de aprendizaje.",
    fullTextDigest: [
      "Reúne los datos cuantitativos más recientes sobre las condiciones de trabajo y las barreras reales que afronta el profesorado en España. Integra la muestra española del informe internacional TALIS 2024 (OCDE/INEE; 506 centros de Primaria; tasa de respuesta del 94%), destacando que el 60% sufre alto estrés por sobrecarga administrativa, el 42% por preparación de clases y que imparten una media de 25,4 horas lectivas semanales.",
      "Cruza estos datos con investigaciones específicas sobre Recursos Educativos Abiertos (Tang, 2020; Tosun & Altintas, 2024; Baas et al., 2019), donde el 63% señala la falta de tiempo como impedimento principal y un 83,2% prioriza materiales con sello institucional universitario para mitigar la incertidumbre.",
      "Desmonta mitos pedagógicos perjudiciales: refuta el neuromito de los 'Estilos de Aprendizaje' (VAK) según las directrices CAST 3.0; demuestra con el ensayo de Kuster et al. (2018) que tipografías clínicas como 'Dyslexie' no mejoran la lectura frente a fuentes estándar; y advierte del efecto distractivo de los 'detalles seductores' visuales analizado en 50 metaanálisis."
    ],
    keyQuotes: [
      "«Con 25,4 horas lectivas semanales y sobrecarga burocrática, pedirle a un maestro que explore catálogos confusos de 50 páginas es garantizar el abandono del recurso».",
      "«El 83,2% de los maestros confía significativamente más en el aval científico de la USAL que en blogs docentes informales: esa confianza debe traducirse en fichas operativas de menos de 1 minuto de lectura»."
    ],
    practicalDirectives: [
      "Diseñar tarjetas de recurso que permitan juzgar pertinencia curricular en menos de 60 segundos.",
      "Eliminar cualquier categorización de materiales basada en 'estilos de aprendizaje' visual/auditivo/cinestésico.",
      "Prescindir de ornamentos infantiles o animaciones accesorias que saturen la memoria de trabajo docente y discente."
    ],
    targetDeliverables: [
      "Capítulo 2 del Dossier Maestro completamente fundamentado.",
      "Tarjetas de síntesis cuantitativa TALIS 2024 integradas.",
      "Guía de desmitificación de pseudociencias en el aula."
    ]
  },
  {
    fileName: "DUA_DIG_Inventario_y_biblioteca_de_conceptos (1).docx",
    sourceDocId: "doc-06",
    topicCategory: "Marco Conceptual DUA",
    sectionMapped: "Capítulo 06 · Biblioteca C01-C06",
    relatedTab: "concepts",
    keyContributions: "Estructuración concéntrica de conceptos fundamentales en 3 capas (una frase, aplicación didáctica y fundamentación científica).",
    fullTextDigest: [
      "Desarrolla el modelo pedagógico concéntrico para la divulgación y comprensión profunda de los principios del Diseño Universal para el Aprendizaje. En lugar de ofrecer definiciones enciclopédicas densas, articula cada concepto en tres capas progresivas de lectura: Capa 1 (En una frase: síntesis operativa inmediata), Capa 2 (Explicación y ejemplo contextualizado en aula de Primaria) y Capa 3 (Fundamentación académica rigurosa y advertencia de límites científicos).",
      "Define exhaustivamente los seis conceptos cardinales del proyecto: C01 (Diseño Universal para el Aprendizaje), C02 (Múltiples formas de representación), C03 (Múltiples formas de acción y expresión), C04 (Múltiples formas de implicación o compromiso), C05 (Competencia digital en el aula) y C06 (Licencias abiertas y derechos de autor REA).",
      "Insiste en los límites de cada principio: una tableta no es inclusiva per se, duplicar formatos sin contigüidad sobrecarga la mente y gamificar con puntos no genera motivación intrínseca."
    ],
    keyQuotes: [
      "«La Capa 1 da la pauta rápida para la programación; la Capa 2 muestra cómo se ve en el pupitre; la Capa 3 previene la tergiversación pseudocientífica».",
      "«Cambiar la modalidad de respuesta nunca debe alterar el constructo conceptual que se pretende evaluar»."
    ],
    practicalDirectives: [
      "Incorporar un selector interactivo de 3 capas en la interfaz de la biblioteca conceptual.",
      "Vincular cada recurso del catálogo con su concepto DUA rector.",
      "Explicitar los límites científicos en las fichas para evitar expectativas falsas en los centros."
    ],
    targetDeliverables: [
      "Inventario interactivo C01 a C06.",
      "Glosario por capas descargable en texto enriquecido.",
      "Tarjetas de formación docente en centro."
    ]
  },
  {
    fileName: "DUA_DIG_Inventario_y_biblioteca_de_conceptos.docx",
    sourceDocId: "doc-07",
    topicCategory: "Marco Conceptual DUA (Versión Base)",
    sectionMapped: "Capítulo 06 · Biblioteca C01-C06",
    relatedTab: "concepts",
    keyContributions: "Glosario terminológico de apoyo y armonización con directrices CAST 2.2 y 3.0.",
    fullTextDigest: [
      "Constituye la versión fundacional del inventario conceptual del proyecto DUA-DIG. Contiene las definiciones base de accesibilidad universal, diseño inclusivo, barreras del entorno curricular y taxonomías de recursos digitales.",
      "Analiza las diferencias terminológicas entre las Pautas DUA 2.2 (focalizadas en las tres redes cerebrales de reconocimiento, estrategia y afecto) y la reciente actualización CAST 3.0 (que enfatiza la equidad, la eliminación de sesgos sistémicos y el bienestar socioemocional en el diseño didáctico).",
      "Proporciona una tabla de correspondencias terminológicas que garantiza la compatibilidad entre la literatura pedagógica clásica que manejan los centros educativos y las publicaciones científicas más recientes de la Universidad de Salamanca."
    ],
    keyQuotes: [
      "«El paso de CAST 2.2 a CAST 3.0 traslada el foco de las redes neuroanatómicas puras hacia el diseño de entornos de aprendizaje acogedores, equitativos y libres de discriminación».",
      "«La coherencia terminológica es indispensable para que los maestros no perciban el DUA como otra moda pasajera con nuevos nombres para viejas prácticas»."
    ],
    practicalDirectives: [
      "Incluir la tabla de equivalencias CAST 2.2 / CAST 3.0 en el Atlas conceptual del portal.",
      "Utilizar lenguaje accesible evitando la jerga neurocientífica innecesaria en las fichas dirigidas a maestros noveles.",
      "Sustentar cada término en las fuentes canónicas de Rose, Meyer y CAST."
    ],
    targetDeliverables: [
      "Tabla comparativa de directrices CAST 2.2 vs. 3.0.",
      "Glosario terminológico unificado del Grupo EduDIG.",
      "Guía de armonización para publicaciones científicas."
    ]
  },
  {
    fileName: "Guia_DUA_CAST_3_0_y_Tareas_DUA_DIG (1).docx",
    sourceDocId: "doc-08",
    topicCategory: "Directrices CAST 3.0 y Metodología",
    sectionMapped: "Capítulo 04 & 09 · CAST 3.0 y Puesto USAL",
    relatedTab: "candidacy",
    keyContributions: "Actualización de pautas a CAST 3.0 (acogida, equidad, diseño no restrictivo) y especificación de tareas del puesto 2026/R055/01.",
    fullTextDigest: [
      "El documento conecta la actualización teórica a las directrices CAST 3.0 con la ejecución práctica de las tareas de investigación adscritas a la Convocatoria 2026/R055/01 de la Universidad de Salamanca.",
      "Detalla la cadena operativa de 5 eslabones que asume el puesto de apoyo a la investigación: 1) Gestión y actualización técnica del portal y el catálogo de recursos; 2) Coordinación logística y ejecución de intervenciones experimentales en colegios de Castilla y León; 3) Recogida sistemática y depuración de datos primarios con menores bajo consentimiento informado; 4) Análisis estadístico multivariante con SPSS (pruebas no paramétricas, correlaciones, fiabilidad alfa/theta, escala ECODIES) y cualitativo con NVivo 14 (triangulación de entrevistas semiestructuradas); 5) Redacción de informes de transferencia y borradores de artículos de impacto.",
      "Aporta el discurso fundamentado y defendible para la entrevista del proceso selectivo, demostrando dominio de los instrumentos desarrollados por el Dr. Marcos Cabezas y la Dra. Verónica Basilotta."
    ],
    keyQuotes: [
      "«El perfil del puesto no es el de un programador aislado ni el de un teórico puro: es el nexo operativo que traslada el diseño digital a las aulas escolares y depura los datos para las publicaciones científicas».",
      "«El dominio conjunto de SPSS para el análisis cuantitativo y NVivo para la codificación cualitativa garantiza la triangulación rigurosa del impacto de DUA-DIG»."
    ],
    practicalDirectives: [
      "Estructurar el plan de trabajo del puesto en torno a la cadena operativa de 5 eslabones.",
      "Verificar la parametrización de las escalas de competencia digital (ECODIES) antes de las visitas de campo.",
      "Aplicar protocolos de anonimización estricta en las bases de datos de SPSS."
    ],
    targetDeliverables: [
      "Protocolo operativo de intervención en centros educativos.",
      "Libro de códigos para análisis cualitativo en NVivo 14.",
      "Guion de defensa de la candidatura para la entrevista de selección."
    ]
  },
  {
    fileName: "Informe_redisenio_DUA_DIG_USAL_v1 (1).docx",
    sourceDocId: "doc-09",
    topicCategory: "Diseño de Interfaz de Usuario",
    sectionMapped: "Capítulo 04 & 08 · 4 Pantallas y 10 Cambios",
    relatedTab: "prototype",
    keyContributions: "Especificación de las 4 pantallas clave, catálogo facetado no diagnóstico y ficha normalizada de 9 bloques.",
    fullTextDigest: [
      "Constituye la memoria técnica de diseño de interacción (UI/UX) para la renovación completa del portal de recursos. Plantea la erradicación del 'diseño tipo almacén' y define las especificaciones detalladas de las 4 pantallas prioritarias de intervención.",
      "Pantalla 1 (Portada orientada a tareas): Encabezado institucional USAL/EduDIG, titular H1 centrado en la viabilidad de aula y el módulo central de decisión docente '¿Qué necesitas preparar hoy?' (Encontrar, Adaptar o Flexibilizar).",
      "Pantalla 2 (Catálogo facetado no diagnóstico): Buscador por objetivos de competencia digital y filtros funcionales por etapa, dotación tecnológica (sin pantallas, proyector o tabletas) y vías DUA sensoriales, prohibiendo etiquetas de déficit clínico.",
      "Pantalla 3 (Ficha operativa normalizada de 9 bloques): Estructura modular rigurosa aplicable a GiraTIC, Identidad Digital e Infografías (Decisión, Preparación, Prerrequisitos, Secuencia de aula, Opciones DUA, Adaptabilidad, Pauta de observación, Archivos/Licencias y Estatus de evidencia empírica).",
      "Pantalla 4 (Guía 'Cómo empezar'): Itinerario en 5 pasos para maestros sin formación teórica previa y lista de verificación de aula imprimible en 1 sola hoja.",
      "Matriz de los 10 cambios prioritarios: Jerarquización cualitativa en niveles P1, P2 y P3, identificando tareas facilitadas, riesgos y planes de validación."
    ],
    keyQuotes: [
      "«Cada clic adicional o segundo de duda en la interfaz es una probabilidad directa de que el maestro cierre la pestaña y vuelva al libro de texto tradicional».",
      "«La ficha de 9 bloques normalizada garantiza que ningún docente entre a clase a ciegas respecto a tiempos o requerimientos de conexión»."
    ],
    practicalDirectives: [
      "Desplegar la estructura de 9 bloques de manera consistente en todo el catálogo sin excepciones.",
      "Proporcionar siempre la opción de 'Imprimir Tarjeta de Aula' en 1 sola página para llevar al pupitre.",
      "Restringir la 'Ciudad Educativa' a una metáfora ilustrada opcional sin mecánicas de gamificación adictiva."
    ],
    targetDeliverables: [
      "Prototipo interactivo funcional de las 4 pantallas clave.",
      "Fichas operativas de 9 bloques de los recursos piloto.",
      "Matriz de los 10 cambios prioritarios lista para desarrollo."
    ]
  },
  {
    fileName: "MCR_Mente_Extendida_IA_y_Diversidad_Dos_Respuestas (1).docx",
    sourceDocId: "doc-10",
    topicCategory: "Investigación Teórica Avanzada",
    sectionMapped: "Capítulo 07 · MCR y Mente Extendida",
    relatedTab: "candidacy",
    keyContributions: "Protocolo Clark & Chalmers (1998), las 3 figuras de delegación cognitiva, ciclo de 6 pasos MCR y pautas para neurodivergencia.",
    fullTextDigest: [
      "El documento formaliza la línea de investigación teórica más avanzada del proyecto: la aplicación de la Tesis de la Mente Extendida (Clark & Chalmers, 1998) a la regulación metacognitiva (MCR) en entornos de aprendizaje mediados por inteligencia artificial y diversidad funcional.",
      "Define con precisión matemática las tres figuras de delegación cognitiva: 1) Apoyo de acceso (permanente: lectores de pantalla, subtítulos, contraste; no debe retirarse jamás porque derriba una barrera sensorial); 2) Andamiaje de aprendizaje (desvanecible: pistas progresivas, modelos resueltos; se retiran conforme el alumno consolida la autonomía); 3) Sustitución indebida (a evitar: la IA o la herramienta ejecuta el razonamiento o redacta la conclusión que el aprendiz debía interiorizar).",
      "Estructura el Ciclo MCR de Regulación del Acoplamiento en 6 pasos iterativos (Situar objetivo -> Relacionar conceptos -> Perturbar variables -> Reconfigurar supuestos -> Transferir -> Regular acoplamiento).",
      "Establece pautas rigurosas para la atención a la neurodivergencia sin caer en sesgos clínicos ni estereotipos: para TDAH separa las dificultades ejecutivas de la comprensión conceptual; para Autismo desvincula la barrera de comunicación oral del dominio cognitivo asegurando predictibilidad; para Altas Capacidades prohíbe el aumento de tareas mecánicas repetitivas, exigiendo retos de profundidad relacional."
    ],
    keyQuotes: [
      "«Una prótesis visual no se le retira a una persona con ceguera para 'evaluar si ya ve sola'; del mismo modo, los apoyos de acceso sensorial deben ser permanentes en la interfaz».",
      "«Delegar en una IA la resolución del dilema moral en ciberseguridad convierte al alumno en un espectador pasivo: no hay aprendizaje extendido, sino atrofia cognitiva»."
    ],
    practicalDirectives: [
      "Auditar cada recurso digital para garantizar que los apoyos de acceso no se desvanezcan artificialmente.",
      "Incorporar paradas socráticas de reflexión en los materiales digitales para prevenir la sustitución indebida por IA.",
      "Aplicar las directrices de neurodivergencia en el diseño de las pautas de observación de aula."
    ],
    targetDeliverables: [
      "Simulador interactivo del Ciclo MCR de 6 pasos.",
      "Protocolo de delegación cognitiva para entornos educativos con IA.",
      "Guía de adaptación para alumnado neurodivergente sin etiquetas clínicas."
    ]
  },
  {
    fileName: "UNIVERSIDAD DE SALAMANCA.docx",
    sourceDocId: "doc-11",
    topicCategory: "Identidad Corporativa y Jurídica",
    sectionMapped: "Capítulo 01 & 09 · Convocatoria USAL",
    relatedTab: "candidacy",
    keyContributions: "Parámetros institucionales, manual de identidad gráfica USAL y régimen jurídico de la Convocatoria 2026/R055/01.",
    fullTextDigest: [
      "Documento que recoge el marco jurídico, administrativo e institucional de la Universidad de Salamanca en relación con los proyectos de investigación competitivos de la Facultad de Educación.",
      "Estipula los requisitos formales de identidad gráfica corporativa de la USAL: tipografías oficiales, proporciones del escudo histórico, código de colores institucionales y directrices de citación académica.",
      "Detalla el régimen jurídico y administrativo aplicable a la Convocatoria de contratación laboral para personal de apoyo a la investigación (Referencia 2026/R055/01): baremos de méritos, fases de valoración curricular y entrevista, custodia confidencial de pruebas psicométricas y cumplimiento estricto del Reglamento General de Protección de Datos (RGPD) en las investigaciones con menores de edad en centros educativos públicos de Castilla y León."
    ],
    keyQuotes: [
      "«La identidad visual de la Universidad de Salamanca es testimonio de ocho siglos de rigor académico: su presencia en el portal confiere autoridad científica e inspira certidumbre en los claustros escolares».",
      "«El respeto escrupuloso a los protocolos del Comité de Ética de la Investigación de la USAL es condición indispensable para la validez de los datos obtenidos en las intervenciones escolares»."
    ],
    practicalDirectives: [
      "Verificar que todos los materiales y páginas exhiban el identificador oficial USAL y los datos del proyecto DUA-DIG.",
      "Custodiar las transcripciones de entrevistas a docentes bajo claves alfanuméricas anonimizadas.",
      "Cumplimentar los anexos de consentimiento informado en todos los centros escolares participantes."
    ],
    targetDeliverables: [
      "Manual de identidad gráfica y normas de citación para recursos DUA-DIG.",
      "Modelos de consentimiento informado aprobados por el Comité de Ética.",
      "Expediente administrativo de la Convocatoria 2026/R055/01."
    ]
  },
  {
    fileName: "DUA_DIG_Protocolo_Evaluación_Formativa.docx",
    sourceDocId: "doc-12",
    topicCategory: "Evaluación Formativa y Métricas DUA",
    sectionMapped: "Capítulo 13 · Protocolo de Evaluación Formativa",
    relatedTab: "dossier",
    keyContributions: "Marco de evaluación continua sin penalización de formato, cuaderno de observación no punitivo y escalas de progreso observable.",
    fullTextDigest: [
      "El documento formaliza el protocolo pedagógico para evaluar los aprendizajes escolares bajo el marco DUA, desterrando el modelo tradicional de examen único memorístico en soporte papel. Establece que la evaluación formativa inclusiva no califica al estudiante por su habilidad con el lápiz o su velocidad de lectura, sino por la comprensión observable de los constructos curriculares.",
      "Desarrolla el 'Cuaderno de Observación No Punitivo', un instrumento estructurado en tres hitos: 1) Captura del momento de enganche inicial; 2) Registro del proceso y los andamiajes utilizados; 3) Evidencia de transferencia autónoma sin ayudas externas. Incorpora escalas cualitativas de progreso (Emergente, En desarrollo, Autónomo, Transferente) en sustitución de calificaciones numéricas aisladas.",
      "Establece el protocolo de triangulación evaluativa: autoevaluación guiada por pictogramas para Infantil y primer ciclo de Primaria; coevaluación constructiva entre parejas mediante rúbricas visuales graduadas; y heteroevaluación docente con registro sistemático de las barreras del entorno que interfirieron en la prueba."
    ],
    keyQuotes: [
      "«Si un instrumento evaluativo penaliza la dislexia cuando lo que se pretende medir es la competencia en ciberseguridad, no estamos midiendo competencia: estamos midiendo discapacidad».",
      "«La evaluación formativa no es un veredicto judicial al final del camino: es el retrovisor pedagógico que permite al maestro reorientar la marcha a tiempo»."
    ],
    practicalDirectives: [
      "Distribuir la plantilla del Cuaderno de Observación No Punitivo en formato editable e imprimible.",
      "Permitir siempre un mínimo de dos modalidades de respuesta en cualquier prueba evaluable (oral/escrita/esquemática).",
      "Dedicar los primeros 5 minutos de la sesión a clarificar los criterios de éxito con la rúbrica visual desplegada."
    ],
    targetDeliverables: [
      "Plantilla del Cuaderno de Observación No Punitivo.",
      "Escala cualitativa de progreso de 4 niveles.",
      "Rúbrica visual de autoevaluación para Primaria."
    ]
  },
  {
    fileName: "DUA_DIG_Hoja_Ruta_Transferencia_Pedagógica.docx",
    sourceDocId: "doc-13",
    topicCategory: "Transferencia Universitaria y Centros Educativos",
    sectionMapped: "Capítulo 14 · Hoja de Ruta de Transferencia",
    relatedTab: "dossier",
    keyContributions: "Plan de transferencia a centros escolares en 4 fases, articulación con la red de CFIE y extensión a familias.",
    fullTextDigest: [
      "Este documento estratégico establece la hoja de ruta para la transferencia real, escalable y sostenible de los resultados y recursos del Proyecto DUA-DIG desde la Universidad de Salamanca hacia el sistema educativo no universitario.",
      "Estructura el despliegue en 4 fases operativas: Fase I (Diagnóstico y sensibilización en centros piloto); Fase II (Co-diseño de unidades didácticas y adaptación de materiales con los equipos de ciclo); Fase III (Pilotaje en aulas reales con medición pre-post mediante ECODIES y observación); Fase IV (Institucionalización y consolidación de buenas prácticas en abierto).",
      "Articula la colaboración formal con la red de Centros de Formación del Profesorado e Innovación Educativa (CFIE) de Castilla y León para homologar itinerarios de formación continua. Además, contempla un módulo de transferencia hacia las familias centrado en la mediación parental positiva y la creación de hábitos digitales saludables en el hogar."
    ],
    keyQuotes: [
      "«La transferencia universitaria fracasa cuando se reduce a depositar PDFs en una web institucional: se requiere acompañamiento situado en los colegios y validación con los claustros».",
      "«La alianza con los CFIE es el puente estructural que garantiza que los recursos DUA-DIG no dependan de una subvención puntual, sino que pasen a formar parte del patrimonio didáctico de la comunidad autónoma»."
    ],
    practicalDirectives: [
      "Presentar el plan de transferencia a la Dirección General de Innovación y Formación del Profesorado.",
      "Crear el 'Sello de Centro Comprometido con el DUA Digital' con criterios objetivos de autoevaluación.",
      "Organizar jornadas de transferencia semestrales en la Facultad de Educación de la USAL con muestra de evidencias de aula."
    ],
    targetDeliverables: [
      "Cronograma operativo de transferencia a 3 años.",
      "Convenio marco de colaboración con la red de CFIE.",
      "Guía de mediación y seguridad digital para familias."
    ]
  }
];


export interface PortalStructureComparison {
  structureType: "Estructura A: Taxonómica Curricular" | "Estructura B: Flujo Operativo Docente";
  philosophicalBasis: string;
  primaryNavigation: string[];
  strengths: string[];
  risksAvoided: string;
  recommendedRole: string;
}

export const PORTAL_STRUCTURES: PortalStructureComparison[] = [
  {
    structureType: "Estructura A: Taxonómica Curricular",
    philosophicalBasis: "Organización académica clásica basada en niveles educativos oficiales (LOMLOE) y áreas disciplinares tradicionales.",
    primaryNavigation: [
      "Educación Infantil (3-6 años)",
      "Educación Primaria (1.º a 6.º)",
      "Áreas Curriculares (Lengua, Matemáticas, Ciencias, Digital)",
      "Formatos de Recurso (13 tipos)",
      "Repositorio Institucional"
    ],
    strengths: [
      "Familiar para equipos directivos e inspectores educativos.",
      "Alineación unívoca con programaciones didácticas curriculares oficiales.",
      "Facilidad para indexar metadatos estándar LOM-ES."
    ],
    risksAvoided: "Evita la sensación de desorden en búsquedas por asignatura específica.",
    recommendedRole: "Modo secundario de consulta curricular y archivo histórico.",
  },
  {
    structureType: "Estructura B: Flujo Operativo Docente",
    philosophicalBasis: "Arquitectura centrada en la resolución de problemas reales de aula y en la economía de tiempo del profesorado (TALIS 2024).",
    primaryNavigation: [
      "¿Qué necesitas preparar hoy? (Módulo de inicio)",
      "1. Encontrar una actividad nueva",
      "2. Adaptar un material que ya utilizo (Bloque 6)",
      "3. Flexibilizar vías de respuesta y evaluación (Bloque 5 y 7)",
      "Integración en Aula Virtual (Moodle / EVA)"
    ],
    strengths: [
      "Reduce drásticamente el tiempo de decisión docente de 15 minutos a menos de 90 segundos.",
      "Centrado en barreras observables y no en etiquetas clínicas de alumnos.",
      "Conexión directa entre la ficha y el plan de aula imprimible."
    ],
    risksAvoided: "Elimina la desorientación provocada por catálogos abstractos de 13 formatos inconexos.",
    recommendedRole: "Estructura principal recomendada y activa por defecto en DUA-DIG.",
  },
];

export interface NewThematicArea {
  id: string;
  title: string;
  targetAudience: string;
  description: string;
  keyComponents: string[];
  practicalDeliverables: string[];
}

export const NEW_THEMATIC_AREAS: NewThematicArea[] = [
  {
    id: "area-moodle",
    title: "Área 1: Integración en Aulas Virtuales y Moodle (EVA)",
    targetAudience: "Profesorado que utiliza plataformas de centros (Educacyl Moodle, Classroom, Campus Virtual USAL)",
    description: "Espacio especializado para descargar paquetes de actividades listos para incrustar en Moodle con diseño DUA nativo, sin requerir conocimientos de programación web.",
    keyComponents: [
      "Paquetes de actividades interactivas en formato H5P y SCORM 1.2 / 2004 con seguimiento de progreso sin penalización.",
      "Plantillas de curso Moodle configuradas con tipografía accesible, contrastes 4.5:1 y bloques simplificados.",
      "Guías de configuración de 'Restricciones de acceso' inclusivas y tareas con entrega multimodal."
    ],
    practicalDeliverables: [
      "Cursos Moodle modelo (.mbz) restaurables en 1 clic.",
      "Banco de actividades H5P (.h5p) descargables.",
      "Rúbricas DUA importables para el libro de calificaciones de Moodle."
    ],
  },
  {
    id: "area-multimodal",
    title: "Área 2: Laboratorio de Recursos Multimodales y Herramientas de Autor",
    targetAudience: "Docentes creadores de contenido educativo y coordinadores de innovación digital (Codice TIC)",
    description: "Evaluación rigurosa de herramientas digitales de autor (Genially, Canva, Scratch, Book Creator, etc.) bajo criterios estrictos de accesibilidad DUA, soberanía de datos y privacidad de menores.",
    keyComponents: [
      "Semáforo de accesibilidad de herramientas de autor populares.",
      "Pautas para subtitular y transcribir podcasts y vídeos escolares sin herramientas de pago.",
      "Plantillas accesibles prediseñadas en software libre (LibreOffice, Canva for Education verificado, Scratch)."
    ],
    practicalDeliverables: [
      "Matriz comparativa de 8 herramientas de autor con criterios WCAG 2.2.",
      "Checklist de publicación de REA accesibles.",
      "Guía de cumplimiento RGPD en uso de software con menores."
    ],
  },
  {
    id: "area-evidencias",
    title: "Área 3: Banco de Evidencias e Intervenciones Escolares",
    targetAudience: "Investigadores, directores de centro y docentes participantes en proyectos de innovación",
    description: "Repositorio de transferencia científica con datos anonimizados de las intervenciones del Proyecto DUA-DIG en centros de Castilla y León, informes psicométricos y buenas prácticas documentadas.",
    keyComponents: [
      "Informes de pilotaje de recursos (GiraTIC, Identidad Digital, etc.) con muestras N verificadas.",
      "Estudios pre-post con la escala ECODIES de competencia y seguridad digital infantil.",
      "Vídeos testimoniales y transcripciones de entrevistas a docentes de centros públicos y concertados."
    ],
    practicalDeliverables: [
      "Fichas de impacto empírico descargables.",
      "Instrumentos psicométricos validados para uso por otros centros.",
      "Monografías de transferencia científica EduDIG."
    ],
  },
];

export interface MoodleGuideline {
  stepNumber: string;
  title: string;
  moodleSetting: string;
  pedagogicalRationale: string;
  duaPrinciple: "Representación" | "Acción y Expresión" | "Implicación";
}

export const MOODLE_DUA_GUIDELINES: MoodleGuideline[] = [
  {
    stepNumber: "01",
    title: "Entrega Multimodal de Tareas",
    moodleSetting: "En Configuración de Tarea > Tipos de entrega: Activar simultáneamente 'Texto en línea' y 'Archivos enviados', permitiendo formatos de audio (.mp3, .ogg) y documentos.",
    pedagogicalRationale: "Permite al estudiante demostrar su razonamiento mediante la voz grabada o un esquema sin que la dificultad motriz o caligráfica bloquee la evaluación del objetivo conceptual.",
    duaPrinciple: "Acción y Expresión",
  },
  {
    stepNumber: "02",
    title: "Contenido Duplicado Accesible (Audio + Texto)",
    moodleSetting: "En Recursos > Archivo / Página: Adjuntar el reproductor de audio integrado de Moodle junto al texto escrito, o incrustar actividad H5P con transcripción desplegable.",
    pedagogicalRationale: "Garantiza que el alumnado con dificultades de decodificación lectora o fatiga visual acceda al contenido esencial en igualdad de condiciones.",
    duaPrinciple: "Representación",
  },
  {
    stepNumber: "03",
    title: "Restricciones de Acceso No Punitivas",
    moodleSetting: "En Restricciones de acceso: Usar la condición 'Calificación' o 'Finalización de actividad' únicamente para desbloquear andamiajes de apoyo desvanecibles, jamás para bloquear el avance del curso completo.",
    pedagogicalRationale: "Previene la frustración y el abandono derivados de quedar 'atrapado' en una actividad bloqueante de la plataforma virtual.",
    duaPrinciple: "Implicación",
  },
  {
    stepNumber: "04",
    title: "Rúbricas Cualitativas en el Calificador",
    moodleSetting: "En Calificación > Método de calificación: Seleccionar 'Rúbrica' con descriptores basados en objetivos observables, sin penalizar errores mecánicos secundarios.",
    pedagogicalRationale: "Aporta retroalimentación formativa inmediata y orientaciones claras para la autorregulación del estudiante.",
    duaPrinciple: "Acción y Expresión",
  },
  {
    stepNumber: "05",
    title: "Ajuste Temporal Universal",
    moodleSetting: "En Configuración de Cuestionarios > Tiempo límite: No fijar límites de tiempo angustiosos por defecto; o configurar 'Excepciones de usuario' para ampliar tiempos sin estigmatizar.",
    pedagogicalRationale: "Disminuye la ansiedad evaluativa y permite procesar los enunciados al ritmo que demandan las funciones ejecutivas del estudiante.",
    duaPrinciple: "Implicación",
  },
];

export interface DigitalToolDuaEvaluation {
  id: string;
  toolName: string;
  category: string;
  rgpdSchoolRating: "Excelente (Sin registro)" | "Aceptable con cuenta centro" | "Precaución (Datos personales)";
  keyboardAccessibility: "100% Accesible" | "Parcial (Requiere ratón)" | "No accesible";
  duaModalitySupport: string;
  distractionLevel: "Bajo (Enfocado)" | "Medio" | "Alto (Detalles seductores)";
  recommendedClassroomUse: string;
}

export const DIGITAL_TOOLS_EVALUATION: DigitalToolDuaEvaluation[] = [
  {
    id: "tool-h5p",
    toolName: "H5P (Integrado en Moodle / WordPress)",
    category: "Actividades Interactivas Libres",
    rgpdSchoolRating: "Excelente (Sin registro)",
    keyboardAccessibility: "100% Accesible",
    duaModalitySupport: "Vídeo interactivo con subtítulos, audios sincronizados, cuestionarios adaptables.",
    distractionLevel: "Bajo (Enfocado)",
    recommendedClassroomUse: "Estándar de oro para el proyecto DUA-DIG por ser de código abierto, accesible y sin cookies invasivas.",
  },
  {
    id: "tool-genially",
    toolName: "Genially (Versión Educativa)",
    category: "Presentaciones e Infografías",
    rgpdSchoolRating: "Aceptable con cuenta centro",
    keyboardAccessibility: "Parcial (Requiere ratón)",
    duaModalitySupport: "Capas interactivas, ventanas emergentes, audio embebido.",
    distractionLevel: "Alto (Detalles seductores)",
    recommendedClassroomUse: "Usar con moderación desactivando animaciones excesivas que sobrecarguen la memoria de trabajo.",
  },
  {
    id: "tool-canva",
    toolName: "Canva for Education",
    category: "Diseño Gráfico y Pósters",
    rgpdSchoolRating: "Aceptable con cuenta centro",
    keyboardAccessibility: "Parcial (Requiere ratón)",
    duaModalitySupport: "Múltiples formatos visuales, mapas conceptuales, exportación PDF accesible.",
    distractionLevel: "Medio",
    recommendedClassroomUse: "Recomendado para docentes preparando cartelería e infografías estáticas de alto contraste.",
  },
  {
    id: "tool-scratch",
    toolName: "Scratch (MIT)",
    category: "Programación y Expresión Creativa",
    rgpdSchoolRating: "Excelente (Sin registro)",
    keyboardAccessibility: "100% Accesible",
    duaModalitySupport: "Expresión multimodal: sonido, animación, narrativa gráfica y lógica computacional.",
    distractionLevel: "Bajo (Enfocado)",
    recommendedClassroomUse: "Idóneo para modalidades de respuesta DUA alternativas en pensamiento computacional sin pantallas invasivas.",
  },
  {
    id: "tool-book-creator",
    toolName: "Book Creator",
    category: "Libros Digitales Accesibles",
    rgpdSchoolRating: "Excelente (Sin registro)",
    keyboardAccessibility: "100% Accesible",
    duaModalitySupport: "Texto con lectura en voz alta automática, grabación de voz de los alumnos, subtítulos y dibujos.",
    distractionLevel: "Bajo (Enfocado)",
    recommendedClassroomUse: "Herramienta altamente recomendada para la creación de cuentos accesibles en Infantil y 1.º-2.º de Primaria.",
  },
  {
    id: "tool-edpuzzle",
    toolName: "Edpuzzle",
    category: "Vídeo Lección Interactiva",
    rgpdSchoolRating: "Aceptable con cuenta centro",
    keyboardAccessibility: "100% Accesible",
    duaModalitySupport: "Pausa en vídeo con preguntas de audio o texto, notas de voz explicativas del docente.",
    distractionLevel: "Bajo (Enfocado)",
    recommendedClassroomUse: "Excelente para el Módulo de Identidad Digital: permite incrustar paradas de reflexión socrática.",
  },
  {
    id: "tool-padlet",
    toolName: "Padlet",
    category: "Mural Colaborativo",
    rgpdSchoolRating: "Aceptable con cuenta centro",
    keyboardAccessibility: "100% Accesible",
    duaModalitySupport: "Publicación de notas escritas, audios, fotos, enlaces y dibujos en un solo panel mural.",
    distractionLevel: "Medio",
    recommendedClassroomUse: "Óptimo para asambleas escolares y la dinámicas de participación ciudadana.",
  },
  {
    id: "tool-kahoot",
    toolName: "Kahoot / Quizizz",
    category: "Cuestionarios Gamificados",
    rgpdSchoolRating: "Precaución (Datos personales)",
    keyboardAccessibility: "Parcial (Requiere ratón)",
    duaModalitySupport: "Preguntas de respuesta rápida con música y puntuación competitiva.",
    distractionLevel: "Alto (Detalles seductores)",
    recommendedClassroomUse: "Desaconsejado en modelo competitivo por elevar ansiedad y contradecir el principio DUA de compromiso intrínseco.",
  },
];

export interface ScientificPaper {
  id: string;
  title: string;
  englishTitle?: string;
  authors: string[];
  year: number;
  journal: string;
  doi?: string;
  issn?: string;
  researchAxis: "Competencia Digital y Evaluación" | "Metodologías Activas y DUA" | "Inteligencia Artificial y Educación" | "Formación Docente y Neuroeducación";
  sectionMapped: string;
  sampleAndMethods: string;
  keyContributions: string;
  link?: string;
}

export const SCIENTIFIC_PAPERS_CORPUS: ScientificPaper[] = [
  {
    id: "paper-ecodies-2020",
    title: "Análisis psicométrico de una prueba para evaluar la competencia digital de estudiantes de Educación Obligatoria (ECODIES)",
    englishTitle: "A test's psychometric analysis to assess the digital competence of compulsory education students",
    authors: ["Sonia Casillas-Martín", "Marcos Cabezas-González", "Ana García-Valcárcel Muñoz-Repiso"],
    year: 2020,
    journal: "RELIEVE. Revista Electrónica de Investigación y Evaluación Educativa, 26(2), art. 2",
    doi: "10.7203/relieve.26.2.17611",
    issn: "1134-4032",
    researchAxis: "Competencia Digital y Evaluación",
    sectionMapped: "Capítulo 02 & 09 · Evidencia Empírica y SPSS",
    sampleAndMethods: "Muestra de 771 estudiantes (12-14 años) de 23 centros de Castilla y León. SPSS v24, Corrector 1.2, alfa ordinal y Theta de Armor sobre matriz tetracórica.",
    keyContributions: "Validación del instrumento objetivo ECODIES (78 ítems conocimiento-capacidad y 30 actitud). Demuestra fiabilidad excelente (α ordinal = 0.929) y confirma bidimensionalidad (conocimiento-capacidad vs. actitud). Supera el sesgo del autoinforme subjetivo mediante resolución situada de problemas.",
    link: "https://gredos.usal.es/handle/10366/139397"
  },
  {
    id: "paper-incodies-2020",
    title: "Validation of an Indicator Model (INCODIES) for Assessing Student Digital Competence in Basic Education",
    englishTitle: "Validation of an Indicator Model (INCODIES) for Assessing Student Digital Competence in Basic Education",
    authors: ["Ana García-Valcárcel Muñoz-Repiso", "Sonia Casillas Martín", "Verónica Basilotta Gómez-Pablos"],
    year: 2020,
    journal: "Journal of New Approaches in Educational Research (NAER), 9(1), 110-125",
    doi: "10.7821/naer.2020.1.459",
    issn: "2254-7339",
    researchAxis: "Competencia Digital y Evaluación",
    sectionMapped: "Capítulo 02 & 04 · Indicadores DigComp",
    sampleAndMethods: "Panel de 77 expertos (jueces universitarios y docentes en activo). Cuantificación mediante Content Validity Ratio (CVR' de Lawshe-Tristán) y CVI global.",
    keyContributions: "Validación de 325 indicadores de competencia digital articulados en las 5 áreas de DigComp (Información, Comunicación, Creación de contenidos, Seguridad y Resolución de problemas). Índice global de validez de contenido CVI' = 0.925.",
    link: "https://gredos.usal.es/handle/10366/139409"
  },
  {
    id: "paper-apps-moviles-2025",
    title: "Uso de aplicaciones móviles en contextos educativos de infantil y primaria",
    englishTitle: "Use of mobile applications in educational contexts in preschool and primary school",
    authors: ["Verónica Basilotta-Gómez-Pablos", "Sonia Casillas-Martín", "Marcos Cabezas-González", "Ana García-Valcárcel Muñoz-Repiso"],
    year: 2025,
    journal: "RED. Revista de Educación a Distancia, 25(81), art. 2",
    doi: "10.6018/red.620841",
    issn: "1578-7680",
    researchAxis: "Metodologías Activas y DUA",
    sectionMapped: "Capítulo 04 & 12 · Catálogo de Recursos y Fichas",
    sampleAndMethods: "Muestra mixta: cuestionario a 182 profesores en formación (SPSS v23 y NVivo 11) y estudio de caso con escolares de 3 y 6 años en dos turnos de 15 minutos.",
    keyContributions: "Selección rigurosa de 51 aplicaciones educativas de 188 analizadas (Kokoro Kids, Khan Academy Kids, ScratchJr, Bmath). Identifica que el 82.4% tiene función interactiva y que el 88.5% son útiles en el ámbito escolar y extraescolar sin publicidad.",
    link: "http://dx.doi.org/10.6018/red.620841"
  },
  {
    id: "paper-station-rotation-2025",
    title: "A systematic review of the effectiveness of the Station Rotation Model in blended learning",
    englishTitle: "Una revisión sistemática de la eficacia del Modelo de Rotación de Estaciones en el aprendizaje mixto",
    authors: ["Vasiliki Anagnostopoulou", "Ana García-Valcárcel Muñoz-Repiso", "Sonia Casillas-Martín"],
    year: 2025,
    journal: "Bordón. Revista de Pedagogía, 77(4), 11-33",
    doi: "10.13042/Bordon.2025.110138",
    issn: "0210-5934",
    researchAxis: "Metodologías Activas y DUA",
    sectionMapped: "Capítulo 05 & 14 · Capa Pedagógica y Transferencia",
    sampleAndMethods: "Revisión sistemática bajo directrices PRISMA 2020 de 30 estudios internacionales (Scopus, WoS, ERIC). Análisis de contenido con acuerdo intercodificador.",
    keyContributions: "Demuestra cómo el Modelo de Rotación por Estaciones (SRM) articula las pautas DUA (múltiples formas de representación, implicación y acción) en entornos de aprendizaje mixto presenciales y virtuales, reduciendo la ansiedad y promoviendo el pensamiento crítico.",
    link: "https://doi.org/10.13042/Bordon.2025.110138"
  },
  {
    id: "paper-ia-leeds-2026",
    title: "Aprender a buscar con IA: validación psicométrica de una prueba de competencia digital en el ámbito universitario",
    englishTitle: "Learning to search with AI: psychometric evaluation of a digital competence test in the university context",
    authors: ["Sonia Casillas-Martín", "Antonio Martínez-Arboleda", "Marcos Cabezas-González", "Ana García-Valcárcel Muñoz-Repiso"],
    year: 2026,
    journal: "Revista Interuniversitaria de Formación del Profesorado (RIFOP), 40(1), 43-57",
    doi: "10.618/rifop.699241",
    issn: "0213-8646",
    researchAxis: "Inteligencia Artificial y Educación",
    sectionMapped: "Capítulo 07 & 12 · MCR y Búsqueda con IA",
    sampleAndMethods: "Muestra de 52 estudiantes de la Universidad de Leeds (Reino Unido). Plataforma MINERVA, SPSS v28, Análisis de Componentes Principales y Kaiser-Meyer-Olkin.",
    keyContributions: "Validación psicométrica de una prueba objetiva de 15 ítems basada en DigComp 2.2 para evaluar la búsqueda y gestión crítica de información con IA generativa. Los 4 primeros componentes explican el 55.37% de la varianza total. Alerta sobre la atrofia del juicio crítico si no existe mediación docente.",
    link: "https://doi.org/10.618/rifop.699241"
  },
  {
    id: "paper-ia-lenguas-2026",
    title: "Usos positivos y disruptivos de la IA en la enseñanza de lenguas: Docentes en una encrucijada",
    englishTitle: "Positive and disruptive uses of AI in language teaching: Teachers at a crossroads",
    authors: ["Ana García-Valcárcel Muñoz-Repiso", "Antonio Martínez Arboleda", "Sonia Casillas Martín", "Marcos Cabezas González"],
    year: 2026,
    journal: "RIED-Revista Iberoamericana de Educación a Distancia, 29(2), 393-413",
    doi: "10.5944/ried.46964",
    issn: "1390-3306",
    researchAxis: "Inteligencia Artificial y Educación",
    sectionMapped: "Capítulo 07 & 13 · Evaluación Formativa con IA",
    sampleAndMethods: "Estudio cualitativo con 8 docentes universitarios del Departamento de Languages, Cultures and Societies de la Universidad de Leeds. Análisis hermenéutico y teoría fundamentada con Google NotebookLM y validación interjueces (Kappa > 0.7).",
    keyContributions: "Analiza el carácter ambivalente de la IA: aceleración en la creación de recursos y retroalimentación personalizada frente a riesgos de 'deuda cognitiva', dependencia y superficialidad en el alumnado. Propone el sistema de 'banderitas de semáforo' para regular el uso ético y no punitivo de la IA.",
    link: "https://doi.org/10.5944/ried.46964"
  },
  {
    id: "paper-relatec-25anios-2026",
    title: "¿Son los estudiantes competentes digitales? Avances, desajustes y retos de futuro",
    englishTitle: "Are students digitally literate? Progress, shortcomings and future challenges",
    authors: ["Ana García-Valcárcel Muñoz-Repiso", "Marcos Cabezas-González", "Sonia Casillas-Martín", "Verónica Basilotta-Gómez-Pablos"],
    year: 2026,
    journal: "RELATEC. Revista Latinoamericana de Tecnología Educativa, 25(2), 103-121",
    doi: "10.17398/1695-288X.25.2.103",
    issn: "1695-288X",
    researchAxis: "Competencia Digital y Evaluación",
    sectionMapped: "Capítulo 02 · Fundamentación y Barreras Docentes",
    sampleAndMethods: "Revisión documental sistemática de 76 publicaciones de alto impacto (2000-2026) en WOS, Scopus, Dialnet e InDICEs-CSIC en el ámbito iberoamericano.",
    keyContributions: "Desmitificación definitiva del 'nativo digital'. Demuestra la existencia de una brecha profunda entre las habilidades digitales para el ocio y la competencia académica/crítica. Destaca que la evaluación no debe basarse en la autopercepción sino en desempeños reales observables.",
    link: "https://doi.org/10.17398/1695-288X.25.2.103"
  },
  {
    id: "paper-sociofamiliar-pixelbit-2022",
    title: "Influencia de variables sociofamiliares en la competencia digital en comunicación y colaboración",
    englishTitle: "Influence of socio-familial variables on digital competence in communication and collaboration",
    authors: ["Sonia Casillas-Martín", "Marcos Cabezas-González", "Ana García-Valcárcel Muñoz-Repiso"],
    year: 2022,
    journal: "Pixel-Bit. Revista de Medios y Educación, 63, 7-33",
    doi: "10.12795/pixelbit.84595",
    issn: "1133-8482",
    researchAxis: "Competencia Digital y Evaluación",
    sectionMapped: "Capítulo 02 & 09 · Evidencia Empírica y Tareas USAL",
    sampleAndMethods: "Muestra de 807 estudiantes de Primaria y Secundaria (Castilla y León). SPSS v25, ANOVA y t de Student, comparando nivel socioeconómico y disponibilidad de dispositivos.",
    keyContributions: "Demuestra que la competencia digital en comunicación y colaboración no depende del género (p = 0.11), pero sí está fuertemente determinada por el nivel socioeconómico-cultural familiar (F = 4.51, p < 0.001) y el acceso a dispositivos en el hogar.",
    link: "https://doi.org/10.12795/pixelbit.84595"
  },
  {
    id: "paper-neuromitos-2024",
    title: "La falsa Neuroeducación: descubriendo mitos en la formación inicial de los educadores",
    englishTitle: "The false Neuroeducation: Uncovering myths in the Initial training of educators",
    authors: ["Sonia Casillas-Martín", "Marcos Cabezas-González"],
    year: 2024,
    journal: "Revista Electrónica Interuniversitaria de Formación del Profesorado (REIFOP), 27(3), 19-34",
    doi: "10.6018/reifop.614351",
    issn: "1575-0965",
    researchAxis: "Formación Docente y Neuroeducación",
    sectionMapped: "Capítulo 07 · Neurodivergencia sin Estereotipos",
    sampleAndMethods: "Muestra de 172 estudiantes de Educación de la Universidad de Salamanca (Pedagogía, Primaria, Social, Infantil). Escala ALFANED (45 ítems), SPSS v28, ANOVA y d de Cohen.",
    keyContributions: "Evidencia la preocupante prevalencia de neuromitos pedagógicos (estilos de aprendizaje VAK, dominancia de hemisferios) en futuros docentes. Demuestra que la titulación y el curso predicen la identificación de mitos (Pedagogía identifica significativamente más que Infantil, p < 0.001).",
    link: "https://doi.org/10.6018/reifop.614351"
  },
  {
    id: "paper-digicraft-2020",
    title: "DigiCraft: A Pedagogical Innovative Proposal for the Development of the Digital Competence in Vulnerable Children",
    englishTitle: "DigiCraft: A Pedagogical Innovative Proposal for the Development of the Digital Competence in Vulnerable Children",
    authors: ["Sonia Casillas-Martín", "Marcos Cabezas-González", "Ana García-Valcárcel Muñoz-Repiso"],
    year: 2020,
    journal: "Sustainability, 12(23), 9865",
    doi: "10.3390/su12239865",
    issn: "2071-1050",
    researchAxis: "Metodologías Activas y DUA",
    sectionMapped: "Capítulo 05 & 14 · Capa Pedagógica y Transferencia",
    sampleAndMethods: "Diseño basado en la investigación (DBR) en colaboración con Fundación Vodafone, Cruz Roja y Save the Children (1.384 niños y 175 educadores en 7 provincias).",
    keyContributions: "Fundamentación de la metodología 'crafty' (combinación de material analógico manipulativo y dispositivos digitales) para desarrollar las 5 áreas de DigComp en infancia vulnerable, garantizando accesibilidad y equidad sin discriminación socioeconómica.",
    link: "https://doi.org/10.3390/su12239865"
  },
  {
    id: "paper-digicraft-qualitative-2024",
    title: "Evaluating DigiCraft for the development of digital competence: A qualitative Approach",
    englishTitle: "Evaluating DigiCraft for the development of digital competence: A qualitative Approach",
    authors: ["Marcos Cabezas-González", "Sonia Casillas-Martín", "Ana García-Valcárcel Muñoz-Repiso"],
    year: 2024,
    journal: "Journal of Social Studies Education Research (JSSER), 15(2), 231-250",
    issn: "1309-9108",
    researchAxis: "Metodologías Activas y DUA",
    sectionMapped: "Capítulo 09 & 14 · Análisis NVivo e Intervenciones",
    sampleAndMethods: "Estudio cualitativo experimental en 16 centros de Galicia, Andalucía y Madrid (40 docentes y 68 escolares). Entrevistas semiestructuradas y análisis de contenido con NVivo 14.",
    keyContributions: "Confirmación del éxito en el desarrollo de competencia digital, autonomía y reducción del absentismo escolar. Demuestra la validez del análisis de episodios en NVivo 14 y la triangulación de fuentes entre directivos, docentes y alumnado.",
    link: "https://www.jsser.org"
  },
  {
    id: "paper-abp-rie-2017",
    title: "Aprendizaje Basado en Proyectos (ABP): evaluación desde la perspectiva de alumnos de Educación Primaria",
    englishTitle: "Project based learning (PBL): Assessment from the Perspective of Primary Level Students",
    authors: ["Ana García-Valcárcel Muñoz-Repiso", "Verónica Basilotta Gómez-Pablos"],
    year: 2017,
    journal: "Revista de Investigación Educativa (RIE), 35(1), 113-131",
    doi: "10.6018/rie.35.1.246811",
    issn: "0212-4068",
    researchAxis: "Metodologías Activas y DUA",
    sectionMapped: "Capítulo 02 & 05 · Metodología Activa y Alumnos",
    sampleAndMethods: "Muestra de 364 alumnos de 5º y 6º de Primaria de 5 centros de Castilla y León. Escala de diferencial semántico de 20 ítems, SPSS v19, fiabilidad alfa = 0.912.",
    keyContributions: "Evaluación de 9 proyectos de ABP colaborativo con TIC ('Platero y nosotros', 'Asociasanos', 'Hermanamiento'). Destaca la alta valoración de la motivación (6.12/7) y la interacción-colaboración (6.15/7), demostrando que el apoyo directivo y la mediación docente estructurada son factores clave de éxito.",
    link: "http://dx.doi.org/10.6018/rie.35.1.246811"
  },
  {
    id: "paper-procoltic-2019",
    title: "Opinión del profesorado hacia proyectos colaborativos con Tecnologías de la Información y Comunicación: un estudio psicométrico",
    englishTitle: "Teachers' opinion on collaborative projects using Communication and Information Technologies: a psychometric study",
    authors: ["Verónica Basilotta Gómez-Pablos", "Ana García-Valcárcel Muñoz-Repiso"],
    year: 2019,
    journal: "Educação e Pesquisa, 45, e213768",
    doi: "10.1590/S1678-4634201945213768",
    issn: "1517-9702",
    researchAxis: "Formación Docente y Neuroeducación",
    sectionMapped: "Capítulo 02 & 09 · Sobrecarga Docente y Escalas",
    sampleAndMethods: "Muestra de 310 docentes de centros de toda España. Cuestionario PROCOLTIC de 42 ítems, validación por 18 jueces, SPSS Statistics 23.0, fiabilidad alfa = 0.923.",
    keyContributions: "Valida la escala PROCOLTIC en 6 dimensiones. Pone de manifiesto las dos grandes barreras docentes: la falta de tiempo para planificar y coordinar (65%) y las limitaciones de infraestructura y conectividad en los centros (52.5%), sustentando la necesidad de portadas orientadas a tareas y fichas de aula normalizadas.",
    link: "http://dx.doi.org/10.1590/S1678-4634201945213768"
  },
  {
    id: "paper-formadig-2025",
    title: "Eficacia del microaprendizaje para el desarrollo de competencias digitales docentes. Un estudio pretest-postest",
    englishTitle: "Effectiveness of Microlearning for the Development of Teachers' Digital Competencies: A Pretest-Posttest Study",
    authors: ["Verónica Basilotta-Gómez-Pablos", "José Luis Estévez-Méndez", "María Brígido-Mero", "Verónica Nistal-Anta"],
    year: 2025,
    journal: "Revista Electrónica Interuniversitaria de Formación del Profesorado (REIFOP), 28(2), 177-194",
    doi: "10.6018/reifop.633101",
    issn: "1575-0965",
    researchAxis: "Formación Docente y Neuroeducación",
    sectionMapped: "Capítulo 12 · Moodle y Microaprendizaje",
    sampleAndMethods: "Estudio cuasiexperimental con 161 docentes en formación (144 en pretest y 95 en postest). Aula virtual en Moodle con 5 módulos eXeLearning y píldoras en YouTube. SPSS v26 y prueba de Wilcoxon.",
    keyContributions: "Demuestra la eficacia del microaprendizaje para mejorar significativamente las 5 áreas de DigCompEdu (p < 0.01), con ganancias destacadas en Creación de contenidos (+0.78) y Alfabetización informacional (+0.73). Instrumento validado con fiabilidad alfa = 0.949.",
    link: "https://doi.org/10.6018/reifop.633101"
  },
  {
    id: "paper-gamificacion-utn-2025",
    title: "Impacto de la gamificación en el rendimiento académico en la Universidad Técnica del Norte (Ecuador)",
    englishTitle: "Impact of gamification on academic performance at the Universidad Técnica del Norte (Ecuador)",
    authors: ["Lorena Jaramillo-Mediavilla", "Andrea Basantes-Andrade", "Sonia Casillas-Martín", "Marcos Cabezas-González"],
    year: 2025,
    journal: "Formación Universitaria, 18(3), 35-46",
    doi: "10.4067/S0718-50062025000300035",
    issn: "0718-5006",
    researchAxis: "Metodologías Activas y DUA",
    sectionMapped: "Capítulo 05 & 12 · Gamificación Crítica",
    sampleAndMethods: "Diseño cuasiexperimental con 215 estudiantes universitarios de 7 carreras de Educación (87 control vs 128 experimental). ANOVA (DCA), prueba post-hoc de Tukey y Genially/Nearpod/Educaplay.",
    keyContributions: "Evidencia empírica de una mejora significativa de 0.66 puntos en rendimiento académico del grupo experimental gamificado. Destaca que la gamificación funciona como amplificador del aprendizaje cuando existe un diseño tecnopedagógico estructurado, advirtiendo contra dinámicas meramente superficiales.",
    link: "http://dx.doi.org/10.4067/S0718-50062025000300035"
  },
  {
    id: "paper-gamificacion-retos-2025",
    title: "Gamificación en la enseñanza universitaria: retos didácticos y tecnológicos",
    englishTitle: "Gamification in university teaching: didactic and technological challenges",
    authors: ["Lorena Jaramillo Mediavilla", "Andrea Basantes-Andrade", "Sonia Casillas-Martín", "Marcos Cabezas-González"],
    year: 2025,
    journal: "EDUTEC. Revista Electrónica de Tecnología Educativa, 91, 167-184",
    doi: "10.21556/edutec.2025.91.3695",
    issn: "1135-9250",
    researchAxis: "Metodologías Activas y DUA",
    sectionMapped: "Capítulo 05 & 12 · Retos Didácticos",
    sampleAndMethods: "Metodología mixta con 30 docentes y 150 estudiantes de la FECYT. Encuestas (alfa = 0.86), entrevistas semiestructuradas analizadas en Atlas.ti y observaciones de aula.",
    keyContributions: "Triangulación cuantitativa-cualitativa que revela que el 70% de los docentes identifica la falta de formación pedagógica y el 65% el tiempo de planificación como obstáculos centrales. Alerta sobre la fatiga digital (40%) y la necesidad de evitar la gamificación competitiva aislada.",
    link: "https://doi.org/10.21556/edutec.2025.91.3695"
  },
  {
    id: "paper-codieu-2017",
    title: "Validación de un instrumento para medir la competencia digital de estudiantes universitarios (CODIEU)",
    englishTitle: "Validation of an instrument to measure the digital competence of university students (CODIEU)",
    authors: ["Marcos Cabezas-González", "Sonia Casillas-Martín", "Manuela Ferreira", "Fernando Teixeira"],
    year: 2017,
    journal: "Revista de Estudios e Investigación en Psicología y Educación (REIPE), Vol. Extr. (13), A13-022",
    doi: "10.17979/reipe.2017.0.13.2180",
    issn: "2386-7418",
    researchAxis: "Competencia Digital y Evaluación",
    sectionMapped: "Capítulo 09 · Instrumentos Psicométricos USAL",
    sampleAndMethods: "Muestra de 656 estudiantes universitarios de la Universidad de Salamanca y la Universidad de Oporto. Cuestionario de 88 reactivos, SPSS v21, fiabilidad alfa = 0.91 y análisis factorial.",
    keyContributions: "Validación del constructo tridimensional (conocimientos TIC, manejo de herramientas y actitudes). La dimensión de conocimientos explica el 29.73% de la varianza total. Establece las bases métricas para los estudios posteriores del grupo EduDIG.",
    link: "https://doi.org/10.17979/reipe.2017.0.13.2180"
  },
  {
    id: "paper-preservice-sustainability-2021",
    title: "The Digital Competence of Pre-Service Educators: The Influence of Personal Variables",
    englishTitle: "The Digital Competence of Pre-Service Educators: The Influence of Personal Variables",
    authors: ["Marcos Cabezas-González", "Sonia Casillas-Martín", "Francisco José García-Peñalvo"],
    year: 2021,
    journal: "Sustainability, 13(4), 2318",
    doi: "10.3390/su13042318",
    issn: "2071-1050",
    researchAxis: "Formación Docente y Neuroeducación",
    sectionMapped: "Capítulo 02 & 09 · Variables Personales y Formación",
    sampleAndMethods: "Muestra de 370 estudiantes de Educación de la Universidad de Salamanca. Cuestionario de 87 descriptores, fiabilidad alfa = 0.91, pruebas no paramétricas (Mann-Whitney U, Kruskal-Wallis) y curvas ROC.",
    keyContributions: "Análisis inferencial mediante curvas ROC de la influencia de género, edad y titulación. Demuestra que las variables personales son influyentes pero no determinantes en la competencia digital, subrayando la primacía de la intervención tecnopedagógica estructurada.",
    link: "https://doi.org/10.3390/su13042318"
  }
];


