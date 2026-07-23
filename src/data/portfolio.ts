/**
 * ────────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH for all portfolio content — Wasif Ali.
 *  Edit this file to update the site — components render from these values.
 *  All content is drawn from Wasif's resume; nothing is invented.
 * ────────────────────────────────────────────────────────────────────────────
 */

/* ── Types ─────────────────────────────────────────────────────────────────── */

export interface NavItem {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone: string;
}

export interface Project {
  id: string;
  name: string;
  context: string;
  problem: string;
  contribution: string[];
  approach: string;
  architecture: string;
  outcome: string;
  tags: string[];
  /** Set to a real URL to render the button; leave null to hide it. */
  repoUrl: string | null;
  /** Set to a real URL to render the button; leave null to hide it. */
  demoUrl: string | null;
  /** True when the source cannot be shared — renders a "Private production project" label. */
  isPrivate: boolean;
  /** Path under /public/projects for a screenshot; null renders a placeholder panel. */
  image: string | null;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ArchitectureCard {
  title: string;
  description: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
}

export interface ConsultingStep {
  title: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
}

/* ── Profile ───────────────────────────────────────────────────────────────── */

export const profile = {
  name: "Wasif Ali",
  title: "Senior Full-Stack Engineer",
  location: "Remote · Pakistan",
  tagline:
    "I build scalable SaaS platforms, REST and GraphQL APIs, and distributed systems — shipping reliable production software across remote international teams.",
  heroSecondary:
    "A senior engineer who owns products end to end — architecture, APIs, delivery, and production performance — and picks the right tools for each problem rather than forcing one stack.",
} as const;

/* ── Social / contact links (from resume) ──────────────────────────────────── */

export const social: SocialLinks = {
  github: "https://github.com/wasif-ali-dev123",
  linkedin: "https://www.linkedin.com/in/wasif-ali-dev/",
  email: "wasifdev59@gmail.com",
  phone: "+92 311 4458467",
};

/* ── Navigation ────────────────────────────────────────────────────────────── */

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Engineering", href: "#engineering" },
  { label: "Contact", href: "#contact" },
];

/* ── Hero credibility indicators (from resume) ─────────────────────────────── */

export const metrics: Metric[] = [
  { value: "6+", label: "Years building production systems" },
  { value: "10k+", label: "Users served across SaaS platforms" },
  { value: "~40%", label: "Faster queries via schema & indexing" },
  { value: "50%", label: "Shorter release cycles after modernization" },
];

/* ── About ─────────────────────────────────────────────────────────────────── */

export const about = {
  paragraphs: [
    "I'm a Senior Full-Stack Engineer with 6+ years building scalable SaaS platforms, REST APIs, and cloud-native, distributed systems across remote international teams. My core stack is Node.js, React, and TypeScript, backed by PostgreSQL, AWS, and a microservices architecture.",
    "I've delivered client-facing products in fast-paced environments — adapting quickly across tech stacks, from React and Next.js on the frontend to Node.js, Express, and Ruby on Rails on the backend. I care about the parts that keep products alive in production: caching, observability, CI/CD, and clean system design.",
    "Beyond the code, I ship with strong ownership and communication. I collaborate directly with stakeholders, translate business requirements into scalable solutions, and keep async remote teams aligned through code reviews, technical documentation, and mentorship.",
  ],
} as const;

/* ── Projects (from resume — Notable Projects) ─────────────────────────────── */

