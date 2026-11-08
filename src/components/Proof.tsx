import { metrics, verify } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { container } from "./ui";

/** Results strip, then links people can check for themselves. */
export function Proof() {
  return (
    <>
      <section aria-label="Results" className={`${container} pb-[72px] pt-12`}>
        <Reveal>
          <dl className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-px overflow-hidden rounded-[18px] border border-line bg-line">
            {metrics.map((m) => (
              <div key={m.value} className="flex flex-col-reverse bg-ink-2 p-7">
                <dt className="mt-1.5 text-sm text-faint">{m.label}</dt>
                <dd className="font-display text-[40px] font-bold leading-tight text-strong">{m.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section aria-labelledby="verify-heading" className={`${container} flex flex-col gap-5 pb-[72px]`}>
        <h2 id="verify-heading" className="text-sm font-semibold uppercase tracking-[0.08em] text-faint">
          Don&apos;t take my word for it: check it
        </h2>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3.5">
          {verify.map((v) => {
            const body = (
              <>
                <span className="text-xs text-faint">{v.kind}</span>
                <span className="font-semibold text-strong">
                  {v.title}
                  {v.href ? " ↗" : ""}
                </span>
                <span className="text-[13px] text-faint">{v.note}</span>
              </>
            );
            const cls = "flex h-full flex-col gap-1.5 rounded-[14px] border border-line bg-ink-2 p-5";
            return (
              <li key={v.title}>
                {v.href ? (
                  <a href={v.href} target="_blank" rel="noopener noreferrer" className={`${cls} transition-colors hover:border-line-strong`}>
                    {body}
                  </a>
                ) : (
                  <div className={cls}>{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
