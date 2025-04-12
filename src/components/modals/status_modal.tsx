import Button from "../ui/button";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
  FaSpinner,
} from "react-icons/fa"; // Íconos de react-icons

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
  // Función para renderizar el ícono según la variante
  const renderIcon = () => {
    switch (variants) {
      case StatusModalVariants.SUCCESS:
        return <FaCheckCircle className="text-green-500 text-4xl" />;
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="backdrop-blur-xl border border-purple-500/30 rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex flex-col items-center">
          {/* Ícono dinámico */}
          {renderIcon()}
          <h2 className="text-xl font-bold mb-4 text-white">{title}</h2>
          <p className="text-gray-200 mb-4 text-center">{description}</p>
          <div className="flex items-center justify-between gap-4">
            <Button
              variant="primary"
              text="Aceptar"
              onClick={() => {
                if (onClose) onClose();
              }}
            />
            {/* <Button variant="secondary" text="Cerrar" onClick={() => {}} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
