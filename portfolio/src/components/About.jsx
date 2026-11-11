import Section from "./Section";
import { me, stats } from "../data";

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <p className="mut md:col-span-2 leading-relaxed text-lg">{me.about}</p>
        <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
          {stats.map(([big, small]) => (
            <div key={small} className="card p-4 text-center">
              <div className="text-2xl font-bold grad">{big}</div>
              <div className="mut text-sm">{small}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
