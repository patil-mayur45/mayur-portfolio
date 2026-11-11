import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiDownload, FiMail } from "react-icons/fi";
import { me } from "../data";

function useTyping(words) {
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    const t = setTimeout(() => {
      if (!del && n < w.length) setN(n + 1);
      else if (!del) setDel(true);
      else if (n > 0) setN(n - 1);
      else { setDel(false); setI((i + 1) % words.length); }
    }, del ? 40 : n === w.length ? 1200 : 90);
    return () => clearTimeout(t);
  }, [n, del, i, words]);
  return words[i].slice(0, n);
}

export default function Hero() {
  const text = useTyping(me.roles);
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="blob absolute -top-20 -left-20 w-96 h-96 rounded-full bg-indigo-500/30 blur-3xl" />
      <div className="blob absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-400/20 blur-3xl" style={{ animationDelay: "-5s" }} />
      <div className="relative max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="order-2 md:order-1">
          <span className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full border border-green-500/40 text-green-500 mb-5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Open to work
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Hi, I'm <span className="grad">{me.name}</span></h1>
          <p className="text-2xl md:text-3xl mt-3 h-10 font-medium">{text}<span className="animate-pulse text-cyan-400">|</span></p>
          <p className="mut mt-4 max-w-md">{me.tagline}</p>
          <div className="flex flex-wrap gap-3 mt-7">
            <a href={me.resume} download className="btn btn-p"><FiDownload /> Download resume</a>
            <a href="#projects" className="btn btn-o">View projects</a>
            <a href="#contact" className="btn btn-o"><FiMail /> Hire me</a>
          </div>
          <div className="flex gap-5 mt-7 text-2xl">
            <a href={me.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="ico"><FaGithub /></a>
            <a href={me.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="ico"><FaLinkedinIn /></a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="order-1 md:order-2 flex justify-center">
          <div className="float p-1.5 rounded-full bg-gradient-to-tr from-indigo-500 via-cyan-400 to-indigo-500 shadow-[0_0_60px_#6366f188]">
            <img src={me.photo} alt="Mayur Patil" className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
