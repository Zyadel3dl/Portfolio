"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const fullName = "Zyad Abdulftah Ibrahim El Adl";
const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${scrolled ? "border-b border-slate-800 bg-slate-950/90 shadow-lg backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="nav-brand" onClick={() => setMenuOpen(false)}>
          <span className="nav-mark">ZA</span>
          <span className="nav-person-name">{fullName}<span className="nav-caption">NETWORK ENGINEERING STUDENT</span></span>
        </a>
        <ul className="hidden items-center gap-5 xl:flex">
          {links.map((item) => <li key={item.id}><a href={`#${item.id}`} className="text-slate-300 transition hover:text-cyan-400">{item.label}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <button type="button" className="nav-menu-toggle" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1">
          {links.map((item) => <li key={item.id}><a href={`#${item.id}`} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2 text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400">{item.label}</a></li>)}
          </ul>
        </div>
      )}
    </nav>
  );
}
