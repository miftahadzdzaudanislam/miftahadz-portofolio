import Hero from "@/component/Hero";
import Skill from "@/component/Skill";
import { skills } from "@/utils/skill";

export default function Home() {
  return (
    <>
      {/* Decorations blobs */}
      <div className="absolute -top-2 -left-10 w-72 h-72 bg-primary/40 rounded-full blur-3xl float-slow" />
      <div className="absolute top-24 -right-20 w-80 h-80 bg-secondary/40 rounded-full blur-3xl float-slow" />
      <div className="absolute bottom-0 left-1/6 w-96 h-96 bg-accent/30 rounded-full blur-3xl float-slow" />

      <div className="hero-content text-center">
        <div className="max-w-md md:max-w-4xl">
          
          {/* Hero */}
          <Hero />

          <div className="my-20">
            <h1 className="text-5xl font-bold underline pb-8 font-comic">
              My Skills
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-5">
              <Skill skills={skills} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
