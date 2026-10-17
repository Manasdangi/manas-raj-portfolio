import "./style.css";

const EMAIL = "manasraj9669@gmail.com";
const PHONE = "+91 91288 26817";
const LINKEDIN = "https://www.linkedin.com/in/manas-raj-mnit/";
const GITHUB = "https://github.com/Manasdangi";
const RESUME = "/resume.pdf";
const CAREER_START = new Date(2023, 9, 1);

const yearsOfExperience = Math.floor(
  (Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 60 * 60 * 1000),
);

const icon = {
  arrow: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>`,
  download: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>`,
  copy: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h8"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true" class="fill"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.06c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.5 4.77 5.75V21h-4v-5.1c0-1.22-.02-2.78-1.8-2.78-1.8 0-2.08 1.33-2.08 2.7V21h-4V9.75Z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" aria-hidden="true" class="fill"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>`,
};

const experienceItems = [
  {
    company: "Spinny",
    role: "SDE-II",
    period: "Jan 2025 – Present",
    location: "Gurgaon",
    context: "India's full-stack used-car platform. Consumer web, Spinny Care, Spinny Pro and the React Native app.",
    stack: ["React", "React Native", "TypeScript", "TanStack Query", "Claude Code", "Bitbucket Pipelines"],
    highlights: [
      "Developed the <b>Spinny Consumer Sell Homepage</b> from scratch with a simpler journey, <b>lifting lead conversion by 10%</b>.",
      "Built the <b>Spinny Pro desktop website</b> independently for service booking and management, <b>growing user visits by 8–9%</b>.",
      "Optimized the React codebase with memoization, dynamic imports and virtualization, improving CLS, FPS and LCP for <b>20–30% faster page performance</b>.",
      "Built a scheduled <b>AI triage agent</b> with Claude Code and Bitbucket Pipelines that turns daily Sentry errors into enriched Jira bugs with root-cause analysis, <b>cutting 25 daily candidates to 2 actionable tickets</b>, with a one-command flow that drafts the fix and raises a PR.",
      "Built the <b>Adhoc Approval Flow</b> in Spinny Care so technicians send car-parts approvals in-app, <b>reducing turnaround and manual work by 20–25%</b>.",
      "Built an SEO-optimized <b>Car Service Cost Calculator</b> that <b>ranks on Google's first page</b>.",
      "Constructed the Spinny Care <b>payment checkout</b>, reducing cash transactions and enabling fully digital records and refunds.",
      "Developed the refurbishment <b>Catalogue Page</b> from scratch with TanStack Query, improving page-load speed, API performance and spare-parts discovery.",
      "Migrated the Spinny mobile app from <b>React Native 0.72 to 0.80</b> and enabled <b>16 KB Android page-size</b> support for newer platform requirements.",
      "Built a car inspection scheduling feature that streamlines booking and tracking for damaged or service-required vehicles.",
      "Contributed reusable components and standardized UI patterns to the shared <b>Spinny Design System</b>.",
      "Integrated WebView flows inside the mobile app and resolved navigation and cross-platform communication issues.",
    ],
  },
  {
    company: "Airtel",
    role: "Software Engineer",
    period: "Oct 2023 – Jan 2025",
    location: "Gurgaon",
    context: "Airtel Payments Bank. UPI, wallet and checkout flows used by millions every month.",
    stack: ["React Native", "React", "JavaScript", "Payments", "Design Systems"],
    highlights: [
      "Architected a scalable React Native <b>payment checkout for 3M monthly active users</b>, covering the full range of transaction edge cases.",
      "Built backend-driven widgets for APB Wallet and saved cards with card encryption and MPIN validation, helping the wallet reach <b>~100% transaction success</b>.",
      "Developed <b>Airtel UPI onboarding</b>, <b>improving success rate by 2%</b>, plus health callouts for unavailable banks for a further <b>1.5% lift</b>.",
      "Implemented <b>SIM-binding checks</b> for wallet transactions, reducing fraud and <b>improving success rate by 1%</b>.",
      "Developed UPI payments in Airtel's web repo with seamless VPA handling and intent/callback integration across platforms.",
      "Contributed to <b>air-widget-library</b> and <b>air-design-system</b>, Airtel's shared component architecture used across multiple products.",
    ],
  },
];

const VISIBLE_HIGHLIGHTS = 5;

