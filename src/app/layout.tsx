import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { about, achievements, education, faqs, profile, services, skillGroups, social } from "@/data/portfolio";
import { siteUrl } from "@/config/site";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], display: "swap", variable: "--font-grotesk" });
const mono = JetBrains_Mono({ subsets: ["latin"], display: "swap", variable: "--font-mono-jb", weight: ["400", "500"] });

const title = "Wasif Ali | AI Product Engineer";
const description =
  "Hire Wasif Ali, a remote senior full-stack and AI product engineer (6+ years). React, Node.js, Rails and LLM features that work in production, for startups and SaaS teams. Case studies: Maple HR, HoneyBricks, BNR. On call in UK/EU and US hours.";

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
    "Hire remote full-stack developer",
    "Hire AI engineer",
    "Freelance AI developer",
    "LLM integration",
    "SaaS developer",
    "Remote developer Pakistan",
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

/**
 * Structured data for search engines and AI answer engines: who (Person),
 * what is offered (ProfessionalService), the site, and the FAQ answers.
 */
const personId = `${siteUrl}/#person`;
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      jobTitle: ["Senior Full-Stack Engineer", "AI Product Engineer"],
      description: about.paragraphs[0],
      url: `${siteUrl}/`,
      image: `${siteUrl}/og.png`,
      email: `mailto:${social.email}`,
      sameAs: [social.github, social.linkedin],
      address: { "@type": "PostalAddress", addressCountry: "PK" },
      alumniOf: education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
      award: achievements,
      knowsAbout: skillGroups.flatMap((g) => g.skills).slice(0, 40),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "Wasif Ali — AI product and full-stack engineering",
      url: `${siteUrl}/`,
      image: `${siteUrl}/og.png`,
      email: social.email,
      telephone: social.phone,
      founder: { "@id": personId },
      areaServed: "Worldwide",
      address: { "@type": "PostalAddress", addressCountry: "PK" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.text },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "Wasif Ali — Portfolio",
      publisher: { "@id": personId },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-ink text-text antialiased">
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
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
