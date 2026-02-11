import { contacts } from "@/utils/contact";
import { Send, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute top-32 -right-20 w-64 h-64 rounded-full bg-accent/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-secondary/20 blur-3xl animate-pulse" />

      {/* Floating dots */}
      <div className="pointer-events-none absolute top-24 left-24 grid grid-cols-3 gap-3 opacity-40">
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-black/40 animate-bounce"
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>

      <div className="hero-content flex-col px-10 pb-20 md:px-15 gap-12 relative">
        {/* Header */}
        <div className="text-center max-w-3xl">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary border-2 border-black shadow-[4px_4px_0_#000] animate-bounce">
              <Send size={32} className="text-black" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold font-comic mb-4">
            Let's{" "}
            <span className="inline-block relative">
              Connect
              <span className="absolute -right-8 -top-2">
                <Sparkles className="text-accent" size={24} />
              </span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach
            out through any of these platforms!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Link
                  key={index}
                  to={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden rounded-2xl backdrop-blur border-2 border-black p-6 shadow-[4px_4px_0_#000] hover:shadow-[6px_6px_0_#000] hover:-translate-y-1 transition-all duration-300 ${contact.color}`}
                >
                  <div className="flex items-center gap-4 relative z-10">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/90 border-2 border-black shadow-[3px_3px_0_#000] transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110">
                      <Icon size={28} className="text-black" />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold font-comic mb-1 text-white">
                        {contact.social}
                      </h3>
                      <p className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors">
                        Click to connect →
                      </p>
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-white border-2 border-black opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
