import './style.css'

const experienceItems = [
  {
    company: 'Spinny',
    location: 'Gurugram, Haryana',
    role: 'Software Engineer',
    period: 'Jan 2025 - Present',
    highlights: [
      'Developed the Spinny Care desktop website single-handedly, enabling seamless service booking and management and increasing traffic by 10%.',
      'Built the Adhoc Approval Flow in Spinny Care so technicians could send car-parts issue approvals to users through the app, cutting turnaround time by 50% and reducing manual intervention.',
      'Constructed payment checkout for the Spinny Care website, reducing cash transactions and enabling complete digital record-keeping and refund processes.',
      'Built an SEO-optimized Car Service Cost Calculator that improved transparency and discoverability and ranked on the first page of Google search.',
      'Created the Help & Support journey for Spinny Care with query and sub-query selection, improving issue segregation and reducing resolution TAT.',
      'Developed the Catalogue Page from scratch for refurbishment spare-parts availability using TanStack Query, improving load performance, API response time, and usability.',
      'Improved Web Vitals and overall frontend performance through React optimization, memoization, dynamic imports, virtualization, and hands-on work with SSR, Webpack, and caching strategies.',
      'Contributed to CI/CD and production deployment workflows while building scalable features with stronger system-design awareness.',
      'Built key refurbishment dashboard modules including address change, slot change, and workshop change flows for workshop-level operations.',
      'Transitioned into the Spinny app team and contributed to end-to-end app release processes, React Native upgrades from 0.73 to 0.80, and smoother WebView-based user experiences.',
    ],
  },
  {
    company: 'Airtel Digital',
    location: 'Gurugram, Haryana',
    role: 'Software Engineer',
    period: 'Oct 2023 - Jan 2025',
    highlights: [
      'Worked on the Thanks App checkout team across full checkout, pre-checkout, and quick-checkout flows, continuously shipping features to improve user experience.',
      'Built backend-driven widgets for APB wallet and saved-card payment modes, including encryption for card transactions and better checkout security.',
      'Improved Airtel UPI onboarding success rate by 2% and added health callouts for down banks, delivering an additional 1.5% success-rate lift.',
      'Developed a new quick checkout flow for React Native and iOS, increasing success rate by 2% and improving checkout reliability.',
      'Resolved a large volume of SWAT bugs, cleaned up UI inconsistencies, and supported SANITY testing for major releases.',
      'Analyzed clickstream data to identify onboarding and transaction analytics gaps and refine success-rate calculations on Growth Book.',
      'Architected a scalable, high-performance checkout flow for millions of monthly users and migrated the full checkout page from native iOS to React Native using backend-driven widgets and SOLID principles.',
      'Implemented an order-creation and polling flow for broadband recharge journeys, reducing order-service API calls by 3x to 4x and lowering database load.',
      'Integrated SIM binding checks for APB wallet transactions, reducing wallet fraud and improving account security.',
    ],
  },
  {
    company: 'Niyo Solutions Inc.',
    location: 'Bangalore Urban, Karnataka',
    role: 'Software Developer Intern',
    period: 'Jun 2022 - Dec 2022',
    highlights: [
      'Enhanced internal search and support tooling by fixing bugs and shipping new workflow improvements.',
      'Built features to display customer live photo, liveness score, and face match score by integrating backend APIs with AWS S3-backed data.',
      'Optimized the biometric KYC enable and disable flow by reducing three backend calls to one, saving about 600 ms and making the process roughly 300% faster.',
      'Added KYC mode and status details on customer profile pages, improving support efficiency and customer experience.',
      'Worked on PAN Verification API and Wealth API migrations, helping strengthen onboarding and account creation flows.',
    ],
  },
]

