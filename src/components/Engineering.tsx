import { aiIntro, aiWorkflow, architectureCards } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { container, eyebrow, h2 } from "./ui";

const primary = [
  { title: "Client", subtitle: "React / Next.js UI" },
  { title: "API / Services", subtitle: "Node microservices, RBAC & real-time", accent: true },
  { title: "Data Layer", subtitle: "PostgreSQL + Redis cache" },
];

const optional = ["LLM providers + fallbacks", "Background jobs / queues", "Third-party integrations", "Object storage (S3)", "WebSockets / real-time", "Observability"];

/** AI-assisted engineering: daily workflow, building blocks and a reference architecture. */
export function Engineering() {
  return (
    <section id="engineering" aria-labelledby="engineering-heading" className="border-y border-line bg-ink-2">
      <div className={`${container} flex flex-col gap-14 py-24`}>
        <Reveal className="flex max-w-[760px] flex-col gap-4">
          <span className={`${eyebrow} text-faint`}>AI-assisted engineering</span>
          <h2 id="engineering-heading" className={`${h2} text-strong`}>
            {aiIntro.lead}
          </h2>
          <p className="text-[17px] leading-relaxed text-muted">{aiIntro.body}</p>
        </Reveal>

        <div className="flex flex-col gap-6">
          <h3 className="font-display text-[22px] font-bold text-strong">How I work with AI day to day</h3>
          <ol className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-4">
            {aiWorkflow.map((s, i) => (
              <Reveal as="li" key={s.title} delay={(i % 3) * 60} className="flex gap-4 rounded-[14px] border border-line bg-surface p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent font-mono text-sm font-medium text-accent-ink">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-strong">{s.title}</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="font-display text-[22px] font-bold text-strong">Architecture building blocks</h3>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-4">
            {architectureCards.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 60} className="rounded-[14px] border border-line bg-surface p-5">
                <h4 className="font-semibold text-strong">{c.title}</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{c.description}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="font-display text-[22px] font-bold text-strong">Reference architecture</h3>
          <Reveal>
            <figure className="m-0 rounded-[18px] border border-line bg-surface p-6 sm:p-8">
              <figcaption className="mb-6 text-sm text-faint">
                Representative architecture; not every project uses all of these components.
              </figcaption>
              <p className="sr-only">
                Primary request flow: client to the API and service layer to the data layer. The service layer optionally
                connects to LLM providers with fallbacks, background jobs and queues, third-party integrations, object
                storage, real-time WebSocket channels and observability tooling.
              </p>
              <div aria-hidden="true" className="flex flex-col gap-3 md:flex-row md:items-stretch">
                {primary.map((n, i) => (
                  <div key={n.title} className="flex flex-col gap-3 md:flex-1 md:flex-row md:items-center">
                    <div className={`flex-1 rounded-xl border p-4 text-center ${n.accent ? "border-accent bg-accent/10" : "border-line bg-surface-2"}`}>
                      <p className="font-semibold text-strong">{n.title}</p>
                      <p className="mt-1 text-[13px] text-faint">{n.subtitle}</p>
                    </div>
                    {i < primary.length - 1 ? (
                      <span className="text-center text-faint">
                        <span className="hidden md:inline">→</span>
                        <span className="md:hidden">↓</span>
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
              <div aria-hidden="true" className="mt-6 border-t border-dashed border-line-strong pt-6">
                <p className="mb-3 text-center text-xs uppercase tracking-[0.12em] text-faint">Optional connections from the service layer</p>
                <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
                  {optional.map((o) => (
                    <li key={o} className="rounded-lg border border-dashed border-line-strong px-3 py-2 text-center text-xs font-medium text-soft">
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