export const projects: Project[] = [
  {
    id: "maple-hr",
    name: "Maple HR",
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
    demoUrl: "https://maplehr.io/", // Real product link from resume.
    isPrivate: true,
    image: "/projects/maple-hr.png",
  },
  {
    id: "honeybricks",
    name: "HoneyBricks",
    context:
      "A blockchain-enabled real estate investment platform with complex financial dashboards.",
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
    demoUrl: "https://www.honeybricks.com/", // Real product link from resume.
    isPrivate: true,
    image: "/projects/honeybricks.png",
  },
  {
    id: "remote-asset-tracking",
    name: "Remote Asset Tracking & Ads Management",
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

/* ── AI-assisted engineering (from resume — AI-Assisted Development) ────────── */

export const aiIntro = {
  heading: "AI-Assisted Engineering",
  lead: "I use AI to move faster without giving up ownership of correctness.",
  body: "AI tooling is part of how I work day to day — accelerating delivery while I stay responsible for design, review, and what ships. I use GitHub Copilot, ChatGPT, and Claude across scaffolding, debugging, and refactoring, with prompt engineering to get useful, reviewable output rather than blindly generated code.",
} as const;

export const aiWorkflow: WorkflowStep[] = [
  { step: 1, title: "Scaffold faster", description: "Use AI to draft boilerplate, tests, and repetitive structure, then shape it to fit the codebase." },
  { step: 2, title: "Debug with context", description: "Feed real stack traces and code context to AI-assisted debugging to narrow down root causes quickly." },
  { step: 3, title: "Refactor safely", description: "Use AI to propose refactors, then verify behavior with tests and review before merging." },
  { step: 4, title: "Prompt deliberately", description: "Apply prompt engineering to get precise, reviewable output instead of vague suggestions." },
  { step: 5, title: "Own the result", description: "Treat AI as a fast collaborator — every change is reviewed, tested, and mine to stand behind." },
];

export const architectureCards: ArchitectureCard[] = [
  { title: "Distributed Systems", description: "Independently deployable services with clear boundaries and fault isolation." },
  { title: "Event-Driven & Real-Time", description: "Async processing and WebSocket-driven real-time workflows for responsive products." },
  { title: "RBAC & Multi-Tenancy", description: "Role-based access and tenant isolation designed into the service layer." },
  { title: "Caching & Performance", description: "Redis and distributed caching plus schema and index tuning for fast queries." },
  { title: "Observability", description: "Sentry, Prometheus, Grafana, and Datadog to surface production issues early." },
  { title: "Cloud & CI/CD", description: "AWS (EC2, ECS, S3, RDS, Lambda), Docker, and GitHub Actions for reliable delivery." },
  { title: "Third-Party Integrations", description: "Payment, SMS, and email providers integrated with secure validation and error handling." },
];

/* ── Ownership & communication (from resume — ownership / stakeholder work) ── */

export const consulting = {
  heading: "Ownership from requirements to production",
  lead: "I don't just take tickets — I translate business requirements into scalable solutions and stay accountable through delivery.",
  steps: [
    { title: "Understand the requirement", description: "Work directly with stakeholders to translate business needs into technical solutions." },
    { title: "Adapt to the stack", description: "Move quickly across tech stacks to fit the product rather than forcing a favorite tool." },
    { title: "Design for scale", description: "Choose architecture that holds up in production — distributed, observable, and maintainable." },
    { title: "Ship reliably", description: "Deliver production-ready features under fast-paced timelines with CI/CD and testing." },
    { title: "Communicate async", description: "Keep remote teams aligned through code reviews, documentation, and clear updates." },
  ] as ConsultingStep[],
  example:
    "Modernizing BNR's payroll monolith into independently deployable microservices took a bit more up-front structure — but it cut release cycle time by half and meant one fault no longer put every payroll run at risk.",
} as const;

/* ── Experience (from resume) ──────────────────────────────────────────────── */

export const experience: ExperienceItem[] = [
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

/* ── Skills (from resume) ──────────────────────────────────────────────────── */

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Ruby", "Python", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Redux", "Apollo Client", "GraphQL", "HTML5", "CSS3", "Tailwind CSS", "Material UI"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Ruby on Rails", "REST APIs", "GraphQL APIs", "Microservices", "WebSockets", "Distributed Systems"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "ElasticSearch", "DynamoDB", "MongoDB", "Redis", "MySQL", "Distributed Caching"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (EC2, ECS, S3, RDS, Lambda)", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "CI/CD", "Nginx", "Linux"],
  },
  {
    category: "Architecture",
    skills: ["System Design", "Event-Driven Systems", "RBAC", "Real-Time Systems", "Async Processing", "Third-Party Integrations"],
  },
  {
    category: "AI-Assisted Development",
    skills: ["GitHub Copilot", "ChatGPT", "Claude", "AI-Assisted Debugging", "Prompt Engineering", "AI-Enhanced Workflows"],
  },
  {
    category: "Observability & Delivery",
    skills: ["Sentry", "Prometheus", "Grafana", "Datadog", "Apache Superset", "Agile/Scrum", "Jira", "Notion"],
  },
];

/* ── Education & achievements (from resume) ─────────────────────────────────── */

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Punjab University College of Information Technology (PUCIT)",
    period: "Sep 2017 – Jun 2021",
  },
];

export const achievements: string[] = [
  "3rd Place — Codex Inter-University Coding Competition by Tkxel",
  "3rd Place — PUCIT Codefest",
];

/* ── Contact ───────────────────────────────────────────────────────────────── */

export const contact = {
  heading: "Let's build something that scales",
  message:
    "I'm open to Senior Full-Stack roles and challenging distributed-systems work. If you're building SaaS platforms, APIs, or cloud-native products and want an engineer who ships with ownership, let's talk.",
} as const;
