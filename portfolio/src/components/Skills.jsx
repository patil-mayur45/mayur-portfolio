import Section from "./Section";
import { skills } from "../data";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid sm:grid-cols-2 gap-6">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="card p-6">
            <h3 className="font-semibold text-lg mb-4">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span key={s} className="px-3 py-1 rounded-full text-sm border border-indigo-500/40 hover:bg-indigo-500 hover:text-white hover:scale-105 transition cursor-default">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
