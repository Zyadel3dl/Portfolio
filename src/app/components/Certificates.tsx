import { ArrowUpRight, Award, BookOpenCheck, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

type TrainingItem = { title: string; provider: string; detail: string; href?: string; status?: string; wide?: boolean; icon: typeof Award | typeof BookOpenCheck | typeof ShieldCheck };

const training: TrainingItem[] = [
  {
    title: "Network & System Security (MCSA)",
    provider: "In progress · Aug-Dec 2026",
    detail: "Training in progress",
    status: "In progress",
    icon: ShieldCheck,
  },
  {
    title: "Cisco Certified Network Associate (CCNA) Course",
    provider: "OneLab Training · Issued Apr 2026",
    detail: "120 hours · Course completed",
    href: "/Certificates/CCNA/%D8%B2%D9%8A%D8%A7%D8%AF%20%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%81%D8%AA%D8%A7%D8%AD%20%D8%A5%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85%20Onelab%20Training.jpg",
    icon: Award,
  },
  {
    title: "Mobile Communication Networks",
    provider: "National Telecommunication Institute (NTI) · Jul-Sep 2025",
    detail: "60 hours · Score: 90% · Completed",
    href: "/Certificates/Mobile%20Communication%20Networks/Zyad%20Abdulftah%20Ibrahim%20Ibrahim.pdf",
    icon: Award,
  },
  {
    title: "React Web Developer Track",
    provider: "Digital Egypt Pioneers Program · Apr-Oct 2024",
    detail: "120 hours · Score: 96% · Completed",
    href: "/Certificates/React%20Web%20Developer%20Track/Zyad%20Abdulftah%20Ibrahim%20Ibrahim%20Al%20Adl.pdf",
    icon: BookOpenCheck,
  },
  {
    title: "Business English Track",
    wide: true,
    provider: "Berlitz Egypt · Digital Egypt Pioneers Program · Apr-Oct 2024",
    detail: "Business English training · Completed",
    href: "/Certificates/Business%20English%20Track/Ziad%20Abdel%20Fattah%20Ibrahim.pdf",
    icon: BookOpenCheck,
  },
];

export default function Certificates() {
  return (
    <Reveal>
      <section id="certificates" className="bg-slate-900 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-center font-mono text-xs uppercase tracking-[.2em] text-cyan-400">Learning & development</p>
          <h2 className="mb-4 text-center text-4xl font-bold text-white md:text-5xl">Training & certificates</h2>
          <p className="mb-14 text-center text-slate-400">Completed courses and current professional learning.</p>

          <div className="grid gap-4 md:grid-cols-2">
            {training.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-blue-400/20 bg-blue-400/5 text-blue-300"><Icon size={20} /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-white">{item.title}</span>
                    <span className="mt-1 block text-sm text-cyan-400">{item.provider}</span>
                    <span className="mt-2 block text-sm text-slate-400">{item.detail}</span>
                  </span>
                  {item.href ? (
                    <span className="flex shrink-0 items-center gap-1 text-xs font-medium text-blue-300">
                      View <ArrowUpRight size={15} />
                    </span>
                  ) : (
                    <span className="shrink-0 rounded-full border border-blue-400/25 px-2.5 py-1 text-xs text-blue-300">{item.status}</span>
                  )}
                </>
              );

              return item.href ? (
                <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer"
                  className={item.wide ? "flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:-translate-y-0.5 hover:border-blue-400/60 md:col-span-2" : "flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:-translate-y-0.5 hover:border-blue-400/60"}>
                  {content}
                </a>
              ) : (
                <article key={item.title} className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-6">
                  {content}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </Reveal>
  );
}



