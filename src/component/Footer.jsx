import { ArrowUpIcon } from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-base-100 text-neutral-content px-6 md:px-16 py-8 border-t-3">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6">
          {/* Icons on top (mobile), right (md+) */}
          <div className="order-1 md:order-2 flex items-center gap-3">
            <Link
              to={"mailto:miftahdzaudan@gmail.com"}
              className="w-10 h-10 rounded-full bg-primary text-black flex items-center justify-center border-2 border-black shadow-[2px_2px_0_#000] hover:-translate-y-0.5 transition-transform"
            >
              <MdEmail size={20} />
            </Link>
            <Link
              to={"https://github.com/miftahadzdzaudanislam"}
              className="w-10 h-10 rounded-full bg-secondary text-black flex items-center justify-center border-2 border-black shadow-[2px_2px_0_#000] hover:-translate-y-0.5 transition-transform"
            >
              <BsGithub size={20} />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/miftah-adz-dzaudan-i-682616293/"}
              className="w-10 h-10 rounded-full bg-accent text-black flex items-center justify-center border-2 border-black shadow-[2px_2px_0_#000] hover:-translate-y-0.5 transition-transform"
            >
              <BsLinkedin size={20} />
            </Link>
          </div>

          {/* Logo left on md+ */}
          <aside className="order-2 md:order-1 flex flex-col gap-2 w-full items-center md:items-start">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-comic font-bold text-xl border-2 border-black -rotate-6">
                M
              </div>
              <p className="font-bold text-xl">MiftahAdz</p>
            </div>
            <p className="italic text-gray-600 pt-2">
              Made with love © {new Date().getFullYear()} - All right reserved
            </p>
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
