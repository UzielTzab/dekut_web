import { FcGoogle } from "react-icons/fc";

interface ButtonProps {
  variant: string;
  text: string;
  onClick: () => void;
}

export default function Button({ variant, text, onClick }: ButtonProps) {
  let button;

  switch (variant) {
    case "primary":
      button = (
        <button
          onClick={onClick}
          className="bg-purple-600 text-white px-5 py-5 rounded-md hover:bg-purple-500 font-bold text-sm"
        >
          {text}
        </button>
      );
      break;
    case "secondary":
      button = (
        <button
          onClick={onClick}
          className="bg-white/10 hover:bg-white/5 border border-white/20 px-5 py-5 rounded-md"
        >
          {text}
        </button>
      );
      break;
    case "primary-outline":
      button = (
        <button
          onClick={onClick}
          className="bg-transparent text-white border border-white/20 px-5 py-5 rounded-md hover:bg-white/10"
        >
          {text}
        </button>
      );
      break;
    case "google-button":
      button = (
        <button
          onClick={onClick}
          className="bg-white text-black font-bold px-5 py-5 rounded-xl text-sm flex items-center gap-2 justify-center border border-sm hover:bg-black/60 hover:text-white hover:border-gray-800"
        >
          <FcGoogle className="text-lg" />
          {text}
        </button>
      );
      break;
    default:
      button = null;
  }

  return button;
}
