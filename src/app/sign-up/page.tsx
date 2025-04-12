"use client";
import Background from "@/components/ui/background";
import Footer from "@/components/layers/footer";
import Header from "@/components/layers/header";
import Input from "@/components/ui/input";
import { Lock, LockKeyhole, Mail, UserIcon } from "lucide-react";
import { useState } from "react";
import { CreateUser } from "@/lib/api/create_account.request";

import { CreateUserDto } from "@/lib/dto/create_user.dto";
import Button from "@/components/ui/button";
import LineDivider from "@/components/ui/line_divider";
import StatusModal, {
  StatusModalVariants,
} from "@/components/modals/status_modal";

export default function SignUp() {
  const [openSuccesModal, setOpenSuccesModal] = useState(false);

  const [UserName, setUserName] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassword] = useState("");

  const HandleSignUp = async () => {
    const newUser: CreateUserDto = {
      name_user: UserName,
      email_user: UserEmail,
      password_user: UserPassword,
    };
    try {
      const getNewUser = await CreateUser(newUser);
      console.log(getNewUser);
      setOpenSuccesModal(true);
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return (
    <section>
      {openSuccesModal && (
        <StatusModal
          title="Exito"
          description="Se registro tu cuenta con éxito"
          variants={StatusModalVariants.SUCCESS}
          onClose={() => setOpenSuccesModal(false)}
        />
      )}
      <Background />
      <Header />
      <div className="flex flex-col flex-1 relative z-10 bg-black/50 backdrop-blur-sm p-10 container max-w-md my-20 mx-auto border border-purple-500/50 rounded-lg gap-4">
        <header className="flex flex-col gap-4 text-center">
          <h1 className="text-white text-xl font-bold">INICIAS SESIÓN</h1>
          <p className="text-white/50 text-sm font-bold">
            Inicia sesión para poder guardar tu progreso
          </p>
        </header>
        <form
          action=""
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input
            icon={<UserIcon />}
            title="Nombre de usuario"
            placeHolder="Jonh"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <Input
            icon={<Mail />}
            title="Correo electrónico"
            placeHolder="jonh@gmail.com"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
          <Input
            icon={<Lock />}
            title="Contraseña"
            placeHolder="hfty367#1"
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
          />
          <Input
            icon={<LockKeyhole />}
            title="Confirmar contraseña"
            placeHolder="hfty367#1"
            onChange={() => {}}
          />
          <Button
            variant="primary"
            text="Crear cuenta"
            onClick={HandleSignUp}
          />
        </form>
        <LineDivider text="O continua con Google" />
        <Button
          variant="google-button"
          text="Inicia con Google"
          onClick={() => {}}
        />
      </div>
      <Footer />
    </section>
  );
}
