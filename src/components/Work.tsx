import { bookingHref, directJobs, spark, supporting } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { container, eyebrow, h2 } from "./ui";

export function Work() {
  const sparkCells = spark.result ? [...spark.cells, { label: "Result", text: spark.result }] : spark.cells;

  return (
    <section id="work" aria-labelledby="work-heading" className="bg-paper text-paper-text">
      <div className={`${container} flex flex-col gap-12 py-24`}>
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex max-w-[660px] flex-col gap-3">
            <span className={`${eyebrow} text-paper-muted`}>Selected work</span>
            <h2 id="work-heading" className={h2}>
              AI tools and the production systems underneath them.
            </h2>
          </div>
          <a href={bookingHref} className="text-base font-semibold text-paper-text underline-offset-4 hover:underline">
            Ask for an architecture walkthrough →
          </a>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-6">
          {/* Spark */}
          <Reveal as="article" className="col-span-full flex min-w-0 flex-wrap overflow-hidden rounded-[22px] border border-paper-line bg-paper-card">
            <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-[18px] p-8 sm:p-10">
              <span className="self-start rounded-full bg-accent px-3 py-1.5 text-[13px] font-semibold text-accent-ink">{spark.tag}</span>
              <h3 className="font-display text-[34px] font-bold leading-[1.1]">{spark.title}</h3>
              <dl className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-6 gap-y-[18px]">
                {sparkCells.map((c) => (
                  <div key={c.label} className="flex flex-col gap-1.5">
                    <dt className="text-xs font-semibold uppercase tracking-[0.06em] text-paper-muted">{c.label}</dt>
                    <dd className="text-[15px] leading-relaxed text-paper-body">{c.text}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-sm text-paper-muted">{spark.stack}</p>
              <p className="text-[13px] text-paper-muted">{spark.note}</p>
            </div>
            <div aria-hidden="true" className="flex min-h-[280px] min-w-0 flex-[1_1_420px] items-center justify-center bg-paper-text p-8">
              <SparkVisual />
            </div>
          </Reveal>

          {/* Direct Jobs */}
          <Reveal as="article" className="col-span-full flex min-w-0 flex-wrap overflow-hidden rounded-[22px] bg-paper-text text-text">
            <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-[18px] p-8 sm:p-10">
              <span className="self-start rounded-full border border-line-strong px-3 py-1.5 text-[13px] font-semibold">{directJobs.tag}</span>
              <h3 className="font-display text-[34px] font-bold leading-[1.1] text-strong">{directJobs.title}</h3>
              <p className="text-[17px] leading-relaxed text-muted">{directJobs.text}</p>
              <p className="text-sm text-faint">{directJobs.stack}</p>
              {directJobs.demoUrl || directJobs.writeupUrl ? (
                <div className="flex flex-wrap gap-3">
                  {directJobs.demoUrl ? (
                    <a href={directJobs.demoUrl} className="inline-flex min-h-11 items-center rounded-[10px] bg-accent px-[18px] font-semibold text-accent-ink">
                      Watch 60-s demo
                    </a>
                  ) : null}
                  {directJobs.writeupUrl ? (
                    <a href={directJobs.writeupUrl} className="inline-flex min-h-11 items-center rounded-[10px] border border-line-strong px-[18px] font-semibold text-strong">
                      Read the write-up
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
            <div className="grid min-w-0 flex-[1_1_400px] grid-cols-[repeat(auto-fit,minmax(150px,1fr))] content-center gap-3 p-5 sm:p-10">
              {directJobs.stats.map((s) => (
                <div key={s.value} className="rounded-[14px] bg-surface-2 p-[18px]">
                  <div className="font-display text-[30px] font-bold text-strong">{s.value}</div>
                  <div className="mt-1 text-[13px] text-faint">{s.label}</div>
                </div>
              ))}
              <p className="col-span-full text-[13px] leading-normal text-faint">{directJobs.footnote}</p>
            </div>
          </Reveal>

          {supporting.map((p, i) => (
            <Reveal key={p.title} as="article" delay={i * 60} className="flex min-w-0 flex-col gap-3.5 rounded-[22px] border border-paper-line bg-paper-card p-8">
              <div className="font-display text-[44px] font-bold leading-none">{p.big}</div>
              <div className="text-sm text-paper-muted">{p.small}</div>
              <h3 className="mt-2 font-display text-[22px] font-bold">{p.title}</h3>
              <p className="text-base leading-relaxed text-paper-body">{p.text}</p>
              <p className="text-sm text-paper-muted">{p.stack}</p>
              {p.href ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="mt-auto text-[15px] font-semibold text-paper-text underline-offset-4 hover:underline">
                  Visit live site →
                </a>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Abstract picture of a writer → reviewer → checks pipeline (the real UI is under NDA). */
function SparkVisual() {
  const steps = [
    { label: "Request", sub: "from your workflow" },
    { label: "Writer model", sub: "primary → fallback" },
    { label: "Reviewer model", sub: "scores the draft" },
    { label: "Rule checks", sub: "facts, format, cost" },
  ];
  return (
    <ol className="flex w-full max-w-[440px] flex-col gap-2.5">
      {steps.map((s, i) => (
        <li key={s.label} className="flex items-center gap-3.5 rounded-xl border border-line bg-surface px-4 py-3">
          <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
          <span className="flex flex-col">
            <span className="text-[15px] font-semibold text-strong">{s.label}</span>
            <span className="text-[13px] text-faint">{s.sub}</span>
          </span>
        </li>
      ))}
      <li className="flex items-center justify-between rounded-xl bg-accent px-4 py-3 text-accent-ink">
        <span className="text-[15px] font-semibold">Shown to the user</span>
        <span className="font-mono text-xs">checked ✓</span>
      </li>
    </ol>
  );
}
