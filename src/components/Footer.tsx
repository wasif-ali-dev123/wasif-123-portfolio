import { profile, social } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "./icons";

export function Footer() {
  // Rendered at build time for static export — reflects the year the site is built.
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="text-center sm:text-left">
          <p className="font-serif text-base font-semibold text-text">
            {profile.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            © {year} {profile.name}. Built with Next.js and Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-strong bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <GitHubIcon />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-strong bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
