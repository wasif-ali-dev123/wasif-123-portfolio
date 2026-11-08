"use client";

import { useState, type FormEvent } from "react";
import { links, nextSteps, social } from "@/data/portfolio";
import { container } from "./ui";

/**
 * The site is static (GitHub Pages), so the form composes an email in the
 * visitor's mail app, then opens the booking page when one is set.
 */
export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = `Project enquiry from ${name || "your site"}`;
    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;
    if (links.booking) window.open(links.booking, "_blank", "noopener");
    window.location.href = `mailto:${social.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const field =
    "min-h-12 rounded-[10px] border border-line-strong bg-surface px-3.5 text-base text-strong placeholder:text-faint focus:border-soft";

  return (
    <section id="contact" aria-labelledby="contact-heading" className={`${container} pb-16`}>
      <div className="flex flex-wrap items-center justify-between gap-8 rounded-[28px] bg-accent p-[clamp(1.5rem,6vw,4.5rem)] text-accent-ink">
        <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-6">
          <h2 id="contact-heading" className="font-display text-[clamp(2rem,4.4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em]">
            Have an AI feature to build or ship?
          </h2>
          <ol className="flex flex-col gap-3.5">
            {nextSteps.map((s, i) => (
              <li key={s.title} className="flex items-baseline gap-3.5">
                <span className="font-mono text-sm font-medium">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[17px] leading-normal text-[#1f2430]">
                  <strong>{s.title}</strong> {s.text}
                </span>
              </li>
            ))}
          </ol>
          <p className="text-[15px] text-[#1f2430]">
            Prefer a quick call?{" "}
            <a href={`https://wa.me/${social.whatsapp}`} className="font-semibold text-ink underline underline-offset-4">
              WhatsApp {social.phone}
            </a>
          </p>
          <p className="text-[15px] text-[#1f2430]">
            Hiring for a full-time role?{" "}
            <a
              href={links.resume ?? `mailto:${social.email}?subject=${encodeURIComponent("Resume and availability")}`}
              className="font-semibold text-ink underline underline-offset-4"
            >
              Get my resume and availability →
            </a>
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          aria-label="Start a project"
          className="flex min-w-0 flex-[1_1_360px] flex-col gap-4 rounded-[20px] bg-ink p-7 text-text"
        >
          <label className="flex flex-col gap-1.5 text-sm text-soft">
            Your name
            <input required type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={field} />
          </label>
          <label className="flex flex-col gap-1.5 text-sm text-soft">
            Work email
            <input required type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={field} />
          </label>
          <label className="flex flex-col gap-1.5 text-sm text-soft">
            What are you building?
            <textarea required rows={3} value={message} onChange={(e) => setMessage(e.target.value)} className={`${field} resize-y py-3`} />
          </label>
          <button
            type="submit"
            className="min-h-[52px] rounded-xl bg-accent text-[17px] font-semibold text-accent-ink transition-colors hover:bg-[#d6f77f]"
          >
            {links.booking ? "Send, and pick a call time" : "Send"}
          </button>
          <p className="text-center text-[13px] text-faint">
            On call 7 days a week · replies within a few hours · or email{" "}
            <a href={`mailto:${social.email}`} className="text-text underline underline-offset-4">
              {social.email}
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
