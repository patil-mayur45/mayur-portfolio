import { motion } from "framer-motion";

export default function Section({ id, title, children }) {
  return (
    <motion.section id={id} className="max-w-6xl mx-auto px-5 py-20 scroll-mt-16"
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-10 grad inline-block">{title}</h2>
      {children}
    </motion.section>
  );
}
