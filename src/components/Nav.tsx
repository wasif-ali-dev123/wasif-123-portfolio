"use client";

import { useEffect, useState } from "react";
import { bookingHref, navItems } from "@/data/portfolio";
import { CloseIcon, MenuIcon } from "./icons";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-line bg-ink/85 backdrop-blur" : "border-transparent"
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-accent font-display text-base font-bold text-accent-ink">
            WA
          </span>
          <span className="font-display text-lg font-semibold text-strong">Wasif Ali</span>
        </a>

        <div className="hidden items-center gap-7 text-[15px] md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-muted transition-colors hover:text-strong">
              {item.label}
            </a>
          ))}
          <a
            href={bookingHref}
            className="rounded-full bg-strong px-[18px] py-[11px] font-semibold text-ink transition-colors hover:bg-accent"
          >
            Book a call
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a href={bookingHref} className="rounded-full bg-strong px-4 py-2.5 text-sm font-semibold text-ink">
            Book a call
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line-strong text-strong"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-line bg-ink md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-muted hover:bg-surface hover:text-strong"
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
