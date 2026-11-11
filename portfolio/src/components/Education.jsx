import Section from "./Section";
import { education } from "../data";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="relative border-l-2 border-indigo-500/50 ml-3 space-y-8">
        {education.map(([title, place, years]) => (
          <li key={title} className="ml-8 relative">
            <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-indigo-500/40" />
            <div className="card p-5">
              <h3 className="font-semibold">{title}</h3>
              <p className="mut text-sm">{place}</p>
              <p className="text-cyan-400 text-sm mt-1">{years}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
