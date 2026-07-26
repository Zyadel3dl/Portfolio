import Reveal from "./Reveal";
export default function Certificates() {
  return (
<Reveal>
    <section
      id="certificates"
      className="bg-slate-900 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-4">
          Certificates
        </h2>

        <p className="text-center text-slate-400 mb-14">
          Courses and professional training.
        </p>

        <div className="flex justify-center">

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition w-full max-w-xl">
            <h3 className="text-xl font-bold text-white">
              Mobile Communication Networks
            </h3>

            <p className="text-cyan-400 mt-2">
              National Telecommunication Institute (NTI)
            </p>
          </div>

          

        </div>

      </div>
    </section>
</Reveal>
  );
}