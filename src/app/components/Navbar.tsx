"use client";

import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}

        <a
          href="#home"
          className="text-3xl font-black text-cyan-400 hover:scale-110 transition"
        >
          ZA.
	  Network Engineer
        </a>

        {/* Desktop */}

        <ul className="hidden md:flex items-center gap-8 text-slate-300">

          {[
            "Home",
            "About",
            "Skills",
            "Experience",
            "Education",
            "Certificates",
            "Projects",
            "Contact",
          ].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition"
              >
                {item}
              </a>
            </li>
          ))}

        </ul>

        {/* Mobile Button */}

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          <ul className="flex flex-col items-center gap-6 py-6">

            {[
              "Home",
              "About",
              "Skills",
              "Experience",
              "Education",
              "Certificates",
              "Projects",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-300 hover:text-cyan-400 transition"
                >
                  {item}
                </a>
              </li>
            ))}

          </ul>

        </div>
      )}
    </nav>
  );
}