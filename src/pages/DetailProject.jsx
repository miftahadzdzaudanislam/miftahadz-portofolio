import { useParams, Link } from "react-router-dom";
import { projects } from "@/utils/project";
import NotFound from "@/component/NotFound";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { BsGearFill, BsGithub } from "react-icons/bs";
import { lazy, Suspense } from "react";

export default function DetailPorject() {
  const { slug } = useParams();
  const data = projects.find((p) => p.link === slug);
  const ProjectMarkdown = lazy(() => import("@/component/Markdown"));

  if (!data) {
    return <NotFound />;
  }

  return (
    <>
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute top-32 -right-20 w-64 h-64 rounded-full bg-accent/30 blur-3xl animate-pulse" />

      <div className="hero-content flex-col pb-20 pt-0 md:px-15 gap-8 relative w-full max-w-5xl">
        <div className="w-full bg-white/90 backdrop-blur p-3 shadow-xl rounded-xl border-2 border-black/10">
          {/* Back Button */}
          <div className="flex flex-col w-full py-2 gap-2">
            <Link
              to="/projects"
              className="w-fit inline-flex items-center text-lg gap-2 font-bold font-comic py-3 px-4 rounded-2xl hover:bg-gray-100 group"
            >
              <ArrowLeft
                size={25}
                className="transition-all group-hover:-translate-x-0.5"
              />
              Back to projects
            </Link>
            <div className="flex w-full">
              {/* Image */}
              <img
                src={data.img}
                alt={data.title}
                className="w-full items-center object-cover transition-all duration-300 rounded-3xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <div className="inset-0 flex py-4">
              <h1 className="text-4xl md:text-4xl font-bold font-comic">
                {data.title}
              </h1>
            </div>
            <h2 className="text-2xl font-bold font-comic mb-3">
              About this project
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{data.desc}</p>

            <hr className="my-5" />

            {/* Tech Stack */}
            {data.tech && data.tech.length > 0 && (
              <div className="mt-6 flex items-center flex-col md:flex-row gap-5">
                <div className="md:w-1/2">
                  <h2 className="flex items-center justify-center gap-2 text-2xl font-bold font-comic mb-3 md:justify-start">
                    <BsGearFill
                      className="animate-spin text-gray-500"
                      style={{ animationDuration: "4s" }}
                    />
                    <span>Technologies</span>
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {data.tech.map((t, idx) => {
                      const Icon = t.icon;
                      return (
                        <div
                          key={idx}
                          className={`flex tooltip tooltip-bottom tooltip-primary items-center gap-2 rounded-full border-2 border-black p-2 shadow-[2px_2px_0_#000] font-semibold ${t.colorClass}`}
                          data-tip={t.techName}
                        >
                          <Icon className="text-xl" />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-row gap-2 md:w-1/2  md:justify-end">
                  {data.github ? (
                    <Link
                      to={data.github}
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      <BsGithub size={30} />
                      <span>Source Code</span>
                    </Link>
                  ) : null}
                  {data.github && data.website ? (
                    <span className="text-gray-300 text-3xl">|</span>
                  ) : null}
                  {data.website ? (
                    <Link
                      to={data.website}
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink size={30} />
                      <span>Live Demo</span>
                    </Link>
                  ) : null}
                </div>
              </div>
            )}

            {/* MDX */}
            {data.content ? (
              <div className="p-2 prose max-w-none overflow-x-auto wrap-break-word">
                <div className="flex items-center my-6">
                  <div className="flex-1 h-0.5 bg-black"></div>

                  <div className="flex gap-2 px-4">
                    <span className="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
                    <span className="w-3 h-3 rounded-full bg-secondary animate-pulse"></span>
                    <span className="w-3 h-3 rounded-full bg-accent animate-pulse"></span>
                  </div>

                  <div className="flex-1 h-0.5 bg-black"></div>
                </div>

                <Suspense
                  fallback={
                    <div className="text-gray-500">Loading content...</div>
                  }
                >
                  <ProjectMarkdown content={data.content} />
                </Suspense>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
