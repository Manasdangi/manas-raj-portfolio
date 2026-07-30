import "./style.css";
import heroImage from "./assets/hero.png";

const experienceItems = [
  {
    company: "Spinny",
    location: "Gurgaon",
    role: "SDE-II",
    period: "Jan 2025 - Present",
    highlights: [
      "Developed the Spinny Pro desktop website independently, enabling seamless service booking and management and increasing overall user visits by 8-9%.",
      "Built the Adhoc Approval Flow in Spinny Care, enabling technicians to send car-parts issue approvals through the app and reducing turnaround time and manual intervention by 20-25%.",
      "Constructed the Spinny Care payment checkout, reducing cash transactions while enabling fully digital record-keeping and refund processes.",
      "Built an intuitive, SEO-optimized Car Service Cost Calculator that estimates service charges by vehicle type and ranks on the first page of Google search.",
      "Integrated and enhanced the shared Design System for the Spinny Consumer platform, contributing reusable components and standardized UI patterns to reduce development effort and improve consistency.",
      "Developed the refurbishment Catalogue Page from scratch with TanStack Query, improving page-load speed, API performance, and usability for spare-parts discovery.",
      "Developed the Spinny Consumer Sell Homepage from scratch with a simpler, more intuitive journey, increasing lead conversion rates by 10%.",
      "Optimized the React codebase with memoization, dynamic imports, and virtualization, improving CLS, FPS, LCP, page performance, and load speed by 20-30%.",
      "Integrated WebViews in the Spinny app and resolved navigation-related issues to create smoother cross-platform journeys.",
    ],
  },
  {
    company: "Airtel",
    location: "Gurgaon",
    role: "Software Engineer",
    period: "Oct 2023 - Jan 2025",
    highlights: [
      "Developed Airtel UPI onboarding, improving success rate by 2%, and created health callouts for unavailable banks that delivered an additional 1.5% lift.",
      "Built backend-driven widgets for APB Wallet and saved-card payment modes with card encryption and MPIN validation, helping the wallet achieve an almost 100% transaction success rate.",
      "Implemented SIM-binding checks for APB Wallet transactions, reducing fraud, strengthening account security, and improving success rate by 1%.",
      "Architected a scalable React Native payment checkout flow for 3 million monthly active users, covering the full range of transaction edge cases.",
      "Developed Airtel UPI payments in Airtel's web repository with seamless VPA handling and intent/callback integration, improving reliability across platforms.",
    ],
  },
];

