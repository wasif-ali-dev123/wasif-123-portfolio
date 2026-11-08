"use client";

import { useState, type FormEvent } from "react";
import { links, nextSteps, social, whatsappHref } from "@/data/portfolio";
import { container } from "./ui";
import { MailIcon, PhoneIcon } from "./icons";

/**
 * The site is static (GitHub Pages), so there is no server to send the form.
 * "Send on WhatsApp" opens a chat with the message filled in (works in any
 * browser, via WhatsApp Web on desktop). "Send by email" opens the mail app,
 * and since that does nothing when no mail app is set up, the form also shows
 * the address with a copy button.
 */
export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"" | "email" | "copied">("");

  const text = () => `Hi Wasif, I'm ${name}${email ? ` (${email})` : ""}.\n\n${message}`;

  function sendWhatsApp(e: FormEvent) {
    e.preventDefault();
    window.open(whatsappHref(text()), "_blank", "noopener");
    if (links.booking) window.open(links.booking, "_blank", "noopener");
  }

  function sendEmail() {
    const subject = `Project enquiry from ${name || "your site"}`;
    window.location.href = `mailto:${social.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text())}`;
    setStatus("email");
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(social.email);
      setStatus("copied");
    } catch {
      setStatus("email");
    }
  }

  const field =
    "min-h-12 rounded-[10px] border border-line-strong bg-surface px-3.5 text-base text-strong placeholder:text-faint focus:border-soft";

  return (
    <section id="contact" aria-labelledby="contact-heading" className={`${container} pb-16 pt-8`}>
      <div className="flex flex-wrap items-center justify-between gap-8 rounded-[28px] bg-accent p-[clamp(1.5rem,6vw,4.5rem)] text-accent-ink">
        <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-6">
          <h2 id="contact-heading" className="font-display text-[clamp(2rem,4.4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em]">
            Book a 20-min call
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
          <div className="flex flex-wrap gap-3">
            {links.booking ? (
              <a href={links.booking} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[52px] items-center rounded-xl bg-ink px-6 font-semibold text-white">
                Pick a time
              </a>
            ) : null}
            <a
              href={whatsappHref("Hi Wasif, I'd like to book a 20-min call.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center gap-2.5 rounded-xl bg-ink px-6 font-semibold text-white"
            >
              <PhoneIcon width={18} height={18} />
              WhatsApp {social.phone}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex min-h-[52px] items-center gap-2.5 rounded-xl border-2 border-ink px-5 font-semibold text-ink"
            >
              <MailIcon width={18} height={18} />
              {status === "copied" ? "Email copied ✓" : social.email}
            </button>
          </div>
          <p className="text-[15px] text-[#1f2430]">
            Hiring for a full-time role?{" "}
            {links.resume ? (
              <a href={links.resume} className="font-semibold text-ink underline underline-offset-4">
                Get my resume →
              </a>
            ) : (
              <>Message me on WhatsApp or email for my resume and availability.</>
            )}
          </p>
        </div>

        <form onSubmit={sendWhatsApp} aria-label="Send a message" className="flex min-w-0 flex-[1_1_360px] flex-col gap-4 rounded-[20px] bg-ink p-7 text-text">
          <p className="font-display text-xl font-bold text-strong">Or tell me what you&apos;re building</p>
          <label className="flex flex-col gap-1.5 text-sm text-soft">
            Your name
            <input required type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={field} />
          </label>
          <label className="flex flex-col gap-1.5 text-sm text-soft">
            Your email
            <input type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={field} />
          </label>
          <label className="flex flex-col gap-1.5 text-sm text-soft">
            What are you building?
            <textarea required rows={3} value={message} onChange={(e) => setMessage(e.target.value)} className={`${field} resize-y py-3`} />
          </label>
          <button type="submit" className="min-h-[52px] rounded-xl bg-accent text-[17px] font-semibold text-accent-ink transition-colors hover:bg-[#d6f77f]">
            Send on WhatsApp
          </button>
          <button
            type="button"
            onClick={(e) => {
              const form = e.currentTarget.form;
              if (form && !form.reportValidity()) return;
              sendEmail();
            }}
            className="min-h-12 rounded-xl border border-line-strong text-base font-semibold text-strong hover:border-soft"
          >
            Send by email
          </button>
          <p role="status" className="text-center text-[13px] text-faint">
            {status === "email" ? (
              <>
                If no email app opened, write to <span className="text-strong">{social.email}</span>.
              </>
            ) : (
              "On call 7 days a week · replies within a few hours"
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
