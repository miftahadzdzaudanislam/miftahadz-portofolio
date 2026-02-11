import Education from "@/component/Education";
import TechStack from "@/component/TechStack";
import { education } from "@/utils/education";
import { techSkills } from "@/utils/techSkill";
import { Code2, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <>
      <div className="hero bg-neutral min-h-screen relative overflow-hidden pt-28 md:pt-32">
        <div className="hero-content flex-col px-10 pb-20 md:px-15 gap-8">
          {/* Foto + Deskripsi */}
          <div className="w-full max-w-4xl">
            <div className="flex flex-col items-center lg:flex-row lg:items-start gap-10">
              <div className="max-w-xs bg-white p-3 shadow-xl rounded-xl -rotate-3 lg:self-start md:min-w-sm">
                <img src="/miftah.jpg" className="rounded-lg w-full" />
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
                  <p className="p-6 bg-white border-2 border-secondary border-dashed rounded-3xl mb-3">
                    Hi, I'm Miftah — an Informatics Engineering student who
                    loves turning ideas into friendly, usable web apps. I build
                    full-stack projects with Laravel and React, design clean
                    APIs, and ship responsive UIs that feel smooth to use. I'm
                    always curious, always learning, and excited to grow through
                    an industrial internship while collaborating on real-world
                    products.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack + Education */}
          <div className="w-full max-w-4xl">
            <div className="py-5 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-flex items-center gap-2 font-comic">
                <Code2 size={32} />
                <span>Tech Stack</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-3">
                My Skills & Expertise.
              </p>
              <div className="w-full">
                <TechStack groups={techSkills} />
              </div>
            </div>

            <hr className="p-3" />

            <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-flex items-center gap-2 font-comic">
              <GraduationCap size={32} />
              <span>Education</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-3">
              My educational journey.
            </p>
            <div className="w-full">
              <Education educations={education} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
