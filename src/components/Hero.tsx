import { availability, bookingHref, links, profile, teams } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { btnOutline, btnPrimary } from "./ui";
import { ArrowRightIcon, DownloadIcon, SparkleIcon, namedIcons } from "./icons";

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="mx-auto flex max-w-6xl flex-wrap items-center gap-14 px-5 pb-10 pt-12 sm:px-8 sm:pt-14">
      <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-7">
        <Reveal className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-[#2a2f3a] px-3.5 py-2 text-sm text-soft">
            <span aria-hidden="true" className="live-dot h-2 w-2 rounded-full bg-accent" />
            {availability.badge}
          </span>
          <span className="text-sm text-faint">{profile.audience}</span>
        </Reveal>

        <Reveal delay={60}>
          <h1 className="font-display text-[clamp(2.5rem,5.4vw,4.25rem)] font-bold leading-[1.04] tracking-[-0.02em] text-strong">
            Ship AI features that <span className="text-accent">work on day 100</span>, not just in the demo.
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p className="max-w-[580px] text-[19px] leading-relaxed text-muted">{profile.intro}</p>
        </Reveal>

        <Reveal delay={160} className="flex flex-wrap items-center gap-3.5">
          <a href={bookingHref} className={btnPrimary}>
            Book a 20-min intro call
            <ArrowRightIcon width={18} height={18} strokeWidth={2.2} />
          </a>
          <a href="#work" className={btnOutline}>
            See how I build it
          </a>
          {links.resume ? (
            <a href={links.resume} className="inline-flex items-center gap-2 px-1.5 py-3 text-[15px] text-soft underline-offset-4 hover:underline">
              <DownloadIcon width={16} height={16} />
              Resume (PDF)
            </a>
          ) : null}
        </Reveal>

        <Reveal delay={200} className="flex flex-col gap-3">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-soft">
            {availability.promises.map((p) => {
              const Icon = namedIcons[p.icon];
              return (
                <li key={p.text} className="inline-flex items-center gap-2">
                  <Icon width={16} height={16} strokeWidth={2} className="text-accent" />
                  {p.text}
                </li>
              );
            })}
          </ul>
          <p className="text-sm text-[#8c93a1]">
            Built with teams at{" "}
            {teams.map((t, i) => (
              <span key={t}>
                <span className="text-[#d5d9e0]">{t}</span>
                {i < teams.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </Reveal>
      </div>

      <Reveal delay={120} className="relative min-w-0 flex-[1_1_440px] py-6">
        <HeroCard />
      </Reveal>
    </section>
  );
}

/** A mock AI assistant inside a product: what "AI features with guardrails" looks like. */
function HeroCard() {
  return (
    <div aria-hidden="true">
      <div className="overflow-hidden rounded-[20px] border border-line bg-surface shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        <div className="flex items-center gap-2 border-b border-line px-[18px] py-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="ml-3 text-[13px] text-[#8c93a1]">AI assistant · in your product</span>
        </div>
        <div className="flex flex-col gap-3.5 p-[22px]">
          <div className="max-w-[80%] self-end rounded-[14px_14px_4px_14px] bg-surface-3 px-3.5 py-3 text-sm leading-normal text-text">
            Summarize this week&apos;s payroll exceptions and draft a note to the finance lead.
          </div>
          <div className="flex max-w-[88%] flex-col gap-2.5 rounded-[14px_14px_14px_4px] border border-line bg-surface-2 p-3.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-accent">
              <SparkleIcon width={14} height={14} strokeWidth={2} />
              Grounded in 3 records
            </div>
            <div className="h-2 w-[92%] rounded bg-surface-3" />
            <div className="h-2 w-[78%] rounded bg-surface-3" />
            <div className="h-2 w-[85%] rounded bg-surface-3" />
            <div className="h-2 w-[40%] rounded bg-surface-3" />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(110px,1fr))] gap-2.5 font-mono">
            <div className="rounded-[10px] bg-surface-2 px-3 py-2.5">
              <div className="text-[11px] text-[#8c93a1]">model</div>
              <div className="text-[13px] text-text">primary → fallback</div>
            </div>
            <div className="rounded-[10px] bg-surface-2 px-3 py-2.5">
              <div className="text-[11px] text-[#8c93a1]">cost cap</div>
              <div className="text-[13px] text-text">per user / day</div>
            </div>
            <div className="rounded-[10px] bg-surface-2 px-3 py-2.5">
              <div className="text-[11px] text-[#8c93a1]">output</div>
              <div className="text-[13px] text-accent">checked ✓</div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-4 inline-flex flex-col gap-0.5 rounded-[14px] sm:absolute sm:-bottom-2.5 sm:left-4 sm:mt-0 bg-white px-[18px] py-3.5 text-ink shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
        <span className="font-display text-[22px] font-bold">500+</span>
        <span className="text-[13px] text-paper-muted">organizations on Maple HR, built with my team</span>
      </div>
    </div>
  );
}
