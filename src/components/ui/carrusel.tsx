import React, { useState, useEffect } from "react";
import Image from "next/image";

const screenshots = [
  "/images/game_p1.jpg",
  "/images/game_p2.jpg",
  "/images/game_p3.jpg",
];

export default function Carrusel() {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const openModal = (index: React.SetStateAction<number>) => {
    setModalIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const prevModal = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setModalIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const nextModal = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setModalIndex((prev) => (prev + 1) % screenshots.length);
  };

  // Cerrar modal con ESC
  useEffect(() => {
    const handleEsc = (e: { key: string }) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">
        VISTA PREVIA DEL JUEGO
      </h2>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Video */}
        <div className="flex-1 rounded-lg overflow-hidden border border-purple-400 shadow-md aspect-video">
          <iframe
            id="trailer-video"
            className="w-full h-full"
            src="https://www.youtube.com/embed/HB6sn2k8wv0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Texto e imagen */}
        <div className="flex-1 flex flex-col justify-center space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Experiencia inmersiva en el juego
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Dekut Games: Descubre un fascinante viaje a través del universo
            infinito, la lejanía de tu exploración radica tu resistencia ante
            diversas amenazas cósmicas y otras más oscuras de controlar.
          </p>

          <div className="relative w-full h-56 md:h-64 rounded-md overflow-hidden border border-purple-400 shadow-sm cursor-pointer">
            {screenshots.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Game screenshot ${index + 1}`}
                fill
                onClick={() => openModal(index)}
                className={`absolute inset-0 object-cover transition-opacity duration-700 ${
                  index === current
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal con carrusel */}
      {modalOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-lg overflow-hidden shadow-lg flex items-center"
          >
            {/* Flecha izquierda */}
            <button
              onClick={prevModal}
              aria-label="Anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-purple-600 bg-opacity-70 hover:bg-opacity-90 text-white rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 z-10"
            >
              ‹
            </button>

            {/* Imagen */}
            <Image
              src={screenshots[modalIndex]}
              alt={`Imagen ampliada ${modalIndex + 1}`}
              width={1200}
              height={675}
              className="object-contain rounded-md"
              priority
            />

            {/* Flecha derecha */}
            <button
              onClick={nextModal}
              aria-label="Siguiente"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 bg-opacity-70 hover:bg-opacity-90 text-white rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 z-10"
            >
              ›
            </button>

            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              aria-label="Cerrar modal"
              className="absolute top-3 right-3 text-white bg-purple-600 hover:bg-purple-700 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
