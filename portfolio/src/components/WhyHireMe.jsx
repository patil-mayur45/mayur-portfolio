import Section from "./Section";
import { strengths } from "../data";

export default function WhyHireMe() {
  return (
    <Section id="why" title="Why hire me">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {strengths.map(([t, d]) => (
          <div key={t} className="card p-6">
            <h3 className="font-semibold mb-2">{t}</h3>
            <p className="mut text-sm">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
