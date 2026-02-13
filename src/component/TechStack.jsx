import SkeletonTech from "@/skeleton/TechSkeleton";
import { BsGearFill } from "react-icons/bs";

export default function TechStack({
  techs = [],
  loading = false,
  skeletonCount = 3,
}) {
  if (loading) {
    return (
      <>
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <SkeletonTech key={i} />
        ))}
      </>
    );
  }
  return (
    <div className="grid gap-4">
      {techs.map((tech) => (
        <div
          key={tech.title}
          className="rounded-xl bg-white border-2 border-black p-5 shadow-[4px_4px_0_#000]"
        >
          <h2 className="flex items-center gap-2 font-bold mb-3 text-2xl font-comic">
            <BsGearFill
              className="animate-spin"
              style={{ animationDuration: "4s" }}
            />
            <span>{tech.title}</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {tech.tech.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.techName}
                  className={`flex items-center gap-2 rounded-full border-2 border-black px-3 py-1 shadow-[2px_2px_0_#000] hover:shadow-[0_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all ${t.colorClass}`}
                >
                  <span className="text-lg">
                    <Icon />
                  </span>
                  <span className="text-md font-semibold font-comic">
                    {t.techName}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