const projects = [
  {
    name: 'TalentLens',
    stack: 'React, Vite, TypeScript, Firebase, Groq LLM',
    period: 'Dec 2025 - Present',
    link: 'https://talentlens-gamma.vercel.app/',
    summary:
      'An AI-powered hiring platform for both candidates and recruiters, focused on resume scoring, job matching, and application tracking.',
    points: [
      'Built a resume scoring workflow where candidates upload resumes, choose role and experience level, add a job description, and receive AI scoring with summaries, strengths, improvements, and keyword match or miss analysis.',
      'Allowed candidates to save up to four role-specific resumes and apply to openings with the best-matched resume in one click.',
      'Designed a recruiter dashboard to post jobs, review applicants, and rank candidates using AI on top of resume data stored in Firestore.',
      'Implemented job recommendations, compatibility scoring, OAuth-based application tracking, and a modular TypeScript architecture with clear separation of UI, services, and state.',
    ],
  },
  {
    name: 'Multiplayer Chess Platform',
    stack: 'React, Socket.IO, Firebase, JavaScript',
    period: 'Personal Project',
    link: 'https://chess-gamma-five.vercel.app/',
    summary:
      'A real-time multiplayer chess experience where players can create rooms, join friends, manage profiles, and review match history.',
    points: [
      'Built private room creation and join flows so users can easily start live matches with friends.',
      'Implemented real-time gameplay using Socket.IO along with backend support for live game state synchronization.',
      'Wrote the core move logic for chess pieces from scratch, including queen, rook, bishop, knight, and pawn movement handling.',
      'Designed the chessboard UI myself and later revisited the product to improve login plus create and join room flows.',
    ],
  },
]

const skills = {
  languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Basic C++'],
  frontend: ['React', 'Vite', 'Redux', 'Webpack', 'GraphQL', 'SSR', 'Socket.IO', 'Webview'],
  engineering: ['Performance Profiling', 'Component-driven Architecture', 'Chrome DevTools', 'Debugging', 'Git', 'Agile'],
  core: ['Data Structures', 'Algorithms', 'OOPs', 'Ownership', 'Collaboration'],
}

