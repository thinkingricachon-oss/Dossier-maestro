/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * DOSSIER MAESTRO INTEGRAL: AUDITORÍA, EVIDENCIA EMPÍRICA Y REDISEÑO DE «RECURSOS DIGITALES DUA-DIG»
 * Universidad de Salamanca · Grupo EduDIG · Convocatoria 2026/R055/01 · 21 de octubre de 2026
 */

import React, { useState } from "react";
import { Header, ActiveTab } from "./components/Header";
import { DossierReader } from "./components/DossierReader";
import { PrototypeViewer } from "./components/PrototypeViewer";
import { SocraticAdvisor } from "./components/SocraticAdvisor";
import { AudioConceptStudio } from "./components/AudioConceptStudio";
import { UsalCandidateDashboard } from "./components/UsalCandidateDashboard";
import { MoodleAndStructuresView } from "./components/MoodleAndStructuresView";
import { PdfExportModal } from "./components/PdfExportModal";
import { DOSSIER_META, SECTIONS, WCAG_AUDIT_DATA, PRIORITY_MATRIX, BLOCKING_QUESTIONS } from "./data/dossierData";
import { LAYERED_CONCEPTS, AUDIO_SCRIPTS, SOCRATIC_CASES } from "./data/conceptsAndAudio";
import { RESOURCES_CATALOGUE } from "./data/catalogueData";
import { Printer, BookOpen, ExternalLink, ShieldCheck, FileText } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("dossier");
  const [isPdfModalOpen, setIsPdfModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-900 flex flex-col font-sans selection:bg-stone-300 selection:text-stone-900">
      {/* Universal Top Header */}
      <Header
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        onOpenPdfModal={() => setIsPdfModalOpen(true)}
      />

      {/* Screen Interactive Body */}
      <main className="flex-1 w-full">
        {activeTab === "dossier" && (
          <DossierReader
            onNavigateToTab={(tab) => setActiveTab(tab)}
            onOpenPdfModal={() => setIsPdfModalOpen(true)}
          />
        )}

        {activeTab === "prototype" && (
          <PrototypeViewer
            onOpenPdfModal={() => setIsPdfModalOpen(true)}
          />
        )}

        {activeTab === "socratic" && (
          <SocraticAdvisor
            onOpenPdfModal={() => setIsPdfModalOpen(true)}
          />
        )}

        {activeTab === "concepts" && (
          <AudioConceptStudio />
        )}

        {activeTab === "moodle" && (
          <MoodleAndStructuresView
            onOpenPdfModal={() => setIsPdfModalOpen(true)}
          />
        )}

        {activeTab === "candidacy" && (
          <UsalCandidateDashboard
            onOpenPdfModal={() => setIsPdfModalOpen(true)}
          />
        )}
      </main>

      {/* Universal Institutional Footer */}
      <footer className="no-print bg-stone-950 text-stone-400 text-xs py-12 px-6 lg:px-12 border-t border-stone-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 space-y-3">
            <span className="font-serif text-lg text-stone-100 font-semibold block tracking-tight">
              Recursos Digitales DUA-DIG · USAL
            </span>
            <p className="text-stone-400 leading-relaxed font-sans text-xs">
              Grupo de Investigación en Innovación y Educación Digital (<strong>EduDIG</strong>).
              Departamento de Didáctica, Organización y Métodos de Investigación.
              Facultad de Educación, Universidad de Salamanca.
            </p>
            <p className="text-[11px] text-stone-500 font-mono">
              Proyecto de investigación: {DOSSIER_META.project} · {DOSSIER_META.callReference}
            </p>
          </div>

          <div className="md:col-span-4 space-y-2 text-stone-400">
            <span className="font-semibold uppercase tracking-wider text-stone-300 text-[11px] block mb-2 font-mono">
              Coordinación y Dirección Científica
            </span>
            <ul className="space-y-1 text-xs text-stone-400">
              <li>Dra. Ana García-Valcárcel Muñoz-Repiso</li>
              <li>Dra. Sonia Casillas Martín</li>
              <li>Dr. Marcos Cabezas González</li>
              <li>Dra. Verónica Basilotta Gómez-Pablos</li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <span className="font-semibold uppercase tracking-wider text-stone-300 text-[11px] block mb-2 font-mono">
              Accesibilidad y Legalidad
            </span>
            <p className="text-[11px] text-stone-400 leading-relaxed">
              Diseño adaptado a pautas WCAG 2.2 Nivel AA. Materiales publicados bajo licencias abiertas Creative Commons (CC BY-SA 4.0).
            </p>
            <button
              onClick={() => setIsPdfModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-stone-200 hover:text-white underline underline-offset-4 font-medium text-xs pt-1"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Exportar Dossier PDF / Imprimir</span>
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-4 text-[11px] text-stone-500 font-mono">
          <span>Universidad de Salamanca · 2026. Todos los derechos reconocidos a la autoría científica.</span>
          <span>Consolidación técnica: 21 de octubre de 2026</span>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* PRINT-ONLY COMPREHENSIVE DOSSIER CONTAINER (TRIGGERED ON window.print())  */}
      {/* ========================================================================= */}
      <div className="print-only p-8 text-black bg-white">
        {/* Cover Page */}
        <div className="print-avoid-break mb-12 border-b-2 border-black pb-8">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-2">
            UNIVERSIDAD DE SALAMANCA · FACULTAD DE EDUCACIÓN · GRUPO EDUDIG
          </div>
          <h1 className="text-3xl font-serif font-bold text-black leading-tight">
            DOSSIER MAESTRO INTEGRAL: AUDITORÍA, EVIDENCIA EMPÍRICA Y REDISEÑO DE «RECURSOS DIGITALES DUA-DIG»
          </h1>
          <p className="text-sm text-gray-700 mt-2 italic">
            Documento unificado y estructurado de trabajo para revisión del equipo y exportación a PDF
          </p>
          <div className="mt-4 pt-4 border-t border-gray-300 text-xs text-gray-600 grid grid-cols-2 gap-4">
            <div>
              <strong>Convocatoria vinculada:</strong> 2026/R055/01<br />
              <strong>Fecha de consolidación:</strong> 21 de octubre de 2026<br />
              <strong>Proyecto marco:</strong> DUA-DIG
            </div>
            <div>
              <strong>Dirección científica:</strong><br />
              Dra. Ana García-Valcárcel Muñoz-Repiso · Dra. Sonia Casillas Martín<br />
              Dr. Marcos Cabezas González · Dra. Verónica Basilotta Gómez-Pablos
            </div>
          </div>
        </div>

        {/* Index */}
        <div className="print-avoid-break mb-12">
          <h2 className="text-xl font-serif font-bold mb-4 uppercase tracking-wide">
            Índice General del Dossier
          </h2>
          <ol className="list-decimal list-inside space-y-1 text-xs text-gray-800">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <strong>{s.title}</strong> — {s.subtitle}
              </li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <div className="print-avoid-break mb-8">
          <h2 className="text-lg font-serif font-bold border-b border-black pb-1 mb-2">
            1. Marco Institucional y Finalidad del Portal
          </h2>
          <p className="text-xs text-gray-800 leading-relaxed">
            Grupo promotor: Grupo de Investigación en Innovación y Educación Digital (EduDIG), con sede en la Facultad de Educación de la Universidad de Salamanca (Departamento de Didáctica, Organización y Métodos de Investigación). Proyecto marco: Diseño de recursos digitales para fomentar el Diseño Universal de Aprendizaje en los centros educativos (DUA-DIG).
          </p>
          <p className="text-xs text-gray-800 leading-relaxed mt-2 italic">
            Misión pública: «En este espacio nos enfocaremos en compartir recursos, ideas y experiencias relacionadas con el DUA, con el objetivo de ayudar a los maestros de infantil y primaria a crear entornos de aprendizaje inclusivos y equitativos...»
          </p>
        </div>

        {/* Section 2 */}
        <div className="print-avoid-break mb-8">
          <h2 className="text-lg font-serif font-bold border-b border-black pb-1 mb-2">
            2. Fundamentación Empírica y Cuantificación de Barreras Docentes
          </h2>
          <p className="text-xs text-gray-800 leading-relaxed">
            TALIS 2024 (España, 506 centros de Primaria): 60% sobrecarga administrativa; 42% estrés en preparación de clases; 25.4 horas lectivas semanales promedio. REA en el aula (Tang 2020; Tosun & Altintas 2024; Baas 2019): 63% falta de tiempo, 36.2% carencia metodológica; 83.2% prioriza materiales con respaldo institucional universitario de prestigio como la USAL.
          </p>
        </div>

        {/* Section 3 */}
        <div className="print-avoid-break mb-8">
          <h2 className="text-lg font-serif font-bold border-b border-black pb-1 mb-2">
            3. Auditoría Crítica y Accesibilidad (WCAG 2.2 AA)
          </h2>
          <p className="text-xs text-gray-800 leading-relaxed">
            Flujo actual corregido hacia el recorrido de 5 hitos: [1. Encontrar] → [2. Decidir] → [3. Preparar] → [4. Utilizar] → [5. Recuperar].
            Auditoría de 6 criterios clave: 1.1.1 (Contenido no textual), 1.4.3 (Contraste 4.5:1), 2.1.1/2.1.2 (Teclado sin trampas), 2.4.7 (Foco visible 2px), 1.4.10 (Reflujo a 320px) y 2.4.4 (Propósito explícito de enlaces).
          </p>
        </div>

        {/* Section 4 */}
        <div className="print-avoid-break mb-8">
          <h2 className="text-lg font-serif font-bold border-b border-black pb-1 mb-2">
            4. Arquitectura de Información y las 4 Pantallas Clave
          </h2>
          <p className="text-xs text-gray-800 leading-relaxed">
            Estructuración de las 4 pantallas: 1. Portada orientada a tareas con módulo «¿Qué necesitas preparar hoy?»; 2. Catálogo facetado no diagnóstico; 3. Ficha operativa normalizada con esquema riguroso de 9 bloques; 4. Guía «Cómo empezar» con lista de verificación de aula.
          </p>
        </div>

        {/* Section 7: MCR & Extended Mind */}
        <div className="print-avoid-break mb-8">
          <h2 className="text-lg font-serif font-bold border-b border-black pb-1 mb-2">
            7. Línea de Investigación Avanzada: MCR, Mente Extendida e IA
          </h2>
          <p className="text-xs text-gray-800 leading-relaxed mb-2">
            Marco epistémico de la Mente Extendida (Clark & Chalmers, 1998) y Modelo de Comprensión Relacional (MCR). Se distinguen 3 figuras operativas: 1. Apoyo de acceso (permanente), 2. Andamiaje didáctico (desvanecible) y 3. Sustitución indebida (a evitar).
          </p>
          <div className="grid grid-cols-3 gap-2 text-[10px] border border-gray-300 p-2 rounded bg-gray-50 mb-2">
            <div>
              <strong className="block text-black">Capa 1: Cuantitativa</strong>
              <span className="text-gray-600">SPSS 30, fiabilidad ordinal ECODIES (α = 0,929), modelos mixtos GLMM por intento.</span>
            </div>
            <div>
              <strong className="block text-black">Capa 2: Cualitativa Clásica</strong>
              <span className="text-gray-600">NVivo 14 / ATLAS.ti, libro de códigos, análisis de episodios y casos negativos.</span>
            </div>
            <div>
              <strong className="block text-black">Capa 2b: Asistencia de IA</strong>
              <span className="text-gray-600">Auditoría humana ciega, preservación estricta RGPD y control de sesgos vocales.</span>
            </div>
          </div>
        </div>

        {/* Section 8: Priority Matrix Table & Rationale P1, P2, P3 */}
        <div className="print-avoid-break mb-8">
          <h2 className="text-lg font-serif font-bold border-b border-black pb-1 mb-2">
            8. Matriz de los 10 Cambios Prioritarios y Fundamentación P1, P2 y P3
          </h2>
          <div className="grid grid-cols-3 gap-2 text-[10px] mb-3">
            <div className="border border-black p-2 rounded bg-gray-50">
              <strong className="block text-black font-bold">P1 · Crítica Inmediata (6)</strong>
              <p className="text-gray-700 mt-0.5">Barreras legales WCAG AA y sobrecarga del docente (TALIS: 42% estrés). Riesgo técnico nulo.</p>
            </div>
            <div className="border border-gray-500 p-2 rounded bg-gray-50">
              <strong className="block text-black font-bold">P2 · Metodológica (3)</strong>
              <p className="text-gray-700 mt-0.5">Estructura curricular, filtros anti-diagnósticos, Moodle Educacyl y evaluación formativa.</p>
            </div>
            <div className="border border-gray-400 p-2 rounded bg-gray-50">
              <strong className="block text-black font-bold">P3 · Expansión (1)</strong>
              <p className="text-gray-700 mt-0.5">Investigación empírica MCR/KAIROS. Condicionada a validación de aula y resolución de Q1–Q7.</p>
            </div>
          </div>

          <table className="w-full text-left text-[10px] border border-gray-400">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-400">
                <th className="p-1">#</th>
                <th className="p-1">Intervención</th>
                <th className="p-1">Tarea Docente Facilitada</th>
                <th className="p-1">Prioridad</th>
              </tr>
            </thead>
            <tbody>
              {PRIORITY_MATRIX.map((item) => (
                <tr key={item.id} className="border-b border-gray-200">
                  <td className="p-1 font-mono font-bold">{item.id}</td>
                  <td className="p-1 font-semibold">{item.intervention}</td>
                  <td className="p-1">{item.teacherTask}</td>
                  <td className="p-1 font-bold">{item.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section 9: USAL Candidacy 5-Task Operational Chain */}
        <div className="print-avoid-break mb-8">
          <h2 className="text-lg font-serif font-bold border-b border-black pb-1 mb-2">
            9. Preparación de Candidatura: Cadena Operativa de 5 Tareas (Convocatoria 2026/R055/01)
          </h2>
          <div className="grid grid-cols-5 gap-1.5 text-[9px] border border-gray-300 p-2 rounded bg-gray-50 mb-2 text-gray-800">
            <div className="border-r border-gray-300 pr-1">
              <strong className="block text-black">1. Web DUA-DIG</strong>
              <span>Curación CMS, WCAG 2.2 AA y fichas 9 bloques.</span>
            </div>
            <div className="border-r border-gray-300 pr-1">
              <strong className="block text-black">2. Centros CyL</strong>
              <span>Visitas a colegios, soporte CFIE e intervenciones.</span>
            </div>
            <div className="border-r border-gray-300 pr-1">
              <strong className="block text-black">3. Datos RGPD</strong>
              <span>Base por intentos, seudonimización y ética.</span>
            </div>
            <div className="border-r border-gray-300 pr-1">
              <strong className="block text-black">4. SPSS & NVivo</strong>
              <span>Estadísticos, fiabilidad ordinal y análisis temático.</span>
            </div>
            <div>
              <strong className="block text-black">5. Informes USAL</strong>
              <span>Memorias, artículos JCR y depósito en GREDOS.</span>
            </div>
          </div>
          <p className="text-xs text-gray-800 leading-relaxed italic">
            Argumentario de entrevista: integración de antecedentes cuantitativos (ECODIES) y cualitativos (DigiCraft/NVivo) para optimizar el soporte a las escuelas rurales y urbanas de Castilla y León.
          </p>
        </div>

        {/* Section 10: 7 Blocking Questions */}
        <div className="print-avoid-break mb-8">
          <h2 className="text-lg font-serif font-bold border-b border-black pb-1 mb-2">
            10. Preguntas Bloqueantes previas al Despliegue Técnico
          </h2>
          <p className="text-xs text-gray-800 leading-relaxed">
            Siete consultas críticas documentadas (Q1: CMS USAL; Q2: Base de datos; Q3: Validaciones con menores; Q4: Moodle Educacyl; Q5: Instrumentos ECODIES; Q6: Licencias REA; Q7: Acompañamiento a claustros) dirigidas a la Dra. García-Valcárcel y a la Dra. Casillas Martín para asegurar cumplimiento normativo y coordinación científica.
          </p>
        </div>

        {/* Section 11 & 12: Internal Docs */}
        <div className="print-avoid-break mb-8">
          <h2 className="text-lg font-serif font-bold border-b border-black pb-1 mb-2">
            11 y 12. Dos Estructuras, Moodle y Herramientas Digitales DUA
          </h2>
          <p className="text-xs text-gray-800 leading-relaxed">
            Documentos consolidados: <em>DUA_DIG_Dos_estructuras_y_areas_nuevas</em> y <em>DUA_DIG_Dos_Respuestas_Completas_Herramientas_y_Moodle (2)</em>.
            Comparativa de la Estructura A (Taxonómica) frente a la Estructura B (Flujo Operativo Docente); especificación de las 3 nuevas áreas (Moodle, Laboratorio Multimodal y Banco de Evidencias); y protocolo de 5 directrices para la entrega multimodal en Entornos Virtuales de Aprendizaje (Moodle/Educacyl) junto a la matriz de evaluación DUA de 8 herramientas de autor.
          </p>
        </div>

        {/* Section 13: Formative Evaluation Protocol */}
        <div className="print-avoid-break mb-8">
          <h2 className="text-lg font-serif font-bold border-b border-black pb-1 mb-2">
            13. Protocolo de Evaluación Formativa Inclusiva (DUA_DIG_Protocolo_Evaluación_Formativa)
          </h2>
          <p className="text-xs text-gray-800 leading-relaxed mb-2">
            Marco metodológico institucional para evaluar el aprendizaje competencial sin sesgos de decodificación lectora o motricidad, eliminando la barrera del examen único tradicional memorístico y punitivo.
          </p>

          <div className="border-l-2 border-black pl-3 py-1 my-2 bg-gray-50 text-[11px] italic text-gray-800 font-serif">
            «Si un instrumento evaluativo penaliza la dislexia cuando lo que se pretende medir es la competencia en ciberseguridad, no estamos midiendo competencia: estamos midiendo discapacidad».
          </div>

          {/* 3 Hitos de Observación de Aula */}
          <div className="mb-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-1.5">
              13.1. Los 3 Hitos de Observación Pedagógica (Cuaderno No Punitivo)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-[10px] text-gray-800">
              <div className="border border-gray-300 p-2 rounded bg-gray-50/50">
                <strong className="block text-black font-mono">HITO 1: Enganche y Autorregulación</strong>
                <p className="mt-0.5">Registro de la latencia hasta iniciar la tarea y elección autónoma de la modalidad de entrada (texto, audio o pictograma).</p>
              </div>
              <div className="border border-gray-300 p-2 rounded bg-gray-50/50">
                <strong className="block text-black font-mono">HITO 2: Andamiajes Funcionales</strong>
                <p className="mt-0.5">Identificación de apoyos temporales desvanecibles requeridos (pistas escalonadas, autocomprobación) y su retirada paulatina.</p>
              </div>
              <div className="border border-gray-300 p-2 rounded bg-gray-50/50">
                <strong className="block text-black font-mono">HITO 3: Transferencia Situada</strong>
                <p className="mt-0.5">Comprobación del dominio del constructo conceptual en una situación o dilema nuevo sin asistencia del docente.</p>
              </div>
            </div>
          </div>

          {/* Escala Continua de 4 Estadios */}
          <div className="mb-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-1.5">
              13.2. Escala Continua de 4 Estadios de Progreso Observable
            </h3>
            <table className="w-full text-left text-[10px] border border-gray-400">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-400">
                  <th className="p-1 font-bold">Estadio de Progreso</th>
                  <th className="p-1 font-bold">Descriptor Observable en Aula</th>
                  <th className="p-1 font-bold">Acción Pedagógica Docente</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-1 font-bold text-black">1. Emergente</td>
                  <td className="p-1">Requiere modelo resuelto completo y apoyo verbal continuo para iniciar la tarea.</td>
                  <td className="p-1">Mantener andamiaje de modelado con desvanecimiento gradual (Prompt Fading).</td>
                </tr>
                <tr>
                  <td className="p-1 font-bold text-black">2. En desarrollo</td>
                  <td className="p-1">Ejecuta los pasos intermedios utilizando tarjetas de autocomprobación y esquemas visuales.</td>
                  <td className="p-1">Distanciar la presencia docente a 2 metros; reforzar la autorregulación.</td>
                </tr>
                <tr>
                  <td className="p-1 font-bold text-black">3. Autónomo</td>
                  <td className="p-1">Resuelve la tarea completa en cualquiera de las modalidades DUA elegidas sin asistencia.</td>
                  <td className="p-1">Retirar apoyos secundarios y plantear el reto de transferencia inmediata.</td>
                </tr>
                <tr>
                  <td className="p-1 font-bold text-black">4. Transferente</td>
                  <td className="p-1">Aplica el principio a dilemas cotidianos desconocidos y apoya a compañeros en sus tareas.</td>
                  <td className="p-1">Proporcionar desafíos de mayor profundidad relacional, creación y metaética.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Rúbricas de Respuesta Diversificada */}
          <div className="mb-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-1.5">
              13.3. Rúbricas de Respuesta Diversificada (Multimodalidad Evaluativa)
            </h3>
            <table className="w-full text-left text-[10px] border border-gray-400">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-400">
                  <th className="p-1 font-bold">Canal Expresivo</th>
                  <th className="p-1 font-bold">Formatos de Entrega Homologados</th>
                  <th className="p-1 font-bold">Criterio de Validez Inclusiva (No Penalización)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-1 font-bold">Oral / Sonoro</td>
                  <td className="p-1">Nota de voz (grabación en Moodle, Audacity, Vocaroo), podcast explicativo de 90s.</td>
                  <td className="p-1">Evalúa la coherencia del argumento y dominio de términos, sin penalizar disfluencias.</td>
                </tr>
                <tr>
                  <td className="p-1 font-bold">Visual / Esquema</td>
                  <td className="p-1">Mapa conceptual en CmapTools, infografía con Canva/Genially o dibujo secuencial.</td>
                  <td className="p-1">Evalúa las relaciones semánticas entre conceptos, sin juzgar destreza artística o caligráfica.</td>
                </tr>
                <tr>
                  <td className="p-1 font-bold">Escrito Accesible</td>
                  <td className="p-1">Procesador de textos con corrector ortográfico, dictado por voz y tipografía OpenDyslexic.</td>
                  <td className="p-1">Evalúa la comprensión del concepto, sin penalizar errores mecánicos de ortografía natural.</td>
                </tr>
                <tr>
                  <td className="p-1 font-bold">Manipulativo / Digital</td>
                  <td className="p-1">Prototipo físico, maqueta con bloques, simulación interactiva Scratch o robótica educativa.</td>
                  <td className="p-1">Evalúa la operatividad del principio lógico mediante modelado y resolución práctica.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Triangulación Evaluativa */}
          <div className="p-2 border border-gray-300 rounded bg-gray-50 text-[10px] text-gray-800">
            <strong className="block text-black font-bold uppercase tracking-wider font-mono mb-1">
              Triangulación Evaluativa de Evidencias (3 Agentes)
            </strong>
            <p className="leading-snug">
              <strong>Autoevaluación guiada:</strong> Semáforos pictográficos y escalas visuales donde el alumno reflexiona sobre su esfuerzo y meta antes de la entrega final. · 
              <strong> Coevaluación formativa:</strong> Diálogo entre pares con rúbricas en lectura fácil para enriquecer el trabajo mutuo. · 
              <strong> Heteroevaluación orientadora:</strong> Registro cualitativo docente enfocado en el progreso procesual y las barreras eliminadas del entorno.
            </p>
          </div>
        </div>

        {/* Section 14: Transfer Roadmap & Scalability */}
        <div className="print-avoid-break mb-8">
          <h2 className="text-lg font-serif font-bold border-b border-black pb-1 mb-2">
            14. Hoja de Ruta de Transferencia Pedagógica y Escalabilidad (DUA_DIG_Hoja_Ruta_Transferencia_Pedagógica)
          </h2>
          <p className="text-xs text-gray-800 leading-relaxed mb-3">
            Estrategia de transferencia e impacto territorial coordinada por el Grupo EduDIG (Universidad de Salamanca) para trasladar el conocimiento científico a la práctica real en aulas de Educación Infantil y Primaria de Castilla y León.
          </p>

          {/* Las 4 Fases de Transferencia */}
          <div className="mb-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2">
              Las 4 Fases de Transferencia Pedagógica
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] text-gray-800">
              <div className="border border-gray-300 p-2 rounded bg-gray-50/50">
                <strong className="block text-black">Fase 1: Diagnóstico Territorial y Alianzas (M1–M6)</strong>
                <p className="mt-0.5 leading-snug">
                  Convenios con la Red de Centros de Formación del Profesorado (CFIE), auditoría de conectividad y necesidades docentes basada en datos empíricos TALIS y marco europeo DigComp 2.2.
                </p>
              </div>
              <div className="border border-gray-300 p-2 rounded bg-gray-50/50">
                <strong className="block text-black">Fase 2: Co-diseño y Adaptación Curricular (M7–M12)</strong>
                <p className="mt-0.5 leading-snug">
                  Mesas de trabajo conjunto entre investigadores de EduDIG y maestros en activo para crear y validar fichas de aula normalizadas de 9 bloques, bancos de andamiajes y recursos abiertos.
                </p>
              </div>
              <div className="border border-gray-300 p-2 rounded bg-gray-50/50">
                <strong className="block text-black">Fase 3: Pilotaje Experimental en Aulas (M13–M24)</strong>
                <p className="mt-0.5 leading-snug">
                  Despliegue en aulas de Salamanca, Zamora y Ávila con grupos experimental y control, triangulación mediante el Cuaderno de Observación No Punitivo, y análisis con SPSS y NVivo/ATLAS.ti.
                </p>
              </div>
              <div className="border border-gray-300 p-2 rounded bg-gray-50/50">
                <strong className="block text-black">Fase 4: Institucionalización y Difusión (M25–M36)</strong>
                <p className="mt-0.5 leading-snug">
                  Publicación de recursos en el repositorio GREDOS (USAL) con licencias CC BY-SA 4.0, integración en el catálogo de la Consejería de Educación y jornadas formativas autonómicas.
                </p>
              </div>
            </div>
          </div>

          {/* Indicadores Clave de Éxito a 3 Años */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2">
              Indicadores Clave de Éxito y Sostenibilidad a 3 Años (KPIs)
            </h3>
            <table className="w-full text-left text-[10px] border border-gray-400">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-400">
                  <th className="p-1 font-bold">Dimensión de Impacto</th>
                  <th className="p-1 font-bold">Meta Cuantitativa a 3 Años</th>
                  <th className="p-1 font-bold">Mecanismo de Verificación</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-1 font-medium">Cobertura de Centros</td>
                  <td className="p-1 font-bold">≥ 30 centros educativos</td>
                  <td className="p-1">Convenios de pilotaje con CFIE y registros de centro.</td>
                </tr>
                <tr>
                  <td className="p-1 font-medium">Alumnado Beneficiado</td>
                  <td className="p-1 font-bold">≥ 1.200 discentes de Infantil y Primaria</td>
                  <td className="p-1">Registros de aula y evaluaciones formativas trianguladas.</td>
                </tr>
                <tr>
                  <td className="p-1 font-medium">Capacitación Docente</td>
                  <td className="p-1 font-bold">≥ 150 maestros certificados</td>
                  <td className="p-1">Cursos homologados de formación continua USAL-CFIE.</td>
                </tr>
                <tr>
                  <td className="p-1 font-medium">Ciencia Abierta (Open Access)</td>
                  <td className="p-1 font-bold">100% recursos con CC BY-SA 4.0</td>
                  <td className="p-1">Depósito institucional en repositorio GREDOS (USAL).</td>
                </tr>
                <tr>
                  <td className="p-1 font-medium">Producción Científica</td>
                  <td className="p-1 font-bold">≥ 4 artículos indexados (JCR/Scopus)</td>
                  <td className="p-1">Publicaciones de transferencia y evidencia empírica DUA.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* PDF Export Modal */}
      <PdfExportModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />
    </div>
  );
}
