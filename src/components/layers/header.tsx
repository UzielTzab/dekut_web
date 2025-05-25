import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div>
      <header className="relative z-10 border-b border-white/10 backdrop-blur-sm">
        <div className="container flex items-center justify-start h-16 px-4 mx-auto gap-10">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/DK v2(New version).png"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
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
              href="/"
              className="text-sm hover:text-purple-400 transition-colors"
            >
              Plataformas
            </Link>
            <Link
              href="/"
              className="text-sm hover:text-purple-400 transition-colors"
            >
              Gallería
            </Link>
            <Link
              href="/"
              className="text-sm hover:text-purple-400 transition-colors"
            >
              Sobre nosotros
            </Link>
          </nav>
          {/* <div className="flex items-center space-x-4">
            {/* <Link
              href="/sign-up"
              className="hidden md:flex items-center space-x-1 text-sm text-gray-300 hover:text-purple-400 transition-colors"
            >
              <LogIn className="text-purple-400 w-4 h-4" />
              <span>Registrarte</span>
            </Link>
            <Link href="/signup"></Link> 
          </div> */}
        </div>
      </header>
    </div>
  );
}
