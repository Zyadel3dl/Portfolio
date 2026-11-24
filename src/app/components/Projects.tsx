import { ArrowUpRight, Cpu, Network } from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  {
    title: "Secure & Highly Available Campus Network",
    stage: "Graduation project · In progress",
    description: "Designing a multi-college campus network with a redundant core and distribution architecture. Configuring VLANs, 802.1Q trunks, HSRP, and STP in GNS3, with centralized NOC monitoring and firewall-based security in scope.",
    tags: ["GNS3", "VLANs", "HSRP", "STP", "NOC"],
    icon: Network,
  },
  {
    title: "Remote PC Power Control System",
    stage: "Embedded systems · Web interface",
    description: "Built an ESP32- and relay-based system to remotely trigger a PC motherboard power switch through a mobile-friendly Arabic web interface.",
    tags: ["ESP32", "Relay", "Web interface"],
    icon: Cpu,
  },
];

export default function Projects() {
  return (
    <Reveal>
      <section id="projects" className="bg-slate-950 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[.2em] text-cyan-400">Selected work</p>
              <h2 className="text-4xl font-bold text-white md:text-5xl">Projects in progress and practice</h2>
            </div>
            <p className="max-w-md leading-7 text-slate-400">Network design and hands-on engineering work, documented as part of my learning journey.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <article key={project.title} className="group rounded-2xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="project-number">0{index + 1} / PROJECT</span>
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-400"><Icon size={21} /></span>
                  </div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-cyan-400">{project.stage}</p>
                  <h3 className="mb-3 text-xl font-bold text-white">{project.title}</h3>
                  <p className="max-w-xl leading-7 text-slate-400">{project.description}</p>
                  <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-cyan-400">Hands-on engineering <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

