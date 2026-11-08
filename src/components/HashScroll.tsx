"use client";

import { useEffect } from "react";

/**
 * Opening the site at a section link (e.g. /#maple-hr from a proposal) should
 * land on that section. Next.js resets the scroll on first load, so jump to
 * the target once the page has hydrated, and again after fonts settle.
 */
export function HashScroll() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const jump = () => document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
    const raf = requestAnimationFrame(jump);
    const late = window.setTimeout(jump, 400);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(late);
    };
  }, []);
  return null;
}