const projects = [
  {
    name: "Interview Buddy",
    stack: "React, TypeScript, Vite, Zustand, Express, Gemini, Firebase",
    period: "Jun 2026 - Present",
    summary:
      "A full-stack AI interview simulator for realistic frontend practice, with adaptive questioning, voice interaction, persistent history, and detailed performance feedback.",
    points: [
      "Built Round 1, Round 2, and System Design interview modes with beginner, intermediate, and advanced difficulty levels plus five rotating daily question sets.",
      "Designed a Gemini-powered interviewer that asks one question at a time and adapts follow-ups using structured state for answer quality, strengths, weak areas, covered topics, and difficulty trends.",
      "Added microphone dictation and live voice answers with Gemini audio transcription, browser text-to-speech replies, an interview timer, and navigation guards that protect active sessions.",
      "Generated scorecards across technical ability, communication, problem-solving, and depth, with personalized feedback and recommended topics; persisted authenticated history through Google sign-in and Firestore-backed APIs.",
    ],
  },
  {
    name: "TalentLens",
    stack: "React, Vite, TypeScript, Firebase, Groq LLM",
    period: "Dec 2025 - Present",
    link: "https://talentlens-gamma.vercel.app/",
    summary:
      "An AI-powered hiring platform for both candidates and recruiters, focused on resume scoring, job matching, and application tracking.",
    points: [
      "Built a resume scoring workflow where candidates upload resumes, choose role and experience level, add a job description, and receive AI scoring with summaries, strengths, improvements, and keyword match or miss analysis.",
      "Allowed candidates to save up to four role-specific resumes and apply to openings with the best-matched resume in one click.",
      "Designed a recruiter dashboard to post jobs, review applicants, and rank candidates using AI on top of resume data stored in Firestore.",
      "Implemented job recommendations, compatibility scoring, OAuth-based application tracking, and a modular TypeScript architecture with clear separation of UI, services, and state.",
    ],
  },
  {
    name: "Multiplayer Chess Platform",
    stack: "React, Socket.IO, Firebase, JavaScript",
    period: "Personal Project",
    link: "https://chess-gamma-five.vercel.app/",
    summary:
      "A real-time multiplayer chess experience where players can create rooms, join friends, manage profiles, and review match history.",
    points: [
      "Built private room creation and join flows so users can easily start live matches with friends.",
      "Implemented real-time gameplay using Socket.IO along with backend support for live game state synchronization.",
      "Wrote the core move logic for chess pieces from scratch, including queen, rook, bishop, knight, and pawn movement handling.",
      "Designed the chessboard UI myself and later revisited the product to improve login plus create and join room flows.",
    ],
  },
  {
    name: "Pulse Fit Gym",
    stack: "Next.js",
    period: "2 days",
    link: "https://gym-landing-page-next-js.vercel.app/",
    summary: "A minimalist gym landing page.",
    points: [
      "Developed a clean and responsive gym landing page using Next.js.",
      "Focused on minimalist design to highlight gym services and features.",
    ],
  },
];

const skills = {
  languages: ["HTML", "CSS", "JavaScript", "TypeScript"],
  frontend: [
    "React",
    "React Native",
    "Vite",
    "Redux",
    "Webpack",
    "GraphQL",
    "SSR",
    "Socket.IO",
    "WebView",
    "REST API",
  ],
  engineering: [
    "Component-driven Architecture",
    "Chrome DevTools",
    "Performance Profiling",
    "Accessibility",
    "Design Systems",
    "Core Web Vitals",
  ],
  core: [
    "Data Structures",
    "Algorithms",
    "OOPs",
    "Debugging",
    "Git",
    "Jira",
    "Agile",
    "Bitbucket",
    "Lighthouse",
  ],
};

const heroSkillOrbits = [
  [
    ...skills.engineering,
    "Data Structures",
    "JavaScript",
    "TypeScript",
    "React Native",
  ],
  [
    "Socket.IO",
    "REST API",
    "Algorithms",
    "Debugging",
    "Bitbucket",
    "Lighthouse",
    "Webpack",
    "GraphQL",
  ],
  ["React", "Vite", "Redux", "WebView", "Jira", "Agile"],
  ["HTML", "CSS", "SSR", "OOPs", "Git"],
];

const skillGroupLabels = {
  languages: "Languages",
  frontend: "Web development",
  engineering: "Engineering practices",
  core: "Other skills",
};

const navItems = [
  ["top", "Mission"],
  ["numbers", "Numbers"],
  ["contact", "Contacts"],
  ["experience", "Journey"],
  ["projects", "Products"],
  ["skills", "Stack"],
];

const metrics = [
  { value: "9%", target: 9, suffix: "%", label: "Spinny Pro user visit growth" },
  { value: "25%", target: 25, suffix: "%", label: "Approval turnaround reduction" },
  { value: "10%", target: 10, suffix: "%", label: "Sell homepage lead conversion lift" },
  { value: "30%", target: 30, suffix: "%", label: "Peak page performance gain" },
];

const motionPhrases = [
  "React Systems",
  "AI Workflows",
  "Payment UX",
  "Web Vitals",
  "0 to 1 Builds",
  "Mobile WebViews",
  "Design Systems",
  "Production Ownership",
];

