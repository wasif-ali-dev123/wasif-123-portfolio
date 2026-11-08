"use client";

import { DownloadIcon } from "@/components/icons";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#111827] px-4 text-sm font-semibold text-white"
    >
      <DownloadIcon width={16} height={16} />
      Save as PDF
    </button>
  );
}
