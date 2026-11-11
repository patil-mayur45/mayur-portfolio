import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiLayers } from "react-icons/fi";
import Section from "./Section";
import { projects } from "../data";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="card overflow-hidden flex flex-col group">
            {/* Add a screenshot: <img src="/shot.png" ... /> in place of this banner */}
            <div className="h-36 grid place-items-center bg-gradient-to-br from-indigo-500/40 to-cyan-400/30 overflow-hidden">
              <FiLayers className="text-5xl group-hover:scale-125 transition duration-500" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-semibold text-xl">{p.title}</h3>
              <p className="mut text-sm mt-2 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => <span key={t} className="text-xs px-2 py-1 rounded-md bg-indigo-500/15 text-indigo-400">{t}</span>)}
              </div>
              <div className="flex gap-3 mt-5">
                <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-p !py-2 text-sm"><FiExternalLink /> Live demo</a>
                <a href={p.code} target="_blank" rel="noreferrer" className="btn btn-o !py-2 text-sm"><FaGithub /> Code</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
