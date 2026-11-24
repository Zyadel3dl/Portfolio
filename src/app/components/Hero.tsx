"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download, Mail, ChevronDown, FileText } from "lucide-react";
import { useState } from "react";

const fullName = "Zyad Abdulftah Ibrahim El Adl";
const highlights = [
  { label: "Currently studying", value: "Electronics & Communications" },
  { label: "Building with", value: "Cisco · GNS3 · Packet Tracer" },
  { label: "Exploring", value: "Routing · Switching · Security" },
];

export default function Hero() {
  const [isCvMenuOpen, setIsCvMenuOpen] = useState(false);

  return (
    <section id="home" className="min-h-screen text-white flex items-center">
      <div className="hero-layout mx-auto grid items-center gap-14 lg:grid-cols-[1.12fr_.88fr]">
        <div className="hero-content">
          <p className="hero-kicker mb-6">Portfolio <span> / </span> Mansoura University</p>
          <h1 className="hero-name mb-3">{fullName}</h1>
          <p className="hero-role mb-7">Network Engineering Student</p>
          <p className="hero-copy mb-9 leading-8">
            Fourth-year Electronics & Communications Engineering student interested in enterprise networking, telecommunications, and network security. I’m building practical experience through Cisco labs and hands-on projects.
          </p>
          <div className="hero-actions flex flex-wrap gap-3">
            <div className="hero-cv-picker relative">
              <button
                type="button"
                className="hero-cv-trigger inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold transition"
                aria-expanded={isCvMenuOpen}
                aria-haspopup="true"
                onClick={() => setIsCvMenuOpen((open) => !open)}
              >
                <Download size={18} /> My CV <ChevronDown size={16} />
              </button>
              {isCvMenuOpen && (
                <div className="hero-cv-menu" role="menu">
                  <a role="menuitem" href="/CVs/My%20CV/Zyad%20ElAdl%20CV.docx.pdf" target="_blank" rel="noreferrer" onClick={() => setIsCvMenuOpen(false)}>
                    <FileText size={17} /> Professional CV <ArrowUpRight size={14} />
                  </a>
                  <a role="menuitem" href="/CVs/My%20Academic%20CV/Academic%20CV.pdf" target="_blank" rel="noreferrer" onClick={() => setIsCvMenuOpen(false)}>
                    <FileText size={17} /> Academic CV <ArrowUpRight size={14} />
                  </a>
                </div>
              )}
            </div>
            <a href="#contact" className="hero-contact-link inline-flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold transition">
              <Mail size={18} /> Contact me
            </a>
          </div>
          <div className="hero-highlights mt-12 grid gap-3 sm:grid-cols-3">
            {highlights.map((item, index) => (
              <div className="highlight-card" key={item.label}>
                <span className="highlight-index">0{index + 1}</span>
                <span className="highlight-label">{item.label}</span>
                <span className="highlight-value">{item.value}</span>
              </div>
            ))}
          </div>
          <a className="scroll-cue" href="#about"><span>Explore portfolio</span><ArrowDown size={15} /></a>
        </div>
        <div className="hero-visual">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="portrait-wrap">
            <Image src="/Images/Profile.png" alt={fullName} width={800} height={800} priority className="h-full w-full object-cover" />
          </div>
          <div className="portrait-tag"><span className="status-dot" /> Open to learning & collaboration</div>
          <div className="visual-node node-a" /><div className="visual-node node-b" /><div className="visual-node node-c" />
          <div className="visual-connection connection-a" /><div className="visual-connection connection-b" />
        </div>
      </div>
    </section>
  );
}
