/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Módulo: Dos Estructuras, Áreas Nuevas, Integración en Moodle y Herramientas Digitales
 * Documentos:
 * - DUA_DIG_Dos_estructuras_y_areas_nuevas.docx
 * - DUA_DIG_Dos_Respuestas_Completas_Herramientas_y_Moodle (2).docx
 * - Inventario de los 11 documentos de trabajo del equipo EduDIG / USAL.
 */

import React, { useState } from "react";
import { 
  DOCUMENT_FILES_INVENTORY, 
  InternalDocumentFile,
  PORTAL_STRUCTURES, 
  NEW_THEMATIC_AREAS, 
  MOODLE_DUA_GUIDELINES, 
  DIGITAL_TOOLS_EVALUATION 
} from "../data/dossierData";
import { 
  FileText, 
  Layers, 
  Server, 
  CheckCircle2, 
  ShieldCheck, 
  AlertTriangle, 
  Laptop, 
  ExternalLink, 
  FolderOpen, 
  Download,
  Filter,
  Check,
  Building,
  SlidersHorizontal
} from "lucide-react";

interface MoodleAndStructuresViewProps {
  onOpenPdfModal: () => void;
}

export const MoodleAndStructuresView: React.FC<MoodleAndStructuresViewProps> = ({ onOpenPdfModal }) => {
  const [activeTab, setActiveTab] = useState<"docs" | "structures" | "moodle" | "tools">("docs");
  const [selectedStructure, setSelectedStructure] = useState<number>(1); // 1 = Estructura B (Recomendada)
  const [filterToolCategory, setFilterToolCategory] = useState<string>("all");
  const [selectedDoc, setSelectedDoc] = useState<InternalDocumentFile | null>(null);

  const filteredTools = filterToolCategory === "all"
    ? DIGITAL_TOOLS_EVALUATION
    : DIGITAL_TOOLS_EVALUATION.filter(t => t.keyboardAccessibility.includes(filterToolCategory) || t.rgpdSchoolRating.includes(filterToolCategory));

  return (
    <div className="w-full min-h-screen bg-[#FBF9F5] text-stone-900 px-6 lg:px-12 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="border-b border-stone-200 pb-6 mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-900 uppercase tracking-widest mb-1">
            <span>DOCUMENTACIÓN INTERNA DE TRABAJO · GRUPO EDUDIG · USAL</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 leading-tight">
            Dos Estructuras, Nuevas Áreas, Moodle y Herramientas Digitales
          </h1>
          <p className="mt-2 text-stone-600 text-sm sm:text-base font-sans max-w-3xl leading-relaxed">
            Consolidación integral de los documentos clave del proyecto: comparación de las dos arquitecturas de información, protocolo técnico para Moodle (EVA) y matriz de evaluación DUA de herramientas de autor.
          </p>

          {/* Sub Navigation */}
          <div className="flex flex-wrap items-center gap-2 mt-6">
            <button
              onClick={() => setActiveTab("docs")}
              className={`px-3.5 py-2 rounded text-xs font-medium transition-colors flex items-center gap-2 ${
                activeTab === "docs" ? "bg-stone-900 text-white" : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
              }`}
            >
              <FolderOpen className="w-3.5 h-3.5" />
              <span>1. Archivos Originales (11 Documentos)</span>
            </button>
            <button
              onClick={() => setActiveTab("structures")}
              className={`px-3.5 py-2 rounded text-xs font-medium transition-colors flex items-center gap-2 ${
                activeTab === "structures" ? "bg-stone-900 text-white" : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>2. Dos Estructuras & 3 Áreas Nuevas</span>
            </button>
            <button
              onClick={() => setActiveTab("moodle")}
              className={`px-3.5 py-2 rounded text-xs font-medium transition-colors flex items-center gap-2 ${
                activeTab === "moodle" ? "bg-stone-900 text-white" : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
              }`}
            >
              <Server className="w-3.5 h-3.5" />
              <span>3. Respuesta 1: Integración en Moodle</span>
            </button>
            <button
              onClick={() => setActiveTab("tools")}
              className={`px-3.5 py-2 rounded text-xs font-medium transition-colors flex items-center gap-2 ${
                activeTab === "tools" ? "bg-stone-900 text-white" : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span>4. Respuesta 2: Matriz de Herramientas DUA</span>
            </button>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* TAB 1: INVENTARIO DE DOCUMENTOS ORIGINALES */}
        {/* ========================================================================= */}
        {activeTab === "docs" && (
          <div className="space-y-8 animate-fadeIn font-sans text-xs sm:text-sm">
            {/* Visual Evidence from User */}
            <div className="p-6 bg-white border border-stone-200 rounded-xl shadow-xs grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-5">
                <figure className="border border-stone-300 rounded-lg overflow-hidden bg-stone-50">
                  <img
                    src="/public/assets/aistudio/image_6d8acc13.png"
                    alt="Lista de documentos Word originales del proyecto DUA-DIG USAL"
                    className="w-full object-contain max-h-72"
                  />
                  <figcaption className="p-2.5 text-[11px] text-stone-500 bg-stone-100 border-t border-stone-200">
                    <strong>Captura de trabajo:</strong> Carpeta de documentos Word del equipo científico.
                  </figcaption>
                </figure>
              </div>

              <div className="md:col-span-7 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-amber-900 font-semibold block">
                  MAPEO Y CONSOLIDACIÓN DE ARCHIVOS
                </span>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Los 11 Documentos de Trabajo del Proyecto DUA-DIG
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Cada archivo identificado en la imagen del equipo ha sido analizado, integrado y vinculado a su capítulo correspondiente del Dossier Maestro. Haz clic en cualquiera de ellos para <strong>leer su síntesis operativa completa, citas textuales y directrices prácticas</strong>.
                </p>
                <div className="p-3 bg-stone-50 rounded border border-stone-200 text-xs text-stone-700">
                  <strong>Estado de integración:</strong> 11 de 11 documentos totalmente operativos en el dossier y las herramientas interactivas.
                </div>
              </div>
            </div>

            {/* Document Cards Grid */}
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-stone-200 text-xs text-stone-500 font-sans">
                <span className="font-semibold uppercase tracking-wider">Documentos disponibles ({DOCUMENT_FILES_INVENTORY.length})</span>
                <span>Haz clic en un archivo para abrir su visor completo</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {DOCUMENT_FILES_INVENTORY.map((doc, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedDoc(doc)}
                    className="p-4 bg-white border border-stone-200 rounded-lg hover:border-stone-500 hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="font-mono text-[11px] text-stone-400 font-semibold">DOC #{idx + 1}</span>
                        <span className="text-[11px] text-amber-900 font-medium bg-amber-50 px-2 py-0.5 rounded">
                          {doc.sectionMapped}
                        </span>
                      </div>
                      <h4 className="font-serif font-bold text-stone-900 text-base group-hover:text-amber-950 transition-colors flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-stone-500 shrink-0" />
                        <span>{doc.fileName}</span>
                      </h4>
                      <p className="text-stone-600 text-xs mt-2 line-clamp-2 leading-relaxed">
                        {doc.keyContributions}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-stone-800 group-hover:text-stone-950">
                      <span>Ver contenido íntegro y directrices</span>
                      <span className="text-amber-900 font-bold">→</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Document Reader Modal */}
            {selectedDoc && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs no-print">
                <div className="w-full max-w-3xl bg-[#FBF9F5] border border-stone-300 rounded-xl shadow-2xl overflow-hidden animate-fadeIn max-h-[85vh] flex flex-col">
                  {/* Modal Header */}
                  <div className="px-6 py-4 bg-white border-b border-stone-200 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-amber-900" />
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 block">
                          DOCUMENTO DE TRABAJO · GRUPO EDUDIG
                        </span>
                        <h3 className="font-serif text-lg font-bold text-stone-900">
                          {selectedDoc.fileName}
                        </h3>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedDoc(null)}
                      className="p-1.5 rounded-md text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Modal Scrollable Content */}
                  <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm font-sans text-stone-700 flex-1">
                    {/* Metadata tags */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                      <span className="px-2 py-0.5 bg-stone-100 rounded text-stone-700 font-medium">
                        Categoría: {selectedDoc.topicCategory}
                      </span>
                      <span>·</span>
                      <span className="px-2 py-0.5 bg-amber-50 rounded text-amber-900 font-semibold">
                        Capítulo Mapeado: {selectedDoc.sectionMapped}
                      </span>
                    </div>

                    {/* Digest */}
                    <div className="space-y-3">
                      <span className="font-mono text-xs uppercase tracking-wider text-stone-500 font-semibold block">
                        SÍNTESIS OPERATIVA ÍNTEGRA DEL DOCUMENTO
                      </span>
                      {selectedDoc.fullTextDigest.map((paragraph, pIdx) => (
                        <p key={pIdx} className="text-stone-800 leading-relaxed text-xs sm:text-sm">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Key Quotes */}
                    <div className="p-4 bg-white border border-stone-200 rounded-lg space-y-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-amber-900 font-semibold block">
                        CITAS TEXTUALES Y ARGUMENTOS CANÓNICOS
                      </span>
                      {selectedDoc.keyQuotes.map((quote, qIdx) => (
                        <blockquote key={qIdx} className="font-serif italic text-stone-800 border-l-2 border-stone-400 pl-3 my-1">
                          {quote}
                        </blockquote>
                      ))}
                    </div>

                    {/* Practical Directives */}
                    <div className="p-4 bg-stone-100 border border-stone-200 rounded-lg space-y-2">
                      <strong className="text-stone-900 block text-xs uppercase tracking-wider font-mono">
                        DIRECTRICES PRÁCTICAS PARA EL EQUIPO USAL
                      </strong>
                      <ul className="list-disc list-inside space-y-1 text-stone-700 text-xs">
                        {selectedDoc.practicalDirectives.map((dir, dIdx) => (
                          <li key={dIdx}>{dir}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="p-4 bg-white border border-stone-200 rounded-lg space-y-2">
                      <strong className="text-stone-900 block text-xs uppercase tracking-wider font-mono">
                        ENTREGABLES Y PRODUCTOS DERIVADOS
                      </strong>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {selectedDoc.targetDeliverables.map((deliv, delivIdx) => (
                          <span key={delivIdx} className="px-2.5 py-1 bg-stone-50 border border-stone-200 rounded text-stone-700 text-xs">
                            ✓ {deliv}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Modal Footer */}
                  <div className="px-6 py-3.5 bg-white border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 shrink-0 text-xs">
                    <button
                      onClick={() => {
                        const contentToCopy = `${selectedDoc.fileName}\n\n${selectedDoc.fullTextDigest.join("\n\n")}\n\nCitas:\n${selectedDoc.keyQuotes.join("\n")}`;
                        navigator.clipboard.writeText(contentToCopy);
                        alert(`Contenido de ${selectedDoc.fileName} copiado al portapapeles.`);
                      }}
                      className="px-3 py-1.5 border border-stone-300 rounded text-stone-700 hover:bg-stone-50 font-medium"
                    >
                      Copiar Contenido al Portapapeles
                    </button>
                    <button
                      onClick={() => setSelectedDoc(null)}
                      className="px-4 py-1.5 bg-stone-900 text-white rounded font-medium hover:bg-stone-800"
                    >
                      Cerrar Visor
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: DOS ESTRUCTURAS & 3 ÁREAS NUEVAS */}
        {/* ========================================================================= */}
        {activeTab === "structures" && (
          <div className="space-y-8 animate-fadeIn font-sans text-xs sm:text-sm">
            <header className="border-b border-stone-200 pb-4">
              <span className="font-mono text-xs text-amber-900 font-semibold uppercase block mb-1">
                DOCUMENTO: DUA_DIG_Dos_estructuras_y_areas_nuevas.docx
              </span>
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Comparativa de las Dos Estructuras del Portal
              </h2>
              <p className="text-xs text-stone-600 mt-1">
                Análisis de la arquitectura curricular clásica frente a la arquitectura orientada a la economía de tiempo docente.
              </p>
            </header>

            {/* Structures Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PORTAL_STRUCTURES.map((struct, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedStructure(idx)}
                  className={`p-6 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    selectedStructure === idx
                      ? "bg-white border-stone-900 shadow-sm ring-1 ring-stone-900"
                      : "bg-white/70 border-stone-200 hover:border-stone-400"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-amber-900">
                        OPCIÓN {idx === 0 ? "A" : "B"}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                        idx === 1 ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-600"
                      }`}>
                        {idx === 1 ? "Recomendada (Activa)" : "Secundaria"}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-stone-900">
                      {struct.structureType}
                    </h3>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {struct.philosophicalBasis}
                    </p>

                    <div className="p-3 bg-stone-50 rounded border border-stone-200">
                      <strong className="text-stone-800 block text-xs mb-1.5">Navegación principal:</strong>
                      <ul className="space-y-1 text-xs text-stone-700">
                        {struct.primaryNavigation.map((nav, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                            <span>{nav}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-1 text-xs">
                      <p><strong className="text-emerald-900">Punto fuerte:</strong> {struct.strengths[0]}</p>
                      <p><strong className="text-stone-800">Riesgo evitado:</strong> {struct.risksAvoided}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 text-xs font-medium text-stone-500">
                    Rol en el portal: {struct.recommendedRole}
                  </div>
                </div>
              ))}
            </div>

            {/* The 3 New Areas */}
            <div className="pt-6">
              <span className="font-mono text-xs uppercase tracking-wider text-stone-500 font-semibold block mb-3">
                LAS 3 NUEVAS ÁREAS DE CONTENIDO PROPUESTAS EN EL PROYECTO
              </span>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {NEW_THEMATIC_AREAS.map((area) => (
                  <div key={area.id} className="p-5 bg-white border border-stone-200 rounded-lg shadow-xs space-y-3">
                    <h4 className="font-serif text-lg font-bold text-stone-900">{area.title}</h4>
                    <p className="text-stone-500 text-[11px] font-sans">
                      <strong>Destinatarios:</strong> {area.targetAudience}
                    </p>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {area.description}
                    </p>
                    <div className="p-2.5 bg-[#FBF9F5] rounded border border-stone-200 text-xs">
                      <strong className="text-stone-800 block mb-1">Entregables tangibles:</strong>
                      <ul className="list-disc list-inside space-y-0.5 text-stone-600 text-[11px]">
                        {area.practicalDeliverables.map((deliv, i) => (
                          <li key={i}>{deliv}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: RESPUESTA 1 - INTEGRACIÓN EN MOODLE */}
        {/* ========================================================================= */}
        {activeTab === "moodle" && (
          <div className="space-y-8 animate-fadeIn font-sans text-xs sm:text-sm">
            <header className="border-b border-stone-200 pb-4">
              <span className="font-mono text-xs text-amber-900 font-semibold uppercase block mb-1">
                DOCUMENTO: DUA_DIG_Dos_Respuestas_Completas_Herramientas_y_Moodle (2).docx
              </span>
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Respuesta Completa 1: Protocolo de Integración en Moodle y EVA
              </h2>
              <p className="text-xs text-stone-600 mt-1">
                Pautas técnicas para configurar aulas virtuales accesibles (Educacyl Moodle, Campus USAL) sin excluir a ningún estudiante.
              </p>
            </header>

            {/* Moodle Guidelines List */}
            <div className="space-y-4">
              {MOODLE_DUA_GUIDELINES.map((guide) => (
                <div key={guide.stepNumber} className="p-5 bg-white border border-stone-200 rounded-lg shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-amber-900 text-xs">{guide.stepNumber}</span>
                      <h3 className="font-serif text-lg font-semibold text-stone-900">{guide.title}</h3>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-stone-100 text-stone-700">
                      Principio DUA: {guide.duaPrinciple}
                    </span>
                  </div>

                  <div className="p-3 bg-[#FBF9F5] border border-stone-200 rounded text-xs space-y-1">
                    <p className="text-stone-900">
                      <strong>Configuración técnica en Moodle:</strong> {guide.moodleSetting}
                    </p>
                    <p className="text-stone-600 pt-1">
                      <strong>Fundamento pedagógico:</strong> {guide.pedagogicalRationale}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Moodle Pack Download Banner */}
            <div className="p-5 bg-stone-100 border border-stone-300 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <strong className="text-stone-900 block text-sm">Paquete Modelo Moodle DUA-DIG (.mbz)</strong>
                <p className="text-xs text-stone-600 mt-0.5">
                  Incluye curso tipo con 5 tareas multimodales, 3 paquetes H5P accesibles y rúbricas importables.
                </p>
              </div>
              <button
                onClick={() => alert("Descarga simulada de plantilla de curso Moodle DUA-DIG (.mbz)")}
                className="px-4 py-2 bg-stone-900 text-white rounded text-xs font-medium hover:bg-stone-800 transition-colors flex items-center gap-1.5 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Descargar Curso .mbz (18.4 MB)</span>
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: RESPUESTA 2 - MATRIZ DE HERRAMIENTAS DUA */}
        {/* ========================================================================= */}
        {activeTab === "tools" && (
          <div className="space-y-6 animate-fadeIn font-sans text-xs sm:text-sm">
            <header className="border-b border-stone-200 pb-4">
              <span className="font-mono text-xs text-amber-900 font-semibold uppercase block mb-1">
                DOCUMENTO: DUA_DIG_Dos_Respuestas_Completas_Herramientas_y_Moodle (2).docx
              </span>
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Respuesta Completa 2: Matriz de Evaluación DUA de Herramientas de Autor
              </h2>
              <p className="text-xs text-stone-600 mt-1">
                Evaluación crítica de software común en escuelas según soberanía de datos (RGPD), accesibilidad por teclado y sobrecarga cognitiva.
              </p>
            </header>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredTools.map((tool) => (
                <div key={tool.id} className="p-5 bg-white border border-stone-200 rounded-lg shadow-xs space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-stone-900">{tool.toolName}</h3>
                      <span className="text-stone-500 text-xs">{tool.category}</span>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                      tool.rgpdSchoolRating.includes("Excelente")
                        ? "bg-emerald-100 text-emerald-900"
                        : tool.rgpdSchoolRating.includes("Aceptable")
                        ? "bg-amber-100 text-amber-900"
                        : "bg-red-100 text-red-900"
                    }`}>
                      {tool.rgpdSchoolRating}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs text-stone-700">
                    <p><strong>Accesibilidad por teclado:</strong> {tool.keyboardAccessibility}</p>
                    <p><strong>Vías de representación/respuesta:</strong> {tool.duaModalitySupport}</p>
                    <p>
                      <strong>Sobrecarga cognitiva:</strong>{" "}
                      <span className={tool.distractionLevel.includes("Alto") ? "text-red-900 font-medium" : "text-stone-700"}>
                        {tool.distractionLevel}
                      </span>
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-100 text-xs text-stone-600 italic">
                    {tool.recommendedClassroomUse}
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
