import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import WhyHireMe from "./components/WhyHireMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { me } from "./data";

export default function App() {
  const [dark, setDark] = useState(true);
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  return (
    <>
      <motion.div style={{ scaleX: bar }} className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-indigo-500 to-cyan-400 z-[60]" />
      <Navbar dark={dark} toggle={() => setDark(!dark)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <WhyHireMe />
        <Contact />
      </main>
      <Footer />
      <a href={me.linkedin} target="_blank" rel="noreferrer" aria-label="Chat on LinkedIn"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-indigo-500 text-white grid place-items-center shadow-lg hover:scale-110 hover:shadow-indigo-500/50 transition">
        <FaLinkedinIn />
      </a>
    </>
  );
}
