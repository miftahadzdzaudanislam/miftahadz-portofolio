import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SkeletonCard from "@/skeleton/CardSkeleton";

export default function Card({
  projects = [],
  loading = false,
  skeletonCount = 6,
}) {
  if (loading) {
    return (
      <>
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </>
    );
  }

  return (
    <>
      {projects.map((p, index) => (
        <Link
          key={p.link}
          to={`/projects/${p.link}`}
          className={`group block bg-white/90 backdrop-blur p-3 shadow-xl rounded-xl border-2 border-black/10 hover:border-black transition-all duration-300 hover:scale-[1.02] w-full max-w-sm mx-auto md:max-w-none ${
            index % 2 === 0
              ? "-rotate-3 hover:-rotate-2"
              : "rotate-3 hover:rotate-2"
          }`}
        >
          {/* Image */}
          <figure className="relative overflow-hidden rounded-lg">
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-50"
            />

            {/* Overlay with text */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex items-center gap-2 text-white font-bold font-comic text-lg">
                View Details
                <ArrowRight size={20} />
              </div>
            </div>
          </figure>

          {/* Content */}
          <div className="py-4 px-3">
            <h2 className="text-xl font-bold font-comic mb-2 line-clamp-1">
              {p.title}
            </h2>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{p.desc}</p>

            {/* Tech Stack */}
            {p.tech && p.tech.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, idx) => {
                  const Icon = t.icon;
                  return (
                    <div
                      key={idx}
                      className={`flex items-center justify-center w-8 h-8 rounded-full border border-black ${t.colorClass}`}
                      title={t.techName}
                    >
                      <Icon className="text-base" />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </Link>
      ))}
    </>
  );
}
