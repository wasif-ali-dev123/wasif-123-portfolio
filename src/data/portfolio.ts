/**
 * ────────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH for all portfolio content — Wasif Ali.
 *  Edit this file to update the site; components render from these values.
 *
 *  Anything set to `null` (or an empty list) is hidden on the page, so a
 *  missing link or quote never shows up as a placeholder. Search for `TODO:`
 *  to find what is still to fill in.
 * ────────────────────────────────────────────────────────────────────────────
 */

/* ── Profile & links ───────────────────────────────────────────────────────── */

export const profile = {
  name: "Wasif Ali",
  title: "AI Product Engineer",
  audience: "For startups and SaaS teams adding AI",
  intro:
    "I'm Wasif, a senior full-stack engineer (6+ years). I build the whole AI feature: React UI, APIs, model calls, and the evals, fallbacks and cost limits that keep it reliable once real users arrive.",
} as const;

export const social = {
  github: "https://github.com/wasif-ali-dev123",
  linkedin: "https://www.linkedin.com/in/wasif-ali-dev/",
  email: "wasifdev59@gmail.com",
  phone: "+92 311 4458467",
  /** Digits only, for wa.me links. */
  whatsapp: "923114458467",
} as const;

export const links = {
  // TODO: Calendly / Cal.com link. Until it is set, "Book a call" scrolls to the
  // contact section (WhatsApp, email, form), which works with no setup.
  booking: null as string | null,
  // TODO: put your resume at public/resume.pdf and set this to "/resume.pdf".
  resume: null as string | null,
};

/**
 * Where every "Book a call" button goes. Never a bare mailto: link, because
 * a mailto: does nothing on computers with no mail app set up.
 */
export const bookingHref = links.booking ?? "#contact";

