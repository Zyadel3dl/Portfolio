"use client";
import Reveal from "./Reveal";
import { Mail, Phone } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
<Reveal>
    <section
      id="contact"
      className="bg-slate-900 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-4">
          Get In Touch
        </h2>

        <p className="text-center text-slate-400 mb-14">
          Feel free to contact me for internships, networking opportunities,
          collaborations, or freelance projects.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Email */}
          <a
            href="mailto:zyadaibrahim2004@gmail.com"
            className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition flex items-center gap-5"
          >
            <Mail className="text-cyan-400" size={32} />

            <div>
              <h3 className="font-bold text-white">
                Email
              </h3>

              <p className="text-slate-400">
                zyadaibrahim2004@gmail.com
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+201002290455"
            className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition flex items-center gap-5"
          >
            <Phone className="text-cyan-400" size={32} />

            <div>
              <h3 className="font-bold text-white">
                Phone
              </h3>

              <p className="text-slate-400">
                +20 100 229 0455
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/zyad-el-adl-18ab631ab"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition flex items-center gap-5"
          >
            <FaLinkedin className="text-cyan-400 text-3xl" />

            <div>
              <h3 className="font-bold text-white">
                LinkedIn
              </h3>

              <p className="text-slate-400">
                linkedin.com/in/zyad-el-adl-18ab631ab
              </p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="#"
            className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition flex items-center gap-5"
          >
            <FaGithub className="text-cyan-400 text-3xl" />

            <div>
              <h3 className="font-bold text-white">
                GitHub
              </h3>

              <p className="text-slate-400">
                Coming Soon
              </p>
            </div>
          </a>

        </div>

      </div>
    </section>
</Reveal>
  );
}