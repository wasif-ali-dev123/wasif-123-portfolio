/** Shared class strings so buttons/links look consistent across sections. */

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none";

export const btnPrimary = `${btnBase} bg-accent text-accent-contrast hover:bg-accent-strong`;

export const btnSecondary = `${btnBase} border border-border-strong bg-surface text-text hover:border-accent hover:text-accent`;

export const btnGhost = `${btnBase} text-muted hover:text-text`;

/** A pill used for technology tags. */
export const tag =
  "inline-flex items-center rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-medium text-muted";

/** Card surface used across projects, skills, and architecture cards. */
export const card =
  "rounded-2xl border border-border bg-surface p-6 transition-colors duration-200";
