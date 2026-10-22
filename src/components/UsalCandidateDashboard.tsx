/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Cuadro de Mando: Matriz de 10 Prioridades, Convocatoria USAL y MCR / Mente Extendida
 * Secciones 7, 8, 9 y 10 del Dossier Maestro Integral.
 */

import React, { useState } from "react";
import { PRIORITY_MATRIX, PriorityChange, BLOCKING_QUESTIONS, BlockingQuestion } from "../data/dossierData";
import { 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  HelpCircle, 
  Brain, 
  Cpu, 
  GraduationCap, 
  Database, 
  FileSpreadsheet, 
  Printer, 
  ChevronRight,
  ShieldAlert,
  ArrowRight
} from "lucide-react";
import { 
  PriorityMatrixVisualDiagram, 
  UsalCandidacyPipelineDiagram, 
  McrArchitectureDiagram 
} from "./VisualDiagrams";

interface UsalCandidateDashboardProps {
  onOpenPdfModal: () => void;
}

export const UsalCandidateDashboard: React.FC<UsalCandidateDashboardProps> = ({ onOpenPdfModal }) => {
  const [activeSubTab, setActiveSubTab] = useState<"matrix" | "candidacy" | "mcr" | "questions">("matrix");
  const [priorityFilter, setPriorityFilter] = useState<string>("all");
  const [questionsState, setQuestionsState] = useState<BlockingQuestion[]>(BLOCKING_QUESTIONS);
  
  // MCR Interactive Simulator state
  const [mcrStep, setMcrStep] = useState<number>(1);
  const [activeNeuroProfile, setActiveNeuroProfile] = useState<"tdah" | "autismo" | "altas_capacidades">("tdah");

  const filteredMatrix = priorityFilter === "all"
    ? PRIORITY_MATRIX
    : PRIORITY_MATRIX.filter(p => p.priority === priorityFilter);

  const toggleQuestionStatus = (id: number) => {
    setQuestionsState(prev => prev.map(q => {
      if (q.id === id) {
        const nextStatus = q.status === "Pendiente" ? "En análisis" : q.status === "En análisis" ? "Documentado" : "Pendiente";
        return { ...q, status: nextStatus };
      }
      return q;
    }));
  };

  return (
    <div className="w-full min-h-screen bg-[#FBF9F5] text-stone-900 px-6 lg:px-12 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="border-b border-stone-200 pb-6 mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-900 uppercase tracking-widest mb-1">
            <span>SECCIONES 7 A 10 · GESTIÓN ESTRATÉGICA Y CANDIDATURA</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 leading-tight">
            Matriz de Prioridades, Convocatoria USAL e Investigación MCR
          </h1>
          <p className="mt-2 text-stone-600 text-sm sm:text-base font-sans max-w-3xl leading-relaxed">
            Consolidación operativa del plan de validación, la preparación técnica para la Convocatoria 2026/R055/01 (SPSS, NVivo, ECODIES) y la línea teórica de la Mente Extendida en IA.
          </p>

          {/* Sub-tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-6">
            <button
              onClick={() => setActiveSubTab("matrix")}
              className={`px-3.5 py-2 rounded text-xs font-medium transition-colors ${
                activeSubTab === "matrix" ? "bg-stone-900 text-white" : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
              }`}
            >
              Matriz 10 Prioridades (Sec. 8)
            </button>
            <button
              onClick={() => setActiveSubTab("candidacy")}
              className={`px-3.5 py-2 rounded text-xs font-medium transition-colors ${
                activeSubTab === "candidacy" ? "bg-stone-900 text-white" : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
              }`}
            >
              Candidatura Convocatoria USAL (Sec. 9)
            </button>
            <button
              onClick={() => setActiveSubTab("mcr")}
              className={`px-3.5 py-2 rounded text-xs font-medium transition-colors ${
                activeSubTab === "mcr" ? "bg-stone-900 text-white" : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
              }`}
            >
              MCR & Mente Extendida (Sec. 7)
            </button>
            <button
              onClick={() => setActiveSubTab("questions")}
              className={`px-3.5 py-2 rounded text-xs font-medium transition-colors ${
                activeSubTab === "questions" ? "bg-stone-900 text-white" : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
              }`}
            >
              7 Preguntas Bloqueantes (Sec. 10)
            </button>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* SUB-VIEW 1: PRIORITY MATRIX */}
        {/* ========================================================================= */}
        {activeSubTab === "matrix" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <h2 className="font-serif text-2xl font-bold text-stone-900">
                  Matriz Cualitativa de los 10 Cambios Prioritarios
                </h2>
                <p className="text-xs text-stone-600 mt-1 font-sans">
                  P1 = Urgente sin riesgo técnico · P2 = Estructural necesaria · P3 = Condicionada a base de datos
                </p>
              </div>

              {/* Priority Filter */}
              <div className="flex items-center gap-1.5 text-xs font-sans">
                <button
                  onClick={() => setPriorityFilter("all")}
                  className={`px-2.5 py-1 rounded ${priorityFilter === "all" ? "bg-stone-900 text-white font-medium" : "bg-white border border-stone-300 text-stone-700"}`}
                >
                  Todas (10)
                </button>
                <button
                  onClick={() => setPriorityFilter("P1")}
                  className={`px-2.5 py-1 rounded ${priorityFilter === "P1" ? "bg-stone-900 text-white font-medium" : "bg-white border border-stone-300 text-stone-700"}`}
                >
                  P1 (6)
                </button>
                <button
                  onClick={() => setPriorityFilter("P2")}
                  className={`px-2.5 py-1 rounded ${priorityFilter === "P2" ? "bg-stone-900 text-white font-medium" : "bg-white border border-stone-300 text-stone-700"}`}
                >
                  P2 (3)
                </button>
                <button
                  onClick={() => setPriorityFilter("P3")}
                  className={`px-2.5 py-1 rounded ${priorityFilter === "P3" ? "bg-stone-900 text-white font-medium" : "bg-white border border-stone-300 text-stone-700"}`}
                >
                  P3 (1)
                </button>
              </div>
            </div>

            {/* Visual Priority Decision Diagram with P1, P2, P3 Rationale */}
            <PriorityMatrixVisualDiagram />

            {/* Matrix Items Detailed Cards */}
            <div className="space-y-3 font-sans text-xs sm:text-sm">
              {filteredMatrix.map((item) => (
                <div
                  key={item.id}
                  className="p-5 bg-white border border-stone-200 rounded-lg shadow-xs hover:border-stone-400 transition-all space-y-2"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-stone-400 text-xs">#{item.id}</span>
                      <h3 className="font-serif text-lg font-semibold text-stone-900">{item.intervention}</h3>
                    </div>
                    <span className={`px-2.5 py-0.5 rounded text-xs font-semibold shrink-0 ${
                      item.priority === "P1"
                        ? "bg-stone-900 text-white"
                        : item.priority === "P2"
                        ? "bg-stone-200 text-stone-800"
                        : "bg-stone-100 text-stone-600"
                    }`}>
                      {item.priorityLabel}
                    </span>
                  </div>

                  <p className="text-stone-800">
                    <strong>Tarea docente facilitada:</strong> {item.teacherTask}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-stone-100 text-xs">
                    <p className="text-red-900/90">
                      <strong>Riesgo identificado:</strong> {item.risk}
                    </p>
                    <p className="text-stone-600">
                      <strong>Validación y control:</strong> {item.validationMethod}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Usability Testing Plan Box */}
            <div className="mt-8 p-6 bg-stone-100 border border-stone-200 rounded-xl space-y-4 text-xs sm:text-sm font-sans">
              <span className="font-mono text-xs uppercase tracking-wider text-stone-500 font-semibold block">
                PLAN DE VALIDACIÓN EMPÍRICA EN DOS FASES
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-stone-200 rounded-lg space-y-1.5">
                  <strong className="text-stone-900 block text-sm">Fase 1: Medición de Línea Base</strong>
                  <p className="text-stone-600 text-xs">
                    Medición de tiempos, dudas y abandonos en la web actual sobre 3 tareas: buscar material de identidad digital, verificar requisitos de GiraTIC y comprobar licencias CC.
                  </p>
                </div>
                <div className="p-4 bg-white border border-stone-200 rounded-lg space-y-1.5">
                  <strong className="text-stone-900 block text-sm">Fase 2: Pruebas de Usabilidad con Docentes</strong>
                  <p className="text-stone-600 text-xs">
                    Contraste empírico contrabalanceado con maestros en ejercicio de Infantil y Primaria sobre el prototipo rediseñado. Métrica: ≥85% de finalización autónoma y cero barreras críticas WCAG 2.2.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SUB-VIEW 2: CANDIDACY & TASKS (CONVOCATORIA USAL) */}
        {/* ========================================================================= */}
        {activeSubTab === "candidacy" && (
          <div className="space-y-8 animate-fadeIn font-sans text-xs sm:text-sm">
            <header className="border-b border-stone-200 pb-4">
              <span className="font-mono text-xs text-amber-900 font-semibold uppercase block mb-1">
                CONVOCATORIA OFICIAL 2026/R055/01 · UNIVERSIDAD DE SALAMANCA
              </span>
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Cadena Operativa del Puesto y Protocolos Científicos
              </h2>
            </header>

            {/* 5-Step Operational Chain Interactive Pipeline Diagram */}
            <UsalCandidacyPipelineDiagram />

            {/* Defense Speech Box */}
            <div className="p-6 bg-stone-100 border border-stone-200 rounded-xl space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-stone-500 font-semibold block">
                ARGUMENTARIO SÓLIDO PARA LA ENTREVISTA DE SELECCIÓN
              </span>
              <blockquote className="font-serif text-base sm:text-lg text-stone-900 italic border-l-2 border-stone-400 pl-4 my-2 leading-relaxed">
                «He estudiado a fondo los antecedentes metodológicos del equipo: tanto los instrumentos cuantitativos de seguridad digital y competencia digital (ECODIES), como las investigaciones cualitativas con entrevistas y NVivo en proyectos como DigiCraft. Entiendo que las tareas del puesto articulan la gestión y clarificación de los recursos web con el apoyo de campo en los colegios y la depuración de datos. Mi prioridad técnica será conocer las versiones operativas de los instrumentos vigentes en DUA-DIG, los protocolos éticos aprobados y las pautas de coordinación interna para el análisis y la elaboración de informes».
              </blockquote>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SUB-VIEW 3: MCR & EXTENDED MIND IN AI (SECTION 7) */}
        {/* ========================================================================= */}
        {activeSubTab === "mcr" && (
          <div className="space-y-8 animate-fadeIn font-sans text-xs sm:text-sm">
            <header className="border-b border-stone-200 pb-4">
              <span className="font-mono text-xs text-amber-900 font-semibold uppercase block mb-1">
                SECCIÓN 7 · LÍNEA DE INVESTIGACIÓN AVANZADA
              </span>
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Marco de la Mente Extendida y Protocolo de Delegación Cognitiva (Clark & Chalmers, 1998)
              </h2>
            </header>

            {/* MCR Architecture 3-Layer Visual Diagram */}
            <McrArchitectureDiagram />

            {/* 3 Figures of Delegation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white border border-stone-200 rounded-lg space-y-2">
                <span className="font-mono text-xs font-bold text-stone-500">FIGURA 1</span>
                <strong className="text-stone-900 block text-base font-serif">Apoyo de Acceso (Permanente)</strong>
                <p className="text-stone-600 text-xs">
                  Transcripción auditiva, alto contraste o lectura asistida. No debe retirarse nunca porque derriba una barrera sensorial sin alterar la meta conceptual.
                </p>
              </div>

              <div className="p-4 bg-white border border-stone-200 rounded-lg space-y-2">
                <span className="font-mono text-xs font-bold text-amber-900">FIGURA 2</span>
                <strong className="text-stone-900 block text-base font-serif">Andamiaje de Aprendizaje (Desvanecible)</strong>
                <p className="text-stone-600 text-xs">
                  Pistas graduadas, esquemas parciales, preguntas guía. Se retiran progresivamente conforme se constata autonomía cognitiva.
                </p>
              </div>

              <div className="p-4 bg-red-50 border border-red-200 rounded-lg space-y-2">
                <span className="font-mono text-xs font-bold text-red-700">FIGURA 3</span>
                <strong className="text-red-950 block text-base font-serif">Sustitución Indebida (A Evitar)</strong>
                <p className="text-red-900 text-xs">
                  La IA o la herramienta ejecuta el razonamiento o redacta la conclusión que la persona debía aprender a construir.
                </p>
              </div>
            </div>

            {/* Interactive MCR 6-Step Cycle */}
            <div className="p-6 bg-white border border-stone-200 rounded-xl space-y-4">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold">
                  CICLO MCR DE REGULACIÓN DEL ACOPLAMIENTO COGNITIVO
                </span>
                <span className="font-mono text-xs font-bold text-stone-800">Paso {mcrStep} de 6</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs">
                {[
                  "1. Situar objetivo",
                  "2. Relacionar conceptos",
                  "3. Perturbar variables",
                  "4. Reconfigurar supuestos",
                  "5. Transferir a nuevo caso",
                  "6. Regular acoplamiento"
                ].map((stepLabel, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMcrStep(idx + 1)}
                    className={`p-2 rounded text-[11px] font-medium transition-all ${
                      mcrStep === idx + 1
                        ? "bg-stone-900 text-white font-semibold"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    {stepLabel}
                  </button>
                ))}
              </div>

              <div className="p-4 bg-[#FBF9F5] border border-stone-200 rounded-lg text-xs space-y-1">
                {mcrStep === 1 && (
                  <p><strong>Paso 1: Situar el objetivo didáctico:</strong> Delimitar la meta cognitiva sin asociarla a una única vía perceptiva obligatoria.</p>
                )}
                {mcrStep === 2 && (
                  <p><strong>Paso 2: Relacionar conceptos:</strong> Construir conexiones semánticas explícitas entre conocimientos previos y nuevos dilemas.</p>
                )}
                {mcrStep === 3 && (
                  <p><strong>Paso 3: Perturbar variables:</strong> Variar aspectos secundarios de la tarea (soporte, formato) para evitar fijaciones funcionales.</p>
                )}
                {mcrStep === 4 && (
                  <p><strong>Paso 4: Reconfigurar supuestos:</strong> Detectar y corregir sesgos o errores conceptuales mediante retroalimentación observable.</p>
                )}
                {mcrStep === 5 && (
                  <p><strong>Paso 5: Transferir a nueva situación:</strong> Aplicar el razonamiento en un contexto escolar o social diferente sin ayuda externa.</p>
                )}
                {mcrStep === 6 && (
                  <p><strong>Paso 6: Regular el acoplamiento:</strong> Decidir colegiadamente qué apoyo tecnológico se mantiene y cuál se desvanece de manera autónoma.</p>
                )}
              </div>
            </div>

            {/* Neurodivergence without stereotypes */}
            <div className="p-6 bg-white border border-stone-200 rounded-xl space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold block">
                PAUTAS DE ATENCIÓN A LA NEURODIVERGENCIA SIN ESTEREOTIPOS
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() => setActiveNeuroProfile("tdah")}
                  className={`px-3 py-1.5 rounded text-xs font-medium ${activeNeuroProfile === "tdah" ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-700"}`}
                >
                  TDAH (Funciones Ejecutivas)
                </button>
                <button
                  onClick={() => setActiveNeuroProfile("autismo")}
                  className={`px-3 py-1.5 rounded text-xs font-medium ${activeNeuroProfile === "autismo" ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-700"}`}
                >
                  Autismo (Predictibilidad)
                </button>
                <button
                  onClick={() => setActiveNeuroProfile("altas_capacidades")}
                  className={`px-3 py-1.5 rounded text-xs font-medium ${activeNeuroProfile === "altas_capacidades" ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-700"}`}
                >
                  Altas Capacidades (Profundidad)
                </button>
              </div>

              <div className="p-4 bg-[#FBF9F5] border border-stone-200 rounded-lg text-xs leading-relaxed">
                {activeNeuroProfile === "tdah" && (
                  <div>
                    <strong className="text-stone-900 block mb-1">Pauta técnica para TDAH:</strong>
                    <p className="text-stone-700">
                      No asumir "falta de voluntad o capacidad"; separar las dificultades ejecutivas (iniciar, secuenciar o retomar la tarea) de la comprensión del concepto. Se proveen modelos del primer paso completado, temporizadores visibles con descansos pautados y reducción del texto de instrucciones a listas numeradas.
                    </p>
                  </div>
                )}
                {activeNeuroProfile === "autismo" && (
                  <div>
                    <strong className="text-stone-900 block mb-1">Pauta técnica para Autismo:</strong>
                    <p className="text-stone-700">
                      No inferir incomprensión de particularidades en la comunicación oral o el contacto visual. Separar la barrera comunicativa del dominio conceptual real, garantizando máxima predictibilidad en la secuencia de aula, apoyos visuales y ausencia de sorpresas imprevistas.
                    </p>
                  </div>
                )}
                {activeNeuroProfile === "altas_capacidades" && (
                  <div>
                    <strong className="text-stone-900 block mb-1">Pauta técnica para Altas Capacidades:</strong>
                    <p className="text-stone-700">
                      Prohibir la sobrecarga con más volumen de trabajo mecánico o idéntico. Ofrecer desafíos de mayor profundidad relacional, análisis crítico de supuestos, investigación autónoma de fuentes y transferencia a problemas complejos abiertos de la comunidad.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SUB-VIEW 4: BLOCKING QUESTIONS */}
        {/* ========================================================================= */}
        {activeSubTab === "questions" && (
          <div className="space-y-6 animate-fadeIn font-sans text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <h2 className="font-serif text-2xl font-bold text-stone-900">
                  Las 7 Preguntas Bloqueantes previas al Despliegue
                </h2>
                <p className="text-xs text-stone-600 mt-1">
                  Deben resolverse con la dirección técnica y científica (Dra. García-Valcárcel / Dra. Casillas) antes de escribir código en producción.
                </p>
              </div>

              <div className="text-xs text-stone-500 font-mono">
                {questionsState.filter(q => q.status === "Documentado").length} de 7 resueltas
              </div>
            </div>

            <div className="space-y-3">
              {questionsState.map((q) => (
                <div key={q.id} className="p-5 bg-white border border-stone-200 rounded-lg shadow-xs space-y-2.5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-stone-400 font-bold text-xs mr-2">Q{q.id}</span>
                      <strong className="text-stone-900 text-sm font-serif">{q.topic}</strong>
                    </div>
                    <button
                      onClick={() => toggleQuestionStatus(q.id)}
                      className={`px-2.5 py-1 rounded text-xs font-semibold cursor-pointer transition-colors ${
                        q.status === "Pendiente"
                          ? "bg-amber-100 text-amber-900 hover:bg-amber-200"
                          : q.status === "En análisis"
                          ? "bg-stone-200 text-stone-800 hover:bg-stone-300"
                          : "bg-emerald-100 text-emerald-900 hover:bg-emerald-200"
                      }`}
                      title="Clic para alternar estado"
                    >
                      {q.status} (clic para cambiar)
                    </button>
                  </div>

                  <p className="text-stone-800">{q.question}</p>

                  <div className="p-3 bg-[#FBF9F5] rounded border border-stone-200/80 text-xs space-y-1">
                    <p><strong className="text-stone-900">Impacto técnico en el despliegue:</strong> {q.impact}</p>
                    <p className="text-stone-600"><strong>Acción sugerida:</strong> {q.suggestedAction}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
