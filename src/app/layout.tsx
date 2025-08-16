"use client";
import Header from "@/components/layers/header";
import Footer from "@/components/layers/footer";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <title>Dekut Games Studios - Rock Ship</title>
        <meta name="description" content="Descubre ROCK SHIP, la última aventura espacial de Dekut Games Studios. Disponible en beta para Android." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="relative min-h-screen">
          <Header />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
