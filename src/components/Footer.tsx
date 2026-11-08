import { social } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "./icons";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-5 pb-12 pt-6 text-sm text-faint sm:px-8">
      <span>© {new Date().getFullYear()} Wasif Ali · Pakistan · Remote worldwide</span>
      <span className="flex gap-5">
        <a href={social.github} className="inline-flex items-center gap-1.5 text-soft hover:text-strong">
          <GitHubIcon width={16} height={16} /> GitHub
        </a>
        <a href={social.linkedin} className="inline-flex items-center gap-1.5 text-soft hover:text-strong">
          <LinkedInIcon width={16} height={16} /> LinkedIn
        </a>
      </span>
    </footer>
  );
}
