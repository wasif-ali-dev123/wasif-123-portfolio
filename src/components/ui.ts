/** Shared class strings so buttons and section headings look the same everywhere. */

export const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";

const btnBase =
  "inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-xl px-6 text-base font-semibold transition-colors duration-200";

export const btnPrimary = `${btnBase} bg-accent text-accent-ink hover:bg-[#d6f77f]`;

export const btnOutline = `${btnBase} border border-line-strong text-strong hover:border-soft`;

export const eyebrow = "text-sm font-semibold uppercase tracking-[0.08em]";

export const h2 = "font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em]";
