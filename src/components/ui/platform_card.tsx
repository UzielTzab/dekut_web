import React, { ReactNode } from "react";

interface PlatformCardProps{
    icon: ReactNode;
    title: string;
    description: string;
}

export default function PlatformCard ({icon, title, description}:PlatformCardProps ) {
  return (
    <div className="p-6 rounded-lg border border-purple-500/30 bg-gradient-to-b from-purple-900/20 to-blue-900/20 backdrop-blur-sm">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
