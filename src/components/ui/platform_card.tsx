import React, { ReactNode } from "react";

interface PlatformCardProps{
    icon: ReactNode;
    title: string;
    description: string;
    buttonText: string;
    onClickFunction: () => void;
}

export default function PlatformCard ({icon, title, description, buttonText,onClickFunction}:PlatformCardProps ) {
  return (
    <div className="glass-effect hover-glow p-8 rounded-xl transition-all duration-300 group">
      <div className="mb-6 transform group-hover:scale-110 group-hover/button:scale-125 group-hover/button:rotate-12 transition-transform duration-400">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-slate-100 group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
        {description}
      </p>
      
      <button 
        onClick={onClickFunction} 
        className="mt-4 px-4 py-2 rounded bg-indigo-500 text-white hover:bg-indigo-600 transition group/button"
      >
        {buttonText}
      </button>
    </div>
  );
}
