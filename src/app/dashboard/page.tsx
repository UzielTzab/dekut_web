"use client";
import Background from "@/components/ui/background";

export default function Dashboard() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <Background />
      
      <div className="relative z-10">
        <h1 className="text-6xl font-bold text-center bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
          Hello Dashboard
        </h1>
      </div>
    </section>
  );
}