const contactLinks = [
  ["Email", "mailto:manasraj9669@gmail.com", "manasraj9669@gmail.com"],
  ["Phone", "tel:+919128826817", "9128826817"],
  ["LinkedIn", "https://www.linkedin.com/in/manas-raj-mnit/", "/in/manas-raj-mnit"],
  ["GitHub", "https://github.com/Manasdangi", "/Manasdangi"],
];

const viewerCountKey = "portfolio-viewer-count";
const baseViewerCount = 0;

const getViewerCount = () => {
  try {
    const storedCount = Number(window.localStorage.getItem(viewerCountKey));
    const safeCount =
      Number.isFinite(storedCount) && storedCount > 0
        ? storedCount
        : baseViewerCount;
    const nextCount = safeCount + 1;
    window.localStorage.setItem(viewerCountKey, String(nextCount));
    return nextCount;
  } catch {
    return baseViewerCount;
  }
};

const formatViewerCount = (count) =>
  new Intl.NumberFormat("en-US").format(count);

const renderList = (items) => items.map((item) => `<li>${item}</li>`).join("");

const renderSkillOrbit = (items, orbitIndex) => {
  const duration = [38, 32, 27, 23][orbitIndex];
  const satellites = items
    .map((skill, skillIndex) => {
      const delay = -((duration * skillIndex) / items.length).toFixed(2);

      return `
        <span class="skill-satellite" style="--orbit-duration: ${duration}s; --skill-delay: ${delay}s">
          <span class="skill-label">${skill}</span>
        </span>
      `;
    })
    .join("");

  return `
    <div class="skill-orbit skill-orbit-${orbitIndex + 1}">${satellites}</div>
  `;
};

