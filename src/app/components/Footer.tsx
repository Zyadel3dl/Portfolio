import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-cyan-400 text-xl font-bold mb-2">Zyad Abdulftah Ibrahim El Adl</h2>
        <p className="text-slate-400">{isArabic ? "طالب هندسة شبكات · جامعة المنصورة" : "Network Engineering Student · Mansoura University"}</p>
        <p className="text-slate-600 mt-6 text-sm">© 2026 Zyad Abdulftah Ibrahim El Adl. {isArabic ? "جميع الحقوق محفوظة." : "All Rights Reserved."}</p>
      </div>
    </footer>
  );
}
