"use client";
import Reveal from "./Reveal";
import {
  Router,
  Shield,
  Network,
  Server,
  Monitor,
  Cable,
  Workflow,
  Database,
} from "lucide-react";

const skills = [
  { icon: Router, title: "Cisco Networking" },
  { icon: Network, title: "Routing & Switching" },
  { icon: Shield, title: "Network Security" },
  { icon: Workflow, title: "OSPF & VLANs" },
  { icon: Database, title: "Windows Server" },
  { icon: Monitor, title: "GNS3" },
];

export default function Skills() {
  return (
    <Reveal>
    <section id="skills" className="bg-slate-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-4">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-14">

          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.title}
                className="bg-slate-900 rounded-2xl border border-slate-800 p-8 hover:border-cyan-400 transition text-center"
              >
                <Icon
                  size={42}
                  className="mx-auto text-cyan-400 mb-5"
                />

                <h3 className="font-semibold">
                  {skill.title}
                </h3>

              </div>
            );
          })}

        </div>

      </div>
    </section>
    </Reveal>
  );
}