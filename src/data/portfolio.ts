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
  // TODO: Calendly / Cal.com link. Until it is set, "Book a call" opens email.
  booking: null as string | null,
  // TODO: put your resume at public/resume.pdf and set this to "/resume.pdf".
  resume: null as string | null,
};

/** Where every "Book a call" button goes. */
export const bookingHref =
  links.booking ?? `mailto:${social.email}?subject=${encodeURIComponent("Intro call")}`;

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
  { label: "Work", href: "#work" },
  { label: "AI services", href: "#services" },
  { label: "Experience", href: "#experience" },
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

export const supporting: {
  big: string;
  small: string;
  title: string;
  text: string;
  stack: string;
  href: string | null;
}[] = [
  {
    big: "500+",
    small: "organizations on the platform",
    title: "Maple HR",
    text: "Multi-tenant HR and payroll SaaS with real-time workflows and role-based access.",
    stack: "Node.js · React · TypeScript · PostgreSQL",
    href: "https://maplehr.io/",
  },
  {
    big: "~50%",
    small: "shorter release cycles",
    title: "BNR payroll modernization",
    text: "Split a legacy payroll monolith into deployable services for ACH/RTP payments and payroll runs.",
    stack: "Rails · PostgreSQL · Sidekiq",
    href: null,
  },
  {
    big: "GraphQL",
    small: "investor dashboards",
    title: "HoneyBricks",
    text: "Financial dashboards for a blockchain real-estate investment platform.",
    stack: "React · TypeScript · Apollo · GraphQL",
    href: "https://www.honeybricks.com/",
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
  { period: "Nov 2024 – now", role: "Full Stack Engineer · Turing", note: "React, Node.js, Python for international clients; API times down 35–40%" },
  { period: "Jun 2021 – Oct 2024", role: "Software Developer · Devsinc", note: "Rails + React SaaS for 10,000+ users; queries ~40% faster" },
  { period: "Mar 2020 – May 2021", role: "Software Engineer · ML Sense", note: "MERN apps for startups: auth, dashboards, payments" },
];

export const stackLine =
  "AI: OpenAI, Claude and open-model APIs, prompt design, output evaluation, model routing. Product: TypeScript, React, Next.js, Node.js, Rails, PostgreSQL, Redis, AWS.";

/* ── Contact ───────────────────────────────────────────────────────────────── */

export const nextSteps = [
  { title: "20-min call, any day:", text: "pick a slot in your own time zone" },
  // TODO: confirm you can keep these two promises.
  { title: "Written plan in 2 days:", text: "scope, risks, estimate" },
  { title: "First working demo", text: "in week one" },
];
