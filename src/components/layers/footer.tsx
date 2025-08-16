import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 glass-effect border-t border-indigo-500/20 py-12 mt-20">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/DK v2(New version).png"
                alt="Dekut Games Logo"
                width={32}
                height={32}
                className="w-8 h-8 "
              />
              <span className="text-xl font-bold tracking-wider gradient-text">
                Dekut Games Studios
              </span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed mb-6">
              Creamos experiencias de juego únicas que transportan a los jugadores
              a mundos extraordinarios. Nuestra pasión es la inmersión total en la adrenalina.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="p-2 rounded-lg glass-effect hover-glow text-slate-400 hover:text-indigo-400 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/UzielTzab"
                className="p-2 rounded-lg glass-effect hover-glow text-slate-400 hover:text-indigo-400 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:dekutgames@gmail.com?subject=Comentarios%20sobre%20Rock%20Ship%20Game&body=Hola%20equipo%20de%20Dekut%20Games,%0A%0A🎮%20MI%20EXPERIENCIA:%0A-%20%0A-%20%0A%0A⭐%20LO%20QUE%20MÁS%20ME%20GUSTÓ:%0A-%20%0A-%20" className="p-2 rounded-lg glass-effect hover-glow text-slate-400 hover:text-indigo-400 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-slate-400 hover:text-indigo-400 transition-colors text-sm"
              >
                Inicio
              </Link>
              <Link
                href="#platforms"
                className="block text-slate-400 hover:text-indigo-400 transition-colors text-sm"
              >
                Plataformas
              </Link>
              <Link
                href="#gallery"
                className="block text-slate-400 hover:text-indigo-400 transition-colors text-sm"
              >
                Galería
              </Link>
              <Link
                href="#about"
                className="block text-slate-400 hover:text-indigo-400 transition-colors text-sm"
              >
                Acerca de
              </Link>
            </div>
          </div>

          {/* Soporte */}
          <div>
            <h3 className="text-white font-semibold mb-4">Soporte</h3>
            <div className="space-y-3">
             
              <Link
                href="#"
                className="block text-slate-400 hover:text-indigo-400 transition-colors text-sm"
              >
                Contacto
              </Link>
              <Link
                href="#"
                className="block text-slate-400 hover:text-indigo-400 transition-colors text-sm"
              >
                Términos de Uso
              </Link>
              <Link
                href="#"
                className="block text-slate-400 hover:text-indigo-400 transition-colors text-sm"
              >
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-indigo-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-slate-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Dekut Games Studios. Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.DekutGames.com.unity.template.fayonce"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <span>Descargar en Google Play</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
