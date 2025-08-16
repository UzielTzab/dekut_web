"use client";
import Background from "@/components/ui/background";
import Input from "@/components/ui/input";
import { Lock, Mail, LogIn, Eye, EyeOff, Zap, Star, Shield } from "lucide-react";
import { useState } from "react";
import Button from "@/components/ui/button";
import LineDivider from "@/components/ui/line_divider";
import Link from "next/link";
import StatusModal, { StatusModalVariants } from "@/components/modals/status_modal";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    variant: StatusModalVariants.SUCCESS,
    title: "",
    description: ""
  });

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const router = useRouter();

  const handleSignIn = async () => {
    setIsLoading(true);

    try {
      console.log("Intentando hacer login...");

      // Petición al API de login usando el proxy de Next.js
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          password: userPassword,
        }),
      });

      console.log("Status de la respuesta:", response.status);
      console.log("Content-Type:", response.headers.get("content-type"));

      // Verificar si la respuesta es HTML (error de servidor/proxy)
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("text/html")) {
        const htmlText = await response.text();
        console.error("❌ Servidor devolvió HTML en lugar de JSON:", htmlText.substring(0, 200));
        
        setModalConfig({
          variant: StatusModalVariants.ERROR,
          title: "Error del Servidor",
          description: "El servidor no está disponible o hay un problema con la configuración. Verifica que el backend esté ejecutándose en localhost:3002."
        });
        setShowModal(true);
        return;
      }

      if (response.ok) {
        const data = await response.json();
        console.log("🎉 Login exitoso! Respuesta completa:", data);
        console.log("🔑 Token recibido:", data.token || data.access_token || "Token no encontrado");

        // Guardar el token en localStorage
        if (data.token) {
          localStorage.setItem("authToken", data.token);
        }

        // Mostrar modal de éxito
        setModalConfig({
          variant: StatusModalVariants.SUCCESS,
          title: "¡Bienvenido Comandante!",
          description: "Tu sesión ha sido iniciada exitosamente. Prepárate para continuar tu aventura espacial."
        });
        setShowModal(true);

      } else {
        // Intentar leer la respuesta como JSON
        try {
          const errorData = await response.json();
          console.error("❌ Error en login:", errorData);

          setModalConfig({
            variant: StatusModalVariants.ERROR,
            title: "Error de Acceso",
            description: errorData.message || "Las credenciales no son correctas. Verifica tu email y contraseña."
          });
        } catch (parseError) {
          // Si no se puede parsear como JSON, obtener el texto
          const errorText = await response.text();
          console.error("❌ Error al parsear respuesta:", parseError);
          console.error("❌ Respuesta del servidor:", errorText.substring(0, 200));

          setModalConfig({
            variant: StatusModalVariants.ERROR,
            title: "Error del Servidor",
            description: `Error ${response.status}: El servidor no está respondiendo correctamente. Verifica que el backend esté ejecutándose.`
          });
        }
        setShowModal(true);
      }

    } catch (error) {
      console.error("❌ Error de conexión:", error);

      // Mostrar modal de error de conexión
      setModalConfig({
        variant: StatusModalVariants.ERROR,
        title: "Error de Conexión",
        description: "No se pudo conectar al servidor. Verifica que el backend esté ejecutándose en localhost:3002 y tu conexión a internet."
      });
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);

    // Si el login fue exitoso, redirigir al dashboard
    if (modalConfig.variant === StatusModalVariants.SUCCESS) {
      setTimeout(() => {
        router.push("/dashboard");
      }, 500);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-12 px-4">
      <Background />

      <div className="w-full max-w-md relative z-10">
        {/* Card Principal con efectos sorprendentes */}
        <div className="glass-effect rounded-2xl border border-indigo-500/30 overflow-hidden hover-glow group">

          {/* Header con efectos únicos de login */}
          <div className="relative p-8 pb-6 bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-violet-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Icono con animación especial de login */}
            <div className="relative flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 flex items-center justify-center animate-pulse hover:animate-none transition-all duration-500">
                  <LogIn className="w-10 h-10 text-white" />
                </div>
                {/* Anillos de energía */}
                <div className="absolute -inset-3 rounded-full border-2 border-cyan-500/30 animate-ping"></div>
                <div className="absolute -inset-6 rounded-full border border-indigo-500/20 animate-pulse"></div>
              </div>
            </div>

            <div className="relative text-center">
              <h1 className="text-3xl font-bold mb-3">
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Bienvenido de Vuelta
                </span>
              </h1>
              <p className="text-slate-300 text-sm leading-relaxed">
                Continúa tu aventura espacial donde la dejaste
              </p>
            </div>
          </div>

          {/* Formulario mejorado */}
          <div className="p-8 pt-6">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                handleSignIn();
              }}
            >
              {/* Inputs con efectos especiales */}
              <div className="space-y-4">
                <Input
                  icon={<Mail className="w-5 h-5" />}
                  title="Correo electrónico"
                  placeHolder="capitan@rockship.com"
                  type="email"
                  onChange={(e) => setUserEmail(e.target.value)}
                />

                {/* Input de contraseña con toggle de visibilidad */}
                <div className="relative">
                  <Input
                    icon={<Lock className="w-5 h-5" />}
                    title="Contraseña"
                    placeHolder="••••••••"
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-400 transition-colors z-20"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Opciones adicionales */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded border-2 transition-all duration-300 ${rememberMe
                      ? "bg-gradient-to-r from-cyan-500 to-indigo-500 border-indigo-500"
                      : "border-slate-600 group-hover:border-slate-500"
                      }`}>
                      {rememberMe && (
                        <svg className="w-3 h-3 text-white absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-slate-300 group-hover:text-slate-200 transition-colors">
                    Recordarme
                  </span>
                </label>

                <Link
                  href="/forgot-password"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>

              {/* Botón principal con efectos especiales */}
              <Button
                variant="primary"
                text={isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
                onClick={handleSignIn}
                className={`w-full py-4 text-base font-semibold relative overflow-hidden ${isLoading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
              />
            </form>

            {/* Divider con estilo */}
            <div className="my-8">
              <LineDivider text="O inicia sesión con" />
            </div>

            {/* Botón de Google mejorado */}
            <Button
              variant="google-button"
              text="Continuar con Google"
              onClick={() => { }}
              className="w-full py-4 text-base"
            />
          </div>
        </div>

        {/* Footer informativo mejorado */}
        <div className="text-center mt-8 space-y-6">
          <p className="text-slate-400 text-sm">
            ¿No tienes una cuenta?{" "}
            <Link href="/sign-up" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
              Únete a la aventura
            </Link>
          </p>

         
        </div>
      </div>

      {/* Modal de estado */}
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
