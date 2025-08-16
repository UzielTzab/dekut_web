"use client";
import Background from "@/components/ui/background";
import Input from "@/components/ui/input";
import { Lock, LockKeyhole, Mail, UserIcon, Shield, Sparkles, Rocket, Phone } from "lucide-react";
import { useState } from "react";
import Button from "@/components/ui/button";
import LineDivider from "@/components/ui/line_divider";
import StatusModal, {
  StatusModalVariants,
} from "@/components/modals/status_modal";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    variant: StatusModalVariants.SUCCESS,
    title: "",
    description: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const handleSignUp = async (event?: React.FormEvent) => {
    // Prevenir ejecución múltiple
    if (isLoading) return;
    
    // Prevenir comportamiento por defecto si viene del formulario
    if (event) {
      event.preventDefault();
    }
    
    // Validaciones
    if (!userName || !userEmail || !userPhone || !userPassword) {
      setModalConfig({
        variant: StatusModalVariants.ERROR,
        title: "Campos Incompletos",
        description: "Por favor completa todos los campos para continuar."
      });
      setShowModal(true);
      return;
    }

    if (userPassword !== confirmPassword) {
      setModalConfig({
        variant: StatusModalVariants.ERROR,
        title: "Contraseñas no Coinciden",
        description: "Las contraseñas ingresadas no son iguales. Verifica e intenta nuevamente."
      });
      setShowModal(true);
      return;
    }

    if (userPassword.length < 8) {
      setModalConfig({
        variant: StatusModalVariants.ERROR,
        title: "Contraseña Muy Corta",
        description: "La contraseña debe tener al menos 8 caracteres para mayor seguridad."
      });
      setShowModal(true);
      return;
    }
    
    setIsLoading(true);
    
    try {
      console.log("Creando nueva cuenta...");
      
      // Petición al API usando el proxy de Next.js
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          name: userName,
          phone: userPhone,
          password: userPassword
        }),
      });

      console.log("Status de la respuesta:", response.status);
      
      // Manejo más específico de respuestas
      if (response.status === 201 || response.status === 200) {
        const data = await response.json();
        console.log("🎉 Cuenta creada exitosamente:", data);
        
        // Verificar que tenemos un ID válido (confirmación de creación)
        if (data && (data.id || data._id || data.user)) {
          // Mostrar modal de éxito
          setModalConfig({
            variant: StatusModalVariants.SUCCESS,
            title: "¡Bienvenido a Rock Ship!",
            description: "Tu cuenta ha sido creada exitosamente. Ahora serás redirigido al login para iniciar tu aventura espacial."
          });
          setShowModal(true);
        } else {
          throw new Error("Respuesta del servidor incompleta");
        }
        
      } else if (response.status === 409) {
        // Usuario ya existe
        const errorData = await response.json();
        setModalConfig({
          variant: StatusModalVariants.ERROR,
          title: "Usuario Ya Existe",
          description: "Ya existe una cuenta con este correo electrónico. Intenta con otro email o inicia sesión."
        });
        setShowModal(true);
        
      } else {
        const errorData = await response.json();
        console.error("❌ Error al crear cuenta:", errorData);
        
        // Mostrar modal de error específico
        setModalConfig({
          variant: StatusModalVariants.ERROR,
          title: "Error al Crear Cuenta",
          description: errorData.message || "Hubo un problema al crear tu cuenta. Verifica tus datos e intenta nuevamente."
        });
        setShowModal(true);
      }
      
    } catch (error) {
      console.error("❌ Error de conexión:", error);
      
      // Mostrar modal de error de conexión
      setModalConfig({
        variant: StatusModalVariants.ERROR,
        title: "Error de Conexión",
        description: "No se pudo conectar al servidor. Verifica tu conexión a internet e intenta nuevamente."
      });
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    
    // Si la cuenta se creó exitosamente, redirigir al login
    if (modalConfig.variant === StatusModalVariants.SUCCESS) {
      setTimeout(() => {
        router.push("/sign-in");
      }, 500);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-12 px-4">
      <Background />

      <div className="w-full max-w-md relative z-10">
        {/* Card Principal con efectos sorprendentes */}
        <div className="glass-effect rounded-2xl border border-indigo-500/30 overflow-hidden hover-glow group">
          {/* Header con gradiente animado */}
          <div className="relative p-8 pb-6 bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Icono flotante */}
            <div className="relative flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center animate-float">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                {/* Efecto de brillo */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-violet-500/20 blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            <div className="relative text-center">
              <h1 className="text-3xl font-bold gradient-text mb-3">
                Únete a la Aventura
              </h1>
              <p className="text-slate-300 text-sm leading-relaxed">
                Crea tu cuenta y comienza tu viaje por las estrellas
              </p>
            </div>
          </div>

          {/* Formulario mejorado */}
          <div className="p-8 pt-6">
            <form
              className="space-y-6"
              onSubmit={handleSignUp}
            >
              {/* Inputs con animaciones */}
              <div className="space-y-4">
                <Input
                  icon={<UserIcon className="w-5 h-5" />}
                  title="Nombre completo"
                  placeHolder="Capitán Estelar"
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                />
                <Input
                  icon={<Mail className="w-5 h-5" />}
                  title="Correo electrónico"
                  placeHolder="capitan@rockship.com"
                  type="email"
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <Input
                  icon={<Phone className="w-5 h-5" />}
                  title="Número de teléfono"
                  placeHolder="9992560093"
                  type="tel"
                  onChange={(e) => setUserPhone(e.target.value)}
                />
                <Input
                  icon={<Lock className="w-5 h-5" />}
                  title="Contraseña"
                  placeHolder="••••••••"
                  type="password"
                  onChange={(e) => setUserPassword(e.target.value)}
                />
                <Input
                  icon={<LockKeyhole className="w-5 h-5" />}
                  title="Confirmar contraseña"
                  placeHolder="••••••••"
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {/* Botón principal mejorado */}
              <Button
                variant="primary"
                text={isLoading ? "Creando cuenta..." : "Crear mi cuenta"}
                type="submit"
                className={`w-full py-4 text-base font-semibold ${isLoading ? "opacity-70 cursor-not-allowed pointer-events-none" : ""}`}
              />
            </form>

            {/* Divider con estilo */}
            <div className="my-8">
              <LineDivider text="O continúa con" />
            </div>

            {/* Botón de Google mejorado */}
            <Button
              variant="google-button"
              text="Continuar con Google"
              onClick={() => {}}
              className="w-full py-4 text-base"
            />
          </div>
        </div>

        {/* Footer informativo */}
        <div className="text-center mt-8 space-y-4">
          <p className="text-slate-400 text-sm">
            ¿Ya tienes una cuenta?{" "}
            <a href="/sign-in" className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
              Inicia sesión aquí
            </a>
          </p>
          
          {/* Indicadores de confianza */}
          <div className="flex justify-center items-center space-x-6 text-xs text-slate-500">
            <div className="flex items-center space-x-1">
              <Shield className="w-3 h-3" />
              <span>Datos seguros</span>
            </div>
            <div className="flex items-center space-x-1">
              <Lock className="w-3 h-3" />
              <span>Encriptado</span>
            </div>
            <div className="flex items-center space-x-1">
              <Sparkles className="w-3 h-3" />
              <span>Gratis</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de estado mejorado */}
      {showModal && (
        <StatusModal
          variants={modalConfig.variant}
          title={modalConfig.title}
          description={modalConfig.description}
          onClose={handleModalClose}
        />
      )}
    </section>
  );
}
