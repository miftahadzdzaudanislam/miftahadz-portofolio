import { contacts } from "@/utils/contact";
import { ArrowUpIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-base-100 text-neutral-content px-6 md:px-16 py-8 border-t-3">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6">
          <div className="order-1 md:order-2 flex items-center gap-3">
            {contacts.map((c, index) => {
              const Icon = c.icon;
              return (
                <Link
                  key={index}
                  to={c.link}
                  className={`w-9 h-9 rounded-full text-white flex items-center justify-center border-2 border-black shadow-[2px_2px_0_#000] hover:-translate-y-0.5 transition-transform ${c.color}`}
                >
                  <Icon size={17} />
                </Link>
              );
            })}
          </div>

          {/* Logo left on md+ */}
          <aside className="order-2 md:order-1 flex flex-col gap-2 w-full items-center md:items-start">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center font-comic font-bold text-lg border-2 border-black -rotate-6">
                M
              </div>
              <p className="font-extrabold text-lg">MiftahAdz</p>
            </div>
            <div className="pt-1 text-center md:text-start">
              <p className="italic text-gray-600 text-sm">
                Made with love © {new Date().getFullYear()} - All right reserved
              </p>
              <p className="italic text-gray-600 text-sm">
                Built with React & Tailwind
              </p>
            </div>
          </aside>
        </div>

        {/* Back to top button */}
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 z-50 w-11 h-11 rounded-full bg-primary text-black border-2 border-black shadow-[2px_2px_0_#000] flex items-center justify-center hover:-translate-y-0.5 transition-transform"
        >
          <ArrowUpIcon />
        </button>
      </footer>
    </>
  );
}
