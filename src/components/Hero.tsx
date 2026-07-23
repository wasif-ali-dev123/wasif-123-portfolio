import { profile, social, metrics } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { btnPrimary, btnSecondary } from "./ui";
import { ArrowRightIcon, GitHubIcon, LinkedInIcon } from "./icons";

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative overflow-hidden">
      {/* Subtle background wash — restrained, no heavy glow. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60rem 30rem at 50% -10%, color-mix(in oklab, var(--accent) 14%, transparent), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent"
      />

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-24 sm:px-8 sm:pt-32">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            Available for Senior Full-Stack roles
          </p>
        </Reveal>

        <Reveal delay={60}>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-text sm:text-7xl">
            {profile.name}
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-4 font-serif text-2xl font-medium italic text-accent sm:text-3xl">
            {profile.title}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-text sm:text-xl">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={280}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{profile.heroSecondary}</p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className={btnPrimary}>
              View Projects
              <ArrowRightIcon width={16} height={16} />
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className={btnSecondary}
              aria-label="GitHub profile (opens in a new tab)"
            >
              <GitHubIcon width={16} height={16} />
              GitHub
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={btnSecondary}
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <LinkedInIcon width={16} height={16} />
              LinkedIn
            </a>
          </div>
        </Reveal>

        {/* Credibility indicators — inline serif-numeral stat row */}
        <Reveal delay={360}>
          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-border pt-8 sm:flex sm:flex-wrap sm:items-start sm:gap-x-12">
            {metrics.map((m) => (
              <div key={m.label} className="sm:max-w-[13rem]">
                <dt className="font-serif text-4xl font-semibold tracking-tight text-text sm:text-5xl">
                  {m.value}
                </dt>
                <dd className="mt-2 text-sm leading-snug text-muted">{m.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
