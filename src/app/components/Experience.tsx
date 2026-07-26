import Reveal from "./Reveal";
export default function Experience() {
  return (
    <Reveal>
    <section
      id="experience"
      className="bg-slate-900 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-4">
          Experience
        </h2>

        <p className="text-center text-slate-400 mb-14">
          My practical training and hands-on experience.
        </p>

        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition">

          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">

            <div>
              <h3 className="text-2xl font-bold text-white">
                Mobile Communication Networks Trainee
              </h3>

              <p className="text-cyan-400 mt-2">
                National Telecommunication Institute (NTI)
              </p>
            </div>

            <span className="text-slate-400 mt-4 md:mt-0">
              Jul 2025 – Sep 2025
            </span>

          </div>

          <ul className="space-y-4 text-slate-400 list-disc pl-6">

            <li>
              Studied GSM architecture and mobile communication systems.
            </li>

            <li>
              Learned cellular network concepts including BTS, BSC, MSC,
              HLR, VLR, and Core Network.
            </li>

            <li>
              Improved understanding of modern mobile network technologies
              and telecommunications infrastructure.
            </li>

          </ul>

        </div>

      </div>
    </section>
</Reveal>
  );
}