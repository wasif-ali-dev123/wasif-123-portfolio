"use client";

import { useState } from "react";
import { social } from "@/data/portfolio";
import { MailIcon } from "./icons";

/** Copies the email address; works on machines with no mail app set up. */
export function CopyEmail({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(social.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt("Copy my email address:", social.email);
    }
  }
  return (
    <button type="button" onClick={copy} className={className} aria-live="polite">
      <MailIcon width={18} height={18} />
      {copied ? "Email copied ✓" : social.email}
    </button>
  );
}
