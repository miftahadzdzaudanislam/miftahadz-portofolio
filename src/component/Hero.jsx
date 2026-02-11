import Skill from "@/component/Skill";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { skills } from "@/utils/skill";

export default function Hero() {

  return (
    <>
      <div className="hero bg-neutral min-h-screen relative overflow-hidden pt-28 md:pt-32">
        {/* Abstract blurred decorations */}
        <div className="absolute -top-2 -left-10 w-72 h-72 bg-primary/40 rounded-full blur-3xl float-slow" />
        <div className="absolute top-24 -right-20 w-80 h-80 bg-secondary/40 rounded-full blur-3xl float-slow" />
        <div className="absolute bottom-0 left-1/6 w-96 h-96 bg-accent/30 rounded-full blur-3xl float-slow" />

        <div className="hero-content text-center">
          <div className="max-w-md md:max-w-4xl">
            <span className="badge badge-secondary rounded-full textarea-xs text-black font-extrabold p-4 mb-6 border-2 border-black shadow-[3px_3px_0_#000] -rotate-4 wiggle">
              ✨Hello there, friend!
            </span>
            <h1 className="text-6xl font-extrabold font-comic">
              I'm{" "}
              <span className="text-primary underline decoration-accent decoration-4">
                Miftah
              </span>{" "}
              Adz Dzaudan I.
            </h1>
            <p className="text-3xl py-3 font-bold">Artist & IT Programmer</p>
            <p className="pb-6">
              Full-stack web developer and visual artist focused on clean
              design, smooth user experiences, and efficient web solutions.
            </p>
            <div className="flex flex-row gap-3 justify-center">
              <Link
                to={"/portofolios"}
                className="btn btn-accent rounded-3xl p-6 border-2 border-black shadow-[3px_3px_0_#000] transition-transform duration-200 hover:-translate-y-1 active:translate-y-0"
              >
                View project <ArrowRight />
              </Link>
              <Link
                to={"/contact"}
                className="btn btn-primary rounded-3xl p-6 border-2 border-black shadow-[3px_3px_0_#000] transition-transform duration-200 hover:-translate-y-1 active:translate-y-0"
              >
                lets Connect!
              </Link>
            </div>

            <div className="mt-6">
              <div className="mx-auto w-full max-w-xl bg-neutral rounded-3xl border-2 border-black shadow-[6px_6px_0_#000] p-6 text-left">
                <div className="text-xs uppercase tracking-wide opacity-70">
                  Curriculum Vitae
                </div>
                <div className="mt-2 text-2xl font-bold">
                  Miftah Adz Dzaudan I.
                </div>
                <p className="mt-2 text-sm opacity-80">
                  Full-stack web developer & visual artist. Open for freelance
                  and collaboration.
                </p>
                <a
                  href="/docs/cv-miftah.pdf"
                  download
                  className="mt-4 inline-flex items-center gap-2 rounded-2xl border-2 border-black bg-secondary px-4 py-2 text-sm font-semibold shadow-[2px_2px_0_#000]"
                >
                  Download CV
                  <Download className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="my-20">
              <h1 className="text-5xl font-bold underline pb-8 font-comic">
                My Skills
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-5">
                {skills.map((m) => (
                  <Skill
                    key={m.title}
                    title={m.title}
                    icon={m.icon}
                    desc={m.desc}
                    accent={m.accent}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
