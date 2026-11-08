"use client";

import { useState } from "react";
import { siteUrl } from "@/config/site";

/** Copies a direct link to one case study, to paste into proposals and messages. */
export function CopyLink({ hash }: { hash: string }) {
  const [copied, setCopied] = useState(false);
  const url = `${siteUrl}/#${hash}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt("Copy the link to this case study:", url);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="inline-flex min-h-11 items-center rounded-[10px] border border-paper-line px-4 text-[15px] font-semibold text-paper-text hover:border-paper-text"
    >
      {copied ? "Link copied ✓" : "Copy link"}
    </button>
  );
}
