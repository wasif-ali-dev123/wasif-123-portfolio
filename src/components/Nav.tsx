"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";
import { MenuIcon, CloseIcon } from "./icons";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70"
          : "border-transparent bg-bg/0"
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="rounded-md font-serif text-lg font-semibold tracking-tight text-text transition-colors hover:text-accent"
        >
          {profile.name}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop links — amber underline treatment on hover/focus */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-sm py-1 text-sm font-medium text-muted transition-colors hover:text-text"
            >
              {item.label}
              <span
                aria-hidden="true"
                className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-200 group-hover:w-full"
              />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-strong bg-surface text-text md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <div id="mobile-menu" className="border-t border-border bg-bg md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-muted transition-colors hover:bg-surface-2 hover:text-text"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
