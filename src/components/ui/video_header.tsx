"use client";

import { useEffect } from "react";

export function VideoHeader({ children }: { children?: React.ReactNode }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full h-[400px] md:h-[600px] relative overflow-hidden">
      <iframe
        src="https://player.vimeo.com/video/1091507230?h=2cfa157ed9&autoplay=1&loop=1&muted=1&background=1"
        allow="autoplay; fullscreen; picture-in-picture"
        className="absolute top-0 left-0 w-full h-full object-cover"
        title="update 3.2.1_short"
        allowFullScreen
      ></iframe>
      <div className="absolute inset-0 flex flex-col justify-end items-center pb-10 pointer-events-none">
        <div className="max-w-4xl w-full text-center pointer-events-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
