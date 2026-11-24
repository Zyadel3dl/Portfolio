"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const fullName = "Zyad Abdulftah Ibrahim Ibrahim El Adl";
const links = [
  { id: "home", en: "Home", ar: "الرئيسية" },
  { id: "about", en: "About", ar: "عني" },
  { id: "skills", en: "Skills", ar: "المهارات" },
  { id: "experience", en: "Experience", ar: "الخبرة" },
  { id: "education", en: "Education", ar: "التعليم" },
  { id: "certificates", en: "Certificates", ar: "الشهادات" },
  { id: "projects", en: "Projects", ar: "المشاريع" },
  { id: "contact", en: "Contact", ar: "تواصل" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const isArabic = language === "ar";

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
          {links.map((item) => <li key={item.id}><a href={`#${item.id}`} className="text-slate-300 transition hover:text-cyan-400">{isArabic ? item.ar : item.en}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <button type="button" className="language-toggle" onClick={toggleLanguage} aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}>{isArabic ? "EN" : "عربي"}</button>
          <button type="button" className="nav-menu-toggle" aria-label={menuOpen ? (isArabic ? "إغلاق القائمة" : "Close navigation menu") : (isArabic ? "فتح القائمة" : "Open navigation menu")} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1">
          {links.map((item) => <li key={item.id}><a href={`#${item.id}`} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2 text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400">{isArabic ? item.ar : item.en}</a></li>)}
          </ul>
        </div>
      )}
    </nav>
  );
}
