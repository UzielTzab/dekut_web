import { ReactNode, useState } from "react";

interface InputProps {
  title: string;
  placeHolder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon: ReactNode;
  type?: string;
}

export default function Input({
  title,
  placeHolder,
  onChange,
  icon,
  type = "text",
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value.length > 0);
    onChange(e);
  };

  return (
    <div className="relative">
      {/* Label flotante */}
      <label
        className={`absolute left-12 transition-all duration-300 pointer-events-none z-10 ${
          isFocused || hasValue
            ? "top-2 text-xs text-indigo-400 font-medium"
            : "top-4 text-sm text-slate-400"
        }`}
      >
        {title}
      </label>
      
      {/* Container del input */}
      <div
        className={`relative glass-effect rounded-1xl border transition-all duration-300 ${
          isFocused
            ? "border-indigo-500/60 shadow-glow"
            : "border-indigo-500/20 hover:border-indigo-500/40"
        }`}
      >
        {/* Icono */}
        <div
          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
            isFocused ? "text-indigo-400" : "text-slate-500"
          }`}
        >
          {icon}
        </div>
        
        {/* Input field */}
        <input
          type={type}
          placeholder={isFocused ? placeHolder : ""}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autoComplete={type === "email" ? "email" : type === "password" ? "current-password" : "off"}
          className={`w-full bg-transparent text-slate-200 placeholder-slate-500 pl-12 pr-4 transition-all duration-300 focus:outline-none ${
            isFocused || hasValue ? "pt-6 pb-2" : "py-4"
          }`}
        />
        
        {/* Efecto de foco */}
        <div
          className={`absolute inset-0 rounded-1xl bg-gradient-to-r from-indigo-500/10 to-violet-500/10 opacity-0 transition-opacity duration-300 pointer-events-none ${
            isFocused ? "opacity-100" : ""
          }`}
        />
      </div>
    </div>
  );
}
