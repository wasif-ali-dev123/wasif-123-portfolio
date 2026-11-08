"use client";

import { useEffect, useState } from "react";
import { bookingHref, whatsappHref } from "@/data/portfolio";
import { PhoneIcon } from "./icons";

/**
 * Phones only: once the hero is scrolled past, keep "Book a call" and
 * WhatsApp at the bottom of the screen. Hidden near the contact section,
 * where the same actions are already on screen.
 */
export function MobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      const nearContact = contact ? contact.getBoundingClientRect().top < window.innerHeight : false;
      setShow(window.scrollY > 600 && !nearContact);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/95 px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 backdrop-blur transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <div className="mx-auto flex max-w-md gap-2.5">
        <a href={bookingHref} tabIndex={show ? 0 : -1} className="inline-flex min-h-12 flex-1 items-center justify-center rounded-xl bg-accent font-semibold text-accent-ink">
          Book a 20-min call
        </a>
        <a
          href={whatsappHref("Hi Wasif, I found your portfolio and would like to talk.")}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={show ? 0 : -1}
          aria-label="Message on WhatsApp"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-line-strong px-4 font-semibold text-strong"
        >
          <PhoneIcon width={18} height={18} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
