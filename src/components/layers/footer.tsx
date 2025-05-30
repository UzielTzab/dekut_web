import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 backdrop-blur-sm py-8">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            {/* <Gamepad2 className="w-5 h-5 text-purple-400" /> */}
            <span className="text-lg font-bold tracking-wider">
              Dekut Games
            </span>
          </div>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Dekut Games. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
