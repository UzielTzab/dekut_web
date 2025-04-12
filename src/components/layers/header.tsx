import React from "react";
import Link from "next/link";
import { Gamepad2, LogIn } from "lucide-react";
export default function Header() {
  return (
    <div>
      <header className="relative z-10 border-b border-white/10 backdrop-blur-sm">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <div className="flex items-center space-x-2">
            <Gamepad2 className="w-6 h-6 text-purple-400" />
            <span className="text-xl font-bold tracking-wider">
              Dekut Games
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm hover:text-purple-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/platforms"
              className="text-sm hover:text-purple-400 transition-colors"
            >
              Plataformas
            </Link>
            <Link
              href="/gallery"
              className="text-sm hover:text-purple-400 transition-colors"
            >
              Gallería
            </Link>
            <Link
              href="/about"
              className="text-sm hover:text-purple-400 transition-colors"
            >
              Sobre nosotros
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              href="/sign-up"
              className="hidden md:flex items-center space-x-1 text-sm text-gray-300 hover:text-purple-400 transition-colors"
            >
              <LogIn className="text-purple-400 w-4 h-4" />
              <span>Registrarte</span>
            </Link>
            <Link href="/signup"></Link>
          </div>
        </div>
      </header>
    </div>
  );
}
