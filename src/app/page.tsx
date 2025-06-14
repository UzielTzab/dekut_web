"use client";
import React from "react";
import Header from "@/components/layers/header";
import Footer from "@/components/layers/footer";
import Background from "@/components/ui/background";
import Button from "@/components/ui/button";
import PlatformCard from "@/components/ui/platform_card";
import { Rocket, TabletSmartphone } from "lucide-react";
import { SiGoogleplay } from "react-icons/si";
import Image from "next/image";
import Carrusel from "@/components/ui/carrusel";
// import { VideoHeader } from "./components/ui/video_header";

export default function Home() {
  return (
    <section>
      <Background />

      <Header />
      <Image
        src="/images/screen_shoot_1.jpg"
        alt="Game Cover"
        width={1920}
        height={400}
        className="w-full h-[200px] object-cover object-center rounded-xl "
      />
      {/* <VideoHeader /> */}
      <main className="flex-1 relative z-10">
        <section className="relative py-20">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Dekut Games Studios
              </h1>
              <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
                Conoce nuestro recien lanzamiento beta del juego{" "}
                <strong>ROCK SHIP</strong> disponible en la Play Store con
                acceso anticipado.
              </p>
              {/* <Image
                src="/images/icon_app_512x512.png"
                alt="Game Cover"
                width={256}
                height={256}
                className="mx-auto mb-8 rounded-lg border aspect-square object-cover"
              /> */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  text="Descargarlo ahora"
                  variant="icon-button"
                  icon={<SiGoogleplay className="text-2xl text-purple-500" />}
                  onClick={() =>
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.DekutGames.com.unity.template.fayonce",
                      "_blank"
                    )
                  }
                />
                <Button
                  text="Visualiza el trailer"
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
            </div>
          </div>
        </section>

        <section className="container px-4 py-16 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Plataformas disponibles
            </span>
          </h2>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-8 max-w-5xl ">
              <PlatformCard
                icon={<Rocket className="w-10 h-10 text-purple-400" />}
                title="PC / Mac"
                description="Experimenta toda la grandeza de la exploración espacial con gráficos de alta calidad y una jugabilidad envolvente en tu computadora."
              />
              <PlatformCard
                icon={
                  <TabletSmartphone className="w-10 h-10 text-purple-400" />
                }
                title="Móviles"
                description="Descubre los secretos del universo desde tu móvil. Juega en Android con controles intuitivos."
              />
            </div>
          </div>
        </section>

        {/*Carrusel*/}
        <Carrusel />

        {/* Call to Action */}
        <section className="container px-4 py-16 mx-auto text-center">
          <div className="max-w-3xl mx-auto p-8 rounded-lg border border-purple-500/30 bg-gradient-to-b from-purple-900/20 to-blue-900/20 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Estás listo para explorar el universo?
            </h2>
            <p className="text-gray-300 mb-8">
              Unete a los nuevos jugadores que ya están probando la beta
            </p>
            <div className="flex justify-center">
              <Button
                text="Descargar ahora"
                variant="icon-button"
                icon={<SiGoogleplay className="text-2xl text-purple-500" />}
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.DekutGames.com.unity.template.fayonce",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </section>
  );
}
