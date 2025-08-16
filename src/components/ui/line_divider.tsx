import React from "react";

interface LineDividerProps {
  text: string;
}

export default function LineDivider({ text }: LineDividerProps) {
  return (
    <div className="relative my-8">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="glass-effect px-4 py-2 text-sm font-medium text-slate-300 border border-indigo-500/20 rounded-full">
          {text}
        </span>
      </div>
    </div>
  );
}