/** WhatsApp chat link with an optional pre-filled message. */
export function whatsappHref(text?: string): string {
  return `https://wa.me/${social.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}

/* ── Availability ("always on call") ───────────────────────────────────────── */

export const availability = {
  badge: "On call now · 7 days a week · any time zone",
  promises: [
    { icon: "clock", text: "Replies within a few hours" },
    { icon: "globe", text: "Calls in US, EU or Asia hours" },
    { icon: "bolt", text: "Production issues: same day" },
  ],
} as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Engineering", href: "#engineering" },
  { label: "Contact", href: "#contact" },
] as const;

export const teams = ["Spark", "Turing", "Devsinc", "Maple HR", "HoneyBricks"];

/* ── Results strip ─────────────────────────────────────────────────────────── */

export const metrics = [
  { value: "6+ yrs", label: "shipping production SaaS for remote teams" },
  { value: "10k+", label: "users on React apps I built at Devsinc" },
  { value: "35–40%", label: "faster API responses with Postgres tuning + Redis" },
  { value: "~50%", label: "shorter release cycles after a monolith split" },
];

/* ── Proof you can check ───────────────────────────────────────────────────── */

export const verify: { kind: string; title: string; note: string; href: string | null }[] = [
  { kind: "Live product", title: "maplehr.io", note: "HR & payroll, 500+ organizations", href: "https://maplehr.io/" },
  { kind: "Live product", title: "honeybricks.com", note: "Investment dashboards", href: "https://www.honeybricks.com/" },
  { kind: "Code", title: "GitHub", note: "Profile and public repositories", href: "https://github.com/wasif-ali-dev123" },
  { kind: "Competitive programming", title: "2× 3rd place", note: "Codex Inter-University (Tkxel) · PUCIT Codefest", href: null },
];

/* ── Featured work ─────────────────────────────────────────────────────────── */

export const spark = {
  tag: "AI-powered tools",
  title: "AI products at Spark",
  cells: [
    { label: "Problem", text: "Teams wanted AI inside daily workflows, not a separate chatbot." },
    { label: "What I built", text: "AI-powered tools that generate and review content, with routing across model providers." },
    { label: "How I checked it", text: "Automated checks on model output, fallbacks on failures, cost tracked per user." },
  ],
  // TODO: one number (time saved, users, or quality pass rate). Hidden while null.
  result: null as string | null,
  stack: "TypeScript · Node.js · Rails · LLM APIs · PostgreSQL",
  note: "Details under NDA; happy to walk through the approach on a call.",
};

/** Real figures from the Direct Jobs database and repository (Nov 2026). */
export const directJobs = {
  tag: "Own product · built solo",
  title: "Direct Jobs: an AI job-search copilot",
  text: "Finds remote roles straight from company hiring boards, ranks them, then writes a tailored resume and cover letter for each one, with a reviewer model and rule checks in the loop.",
  stack: "Rails 8 · PostgreSQL · Solid Queue · OpenRouter · Groq",
  stats: [
    { value: "121k+", label: "job postings fetched, filtered and scored" },
    { value: "1,300+", label: "company career boards on 12 hiring platforms" },
    { value: "230+", label: "AI-tailored resumes, 575 reviewed revisions" },
    { value: "700+", label: "automated tests, models faked in CI" },
  ],
  footnote:
    "Writer + reviewer models with fallback across providers and API keys · per-user spend limits · Chrome autofill extension",
  // TODO: a 60-second screen recording and a public write-up or repo. Hidden while null.
  demoUrl: null as string | null,
  writeupUrl: null as string | null,
};

/* ── Client projects (full case studies, from the resume) ──────────────────── */

export interface Project {
  id: string;
  name: string;
  /** Headline number or word shown big on the card. */
  big: string;
  bigLabel: string;
  context: string;
  problem: string;
  contribution: string[];
  approach: string;
  architecture: string;
  outcome: string;
  tags: string[];
  repoUrl: string | null;
  demoUrl: string | null;
  isPrivate: boolean;
  /** Path under /public/projects; null hides the image. */
  image: string | null;
}

export const projects: Project[] = [
  {
    id: "maple-hr",
    name: "Maple HR",
    big: "500+",
    bigLabel: "organizations on the platform",
    context:
      "A scalable multi-tenant HR and payroll platform serving 500+ organizations with real-time workflows and role-based access.",
    problem:
      "Hundreds of organizations needed isolated, real-time HR and payroll workflows on shared infrastructure, without sacrificing reliability or access control.",
    contribution: [
      "Built multi-tenant backend services with RBAC authorization.",
      "Implemented real-time workflows over WebSockets.",
      "Collaborated across product and engineering stakeholders to deliver production-ready features.",
      "Worked in a remote agile environment shipping reliably under delivery timelines.",
    ],
    approach:
      "Modeled tenant isolation and role-based access into the service layer, and used WebSockets to keep HR and payroll workflows live for every organization.",
    architecture:
      "React + TypeScript front end → Node.js microservices with RBAC → PostgreSQL, with WebSockets powering real-time updates.",
    outcome:
      "A production multi-tenant platform serving 500+ organizations with real-time, role-aware HR and payroll workflows.",
    tags: ["Node.js", "React", "TypeScript", "PostgreSQL", "REST APIs", "RBAC", "WebSockets", "Microservices"],
    repoUrl: null,
    demoUrl: "https://maplehr.io/",
    isPrivate: true,
    image: "/projects/maple-hr.png",
  },
  {
    id: "honeybricks",
    name: "HoneyBricks",
    big: "GraphQL",
    bigLabel: "investor dashboards",
    context: "A blockchain-enabled real estate investment platform with complex financial dashboards.",
    problem:
      "Investment dashboards pulled large, interrelated datasets and felt sluggish, hurting responsiveness across complex financial views.",
    contribution: [
      "Developed high-performance frontend investment workflows.",
      "Built GraphQL integrations that improved data-fetching efficiency.",
      "Improved user responsiveness across complex financial dashboards.",
    ],
    approach:
      "Restructured data fetching around GraphQL with Apollo Client and tightened frontend state so dashboards stayed responsive under heavy data.",
    architecture:
      "React + TypeScript front end → Apollo Client / GraphQL data layer → Redux state, styled with Material UI.",
    outcome:
      "Faster, more responsive investment dashboards with more efficient data fetching across complex financial workflows.",
    tags: ["React", "TypeScript", "Apollo Client", "GraphQL", "Redux", "Material UI"],
    repoUrl: null,
    demoUrl: "https://www.honeybricks.com/",
    isPrivate: true,
    image: "/projects/honeybricks.png",
  },
  {
    id: "remote-asset-tracking",
    name: "Remote Asset Tracking & Ads Management",
    big: "Multi-site",
    bigLabel: "US locations monitored live",
    context:
      "Distributed monitoring and remote asset management systems with real-time dashboards, supporting operational visibility across multiple US locations.",
    problem:
      "Operations spanned many US locations and needed real-time visibility, alerting, and geographic context over distributed assets.",
    contribution: [
      "Architected distributed monitoring and remote asset management systems.",
      "Built real-time dashboards and alerting workflows.",
      "Integrated GIS / mapping for location-aware operational visibility.",
      "Developed scalable backend services supporting multiple US locations.",
    ],
    approach:
      "Designed distributed services with real-time dashboards and alerting, layering GIS/mapping over asset data for geographic context.",
    architecture:
      "Ruby on Rails + React → distributed services over WebSockets → PostgreSQL, with GIS/mapping and RBAC.",
    outcome:
      "Operational visibility across multiple US locations through real-time, geographically-aware asset monitoring.",
    tags: ["Ruby on Rails", "React", "PostgreSQL", "GIS / Mapping", "RBAC", "WebSockets", "Distributed Services"],
    repoUrl: null,
    demoUrl: null,
    isPrivate: true,
    image: "/projects/remote-asset-tracking.png",
  },
  {
    id: "bnr-payroll",
    name: "BNR — Payroll Microservices Modernization",
    big: "~50%",
    bigLabel: "shorter release cycles",
    context:
      "Modernization of a legacy monolithic payroll system into independently deployable microservices supporting ACH/RTP payment processing and payroll runs.",
    problem:
      "A monolithic payroll system was slow to release and fragile — a single fault could ripple across payment processing and payroll runs.",
    contribution: [
      "Modernized a legacy monolith into independently deployable microservices.",
      "Supported ACH/RTP payment processing and payroll runs.",
      "Built financial system integrations.",
      "Improved system fault isolation.",
    ],
    approach:
      "Decomposed the monolith into independently deployable services along payment and payroll boundaries, isolating faults and enabling faster, safer releases.",
    architecture:
      "Ruby on Rails microservices → PostgreSQL → REST APIs and financial integrations, with Sidekiq for background processing.",
    outcome:
      "Reduced release cycle time by ~50% and improved fault isolation across payroll and payment processing.",
    tags: ["Ruby on Rails", "PostgreSQL", "REST APIs", "Microservices", "Financial Integrations", "Sidekiq"],
    repoUrl: null,
    demoUrl: null,
    isPrivate: true,
    image: "/projects/bnr-payroll.png",
  },
];

/* ── Trust ─────────────────────────────────────────────────────────────────── */

// TODO: add real quotes (LinkedIn recommendations work well). The quote cards
// are hidden while this list is empty.
export const testimonials: { quote: string; name: string; role: string }[] = [];

export const workingPromises = [
  { icon: "lines", title: "Written updates", text: "what shipped, what's next, what's blocked" },
  { icon: "check", title: "Evals before launch", text: "a test set for every AI feature" },
  { icon: "clock", title: "On call, every day", text: "US, EU or Asia hours; production issues same day" },
  { icon: "shield", title: "Your code, your repo", text: "documented, tested, no lock-in" },
] as const;

/* ── Services ──────────────────────────────────────────────────────────────── */

export const services = [
  { title: "Add AI to your product", text: "Assistants, content generation, search over your own data, wired into the app you already have." },
  { title: "Build your AI MVP", text: "A deployed SaaS with auth, billing, usage limits and model fallbacks, ready for first customers." },
  { title: "Make AI reliable & affordable", text: "Output checks, retries, provider fallbacks and cost caps, so a prototype survives real traffic." },
];

/* ── Experience ────────────────────────────────────────────────────────────── */

// TODO: add the Spark role here once its title and dates are settled.
export const experience = [
  {
    role: "Full Stack Engineer",
    company: "Turing",
    period: "Nov 2024 – Present",
    highlights: [
      "Delivered full-stack features for international client products using React, Node.js, TypeScript, and Python.",
      "Translated business requirements into scalable production solutions.",
      "Built asynchronous workflows and third-party integrations (webhooks, OAuth, payment APIs), reducing production errors by ~30%.",
      "Optimized PostgreSQL queries and Redis caching, reducing API response times by 35–40%.",
      "Implemented CI/CD pipelines with GitHub Actions and Docker to accelerate release cycles.",
      "Led async collaboration across distributed teams through code reviews, documentation, and mentorship.",
    ],
  },
  {
    role: "Software Developer",
    company: "Devsinc",
    period: "Jun 2021 – Oct 2024",
    highlights: [
      "Built scalable React and TypeScript applications serving 10,000+ users across client-facing SaaS platforms.",
      "Developed REST APIs, RBAC authorization systems, and background job workflows with Ruby on Rails and PostgreSQL.",
      "Collaborated with product teams and stakeholders under fast-paced delivery timelines.",
      "Designed optimized PostgreSQL schemas and indexing strategies, improving query performance by ~40%.",
      "Architected distributed microservice workflows, observability pipelines, and Docker-based AWS CI/CD deployments.",
    ],
  },
  {
    role: "Software Engineer",
    company: "ML Sense",
    period: "Mar 2020 – May 2021",
    highlights: [
      "Developed and deployed MERN-stack applications for startup clients from architecture through production.",
      "Built authentication systems, admin dashboards, and multi-tenant user workflows for SaaS platforms.",
      "Integrated third-party APIs including payment, SMS, and email providers with secure validation and error handling.",
    ],
  },
];

/* ── About ─────────────────────────────────────────────────────────────────── */

export const about = {
  title: "Senior engineer who owns outcomes, not just tickets",
  paragraphs: [
    "I'm a Senior Full-Stack Engineer with 6+ years building scalable SaaS platforms, REST APIs, and cloud-native, distributed systems across remote international teams. My core stack is Node.js, React, and TypeScript, backed by PostgreSQL, AWS, and a microservices architecture.",
    "I've delivered client-facing products in fast-paced environments — adapting quickly across tech stacks, from React and Next.js on the frontend to Node.js, Express, and Ruby on Rails on the backend. I care about the parts that keep products alive in production: caching, observability, CI/CD, and clean system design.",
    "Beyond the code, I ship with strong ownership and communication. I collaborate directly with stakeholders, translate business requirements into scalable solutions, and keep async remote teams aligned through code reviews, technical documentation, and mentorship.",
  ],
  focusAreas: [
    "AI features with evals, fallbacks and cost limits",
    "Distributed systems & microservices",
    "Scalable REST & GraphQL APIs",
    "Real-time & event-driven workflows",
    "Performance, caching & databases",
    "AWS, Docker & CI/CD",
    "Ownership & stakeholder communication",
  ],
  location: "Remote · Pakistan",
};

/* ── AI-assisted engineering ───────────────────────────────────────────────── */

export const aiIntro = {
  lead: "I use AI to move faster without giving up ownership of correctness.",
  body: "AI tooling is part of how I work day to day — accelerating delivery while I stay responsible for design, review, and what ships. I use GitHub Copilot, ChatGPT, and Claude across scaffolding, debugging, and refactoring, with prompt engineering to get useful, reviewable output rather than blindly generated code.",
};

export const aiWorkflow = [
  { title: "Scaffold faster", description: "Use AI to draft boilerplate, tests, and repetitive structure, then shape it to fit the codebase." },
  { title: "Debug with context", description: "Feed real stack traces and code context to AI-assisted debugging to narrow down root causes quickly." },
  { title: "Refactor safely", description: "Use AI to propose refactors, then verify behavior with tests and review before merging." },
  { title: "Prompt deliberately", description: "Apply prompt engineering to get precise, reviewable output instead of vague suggestions." },
  { title: "Own the result", description: "Treat AI as a fast collaborator — every change is reviewed, tested, and mine to stand behind." },
];

export const architectureCards = [
  { title: "Distributed Systems", description: "Independently deployable services with clear boundaries and fault isolation." },
  { title: "Event-Driven & Real-Time", description: "Async processing and WebSocket-driven real-time workflows for responsive products." },
  { title: "RBAC & Multi-Tenancy", description: "Role-based access and tenant isolation designed into the service layer." },
  { title: "Caching & Performance", description: "Redis and distributed caching plus schema and index tuning for fast queries." },
  { title: "Observability", description: "Sentry, Prometheus, Grafana, and Datadog to surface production issues early." },
  { title: "Cloud & CI/CD", description: "AWS (EC2, ECS, S3, RDS, Lambda), Docker, and GitHub Actions for reliable delivery." },
  { title: "Third-Party Integrations", description: "Payment, SMS, and email providers integrated with secure validation and error handling." },
];

/* ── Ownership (technical consulting) ──────────────────────────────────────── */

export const consulting = {
  heading: "Ownership from requirements to production",
  lead: "I don't just take tickets — I translate business requirements into scalable solutions and stay accountable through delivery.",
  steps: [
    { title: "Understand the requirement", description: "Work directly with stakeholders to translate business needs into technical solutions." },
    { title: "Adapt to the stack", description: "Move quickly across tech stacks to fit the product rather than forcing a favorite tool." },
    { title: "Design for scale", description: "Choose architecture that holds up in production — distributed, observable, and maintainable." },
    { title: "Ship reliably", description: "Deliver production-ready features under fast-paced timelines with CI/CD and testing." },
    { title: "Communicate async", description: "Keep remote teams aligned through code reviews, documentation, and clear updates." },
  ],
  example:
    "Modernizing BNR's payroll monolith into independently deployable microservices took a bit more up-front structure — but it cut release cycle time by half and meant one fault no longer put every payroll run at risk.",
};

/* ── Skills ────────────────────────────────────────────────────────────────── */

export const skillGroups = [
  { category: "AI Engineering", skills: ["OpenAI / Claude / open-model APIs", "Prompt design", "Output evaluation", "Model routing & fallbacks", "Cost limits"] },
  { category: "Languages", skills: ["JavaScript (ES6+)", "TypeScript", "Ruby", "Python", "SQL"] },
  { category: "Frontend", skills: ["React.js", "Next.js", "Redux", "Apollo Client", "GraphQL", "HTML5", "CSS3", "Tailwind CSS", "Material UI"] },
  { category: "Backend", skills: ["Node.js", "Express.js", "Ruby on Rails", "REST APIs", "GraphQL APIs", "Microservices", "WebSockets", "Distributed Systems"] },
  { category: "Databases", skills: ["PostgreSQL", "ElasticSearch", "DynamoDB", "MongoDB", "Redis", "MySQL", "Distributed Caching"] },
  { category: "Cloud & DevOps", skills: ["AWS (EC2, ECS, S3, RDS, Lambda)", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "CI/CD", "Nginx", "Linux"] },
  { category: "Architecture", skills: ["System Design", "Event-Driven Systems", "RBAC", "Real-Time Systems", "Async Processing", "Third-Party Integrations"] },
  { category: "AI-Assisted Development", skills: ["GitHub Copilot", "ChatGPT", "Claude", "AI-Assisted Debugging", "Prompt Engineering", "AI-Enhanced Workflows"] },
  { category: "Observability & Delivery", skills: ["Sentry", "Prometheus", "Grafana", "Datadog", "Apache Superset", "Agile/Scrum", "Jira", "Notion"] },
];

/* ── Education & achievements ──────────────────────────────────────────────── */

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Punjab University College of Information Technology (PUCIT)",
    period: "Sep 2017 – Jun 2021",
  },
];

export const achievements = [
  "3rd Place — Codex Inter-University Coding Competition by Tkxel",
  "3rd Place — PUCIT Codefest",
];

/* ── Contact ───────────────────────────────────────────────────────────────── */

export const nextSteps = [
  { title: "20-min call, any day:", text: "pick a slot in your own time zone" },
  // TODO: confirm you can keep these two promises.
  { title: "Written plan in 2 days:", text: "scope, risks, estimate" },
  { title: "First working demo", text: "in week one" },
];
