import React from "react";
interface LineDividerProps {
  text: string;
}
export default function LineDivider({ text }: LineDividerProps) {
  return (
    <div className="relative my-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-white/10"></div>
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-black px-2 text-gray-400 border border-transparent rounded-xl">
          {text}
        </span>
      </div>
    </div>
  );
}
