import { useState } from "react";
import { BiHome, BiUser, BiBriefcase, BiEnvelope } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { label: "Home", href: "/", icon: BiHome },
    { label: "About", href: "/about", icon: BiUser },
    { label: "Project", href: "/projects", icon: BiBriefcase },
    { label: "Contact", href: "/contact", icon: BiEnvelope },
  ];

  return (
    <>
      <div className="bg-base-100 top-0 left-0 right-0 fixed z-10 m-4 rounded-full border-2 md:mx-30 md:shadow-[6px_6px_0_#000]">
        <div className="navbar w-full justify-between">
          <div className="navbar-start">
            <Link to={"#"} className="text-2xl font-bold px-6 font-comic">
              MiftahAdz
            </Link>
          </div>

          <div className="navbar-end">
            {/* Desktop */}
            <div className="hidden md:flex ml-auto">
              <ul className="menu menu-horizontal px-1 gap-2 flex-nowrap">
                {menus.map((m) => {
                  const Icon = m.icon;
                  return (
                    <li key={m.href} className="whitespace-nowrap">
                      <NavLink
                        to={m.href}
                        className="group px-4 py-2 rounded-3xl border-2 border-transparent transition-all duration-300 hover:bg-primary hover:border-black flex items-center gap-2"
                      >
                        <Icon className="text-lg transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
                        {m.label}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Mobile */}
            <div className="relative ps-3">
              {/* Burger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden relative w-10 h-10 flex items-center justify-start"
              >
                {/* Top */}
                <span
                  className={`absolute h-0.5 w-6 bg-black transition-all duration-300
                  ${isOpen ? "rotate-45" : "-translate-y-2"}
                `}
                />

                {/* Mid */}
                <span
                  className={`absolute h-0.5 w-6 bg-black transition-all duration-300
                  ${isOpen ? "opacity-0" : ""}
                `}
                />

                {/* Bottom */}
                <span
                  className={`absolute h-0.5 w-6 bg-black transition-all duration-300
                  ${isOpen ? "-rotate-45" : "translate-y-2"}
                `}
                />
              </button>

              {isOpen && (
                <div
                  className="fixed inset-0 z-40 md:hidden"
                  onClick={() => setIsOpen(false)}
                />
              )}

              {/* Mobile Menu */}
              <ul
                className={`fixed top-24 left-0 right-0 md:hidden bg-base-100 shadow-lg z-50 transition-all duration-300 overflow-hidden mx-5 rounded-2xl border-2
                ${
                  isOpen
                    ? "max-h-100 opacity-100"
                    : "max-h-0 opacity-0 pointer-events-none"
                }
              `}
              >
                {menus.map((m) => {
                  const Icon = m.icon;
                  return (
                    <li key={m.href}>
                      <NavLink
                        to={m.href}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center justify-center gap-2 py-4 text-base font-medium text-center border-b-2 mx-5 ${
                            isActive ? "border-primary" : "border-gray-200"
                          }`
                        }
                      >
                        <Icon className="text-lg" />
                        {m.label}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