document.querySelector('#app').innerHTML = `
  <div class="page-shell">
    <nav class="topbar" aria-label="Primary">
      <div class="brand">
        <span class="brand-mark">MR</span>
        <span class="brand-name">Manas Raj</span>
      </div>
      <div class="topbar-links">
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
      </div>
    </nav>

    <header class="hero">
      <div class="hero-grid">
        <section class="hero-copy">
          <p class="eyebrow">Software Engineer • Frontend & Product Engineering</p>
          <h1 class="hero-title">Frontend engineer who ships fast, scales thoughtfully, and builds products that users actually feel.</h1>
          <p class="summary">
            I build high-performance product experiences with strong engineering fundamentals across frontend architecture, performance optimization, system design, and delivery. At Spinny, Airtel, and Niyo, I’ve shipped revenue-impacting journeys, payment systems, support flows, and internal platforms used at real scale.
          </p>
          <div class="hero-proof" aria-label="Key strengths">
            <span class="proof-chip">Built from 0 to 1</span>
            <span class="proof-chip">Frontend + system design</span>
            <span class="proof-chip">AI-native workflow</span>
          </div>
          <div class="hero-actions">
            <a class="button button-primary" href="mailto:manasraj9669@gmail.com">Contact Me</a>
            <a class="button button-secondary" href="#projects">View Projects</a>
            <a class="button button-secondary" href="/resume.pdf" target="_blank" rel="noreferrer">View Resume</a>
          </div>
          <ul class="contact-list" aria-label="Contact details">
            <li>
              <a href="tel:+919128826817">
                <span class="contact-icon" aria-hidden="true">☎</span>
                <span>Phone: 9128826817</span>
              </a>
            </li>
            <li>
              <a href="mailto:manasraj9669@gmail.com">
                <span class="contact-icon" aria-hidden="true">✉</span>
                <span>Email: manasraj9669@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/manas-raj-mnit/" target="_blank" rel="noreferrer">
                <span class="contact-icon" aria-hidden="true">in</span>
                <span>LinkedIn: /in/manas-raj-mnit</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/Manasdangi" target="_blank" rel="noreferrer">
                <span class="contact-icon" aria-hidden="true">◎</span>
                <span>GitHub: /Manasdangi</span>
              </a>
            </li>
          </ul>
        </section>

        <aside class="hero-side" aria-label="Quick profile">
          <div class="hero-card">
            <p class="card-label">Current Focus</p>
            <ul class="metric-list">
              <li>
                <strong>Frontend systems</strong>
                <span>Strong in React, TypeScript, Vite, WebView integrations, performance tuning, and production-grade UI architecture.</span>
              </li>
              <li>
                <strong>Product impact</strong>
                <span>Delivered meaningful user-facing impact across Spinny Care, Spinny consumer, Airtel payments, and internal platforms with faster flows, better UX, and measurable business outcomes.</span>
              </li>
              <li>
                <strong>Build from scratch</strong>
                <span>Comfortable taking products from scratch to production with strong system-design thinking and hands-on experience using modern AI tools like Cursor, Claude, and Antigravity.</span>
              </li>
            </ul>
            <div class="availability">
              <span class="availability-dot"></span>
              Open to strong product engineering opportunities
            </div>
          </div>
        </aside>
      </div>
    </header>

    <main>
      <section class="section section-intro">
        <div class="section-heading">
          <p class="section-kicker">Profile</p>
          <h2>What I bring to teams</h2>
        </div>
        <div class="intro-grid">
          <article class="info-card">
            <h3>User-first engineering</h3>
            <p>I build product flows that balance speed, reliability, and clarity for real users.</p>
          </article>
          <article class="info-card">
            <h3>Performance mindset</h3>
            <p>I enjoy profiling, removing render waste, and improving Core Web Vitals where they matter.</p>
          </article>
          <article class="info-card">
            <h3>Ownership</h3>
            <p>I’m comfortable taking features from idea to production and iterating based on outcomes.</p>
          </article>
        </div>
      </section>

      <section class="section" id="experience">
        <div class="section-heading">
          <p class="section-kicker">Experience</p>
          <h2>Professional journey</h2>
        </div>
        <div class="timeline">
          ${experienceItems
            .map(
              (item) => `
                <article class="timeline-item">
                  <div class="timeline-meta">
                    <p class="timeline-company">${item.company}</p>
                    <p>${item.role}</p>
                    <p>${item.location}</p>
                    <p>${item.period}</p>
                  </div>
                  <div class="timeline-content">
                    <h3>${item.role} at ${item.company}</h3>
                    <ul class="detail-list">
                      ${item.highlights.map((point) => `<li>${point}</li>`).join('')}
                    </ul>
                  </div>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="section" id="projects">
        <div class="section-heading">
          <p class="section-kicker">Projects</p>
          <h2>Selected work</h2>
        </div>
        <div class="project-grid">
          ${projects
            .map(
              (project) => `
                <article class="project-card">
                  <div class="project-topline">
                    <h3>${project.name}</h3>
                    <span>${project.period}</span>
                  </div>
                  <p class="project-stack">${project.stack}</p>
                  <p class="project-summary">${project.summary}</p>
                  <a class="project-link" href="${project.link}" target="_blank" rel="noreferrer">Live Project</a>
                  <ul class="detail-list">
                    ${project.points.map((point) => `<li>${point}</li>`).join('')}
                  </ul>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="section" id="skills">
        <div class="section-heading">
          <p class="section-kicker">Skills</p>
          <h2>Tools and strengths</h2>
        </div>
        <div class="skills-grid">
          <article class="skill-card">
            <h3>Languages</h3>
            <div class="chip-row">${skills.languages.map((skill) => `<span class="chip">${skill}</span>`).join('')}</div>
          </article>
          <article class="skill-card">
            <h3>Frontend</h3>
            <div class="chip-row">${skills.frontend.map((skill) => `<span class="chip">${skill}</span>`).join('')}</div>
          </article>
          <article class="skill-card">
            <h3>Engineering</h3>
            <div class="chip-row">${skills.engineering.map((skill) => `<span class="chip">${skill}</span>`).join('')}</div>
          </article>
          <article class="skill-card">
            <h3>Core strengths</h3>
            <div class="chip-row">${skills.core.map((skill) => `<span class="chip">${skill}</span>`).join('')}</div>
          </article>
        </div>
      </section>

      <section class="section" id="education">
        <div class="section-heading">
          <p class="section-kicker">Education</p>
          <h2>Academic background</h2>
        </div>
        <div class="education-grid">
          <article class="education-card">
            <div class="education-topline">
              <h3>MNIT Jaipur, Rajasthan</h3>
              <span>Aug 2019 - May 2023</span>
            </div>
            <p>Bachelor of Technology, Electrical Engineering</p>
            <p>CGPA: 7.75 / 10</p>
          </article>
          <article class="education-card">
            <div class="education-topline">
              <h3>KN Memo Academy, Asarganj, Munger</h3>
              <span>Apr 2017 - Mar 2019</span>
            </div>
            <p>CBSE Intermediate (PCM)</p>
            <p>Score: 90.4%</p>
          </article>
          <article class="education-card">
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
  <button class="scroll-top" id="scroll-top" type="button" aria-label="Move to top">Move to top</button>
`

const scrollTopButton = document.querySelector('#scroll-top')

const toggleScrollTopButton = () => {
  if (!scrollTopButton) return
  scrollTopButton.classList.toggle('is-visible', window.scrollY > 320)
}

toggleScrollTopButton()

window.addEventListener('scroll', toggleScrollTopButton, { passive: true })

scrollTopButton?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
