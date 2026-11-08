import { faqs } from "@/data/portfolio";
import { container, eyebrow, h2 } from "./ui";

/** Native <details> accordions: keyboard-accessible, and work without JS. */
export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className={`${container} flex flex-col gap-8 pb-24`}>
      <div className="flex max-w-[680px] flex-col gap-3">
        <span className={`${eyebrow} text-faint`}>FAQ</span>
        <h2 id="faq-heading" className={`${h2} text-strong`}>
          Questions clients ask before the call.
        </h2>
      </div>
      <div className="flex flex-col border-t border-line">
        {faqs.map((f) => (
          <details key={f.q} className="group border-b border-line">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-semibold text-strong [&::-webkit-details-marker]:hidden">
              {f.q}
              <span aria-hidden="true" className="text-2xl leading-none text-accent transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="max-w-[760px] pb-5 text-base leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
