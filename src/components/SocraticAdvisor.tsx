/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Capa Pedagógica y Orientador: «Del Caso al Aula» (Sección 5)
 * Motor socrático estructurado sin alucinaciones, mapa de situaciones didácticas y generador de Plan de Aula (1 pág.).
 */

import React, { useState } from "react";
import { SOCRATIC_CASES, SocraticCase } from "../data/conceptsAndAudio";
import { 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  Printer, 
  ArrowRight, 
  RotateCcw, 
  FileText, 
  Target, 
  Eye, 
  Sliders,
  ChevronDown
} from "lucide-react";

interface SocraticAdvisorProps {
  onOpenPdfModal: () => void;
}

export const SocraticAdvisor: React.FC<SocraticAdvisorProps> = ({ onOpenPdfModal }) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>("case-1");
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isPlanGenerated, setIsPlanGenerated] = useState<boolean>(false);
  const [customCaseMode, setCustomCaseMode] = useState<boolean>(false);
  const [customInput, setCustomInput] = useState<string>("");

  const activeCase = SOCRATIC_CASES.find(c => c.id === selectedCaseId) || SOCRATIC_CASES[0];

  const handleSelectCase = (id: string) => {
    setSelectedCaseId(id);
    setCustomCaseMode(false);
    setCurrentStep(1);
    setAnswers({});
    setIsPlanGenerated(false);
  };

  const handleAnswerQuestion = (qIndex: number, answerText: string) => {
    setAnswers(prev => ({ ...prev, [qIndex]: answerText }));
  };

  const handleGeneratePlan = () => {
    setIsPlanGenerated(true);
  };

  const resetFlow = () => {
    setCurrentStep(1);
    setAnswers({});
    setIsPlanGenerated(false);
  };

  return (
    <div className="w-full min-h-screen bg-[#FBF9F5] text-stone-900 px-6 lg:px-12 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="border-b border-stone-200 pb-6 mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-900 uppercase tracking-widest mb-1">
            <span>SECCIÓN 5 · CAPA PEDAGÓGICA RIGUROSA</span>
            <span>·</span>
            <span>MOTOR SOCRÁTICO ESTRUCTURADO</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 leading-tight">
            Orientador Socrático: «Del Caso al Aula»
          </h1>
          <p className="mt-2 text-stone-600 text-sm sm:text-base font-sans max-w-3xl leading-relaxed">
            Frente a los chatbots abiertos que improvisan diagnósticos sin rigor, este orientador opera mediante un árbol determinista de preguntas observables que ayuda al docente a <strong>aislar las barreras del diseño didáctico</strong> frente a la tarea, generando un Plan de Aula de 1 página.
          </p>
        </header>

        {/* Case Selector or Custom Case */}
        <section className="mb-8">
          <span className="text-xs uppercase tracking-wider font-semibold text-stone-500 block mb-3 font-sans">
            Paso 1: Selecciona la dificultad observada en el aula
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SOCRATIC_CASES.map((scase) => (
              <div
                key={scase.id}
                onClick={() => handleSelectCase(scase.id)}
                className={`p-4 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
                  selectedCaseId === scase.id && !customCaseMode
                    ? "bg-white border-stone-900 shadow-xs ring-1 ring-stone-900"
                    : "bg-white/70 border-stone-200 hover:border-stone-400"
                }`}
              >
                <div>
                  <span className="font-mono text-[11px] text-stone-400 block mb-1">CASO {scase.id.toUpperCase()}</span>
                  <h3 className="font-serif font-semibold text-stone-900 text-base leading-snug">
                    {scase.difficultyTitle}
                  </h3>
                  <p className="text-xs text-stone-500 mt-2 font-sans">{scase.classroomContext}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-700">
                  <span className="text-stone-400">Trampa diagnóstica habitual:</span>
                  <span className="font-medium text-red-900/80">Evitar</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Socratic Inquiry Flow Container */}
        <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
          {/* Step Progress Rail */}
          <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-6 text-xs font-sans">
            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-1 rounded font-mono font-semibold ${currentStep === 1 ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-600"}`}>
                1. Indagación Socrática
              </span>
              <span className="text-stone-300">→</span>
              <span className={`px-2.5 py-1 rounded font-mono font-semibold ${currentStep === 2 ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-600"}`}>
                2. Reformulación No Diagnóstica
              </span>
              <span className="text-stone-300">→</span>
              <span className={`px-2.5 py-1 rounded font-mono font-semibold ${currentStep === 3 ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-600"}`}>
                3. Plan de Aula
              </span>
            </div>

            <button
              onClick={resetFlow}
              className="text-stone-500 hover:text-stone-800 flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar</span>
            </button>
          </div>

          {/* PHASE 1: Socratic Questions */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-4 bg-amber-50/60 border border-amber-200/80 rounded-lg text-xs sm:text-sm">
                <span className="font-semibold text-amber-950 block mb-1">
                  Trampa diagnóstica a desmontar en este caso:
                </span>
                <p className="text-amber-900 italic">
                  «{activeCase.diagnosticTrap}»
                </p>
              </div>

              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block">
                  Responde a las 3 preguntas socráticas de verificación empírica:
                </span>

                {activeCase.socraticQuestions.map((question, idx) => (
                  <div key={idx} className="p-4 bg-[#FBF9F5] border border-stone-200 rounded-lg space-y-2">
                    <p className="font-medium text-stone-900 text-sm">
                      <span className="font-mono text-stone-400 mr-2">Q{idx + 1}.</span>
                      {question}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <button
                        onClick={() => handleAnswerQuestion(idx, "Sí")}
                        className={`px-3 py-1 rounded text-xs font-medium border ${
                          answers[idx] === "Sí"
                            ? "bg-stone-900 text-white border-stone-900"
                            : "bg-white text-stone-700 border-stone-300 hover:bg-stone-100"
                        }`}
                      >
                        Sí, verificado
                      </button>
                      <button
                        onClick={() => handleAnswerQuestion(idx, "No / Con dificultad")}
                        className={`px-3 py-1 rounded text-xs font-medium border ${
                          answers[idx] === "No / Con dificultad"
                            ? "bg-amber-900 text-white border-amber-900"
                            : "bg-white text-stone-700 border-stone-300 hover:bg-stone-100"
                        }`}
                      >
                        No / Se observa dificultad evidente
                      </button>
                      <button
                        onClick={() => handleAnswerQuestion(idx, "No se ha comprobado")}
                        className={`px-3 py-1 rounded text-xs font-medium border ${
                          answers[idx] === "No se ha comprobado"
                            ? "bg-stone-700 text-white border-stone-700"
                            : "bg-white text-stone-700 border-stone-300 hover:bg-stone-100"
                        }`}
                      >
                        Aún no se ha comprobado
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-5 py-2.5 bg-stone-900 text-white rounded text-xs font-semibold hover:bg-stone-800 transition-colors flex items-center gap-2"
                >
                  <span>Continuar a Reformulación No Diagnóstica</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* PHASE 2: Non-diagnostic reformulation */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-5 bg-stone-100 border border-stone-200 rounded-lg">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-500 block mb-1">
                  REFORMULACIÓN DIDÁCTICA OBJETIVA
                </span>
                <h3 className="font-serif text-xl font-semibold text-stone-900">
                  Aislamiento de la barrera del entorno frente a la tarea
                </h3>
                <p className="mt-3 text-stone-800 text-sm sm:text-base leading-relaxed">
                  {activeCase.reformulation}
                </p>
              </div>

              <div className="p-5 bg-white border border-stone-200 rounded-lg space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-900 font-semibold block">
                  HIPÓTESIS DE INTERVENCIÓN METODOLÓGICA
                </span>
                <h4 className="font-serif text-lg font-semibold text-stone-900">
                  {activeCase.methodologicalIntervention.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-700">
                  <strong>Acción didáctica en el aula:</strong> {activeCase.methodologicalIntervention.action}
                </p>
                <p className="text-xs sm:text-sm text-stone-700">
                  <strong>Estrategia de desvanecimiento (Prompt Fading):</strong> {activeCase.methodologicalIntervention.fadingStrategy}
                </p>
                <div className="p-3 bg-emerald-50/60 border border-emerald-200 rounded text-xs text-emerald-950 font-medium">
                  <strong>Comprobación observable de éxito:</strong> {activeCase.methodologicalIntervention.observableCheck}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="text-xs text-stone-600 hover:text-stone-900"
                >
                  ← Volver a preguntas
                </button>
                <button
                  onClick={() => {
                    setCurrentStep(3);
                    handleGeneratePlan();
                  }}
                  className="px-5 py-2.5 bg-stone-900 text-white rounded text-xs font-semibold hover:bg-stone-800 transition-colors flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Generar Plan de Aula Descargable (1 pág.)</span>
                </button>
              </div>
            </div>
          )}

          {/* PHASE 3: Generated 1-Page Classroom Plan */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fadeIn">
              {/* Document Slip for Classroom */}
              <div className="p-6 bg-[#FBF9F5] border-2 border-dashed border-stone-300 rounded-xl space-y-5 text-xs sm:text-sm font-sans">
                <div className="flex items-start justify-between border-b border-stone-300 pb-3">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400">
                      UNIVERSIDAD DE SALAMANCA · PROYECTO DUA-DIG · EDUDIG
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                      Plan Operativo de Aula: Intervención DUA
                    </h3>
                    <p className="text-xs text-stone-500 font-sans mt-0.5">
                      Ficha de aplicación directa · Validez de observación de 1 a 3 sesiones lectivas.
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="px-2 py-0.5 bg-stone-900 text-white rounded text-[11px] font-mono">
                      1 PÁGINA
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-stone-500 block">Dificultad de origen observada:</span>
                    <strong className="text-stone-800">{activeCase.difficultyTitle}</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 block">Recurso DUA del catálogo asignado:</span>
                    <strong className="text-stone-900">{activeCase.recommendedResourceTitle}</strong>
                  </div>
                </div>

                <div className="p-3.5 bg-white border border-stone-200 rounded">
                  <span className="text-xs font-semibold uppercase text-stone-500 block mb-1">
                    Reformulación objetiva (Sin sesgo psicológico)
                  </span>
                  <p className="text-stone-700">{activeCase.reformulation}</p>
                </div>

                <div className="p-3.5 bg-white border border-stone-200 rounded space-y-2">
                  <span className="text-xs font-semibold uppercase text-stone-500 block mb-1">
                    Secuencia operativa del docente
                  </span>
                  <p className="text-stone-800">
                    <strong>1. Pauta inicial:</strong> {activeCase.methodologicalIntervention.action}
                  </p>
                  <p className="text-stone-800">
                    <strong>2. Retirada de ayuda:</strong> {activeCase.methodologicalIntervention.fadingStrategy}
                  </p>
                  <p className="text-stone-800">
                    <strong>3. Indicador de logro observable:</strong> {activeCase.methodologicalIntervention.observableCheck}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-300 flex items-center justify-between text-[11px] text-stone-500">
                  <span>Licencia: CC BY-SA 4.0 USAL · EduDIG</span>
                  <span>Registro de aula sin datos personales (Cumplimiento RGPD)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="text-xs text-stone-600 hover:text-stone-900"
                >
                  ← Modificar hipótesis
                </button>
                <div className="flex items-center gap-3">
                  <button
                    onClick={onOpenPdfModal}
                    className="px-4 py-2 bg-stone-900 text-white rounded text-xs font-medium hover:bg-stone-800 flex items-center gap-1.5"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Imprimir Plan de Aula (PDF)</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
