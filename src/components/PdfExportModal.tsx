/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Modal de Exportación a PDF y Guía de Impresión Profesional
 * Universidad de Salamanca · Proyecto DUA-DIG · Convocatoria 2026/R055/01
 */

import React, { useState } from "react";
import { 
  X, 
  Printer, 
  FileText, 
  Copy, 
  Check, 
  Download, 
  ExternalLink,
  BookOpen,
  CheckCircle2,
  Sliders
} from "lucide-react";
import { DOSSIER_META } from "../data/dossierData";

interface PdfExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfExportModal: React.FC<PdfExportModalProps> = ({ isOpen, onClose }) => {
  const [copiedSuccess, setCopiedSuccess] = useState<boolean>(false);
  const [selectedFormat, setSelectedFormat] = useState<"full_dossier" | "summary" | "classroom_plan">("full_dossier");

  if (!isOpen) return null;

  const handleTriggerPrint = () => {
    window.print();
  };

  const handleCopyTextForDocs = () => {
    const textToCopy = `# DOSSIER MAESTRO INTEGRAL: AUDITORÍA, EVIDENCIA EMPÍRICA Y REDISEÑO DE «RECURSOS DIGITALES DUA-DIG» (USAL)
Universidad de Salamanca · Grupo de Investigación EduDIG · Proyecto DUA-DIG
Convocatoria vinculada: 2026/R055/01 · Fecha de consolidación: 21 de octubre de 2026

Dirección científica:
- Dra. Ana García-Valcárcel Muñoz-Repiso
- Dra. Sonia Casillas Martín
- Dr. Marcos Cabezas González
- Dra. Verónica Basilotta Gómez-Pablos

ÍNDICE GENERAL:
1. Marco Institucional y Finalidad del Portal
2. Fundamentación Empírica y Cuantificación de Barreras Docentes
3. Auditoría Crítica del Sitio Actual y Accesibilidad (WCAG 2.2 AA)
4. Arquitectura de Información y Rediseño de las 4 Pantallas Clave
5. Capa Pedagógica y Orientador: «Del Caso al Aula»
6. Biblioteca de Conceptos por Capas y Guiones Sonoros
7. Línea de Investigación Avanzada: MCR, Mente Extendida e IA
8. Matriz de los 10 Cambios Prioritarios y Plan de Validación
9. Preparación de Candidatura y Tareas del Puesto (Convocatoria USAL)
10. Preguntas Bloqueantes para el Equipo Técnico y Científico
11. Dos Estructuras y Tres Nuevas Áreas del Portal
12. Entornos Moodle (Educacyl) y Catálogo Crítico de Herramientas de Autor
13. Protocolo de Evaluación Formativa Inclusiva (DUA_DIG_Protocolo_Evaluación_Formativa)
14. Hoja de Ruta de Transferencia Pedagógica y Escalabilidad (DUA_DIG_Hoja_Ruta_Transferencia_Pedagógica)
`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs no-print">
      <div className="w-full max-w-2xl bg-[#FBF9F5] border border-stone-300 rounded-xl shadow-2xl overflow-hidden animate-fadeIn">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-white border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Printer className="w-4 h-4 text-stone-800" />
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Exportación Oficial a Documento PDF
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 text-xs sm:text-sm font-sans text-stone-700 max-h-[80vh] overflow-y-auto">
          {/* Format selection */}
          <div>
            <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold block mb-2">
              Selecciona el alcance del documento a imprimir:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() => setSelectedFormat("full_dossier")}
                className={`p-3 rounded-lg border text-left transition-all ${
                  selectedFormat === "full_dossier"
                    ? "bg-white border-stone-900 shadow-xs ring-1 ring-stone-900 text-stone-900 font-medium"
                    : "bg-white/60 border-stone-200 text-stone-600 hover:bg-white"
                }`}
              >
                <strong className="block text-stone-900">Dossier Maestro</strong>
                <span className="text-[11px] text-stone-500">14 Capítulos completos</span>
              </button>
              <button
                onClick={() => setSelectedFormat("summary")}
                className={`p-3 rounded-lg border text-left transition-all ${
                  selectedFormat === "summary"
                    ? "bg-white border-stone-900 shadow-xs ring-1 ring-stone-900 text-stone-900 font-medium"
                    : "bg-white/60 border-stone-200 text-stone-600 hover:bg-white"
                }`}
              >
                <strong className="block text-stone-900">Matriz & WCAG</strong>
                <span className="text-[11px] text-stone-500">Auditoría y 10 Prioridades</span>
              </button>
              <button
                onClick={() => setSelectedFormat("classroom_plan")}
                className={`p-3 rounded-lg border text-left transition-all ${
                  selectedFormat === "classroom_plan"
                    ? "bg-white border-stone-900 shadow-xs ring-1 ring-stone-900 text-stone-900 font-medium"
                    : "bg-white/60 border-stone-200 text-stone-600 hover:bg-white"
                }`}
              >
                <strong className="block text-stone-900">Ficha de Aula</strong>
                <span className="text-[11px] text-stone-500">1 página operativa</span>
              </button>
            </div>
          </div>

          {/* Option 2: Direct browser print */}
          <div className="p-4 bg-white border border-stone-200 rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
              <Printer className="w-4 h-4 text-stone-700" />
              <span>Opción 1: Impresión Directa a PDF desde el Navegador</span>
            </div>
            <p className="text-xs text-stone-600">
              Genera de inmediato un documento A4 maquetado con encabezados limpios, páginas estructuradas y sin botones de interfaz:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs text-stone-600 pt-1">
              <li>En la ventana de impresión, selecciona <strong>Destino: Guardar como PDF</strong>.</li>
              <li>Activa la casilla <strong>«Gráficos de fondo»</strong> (Background graphics) para conservar contraste en tablas.</li>
              <li>Ajusta márgenes a <strong>«Predeterminado»</strong> o <strong>«Mínimo»</strong>.</li>
            </ul>

            <div className="pt-3">
              <button
                onClick={handleTriggerPrint}
                className="w-full sm:w-auto px-5 py-2 bg-stone-900 text-white rounded text-xs font-semibold hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Abrir Ventana de Impresión (Ctrl + P / Cmd + P)</span>
              </button>
            </div>
          </div>

          {/* Option 1: Copy for Word / Google Docs */}
          <div className="p-4 bg-white border border-stone-200 rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
              <FileText className="w-4 h-4 text-stone-700" />
              <span>Opción 2: Exportar a Google Docs / Microsoft Word</span>
            </div>
            <p className="text-xs text-stone-600">
              Copia el texto estructurado del Dossier al portapapeles para pegarlo en un documento de Google Docs o Microsoft Word y guardarlo como PDF editable:
            </p>

            <div className="pt-2">
              <button
                onClick={handleCopyTextForDocs}
                className="px-4 py-2 border border-stone-300 bg-[#FBF9F5] text-stone-800 rounded text-xs font-medium hover:bg-stone-100 transition-colors flex items-center gap-2"
              >
                {copiedSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                    <span className="text-emerald-800 font-semibold">¡Encabezados del Dossier Copiados al Portapapeles!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Texto Base para Google Docs / Word</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="text-[11px] text-stone-400 font-mono flex items-center justify-between border-t border-stone-200 pt-3">
            <span>{DOSSIER_META.institution} · {DOSSIER_META.callReference}</span>
            <span>Documento Oficial de Transferencia</span>
          </div>
        </div>
      </div>
    </div>
  );
};
