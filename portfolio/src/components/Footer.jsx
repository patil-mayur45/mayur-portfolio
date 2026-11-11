import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { me } from "../data";

export default function Footer() {
  return (
    <footer className="border-t py-8 px-5" style={{ borderColor: "var(--bd)" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="mut text-sm">&copy; {new Date().getFullYear()} {me.name}. All rights reserved.</p>
        <div className="flex gap-5 text-xl">
          <a href={me.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="ico"><FaGithub /></a>
          <a href={me.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="ico"><FaLinkedinIn /></a>
        </div>
        <a href="#home" className="btn btn-o !py-2 text-sm"><FiArrowUp /> Back to top</a>
      </div>
    </footer>
  );
}
