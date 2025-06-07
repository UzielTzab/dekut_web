import { FcGoogle } from "react-icons/fc";

interface ButtonProps {
  variant: string;
  text: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

export default function Button({ variant, text, onClick, icon }: ButtonProps) {
  let button;

  switch (variant) {
    case "primary":
      button = (
        <button
          onClick={onClick}
          className="bg-purple-600 text-white px-5 py-5 rounded-md hover:bg-purple-500 font-bold text-sm cursor-pointer"
        >
          {text}
        </button>
      );
      break;
    case "secondary":
      button = (
        <button
          onClick={onClick}
          className="bg-white/10 hover:bg-white/5 border border-white/20 px-5 py-5 rounded-md cursor-pointer"
        >
          {text}
        </button>
      );
      break;
    case "primary-outline":
      button = (
        <button
          onClick={onClick}
          className="bg-transparent text-white border border-white/20 px-5 py-5 rounded-md hover:bg-white/10 cursor-pointer"
        >
          {text}
        </button>
      );
      break;
    case "google-button":
      button = (
        <button
          onClick={onClick}
          className="bg-white text-black font-bold px-5 py-5 rounded-xl text-sm flex items-center gap-2 justify-center border border-sm hover:bg-black/60 hover:text-white hover:border-gray-800 cursor-pointer"
        >
          <FcGoogle className="text-lg" />
          {text}
        </button>
      );
      break;
    case "icon-button":
      button = (
        <button
          onClick={onClick}
          className="bg-white text-black font-bold px-5 py-5 rounded-xl text-sm flex items-center gap-2 justify-center border border-sm hover:bg-black/60 hover:text-white hover:border-gray-800 cursor-pointer"
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
