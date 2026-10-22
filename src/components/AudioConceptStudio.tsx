/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Estudio de Conceptos por Capas (C01-C06) y Locución Accesible (A01-A03)
 * Soporta síntesis de voz nativa del navegador (Web Speech API), velocidades y transcripción en texto plano.
 */

import React, { useState, useEffect, useRef } from "react";
import { LAYERED_CONCEPTS, LayeredConcept, AUDIO_SCRIPTS, AudioScript } from "../data/conceptsAndAudio";
import { 
  Play, 
  Pause, 
  Square, 
  Volume2, 
  Copy, 
  Check, 
  Download, 
  Layers, 
  FileText, 
  Sparkles, 
  BookOpen, 
  Headphones,
  Sliders,
  AlertCircle
} from "lucide-react";

export const AudioConceptStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"concepts" | "audio">("concepts");
  
  // Concept state
  const [selectedConceptId, setSelectedConceptId] = useState<string>("c01");
  const [activeLayer, setActiveLayer] = useState<1 | 2 | 3>(1);
  const [conceptFilter, setConceptFilter] = useState<string>("all");

  // Audio Speech Synthesis state
  const [selectedScriptId, setSelectedScriptId] = useState<string>("a01");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speechRate, setSpeechRate] = useState<number>(0.95);
  const [speechPitch, setSpeechPitch] = useState<number>(1.0);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speechSupported, setSpeechSupported] = useState<boolean>(true);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && !("speechSynthesis" in window)) {
      setSpeechSupported(false);
    }
  }, []);

  const selectedConcept = LAYERED_CONCEPTS.find(c => c.id === selectedConceptId) || LAYERED_CONCEPTS[0];
  const selectedScript = AUDIO_SCRIPTS.find(s => s.id === selectedScriptId) || AUDIO_SCRIPTS[0];

  // Speech control
  const handlePlayAudio = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("La síntesis de voz no está disponible en este entorno de navegador.");
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(selectedScript.transcript);
    utterance.lang = selectedScript.synthesisConfig.recommendedVoiceLang || "es-ES";
    utterance.rate = speechRate;
    utterance.pitch = speechPitch;

    utterance.onend = () => {
      setIsPlaying(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  const handlePauseAudio = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      if (isPlaying) {
        window.speechSynthesis.pause();
        setIsPlaying(false);
      } else {
        window.speechSynthesis.resume();
        setIsPlaying(true);
      }
    }
  };

  const handleStopAudio = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  const handleCopyTranscript = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleDownloadTranscript = (title: string, text: string) => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = `${title.toLowerCase().replace(/[^a-z0-9]/g, "_")}_transcripcion.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const filteredConcepts = conceptFilter === "all"
    ? LAYERED_CONCEPTS
    : LAYERED_CONCEPTS.filter(c => c.category === conceptFilter);

  return (
    <div className="w-full min-h-screen bg-[#FBF9F5] text-stone-900 px-6 lg:px-12 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="border-b border-stone-200 pb-6 mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-900 uppercase tracking-widest mb-1">
            <span>SECCIÓN 6 · BIBLIOTECA POR CAPAS & SONIDO ACCESIBLE</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 leading-tight">
            Biblioteca de Conceptos por Capas y Locución Sonora
          </h1>
          <p className="mt-2 text-stone-600 text-sm sm:text-base font-sans max-w-3xl leading-relaxed">
            Estructuración del marco teórico en tres niveles de profundidad gradual (comprensión rápida, aplicación práctica en aula y fundamentación con límites científicos) junto a guiones para accesibilidad auditiva.
          </p>

          {/* Sub-navigation tabs */}
          <div className="flex items-center gap-2 mt-6">
            <button
              onClick={() => setActiveTab("concepts")}
              className={`px-4 py-2 rounded text-xs font-medium transition-colors flex items-center gap-2 ${
                activeTab === "concepts"
                  ? "bg-stone-900 text-white shadow-xs"
                  : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>1. Conceptos por Capas (C01 - C06)</span>
            </button>
            <button
              onClick={() => setActiveTab("audio")}
              className={`px-4 py-2 rounded text-xs font-medium transition-colors flex items-center gap-2 ${
                activeTab === "audio"
                  ? "bg-stone-900 text-white shadow-xs"
                  : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
              }`}
            >
              <Headphones className="w-3.5 h-3.5" />
              <span>2. Guiones Sonoros Accesibles (A01 - A03)</span>
            </button>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* SUB-VIEW 1: LAYERED CONCEPTS */}
        {/* ========================================================================= */}
        {activeTab === "concepts" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
            {/* Left Concept Selection Rail */}
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-stone-200 text-xs text-stone-500">
                <span className="font-semibold uppercase tracking-wider">Conceptos DUA-DIG</span>
                <span>{filteredConcepts.length} activos</span>
              </div>

              <div className="space-y-1.5">
                {LAYERED_CONCEPTS.map((concept) => (
                  <button
                    key={concept.id}
                    onClick={() => setSelectedConceptId(concept.id)}
                    className={`w-full text-left p-3 rounded-lg border transition-all flex flex-col gap-1 text-xs font-sans ${
                      selectedConceptId === concept.id
                        ? "bg-white border-stone-900 shadow-xs ring-1 ring-stone-900"
                        : "bg-white/60 border-stone-200 hover:border-stone-400"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-amber-900">{concept.code}</span>
                      <span className="text-[11px] text-stone-400">{concept.category}</span>
                    </div>
                    <span className="font-serif font-semibold text-stone-900 text-sm">{concept.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Concept Layer Card */}
            <div className="lg:col-span-8 bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-stone-400 mb-1">
                  <span>{selectedConcept.code}</span>
                  <span>·</span>
                  <span>{selectedConcept.category}</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-stone-900">
                  {selectedConcept.name}
                </h2>
              </div>

              {/* Layer Selection Pill Tabs */}
              <div>
                <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block mb-2">
                  Selecciona la capa de profundidad:
                </span>
                <div className="grid grid-cols-3 gap-2 p-1 bg-stone-100 rounded-lg text-xs font-sans">
                  <button
                    onClick={() => setActiveLayer(1)}
                    className={`py-2 px-3 rounded-md transition-all font-medium text-center ${
                      activeLayer === 1
                        ? "bg-white text-stone-950 shadow-xs"
                        : "text-stone-600 hover:text-stone-900"
                    }`}
                  >
                    Capa 1: En una frase
                  </button>
                  <button
                    onClick={() => setActiveLayer(2)}
                    className={`py-2 px-3 rounded-md transition-all font-medium text-center ${
                      activeLayer === 2
                        ? "bg-white text-stone-950 shadow-xs"
                        : "text-stone-600 hover:text-stone-900"
                    }`}
                  >
                    Capa 2: Aplicación didáctica
                  </button>
                  <button
                    onClick={() => setActiveLayer(3)}
                    className={`py-2 px-3 rounded-md transition-all font-medium text-center ${
                      activeLayer === 3
                        ? "bg-white text-stone-950 shadow-xs"
                        : "text-stone-600 hover:text-stone-900"
                    }`}
                  >
                    Capa 3: Fundamento y límites
                  </button>
                </div>
              </div>

              {/* Layer Content Presentation */}
              <div className="pt-2">
                {activeLayer === 1 && (
                  <div className="p-5 bg-amber-50/50 border border-amber-200/80 rounded-lg space-y-2 animate-fadeIn">
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-900 font-semibold block">
                      CAPA 1 · SÍNTESIS OPERATIVA EN UNA FRASE
                    </span>
                    <p className="font-serif text-lg text-stone-900 leading-relaxed">
                      «{selectedConcept.layer1}»
                    </p>
                    <p className="text-xs text-stone-500 pt-2 border-t border-amber-200/50">
                      Útil para recordar el principio clave en la planificación semanal del aula.
                    </p>
                  </div>
                )}

                {activeLayer === 2 && (
                  <div className="p-5 bg-[#FBF9F5] border border-stone-200 rounded-lg space-y-4 animate-fadeIn text-xs sm:text-sm font-sans">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold block mb-1">
                        CAPA 2 · EXPLICACIÓN CONTEXTUALIZADA
                      </span>
                      <p className="text-stone-800 leading-relaxed">
                        {selectedConcept.layer2.explanation}
                      </p>
                    </div>

                    <div className="p-3.5 bg-white border border-stone-200 rounded">
                      <strong className="text-stone-900 block mb-1">Ejemplo concreto en aula de Primaria:</strong>
                      <p className="text-stone-700 italic">{selectedConcept.layer2.classroomExample}</p>
                    </div>
                  </div>
                )}

                {activeLayer === 3 && (
                  <div className="p-5 bg-stone-50 border border-stone-200 rounded-lg space-y-4 animate-fadeIn text-xs sm:text-sm font-sans">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold block mb-1">
                        CAPA 3 · FUNDAMENTACIÓN ACADÉMICA
                      </span>
                      <p className="text-stone-800 leading-relaxed">
                        {selectedConcept.layer3.academicFoundation}
                      </p>
                    </div>

                    <div className="p-3.5 bg-red-50/60 border border-red-200 rounded text-red-950">
                      <strong className="block mb-1">Límites científicos y advertencias de uso:</strong>
                      <p className="text-red-900">{selectedConcept.layer3.scientificLimits}</p>
                    </div>

                    <div className="pt-2 text-stone-500 font-mono text-xs">
                      <strong>Referencia canónica:</strong> {selectedConcept.layer3.keyReference}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SUB-VIEW 2: ACCESSIBLE AUDIO SCRIPTS */}
        {/* ========================================================================= */}
        {activeTab === "audio" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
            {/* Script Selection Rail */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block pb-2 border-b border-stone-200">
                Guiones para Síntesis Sonora
              </span>

              <div className="space-y-2">
                {AUDIO_SCRIPTS.map((script) => (
                  <button
                    key={script.id}
                    onClick={() => {
                      setSelectedScriptId(script.id);
                      handleStopAudio();
                    }}
                    className={`w-full text-left p-3.5 rounded-lg border transition-all flex flex-col gap-1 text-xs font-sans ${
                      selectedScriptId === script.id
                        ? "bg-white border-stone-900 shadow-xs ring-1 ring-stone-900"
                        : "bg-white/60 border-stone-200 hover:border-stone-400"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-amber-900">{script.code}</span>
                      <span className="text-stone-400">{script.durationEstimate}</span>
                    </div>
                    <span className="font-serif font-semibold text-stone-900 text-sm">{script.title}</span>
                    <span className="text-stone-500 text-[11px] line-clamp-1">{script.targetAudience}</span>
                  </button>
                ))}
              </div>

              {!speechSupported && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded text-xs text-amber-900 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
                  <span>Tu navegador no tiene activado el motor de síntesis de voz, pero puedes leer o descargar las transcripciones completas.</span>
                </div>
              )}
            </div>

            {/* Audio Player and Full Transcript */}
            <div className="lg:col-span-8 bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-stone-200 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-stone-400 mb-1">
                    <span>{selectedScript.code}</span>
                    <span>·</span>
                    <span>{selectedScript.durationEstimate}</span>
                    <span>·</span>
                    <span>{selectedScript.wordCount} palabras</span>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-stone-900">
                    {selectedScript.title}
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">{selectedScript.targetAudience}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyTranscript(selectedScript.transcript, selectedScript.id)}
                    className="p-2 border border-stone-300 rounded text-stone-700 hover:bg-stone-50 text-xs flex items-center gap-1.5"
                    title="Copiar transcripción"
                  >
                    {copiedId === selectedScript.id ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === selectedScript.id ? "Copiado" : "Copiar"}</span>
                  </button>
                  <button
                    onClick={() => handleDownloadTranscript(selectedScript.title, selectedScript.transcript)}
                    className="p-2 border border-stone-300 rounded text-stone-700 hover:bg-stone-50 text-xs flex items-center gap-1.5"
                    title="Descargar archivo TXT"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Descargar TXT</span>
                  </button>
                </div>
              </div>

              {/* Player Controls Bar */}
              <div className="p-4 bg-stone-100 rounded-lg flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  {!isPlaying ? (
                    <button
                      onClick={handlePlayAudio}
                      className="px-4 py-2 bg-stone-900 text-white rounded text-xs font-medium hover:bg-stone-800 transition-colors flex items-center gap-2 shadow-xs"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>Reproducir Locución</span>
                    </button>
                  ) : (
                    <button
                      onClick={handlePauseAudio}
                      className="px-4 py-2 bg-amber-900 text-white rounded text-xs font-medium hover:bg-amber-800 transition-colors flex items-center gap-2 shadow-xs"
                    >
                      <Pause className="w-3.5 h-3.5" />
                      <span>Pausar</span>
                    </button>
                  )}

                  <button
                    onClick={handleStopAudio}
                    disabled={!isPlaying}
                    className="p-2 border border-stone-300 rounded text-stone-700 hover:bg-stone-200 disabled:opacity-40 text-xs"
                    title="Detener locución"
                  >
                    <Square className="w-3.5 h-3.5 fill-stone-700" />
                  </button>
                </div>

                {/* Speed Controls */}
                <div className="flex items-center gap-4 text-xs font-sans text-stone-600">
                  <div className="flex items-center gap-2">
                    <span>Velocidad:</span>
                    <select
                      value={speechRate}
                      onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                      className="p-1 bg-white border border-stone-300 rounded text-xs text-stone-800"
                    >
                      <option value="0.8">0.8x (Lento y claro)</option>
                      <option value="0.95">0.95x (Recomendado)</option>
                      <option value="1.0">1.0x (Estándar)</option>
                      <option value="1.15">1.15x (Rápido)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Verified Text Transcript */}
              <div className="p-6 bg-[#FBF9F5] border border-stone-200 rounded-lg">
                <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-3">
                  TRANSCRIPCIÓN COMPLETA ACCESIBLE (WCAG 2.2 AA)
                </span>
                <p className="font-serif text-lg text-stone-900 leading-relaxed italic">
                  «{selectedScript.transcript}»
                </p>
              </div>

              <div className="text-xs text-stone-500 font-sans flex items-center justify-between">
                <span>Voz: Español neutro / Sintetizador nativo</span>
                <span>Sin marcas publicitarias de proveedor</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
