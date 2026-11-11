// Edit everything about your portfolio here.
export const me = {
  name: "Mayur Patil",
  roles: ["Full Stack Developer", "MERN Developer", "React Developer"],
  tagline: "I build fast, responsive web apps with React, Node.js, Express and MongoDB.",
  about:
    "I am a fresher full stack developer from Mumbai with a Bachelor of Computer Science and a Full Stack Web Development course at Alma Better. I build complete MERN apps with authentication, REST APIs and clean responsive UIs, and I am ready to join a team and start contributing right away.",
  location: "Mumbai, India",
  email: "mayurpatil4510@gmail.com", // TODO: add your email
  phone: "8421722841",
  linkedin: "https://www.linkedin.com/in/mayur-patil-0a14a541b",
  github: "https://github.com/patil-mayur45",
  photo: "/profile.jpg", // replace public/profile.jpg with your photo
  resume: "/resume.pdf", // put your resume in public/resume.pdf
};

export const stats = [
  ["3+", "Projects built"],
  ["MERN", "Core stack"],
  ["Now", "Ready to join"],
];

export const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React.js", "Redux", "Tailwind CSS", "Bootstrap"],
  Backend: ["Node.js", "Express.js", "REST API Design", "JWT Authentication"],
  Database: ["MongoDB", "MySQL"],
  Tools: ["Git", "GitHub", "Postman", "VS Code"],
};

export const projects = [
  {
    title: "MediCare+",
    desc: "Doctor appointment booking app where patients find doctors and book slots online.",
    tech: ["React", "Redux", "Tailwind", "Node", "Express", "MongoDB"],
    live: "https://medicare-web-eosin.vercel.app/",
    code: "https://github.com/patil-mayur45/medicare-web",
  },
  {
    title: "Invoice Generator",
    desc: "Create and download PDF invoices, with login and an analytics dashboard for sales.",
    tech: ["React", "Node", "Express", "MongoDB", "JWT", "PDF"],
    live: "https://invoice-generator-sage-theta.vercel.app/",
    code: "https://github.com/patil-mayur45/invoice-generator",
  },
  {
    title: "Real-Time Stock Trades Dashboard",
    desc: "Dashboard that opens instantly and updates by itself when new trades arrive, with no refresh or polling.",
    tech: ["MERN", "MongoDB Atlas", "Vercel", "Render"],
    live: "https://trades-dashboard.onrender.com", // TODO: use your frontend link
    code: "https://github.com/patil-mayur45", // TODO: use the repo link
  },
];

export const education = [
  ["Full Stack Web Development Course", "Alma Better", "06/2025 - 04/2026"],
  ["Bachelor of Computer Science", "Sonopant Dandeker Shikshan Mandali, Mumbai", "06/2022 - 05/2025"],
];

export const strengths = [
  ["Fast learner", "I pick up new tools quickly and ship working features."],
  ["Clean code", "Readable, reusable components and clear folder structure."],
  ["Problem solver", "I debug step by step and fix the root cause."],
  ["Team player", "I use Git and GitHub daily and communicate clearly."],
];
