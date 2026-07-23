import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { profile, social } from "@/data/portfolio";
import { siteUrl } from "@/config/site";

// Body / UI sans.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Editorial serif for headings (variable weight + optical size).
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  style: ["normal", "italic"],
});

const description =
  "Portfolio of Wasif Ali, a Senior Full-Stack Engineer building scalable SaaS platforms, REST and GraphQL APIs, and cloud-native distributed systems with Node.js, React, TypeScript, and AWS.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wasif Ali | Senior Full-Stack Engineer",
    template: "%s | Wasif Ali",
  },
  description,
  applicationName: "Wasif Ali — Portfolio",
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: [
    "Wasif Ali",
    "Senior Full-Stack Engineer",
    "Node.js",
    "React",
    "TypeScript",
    "Ruby on Rails",
    "Python",
    "PostgreSQL",
    "GraphQL",
    "REST APIs",
    "Microservices",
    "Distributed Systems",
    "AWS",
    "Docker",
    "Software Engineer Portfolio",
  ],
  alternates: {
    // TODO: Update in src/config/site.ts (siteUrl) — this becomes your canonical URL.
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Wasif Ali — Portfolio",
    title: "Wasif Ali | Senior Full-Stack Engineer",
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Wasif Ali — Senior Full-Stack Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wasif Ali | Senior Full-Stack Engineer",
    description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  category: "technology",
};

/** Applied before paint to avoid a flash of the wrong theme. Defaults to dark. */
const themeScript = `
(function () {
  // Mark that JS is available so scroll-reveal styles apply (see globals.css).
  document.documentElement.classList.add('js');
  try {
    var stored = localStorage.getItem('theme');
    var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    var theme = stored ? stored : (prefersLight ? 'light' : 'dark');
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: siteUrl,
  email: `mailto:${social.email}`,
  sameAs: [social.github, social.linkedin],
  knowsAbout: [
    "Full-Stack Development",
    "REST and GraphQL APIs",
    "Distributed Systems",
    "Microservices Architecture",
    "Node.js and React",
    "PostgreSQL and Redis",
    "Cloud Infrastructure (AWS)",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-bg text-text antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent-contrast"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
