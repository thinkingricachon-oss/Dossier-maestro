/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Prototipo Interactivo de las 4 Pantallas Clave Rediseñadas
 * 1. Portada orientada a tareas
 * 2. Catálogo facetado no diagnóstico
 * 3. Ficha operativa normalizada de 9 bloques
 * 4. Guía «Cómo empezar» con checklist de aula
 */

import React, { useState } from "react";
import { RESOURCES_CATALOGUE, ResourceItem } from "../data/catalogueData";
import { 
  Search, 
  Filter, 
  Download, 
  CheckSquare, 
  Printer, 
  ArrowLeft, 
  Laptop, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  SlidersHorizontal,
  ChevronRight,
  Eye,
  FileText,
  Volume2,
  CheckCircle,
  HelpCircle,
  Building2,
  BookOpen,
  MapPin,
  ExternalLink
} from "lucide-react";

export type PrototypeScreen = "portada" | "catalogo" | "ficha" | "guia";

interface PrototypeViewerProps {
  onOpenPdfModal: () => void;
}

export const PrototypeViewer: React.FC<PrototypeViewerProps> = ({ onOpenPdfModal }) => {
  const [currentScreen, setCurrentScreen] = useState<PrototypeScreen>("portada");
  const [selectedResourceId, setSelectedResourceId] = useState<string>("res-giratic");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterStage, setFilterStage] = useState<string>("all");
  const [filterTech, setFilterTech] = useState<string>("all");
  const [filterDuaAccess, setFilterDuaAccess] = useState<string>("all");
  const [filterDuaResponse, setFilterDuaResponse] = useState<string>("all");
  
  // Section 5.3: Optional City metaphor toggle (strictly optional, 0 points)
  const [showCityMetaphor, setShowCityMetaphor] = useState<boolean>(false);

  // Classroom checklist state for Screen 4
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    check1: true,
    check2: true,
    check3: false,
    check4: false,
    check5: false,
  });

  const selectedResource = RESOURCES_CATALOGUE.find(r => r.id === selectedResourceId) || RESOURCES_CATALOGUE[0];

  const handleOpenResource = (id: string) => {
    setSelectedResourceId(id);
    setCurrentScreen("ficha");
  };

  // Filter logic
  const filteredResources = RESOURCES_CATALOGUE.filter((item) => {
    const matchesSearch = searchQuery === "" || 
      item.officialTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.block1Decision.targetCompetence.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStage = filterStage === "all" || item.stage === filterStage;
    const matchesTech = filterTech === "all" || item.techRequirement === filterTech;
    const matchesAccess = filterDuaAccess === "all" || item.duaAccessModality === filterDuaAccess;
    const matchesResponse = filterDuaResponse === "all" || item.duaResponseModality === filterDuaResponse;

    return matchesSearch && matchesStage && matchesTech && matchesAccess && matchesResponse;
  });

  const toggleChecklist = (key: string) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full min-h-screen bg-[#FBF9F5] text-stone-900">
      {/* Top Prototype Navigation Bar */}
      <div className="no-print bg-stone-900 text-stone-200 px-6 py-2.5 text-xs font-sans border-b border-stone-800">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-stone-100">PROTOTIPO OPERATIVO REDISEÑADO:</span>
            <span className="text-stone-400">Selecciona pantalla clave</span>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-stone-800/90 rounded-md">
            <button
              onClick={() => setCurrentScreen("portada")}
              className={`px-3 py-1 rounded transition-colors ${currentScreen === "portada" ? "bg-stone-100 text-stone-950 font-medium" : "text-stone-300 hover:text-white"}`}
            >
              1. Portada Tareas
            </button>
            <button
              onClick={() => setCurrentScreen("catalogo")}
              className={`px-3 py-1 rounded transition-colors ${currentScreen === "catalogo" ? "bg-stone-100 text-stone-950 font-medium" : "text-stone-300 hover:text-white"}`}
            >
              2. Catálogo Facetado
            </button>
            <button
              onClick={() => setCurrentScreen("ficha")}
              className={`px-3 py-1 rounded transition-colors ${currentScreen === "ficha" ? "bg-stone-100 text-stone-950 font-medium" : "text-stone-300 hover:text-white"}`}
            >
              3. Ficha 9 Bloques
            </button>
            <button
              onClick={() => setCurrentScreen("guia")}
              className={`px-3 py-1 rounded transition-colors ${currentScreen === "guia" ? "bg-stone-100 text-stone-950 font-medium" : "text-stone-300 hover:text-white"}`}
            >
              4. Guía 5 Pasos
            </button>
          </div>

          {/* Optional City Metaphor Toggle (Section 5.3) */}
          <div className="flex items-center gap-2">
            <label className="flex items-center gap-1.5 cursor-pointer text-stone-300 hover:text-white">
              <input
                type="checkbox"
                checked={showCityMetaphor}
                onChange={(e) => setShowCityMetaphor(e.target.checked)}
                className="rounded border-stone-600 text-amber-600 focus:ring-0"
              />
              <span>Modo Ciudad Educativa (Opcional)</span>
            </label>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SCREEN 1: PORTADA ORIENTADA A TAREAS */}
      {/* ========================================================================= */}
      {currentScreen === "portada" && (
        <div className="animate-fadeIn">
          {/* Institutional Banner */}
          <header className="border-b border-stone-200 bg-white px-6 py-6 lg:px-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-stone-500 font-sans block mb-1">
                  Universidad de Salamanca · Grupo EduDIG · Proyecto DUA-DIG
                </span>
                <span className="font-serif text-2xl font-bold tracking-tight text-stone-900">
                  Recursos Digitales DUA-DIG
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-stone-600 font-sans">
                <span className="hidden sm:inline">Facultad de Educación</span>
                <span aria-hidden="true" className="hidden sm:inline">·</span>
                <span className="px-2.5 py-1 bg-stone-100 rounded text-stone-700 font-medium">
                  Transferencia a Infantil y Primaria
                </span>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <section className="px-6 lg:px-12 py-12 md:py-16 max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold tracking-wider uppercase text-amber-900/90 mb-2 block font-sans">
                Diseño Universal para el Aprendizaje en Centros Educativos
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 leading-[1.18] text-balance">
                Recursos digitales para preparar actividades inclusivas en Infantil y Primaria
              </h1>
              <p className="mt-4 text-base sm:text-lg text-stone-600 font-sans leading-relaxed">
                Encuentra materiales contrastados, anticipa sus requisitos de aula y prepara pruebas observables de aprendizaje sin sobrecarga.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setCurrentScreen("catalogo")}
                  className="px-5 py-2.5 bg-stone-900 text-stone-50 rounded-md text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm flex items-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  <span>Explorar catálogo completo</span>
                </button>
                <button
                  onClick={() => setCurrentScreen("guia")}
                  className="px-5 py-2.5 bg-white border border-stone-300 text-stone-800 rounded-md text-sm font-medium hover:bg-stone-50 transition-colors flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-stone-500" />
                  <span>Cómo elegir un recurso (Guía rápida)</span>
                </button>
              </div>
            </div>

            {/* Central Decision Module: "¿Qué necesitas preparar hoy?" */}
            <div className="mt-14 p-6 sm:p-8 bg-white border border-stone-200/90 rounded-xl shadow-xs">
              <div className="border-b border-stone-200 pb-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-1">
                  MÓDULO DE DECISIÓN DOCENTE
                </span>
                <h2 className="font-serif text-2xl font-semibold text-stone-900">
                  ¿Qué necesitas preparar hoy para tu clase?
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 font-sans mt-1">
                  Selecciona la vía directa según la fase en que te encuentres de tu diseño didáctico.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Route 1 */}
                <div 
                  onClick={() => setCurrentScreen("catalogo")}
                  className="p-5 rounded-lg border border-stone-200 hover:border-stone-400 bg-[#FBF9F5] transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-amber-900/80 mb-2 block">01 / ENCONTRAR</span>
                    <h3 className="font-serif text-lg font-semibold text-stone-900 group-hover:text-stone-950">
                      1. Encontrar una actividad nueva
                    </h3>
                    <p className="mt-2 text-xs text-stone-600 leading-relaxed font-sans">
                      Busca materiales según tu dotación técnica (sin pantallas, proyector o tabletas) y por etapa de Primaria.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center text-xs font-medium text-stone-800 group-hover:text-stone-950">
                    <span>Ver catálogo filtrable</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Route 2 */}
                <div 
                  onClick={() => {
                    handleOpenResource("res-giratic");
                  }}
                  className="p-5 rounded-lg border border-stone-200 hover:border-stone-400 bg-[#FBF9F5] transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-stone-600 mb-2 block">02 / ADAPTAR</span>
                    <h3 className="font-serif text-lg font-semibold text-stone-900 group-hover:text-stone-950">
                      2. Adaptar un material que ya utilizo
                    </h3>
                    <p className="mt-2 text-xs text-stone-600 leading-relaxed font-sans">
                      Aprende qué partes del recurso puedes modificar sin perder el objetivo competencial (Bloque 6 de Adaptabilidad).
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center text-xs font-medium text-stone-800 group-hover:text-stone-950">
                    <span>Revisar ficha de adaptabilidad</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Route 3 */}
                <div 
                  onClick={() => setCurrentScreen("guia")}
                  className="p-5 rounded-lg border border-stone-200 hover:border-stone-400 bg-[#FBF9F5] transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-stone-600 mb-2 block">03 / FLEXIBILIZAR</span>
                    <h3 className="font-serif text-lg font-semibold text-stone-900 group-hover:text-stone-950">
                      3. Ofrecer nuevas opciones DUA
                    </h3>
                    <p className="mt-2 text-xs text-stone-600 leading-relaxed font-sans">
                      Incorpora alternativas sensoriales (soporte auditivo, lectura fácil, respuesta oral o gráfica) para evaluar comprensión real.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center text-xs font-medium text-stone-800 group-hover:text-stone-950">
                    <span>Consultar guía de aula</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>

            {/* Optional City Metaphor Illustration Banner (Section 5.3) */}
            {showCityMetaphor && (
              <div className="mt-12 p-6 rounded-xl bg-amber-50/70 border border-amber-200">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-amber-900 block mb-1">
                      Metáfora Espacial «Ciudad Educativa» (100% Opcional · Sin Puntos ni Bloqueos)
                    </span>
                    <h3 className="font-serif text-xl font-medium text-stone-900">
                      Exploración visual complementaria
                    </h3>
                    <p className="text-xs text-stone-700 mt-1 max-w-2xl">
                      Diseñada según la recomendación del Dossier (Pozzi & Persico, 2024): sin elementos competitivos, vidas ni mecánicas adictivas.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowCityMetaphor(false)}
                    className="text-xs text-stone-500 hover:text-stone-800 underline"
                  >
                    Ocultar mapa
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <div 
                    onClick={() => setCurrentScreen("catalogo")}
                    className="p-4 bg-white border border-amber-200/80 rounded-lg cursor-pointer hover:border-amber-400"
                  >
                    <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
                      <Building2 className="w-4 h-4 text-amber-800" />
                      <span>La Biblioteca (Repositorio)</span>
                    </div>
                    <p className="text-xs text-stone-600 mt-1">Acceso tabular a todos los recursos y guías didácticas.</p>
                  </div>
                  <div 
                    onClick={() => handleOpenResource("res-giratic")}
                    className="p-4 bg-white border border-amber-200/80 rounded-lg cursor-pointer hover:border-amber-400"
                  >
                    <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
                      <BookOpen className="w-4 h-4 text-amber-800" />
                      <span>El Taller (Fichas y Adaptaciones)</span>
                    </div>
                    <p className="text-xs text-stone-600 mt-1">Personalización de secuencias didácticas y tiempos de aula.</p>
                  </div>
                  <div 
                    onClick={() => setCurrentScreen("guia")}
                    className="p-4 bg-white border border-amber-200/80 rounded-lg cursor-pointer hover:border-amber-400"
                  >
                    <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
                      <MapPin className="w-4 h-4 text-amber-800" />
                      <span>La Plaza (Comunidad e Intercambio)</span>
                    </div>
                    <p className="text-xs text-stone-600 mt-1">Experiencias y evidencias empíricas de centros escolares.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Formats Overview List */}
            <div className="mt-14 border-t border-stone-200 pt-8">
              <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold block mb-3 font-sans">
                13 Formatos Educativos Disponibles en el Catálogo USAL
              </span>
              <div className="flex flex-wrap gap-2 text-xs text-stone-600 font-sans">
                {["Juegos interactivos", "Secuencias de vídeo", "Infografías accesibles", "Pódcasts escolares", "Fichas didácticas", "Guías metodológicas", "Paneles visuales", "Tarjetas de debate", "Rúbricas DUA", "Cuestionarios reflexivos", "Presentaciones PDI", "Cómics didácticos", "Talleres manipulativos"].map((fmt, idx) => (
                  <span key={idx} className="bg-white border border-stone-200 px-3 py-1 rounded text-stone-700">
                    {fmt}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SCREEN 2: CATÁLOGO FACETADO NO DIAGNÓSTICO */}
      {/* ========================================================================= */}
      {currentScreen === "catalogo" && (
        <div className="animate-fadeIn max-w-6xl mx-auto px-6 lg:px-12 py-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-sans text-stone-500 mb-6">
            <button onClick={() => setCurrentScreen("portada")} className="hover:text-stone-900">Inicio</button>
            <span>/</span>
            <span className="text-stone-900 font-semibold">Catálogo de Recursos</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-stone-200">
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-900 font-semibold block mb-1">
                Búsqueda Facetada No Diagnóstica
              </span>
              <h1 className="font-serif text-3xl font-semibold text-stone-900">
                Catálogo de Recursos Didácticos DUA-DIG
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl font-sans">
                Filtra por condiciones operativas reales de tu aula (etapa y tecnología disponible) y opciones sensoriales DUA, sin etiquetar a los alumnos por supuestas categorías clínicas.
              </p>
            </div>
            <div className="text-xs font-mono text-stone-500">
              {filteredResources.length} de {RESOURCES_CATALOGUE.length} recursos disponibles
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-6 relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por tema, objetivo competencial o destreza digital (ej. contraseñas, privacidad, huella)..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>

          {/* Functional Filters (Anti-diagnostic labels) */}
          <div className="mt-6 p-4 bg-white border border-stone-200 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-sans">
            {/* Filter: Etapa */}
            <div>
              <label className="font-semibold text-stone-700 block mb-1.5">Etapa Educativa:</label>
              <select
                value={filterStage}
                onChange={(e) => setFilterStage(e.target.value)}
                className="w-full p-2 bg-[#FBF9F5] border border-stone-300 rounded text-stone-800 text-xs focus:outline-none"
              >
                <option value="all">Todas las etapas</option>
                <option value="Infantil">Educación Infantil (5 años)</option>
                <option value="1.º-2.º Primaria">1.º - 2.º Primaria (6-8 años)</option>
                <option value="3.º-4.º Primaria">3.º - 4.º Primaria (8-10 años)</option>
                <option value="5.º-6.º Primaria">5.º - 6.º Primaria (10-12 años)</option>
              </select>
            </div>

            {/* Filter: Dotación Técnica */}
            <div>
              <label className="font-semibold text-stone-700 block mb-1.5">Dotación Técnica:</label>
              <select
                value={filterTech}
                onChange={(e) => setFilterTech(e.target.value)}
                className="w-full p-2 bg-[#FBF9F5] border border-stone-300 rounded text-stone-800 text-xs focus:outline-none"
              >
                <option value="all">Cualquier dotación</option>
                <option value="Sin pantallas (offline)">Sin pantallas (offline / papel)</option>
                <option value="1 proyector colectivo">1 proyector o PDI de aula</option>
                <option value="Dispositivos compartidos">Dispositivos compartidos (parejas)</option>
                <option value="1 dispositivo por alumno">1 dispositivo individual</option>
              </select>
            </div>

            {/* Filter: Modalidad DUA Representación */}
            <div>
              <label className="font-semibold text-stone-700 block mb-1.5">Acceso DUA (Entrada):</label>
              <select
                value={filterDuaAccess}
                onChange={(e) => setFilterDuaAccess(e.target.value)}
                className="w-full p-2 bg-[#FBF9F5] border border-stone-300 rounded text-stone-800 text-xs focus:outline-none"
              >
                <option value="all">Todas las vías</option>
                <option value="Con soporte auditivo">Con soporte auditivo / voz</option>
                <option value="Con transcripción/lectura">Con transcripción o lectura</option>
                <option value="Con apoyos pictográficos">Con apoyos pictográficos</option>
              </select>
            </div>

            {/* Filter: Modalidad DUA Respuesta */}
            <div>
              <label className="font-semibold text-stone-700 block mb-1.5">Respuesta DUA (Salida):</label>
              <select
                value={filterDuaResponse}
                onChange={(e) => setFilterDuaResponse(e.target.value)}
                className="w-full p-2 bg-[#FBF9F5] border border-stone-300 rounded text-stone-800 text-xs focus:outline-none"
              >
                <option value="all">Todas las modalidades</option>
                <option value="Respuesta oral">Respuesta oral / diálogo</option>
                <option value="Manipulativa/gráfica">Manipulativa o gráfica</option>
                <option value="Escrita pautada">Escrita pautada con modelo</option>
              </select>
            </div>
          </div>

          {/* Active Filter Reset */}
          {(filterStage !== "all" || filterTech !== "all" || filterDuaAccess !== "all" || filterDuaResponse !== "all" || searchQuery !== "") && (
            <div className="mt-3 flex items-center justify-between text-xs text-stone-500 font-sans">
              <span>Filtros aplicados activos</span>
              <button
                onClick={() => {
                  setFilterStage("all");
                  setFilterTech("all");
                  setFilterDuaAccess("all");
                  setFilterDuaResponse("all");
                  setSearchQuery("");
                }}
                className="text-stone-800 underline hover:text-stone-950 font-medium"
              >
                Restablecer todos los filtros
              </button>
            </div>
          )}

          {/* Resources Cards Grid */}
          <div className="mt-8 space-y-4">
            {filteredResources.length === 0 ? (
              <div className="p-8 text-center bg-white border border-stone-200 rounded-lg">
                <p className="text-stone-600 text-sm">No se han encontrado recursos con la combinación exacta de filtros.</p>
                <button
                  onClick={() => {
                    setFilterStage("all");
                    setFilterTech("all");
                    setFilterDuaAccess("all");
                    setFilterDuaResponse("all");
                    setSearchQuery("");
                  }}
                  className="mt-3 px-3 py-1.5 bg-stone-900 text-white rounded text-xs"
                >
                  Ver catálogo completo
                </button>
              </div>
            ) : (
              filteredResources.map((item) => (
                <article
                  key={item.id}
                  className="p-5 bg-white border border-stone-200 rounded-lg hover:border-stone-400 transition-all shadow-xs flex flex-col md:flex-row md:items-start justify-between gap-6"
                >
                  <div className="space-y-2.5 flex-1">
                    {/* Unboxed metadata line with typographic separators (anti-pill) */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 font-sans">
                      <span className="font-semibold text-stone-700">{item.formatType}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.stage}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.techRequirement}</span>
                      <span aria-hidden="true">·</span>
                      <span className={`font-medium ${
                        item.evidenceStatus === "Investigado con evidencia"
                          ? "text-emerald-800"
                          : item.evidenceStatus === "Pilotado en centros"
                          ? "text-amber-800"
                          : "text-stone-600"
                      }`}>
                        {item.evidenceStatus}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-stone-900 hover:text-stone-950">
                      <button
                        onClick={() => handleOpenResource(item.id)}
                        className="text-left hover:underline"
                      >
                        {item.officialTitle}
                      </button>
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                      {item.shortDescription}
                    </p>

                    <div className="pt-2 text-xs text-stone-500 flex flex-wrap items-center gap-4">
                      <span><strong>Meta observable:</strong> {item.block1Decision.observableLearningGoal}</span>
                      <span><strong>Tiempo estimado:</strong> {item.block2Preparation.estimatedTimeMinutes} min</span>
                    </div>
                  </div>

                  <div className="flex md:flex-col items-center justify-end gap-2 shrink-0">
                    <button
                      onClick={() => handleOpenResource(item.id)}
                      className="w-full px-4 py-2 bg-stone-900 text-stone-50 rounded text-xs font-medium hover:bg-stone-800 transition-colors whitespace-nowrap shadow-xs"
                    >
                      Abrir Ficha de 9 Bloques
                    </button>
                    <button
                      onClick={onOpenPdfModal}
                      className="w-full px-3 py-1.5 border border-stone-300 text-stone-700 rounded text-xs font-medium hover:bg-stone-50 transition-colors whitespace-nowrap"
                    >
                      Imprimir Tarjeta
                    </button>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SCREEN 3: FICHA OPERATIVA NORMALIZADA (9 BLOQUES) */}
      {/* ========================================================================= */}
      {currentScreen === "ficha" && (
        <div className="animate-fadeIn max-w-5xl mx-auto px-6 lg:px-12 py-10">
          {/* Breadcrumbs and Back */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <button
              onClick={() => setCurrentScreen("catalogo")}
              className="flex items-center gap-1.5 text-xs font-medium text-stone-600 hover:text-stone-950 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver al catálogo</span>
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenPdfModal}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-stone-300 text-stone-700 rounded text-xs font-medium hover:bg-stone-50"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Imprimir Tarjeta de Aula (1 pág.)</span>
              </button>
            </div>
          </div>

          {/* Ficha Header Card */}
          <header className="p-6 bg-white border border-stone-200 rounded-t-xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-stone-500 mb-2">
              <span className="font-semibold text-stone-700">{selectedResource.formatType}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedResource.stage}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedResource.techRequirement}</span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-emerald-800">{selectedResource.evidenceStatus}</span>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
              {selectedResource.officialTitle}
            </h1>
            <p className="mt-2 text-sm text-stone-600 font-sans">
              {selectedResource.shortDescription}
            </p>
          </header>

          {/* 9-Block Grid Content */}
          <div className="bg-white border-x border-b border-stone-200 rounded-b-xl divide-y divide-stone-200 text-xs sm:text-sm font-sans">
            {/* BLOQUE 1 */}
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-900 mb-2 uppercase">
                <span>01. Decisión Inicial</span>
                <span className="text-stone-400">·</span>
                <span>Objetivo y Meta Observable</span>
              </div>
              <p className="text-stone-800 font-medium">{selectedResource.block1Decision.targetCompetence}</p>
              <p className="mt-2 text-stone-700"><strong>Meta observable en clase:</strong> {selectedResource.block1Decision.observableLearningGoal}</p>
              <p className="mt-2 text-stone-600 italic"><strong>Por qué utilizarlo:</strong> {selectedResource.block1Decision.whyUseIt}</p>
            </div>

            {/* BLOQUE 2 */}
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-600 mb-2 uppercase">
                <span>02. Preparación de Aula</span>
                <span className="text-stone-400">·</span>
                <span>Tiempos, Hardware y Conectividad</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2 text-xs">
                <div className="p-2.5 bg-stone-50 rounded border border-stone-200">
                  <span className="text-stone-500 block">Tiempo estimado:</span>
                  <strong className="text-stone-900">{selectedResource.block2Preparation.estimatedTimeMinutes} minutos</strong>
                </div>
                <div className="p-2.5 bg-stone-50 rounded border border-stone-200">
                  <span className="text-stone-500 block">Hardware requerido:</span>
                  <strong className="text-stone-900">{selectedResource.block2Preparation.requiredHardware}</strong>
                </div>
                <div className="p-2.5 bg-stone-50 rounded border border-stone-200">
                  <span className="text-stone-500 block">Conexión a internet:</span>
                  <strong className="text-stone-900">{selectedResource.block2Preparation.internetRequired ? "Necesaria" : "No requerida (100% offline)"}</strong>
                </div>
              </div>
              <div className="mt-3">
                <strong className="text-stone-800 text-xs block mb-1">Pasos de preparación previa:</strong>
                <ul className="list-disc list-inside space-y-1 text-stone-600 text-xs">
                  {selectedResource.block2Preparation.priorSetupSteps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* BLOQUE 3 */}
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-600 mb-2 uppercase">
                <span>03. Prerrequisitos de Alumnado</span>
              </div>
              <p className="text-stone-700"><strong>Nivel de lectura requerido:</strong> {selectedResource.block3Prerequisites.readingLevelRequired}</p>
              <p className="mt-1 text-stone-700"><strong>Destreza técnica previa:</strong> {selectedResource.block3Prerequisites.digitalSkillsRequired}</p>
              <div className="mt-2 text-xs text-stone-500 flex items-center gap-2">
                <span>Conceptos curriculares previos:</span>
                {selectedResource.block3Prerequisites.priorCurricularConcepts.map((c, i) => (
                  <span key={i} className="px-2 py-0.5 bg-stone-100 rounded text-stone-700 font-medium">{c}</span>
                ))}
              </div>
            </div>

            {/* BLOQUE 4 */}
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-600 mb-2 uppercase">
                <span>04. Secuencia de Uso en el Aula</span>
              </div>
              <div className="space-y-2 text-stone-700">
                <div className="p-2.5 bg-[#FBF9F5] border border-stone-200 rounded">
                  <strong className="text-stone-900">1. {selectedResource.block4UsageSequence.introStep}</strong>
                </div>
                <div className="p-2.5 bg-[#FBF9F5] border border-stone-200 rounded">
                  <strong className="text-stone-900">2. {selectedResource.block4UsageSequence.developmentStep}</strong>
                </div>
                <div className="p-2.5 bg-[#FBF9F5] border border-stone-200 rounded">
                  <strong className="text-stone-900">3. {selectedResource.block4UsageSequence.closureStep}</strong>
                </div>
              </div>
            </div>

            {/* BLOQUE 5 */}
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-600 mb-2 uppercase">
                <span>05. Opciones DUA Incorporadas</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-stone-50 border border-stone-200 rounded">
                  <strong className="text-stone-900 block mb-1">Representación:</strong>
                  <ul className="list-disc list-inside space-y-1 text-stone-600">
                    {selectedResource.block5DuaOptions.representationOptions.map((o, idx) => (
                      <li key={idx}>{o}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-3 bg-stone-50 border border-stone-200 rounded">
                  <strong className="text-stone-900 block mb-1">Acción y Expresión:</strong>
                  <ul className="list-disc list-inside space-y-1 text-stone-600">
                    {selectedResource.block5DuaOptions.actionExpressionOptions.map((o, idx) => (
                      <li key={idx}>{o}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-3 bg-stone-50 border border-stone-200 rounded">
                  <strong className="text-stone-900 block mb-1">Implicación / Compromiso:</strong>
                  <ul className="list-disc list-inside space-y-1 text-stone-600">
                    {selectedResource.block5DuaOptions.engagementOptions.map((o, idx) => (
                      <li key={idx}>{o}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* BLOQUE 6 */}
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-600 mb-2 uppercase">
                <span>06. Adaptabilidad (Qué tocar y qué no)</span>
              </div>
              <div className="p-3 bg-amber-50/60 border border-amber-200 rounded text-xs space-y-1.5">
                <p><strong className="text-amber-950">Núcleo invariable a preservar:</strong> {selectedResource.block6Adaptability.invariableCore}</p>
                <div className="text-stone-700">
                  <strong>Elementos flexibles modificables:</strong>
                  <ul className="list-disc list-inside space-y-0.5 mt-1">
                    {selectedResource.block6Adaptability.flexibleElements.map((el, i) => (
                      <li key={i}>{el}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* BLOQUE 7 */}
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-600 mb-2 uppercase">
                <span>07. Pauta de Observación y Ajuste</span>
              </div>
              <div className="space-y-1.5 text-xs text-stone-700">
                <p><strong className="text-stone-900">Indicador observable de éxito:</strong> {selectedResource.block7ObservationRubric.observableSuccessIndicator}</p>
                <p><strong className="text-red-900">Obstáculo común a detectar:</strong> {selectedResource.block7ObservationRubric.commonObstacleToDetect}</p>
                <p><strong className="text-emerald-900">Ajuste pedagógico sugerido:</strong> {selectedResource.block7ObservationRubric.suggestedAdjustment}</p>
              </div>
            </div>

            {/* BLOQUE 8 */}
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-600 mb-2 uppercase">
                <span>08. Archivos y Licenciamiento</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 p-3 bg-stone-50 border border-stone-200 rounded text-xs">
                <div>
                  <p><strong className="text-stone-900">Formato:</strong> {selectedResource.block8FilesAndLicensing.directDownloadFormat} ({selectedResource.block8FilesAndLicensing.fileSizeBytes})</p>
                  <p className="text-stone-600 mt-0.5"><strong>Licencia oficial:</strong> {selectedResource.block8FilesAndLicensing.licenseType}</p>
                  <p className="text-stone-500 text-[11px] mt-0.5">{selectedResource.block8FilesAndLicensing.institutionalAttribution}</p>
                </div>
                <button
                  onClick={() => alert(`Iniciando descarga simulada de ${selectedResource.officialTitle} (${selectedResource.block8FilesAndLicensing.fileSizeBytes})`)}
                  className="px-4 py-2 bg-stone-900 text-white rounded text-xs font-medium hover:bg-stone-800 transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Descargar paquete offline</span>
                </button>
              </div>
            </div>

            {/* BLOQUE 9 */}
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-600 mb-2 uppercase">
                <span>09. Estatus de Evidencia Científica</span>
              </div>
              <div className="p-3 bg-stone-50 border border-stone-200 rounded text-xs space-y-1">
                <p><strong className="text-stone-900">Categoría asignada:</strong> {selectedResource.block9EvidenceStatus.category}</p>
                <p className="text-stone-600">{selectedResource.block9EvidenceStatus.empiricalNotes}</p>
                <p className="text-stone-500 font-mono text-[11px] pt-1">Publicación asociada: {selectedResource.block9EvidenceStatus.publicationsRelated}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SCREEN 4: GUÍA «CÓMO EMPEZAR» EN 5 PASOS + CHECKLIST */}
      {/* ========================================================================= */}
      {currentScreen === "guia" && (
        <div className="animate-fadeIn max-w-4xl mx-auto px-6 lg:px-12 py-10">
          <header className="border-b border-stone-200 pb-6 mb-8">
            <span className="text-xs uppercase tracking-wider text-amber-900 font-semibold block mb-1">
              Itinerario Práctico sin Formación Teórica Previa
            </span>
            <h1 className="font-serif text-3xl font-semibold text-stone-900">
              Guía «Cómo Empezar»: Planificar y Validar en 5 Pasos
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 font-sans leading-relaxed">
              Diseñada para reducir la carga de preparación del profesorado de Primaria según la evidencia empírica de TALIS 2024.
            </p>
          </header>

          {/* 5 Steps Interactive Guide */}
          <div className="space-y-4">
            <div className="p-4 bg-white border border-stone-200 rounded-lg">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-amber-900">
                <span>PASO 01</span>
              </div>
              <h3 className="font-serif font-semibold text-lg text-stone-900 mt-1">
                1. Define el objetivo competencial y anticipa barreras
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Antes de buscar qué juego o vídeo utilizar, aclara qué destreza observable quieres que demuestre tu alumnado (ej. identificar 2 contraseñas seguras) y qué barrera puede surgir (lectura densa, motricidad o atención).
              </p>
            </div>

            <div className="p-4 bg-white border border-stone-200 rounded-lg">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-stone-600">
                <span>PASO 02</span>
              </div>
              <h3 className="font-serif font-semibold text-lg text-stone-900 mt-1">
                2. Revisa la Ficha de 9 Bloques antes de abrir el archivo
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Comprueba el Bloque 1 (Decisión inicial) y Bloque 2 (Tiempo y hardware). Si tu aula no tiene proyector o internet en esa sesión, descarta recursos que lo exijan antes de descargarlos.
              </p>
            </div>

            <div className="p-4 bg-white border border-stone-200 rounded-lg">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-stone-600">
                <span>PASO 03</span>
              </div>
              <h3 className="font-serif font-semibold text-lg text-stone-900 mt-1">
                3. Comprueba requerimientos técnicos y cortafuegos de centro
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Verifica si el material requiere abrir enlaces externos que puedan estar bloqueados por el cortafuegos escolar o si funciona 100% offline desde un archivo ZIP descargado.
              </p>
            </div>

            <div className="p-4 bg-white border border-stone-200 rounded-lg">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-stone-600">
                <span>PASO 04</span>
              </div>
              <h3 className="font-serif font-semibold text-lg text-stone-900 mt-1">
                4. Adapta la secuencia didáctica (Bloque 6)
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Ajusta los tiempos y la modalidad de respuesta: si un estudiante tiene dificultades de escritura, autoriza la respuesta oral grabada o el organizador gráfico sin penalización.
              </p>
            </div>

            <div className="p-4 bg-white border border-stone-200 rounded-lg">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-stone-600">
                <span>PASO 05</span>
              </div>
              <h3 className="font-serif font-semibold text-lg text-stone-900 mt-1">
                5. Guarda la Ficha Imprimible de 1 página
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Lleva la pauta de observación al aula en una sola hoja para anotar las respuestas observables y los momentos de ajuste sin sobrecarga.
              </p>
            </div>
          </div>

          {/* Interactive Classroom Checklist */}
          <div className="mt-10 p-6 bg-white border border-stone-300 rounded-xl shadow-xs">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-4">
              <div>
                <span className="font-mono text-xs text-stone-400 block uppercase">HERRAMIENTA PRÁCTICA</span>
                <h3 className="font-serif text-xl font-semibold text-stone-900">
                  Lista de Verificación de Aula (Imprimible)
                </h3>
              </div>
              <button
                onClick={onOpenPdfModal}
                className="px-3 py-1.5 bg-stone-900 text-white rounded text-xs font-medium hover:bg-stone-800 flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Imprimir Lista</span>
              </button>
            </div>

            <p className="text-xs text-stone-600 mb-4 font-sans">
              Casillas de verificación objetiva antes de entrar a clase (sin puntuación competitiva ni juicio al docente):
            </p>

            <div className="space-y-3 font-sans text-xs sm:text-sm">
              <label className="flex items-start gap-3 p-2.5 rounded hover:bg-stone-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checklist.check1}
                  onChange={() => toggleChecklist("check1")}
                  className="mt-0.5 rounded border-stone-300 text-stone-900 focus:ring-0"
                />
                <span className={checklist.check1 ? "text-stone-900 line-through text-stone-400" : "text-stone-800"}>
                  He definido la meta observable en 1 sola frase sin ambigüedades.
                </span>
              </label>

              <label className="flex items-start gap-3 p-2.5 rounded hover:bg-stone-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checklist.check2}
                  onChange={() => toggleChecklist("check2")}
                  className="mt-0.5 rounded border-stone-300 text-stone-900 focus:ring-0"
                />
                <span className={checklist.check2 ? "text-stone-900 line-through text-stone-400" : "text-stone-800"}>
                  He probado los altavoces / proyector en el aula antes de que entren los alumnos.
                </span>
              </label>

              <label className="flex items-start gap-3 p-2.5 rounded hover:bg-stone-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checklist.check3}
                  onChange={() => toggleChecklist("check3")}
                  className="mt-0.5 rounded border-stone-300 text-stone-900 focus:ring-0"
                />
                <span className={checklist.check3 ? "text-stone-900 line-through text-stone-400" : "text-stone-800"}>
                  Dispongo de una alternativa offline por si falla la conexión a internet.
                </span>
              </label>

              <label className="flex items-start gap-3 p-2.5 rounded hover:bg-stone-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checklist.check4}
                  onChange={() => toggleChecklist("check4")}
                  className="mt-0.5 rounded border-stone-300 text-stone-900 focus:ring-0"
                />
                <span className={checklist.check4 ? "text-stone-900 line-through text-stone-400" : "text-stone-800"}>
                  He previsto una vía alternativa de respuesta para quien no pueda escribir a mano.
                </span>
              </label>

              <label className="flex items-start gap-3 p-2.5 rounded hover:bg-stone-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checklist.check5}
                  onChange={() => toggleChecklist("check5")}
                  className="mt-0.5 rounded border-stone-300 text-stone-900 focus:ring-0"
                />
                <span className={checklist.check5 ? "text-stone-900 line-through text-stone-400" : "text-stone-800"}>
                  Tengo a mano la pauta de observación para anotar el grado de comprensión real.
                </span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