document.querySelector("#app").innerHTML = `
  <div class="scroll-progress" id="scroll-progress" aria-hidden="true"></div>
  <div class="ambient-grid" aria-hidden="true"></div>
  <div class="page-shell">
    <nav class="topbar" aria-label="Primary">
      <a class="brand" href="#top" aria-label="Manas Raj home">
        <span class="brand-mark">MR</span>
        <span>
          <span class="brand-name">Manas Raj</span>
          <span class="brand-role">Software Engineer</span>
        </span>
      </a>
      <div class="topbar-right">
        <div class="viewer-count" aria-label="Viewer count">
          <span class="viewer-count-label">Viewed by</span>
          <strong id="viewer-count-value">0 users viewed</strong>
        </div>
        <div class="topbar-links">
          ${navItems.map(([id, label]) => `<a href="#${id}" data-nav="${id}">${label}</a>`).join("")}
        </div>
      </div>
    </nav>

    <header class="hero" id="top">
      <div class="hero-orbits" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="hero-grid">
        <section class="hero-copy reveal">
          <p class="eyebrow">Frontend & Product Engineering</p>
          <h1 class="hero-title">I build fast product experiences that feel calm, sharp, and reliable at scale.</h1>
          <p class="summary">
            SDE-II with hands-on product ownership across Spinny and Airtel. I turn ambiguous product problems into high-performance interfaces, resilient flows, and measurable user impact.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="mailto:manasraj9669@gmail.com">Contact Me</a>
            <a class="button button-secondary" href="#projects">View Work</a>
            <a class="button button-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </div>
        </section>

        <aside class="hero-visual reveal" aria-label="Profile snapshot">
          <div class="portrait-stage magnetic-card">
            <div class="kinetic-ribbon" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <img src="${heroImage}" alt="Layered product interface illustration" />
            <div class="skill-cloud" aria-hidden="true">
              <p class="skill-cloud-title">Skills</p>
              ${heroSkillOrbits.map(renderSkillOrbit).join("")}
            </div>
          </div>
          <div class="hero-status">
            <span class="availability-dot"></span>
            Open to strong product engineering opportunities
          </div>
        </aside>
      </div>

      <div class="metric-grid reveal" id="numbers" aria-label="Highlighted outcomes">
        ${metrics
          .map(
            ({ value, target, prefix = "", suffix = "", label }) => `
              <article class="metric-card magnetic-card">
                <strong class="count-up" data-target="${target}" data-prefix="${prefix}" data-suffix="${suffix}">${value}</strong>
                <span>${label}</span>
              </article>
            `,
          )
          .join("")}
      </div>

      <div class="capability-marquee reveal" aria-label="Engineering focus areas">
        <div>
          ${[...motionPhrases, ...motionPhrases]
            .map((phrase) => `<span>${phrase}</span>`)
            .join("")}
        </div>
      </div>
    </header>

    <main>
      <section class="contact-band reveal" id="contact" aria-label="Contact details">
        <div>
          <p class="section-kicker">Contact</p>
          <h2>Let us build something crisp.</h2>
        </div>
        <div class="contact-list">
          ${contactLinks
            .map(
              ([label, href, text]) => `
                <a href="${href}" ${href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>
                  <span>${label}</span>
                  <strong>${text}</strong>
                </a>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="section section-intro reveal" id="profile">
        <div class="section-heading">
          <p class="section-kicker">Profile</p>
          <h2>What I bring to engineering teams</h2>
        </div>
        <div class="intro-grid">
          <article class="info-card magnetic-card">
            <span class="card-index">01</span>
            <h3>User-first engineering</h3>
            <p>I build product flows that balance speed, reliability, and clarity for real users.</p>
          </article>
          <article class="info-card magnetic-card">
            <span class="card-index">02</span>
            <h3>Performance mindset</h3>
            <p>I enjoy profiling, removing render waste, and improving Core Web Vitals where they matter.</p>
          </article>
          <article class="info-card magnetic-card">
            <span class="card-index">03</span>
            <h3>Ownership</h3>
            <p>I am comfortable taking features from idea to production and iterating based on outcomes.</p>
          </article>
        </div>
      </section>

      <section class="section reveal" id="experience">
        <div class="section-heading">
          <p class="section-kicker">Experience</p>
          <h2>Professional journey</h2>
        </div>
        <div class="timeline">
          ${experienceItems
            .map(
              (item) => `
                <article class="timeline-item magnetic-card">
                  <div class="timeline-meta">
                    <p class="timeline-company">${item.company}</p>
                    <p>${item.role}</p>
                    <p>${item.location}</p>
                    <p>${item.period}</p>
                  </div>
                  <div class="timeline-content">
                    <h3>${item.role} at ${item.company}</h3>
                    <ul class="detail-list">${renderList(item.highlights)}</ul>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="section reveal" id="projects">
        <div class="section-heading section-heading-row">
          <div>
            <p class="section-kicker">Projects</p>
            <h2>Selected work</h2>
          </div>
          <p class="section-note">Live products, AI workflows, real-time systems, and focused UI builds.</p>
        </div>
        <div class="project-grid">
          ${projects
            .map(
              (project, index) => `
                <article class="project-card magnetic-card">
                  <div class="project-visual" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div class="project-topline">
                    <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
                    <span>${project.period}</span>
                  </div>
                  <h3>${project.name}</h3>
                  <p class="project-stack">${project.stack}</p>
                  <p class="project-summary">${project.summary}</p>
                  ${project.link ? `<a class="project-link" href="${project.link}" target="_blank" rel="noreferrer">Live Project</a>` : ""}
                  <ul class="detail-list">${renderList(project.points)}</ul>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="section reveal" id="skills">
        <div class="section-heading">
          <p class="section-kicker">Skills</p>
          <h2>Tools and strengths</h2>
        </div>
        <div class="skills-grid">
          ${Object.entries(skills)
            .map(
              ([group, values]) => `
                <article class="skill-card magnetic-card">
                  <h3>${skillGroupLabels[group]}</h3>
                  <div class="chip-row">${values.map((skill) => `<span class="chip">${skill}</span>`).join("")}</div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="section reveal" id="education">
        <div class="section-heading">
          <p class="section-kicker">Education</p>
          <h2>Academic background</h2>
        </div>
        <div class="education-grid">
          <article class="education-card magnetic-card">
            <div class="education-topline">
              <h3>MNIT Jaipur, Rajasthan</h3>
              <span>Aug 2019 - May 2023</span>
            </div>
            <p>Bachelor of Technology, Electrical Engineering</p>
            <p>CGPA: 7.75 / 10</p>
          </article>
          <article class="education-card magnetic-card">
            <div class="education-topline">
              <h3>KN Memo Academy, Asarganj, Munger</h3>
              <span>Apr 2017 - Mar 2019</span>
            </div>
            <p>CBSE Intermediate (PCM)</p>
            <p>Score: 90.4%</p>
          </article>
          <article class="education-card magnetic-card">
            <div class="education-topline">
              <h3>School Education</h3>
              <span>Class 10</span>
            </div>
            <p>CBSE Secondary Education</p>
            <p>CGPA: 10 / 10</p>
          </article>
        </div>
      </section>

    </main>
  </div>
  <button class="scroll-top" id="scroll-top" type="button" aria-label="Move to top">Top</button>
`;

const viewerCountValue = document.querySelector("#viewer-count-value");
const scrollTopButton = document.querySelector("#scroll-top");
const scrollProgress = document.querySelector("#scroll-progress");
const heroTitle = document.querySelector(".hero-title");
const navLinks = Array.from(document.querySelectorAll("[data-nav]"));
const sections = navLinks
  .map((link) => document.getElementById(link.dataset.nav))
  .filter(Boolean);
const revealElements = document.querySelectorAll(".reveal");
const magneticCards = document.querySelectorAll(".magnetic-card");
const countUpElements = document.querySelectorAll(".count-up");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (heroTitle && !reduceMotion) {
  heroTitle.innerHTML = heroTitle.textContent
    .split(" ")
    .map((word, index) => `<span style="--word-index:${index}">${word}</span>`)
    .join(" ");
}

if (viewerCountValue) {
  const viewerCount = getViewerCount();
  const label = viewerCount === 1 ? "user viewed" : "users viewed";
  viewerCountValue.textContent = `${formatViewerCount(viewerCount)} ${label}`;
}

const updateScrollState = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;

  if (scrollProgress) {
    scrollProgress.style.transform = `scaleX(${progress})`;
  }

  scrollTopButton?.classList.toggle("is-visible", window.scrollY > 320);
};

const setActiveNav = () => {
  let activeId = sections[0]?.id;

  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= window.innerHeight * 0.34) {
      activeId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.nav === activeId);
  });
};

const animateCount = (element) => {
  if (element.dataset.counted === "true") return;

  element.dataset.counted = "true";

  const target = Number(element.dataset.target);
  const prefix = element.dataset.prefix || "";
  const suffix = element.dataset.suffix || "";

  if (!Number.isFinite(target) || reduceMotion) {
    element.textContent = `${prefix}${target}${suffix}`;
    return;
  }

  const duration = 1150;
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    const value = Math.round(eased * target);
    element.textContent = `${prefix}${value}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
};

updateScrollState();
setActiveNav();

window.addEventListener(
  "scroll",
  () => {
    updateScrollState();
    setActiveNav();
  },
  { passive: true },
);

scrollTopButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          entry.target
            .querySelectorAll?.(".count-up")
            .forEach((element) => animateCount(element));
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -60px" },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
  countUpElements.forEach((element) => animateCount(element));
}

if (!reduceMotion) {
  window.addEventListener(
    "pointermove",
    (event) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    },
    { passive: true },
  );

  magneticCards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const rotateX = ((y / bounds.height) - 0.5) * -5;
      const rotateY = ((x / bounds.width) - 0.5) * 5;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}
