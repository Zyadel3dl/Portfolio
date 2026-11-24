import Reveal from "./Reveal";
import { useLanguage } from "./LanguageProvider";

const highlights = [
  { value: "4th Year", label: "Electronics & Communications Engineering" },
  { value: "Jul 2027", label: "Expected graduation" },
  { value: "In Progress", label: "Secure campus network graduation project" },
  { value: "90%", label: "NTI Mobile Communication Networks score" },
];

export default function About() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  return (
    <Reveal>
      <section id="about" className="bg-slate-900 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-center font-mono text-xs uppercase tracking-[.2em] text-cyan-400">{isArabic ? "نبذة عني" : "A little about me"}</p>
          <h2 className="mb-4 text-center text-4xl font-bold text-white md:text-5xl">{isArabic ? "أتعلم بالتطبيق" : "Learning by building"}</h2>
          <p className="mb-14 text-center text-slate-400">{isArabic ? "دراستي واهتماماتي وما أعمل عليه حاليًا." : "My studies, focus, and current work."}</p>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8">
              <h3 className="mb-5 text-2xl font-bold text-white">{isArabic ? "طالب هندسة شبكات" : "Network Engineering Student"}</h3>
              <p className="leading-8 text-slate-400">
                {isArabic ? "أنا طالب بالفرقة الرابعة في هندسة الإلكترونيات والاتصالات بجامعة المنصورة. أركز على شبكات المؤسسات والبنية التحتية، وأبني خبرة عملية من خلال معامل سيسكو ومشروع تخرج لتصميم شبكة حرم جامعي آمنة وعالية التوافر." : "I’m a fourth-year Electronics and Communications Engineering student at Mansoura University. I’m focused on enterprise networking and infrastructure, and building hands-on experience through Cisco labs and my secure, highly available campus network graduation project."}
              </p>
              <p className="mt-5 leading-8 text-slate-400">
                {isArabic ? "أهتم خصوصًا بالتوجيه والتحويل ومراقبة الشبكات وأمنها، وأسعى للعمل كمهندس شبكات مبتدئ بعد التخرج." : "I’m especially interested in routing, switching, network monitoring, and security, and I’m working toward an entry-level Network Engineer role after graduation."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                  <h3 className="text-xl font-bold text-cyan-400">{item.value}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

