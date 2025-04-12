import { ReactNode } from "react";

interface InputProps {
  title: string;
  placeHolder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon: ReactNode;
}

export default function Input({
  title,
  placeHolder,
  onChange,
  icon,
}: InputProps) {
  return (
    <div className="flex flex-col">
      <div className="flex gap-3">
        <div className="mb-4">{icon}</div>
        <label className="text-sm">{title}</label>
      </div>
      <input
        className="border border-purple-500/20 rounded-sm p-2"
        type="text"
        placeholder={placeHolder}
        onChange={onChange}
      />
    </div>
  );
}
