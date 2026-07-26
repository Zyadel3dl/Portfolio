import Reveal from "./Reveal";
export default function About() {
  return (
    <Reveal>
    <section
      id="about"
      className="bg-slate-900 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-4">
          About Me
        </h2>

        <p className="text-center text-slate-400 mb-14">
          Get to know me better.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8">

            <h3 className="text-2xl font-bold mb-6 text-white">
              About Me
            </h3>

            <p className="text-slate-400 leading-8">
              I am a fourth-year Electronics & Communications Engineering
              student at Mansoura University with a strong passion for
              Enterprise Networking, Telecommunications, and Network Security.

              <br /><br />

              I enjoy designing and configuring Cisco networks while improving
              my practical skills through hands-on labs using GNS3 and
              Packet Tracer.

              <br /><br />

              My goal is to build secure, scalable, and reliable enterprise
              networks and start my professional career as a Network Engineer.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">4+</h3>
              <p className="text-slate-400 mt-2">
                Years of Engineering Study
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">10+</h3>
              <p className="text-slate-400 mt-2">
                Networking Labs
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">4+</h3>
              <p className="text-slate-400 mt-2">
                Professional Courses
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">100%</h3>
              <p className="text-slate-400 mt-2">
                Passion for Networking
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
    </Reveal>
  );
}