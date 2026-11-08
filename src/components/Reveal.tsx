"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms for grouped items. */
  delay?: number;
  as?: "div" | "li" | "article" | "section";
}

/**
 * Fades content up when it scrolls into view. Progressive enhancement:
 * without JS the content is visible (see .reveal fallback), and the animation
 * is fully disabled under prefers-reduced-motion via CSS.
 */
export function Reveal({ children, className = "", delay = 0, as = "div", id }: RevealProps & { id?: string }) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);

    // Failsafe: if the observer never delivers a callback (background tabs,
    // throttled/headless renderers), reveal anyway so content is never stuck
    // hidden. Also covers elements already on screen at load.
    const failsafe = window.setTimeout(() => setVisible(true), 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      id={id}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