const projects = [
  {
    name: "Interview Buddy",
    tagline: "AI interview simulator for frontend engineers",
    period: "2026",
    stack: ["React", "TypeScript", "Zustand", "Express", "Gemini", "Firebase"],
    summary:
      "Realistic frontend interview practice with an adaptive AI interviewer, live voice answers, persistent history and detailed scorecards.",
    points: [
      "Round 1, Round 2 and System Design modes across three difficulty levels with rotating daily question sets.",
      "Gemini-powered interviewer that adapts follow-ups using structured state: answer quality, weak areas, covered topics and difficulty trend.",
      "Voice answers with Gemini audio transcription, text-to-speech replies, a session timer and navigation guards.",
      "Scorecards across technical depth, communication and problem-solving; history persisted via Google sign-in and Firestore.",
    ],
  },
  {
    name: "TalentLens",
    tagline: "AI hiring platform for candidates and recruiters",
    period: "2025",
    link: "https://talentlens-gamma.vercel.app/",
    stack: ["React", "TypeScript", "Firebase", "Groq LLM"],
    summary:
      "Resume scoring, job matching and application tracking, with a recruiter dashboard that ranks applicants using AI.",
    points: [
      "AI resume scoring against a job description, with strengths, improvements and keyword match/miss analysis.",
      "Candidates save up to four role-specific resumes and apply with the best match in one click.",
      "Recruiter dashboard to post jobs, review applicants and rank candidates over Firestore-backed resume data.",
    ],
  },
  {
    name: "Multiplayer Chess",
    tagline: "Real-time chess with rooms and match history",
    period: "Personal",
    link: "https://chess-gamma-five.vercel.app/",
    stack: ["React", "Socket.IO", "Firebase"],
    summary:
      "Create a private room, invite a friend and play live, with profiles and a history of past matches.",
    points: [
      "Real-time gameplay and game-state sync over Socket.IO.",
      "Move logic for every piece written from scratch.",
      "Custom-designed board UI with reworked login and room flows.",
    ],
  },
  {
    name: "Pulse Fit Gym",
    tagline: "Minimal, responsive landing page",
    period: "Weekend build",
    link: "https://gym-landing-page-next-js.vercel.app/",
    stack: ["Next.js"],
    summary: "A clean, fast gym landing page built in two days with Next.js.",
    points: [],
  },
];

const skillGroups = [
  ["Languages", ["JavaScript", "TypeScript", "HTML", "CSS"]],
  ["Frontend & Mobile", ["React", "React Native", "Redux", "Zustand", "TanStack Query", "Next.js", "Vite", "Webpack", "SSR", "WebView"]],
  ["APIs & Real-time", ["REST", "GraphQL", "Socket.IO", "Firebase"]],
  ["Performance & Quality", ["Core Web Vitals", "Performance Profiling", "Lighthouse", "Chrome DevTools", "Accessibility", "Design Systems"]],
  ["Tools & Practices", ["Git", "Bitbucket", "Jira", "Agile", "Claude Code", "Data Structures & Algorithms", "OOP"]],
];

const metrics = [
  { value: "+10%", label: "Lead conversion", source: "Spinny Sell homepage" },
  { value: "20–30%", label: "Faster page performance", source: "React optimization, Spinny" },
  { value: "3M", label: "Monthly users on checkout", source: "Airtel payments" },
  { value: "25 → 2", label: "Daily errors to triage", source: "AI triage agent, Spinny" },
];

const navItems = [
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["education", "Education"],
  ["contact", "Contact"],
];

const chips = (items) => items.map((item) => `<li>${item}</li>`).join("");

const renderExperience = (item) => {
  const visible = item.highlights.slice(0, VISIBLE_HIGHLIGHTS);
  const hidden = item.highlights.slice(VISIBLE_HIGHLIGHTS);

  return `
    <article class="job reveal">
      <header class="job-head">
        <div>
          <h3>${item.role} <span class="at">at</span> ${item.company}</h3>
          <p class="job-context">${item.context}</p>
        </div>
        <div class="job-meta">
          <span>${item.period}</span>
          <span>${item.location}</span>
        </div>
      </header>
      <ul class="bullets">${visible.map((h) => `<li>${h}</li>`).join("")}</ul>
      ${
        hidden.length
          ? `<details class="more">
              <summary><span class="more-closed">Show ${hidden.length} more</span><span class="more-open">Show less</span></summary>
              <ul class="bullets">${hidden.map((h) => `<li>${h}</li>`).join("")}</ul>
            </details>`
          : ""
      }
      <ul class="tags" aria-label="Tech used">${chips(item.stack)}</ul>
    </article>
  `;
};

