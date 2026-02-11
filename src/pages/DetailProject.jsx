import { useParams, Link } from "react-router-dom";
import { projects } from "@/utils/project";
import NotFound from "@/component/NotFound";
import { ArrowLeft } from "lucide-react";

export default function DetailPorject() {
  const { slug } = useParams();
  const data = projects.find((p) => p.link === slug);

  if (!data) {
    return <NotFound />;
  }

  return (
    <>
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute top-32 -right-20 w-64 h-64 rounded-full bg-accent/30 blur-3xl animate-pulse" />

      <div className="hero-content flex-col px-10 pb-20 md:px-15 gap-8 relative w-full max-w-5xl">
        {/* Back Button */}
        <div className="w-full">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-black px-4 py-2 font-bold font-comic shadow-[3px_3px_0_#000] hover:shadow-[0_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </div>

        {/* Image */}
        <div className="w-full bg-white/90 backdrop-blur p-3 shadow-xl rounded-xl border-2 border-black/10">
          <img
            src={data.img}
            alt={data.title}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full bg-white/90 backdrop-blur p-6 shadow-xl rounded-2xl border-2 border-black/10">
          <h1 className="text-4xl md:text-5xl font-bold font-comic mb-4">
            {data.title}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">{data.desc}</p>

          {/* Tech Stack */}
          {data.tech && data.tech.length > 0 && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold font-comic mb-3">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.tech.map((t, idx) => {
                  const Icon = t.icon;
                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 rounded-full border-2 border-black px-3 py-2 shadow-[2px_2px_0_#000] font-semibold ${t.colorClass}`}
                    >
                      <Icon className="text-xl" />
                      <span>{t.techName}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
