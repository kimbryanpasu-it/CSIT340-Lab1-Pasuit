export default function App() {
  return (
    <div className="max-w-2xl mx-auto px-6 pt-16 pb-16 font-sans">

      <h1 className="text-4xl font-semibold tracking-tight">Kim Bryan P. Pasu-it</h1>
      <p className="mt-2 text-lg text-slate-600">Third year BSIT student at Cebu Institute of Technology – University.</p>
      <hr className="mt-8 border-slate-200"/>

      <div className="py-10">
        <h2 className="text-xl font-semibold mb-3">About</h2>
        <p className="leading-relaxed text-slate-700">
          I grew up in Cebu and am currently studying IT. Now I get it why people feel amazed about an IT person.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Details</h2>
        <p className="leading-relaxed text-slate-700">
          Course: BS Information Technology
          <br />
          Year level: Third year
          <br />
          Hometown: Dumanjug, Cebu
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Things I like</h2>
        <ul className="list-disc list-inside space-y-1 text-slate-700">
          <li>Eating foods</li>
          <li>Sleeping</li>
          <li>Travelling</li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Reach me</h2>
        <p className="leading-relaxed text-slate-700">
          kimbryan.pasu-it@cit.edu
          <br/>
          @kimbryan.pasu-it on most things
        </p>
      </div>

      <div>
        <hr className="mb-6 border-slate-200"/>
        <p className="text-sm text-slate-500">Made for CSIT340.</p>
      </div>

    </div>
  );
}