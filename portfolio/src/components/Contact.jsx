import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiPhone, FiSend } from "react-icons/fi";
import Section from "./Section";
import { me } from "../data";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const send = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        form.current,
        import.meta.env.VITE_EMAILJS_KEY
      );
      setStatus("ok");
      form.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contact" title="Contact me">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-5">
          <p className="mut">Have a role or project in mind? Send a message and I will reply soon.</p>
          <a href={`mailto:${me.email}`} className="flex items-center gap-3 hover:text-cyan-400 transition"><FiMail /> {me.email}</a>
          <a href={`tel:+91${me.phone}`} className="flex items-center gap-3 hover:text-cyan-400 transition"><FiPhone /> {me.phone}</a>
          <div className="flex gap-5 text-2xl pt-2">
            <a href={me.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="ico"><FaLinkedinIn /></a>
            <a href={me.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="ico"><FaGithub /></a>
          </div>
        </div>
        <form ref={form} onSubmit={send} className="card p-6 space-y-4 hover:!transform-none">
          <input name="from_name" required minLength={2} placeholder="Your name" className="field" />
          <input name="reply_to" type="email" required placeholder="Your email" className="field" />
          <textarea name="message" required minLength={10} rows={5} placeholder="Your message" className="field" />
          <button disabled={status === "sending"} className="btn btn-p w-full justify-center disabled:opacity-60">
            <FiSend /> {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {status === "ok" && <p className="text-green-500 text-sm">Message sent. I will get back to you soon.</p>}
          {status === "error" && <p className="text-red-400 text-sm">Could not send. Check your EmailJS keys in .env or email me directly.</p>}
        </form>
      </div>
    </Section>
  );
}
