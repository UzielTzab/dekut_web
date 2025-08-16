import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-indigo-500/20">
      <div className="container flex items-center justify-between h-16 px-6 mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/images/DK v2(New version).png"
            alt="Dekut Games Logo"
            width={20}
            height={20}
            className="w-10 h-10 "
          />
          <Link href="/" className="text-xl font-bold tracking-wider gradient-text">
            Dekut Games
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            href="/"
            className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-all duration-300 hover:scale-105"
          >
            Inicio
          </Link>
          <Link
            href="#platforms"
            className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-all duration-300 hover:scale-105"
          >
            Tienda
          </Link>
          <Link
            href="#store"
            className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-all duration-300 hover:scale-105"
          >
            Galería
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-all duration-300 hover:scale-105"
          >
            Acerca de
          </Link>
        </nav>

        {/* Desktop CTA */}
        {/* <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/sign-up"
            className="flex items-center space-x-2 text-sm font-medium text-slate-300 hover:text-indigo-400 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-indigo-500/10"
          >
            <DoorOpen className="w-4 h-4" />
            <span>Registrarse</span>
          </Link>
          <Link
            href="/sign-in"
            className="flex items-center space-x-2 text-sm font-medium text-slate-300 hover:text-indigo-400 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-indigo-500/10"
          >
            <UserCircle className="w-4 h-4" />
            <span>Inciar</span>
          </Link>
        </div> */}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-indigo-500/10 transition-colors"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-slate-300" />
          ) : (
            <Menu className="w-6 h-6 text-slate-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden glass-effect border-t border-indigo-500/20">
          <nav className="container px-6 py-4 mx-auto space-y-4">
            <Link
              href="/"
              className="block text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="#platforms"
              className="block text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Plataformas
            </Link>
            <Link
              href="#gallery"
              className="block text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Galería
            </Link>
            <Link
              href="#about"
              className="block text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Acerca de
            </Link>
            {/* <Link
              href="/sign-up"
              className="flex items-center space-x-2 text-sm font-medium text-indigo-400 py-2 border-t border-indigo-500/20 pt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn className="w-4 h-4" />
              <span>Registrarse</span>
            </Link> */}
          </nav>
        </div>
      )}
    </header>
  );
}