const renderProject = (project, index) => `
  <article class="project reveal${index < 2 ? " project-featured" : ""}">
    <div class="project-head">
      <span class="project-period">${project.period}</span>
      ${
        project.link
          ? `<a class="project-link" href="${project.link}" target="_blank" rel="noreferrer" aria-label="Open ${project.name} live demo">Live ${icon.arrow}</a>`
          : `<span class="project-link is-muted">In progress</span>`
      }
    </div>
    <h3>${project.name}</h3>
    <p class="project-tagline">${project.tagline}</p>
    <p class="project-summary">${project.summary}</p>
    ${project.points.length ? `<ul class="bullets bullets-compact">${project.points.map((p) => `<li>${p}</li>`).join("")}</ul>` : ""}
    <ul class="tags" aria-label="Tech used">${chips(project.stack)}</ul>
  </article>
`;

document.querySelector("#app").innerHTML = `
  <a class="skip-link" href="#main">Skip to content</a>

  <nav class="nav" aria-label="Primary">
    <div class="container nav-inner">
      <a class="brand" href="#top" aria-label="Manas Raj, back to top">
        <span class="brand-mark">MR</span>
        <span class="brand-name">Manas Raj</span>
      </a>
      <div class="nav-links">
        ${navItems.map(([id, label]) => `<a href="#${id}" data-nav="${id}">${label}</a>`).join("")}
      </div>
      <a class="btn btn-small btn-primary" href="${RESUME}" target="_blank" rel="noreferrer">${icon.download}Resume</a>
    </div>
  </nav>

  <header class="hero container" id="top">
    <div class="hero-copy">
      <p class="status-pill"><span class="dot"></span>Open to SDE-II / Senior Frontend roles</p>
      <h1>
        Manas Raj
        <span class="hero-role">Frontend Engineer · React &amp; React Native</span>
      </h1>
      <p class="hero-summary">
        My core expertise includes <b>React</b>, <b>JavaScript</b>, <b>TypeScript</b>, <b>React Native</b>,
        <b>Redux</b>, and modern frontend architecture. At <b>Spinny</b>, I’ve owned and shipped products
        end-to-end across payments, service booking, SEO, design systems, and consumer-facing experiences.
        I’ve also worked extensively on frontend performance, including reducing unnecessary re-renders,
        code splitting, lazy loading, virtualization, and Core Web Vitals optimization.
      </p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="${RESUME}" target="_blank" rel="noreferrer">${icon.download}Download resume</a>
        <a class="btn btn-secondary" href="mailto:${EMAIL}">${icon.mail}Email me</a>
        <a class="btn btn-icon" href="${LINKEDIN}" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">${icon.linkedin}</a>
        <a class="btn btn-icon" href="${GITHUB}" target="_blank" rel="noreferrer" aria-label="GitHub profile">${icon.github}</a>
      </div>
    </div>

    <aside class="snapshot" aria-label="Quick profile">
      <p class="snapshot-title">At a glance</p>
      <dl>
        <div><dt>Current</dt><dd>SDE-II, Spinny <span>Jan 2025 – now</span></dd></div>
        <div><dt>Previous</dt><dd>Software Engineer, Airtel <span>Oct 2023 – Jan 2025</span></dd></div>
        <div><dt>Experience</dt><dd>${yearsOfExperience}+ years, frontend &amp; mobile</dd></div>
        <div><dt>Location</dt><dd>Gurgaon, India</dd></div>
        <div><dt>Education</dt><dd>B.Tech, MNIT Jaipur <span>2023</span></dd></div>
      </dl>
      <ul class="tags tags-strong" aria-label="Core stack">${chips(["React", "React Native", "TypeScript", "JavaScript", "Redux", "Web Performance"])}</ul>
      <button class="copy-email" type="button" data-copy="${EMAIL}">
        <span class="copy-text">${EMAIL}</span>
        <span class="copy-action">${icon.copy}<span data-copy-label>Copy</span></span>
      </button>
    </aside>
  </header>

  <main id="main">
    <section class="container metrics" aria-label="Impact highlights">
      ${metrics
        .map(
          (m) => `
            <div class="metric reveal">
              <strong>${m.value}</strong>
              <span class="metric-label">${m.label}</span>
              <span class="metric-source">${m.source}</span>
            </div>
          `,
        )
        .join("")}
    </section>

    <section class="container section" id="experience">
      <div class="section-head">
        <p class="kicker">Experience</p>
        <h2>Where I've shipped</h2>
      </div>
      <div class="jobs">${experienceItems.map(renderExperience).join("")}</div>
    </section>

    <section class="container section" id="projects">
      <div class="section-head">
        <p class="kicker">Projects</p>
        <h2>Things I've built on my own</h2>
      </div>
      <div class="projects">${projects.map(renderProject).join("")}</div>
    </section>

    <section class="container section" id="skills">
      <div class="section-head">
        <p class="kicker">Skills</p>
      </div>
      <div class="skills reveal">
        ${skillGroups
          .map(
            ([group, items]) => `
              <div class="skill-row">
                <h3>${group}</h3>
                <ul class="tags">${chips(items)}</ul>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="container section" id="education">
      <div class="section-head">
        <p class="kicker">Education</p>
        <h2>Academics</h2>
      </div>
      <div class="edu reveal">
        <div class="edu-main">
          <h3>Malaviya National Institute of Technology (MNIT), Jaipur</h3>
          <p>B.Tech, Electrical Engineering · CGPA 7.75 / 10</p>
          <span>2019 – 2023</span>
        </div>
        <div class="edu-side">
          <p><b>Class XII (CBSE, PCM)</b> 90.4%</p>
          <p><b>Class X (CBSE)</b> CGPA 10 / 10</p>
        </div>
      </div>
    </section>

    <section class="container contact reveal" id="contact">
      <div>
        <p class="kicker">Contact</p>
        <h2>Hiring for a frontend or React Native role?</h2>
        <p class="contact-sub">I usually reply within a day. Email is the fastest way to reach me.</p>
      </div>
      <div class="contact-grid">
        <a class="contact-card" href="mailto:${EMAIL}">${icon.mail}<span>Email</span><strong>${EMAIL}</strong></a>
        <a class="contact-card" href="tel:${PHONE.replace(/\s/g, "")}">${icon.phone}<span>Phone</span><strong>${PHONE}</strong></a>
        <a class="contact-card" href="${LINKEDIN}" target="_blank" rel="noreferrer">${icon.linkedin}<span>LinkedIn</span><strong>/in/manas-raj-mnit</strong></a>
        <a class="contact-card" href="${GITHUB}" target="_blank" rel="noreferrer">${icon.github}<span>GitHub</span><strong>/Manasdangi</strong></a>
      </div>
    </section>
  </main>

  <footer class="container footer">
    <span>© ${new Date().getFullYear()} Manas Raj</span>
    <span class="footer-loc">${icon.pin}Gurgaon, India</span>
  </footer>
