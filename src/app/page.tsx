"use client";
import React from "react";
import Background from "@/components/ui/background";
import Button from "@/components/ui/button";
import PlatformCard from "@/components/ui/platform_card";
import { Rocket, TabletSmartphone, Gamepad2, Users, Music } from "lucide-react";
import { SiGoogleplay } from "react-icons/si";
import Carrusel from "@/components/ui/carrusel";

export default function Home() {
  return (
    <section className="min-h-screen">
      <Background />
      <main className="flex-1 relative z-10">
        {/* Hero Section - Centrado perfecto en pantalla completa */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="container px-6 mx-auto mb-30 max-w-7xl">
            <div className="max-w-5xl mx-auto  text-center">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-medium text-indigo-300">
                  Beta Disponible Ahora
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text leading-tight">
                Dekut Games
                <br />
                <span className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-300">
                  Studios
                </span>
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section - Separado del hero */}
        <section className="relative py-24">
          <div className="container px-6 mx-auto max-w-7xl">
            <div className="max-w-5xl mx-auto text-center">
              <div className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-300 mb-12 font-light leading-relaxed">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
                    ¿Qué es Dekut Games Studios?
                  </h2>
                </div>
                <p className="mb-4">
                  Actualmente Dekut Games Studios es una pequeña marca de desarrollador independiente, creada por <span className="font-semibold text-indigo-300">Uziel Tzab</span>.

                </p>
                <p>
                  <span className="font-semibold text-indigo-300">ROCK SHIP</span>,
                  nuestro primer juego recién lanzado en estado <span className="font-semibold text-indigo-300" >BETA</span>, ya disponible en acceso anticipado.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                <Button
                  text="Descargar Beta"
                  variant="icon-button"
                  icon={<SiGoogleplay className="text-2xl" />}
                  onClick={() =>
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.DekutGames.com.unity.template.fayonce",
                      "_blank"
                    )
                  }
                />
                <Button
                  text="Ver Trailer"
                  variant="secondary"
                  onClick={() => {
                    const el = document.getElementById("trailer-video");
                    if (el)
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "nearest",
                      });
                  }}
                />
              </div>

              {/* Stats Section - Minimalista */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">30+</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">Descargas</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">5</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">Niveles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">Beta 4.1.2</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">Versión</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section - Rediseñada */}
        <section className="container px-6 py-20 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Plataformas Disponibles</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Experimenta la aventura espacial en múltiples dispositivos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <PlatformCard
              icon={<Rocket className="w-12 h-12 text-indigo-400" />}
              title="PC"
              description="Disponible con gráficos 2D de alta calidad y una jugabilidad envolvente en tu computadora de escritorio. El primer paso es instalar Google Play Games para PC."
              buttonText="Ver en Play Games PC"
              onClickFunction={() => window.open("https://play.google.com/googleplaygames?hl=es_MX", "_blank")}
            />
            <PlatformCard
              icon={<TabletSmartphone className="w-12 h-12 text-violet-400" />}
              title="Dispositivos Móviles"
              description="Disponible en Android con controles optimizados para pantalla táctil y rendimiento fluido."
              buttonText="Ver en la Play Store"
              onClickFunction={() => window.open("https://play.google.com/store/apps/details?id=com.DekutGames.com.unity.template.fayonce", "_blank")}
            />
          </div>
        </section>

        {/* Game Features - Nueva sección */}
        <section className="container px-6 py-20 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
              Características del Juego
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-effect glow p-8 rounded-xl text-center">
              <Gamepad2 className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-slate-100">Controles Intuitivos</h3>
              <p className="text-slate-300">Controles optimizados para una experiencia de juego fluida y natural.</p>
            </div>
            <div className="glass-effect glow p-8 rounded-xl text-center">
              <Music className="w-12 h-12 text-violet-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-slate-100">Épica composición sonora</h3>
              <p className="text-slate-300">Mantén el ritmo mientras esquivas asteroides y enemigos en el espacio.</p>
            </div>
            <div className="glass-effect p-8 rounded-xl text-center md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">∞</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-100">Exploración de múltiples galaxias</h3>
              <p className="text-slate-300">Descubre grandiosas galaxias desde la más lejana hasta la más desafiante.</p>
            </div>
          </div>
        </section>

        {/* Carrusel */}
        <Carrusel />

        {/* Call to Action - Rediseñado */}
        <section className="container px-6 py-20 mx-auto text-center max-w-7xl">
          <div className="max-w-4xl mx-auto glass-effect p-12 rounded-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
              Sé un Beta tester y envíanos tu opinión
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Únete para probar una beta y comienza tu viaje hacia el borde del universo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                text="Descargar Ahora"
                variant="icon-button"
                icon={<SiGoogleplay className="text-2xl" />}
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.DekutGames.com.unity.template.fayonce",
                    "_blank"
                  )
                }
              />
              <Button
                text="Más Información"
                variant="secondary"
                onClick={() => {
                  // Scroll to top or info section
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
