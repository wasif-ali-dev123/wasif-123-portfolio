"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

type Theme = "light" | "dark";

/**
 * Light/dark toggle. The initial theme is applied by an inline script in the
 * document head (see layout.tsx) to avoid a flash of the wrong theme before
 * hydration; this component only reflects and updates that state.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setTheme(current);
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    const root = document.documentElement;
    root.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* localStorage unavailable — fall back to session-only toggle. */
    }
  }

  // Keep server + first client render identical (icon-free) to avoid mismatch.
  const label = mounted
    ? theme === "dark"
      ? "Switch to light theme"
      : "Switch to dark theme"
    : "Toggle theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-strong bg-surface text-muted transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      {mounted && theme === "dark" ? <SunIcon /> : <MoonIcon />}
      <span className="sr-only">{label}</span>
    </button>
  );
}
