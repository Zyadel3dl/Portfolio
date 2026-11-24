import Reveal from "./Reveal";

export default function Experience() {
  return (
    <Reveal>
      <section id="experience" className="bg-slate-900 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center font-mono text-xs uppercase tracking-[.2em] text-cyan-400">Completed training</p>
          <h2 className="mb-4 text-center text-4xl font-bold text-white md:text-5xl">Mobile networks at NTI</h2>
          <p className="mb-14 text-center text-slate-400">A focused 60-hour training program in mobile communication networks.</p>

          <article className="mx-auto w-full max-w-3xl rounded-2xl border border-slate-800 bg-slate-950 p-7 md:p-9">
            <div className="flex flex-col gap-3 border-b border-slate-800 pb-6 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">Mobile Communication Networks</h3>
                <p className="mt-2 text-cyan-400">National Telecommunication Institute (NTI)</p>
              </div>
              <span className="text-sm text-slate-400">Jul-Sep 2025</span>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">60 training hours</span>
              <span className="rounded-full border border-blue-400/30 bg-blue-400/5 px-4 py-2 text-sm font-semibold text-blue-300">Score: 90%</span>
            </div>
          </article>
        </div>
      </section>
    </Reveal>
  );
}

