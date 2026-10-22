/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (4-5 single-line links) — Zone 3 (1 primary CTA)
 */

import React from "react";
import { Printer, FileText } from "lucide-react";

export type ActiveTab = "dossier" | "prototype" | "socratic" | "concepts" | "moodle" | "candidacy";

interface HeaderProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  onOpenPdfModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange, onOpenPdfModal }) => {
  return (
    <header className="no-print sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-stone-200/80 px-6 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark in display serif face */}
        <button
          onClick={() => onTabChange("dossier")}
          className="text-left font-serif text-xl tracking-tight font-semibold text-stone-900 hover:text-stone-700 transition-colors whitespace-nowrap shrink-0"
        >
          DUA-DIG <span className="font-sans text-xs tracking-normal font-normal text-stone-500">· USAL</span>
        </button>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          <button
            onClick={() => onTabChange("dossier")}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
              activeTab === "dossier"
                ? "text-stone-950 border-stone-900 font-semibold"
                : "border-transparent text-stone-600 hover:text-stone-900"
            }`}
          >
            Dossier Maestro
          </button>
          <button
            onClick={() => onTabChange("prototype")}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
              activeTab === "prototype"
                ? "text-stone-950 border-stone-900 font-semibold"
                : "border-transparent text-stone-600 hover:text-stone-900"
            }`}
          >
            Rediseño 4 Pantallas
          </button>
          <button
            onClick={() => onTabChange("socratic")}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
              activeTab === "socratic"
                ? "text-stone-950 border-stone-900 font-semibold"
                : "border-transparent text-stone-600 hover:text-stone-900"
            }`}
          >
            «Del Caso al Aula»
          </button>
          <button
            onClick={() => onTabChange("concepts")}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
              activeTab === "concepts"
                ? "text-stone-950 border-stone-900 font-semibold"
                : "border-transparent text-stone-600 hover:text-stone-900"
            }`}
          >
            Conceptos & Voz
          </button>
          <button
            onClick={() => onTabChange("moodle")}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
              activeTab === "moodle"
                ? "text-stone-950 border-stone-900 font-semibold"
                : "border-transparent text-stone-600 hover:text-stone-900"
            }`}
          >
            Moodle & Estructuras
          </button>
          <button
            onClick={() => onTabChange("candidacy")}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
              activeTab === "candidacy"
                ? "text-stone-950 border-stone-900 font-semibold"
                : "border-transparent text-stone-600 hover:text-stone-900"
            }`}
          >
            Matriz & Convocatoria
          </button>
        </nav>

        {/* Zone 3: 1 primary action button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenPdfModal}
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-stone-50 bg-stone-900 rounded-md hover:bg-stone-800 transition-colors whitespace-nowrap shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Exportar PDF / Imprimir</span>
          </button>
        </div>
      </div>
    </header>
  );
};
