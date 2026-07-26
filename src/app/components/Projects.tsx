import Reveal from "./Reveal";
export default function Projects() {
  const projects = [
    {
      title: "Enterprise VLAN & OSPF Network",
      description:
        "Designed an enterprise network using VLANs, Inter-VLAN Routing, and OSPF dynamic routing.",
    },
    {
      title: "IPsec Site-to-Site VPN",
      description:
        "Configured secure communication between two branch offices using IPsec VPN.",
    },
    {
      title: "GRE Tunnel Lab",
      description:
        "Built GRE tunnels to connect remote networks over public infrastructure.",
    },
    {
      title: "Network Monitoring",
      description:
        "Implemented SNMP and Syslog for monitoring Cisco network devices.",
    },
  ];

  return (
<Reveal>
    <section
      id="projects"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-4">
          Featured Projects
        </h2>

        <p className="text-center text-slate-400 mb-14">
          Networking labs and practical projects.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-slate-400 leading-7">
                {project.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
</Reveal>
  );
}