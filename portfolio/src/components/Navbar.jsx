import { useEffect, useState } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

const links = ["home", "about", "skills", "projects", "education", "contact"];

export default function Navbar({ dark, toggle }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const cur = links.filter((l) => document.getElementById(l)?.getBoundingClientRect().top < 140).pop();
      setActive(cur || "home");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-1 w-full z-50 backdrop-blur-lg border-b" style={{ background: "var(--card)", borderColor: "var(--bd)" }}>
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold grad">Mayur.dev</a>
        <ul className="hidden md:flex gap-8 text-sm capitalize">
          {links.map((l) => (
            <li key={l}><a href={`#${l}`} className={`nl ${active === l ? "on" : ""}`}>{l}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button onClick={toggle} aria-label="Toggle theme" className="ico text-xl">{dark ? <FiSun /> : <FiMoon />}</button>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="md:hidden text-2xl">{open ? <FiX /> : <FiMenu />}</button>
        </div>
      </nav>
      {open && (
        <ul className="md:hidden px-5 pb-4 flex flex-col gap-3 capitalize">
          {links.map((l) => (
            <li key={l}><a href={`#${l}`} onClick={() => setOpen(false)}>{l}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