`;

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Active nav link
const navLinks = Array.from(document.querySelectorAll("[data-nav]"));
const sections = navLinks.map((link) => document.getElementById(link.dataset.nav)).filter(Boolean);

const setActiveNav = () => {
  let activeId = null;
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= window.innerHeight * 0.35) activeId = section.id;
  });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
    activeId = sections.at(-1)?.id;
  }
  navLinks.forEach((link) => link.classList.toggle("is-active", link.dataset.nav === activeId));
  document.querySelector(".nav")?.classList.toggle("is-scrolled", window.scrollY > 8);
};

setActiveNav();
window.addEventListener("scroll", setActiveNav, { passive: true });

// Reveal on scroll
const revealElements = document.querySelectorAll(".reveal");

if (!reduceMotion && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px" },
  );
  revealElements.forEach((el) => observer.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add("is-visible"));
}

// Print the full resume content, including collapsed highlights
window.addEventListener("beforeprint", () => {
  document.querySelectorAll("details.more").forEach((d) => (d.open = true));
});

// Copy email
document.querySelectorAll("[data-copy]").forEach((button) => {
  const label = button.querySelector("[data-copy-label]");

  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      label.textContent = "Copied";
    } catch {
      window.location.href = `mailto:${button.dataset.copy}`;
      return;
    }
    button.classList.add("is-copied");
    setTimeout(() => {
      label.textContent = "Copy";
      button.classList.remove("is-copied");
    }, 1800);
  });
});
