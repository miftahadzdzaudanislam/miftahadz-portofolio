import Education from "@/component/Education";
import TechStack from "@/component/TechStack";
import { education } from "@/utils/education";
import { techSkills } from "@/utils/techSkill";
import { Code2, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <>
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute top-32 -right-20 w-64 h-64 rounded-full bg-accent/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-secondary/20 blur-3xl animate-pulse" />

      {/* Floating dots */}
      <div className="pointer-events-none absolute top-24 right-24 grid grid-cols-4 gap-3 opacity-40">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-black/40 animate-bounce"
            style={{ animationDelay: `${i * 120}ms` }}
          />
        ))}
      </div>

      <div className="hero-content flex-col px-10 pb-20 md:px-15 gap-8 relative">
        {/* Foto + Deskripsi */}
        <div className="w-full max-w-4xl">
          <div className="flex flex-col items-center lg:flex-row lg:items-start gap-10">
            <div className="group max-w-xs bg-white/90 backdrop-blur p-3 shadow-xl rounded-xl -rotate-3 lg:self-start md:min-w-sm border-2 border-black/10 hover:border-black transition-all duration-300 hover:-rotate-2 hover:scale-[1.02]">
              <div className="relative">
                <img
                  src="/miftah.jpg"
                  className="rounded-lg w-full transition-transform duration-300 group-hover:scale-[1.01]"
                  alt="Miftah"
                />
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full border-2 border-black shadow-[2px_2px_0_#000]" />
              </div>
              <p className="font-comic text-lg pt-3 text-center">
                FullStack Web Developer
              </p>
            </div>

            <div className="max-w-xl md:max-w-2xl">
              <div className="pt-2">
                <h1 className="text-5xl text-center md:text-start font-bold font-comic mb-4">
                  Building{" "}
                  <span className="text-primary underline decoration-accent decoration-4">
                    playful
                  </span>{" "}
                  experiences with solid engineering
                </h1>
                <p className="p-6 bg-white/90 backdrop-blur border-2 border-secondary border-dashed rounded-3xl mb-3 shadow-md hover:shadow-xl transition-all duration-300">
                  Hi, I'm Miftah — an Informatics Engineering student who loves
                  turning ideas into friendly, usable web apps. I build
                  full-stack projects with Laravel and React, design clean APIs,
                  and ship responsive UIs that feel smooth to use. I'm always
                  curious, always learning, and excited to grow through an
                  industrial internship while collaborating on real-world
                  products.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack + Education */}
        <div className="w-full max-w-4xl py-6">
          <div className="group flex items-start gap-4 mb-6">
            <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary border-2 border-black shadow-[3px_3px_0_#000] transition-all duration-300 group-hover:-rotate-6 group-hover:scale-105">
              <Code2 size={30} className="text-black" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-comic mb-1">
                Tech Stack
              </h2>

              <p className="text-base md:text-lg text-gray-600">
                My Skills & Expertise.
              </p>
            </div>
          </div>

          <div className="w-full">
            <TechStack techs={techSkills} />
          </div>

          <div className="flex items-center my-16">
            <div className="flex-1 h-0.5 bg-black"></div>

            <div className="flex gap-2 px-4">
              <span className="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
              <span className="w-3 h-3 rounded-full bg-secondary animate-pulse"></span>
              <span className="w-3 h-3 rounded-full bg-accent animate-pulse"></span>
            </div>

            <div className="flex-1 h-0.5 bg-black"></div>
          </div>

          <div className="group flex items-start gap-4 mb-6">
            <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-accent border-2 border-black shadow-[3px_3px_0_#000] transition-all duration-300 group-hover:-rotate-6 group-hover:scale-105">
              <GraduationCap size={30} className="text-black" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-comic mb-1">
                Education
              </h2>

              <p className="text-base md:text-lg text-gray-600">
                My educational journey.
              </p>
            </div>
          </div>

          <div className="w-full">
            <Education educations={education} />
          </div>
        </div>
      </div>
    </>
  );
}
