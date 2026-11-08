import { atAGlance, links, social } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { container } from "./ui";
import { CopyEmail } from "./CopyEmail";
import { DownloadIcon, GitHubIcon, LinkedInIcon } from "./icons";

/** What a recruiter checks first: role, work type, time zone, stack, links. */
export function AtAGlance() {
  const rows = atAGlance.filter((r) => r.value);
  return (
    <section aria-labelledby="glance-heading" className={`${container} pb-[72px]`}>
      <Reveal className="flex flex-wrap gap-8 rounded-[18px] border border-line bg-surface p-6 sm:p-8">
        <div className="min-w-0 flex-[2_1_460px]">
          <h2 id="glance-heading" className="text-sm font-semibold uppercase tracking-[0.08em] text-accent">
            For recruiters: at a glance
          </h2>
          <dl className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-x-8 gap-y-4">
            {rows.map((r) => (
              <div key={r.label} className="flex flex-col gap-1">
                <dt className="text-xs uppercase tracking-[0.08em] text-faint">{r.label}</dt>
                <dd className="text-[15px] leading-snug text-strong">{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex min-w-0 flex-[1_1_240px] flex-col gap-2.5">
          {links.resume ? (
            <a href={links.resume} className="inline-flex min-h-12 items-center gap-2.5 rounded-xl bg-strong px-5 font-semibold text-ink hover:bg-accent">
              <DownloadIcon width={18} height={18} />
              Resume (view or save PDF)
            </a>
          ) : null}
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2.5 rounded-xl border border-line-strong px-5 font-semibold text-strong hover:border-soft">
            <LinkedInIcon width={18} height={18} />
            LinkedIn
          </a>
          <a href={social.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2.5 rounded-xl border border-line-strong px-5 font-semibold text-strong hover:border-soft">
            <GitHubIcon width={18} height={18} />
            GitHub
          </a>
          <CopyEmail className="inline-flex min-h-12 items-center gap-2.5 rounded-xl border border-line-strong px-5 font-semibold text-strong hover:border-soft" />
        </div>
      </Reveal>
    </section>
  );
}
