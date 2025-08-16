import Button from "../ui/button";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
  FaSpinner,
} from "react-icons/fa";
import { CheckCircle, Rocket, Star, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

export enum StatusModalVariants {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
  LOADING = "loading",
}

interface StatusModalProps {
  variants: StatusModalVariants;
  title: string;
  description: string;
  onClose?: () => void;
}

export default function StatusModal({
  title,
  description,
  variants,
  onClose,
}: StatusModalProps) {
  const [showContent, setShowContent] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number}>>([]);

  useEffect(() => {
    // Animación de entrada
    setTimeout(() => setShowContent(true), 100);
    
    // Crear partículas para success
    if (variants === StatusModalVariants.SUCCESS) {
      const newParticles = Array.from({length: 20}, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
      }));
      setParticles(newParticles);
    }
  }, [variants]);

  const renderIcon = () => {
    switch (variants) {
      case StatusModalVariants.SUCCESS:
        return (
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center animate-bounce">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            {/* Anillos de éxito */}
            <div className="absolute -inset-4 rounded-full border-2 border-emerald-500/50 animate-ping"></div>
            <div className="absolute -inset-8 rounded-full border border-cyan-500/30 animate-pulse"></div>
          </div>
        );
      case StatusModalVariants.ERROR:
        return <FaExclamationCircle className="text-red-500 text-4xl" />;
      case StatusModalVariants.WARNING:
        return <FaExclamationCircle className="text-yellow-500 text-4xl" />;
      case StatusModalVariants.INFO:
        return <FaInfoCircle className="text-blue-500 text-4xl" />;
      case StatusModalVariants.LOADING:
        return <FaSpinner className="text-white text-4xl animate-spin" />;
      default:
        return null;
    }
  };

  const isSuccess = variants === StatusModalVariants.SUCCESS;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      {/* Partículas de éxito */}
      {isSuccess && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                animationDelay: `${particle.id * 0.1}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      <div 
        className={`glass-effect rounded-3xl border overflow-hidden w-full max-w-md mx-4 transform transition-all duration-700 ${
          showContent ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        } ${
          isSuccess 
            ? 'border-emerald-500/40 shadow-2xl shadow-emerald-500/20' 
            : 'border-purple-500/30'
        }`}
      >
        {/* Header con gradiente especial para success */}
        <div className={`relative p-8 pb-6 ${
          isSuccess 
            ? 'bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-500/20' 
            : 'bg-gradient-to-br from-purple-500/20 to-blue-500/20'
        }`}>
          <div className={`absolute inset-0 transition-opacity duration-1000 ${
            isSuccess && showContent ? 'opacity-100' : 'opacity-0'
          } ${
            isSuccess 
              ? 'bg-gradient-to-r from-emerald-500/10 to-cyan-500/10' 
              : 'bg-gradient-to-r from-purple-500/10 to-blue-500/10'
          }`}></div>
          
          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full glass-effect hover-glow transition-all duration-300 hover:scale-110"
          >
            <X className="w-5 h-5 text-slate-300 hover:text-white" />
          </button>

          {/* Icono principal */}
          <div className="relative flex justify-center mb-6">
            {renderIcon()}
          </div>

          {/* Contenido del modal */}
          <div className="relative text-center">
            <h2 className={`text-3xl font-bold mb-4 ${
              isSuccess 
                ? 'bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent'
                : 'text-white'
            }`}>
              {title}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              {description}
            </p>

            
          </div>
        </div>

        {/* Footer del modal */}
        <div className="p-6">
          <div className="flex justify-center">
            <Button
              variant="primary"
              text={isSuccess ? "Continuar al Dashboard" : "Aceptar"}
              onClick={() => {
                if (onClose) onClose();
              }}
              className={`px-8 py-3 text-base font-semibold ${
                isSuccess ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600' : ''
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
