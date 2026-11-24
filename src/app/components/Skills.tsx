import Reveal from "./Reveal";
import { Activity, Network, Router, Server, Shield } from "lucide-react";

type SkillGroup = { icon: typeof Router | typeof Activity | typeof Network | typeof Shield | typeof Server; title: string; skills: string[]; wide?: boolean };

const groups: SkillGroup[] = [
  {
    icon: Router,
    title: "Networking",
    skills: ["Routing & Switching", "TCP/IP", "IPv4 Subnetting", "VLANs & 802.1Q", "STP", "OSPF", "HSRP", "DHCP", "NAT", "ACLs", "LAN/WAN"],
  },
  {
    icon: Activity,
    title: "Network Monitoring",
    skills: ["SNMP", "Syslog", "CDP", "LLDP", "Network Troubleshooting"],
  },
  {
    icon: Network,
    title: "Tools & Platforms",
    skills: ["GNS3", "Cisco IOS", "AutoCAD", "Autodesk Revit", "DIALux evo"],
  },
  {
    icon: Shield,
    title: "Telecommunications & Electrical",
    skills: ["Wireless Communications", "Distribution", "Light Current", "Shop Drawing"],
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    wide: true,
    skills: ["Windows Server Administration", "Remote Desktop Services", "Virtualization Fundamentals"],
  },
];

export default function Skills() {
  return (
    <Reveal>
      <section id="skills" className="bg-slate-950 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-center font-mono text-xs uppercase tracking-[.2em] text-cyan-400">Technical toolkit</p>
          <h2 className="text-center text-4xl font-bold text-white md:text-5xl">Skills & technologies</h2>
          <p className="mx-auto mb-14 mt-4 max-w-2xl text-center leading-7 text-slate-400">
            A practical toolkit developed through engineering studies, training, and hands-on projects.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {groups.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.title} className={group.wide ? "rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400/50 md:col-span-2" : "rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400/50"}>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-400"><Icon size={20} /></span>
                    <h3 className="font-semibold text-white">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => <span key={skill} className="rounded-full border border-slate-700 px-3 py-1.5 text-xs text-slate-300">{skill}</span>)}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </Reveal>
  );
}


