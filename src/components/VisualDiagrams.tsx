/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Diagramas Visuales e Infográficos para el Dossier Maestro DUA-DIG (USAL)
 * Fundamentación visual de:
 * 1. Matriz de Prioridades P1, P2 y P3 (Cuadrante de Decisión 2x2 e Infografía de Tiers)
 * 2. Convocatoria USAL 2026/R055/01 (Cadena Operativa de las 5 Tareas y Matriz de Competencias)
 * 3. Investigación MCR / KAIROS (Arquitectura Metodológica de 3 Capas y Bucle Relacional Enactivo)
 */

import React, { useState } from "react";
import { 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Filter, 
  Cpu, 
  Database, 
  FileSpreadsheet, 
  GraduationCap, 
  Users, 
  FileText, 
  Search, 
  Flame, 
  TrendingUp, 
  Compass, 
  RotateCw,
  Server,
  Lock,
  Eye,
  Check
} from "lucide-react";
import { PRIORITY_MATRIX } from "../data/dossierData";

/* ========================================================================= */
/* 1. DIAGRAMA VISUAL DE MATRIZ DE PRIORIDADES (P1, P2, P3)                   */
/* ========================================================================= */
export const PriorityMatrixVisualDiagram: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<"all" | "P1" | "P2" | "P3">("all");
  const [activeQuadrant, setActiveQuadrant] = useState<number | null>(null);

  const tierMeta = {
    P1: {
      title: "P1 · Prioridad Crítica Inmediata",
      subtitle: "Alto Impacto Docente · Riesgo Técnico Nulo / Muy Acotado",
      badge: "bg-stone-900 text-white",
      border: "border-stone-900",
      accent: "text-amber-900",
      bgLight: "bg-amber-50/40",
      rationale:
        "Intervenciones que eliminan barreras de acceso de primer orden (WCAG 2.2 AA) y sobrecarga cognitiva directa (TALIS: 42% estrés en preparación). Su fallo impide el uso del portal o vulnera normativas de accesibilidad legal (RD 1112/2018).",
      count: 6,
      items: [
        { id: 1, name: "WCAG 2.2 AA (Contraste 4.5:1, foco teclado 2px)", why: "Requisito legal bloqueante e inclusivo" },
        { id: 2, name: "Portada orientada a tareas docentes", why: "Resuelve el 63% de falta de tiempo del maestro" },
        { id: 3, name: "Ficha operativa normalizada (9 bloques)", why: "Estandariza recursos dispares sin desorientar" },
        { id: 4, name: "Clarificación de licencias CC BY-SA 4.0", why: "Solo el 14% de docentes comprende el licenciamiento REA" },
        { id: 5, name: "Módulo 'Cómo empezar' en 5 pasos", why: "Andamiaje inicial para docentes sin formación DUA previa" },
        { id: 7, name: "Verificador de enlaces e infografías huérfanas", why: "Evita enlaces rotos y frustración en el aula" },
      ]
    },
    P2: {
      title: "P2 · Prioridad Metodológica y Estructural",
      subtitle: "Alto Impacto Pedagógico · Esfuerzo de Adaptación Medio",
      badge: "bg-amber-700 text-white",
      border: "border-amber-700",
      accent: "text-amber-800",
      bgLight: "bg-amber-50/20",
      rationale:
        "Optimizaciones estructurales de navegación y compatibilidad con Entornos Virtuales de Aprendizaje (Educacyl / Moodle). Proporcionan herramientas de mediación formativa sin depender de cambios en bases de datos institucionales.",
      count: 3,
      items: [
        { id: 6, name: "Filtros facetados funcionales (anti-diagnósticos)", why: "Filtra por dotación técnica y canal sensorial, sin estigmas" },
        { id: 9, name: "Entrega multimodal en Moodle (Educacyl)", why: "Validez inclusiva: evalúa competencia, no canal de entrega" },
        { id: 10, name: "Cuaderno de Observación No Punitivo", why: "3 hitos de aula (enganche, andamiajes, transferencia)" },
      ]
    },
    P3: {
      title: "P3 · Prioridad de Transferencia y Expansión",
      subtitle: "Impacto Estratégico a Medio Plazo · Condicionada a Datos y Servidor",
      badge: "bg-stone-600 text-white",
      border: "border-stone-500",
      accent: "text-stone-700",
      bgLight: "bg-stone-50",
      rationale:
        "Ampliaciones de frontera pedagógica e investigación empírica. Exigen validación empírica previa, convenios territoriales con la red de CFIE y consultas bloqueantes resueltas por la dirección científica.",
      count: 1,
      items: [
        { id: 8, name: "Línea de investigación MCR / KAIROS y Laboratorio", why: "Condicionada a resolución de Q1-Q7 y validación en aula" }
      ]
    }
  };

  return (
    <div className="p-6 bg-white border border-stone-200 rounded-xl shadow-xs space-y-6">
      {/* Diagram Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-stone-200 pb-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-amber-900 font-semibold block">
            DIAGRAMA ESTRATÉGICO DE DECISIÓN
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
            Fundamentación Visual de Prioridades (P1, P2 y P3)
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Criterios de ponderación: Impacto pedagógico directo vs. Factibilidad técnica y riesgo de regresión.
          </p>
        </div>

        {/* Tier filter buttons */}
        <div className="flex items-center gap-1.5 text-xs">
          <button
            onClick={() => setSelectedTier("all")}
            className={`px-2.5 py-1 rounded transition-colors ${selectedTier === "all" ? "bg-stone-900 text-white font-medium" : "bg-stone-100 text-stone-700 hover:bg-stone-200"}`}
          >
            Vista Global (10)
          </button>
          <button
            onClick={() => setSelectedTier("P1")}
            className={`px-2.5 py-1 rounded transition-colors ${selectedTier === "P1" ? "bg-stone-900 text-white font-medium" : "bg-stone-100 text-stone-700 hover:bg-stone-200"}`}
          >
            P1 (6 Críticas)
          </button>
          <button
            onClick={() => setSelectedTier("P2")}
            className={`px-2.5 py-1 rounded transition-colors ${selectedTier === "P2" ? "bg-amber-700 text-white font-medium" : "bg-stone-100 text-stone-700 hover:bg-stone-200"}`}
          >
            P2 (3 Estructurales)
          </button>
          <button
            onClick={() => setSelectedTier("P3")}
            className={`px-2.5 py-1 rounded transition-colors ${selectedTier === "P3" ? "bg-stone-600 text-white font-medium" : "bg-stone-100 text-stone-700 hover:bg-stone-200"}`}
          >
            P3 (1 Expansión)
          </button>
        </div>
      </div>

      {/* 2x2 Decision Quadrant Matrix Visual */}
      <div className="bg-[#FBF9F5] p-5 rounded-xl border border-stone-200 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-stone-500 uppercase tracking-wider">
          <span>MATRIZ 2×2: IMPACTO PEDAGÓGICO EN EL AULA vs. FACTIBILIDAD Y RIESGO TÉCNICO</span>
          <span className="text-[11px] font-sans text-stone-400">Pasa el cursor o pulsa para enfocar</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* Quadrant 1: P1 */}
          <div
            onClick={() => setActiveQuadrant(activeQuadrant === 1 ? null : 1)}
            className={`p-4 rounded-lg border transition-all cursor-pointer ${
              activeQuadrant === 1 || selectedTier === "P1" || selectedTier === "all"
                ? "bg-white border-stone-900 shadow-sm ring-1 ring-stone-900"
                : "bg-white/60 border-stone-200 opacity-60"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                CUADRANTE I · P1
              </span>
              <span className="text-[11px] font-semibold text-stone-700">Impacto Máximo · Riesgo Mínimo</span>
            </div>
            <h4 className="font-serif font-bold text-base text-stone-900">Acción Inmediata Inclusiva</h4>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              Cumplimiento normativo WCAG 2.2 AA, portada por tareas docentes y ficha operativa de 9 bloques. Se ejecutan en primera instancia sin tocar servidor.
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded text-[10px] bg-stone-100 border border-stone-300 font-mono">#1 Accesibilidad AA</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-stone-100 border border-stone-300 font-mono">#2 Portada Tareas</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-stone-100 border border-stone-300 font-mono">#3 Ficha 9 Bloques</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-stone-100 border border-stone-300 font-mono">#4 Licencias CC</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-stone-100 border border-stone-300 font-mono">#5 Guía 5 pasos</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-stone-100 border border-stone-300 font-mono">#7 Verificador enlaces</span>
            </div>
          </div>

          {/* Quadrant 2: P2 */}
          <div
            onClick={() => setActiveQuadrant(activeQuadrant === 2 ? null : 2)}
            className={`p-4 rounded-lg border transition-all cursor-pointer ${
              activeQuadrant === 2 || selectedTier === "P2" || selectedTier === "all"
                ? "bg-white border-amber-800 shadow-sm ring-1 ring-amber-800"
                : "bg-white/60 border-stone-200 opacity-60"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                CUADRANTE II · P2
              </span>
              <span className="text-[11px] font-semibold text-stone-700">Impacto Alto · Esfuerzo Medio</span>
            </div>
            <h4 className="font-serif font-bold text-base text-stone-900">Inversión Metodológica Estructural</h4>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              Filtros facetados anti-etiquetas diagnósticas, entrega multimodal en Entornos Virtuales (Moodle Educacyl) y Cuaderno de Observación No Punitivo.
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded text-[10px] bg-amber-50 border border-amber-300 font-mono text-amber-900">#6 Filtros Facetados</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-amber-50 border border-amber-300 font-mono text-amber-900">#9 Moodle Educacyl</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-amber-50 border border-amber-300 font-mono text-amber-900">#10 Evaluación Formativa</span>
            </div>
          </div>

          {/* Quadrant 3: P3 */}
          <div
            onClick={() => setActiveQuadrant(activeQuadrant === 3 ? null : 3)}
            className={`p-4 rounded-lg border transition-all cursor-pointer ${
              activeQuadrant === 3 || selectedTier === "P3" || selectedTier === "all"
                ? "bg-white border-stone-600 shadow-sm ring-1 ring-stone-600"
                : "bg-white/60 border-stone-200 opacity-60"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-stone-700 bg-stone-200 px-2 py-0.5 rounded">
                CUADRANTE III · P3
              </span>
              <span className="text-[11px] font-semibold text-stone-700">Impacto Estratégico · Condicionado</span>
            </div>
            <h4 className="font-serif font-bold text-base text-stone-900">Transferencia Avanzada e Investigación</h4>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              Línea de investigación empírica MCR / KAIROS, Laboratorio Multimodal y banco de evidencias de aula. Sujeta a aprobación científica y convenios con CFIE.
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded text-[10px] bg-stone-100 border border-stone-300 font-mono text-stone-800">#8 MCR / KAIROS e Investigación</span>
            </div>
          </div>

          {/* Quadrant 4: Descartados / Riesgo Evitado */}
          <div className="p-4 rounded-lg border border-red-200 bg-red-50/40 space-y-1">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-red-800 bg-red-100 px-2 py-0.5 rounded">
                CUADRANTE IV · DESCARTADO
              </span>
              <span className="text-[11px] font-semibold text-red-800">Riesgo Alto · Sin Utilidad</span>
            </div>
            <h4 className="font-serif font-bold text-base text-red-950">Intervenciones Desaconsejadas</h4>
            <p className="text-xs text-red-900 leading-relaxed">
              Chatbot de IA abierta sin filtro científico (alucinaciones), gamificación competitiva con barras de vidas/puntos (ansiedad escolar) y etiquetas diagnósticas segregadoras.
            </p>
            <div className="mt-2 text-[10px] text-red-800 font-mono">
              ✕ Prohibido por pautas DUA 3.0 y evidencia TALIS/Pozzi 2024
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Tier Breakdown with Rationale */}
      <div className="space-y-4 pt-2">
        {(selectedTier === "all" || selectedTier === "P1") && (
          <div className="p-4 border border-stone-900 rounded-lg bg-white space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-stone-900 text-white font-mono text-xs font-bold">P1</span>
                <strong className="font-serif text-base text-stone-900">{tierMeta.P1.title}</strong>
              </div>
              <span className="text-xs font-mono text-stone-500">6 intervenciones</span>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed bg-[#FBF9F5] p-3 rounded border border-stone-200">
              <strong>Fundamentación pedagógica y técnica:</strong> {tierMeta.P1.rationale}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
              {tierMeta.P1.items.map(it => (
                <div key={it.id} className="p-2.5 rounded border border-stone-200 bg-white">
                  <div className="font-bold text-stone-900 mb-0.5">#{it.id}. {it.name}</div>
                  <div className="text-[11px] text-stone-500 italic">Razón: {it.why}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(selectedTier === "all" || selectedTier === "P2") && (
          <div className="p-4 border border-amber-700 rounded-lg bg-white space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-amber-700 text-white font-mono text-xs font-bold">P2</span>
                <strong className="font-serif text-base text-stone-900">{tierMeta.P2.title}</strong>
              </div>
              <span className="text-xs font-mono text-stone-500">3 intervenciones</span>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed bg-[#FBF9F5] p-3 rounded border border-stone-200">
              <strong>Fundamentación pedagógica y técnica:</strong> {tierMeta.P2.rationale}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {tierMeta.P2.items.map(it => (
                <div key={it.id} className="p-2.5 rounded border border-stone-200 bg-white">
                  <div className="font-bold text-stone-900 mb-0.5">#{it.id}. {it.name}</div>
                  <div className="text-[11px] text-stone-500 italic">Razón: {it.why}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(selectedTier === "all" || selectedTier === "P3") && (
          <div className="p-4 border border-stone-500 rounded-lg bg-white space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-stone-600 text-white font-mono text-xs font-bold">P3</span>
                <strong className="font-serif text-base text-stone-900">{tierMeta.P3.title}</strong>
              </div>
              <span className="text-xs font-mono text-stone-500">1 intervención</span>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed bg-[#FBF9F5] p-3 rounded border border-stone-200">
              <strong>Fundamentación pedagógica y técnica:</strong> {tierMeta.P3.rationale}
            </p>
            <div className="p-2.5 rounded border border-stone-200 bg-white text-xs">
              {tierMeta.P3.items.map(it => (
                <div key={it.id}>
                  <div className="font-bold text-stone-900 mb-0.5">#{it.id}. {it.name}</div>
                  <div className="text-[11px] text-stone-500 italic">Razón: {it.why}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ========================================================================= */
/* 2. DIAGRAMA VISUAL DE LA CONVOCATORIA USAL 2026/R055/01 (CADENA OPERATIVA) */
/* ========================================================================= */
export const UsalCandidacyPipelineDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      step: 1,
      phase: "01. WEB",
      title: "Gestión Web y Curación de Recursos DUA-DIG",
      shortDesc: "Administración técnica del portal, WCAG 2.2 AA y fichas operativas de 9 bloques.",
      tools: ["Drupal / CMS", "W3C Nu Validator", "Lighthouse / WAVE", "Markdown REA"],
      tasks: [
        "Revisión y carga sistemática de fichas normalizadas de aula (GiraTIC, Identidad Digital).",
        "Auditoría continua de accesibilidad WCAG 2.2 Nivel AA (contraste 4.5:1 y foco visible de teclado).",
        "Verificación de enlaces externos y etiquetado con licencias Creative Commons CC BY-SA 4.0."
      ],
      roleBadge: "Técnico de Apoyo (Candidatura)",
      verification: "Portal validado al 100% sin enlaces huérfanos ni errores críticos de navegación."
    },
    {
      step: 2,
      phase: "02. CENTROS",
      title: "Intervenciones Escolares de Campo (Castilla y León)",
      shortDesc: "Coordinación logística, soporte a docentes en aula y despliegue in situ.",
      tools: ["CFIE Salamanca/Zamora/Ávila", "Hardware de aula (PDI / tablets)", "Protocolos de aula"],
      tasks: [
        "Planificación de sesiones presenciales en centros piloto de Educación Infantil y Primaria.",
        "Comprobación de condiciones tecnológicas mínimas (conectividad, sonido, filtros de red).",
        "Acompañamiento a los maestros en la aplicación de las actividades sin sesgos de formato."
      ],
      roleBadge: "Coordinación con Maestros y CFIE",
      verification: "Cuaderno de bitácora de intervenciones con firmas de claustro y actas de incidencia."
    },
    {
      step: 3,
      phase: "03. DATOS",
      title: "Recogida, Depuración y Anonimización RGPD",
      shortDesc: "Levantamiento de evidencias empíricas (ECODIES, observaciones, grabaciones de audio).",
      tools: ["Consentimientos informados", "Base de datos por intentos", "Protocolo seudonimización"],
      tasks: [
        "Registro exhaustivo de intentos por alumno (latencia, andamiajes requeridos, aciertos).",
        "Separación estricta entre identificadores personales y códigos de investigación (RGPD UE 2016/679).",
        "Depuración de datos ausentes distinguiendo causas estructurales (MCAR) de dificultades reales."
      ],
      roleBadge: "Tratamiento Ético y Metodológico",
      verification: "Dataset seudonimizado con diccionario de variables y control de duplicados."
    },
    {
      step: 4,
      phase: "04. ANÁLISIS",
      title: "Análisis Cuantitativo y Cualitativo de Métodos Mixtos",
      shortDesc: "Procesamiento estadístico riguroso con SPSS 30 y análisis temático con NVivo 14.",
      tools: ["SPSS Statistics 30 (GENLINMIXED)", "FACTOR (Polictóricas)", "NVivo 14 / ATLAS.ti"],
      tasks: [
        "Cálculo de estadísticos descriptivos, fiabilidad (alfa de Cronbach, alfa ordinal = 0,929 en ECODIES).",
        "Modelos lineales mixtos para medidas repetidas por alumno, tarea y centro escolar.",
        "Codificación temática reflexiva de entrevistas y rastreo deliberado de casos negativos."
      ],
      roleBadge: "Análisis Científico Especializado",
      verification: "Tablas psicométricas contrastadas y matrices de triangulación cuantitativa-cualitativa."
    },
    {
      step: 5,
      phase: "05. INFORMES",
      title: "Transferencia Científica y Depósito Abierto",
      shortDesc: "Redacción de memorias técnicas, artículos de impacto y publicación en GREDOS (USAL).",
      tools: ["GREDOS Repositorio USAL", "Plantillas JCR / Scopus", "Guías CFIE en Lectura Fácil"],
      tasks: [
        "Elaboración de informes de transferencia para la Consejería de Educación y la Red de CFIE.",
        "Borradores de artículos empíricos de alto impacto (JCR / Scopus) sobre inclusión digital DUA.",
        "Depósito institucional de todos los entregables bajo licencias abiertas abiertas para la comunidad."
      ],
      roleBadge: "Dirección Científica EduDIG",
      verification: "Mínimo 4 publicaciones científicas y 100% de materiales disponibles en Open Access."
    }
  ];

  return (
    <div className="p-6 bg-white border border-stone-200 rounded-xl shadow-xs space-y-6">
      <div className="border-b border-stone-200 pb-4">
        <span className="font-mono text-xs uppercase tracking-widest text-amber-900 font-semibold block">
          CONVOCATORIA 2026/R055/01 · UNIVERSIDAD DE SALAMANCA
        </span>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
          Cadena Operativa de las 5 Tareas Integradas del Puesto
        </h3>
        <p className="text-xs text-stone-600 mt-0.5">
          Flujo de trabajo de investigación aplicada: desde el mantenimiento del repositorio web hasta la publicación científica y transferencia al aula.
        </p>
      </div>

      {/* Visual Pipeline Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
        {steps.map((st) => (
          <button
            key={st.step}
            onClick={() => setActiveStep(st.step)}
            className={`p-3 rounded-lg border text-left transition-all cursor-pointer relative ${
              activeStep === st.step
                ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                : "bg-[#FBF9F5] text-stone-700 border-stone-200 hover:bg-stone-100"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className={`font-mono text-xs font-bold ${activeStep === st.step ? "text-amber-400" : "text-stone-400"}`}>
                {st.phase}
              </span>
              {activeStep === st.step && <Check className="w-3.5 h-3.5 text-amber-400" />}
            </div>
            <div className="text-xs font-semibold leading-tight line-clamp-2">
              {st.title.split(":")[0]}
            </div>
          </button>
        ))}
      </div>

      {/* Active Step Detailed Card */}
      {(() => {
        const cur = steps.find(s => s.step === activeStep) || steps[0];
        return (
          <div className="p-5 border border-stone-300 rounded-xl bg-[#FBF9F5] space-y-4 animate-fadeIn text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-stone-200 pb-3">
              <div>
                <span className="font-mono text-xs text-amber-900 font-bold uppercase block">
                  HITO {cur.step} DE 5 · {cur.phase}
                </span>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                  {cur.title}
                </h4>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-stone-300 text-stone-800 self-start sm:self-auto font-mono">
                {cur.roleBadge}
              </span>
            </div>

            <p className="text-stone-700 leading-relaxed font-sans">
              {cur.shortDesc}
            </p>

            {/* Tasks and Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-1">
              <div className="md:col-span-7 space-y-2 bg-white p-4 rounded-lg border border-stone-200">
                <strong className="block text-stone-900 font-semibold uppercase text-xs tracking-wider font-mono">
                  Actividades Clave Asignadas en la Convocatoria:
                </strong>
                <ul className="space-y-1.5 text-xs text-stone-600 list-disc list-inside">
                  {cur.tasks.map((task, idx) => (
                    <li key={idx} className="leading-snug">{task}</li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-5 space-y-3 bg-white p-4 rounded-lg border border-stone-200">
                <div>
                  <strong className="block text-stone-900 font-semibold uppercase text-xs tracking-wider font-mono mb-1.5">
                    Instrumental y Software Utilizado:
                  </strong>
                  <div className="flex flex-wrap gap-1.5">
                    {cur.tools.map((tool, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[11px] bg-stone-100 border border-stone-300 font-mono text-stone-800">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-100">
                  <strong className="block text-stone-900 font-semibold uppercase text-xs tracking-wider font-mono mb-1">
                    Criterio de Éxito / Entregable:
                  </strong>
                  <p className="text-[11px] text-emerald-900 bg-emerald-50/70 p-2 rounded border border-emerald-200">
                    {cur.verification}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};

/* ========================================================================= */
/* 3. DIAGRAMA VISUAL DE LA INVESTIGACIÓN MCR / KAIROS                        */
/* ========================================================================= */
export const McrArchitectureDiagram: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<"capa1" | "capa2" | "capa2b">("capa1");

  return (
    <div className="p-6 bg-white border border-stone-200 rounded-xl shadow-xs space-y-6">
      <div className="border-b border-stone-200 pb-4">
        <span className="font-mono text-xs uppercase tracking-widest text-amber-900 font-semibold block">
          LÍNEA DE INVESTIGACIÓN AVANZADA · PROYECTO DUA-DIG
        </span>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
          Arquitectura Metodológica de 3 Capas y Bucle Enactivo (MCR / KAIROS)
        </h3>
        <p className="text-xs text-stone-600 mt-0.5">
          Estructura de inferencia y contrastación científica para estudiar la comprensión y el andamiaje sin sesgos verbales o punitivos.
        </p>
      </div>

      {/* Layer selector tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <button
          onClick={() => setActiveLayer("capa1")}
          className={`p-3 rounded-lg border text-left transition-all ${
            activeLayer === "capa1"
              ? "bg-stone-900 text-white border-stone-900 shadow-sm"
              : "bg-[#FBF9F5] text-stone-700 border-stone-200 hover:bg-stone-100"
          }`}
        >
          <span className={`font-mono text-xs font-bold block mb-0.5 ${activeLayer === "capa1" ? "text-amber-400" : "text-stone-500"}`}>
            CAPA 1
          </span>
          <strong className="block text-xs font-serif">Cuantitativa y Psicométrica</strong>
          <span className="text-[11px] opacity-80">SPSS 30 · FACTOR · ECODIES</span>
        </button>

        <button
          onClick={() => setActiveLayer("capa2")}
          className={`p-3 rounded-lg border text-left transition-all ${
            activeLayer === "capa2"
              ? "bg-stone-900 text-white border-stone-900 shadow-sm"
              : "bg-[#FBF9F5] text-stone-700 border-stone-200 hover:bg-stone-100"
          }`}
        >
          <span className={`font-mono text-xs font-bold block mb-0.5 ${activeLayer === "capa2" ? "text-amber-400" : "text-stone-500"}`}>
            CAPA 2
          </span>
          <strong className="block text-xs font-serif">Cualitativa Clásica</strong>
          <span className="text-[11px] opacity-80">NVivo 14 · ATLAS.ti · Episodios</span>
        </button>

        <button
          onClick={() => setActiveLayer("capa2b")}
          className={`p-3 rounded-lg border text-left transition-all ${
            activeLayer === "capa2b"
              ? "bg-stone-900 text-white border-stone-900 shadow-sm"
              : "bg-[#FBF9F5] text-stone-700 border-stone-200 hover:bg-stone-100"
          }`}
        >
          <span className={`font-mono text-xs font-bold block mb-0.5 ${activeLayer === "capa2b" ? "text-amber-400" : "text-stone-500"}`}>
            CAPA 2b
          </span>
          <strong className="block text-xs font-serif">Cualitativa Asistida por IA</strong>
          <span className="text-[11px] opacity-80">Auditoría Humana · RGPD Estricto</span>
        </button>
      </div>

      {/* Layer Content */}
      <div className="p-5 bg-[#FBF9F5] border border-stone-300 rounded-xl space-y-4 text-xs sm:text-sm">
        {activeLayer === "capa1" && (
          <div className="space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-stone-200 pb-2">
              <strong className="text-stone-900 font-serif text-base">Capa 1: Análisis Psicométrico y Modelos Mixtos</strong>
              <span className="text-xs font-mono text-stone-500">¿La medida es fiable y qué relaciones existen?</span>
            </div>
            <p className="text-stone-700 leading-relaxed">
              Evalúa la consistencia métrica de los instrumentos (escala ECODIES-40, α ordinal = 0,929). Se descarta la puntuación agregada ciega en favor de un <strong>registro por intento</strong> que modela efectos anidados por alumno, tarea y centro escolar en SPSS 30.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
              <div className="p-3 bg-white rounded border border-stone-200">
                <span className="font-mono text-stone-400 font-bold block mb-1">TÉCNICA 1</span>
                <strong className="text-stone-900 block mb-0.5">Fiabilidad Ordinal</strong>
                <p className="text-stone-600 text-[11px]">Cálculo de alfa ordinal y Theta de Armor para variables ordinales y dicotómicas.</p>
              </div>
              <div className="p-3 bg-white rounded border border-stone-200">
                <span className="font-mono text-stone-400 font-bold block mb-1">TÉCNICA 2</span>
                <strong className="text-stone-900 block mb-0.5">Modelos Mixtos (GLMM)</strong>
                <p className="text-stone-600 text-[11px]">Tratamiento de observaciones repetidas sin inflar el tamaño muestral aparente.</p>
              </div>
              <div className="p-3 bg-white rounded border border-stone-200">
                <span className="font-mono text-stone-400 font-bold block mb-1">TÉCNICA 3</span>
                <strong className="text-stone-900 block mb-0.5">AFE Robusto en FACTOR</strong>
                <p className="text-stone-600 text-[11px]">Matrices de correlación policórica y retención de factores por análisis paralelo.</p>
              </div>
            </div>
          </div>
        )}

        {activeLayer === "capa2" && (
          <div className="space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-stone-200 pb-2">
              <strong className="text-stone-900 font-serif text-base">Capa 2: Análisis Cualitativo Temático y Casos Negativos</strong>
              <span className="text-xs font-mono text-stone-500">¿Qué razona el alumno y cómo responde a los apoyos?</span>
            </div>
            <p className="text-stone-700 leading-relaxed">
              Codificación sistemática en <strong>NVivo 14 / ATLAS.ti</strong> sobre episodios de interacción de aula: respuesta inicial, pista recibida, reformulación y transferencia. Búsqueda activa de <em>casos negativos</em> donde la instrucción verbal y la ejecución práctica divergen.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
              <div className="p-3 bg-white rounded border border-stone-200">
                <span className="font-mono text-stone-400 font-bold block mb-1">PROTOCOLO 1</span>
                <strong className="text-stone-900 block mb-0.5">Libro de Códigos</strong>
                <p className="text-stone-600 text-[11px]">Definiciones operativas rigurosas (REGLA_VERBAL, RELACION_UTILIZADA, CASO_NEGATIVO).</p>
              </div>
              <div className="p-3 bg-white rounded border border-stone-200">
                <span className="font-mono text-stone-400 font-bold block mb-1">PROTOCOLO 2</span>
                <strong className="text-stone-900 block mb-0.5">Triangulación de Fuentes</strong>
                <p className="text-stone-600 text-[11px]">Confrontación entre observación en aula, autoinforme del alumno y juicio docente.</p>
              </div>
              <div className="p-3 bg-white rounded border border-stone-200">
                <span className="font-mono text-stone-400 font-bold block mb-1">PROTOCOLO 3</span>
                <strong className="text-stone-900 block mb-0.5">Acuerdo Interjueces</strong>
                <p className="text-stone-600 text-[11px]">Cálculo de kappa de Cohen (κ ≥ 0,75) en submuestras con doble codificación ciega.</p>
              </div>
            </div>
          </div>
        )}

        {activeLayer === "capa2b" && (
          <div className="space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-stone-200 pb-2">
              <strong className="text-stone-900 font-serif text-base">Capa 2b: Asistencia de IA con Control Humano y RGPD</strong>
              <span className="text-xs font-mono text-stone-500">¿Cómo escalar el análisis de corpus sin perder rigor?</span>
            </div>
            <p className="text-stone-700 leading-relaxed">
              La IA generativa propone agrupaciones temáticas y ayuda a detectar patrones preliminares, pero el investigador humano audita, valida y aprueba cada asignación. Se prohíbe el envío de audios crudos o datos no anonimizados a servidores comerciales externos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
              <div className="p-3 bg-white rounded border border-stone-200">
                <span className="font-mono text-stone-400 font-bold block mb-1">GARANTÍA 1</span>
                <strong className="text-stone-900 block mb-0.5">Auditoría Humana Ciega</strong>
                <p className="text-stone-600 text-[11px]">Toda categorización automática se contrasta contra un conjunto de validación manual reservado.</p>
              </div>
              <div className="p-3 bg-white rounded border border-stone-200">
                <span className="font-mono text-stone-400 font-bold block mb-1">GARANTÍA 2</span>
                <strong className="text-stone-900 block mb-0.5">Protección de Datos RGPD</strong>
                <p className="text-stone-600 text-[11px]">Prohibición de inferir emociones, déficit o diagnósticos a partir de la entonación o prosodia de la voz.</p>
              </div>
              <div className="p-3 bg-white rounded border border-stone-200">
                <span className="font-mono text-stone-400 font-bold block mb-1">GARANTÍA 3</span>
                <strong className="text-stone-900 block mb-0.5">Control de Deriva Temática</strong>
                <p className="text-stone-600 text-[11px]">Congelación de versiones de modelos e instrucciones para garantizar reproducibilidad científica.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enactive Cognitive Loop Infographic */}
      <div className="p-4 bg-white border border-stone-200 rounded-lg space-y-2">
        <strong className="block text-stone-900 text-xs uppercase tracking-wider font-mono">
          BUCLE DE REGULACIÓN DEL ACOPLAMIENTO COGNITIVO (CLARK & CHALMERS, 1998)
        </strong>
        <div className="p-3 bg-[#FBF9F5] border border-stone-200 rounded text-xs font-mono flex flex-wrap items-center justify-between gap-2 text-stone-800">
          <span className="p-1.5 bg-white border border-stone-300 rounded font-semibold">1. Tarea Accesible</span>
          <span>➔</span>
          <span className="p-1.5 bg-white border border-stone-300 rounded font-semibold">2. Extracción de Relaciones</span>
          <span>➔</span>
          <span className="p-1.5 bg-white border border-stone-300 rounded font-semibold">3. Acción / Uso Situado</span>
          <span>➔</span>
          <span className="p-1.5 bg-white border border-stone-300 rounded font-semibold">4. Pistas Graduadas (Fading)</span>
          <span>➔</span>
          <span className="p-1.5 bg-white border border-stone-300 rounded font-semibold">5. Transferencia Autónoma</span>
        </div>
      </div>
    </div>
  );
};
