import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Play, Pause, ChevronLeft, ChevronRight, X, Maximize2, Volume2 } from "lucide-react";

const screenshots = [
  { 
    src: "/images/game_picture_1.jpg", 
    title: "Exploración Espacial",
    description: "Navega por vastas galaxias estelares"
  },
  { 
    src: "/images/game_picture_2.jpg", 
    title: "Combate Épico",
    description: "Enfréntate a amenazas cósmicas"
  },
  { 
    src: "/images/game_picture_3.jpg", 
    title: "Tecnología antigua",
    description: "Mejora tu nave con tecnologías que otros seres abandonaron"
  },
  { 
    src: "/images/game_picture_4.jpg", 
    title: "Entidades misteriosas",
    description: "Descubre los misterios ocultos en las galaxias"
  },
  { 
    src: "/images/game_picture_5.jpg", 
    title: "Aventura desafiante",
    description: "Cada partida es una nueva experiencia totalmente diferente"
  },
  { 
    src: "/images/game_picture_6.jpg", 
    title: "Supervivencia",
    description: "Sobrevive en el espacio hostil"
  },
];

export default function Carrusel() {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Control automático del carrusel
  useEffect(() => {
    if (isPlaying && !isHovering) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % screenshots.length);
      }, 4000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, isHovering]);

  const openModal = (index: number) => {
    setModalIndex(index);
    setModalOpen(true);
    setIsPlaying(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    setIsPlaying(true);
  };

  const prevModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const nextModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalIndex((prev) => (prev + 1) % screenshots.length);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  // Cerrar modal con ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft" && modalOpen) prevModal(e as any);
      if (e.key === "ArrowRight" && modalOpen) nextModal(e as any);
      if (e.key === " " && !modalOpen) {
        e.preventDefault();
        togglePlayPause();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [modalOpen]);

  return (
    <section className="container mx-auto px-6 py-20 max-w-7xl" id="gallery">
      {/* Header con controles */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Galería del Juego
        </h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
          Sumérgete en las increíbles vistas del universo de Rock Ship
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
        {/* Video Trailer - Mejorado */}
        <div className="order-2 xl:order-1">
          <div className="glass-effect rounded-2xl overflow-hidden  hover-glow group">
            <div className="aspect-video relative">
              <iframe
                id="trailer-video"
                className="w-full h-full relative z-20"
                src="https://www.youtube.com/embed/2tkEDUkEdik?modestbranding=1&rel=0&showinfo=0"
                title="Rock Ship - Trailer Oficial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              {/* Overlay sutil que NO interfiere con el iframe */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">
                    Trailer Oficial
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Dale un primer vistazo al gameplay
                  </p>
                </div>
              
              </div>
            </div>
          </div>
        </div>

        {/* Carrusel Principal - Completamente Rediseñado */}
        <div className="order-1 xl:order-2">
          <div 
            className="relative glass-effect rounded-2xl overflow-hidden hover-glow group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Imagen Principal */}
            <div className="aspect-video relative overflow-hidden">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === current
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-110"
                  }`}
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.title}
                    fill
                    className="object-cover cursor-pointer"
                    onClick={() => openModal(index)}
                    priority={index === 0}
                  />
                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              ))}

              {/* Controles de navegación */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 glass-effect hover-glow p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 glass-effect hover-glow p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Botón expandir */}
              <button
                onClick={() => openModal(current)}
                className="absolute top-4 right-4 glass-effect hover-glow p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                <Maximize2 className="w-5 h-5 text-white" />
              </button>

              {/* Control play/pause */}
              <button
                onClick={togglePlayPause}
                className="absolute top-4 left-4 glass-effect hover-glow p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-white" />
                ) : (
                  <Play className="w-5 h-5 text-white ml-0.5" />
                )}
              </button>
            </div>

            {/* Información de la imagen actual */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-bold text-white mb-2">
                {screenshots[current].title}
              </h3>
              <p className="text-slate-300 text-sm">
                {screenshots[current].description}
              </p>
            </div>
          </div>

          {/* Indicadores mejorados */}
          <div className="flex justify-center mt-6 space-x-3">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === current
                    ? "w-12 h-3 bg-gradient-to-r from-indigo-500 to-violet-500"
                    : "w-3 h-3 bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

          {/* Miniaturas */}
          <div className="grid grid-cols-6 gap-2 mt-6">
            {screenshots.map((screenshot, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === current
                    ? "border-indigo-500 scale-105"
                    : "border-slate-600 hover:border-slate-500 opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.title}
                  width={120}
                  height={68}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Mejorado - Experiencia Cinematográfica */}
      {modalOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full glass-effect rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-90 duration-500"
          >
            {/* Header del modal */}
            <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {screenshots[modalIndex].title}
                  </h3>
                  <p className="text-slate-300 mt-1">
                    {screenshots[modalIndex].description}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="glass-effect hover-glow p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Imagen principal */}
            <div className="relative aspect-video">
              <Image
                src={screenshots[modalIndex].src}
                alt={screenshots[modalIndex].title}
                fill
                className="object-contain"
                priority
              />
              
              {/* Controles de navegación */}
              <button
                onClick={prevModal}
                className="absolute left-6 top-1/2 -translate-y-1/2 glass-effect hover-glow p-4 rounded-full transition-all duration-300 hover:scale-110 z-10"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>

              <button
                onClick={nextModal}
                className="absolute right-6 top-1/2 -translate-y-1/2 glass-effect hover-glow p-4 rounded-full transition-all duration-300 hover:scale-110 z-10"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            </div>

            {/* Footer del modal con miniaturas */}
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex justify-center space-x-2 overflow-x-auto">
                {screenshots.map((screenshot, index) => (
                  <button
                    key={index}
                    onClick={() => setModalIndex(index)}
                    className={`flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      index === modalIndex
                        ? "border-indigo-500 scale-110"
                        : "border-slate-600 hover:border-slate-400 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={screenshot.src}
                      alt={screenshot.title}
                      width={80}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              
              {/* Indicador de posición */}
              <div className="text-center mt-4">
                <span className="text-slate-400 text-sm">
                  {modalIndex + 1} de {screenshots.length}
                </span>
              </div>
            </div>

            {/* Indicador de ayuda */}
            <div className="absolute bottom-4 left-6 text-slate-400 text-xs opacity-60">
              <p>Usa las flechas del teclado para navegar • ESC para cerrar</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
