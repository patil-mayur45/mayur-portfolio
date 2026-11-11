<div align="center">

# Mayur Patil | Developer Portfolio

A fast, responsive portfolio website built with React, Vite and Tailwind CSS.

[**Live Website**](https://YOUR-PORTFOLIO-LINK.vercel.app) · [LinkedIn](https://www.linkedin.com/in/mayur-patil-0a14a541b) · [GitHub](https://github.com/patil-mayur45)

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)

</div>

---

## About

This is the personal portfolio of **Mayur Patil**, a fresher full stack (MERN) developer from Mumbai, India. It shows my skills, projects, education and contact details in one clean, fast page.

The site is frontend only. Full backend work (Node.js, Express, MongoDB, JWT) is shown in the projects linked below.

## Screenshot

> Add a screenshot of your site here: save it as `screenshot.png` in the project root, then use the line below.

```md
![Portfolio screenshot](./screenshot.png)
```

## Features

- Fully responsive layout (mobile, tablet, laptop, large screens)
- Dark and light theme toggle
- Typing animation in the hero section
- Smooth scroll, active nav link highlight and scroll progress bar
- Glass-style cards with hover animations
- Skills, projects, education timeline and "Why hire me" sections
- Resume download button
- Working contact form using EmailJS (no backend needed)
- "Open to work" badge and floating LinkedIn button
- SEO meta tags and keyboard-friendly, accessible markup
- All content kept in one file (`src/data.js`) for easy editing

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | React 18, Vite |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | React Icons |
| Contact form | EmailJS |
| Hosting | Vercel |

## Projects Featured

| Project | Stack | Links |
| --- | --- | --- |
| **MediCare+** (doctor appointment booking) | React, Redux, Tailwind, Node, Express, MongoDB | [Live](https://medicare-web-eosin.vercel.app/) · [Code](https://github.com/patil-mayur45/medicare-web) |
| **Invoice Generator** (PDF invoices and analytics) | React, Node, Express, MongoDB, JWT | [Live](https://invoice-generator-sage-theta.vercel.app/) · [Code](https://github.com/patil-mayur45/invoice-generator) |
| **Real-Time Stock Trades Dashboard** | MERN, MongoDB Atlas | See portfolio |

## Getting Started

### Requirements

- [Node.js](https://nodejs.org) (LTS version)
- Git

### Run locally

```bash
# 1. Clone the repository
git clone https://github.com/patil-mayur45/YOUR-REPO-NAME.git

# 2. Go into the folder
cd YOUR-REPO-NAME

# 3. Install packages
npm install

# 4. Start the development server
npm run dev
```

Open the link shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

## Contact Form Setup (EmailJS)

The contact form needs three values from a free [EmailJS](https://www.emailjs.com) account.

1. Add an email service (Gmail) and copy the **Service ID**.
2. Create an email template that uses the variables `{{from_name}}`, `{{reply_to}}` and `{{message}}`, and copy the **Template ID**.
3. Copy your **Public Key** from Account, then General.
4. Copy `.env.example` to a new file named `.env` and fill it in:

```env
VITE_EMAILJS_SERVICE=your_service_id
VITE_EMAILJS_TEMPLATE=your_template_id
VITE_EMAILJS_KEY=your_public_key
```

5. Restart the dev server after changing `.env`.

> `.env` is ignored by Git, so your keys are not uploaded to GitHub.

## Customize

| What | Where |
| --- | --- |
| Name, about text, email, links, photo path, resume path | `src/data.js` |
| Skills, projects, education, strengths | `src/data.js` |
| Profile photo | replace `public/profile.jpg` |
| Resume | add `public/resume.pdf` |
| Colors and effects | `src/index.css` |

## Project Structure

```
portfolio/
├── public/
│   ├── profile.jpg
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── WhyHireMe.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Section.jsx
│   ├── App.jsx
│   ├── data.js
│   ├── index.css
│   └── main.jsx
├── .env.example
├── index.html
├── package.json
└── vite.config.js
```

## Deployment (Vercel)

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), click **Add New Project** and import the repository.
3. Under **Environment Variables**, add `VITE_EMAILJS_SERVICE`, `VITE_EMAILJS_TEMPLATE` and `VITE_EMAILJS_KEY`.
4. Click **Deploy**. Every push to GitHub will redeploy the site automatically.

## Contact

**Mayur Patil** · Full Stack Web Developer · Mumbai, India

- Email: mayurpatil4510@gmail.com
- Phone: 8421722841
- LinkedIn: [mayur-patil](https://www.linkedin.com/in/mayur-patil-0a14a541b)
- GitHub: [patil-mayur45](https://github.com/patil-mayur45)

---

<div align="center">

If you like this project, please give it a star.

</div>
