import { FcGoogle } from "react-icons/fc";

interface ButtonProps {
  variant: string;
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({ variant, text, onClick, icon, className = "", type = "button" }: ButtonProps) {
  let button;

  const baseClasses = "font-semibold transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent";

  switch (variant) {
    case "primary":
      button = (
        <button
          type={type}
          onClick={onClick}
          className={`${baseClasses} btn-gaming px-6 py-3 rounded-lg text-sm ${className}`}
        >
          {text}
        </button>
      );
      break;
    case "secondary":
      button = (
        <button
          onClick={onClick}
          className={`${baseClasses} glass-effect hover-glow px-6 py-3 rounded-lg text-sm text-slate-200 hover:text-white hover:border-indigo-400/50 ${className}`}
        >
          {text}
        </button>
      );
      break;
    case "primary-outline":
      button = (
        <button
          onClick={onClick}
          className={`${baseClasses} bg-transparent text-slate-200 border-2 border-indigo-500 px-6 py-3 rounded-lg hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/25 ${className}`}
        >
          {text}
        </button>
      );
      break;
    case "google-button":
      button = (
        <button
          onClick={onClick}
          className={`${baseClasses} glass-effect hover-glow px-6 py-3 rounded-lg text-sm flex items-center gap-3 justify-center border border-slate-600/30 text-slate-200 hover:text-white hover:border-slate-500/50 ${className}`}
        >
          <FcGoogle className="text-xl" />
          {text}
        </button>
      );
      break;
    case "icon-button":
      button = (
        <button
          onClick={onClick}
          className={`${baseClasses} btn-gaming px-6 py-3 rounded-lg text-sm flex items-center gap-3 justify-center hover:scale-105 ${className}`}
        >
          {icon}
          {text}
        </button>
      );
      break;
    default:
      button = null;
  }

  return button;
}
