import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile, social } from "@/data/portfolio";
import { siteUrl } from "@/config/site";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], display: "swap", variable: "--font-grotesk" });
const mono = JetBrains_Mono({ subsets: ["latin"], display: "swap", variable: "--font-mono-jb", weight: ["400", "500"] });

const title = "Wasif Ali | AI Product Engineer";
const description =
  "Wasif Ali builds AI features that work in production: React UI, APIs, LLM calls, evals, fallbacks and cost limits. Senior full-stack engineer, 6+ years. On call in US, EU and Asia hours.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | Wasif Ali" },
  description,
  applicationName: "Wasif Ali — Portfolio",
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: [
    "Wasif Ali",
    "AI Product Engineer",
    "AI Engineer",
    "LLM",
    "Senior Full-Stack Engineer",
    "React",
    "Node.js",
    "TypeScript",
    "Ruby on Rails",
    "PostgreSQL",
    "Remote",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Wasif Ali — Portfolio",
    title,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  robots: { index: true, follow: true },
  category: "technology",
};

/** Marks that JS is available so scroll-reveal styles apply (see globals.css). */
const jsFlag = `document.documentElement.classList.add('js');`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: siteUrl,
  email: `mailto:${social.email}`,
  sameAs: [social.github, social.linkedin],
  knowsAbout: ["AI product engineering", "LLM integration", "Full-stack development", "React", "Node.js", "Ruby on Rails", "PostgreSQL"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-ink text-text antialiased">
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
