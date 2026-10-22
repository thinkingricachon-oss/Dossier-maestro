/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Lectura Editorial del Dossier Maestro Integral (USAL · EduDIG · DUA-DIG)
 * Tipografía académica, notas al margen, evidencia empírica e inventario completo.
 */

import React, { useState } from "react";
import { 
  DOSSIER_META, 
  SECTIONS, 
  WCAG_AUDIT_DATA, 
  PRIORITY_MATRIX, 
  BLOCKING_QUESTIONS,
  SCIENTIFIC_PAPERS_CORPUS,
  ScientificPaper
} from "../data/dossierData";
import { LAYERED_CONCEPTS, AUDIO_SCRIPTS } from "../data/conceptsAndAudio";
import { 
  BookOpen, 
  CheckCircle2, 
  AlertTriangle, 
  ExternalLink, 
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  Clock,
  Layers,
  Sparkles,
  Server
} from "lucide-react";
import { ActiveTab } from "./Header";
import { 
  PriorityMatrixVisualDiagram, 
  UsalCandidacyPipelineDiagram, 
  McrArchitectureDiagram 
} from "./VisualDiagrams";

interface DossierReaderProps {
  onNavigateToTab: (tab: ActiveTab) => void;
  onOpenPdfModal: () => void;
}

export const DossierReader: React.FC<DossierReaderProps> = ({ onNavigateToTab, onOpenPdfModal }) => {
  const [activeSectionId, setActiveSectionId] = useState<string>("sec-1");
  const [wcagFilter, setWcagFilter] = useState<string>("all");
  const [expandedConcept, setExpandedConcept] = useState<string | null>("c01");
  const [paperFilter, setPaperFilter] = useState<string>("all");
  const [paperSearch, setPaperSearch] = useState<string>("");

  const scrollToSection = (id: string) => {
    setActiveSectionId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const filteredWcag = wcagFilter === "all" 
    ? WCAG_AUDIT_DATA 
    : WCAG_AUDIT_DATA.filter(item => item.currentStatus === wcagFilter);

  const filteredPapers = SCIENTIFIC_PAPERS_CORPUS.filter(p => {
    const matchesAxis = paperFilter === "all" || p.researchAxis === paperFilter;
    const matchesSearch = paperSearch === "" || 
      p.title.toLowerCase().includes(paperSearch.toLowerCase()) ||
      p.authors.some(a => a.toLowerCase().includes(paperSearch.toLowerCase())) ||
      p.journal.toLowerCase().includes(paperSearch.toLowerCase());
    return matchesAxis && matchesSearch;
  });

  return (
    <div className="w-full bg-[#FBF9F5] text-stone-900 pb-28">
      {/* Editorial Document Header & Marquee */}
      <section className="border-b border-stone-200/90 pt-8 pb-12 px-6 lg:px-12 bg-stone-100/40">
        <div className="max-w-6xl mx-auto">
          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-stone-500 uppercase tracking-widest pb-4 border-b border-stone-200/80">
            <span>{DOSSIER_META.institution}</span>
            <span aria-hidden="true">·</span>
            <span>{DOSSIER_META.group}</span>
            <span aria-hidden="true">·</span>
            <span>{DOSSIER_META.callReference}</span>
            <span aria-hidden="true">·</span>
            <span>{DOSSIER_META.consolidationDate}</span>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold tracking-wider uppercase text-amber-900/80 mb-2 block">
                Documento de Trabajo Unificado · Revisión Colegiada y Exportación
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 leading-[1.15] text-balance">
                Dossier Maestro Integral: Auditoría, Evidencia Empírica y Rediseño de «Recursos Digitales DUA-DIG»
              </h1>
              <p className="mt-4 text-base sm:text-lg text-stone-600 font-sans leading-relaxed">
                Proyecto marco: <em>{DOSSIER_META.project}</em>. Convocatoria vinculada 2026/R055/01.
                Facultad de Educación · Departamento de Didáctica, Organización y Métodos de Investigación.
              </p>

              {/* Research Team Credits */}
              <div className="mt-6 pt-5 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-600 font-sans">
                {DOSSIER_META.scientificDirectors.map((director, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-semibold text-stone-800">{director.name}</span>
                    <span className="text-stone-500">{director.role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* University Architectural Anchor Image */}
            <div className="lg:col-span-5">
              <figure className="relative rounded-lg overflow-hidden border border-stone-300/70 shadow-sm bg-white">
                <img
                  src="/src/assets/images/usal_edudig_facultad_educacion_1792594123022.jpg"
                  alt="Instalaciones de investigación en la Universidad de Salamanca, claustro histórico y centro de innovación digital EduDIG"
                  className="w-full h-56 sm:h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
                <figcaption className="p-3 text-xs text-stone-500 font-sans bg-stone-50/90 border-t border-stone-200">
                  <span className="font-medium text-stone-700">Fig. 1 · Sede de Investigación EduDIG:</span> Facultad de Educación, Universidad de Salamanca.
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Quick Operational Index Bar */}
          <div className="mt-10 p-4 rounded-lg bg-white border border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
            <div className="flex items-center gap-2 text-stone-700">
              <BookOpen className="w-4 h-4 text-stone-500" />
              <span className="font-semibold">Índice del Dossier:</span>
              <span className="text-stone-500">10 Capítulos consolidados · 54 referencias y fuentes empíricas</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigateToTab("prototype")}
                className="text-stone-800 hover:text-stone-950 font-medium underline underline-offset-4"
              >
                Ver Prototipo de 4 Pantallas →
              </button>
              <button
                onClick={onOpenPdfModal}
                className="px-3 py-1.5 bg-stone-900 text-white rounded text-xs font-medium hover:bg-stone-800 transition-colors"
              >
                Descargar Versión PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main 2-Column Asymmetric Reading Layout */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Sticky Left Navigation Rail */}
        <aside className="lg:col-span-3 sticky top-20 hidden lg:block text-xs font-sans pr-4 border-r border-stone-200">
          <span className="font-semibold uppercase tracking-wider text-stone-400 block mb-3">
            Estructura del Dossier
          </span>
          <nav className="space-y-1">
            {SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`w-full text-left py-2 px-2.5 rounded transition-all flex items-start gap-2 ${
                  activeSectionId === sec.id
                    ? "bg-stone-200/80 text-stone-900 font-semibold"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-100/80"
                }`}
              >
                <span className="font-mono text-stone-400 shrink-0">{sec.number}</span>
                <span className="line-clamp-2 leading-snug">{sec.title}</span>
              </button>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-stone-200 space-y-3">
            <span className="font-semibold uppercase tracking-wider text-stone-400 block">
              Herramientas Interactivas
            </span>
            <button
              onClick={() => onNavigateToTab("socratic")}
              className="w-full text-left p-2 rounded bg-amber-50/70 border border-amber-200/60 text-amber-900 hover:bg-amber-100/70 transition-colors flex items-center justify-between"
            >
              <span>«Del Caso al Aula»</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigateToTab("concepts")}
              className="w-full text-left p-2 rounded bg-stone-100 border border-stone-200 text-stone-800 hover:bg-stone-200 transition-colors flex items-center justify-between"
            >
              <span>Conceptos & Locución</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigateToTab("candidacy")}
              className="w-full text-left p-2 rounded bg-stone-100 border border-stone-200 text-stone-800 hover:bg-stone-200 transition-colors flex items-center justify-between"
            >
              <span>Matriz 10 Prioridades</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </aside>

        {/* Main Monograph Content */}
        <main className="lg:col-span-9 space-y-16">
          {/* SECTION 1 */}
          <article id="sec-1" className="scroll-mt-24 pt-2 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-400 uppercase tracking-widest mb-2">
              <span>Capítulo 01</span>
              <span>·</span>
              <span>4 min lectura</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900">
              1. Marco Institucional y Finalidad del Portal
            </h2>

            <div className="mt-6 prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-semibold first-letter:float-left first-letter:mr-3 first-letter:text-stone-900">
                El presente dossier unificado y estructurado constituye el documento base de trabajo del equipo técnico y científico vinculado a la <strong>Convocatoria 2026/R055/01</strong> de la Universidad de Salamanca. El proyecto se articula en el seno del Grupo de Investigación en Innovación y Educación Digital (<strong>EduDIG</strong>), adscrito al Departamento de Didáctica, Organización y Métodos de Investigación de la Facultad de Educación.
              </p>

              <div className="p-4 rounded-md bg-stone-100 border border-stone-200 my-4 text-sm">
                <span className="font-semibold text-stone-900 block mb-1">Misión pública documentada (Sección «Quiénes somos»):</span>
                <blockquote className="italic text-stone-700 border-l-2 border-stone-400 pl-3 my-2">
                  «En este espacio nos enfocaremos en compartir recursos, ideas y experiencias relacionadas con el DUA, con el objetivo de ayudar a los maestros de infantil y primaria a crear entornos de aprendizaje inclusivos y equitativos. Esperamos que este sitio se convierta en un punto de encuentro para la comunidad educativa...»
                </blockquote>
              </div>

              <h3 className="font-serif text-xl font-medium text-stone-900 mt-6">
                1.2. Límites de la documentación disponible y alcance real
              </h3>
              <p>
                No se ha localizado públicamente la memoria técnica ni el pliego formal de entregables del proyecto. Por tanto, la web es oficialmente un <strong>repositorio de transferencia y apoyo práctico al profesorado</strong>, no una aplicación interactiva compleja, red social con perfiles o tutor automatizado por inteligencia artificial.
              </p>
            </div>
          </article>

          {/* SECTION 2 */}
          <article id="sec-2" className="scroll-mt-24 pt-2 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-400 uppercase tracking-widest mb-2">
              <span>Capítulo 02</span>
              <span>·</span>
              <span>7 min lectura</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900">
              2. Fundamentación Empírica y Cuantificación de Barreras Docentes
            </h2>

            <div className="mt-6 text-stone-700 leading-relaxed space-y-6">
              <p>
                Cualquier cambio en la interfaz debe sustentarse en datos objetivos y necesidades reales del profesorado de Educación Infantil y Primaria en España, evitando suposiciones sobre supuestos "perfiles psicológicos" del docente.
              </p>

              {/* Data Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-lg bg-white border border-stone-200 shadow-sm">
                  <div className="text-2xl font-serif font-bold text-stone-900 tabular-nums">60 %</div>
                  <div className="text-xs uppercase tracking-wider text-stone-500 mt-1 font-semibold">Sobrecarga administrativa (TALIS 2024)</div>
                  <p className="text-xs text-stone-600 mt-2">
                    Fuente de alto estrés laboral en Primaria (64% en Secundaria). Muestra de 506 centros españoles; tasa de respuesta 94%.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-white border border-stone-200 shadow-sm">
                  <div className="text-2xl font-serif font-bold text-stone-900 tabular-nums">42 %</div>
                  <div className="text-xs uppercase tracking-wider text-stone-500 mt-1 font-semibold">Estrés en preparación de clases</div>
                  <p className="text-xs text-stone-600 mt-2">
                    Los maestros de Primaria imparten una media de <strong>25,4 horas lectivas semanales</strong>, lo que reduce a mínimos el margen de exploración de catálogos confusos.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-white border border-stone-200 shadow-sm">
                  <div className="text-2xl font-serif font-bold text-stone-900 tabular-nums">63,0 %</div>
                  <div className="text-xs uppercase tracking-wider text-stone-500 mt-1 font-semibold">Falta de tiempo para REA (Tosun & Altintas, 2024)</div>
                  <p className="text-xs text-stone-600 mt-2">
                    Junto a la carencia de conocimientos metodológicos (36,2%) y formación insuficiente (34,0%) sobre muestra de N = 503 docentes.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-white border border-stone-200 shadow-sm">
                  <div className="text-2xl font-serif font-bold text-stone-900 tabular-nums">83,2 %</div>
                  <div className="text-xs uppercase tracking-wider text-stone-500 mt-1 font-semibold">Confianza institucional (Baas et al., 2019)</div>
                  <p className="text-xs text-stone-600 mt-2">
                    Priorizan materiales con respaldo de universidades reconocidas como la USAL para reducir la incertidumbre ante el aula.
                  </p>
                </div>
              </div>

              {/* Fig. 2 Classroom Intervention Photo */}
              <figure className="relative rounded-lg overflow-hidden border border-stone-300 shadow-sm bg-white my-6">
                <img
                  src="/src/assets/images/aula_dua_intervencion_primaria_1792597722831.jpg"
                  alt="Aula de Educación Primaria inclusiva con metodología DUA en Castilla y León"
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <figcaption className="p-3 text-xs text-stone-600 font-sans bg-stone-50 border-t border-stone-200">
                  <span className="font-semibold text-stone-800">Fig. 2 · Intervención de Aula Inclusiva DUA en Castilla y León:</span> Dinámicas de aprendizaje colaborativo, rotación por estaciones y andamiajes multimodales en Educación Infantil y Primaria (Grupo EduDIG / Proyecto DUA-DIG).
                </figcaption>
              </figure>

              {/* Tang 2020 Study */}
              <div className="p-4 rounded-md bg-stone-100 border border-stone-200 text-xs sm:text-sm">
                <span className="font-semibold text-stone-900 block mb-2">
                  Dificultades específicas con REA en aula elemental (Tang, 2020; N = 68 docentes):
                </span>
                <ul className="list-disc list-inside space-y-1.5 text-stone-700">
                  <li><strong>39 de 68 docentes:</strong> Graves dificultades para localizar materiales ajustados a sus objetivos reales.</li>
                  <li><strong>42 de 68 docentes:</strong> Preocupación fundada por la calidad pedagógica y rigor del material encontrado.</li>
                  <li><strong>31 de 68 docentes:</strong> Falta de experiencia técnica para adaptar e integrar recursos en sus unidades.</li>
                  <li><strong>16 de 68 docentes:</strong> Bloqueos de páginas o software por cortafuegos distritales e institucionales del centro escolar.</li>
                </ul>
              </div>

              {/* Scientific Demystification */}
              <h3 className="font-serif text-xl font-medium text-stone-900 mt-6">
                2.3. Desmitificación de sesgos y pseudociencias educativas
              </h3>
              <div className="space-y-3 text-sm text-stone-700">
                <div className="p-3 bg-white border border-stone-200 rounded">
                  <span className="font-semibold text-stone-900">Mito de los «Estilos de Aprendizaje» (VAK):</span> Directrices CAST 3.0 y la evidencia cognitiva descartan emparejar la enseñanza con estilos (visual/auditivo/cinestésico). El DUA no categoriza alumnos en cajones estancos; flexibiliza el diseño curricular y derriba barreras del entorno.
                </div>
                <div className="p-3 bg-white border border-stone-200 rounded">
                  <span className="font-semibold text-stone-900">Tipografías clínicas especiales (Kuster et al., 2018):</span> Ensayos controlados demuestran que fuentes como <em>Dyslexie</em> no mejoran la velocidad ni la precisión lectora respecto a fuentes estándar (Arial, Times New Roman, Plus Jakarta Sans).
                </div>
                <div className="p-3 bg-white border border-stone-200 rounded">
                  <span className="font-semibold text-stone-900">Efecto de detalles seductores (Metaanálisis 2026; 50 estudios):</span> La ornamentación visual o sonora irrelevante distrae, sobrecarga la memoria de trabajo y penaliza el aprendizaje. El portal debe huir de estéticas infantiles recargadas.
                </div>
              </div>

              {/* 2.4. Corpus Científico y Evidencia Empírica Publicada */}
              <div className="mt-8 pt-6 border-t border-stone-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-amber-900 font-semibold block">
                      PRODUCCIÓN CIENTÍFICA INDEXADA (JCR / SCOPUS / FECYT)
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                      2.4. Corpus de Investigación del Equipo EduDIG / USAL
                    </h3>
                    <p className="text-xs text-stone-600 mt-0.5">
                      17 publicaciones de impacto lideradas por la Dra. Ana García-Valcárcel, Dra. Sonia Casillas, Dr. Marcos Cabezas y Dra. Verónica Basilotta.
                    </p>
                  </div>

                  {/* Search and filter controls */}
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Buscar en el corpus..."
                      value={paperSearch}
                      onChange={(e) => setPaperSearch(e.target.value)}
                      className="px-3 py-1.5 border border-stone-300 rounded text-xs bg-white focus:outline-stone-900"
                    />
                  </div>
                </div>

                {/* Filter Axis Buttons */}
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {[
                    { id: "all", label: "Todos los Artículos (17)" },
                    { id: "Competencia Digital y Evaluación", label: "Evaluación & ECODIES" },
                    { id: "Metodologías Activas y DUA", label: "DUA & Metodologías Activas" },
                    { id: "Inteligencia Artificial y Educación", label: "IA & Búsqueda Crítica" },
                    { id: "Formación Docente y Neuroeducación", label: "Docencia & Neuroeducación" },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => setPaperFilter(btn.id)}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        paperFilter === btn.id
                          ? "bg-stone-900 text-white font-medium"
                          : "bg-white border border-stone-300 text-stone-700 hover:bg-stone-50"
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>

                {/* Papers List */}
                <div className="space-y-3 font-sans text-xs">
                  {filteredPapers.map((paper) => (
                    <div
                      key={paper.id}
                      className="p-4 bg-white border border-stone-200 rounded-lg shadow-xs hover:border-stone-400 transition-all space-y-2"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-mono text-[11px] font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                              {paper.year}
                            </span>
                            <span className="font-mono text-[11px] text-stone-400">
                              {paper.researchAxis}
                            </span>
                          </div>
                          <h4 className="font-serif text-base font-bold text-stone-900 leading-snug">
                            {paper.title}
                          </h4>
                          <p className="text-[11px] text-stone-500 font-sans mt-0.5">
                            {paper.authors.join(", ")}
                          </p>
                        </div>
                        <span className="text-[10px] font-mono text-stone-400 bg-stone-100 px-2 py-1 rounded border border-stone-200 shrink-0">
                          {paper.sectionMapped}
                        </span>
                      </div>

                      <p className="text-stone-700 text-xs leading-relaxed bg-[#FBF9F5] p-2.5 rounded border border-stone-200/80">
                        <strong>Aportación científica al proyecto:</strong> {paper.keyContributions}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-stone-100 text-[11px] text-stone-500">
                        <span><strong>Muestra/Métodos:</strong> {paper.sampleAndMethods}</span>
                        {paper.doi && (
                          <span className="font-mono text-stone-700">DOI: {paper.doi}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* SECTION 3 */}
          <article id="sec-3" className="scroll-mt-24 pt-2 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-400 uppercase tracking-widest mb-2">
              <span>Capítulo 03</span>
              <span>·</span>
              <span>6 min lectura</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900">
              3. Auditoría Crítica del Sitio Actual y Accesibilidad (WCAG 2.2 AA)
            </h2>

            <div className="mt-6 text-stone-700 leading-relaxed space-y-6">
              <p>
                El diagnóstico de la experiencia actual revela un modelo que traslada toda la carga al profesor:
              </p>

              {/* Flow Comparison */}
              <div className="p-4 rounded-lg bg-stone-100 border border-stone-200 space-y-3 font-mono text-xs">
                <div className="text-stone-500 font-sans font-semibold">FLUJO ACTUAL (FRICCIÓN CRÍTICA):</div>
                <div className="p-2 bg-white rounded border border-stone-200 text-red-900">
                  Formato abstracto ──► Descarga a ciegas ──► Descubrimiento tardío de incompatibilidad o bloqueo técnico
                </div>
                <div className="text-stone-500 font-sans font-semibold pt-2">RECORRIDO OBJETIVO PROPUESTO (5 HITOS):</div>
                <div className="p-2 bg-stone-900 text-stone-50 rounded">
                  [ 1. Encontrar ] ──► [ 2. Decidir ] ──► [ 3. Preparar ] ──► [ 4. Utilizar ] ──► [ 5. Recuperar ]
                </div>
              </div>

              {/* Interactive WCAG Audit Filter */}
              <div className="mt-6">
                <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                  <h3 className="font-serif text-xl font-medium text-stone-900">
                    Matriz de Criterios WCAG 2.2 AA Auditados
                  </h3>
                  <div className="flex items-center gap-1 text-xs">
                    <button
                      onClick={() => setWcagFilter("all")}
                      className={`px-2.5 py-1 rounded ${wcagFilter === "all" ? "bg-stone-900 text-white font-medium" : "bg-stone-100 text-stone-600 hover:text-stone-900"}`}
                    >
                      Todos ({WCAG_AUDIT_DATA.length})
                    </button>
                    <button
                      onClick={() => setWcagFilter("Falla")}
                      className={`px-2.5 py-1 rounded ${wcagFilter === "Falla" ? "bg-amber-900 text-white font-medium" : "bg-stone-100 text-stone-600 hover:text-stone-900"}`}
                    >
                      Falla
                    </button>
                    <button
                      onClick={() => setWcagFilter("Parcial")}
                      className={`px-2.5 py-1 rounded ${wcagFilter === "Parcial" ? "bg-stone-800 text-white font-medium" : "bg-stone-100 text-stone-600 hover:text-stone-900"}`}
                    >
                      Parcial
                    </button>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {filteredWcag.map((item) => (
                    <div key={item.id} className="p-4 bg-white border border-stone-200 rounded-lg shadow-xs text-xs sm:text-sm">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-stone-800">{item.criterion}</span>
                          <span className="text-stone-400">· Nivel {item.level}</span>
                        </div>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                          item.currentStatus === "Falla" 
                            ? "bg-red-50 text-red-700 border border-red-200" 
                            : "bg-amber-50 text-amber-800 border border-amber-200"
                        }`}>
                          {item.currentStatus}
                        </span>
                      </div>
                      <p className="mt-2 text-stone-700">
                        <strong className="text-stone-900">Requisito técnico:</strong> {item.technicalRequirement}
                      </p>
                      <p className="mt-1 text-stone-600 italic">
                        <strong className="text-stone-800 not-italic">Remedio propuesto:</strong> {item.remedy}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* SECTION 4 */}
          <article id="sec-4" className="scroll-mt-24 pt-2 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-400 uppercase tracking-widest mb-2">
              <span>Capítulo 04</span>
              <span>·</span>
              <span>8 min lectura</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900">
              4. Arquitectura de Información y las 4 Pantallas Clave
            </h2>

            <div className="mt-6 text-stone-700 leading-relaxed space-y-6">
              <p>
                La propuesta concilia la sobriedad funcional con una navegación editorial orientada a tareas. Se estructuran 4 pantallas prioritarias de intervención:
              </p>

              {/* The 4 Screens Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-stone-200 rounded-lg">
                  <div className="font-mono text-xs text-stone-400 mb-1">PANTALLA 1</div>
                  <h4 className="font-serif font-semibold text-lg text-stone-900">Portada Orientada a Tareas</h4>
                  <p className="text-xs text-stone-600 mt-2">
                    Módulo central «¿Qué necesitas preparar hoy?»: 1. Encontrar actividad nueva; 2. Adaptar material existente; 3. Flexibilizar vías de respuesta DUA.
                  </p>
                  <button
                    onClick={() => onNavigateToTab("prototype")}
                    className="mt-3 text-xs font-semibold text-stone-800 hover:text-stone-950 underline"
                  >
                    Ver prototipo de portada →
                  </button>
                </div>

                <div className="p-4 bg-white border border-stone-200 rounded-lg">
                  <div className="font-mono text-xs text-stone-400 mb-1">PANTALLA 2</div>
                  <h4 className="font-serif font-semibold text-lg text-stone-900">Catálogo Facetado No Diagnóstico</h4>
                  <p className="text-xs text-stone-600 mt-2">
                    Filtros funcionales anti-etiquetas diagnósticas: por etapa educativa, dotación técnica (sin pantallas / proyector / dispositivos) y modalidades sensoriales DUA.
                  </p>
                  <button
                    onClick={() => onNavigateToTab("prototype")}
                    className="mt-3 text-xs font-semibold text-stone-800 hover:text-stone-950 underline"
                  >
                    Explorar filtros interactivos →
                  </button>
                </div>

                <div className="p-4 bg-white border border-stone-200 rounded-lg">
                  <div className="font-mono text-xs text-stone-400 mb-1">PANTALLA 3</div>
                  <h4 className="font-serif font-semibold text-lg text-stone-900">Ficha Operativa Normalizada</h4>
                  <p className="text-xs text-stone-600 mt-2">
                    Esquema riguroso de 9 bloques aplicable a GiraTIC, Identidad Digital e Infografías (Decisión, Preparación, Prerrequisitos, Pautas de observación y Licencias).
                  </p>
                  <button
                    onClick={() => onNavigateToTab("prototype")}
                    className="mt-3 text-xs font-semibold text-stone-800 hover:text-stone-950 underline"
                  >
                    Abrir ficha modelo de GiraTIC →
                  </button>
                </div>

                <div className="p-4 bg-white border border-stone-200 rounded-lg">
                  <div className="font-mono text-xs text-stone-400 mb-1">PANTALLA 4</div>
                  <h4 className="font-serif font-semibold text-lg text-stone-900">Guía «Cómo Empezar»</h4>
                  <p className="text-xs text-stone-600 mt-2">
                    Itinerario en 5 pasos para docentes sin formación teórica previa y lista de verificación de aula imprimible en 1 sola página.
                  </p>
                  <button
                    onClick={() => onNavigateToTab("prototype")}
                    className="mt-3 text-xs font-semibold text-stone-800 hover:text-stone-950 underline"
                  >
                    Ver guía de 5 pasos →
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION 5 */}
          <article id="sec-5" className="scroll-mt-24 pt-2 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-400 uppercase tracking-widest mb-2">
              <span>Capítulo 05</span>
              <span>·</span>
              <span>6 min lectura</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900">
              5. Capa Pedagógica y Orientador: «Del Caso al Aula»
            </h2>

            <div className="mt-6 text-stone-700 leading-relaxed space-y-6">
              <p>
                Se descarta formalmente la integración de un chatbot abierto que improvise recomendaciones pedagógicas sin trazabilidad científica. El orientador opera como un <strong>motor socrático estructurado</strong> que aísla la barrera del entorno frente a la tarea:
              </p>

              <div className="p-4 bg-stone-100 border border-stone-200 rounded-lg text-xs font-mono">
                [ Docente plantea dificultad ] ──► [ Reformulación no diagnóstica ] ──► [ Hipótesis de intervención ] ──► [ Plan de Aula de 1 pág. ]
              </div>

              {/* Gamification Evaluation Box */}
              <div className="p-4 bg-amber-50/50 border border-amber-200 rounded-lg text-xs sm:text-sm">
                <span className="font-semibold text-amber-950 block mb-1">
                  Evaluación crítica de la gamificación y la «Ciudad Educativa» (Pozzi & Persico, 2024):
                </span>
                <p className="text-amber-900">
                  Las metáforas espaciales (Biblioteca, Taller, Plaza) y las barras de puntos o vidas <strong>no</strong> aumentan la competencia docente y generan costes desproporcionados de mantenimiento. En DUA-DIG, la «Ciudad Educativa» se concibe únicamente como una <strong>interfaz ilustrada complementaria y 100% opcional</strong>, desactivable con un solo clic. La navegación tabular estándar siempre prevalece.
                </p>
              </div>

              <div className="flex justify-start">
                <button
                  onClick={() => onNavigateToTab("socratic")}
                  className="px-4 py-2 bg-stone-900 text-white rounded text-xs font-medium hover:bg-stone-800 transition-colors flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Probar el Orientador Socrático «Del Caso al Aula»</span>
                </button>
              </div>
            </div>
          </article>

          {/* SECTION 6 */}
          <article id="sec-6" className="scroll-mt-24 pt-2 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-400 uppercase tracking-widest mb-2">
              <span>Capítulo 06</span>
              <span>·</span>
              <span>6 min lectura</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900">
              6. Biblioteca de Conceptos por Capas y Guiones Sonoros
            </h2>

            <div className="mt-6 text-stone-700 leading-relaxed space-y-6">
              <p>
                Cada concepto del marco pedagógico se estructura en tres niveles concéntricos:
                <em> (1) En una frase</em>; <em>(2) Explicación y ejemplo de aula</em>; <em>(3) Fundamentación académica y límites científicos</em>.
              </p>

              {/* Layered Concept Accordion Preview */}
              <div className="space-y-3">
                {LAYERED_CONCEPTS.map((concept) => (
                  <div key={concept.id} className="border border-stone-200 rounded-lg bg-white overflow-hidden">
                    <button
                      onClick={() => setExpandedConcept(expandedConcept === concept.id ? null : concept.id)}
                      className="w-full p-3.5 text-left flex items-center justify-between hover:bg-stone-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-stone-400">{concept.code}</span>
                        <span className="font-serif font-medium text-base text-stone-900">{concept.name}</span>
                        <span className="text-xs text-stone-400 hidden sm:inline">· {concept.category}</span>
                      </div>
                      <span className="text-xs text-stone-500 font-sans">
                        {expandedConcept === concept.id ? "Plegar" : "Ver 3 capas"}
                      </span>
                    </button>

                    {expandedConcept === concept.id && (
                      <div className="p-4 pt-1 border-t border-stone-100 bg-stone-50/50 space-y-3 text-xs sm:text-sm">
                        <div className="p-2.5 bg-white border border-stone-200 rounded">
                          <span className="font-semibold text-stone-900 block text-xs uppercase tracking-wider text-amber-900">
                            Capa 1 · En una frase (Síntesis rápida)
                          </span>
                          <p className="mt-1 text-stone-800">{concept.layer1}</p>
                        </div>
                        <div className="p-2.5 bg-white border border-stone-200 rounded">
                          <span className="font-semibold text-stone-900 block text-xs uppercase tracking-wider text-stone-600">
                            Capa 2 · Aplicación didáctica y ejemplo en clase
                          </span>
                          <p className="mt-1 text-stone-700">{concept.layer2.explanation}</p>
                          <p className="mt-2 text-stone-600 italic">Ejemplo: {concept.layer2.classroomExample}</p>
                        </div>
                        <div className="p-2.5 bg-white border border-stone-200 rounded">
                          <span className="font-semibold text-stone-900 block text-xs uppercase tracking-wider text-stone-600">
                            Capa 3 · Fundamentación y límites científicos
                          </span>
                          <p className="mt-1 text-stone-700">{concept.layer3.academicFoundation}</p>
                          <p className="mt-2 text-red-900/90 font-medium">Límites: {concept.layer3.scientificLimits}</p>
                          <p className="mt-1 font-mono text-xs text-stone-500">Ref: {concept.layer3.keyReference}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigateToTab("concepts")}
                  className="text-xs font-semibold text-stone-800 hover:text-stone-950 underline flex items-center gap-1.5"
                >
                  <span>Abrir Estudio de Audio con Reproductor y Transcripciones (A01 - A03) →</span>
                </button>
              </div>
            </div>
          </article>

          {/* SECTION 7 */}
          <article id="sec-7" className="scroll-mt-24 pt-2 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-400 uppercase tracking-widest mb-2">
              <span>Capítulo 07</span>
              <span>·</span>
              <span>8 min lectura</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900">
              7. Línea de Investigación Avanzada: MCR, Mente Extendida e IA
            </h2>

            <div className="mt-6 text-stone-700 leading-relaxed space-y-6">
              <p>
                Apoyándose en la tesis de la <strong>Mente Extendida</strong> (Clark & Chalmers, 1998), la cognición humana no se detiene en los límites del cráneo: se acopla a artefactos y andamios externos siempre que satisfagan disponibilidad, fiabilidad y acceso transparente.
              </p>

              {/* Protocol 3 Figures */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4 text-xs">
                <div className="p-3 bg-white border border-stone-200 rounded-lg">
                  <span className="font-semibold text-stone-900 block text-sm mb-1">1. Apoyo de Acceso</span>
                  <span className="text-stone-500 block mb-2 font-mono">Permanente</span>
                  <p className="text-stone-600">
                    Transcripción, síntesis de voz o contraste elevado. Elimina barreras sensoriales sin sustituir la meta conceptual ni retirarse.
                  </p>
                </div>

                <div className="p-3 bg-white border border-stone-200 rounded-lg">
                  <span className="font-semibold text-stone-900 block text-sm mb-1">2. Andamiaje Didáctico</span>
                  <span className="text-amber-800 block mb-2 font-mono">Desvanecible</span>
                  <p className="text-stone-600">
                    Pistas graduadas, preguntas socráticas, esquemas previos. Se retiran progresivamente conforme se consolida la autonomía.
                  </p>
                </div>

                <div className="p-3 bg-red-50/60 border border-red-200 rounded-lg">
                  <span className="font-semibold text-red-950 block text-sm mb-1">3. Sustitución Indebida</span>
                  <span className="text-red-700 block mb-2 font-mono">A evitar</span>
                  <p className="text-red-900">
                    La herramienta digital o la IA ejecuta el razonamiento o redacta la conclusión que el aprendiz debía interiorizar.
                  </p>
                </div>
              </div>

              {/* MCR Architecture Visual Diagram */}
              <div className="my-6">
                <McrArchitectureDiagram />
              </div>

              {/* Neurodivergence without stereotypes */}
              <h3 className="font-serif text-xl font-medium text-stone-900 mt-6">
                7.3. Neurodivergencia sin estereotipos clínicos
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
                <li className="p-3 bg-white border border-stone-200 rounded">
                  <strong>TDAH:</strong> No asumir falta de capacidad intelectual; aislar las dificultades en funciones ejecutivas (iniciar, secuenciar o retomar) de la comprensión del concepto.
                </li>
                <li className="p-3 bg-white border border-stone-200 rounded">
                  <strong>Autismo:</strong> No inferir incomprensión de particularidades en la comunicación oral. Separar la barrera comunicativa del dominio conceptual, asegurando predictibilidad.
                </li>
                <li className="p-3 bg-white border border-stone-200 rounded">
                  <strong>Altas capacidades:</strong> Evitar la sobrecarga con mero volumen de ejercicios mecánicos idénticos. Proporcionar desafíos de mayor profundidad relacional.
                </li>
              </ul>
            </div>
          </article>

          {/* SECTION 8 */}
          <article id="sec-8" className="scroll-mt-24 pt-2 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-400 uppercase tracking-widest mb-2">
              <span>Capítulo 08</span>
              <span>·</span>
              <span>5 min lectura</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900">
              8. Matriz de los 10 Cambios Prioritarios y Plan de Validación
            </h2>

            <div className="mt-6 text-stone-700 leading-relaxed space-y-6">
              <p>
                Jerarquización cualitativa basada en el beneficio inmediato para la tarea docente y el nivel de riesgo técnico acotado:
              </p>

              {/* Priority Matrix Visual Diagram with P1, P2, P3 Rationale */}
              <div className="my-4">
                <PriorityMatrixVisualDiagram />
              </div>

              <div className="overflow-x-auto border border-stone-200 rounded-lg bg-white shadow-xs">
                <table className="w-full text-left text-xs font-sans">
                  <thead className="bg-stone-100/70 border-b border-stone-200 text-stone-700 uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="py-2.5 px-3 font-semibold">#</th>
                      <th className="py-2.5 px-3 font-semibold">Intervención</th>
                      <th className="py-2.5 px-3 font-semibold">Tarea Docente</th>
                      <th className="py-2.5 px-3 font-semibold">Prioridad</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-700">
                    {PRIORITY_MATRIX.map((item) => (
                      <tr key={item.id} className="hover:bg-stone-50/70">
                        <td className="py-2 px-3 font-mono text-stone-400">{item.id}</td>
                        <td className="py-2 px-3 font-medium text-stone-900">{item.intervention}</td>
                        <td className="py-2 px-3 text-stone-600">{item.teacherTask}</td>
                        <td className="py-2 px-3">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                            item.priority === "P1" 
                              ? "bg-stone-900 text-white" 
                              : item.priority === "P2" 
                              ? "bg-stone-200 text-stone-800" 
                              : "bg-stone-100 text-stone-600"
                          }`}>
                            {item.priority}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigateToTab("candidacy")}
                  className="text-xs font-semibold text-stone-800 hover:text-stone-950 underline"
                >
                  Abrir Matriz Completa con Métricas de Usabilidad y Riesgos →
                </button>
              </div>
            </div>
          </article>

          {/* SECTION 9 */}
          <article id="sec-9" className="scroll-mt-24 pt-2 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-400 uppercase tracking-widest mb-2">
              <span>Capítulo 09</span>
              <span>·</span>
              <span>6 min lectura</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900">
              9. Preparación de Candidatura y Tareas del Puesto (Convocatoria USAL)
            </h2>

            <div className="mt-6 text-stone-700 leading-relaxed space-y-6">
              <p>
                Análisis exhaustivo de la <strong>Convocatoria 2026/R055/01</strong> (Apoyo a intervenciones, gestión web y análisis de datos en el Proyecto DUA-DIG).
              </p>

              {/* 5-Step Operational Chain Interactive Pipeline Diagram */}
              <div className="my-4">
                <UsalCandidacyPipelineDiagram />
              </div>

              <div className="p-4 bg-white border border-stone-200 rounded-lg space-y-2 text-xs sm:text-sm">
                <span className="font-semibold text-stone-900 block">Discurso defendible y fundamentado para la entrevista:</span>
                <blockquote className="italic text-stone-700 border-l-2 border-stone-400 pl-3">
                  «He estudiado a fondo los antecedentes metodológicos del equipo: tanto los instrumentos cuantitativos de seguridad digital y competencia digital (ECODIES), como las investigaciones cualitativas con entrevistas y NVivo en proyectos como DigiCraft. Entiendo que las tareas del puesto articulan la gestión y clarificación de los recursos web con el apoyo de campo en los colegios y la depuración de datos. Mi prioridad técnica será conocer las versiones operativas de los instrumentos vigentes en DUA-DIG, los protocolos éticos aprobados y las pautas de coordinación interna para el análisis y la elaboración de informes».
                </blockquote>
              </div>
            </div>
          </article>

          {/* SECTION 10 */}
          <article id="sec-10" className="scroll-mt-24 pt-2 pb-12">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-400 uppercase tracking-widest mb-2">
              <span>Capítulo 10</span>
              <span>·</span>
              <span>4 min lectura</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900">
              10. Preguntas Bloqueantes para el Equipo Técnico y Científico
            </h2>

            <div className="mt-6 text-stone-700 leading-relaxed space-y-4">
              <p>
                Antes de aplicar cualquier modificación en el entorno de producción o alterar bases de datos institucionales, se documentan las 7 consultas críticas:
              </p>

              <div className="space-y-3">
                {BLOCKING_QUESTIONS.map((q) => (
                  <div key={q.id} className="p-3.5 bg-white border border-stone-200 rounded-lg text-xs sm:text-sm">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="font-mono text-stone-400 text-xs mr-2">Q{q.id}</span>
                        <strong className="text-stone-900">{q.topic}:</strong>
                        <p className="mt-1 text-stone-800">{q.question}</p>
                      </div>
                      <span className={`shrink-0 px-2 py-0.5 rounded text-[11px] font-medium ${
                        q.status === "Pendiente" 
                          ? "bg-amber-100 text-amber-900" 
                          : "bg-stone-100 text-stone-700"
                      }`}>
                        {q.status}
                      </span>
                    </div>
                    <p className="mt-2 text-stone-500 text-xs">
                      <strong>Impacto técnico:</strong> {q.impact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* SECTION 11 */}
          <article id="sec-11" className="scroll-mt-24 pt-2 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-400 uppercase tracking-widest mb-2">
              <span>Capítulo 11</span>
              <span>·</span>
              <span>Documento: DUA_DIG_Dos_estructuras_y_areas_nuevas.docx</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900">
              11. Dos Estructuras del Portal y Áreas Nuevas
            </h2>

            <div className="mt-6 text-stone-700 leading-relaxed space-y-6">
              <p>
                El documento técnico de trabajo <em>«DUA_DIG_Dos_estructuras_y_areas_nuevas.docx»</em> analiza la encrucijada entre dos modelos arquitectónicos para el portal y formaliza tres nuevas áreas de contenido de alto impacto pedagógico.
              </p>

              {/* Internal documents evidence block */}
              <div className="p-4 bg-stone-100 border border-stone-200 rounded-lg text-xs sm:text-sm flex flex-col sm:flex-row gap-4 items-center">
                <img
                  src="/public/assets/aistudio/image_6d8acc13.png"
                  alt="Archivos de trabajo del Grupo EduDIG"
                  className="w-48 rounded border border-stone-300 shadow-xs object-cover"
                />
                <div>
                  <strong className="text-stone-900 block mb-1">Evidencia Documental del Repositorio de Trabajo:</strong>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    Identificación en la carpeta oficial del equipo de los documentos <code>DUA_DIG_Dos_estructuras_y_areas_nuevas</code> y <code>DUA_DIG_Dos_Respuestas_Completas_Herramientas_y_Moodle (2)</code>, que sustentan la ampliación hacia entornos virtuales de aprendizaje y herramientas de autor.
                  </p>
                  <button
                    onClick={() => onNavigateToTab("moodle")}
                    className="mt-2 text-xs font-semibold text-stone-900 underline hover:text-stone-700"
                  >
                    Abrir el módulo interactivo de Moodle & Estructuras →
                  </button>
                </div>
              </div>

              {/* 2 Structures Synthesis */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-white border border-stone-200 rounded-lg space-y-2">
                  <span className="font-mono text-stone-500 font-bold block">MODELO A · TAXONÓMICO CURRICULAR</span>
                  <p className="text-stone-800">
                    Estructura piramidal clásica: <em>Etapa (Infantil/Primaria) → Área curricular (Lengua, Matemáticas, Digital) → Formato</em>. Útil para la inspección y alineación estricta con programaciones oficiales.
                  </p>
                </div>
                <div className="p-4 bg-white border border-stone-900 rounded-lg space-y-2 ring-1 ring-stone-900">
                  <span className="font-mono text-amber-900 font-bold block">MODELO B · FLUJO OPERATIVO DOCENTE (ACTIVO)</span>
                  <p className="text-stone-800">
                    Estructura basada en tareas de aula: <em>¿Qué necesitas preparar hoy? → Encontrar → Adaptar (Bloque 6) → Flexibilizar (Bloque 5 y 7)</em>. Reduce el tiempo de búsqueda a menos de 90 segundos.
                  </p>
                </div>
              </div>

              {/* 3 New Areas */}
              <h3 className="font-serif text-xl font-medium text-stone-900 mt-6">
                11.2. Especificación de las 3 Nuevas Áreas de Contenido
              </h3>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3.5 bg-white border border-stone-200 rounded">
                  <strong className="text-stone-900 block">Área 1: Integración en Aulas Virtuales y Moodle (EVA):</strong>
                  <p className="text-stone-600 mt-0.5">Paquetes H5P y SCORM inclusivos, plantillas de curso restaurables (.mbz) y tareas con entrega multimodal.</p>
                </div>
                <div className="p-3.5 bg-white border border-stone-200 rounded">
                  <strong className="text-stone-900 block">Área 2: Laboratorio de Recursos Multimodales y Herramientas de Autor:</strong>
                  <p className="text-stone-600 mt-0.5">Evaluación técnica de software común (Genially, Canva, Scratch, Book Creator) con semáforo de accesibilidad y RGPD.</p>
                </div>
                <div className="p-3.5 bg-white border border-stone-200 rounded">
                  <strong className="text-stone-900 block">Área 3: Banco de Evidencias e Intervenciones Escolares:</strong>
                  <p className="text-stone-600 mt-0.5">Muestras empíricas del Proyecto DUA-DIG en colegios de Castilla y León con datos psicométricos de la escala ECODIES.</p>
                </div>
              </div>
            </div>
          </article>

          {/* SECTION 12 */}
          <article id="sec-12" className="scroll-mt-24 pt-2 pb-12">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-400 uppercase tracking-widest mb-2">
              <span>Capítulo 12</span>
              <span>·</span>
              <span>Documento: DUA_DIG_Dos_Respuestas_Completas_Herramientas_y_Moodle (2).docx</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900">
              12. Dos Respuestas Completas: Herramientas Digitales y Moodle
            </h2>

            <div className="mt-6 text-stone-700 leading-relaxed space-y-6">
              <p>
                El segundo documento de referencia operacionaliza las <strong>dos respuestas completas</strong> para capacitar a los docentes en el uso inclusivo de plataformas y herramientas de autor:
              </p>

              {/* Response 1: Moodle Protocol */}
              <div className="p-5 bg-white border border-stone-200 rounded-lg space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-stone-500 font-semibold block">
                  RESPUESTA COMPLETA 1: PROTOCOLO DE DESPLIEGUE EN MOODLE / EVA
                </span>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-stone-700">
                  <li><strong>Entregas multimodales sin penalización:</strong> Configuración simultánea de texto en línea y grabaciones de audio (.mp3, .ogg) en la actividad Tarea de Moodle.</li>
                  <li><strong>Contenido duplicado accesible:</strong> Inserción sistemática del reproductor de audio integrado junto a los enunciados extensos de lectura.</li>
                  <li><strong>Restricciones de acceso pedagógicas:</strong> Uso de condiciones de acceso para desplegar pistas y andamiajes de ayuda, nunca para bloquear el avance global del alumno.</li>
                  <li><strong>Rúbricas DUA en el libro de calificaciones:</strong> Criterios de evaluación cualitativos centrados en la meta cognitiva observable y no en la destreza mecánica.</li>
                  <li><strong>Ajuste temporal sin estigma:</strong> Cuestionarios sin temporizadores angustiosos o con ampliación configurada de forma transparente.</li>
                </ul>
              </div>

              {/* Response 2: Digital Tools Evaluation */}
              <div className="p-5 bg-white border border-stone-200 rounded-lg space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-amber-900 font-semibold block">
                  RESPUESTA COMPLETA 2: MATRIZ DUA DE HERRAMIENTAS DE AUTOR
                </span>
                <p className="text-xs text-stone-600">
                  Análisis contrastado de 8 herramientas educativas frente a barreras de teclado (WCAG 2.2), sobrecarga cognitiva ("detalles seductores") y registro invasivo de menores (RGPD):
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-stone-50 border border-stone-200 rounded">
                    <strong className="text-stone-900 block">H5P & Book Creator:</strong>
                    <span className="text-emerald-800 font-semibold">Excelente / 100% Accesible</span>
                    <p className="text-stone-600 text-[11px] mt-1">Estándares abiertos, lectura en voz alta nativa y sin creación obligatoria de cuentas por alumnos.</p>
                  </div>
                  <div className="p-3 bg-stone-50 border border-stone-200 rounded">
                    <strong className="text-stone-900 block">Genially & Canva:</strong>
                    <span className="text-amber-800 font-semibold">Aceptable con moderación</span>
                    <p className="text-stone-600 text-[11px] mt-1">Requiere desactivar animaciones complejas que saturan la memoria de trabajo.</p>
                  </div>
                  <div className="p-3 bg-stone-50 border border-stone-200 rounded">
                    <strong className="text-stone-900 block">Scratch (MIT) & Edpuzzle:</strong>
                    <span className="text-emerald-800 font-semibold">Recomendado para DUA</span>
                    <p className="text-stone-600 text-[11px] mt-1">Excelente para expresión multimodal (sonido, animación) y paradas de vídeo con preguntas reflexivas.</p>
                  </div>
                  <div className="p-3 bg-stone-50 border border-stone-200 rounded">
                    <strong className="text-stone-900 block">Kahoot / Gamificación competitiva:</strong>
                    <span className="text-red-800 font-semibold">Desaconsejado en modo competitivo</span>
                    <p className="text-stone-600 text-[11px] mt-1">Genera ansiedad evaluativa por tiempo y contradice el principio de compromiso intrínseco del DUA.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-start">
                <button
                  onClick={() => onNavigateToTab("moodle")}
                  className="px-4 py-2 bg-stone-900 text-white rounded text-xs font-medium hover:bg-stone-800 transition-colors flex items-center gap-2"
                >
                  <Server className="w-3.5 h-3.5" />
                  <span>Explorar Módulo Completo de Moodle y Herramientas Digitales →</span>
                </button>
              </div>
            </div>
          </article>

          {/* SECTION 13 */}
          <article id="sec-13" className="scroll-mt-24 pt-2 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-400 uppercase tracking-widest mb-2">
              <span>Capítulo 13</span>
              <span>·</span>
              <span>Documento: DUA_DIG_Protocolo_Evaluación_Formativa.docx</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900">
              13. Protocolo de Evaluación Formativa Inclusiva
            </h2>

            <div className="mt-6 text-stone-700 leading-relaxed space-y-6">
              <p>
                El documento técnico <em>«DUA_DIG_Protocolo_Evaluación_Formativa.docx»</em> establece el marco metodológico para evaluar el aprendizaje sin sesgos de decodificación o motricidad, desterrando el modelo tradicional de examen único memorístico en papel.
              </p>

              {/* Principle Callout */}
              <div className="p-4 bg-amber-50/60 border border-amber-200/80 rounded-lg text-xs sm:text-sm">
                <span className="font-semibold text-amber-950 block mb-1">
                  Principio Rector de No Penalización del Formato:
                </span>
                <blockquote className="italic text-amber-900 font-serif text-base border-l-2 border-amber-400 pl-3 my-1">
                  «Si un instrumento evaluativo penaliza la dislexia cuando lo que se pretende medir es la competencia en ciberseguridad, no estamos midiendo competencia: estamos midiendo discapacidad».
                </blockquote>
              </div>

              {/* The 3 Milestones of the Observation Notebook */}
              <div>
                <h3 className="font-serif text-xl font-medium text-stone-900 mb-3">
                  13.1. Cuaderno de Observación No Punitivo (3 Hitos de Aula)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-4 bg-white border border-stone-200 rounded-lg space-y-1.5">
                    <span className="font-mono text-stone-500 font-bold block">HITO 01</span>
                    <strong className="text-stone-900 block text-sm">Enganche Inicial</strong>
                    <p className="text-stone-600">
                      Registro del tiempo de latencia hasta iniciar la tarea y elección de la modalidad de acceso (texto, audio o pictograma).
                    </p>
                  </div>
                  <div className="p-4 bg-white border border-stone-200 rounded-lg space-y-1.5">
                    <span className="font-mono text-amber-900 font-bold block">HITO 02</span>
                    <strong className="text-stone-900 block text-sm">Uso de Andamiajes</strong>
                    <p className="text-stone-600">
                      Anotación de los apoyos desvanecibles requeridos (pistas intermedias, autocomprobación) y su retirada progresiva.
                    </p>
                  </div>
                  <div className="p-4 bg-white border border-stone-200 rounded-lg space-y-1.5">
                    <span className="font-mono text-emerald-800 font-bold block">HITO 03</span>
                    <strong className="text-stone-900 block text-sm">Transferencia Autónoma</strong>
                    <p className="text-stone-600">
                      Demostración fehaciente del constructo conceptual en una situación nueva sin asistencia directa del profesor.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4-Level Progress Scale */}
              <div>
                <h3 className="font-serif text-xl font-medium text-stone-900 mb-3">
                  13.2. Escala Cualitativa de Progreso Observable
                </h3>
                <div className="overflow-x-auto border border-stone-200 rounded-lg bg-white shadow-xs">
                  <table className="w-full text-left text-xs font-sans">
                    <thead className="bg-stone-100/70 border-b border-stone-200 text-stone-700 uppercase tracking-wider text-[11px]">
                      <tr>
                        <th className="py-2.5 px-3 font-semibold">Nivel de Progreso</th>
                        <th className="py-2.5 px-3 font-semibold">Descriptor Observable</th>
                        <th className="py-2.5 px-3 font-semibold">Acción Pedagógica Docente</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-700">
                      <tr>
                        <td className="py-2 px-3 font-semibold text-stone-900">1. Emergente</td>
                        <td className="py-2 px-3 text-stone-600">Requiere modelo resuelto completo y apoyo verbal continuo para iniciar.</td>
                        <td className="py-2 px-3 text-stone-600">Mantener andamiaje de modelado con desvanecimiento (Prompt Fading).</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-semibold text-stone-900">2. En desarrollo</td>
                        <td className="py-2 px-3 text-stone-600">Ejecuta los pasos intermedios utilizando tarjetas de autocomprobación.</td>
                        <td className="py-2 px-3 text-stone-600">Distanciar la presencia docente a 2 metros y reforzar la autonomía.</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-semibold text-stone-900">3. Autónomo</td>
                        <td className="py-2 px-3 text-stone-600">Resuelve la tarea completa en cualquiera de las modalidades DUA elegidas.</td>
                        <td className="py-2 px-3 text-stone-600">Retirar los andamiajes secundarios y preparar el reto de transferencia.</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-semibold text-stone-900">4. Transferente</td>
                        <td className="py-2 px-3 text-stone-600">Aplica el principio a dilemas cotidianos desconocidos y apoya a compañeros.</td>
                        <td className="py-2 px-3 text-stone-600">Proporcionar desafíos de mayor profundidad relacional y metaética.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Triangulation Box */}
              <div className="p-4 bg-stone-100 border border-stone-200 rounded-lg space-y-2 text-xs sm:text-sm">
                <strong className="text-stone-900 block text-xs uppercase tracking-wider font-mono">
                  TRIANGULACIÓN EVALUATIVA DUA (3 FUENTES DE EVIDENCIA)
                </strong>
                <ul className="list-disc list-inside space-y-1 text-stone-700 text-xs">
                  <li><strong>Autoevaluación guiada:</strong> Semáforo o escalas pictográficas donde el propio alumno reflexiona sobre su esfuerzo y nivel de comprensión antes de entregar.</li>
                  <li><strong>Coevaluación constructiva:</strong> Puesta en común por parejas mediante rúbricas visuales de criterios observables, fomentando la retroalimentación positiva.</li>
                  <li><strong>Heteroevaluación docente formativa:</strong> Calificación cualitativa centrada en el proceso con registro de las barreras del entorno detectadas.</li>
                </ul>
              </div>
            </div>
          </article>

          {/* SECTION 14 */}
          <article id="sec-14" className="scroll-mt-24 pt-2 pb-12">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-400 uppercase tracking-widest mb-2">
              <span>Capítulo 14</span>
              <span>·</span>
              <span>Documento: DUA_DIG_Hoja_Ruta_Transferencia_Pedagógica.docx</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900">
              14. Hoja de Ruta de Transferencia Pedagógica y Escalabilidad
            </h2>

            <div className="mt-6 text-stone-700 leading-relaxed space-y-6">
              <p>
                El documento estratégico <em>«DUA_DIG_Hoja_Ruta_Transferencia_Pedagógica.docx»</em> establece el plan maestro para garantizar la sostenibilidad, el impacto empírico y la transferencia de los resultados de investigación de la Universidad de Salamanca hacia los centros escolares de Castilla y León.
              </p>

              {/* USB Drive Archival Evidence Banner */}
              <div className="p-5 bg-white border border-stone-200 rounded-xl shadow-xs grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-5">
                  <figure className="border border-stone-300 rounded-lg overflow-hidden bg-stone-50">
                    <img
                      src="/public/assets/aistudio/image_5bdb2565.png"
                      alt="Unidad de almacenamiento ESD-USB con el corpus de investigación y transferencia DUA-DIG"
                      className="w-full object-contain max-h-64"
                    />
                    <figcaption className="p-2 text-[11px] text-stone-500 bg-stone-100 border-t border-stone-200">
                      <strong>Evidencia de transferencia:</strong> Unidad de investigación <code>ESD-USB (D:)</code> con guías metodológicas, informes KAIROS y estudios de impacto.
                    </figcaption>
                  </figure>
                </div>

                <div className="md:col-span-7 space-y-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-amber-900 font-semibold block">
                    CORPUS METODOLÓGICO Y DE INVESTIGACIÓN SITUADA
                  </span>
                  <h3 className="font-serif text-xl font-bold text-stone-900">
                    Garantía de Transferencia Universitaria Real
                  </h3>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    La transferencia no se limita a un repositorio web: se apoya en el corpus metodológico consolidado del Grupo EduDIG (guías de estudio ampliadas, instrumentos validados de la escala ECODIES y protocolos de intervención situados en aula).
                  </p>
                </div>
              </div>

              {/* The 4 Transfer Phases */}
              <div>
                <h3 className="font-serif text-xl font-medium text-stone-900 mb-3">
                  14.1. Las 4 Fases Operativas del Despliegue en Centros
                </h3>
                <div className="space-y-3 font-sans text-xs">
                  <div className="p-4 bg-white border border-stone-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono font-bold text-amber-900">FASE I</span>
                      <strong className="text-stone-900 text-sm font-serif">Sensibilización y Auditoría Diagnóstica en el Centro</strong>
                    </div>
                    <p className="text-stone-600">
                      Evaluación inicial de dotación técnica, conectividad real y barreras percibidas por los claustros escolares en los centros piloto de Salamanca, Zamora y Ávila.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-stone-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono font-bold text-stone-600">FASE II</span>
                      <strong className="text-stone-900 text-sm font-serif">Co-diseño y Adaptación Curricular con Equipos de Ciclo</strong>
                    </div>
                    <p className="text-stone-600">
                      Talleres de trabajo conjunto entre el equipo de investigación y los maestros para adecuar los recursos (GiraTIC, Identidad Digital) a las unidades didácticas vigentes.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-stone-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono font-bold text-stone-600">FASE III</span>
                      <strong className="text-stone-900 text-sm font-serif">Pilotaje en Aulas Reales con Medición Pre-Post</strong>
                    </div>
                    <p className="text-stone-600">
                      Aplicación sistemática de pruebas objetivas de competencia digital (escala ECODIES), cuaderno de observación no punitivo y entrevistas semiestructuradas transcritas con NVivo 14.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-stone-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono font-bold text-emerald-800">FASE IV</span>
                      <strong className="text-stone-900 text-sm font-serif">Institucionalización, Red de CFIE y Sostenibilidad</strong>
                    </div>
                    <p className="text-stone-600">
                      Homologación de cursos de formación continua con los Centros de Formación del Profesorado (CFIE), publicación de monografías de transferencia y consolidación del repositorio en la USAL.
                    </p>
                  </div>
                </div>
              </div>

              {/* Family and Community Extension */}
              <div className="p-5 bg-white border border-stone-200 rounded-lg space-y-2 text-xs sm:text-sm">
                <strong className="text-stone-900 block font-serif text-base">
                  14.2. Módulo de Mediación y Transferencia hacia las Familias
                </strong>
                <p className="text-stone-600 text-xs leading-relaxed">
                  El proyecto trasciende las paredes del aula facilitando a los colegios el <em>«Decálogo Familiar DUA-DIG»</em>: orientaciones prácticas para el acompañamiento respetuoso en el hogar, prevención de riesgos digitales sin prohibiciones punitivas y fomento de alternativas de ocio activo en familia.
                </p>
              </div>

              {/* 3-Year KPIs */}
              <div className="p-4 bg-stone-100 border border-stone-200 rounded-lg text-xs">
                <strong className="text-stone-900 block uppercase tracking-wider font-mono mb-2">
                  INDICADORES DE IMPACTO Y SOSTENIBILIDAD A 3 AÑOS
                </strong>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-2.5 bg-white rounded border border-stone-200">
                    <span className="text-lg font-serif font-bold text-stone-900 block">≥30</span>
                    <span className="text-[11px] text-stone-500">Colegios participantes</span>
                  </div>
                  <div className="p-2.5 bg-white rounded border border-stone-200">
                    <span className="text-lg font-serif font-bold text-stone-900 block">≥1.200</span>
                    <span className="text-[11px] text-stone-500">Alumnos evaluados</span>
                  </div>
                  <div className="p-2.5 bg-white rounded border border-stone-200">
                    <span className="text-lg font-serif font-bold text-stone-900 block">100%</span>
                    <span className="text-[11px] text-stone-500">Acceso abierto CC BY-SA</span>
                  </div>
                  <div className="p-2.5 bg-white rounded border border-stone-200">
                    <span className="text-lg font-serif font-bold text-stone-900 block">≥4</span>
                    <span className="text-[11px] text-stone-500">Artículos JCR/Scopus</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};
