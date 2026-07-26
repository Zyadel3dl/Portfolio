import Reveal from "./Reveal";
export default function Education() {
  return (
<Reveal>
    <section
      id="education"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-4">
          Education
        </h2>

        <p className="text-center text-slate-400 mb-14">
          My academic background.
        </p>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition">

          <h3 className="text-2xl font-bold text-white">
            Mansoura University
          </h3>

          <p className="text-cyan-400 mt-2">
            B.Sc. in Electronics & Communications Engineering
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <div>
              <p className="text-slate-500">Current Year</p>
              <h4 className="text-white font-semibold">
                Fourth-Year Student
              </h4>
            </div>

            <div>
              <p className="text-slate-500">Expected Graduation</p>
              <h4 className="text-white font-semibold">
                2027
              </h4>
            </div>

            <div>
              <p className="text-slate-500">Current Grade</p>
              <h4 className="text-white font-semibold">
                Very Good
              </h4>
            </div>

            <div>
              <p className="text-slate-500">Field</p>
              <h4 className="text-white font-semibold">
                Telecommunications & Networking
              </h4>
            </div>

          </div>

        </div>

      </div>
    </section>
</Reveal>
  );
}