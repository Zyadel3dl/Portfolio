"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <div>

          <p className="uppercase tracking-[0.4em] text-cyan-400 font-semibold mb-4">
            Welcome To My Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Hi, I'm <br />

            <span className="text-cyan-400">
              Zyad Abdulftah
            </span>

          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-slate-300 mb-8 h-12">

            <TypeAnimation
              sequence={[
                "ECE Student",
                2000,
                "Aspiring Network Engineer",
                2000,
                "CCNA Student",
                2000,
                "Cisco Networking",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />

          </div>

          <p className="text-slate-400 leading-8 max-w-xl mb-10">
  I'm a fourth-year Electronics & Communications Engineering student at
  Mansoura University with a strong interest in Enterprise Networking,
  Telecommunications, and Network Security.

  <br />
  <br />

  Currently, I'm developing my skills through hands-on Cisco labs using
  GNS3 to become a professional Network Engineer.
</p>

          <div className="flex flex-wrap gap-4">

            <a
              href="/CV/Zyad_Abdulftah_CV.pdf"
              target="_blank"
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-6 py-3 rounded-xl transition"
            >
              <Download size={20} />
              Download CV
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 px-6 py-3 rounded-xl transition"
            >
              <Mail size={20} />
              Contact Me
            </a>

          </div>

          {/* Statistics */}

          <div className="grid grid-cols-3 gap-8 mt-14 max-w-xl">

            <div>

              <h3 className="text-4xl font-bold text-cyan-400">
                2027
              </h3>

              <p className="text-slate-400 mt-2 text-sm">
                Expected Graduation
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-bold text-cyan-400">
                NTI
              </h3>

              <p className="text-slate-400 mt-2 text-sm">
                Professional Training
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-bold text-cyan-400">
                CCNA
              </h3>

              <p className="text-slate-400 mt-2 text-sm">
                In Progress
              </p>

            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <div
  className="
    relative
    w-96
    h-96
    rounded-full
    overflow-hidden
    border-4
    border-cyan-500
    shadow-[0_0_60px_rgba(34,211,238,0.35)]
    hover:scale-105
    hover:shadow-[0_0_90px_rgba(34,211,238,0.55)]
    transition-all
    duration-500
  "
>
  <img
    src="/Images/Profile.png"
    alt="Zyad Abdulftah"
    className="w-full h-full object-cover"
  />
</div>
        </div>

      </div>
    </section>
  );
}