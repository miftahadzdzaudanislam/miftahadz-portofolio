import Card from "@/component/Card";
import { projects } from "@/utils/project";
import { FolderOpen } from "lucide-react";

export default function Project() {
  return (
    <>
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute top-32 -right-20 w-64 h-64 rounded-full bg-accent/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-secondary/20 blur-3xl animate-pulse" />

      {/* Floating dots */}
      <div className="hidden pointer-events-none absolute top-24 right-24 md:grid grid-cols-4 gap-3 opacity-40">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-black/40 animate-bounce"
            style={{ animationDelay: `${i * 120}ms` }}
          />
        ))}
      </div>

      <div className="hero-content flex-col px-10 pb-20 md:px-30 gap-12 relative">
        {/* Header */}
        <div className="w-full max-w-6xl">
          <div className="group flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
            <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl bg-primary border-2 border-black shadow-[3px_3px_0_#000] transition-all duration-300 group-hover:-rotate-6 group-hover:scale-105 shrink-0">
              <FolderOpen size={32} className="text-black" />
            </div>
            <div className="text-center md:text-left md:ps-5">
              <h1 className="text-4xl md:text-6xl font-bold font-comic mb-2">
                My Projects
              </h1>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl">
                A collection of web applications I've built using modern
                technologies. Each project showcases my passion for creating
                functional and user-friendly solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card projects={projects} />
          </div>
        </div>
      </div>
    </>
  );
}
