import type { Metadata } from "next";
import { about, achievements, directJobs, education, experience, profile, projects, skillGroups, social } from "@/data/portfolio";
import { siteUrl, withBasePath } from "@/config/site";
import { PrintButton } from "./PrintButton";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Wasif Ali, Senior Full-Stack Engineer and AI Product Engineer: experience, projects, skills and education.",
  alternates: { canonical: "/resume/" },
};

/**
 * A plain, single-column, ATS-friendly resume generated from the same data as
 * the home page, so the two never disagree. "Save as PDF" uses the browser's
 * print dialog; print styles live in globals.css (.resume).
 */
export default function ResumePage() {
  return (
    <div className="resume min-h-screen bg-white text-[#111827]">
      <div className="resume-bar mx-auto flex max-w-[820px] flex-wrap items-center justify-between gap-3 px-6 pt-6">
        <a href={withBasePath("/")} className="text-sm font-semibold text-[#111827] underline underline-offset-4">
          ← Back to portfolio
        </a>
        <PrintButton />
      </div>

      <main id="main" className="mx-auto max-w-[820px] px-6 py-8 text-[14.5px] leading-relaxed">
        <header className="border-b border-[#d1d5db] pb-4">
          <h1 className="font-display text-[32px] font-bold leading-tight">{profile.name}</h1>
          <p className="mt-1 text-[17px] font-semibold">Senior Full-Stack Engineer · AI Product Engineer</p>
          <p className="mt-2 text-[14px] text-[#374151]">
            {about.location} ·{" "}
            <a href={`mailto:${social.email}`}>{social.email}</a> ·{" "}
            <a href={social.linkedin}>linkedin.com/in/wasif-ali-dev</a> ·{" "}
            <a href={social.github}>github.com/wasif-ali-dev123</a> ·{" "}
            <a href={siteUrl}>Portfolio</a>
          </p>
        </header>

        <section className="mt-5">
          <h2 className="resume-h2">Summary</h2>
          <p>{about.paragraphs[0]}</p>
          <p className="mt-2">{profile.intro.replace(/^I'm Wasif, a senior full-stack engineer \(6\+ years\)\. /, "")}</p>
        </section>

        <section className="mt-5">
          <h2 className="resume-h2">Experience</h2>
          {experience.map((e) => (
            <div key={e.company} className="resume-block mt-3">
              <div className="flex flex-wrap justify-between gap-x-4">
                <h3 className="font-semibold">
                  {e.role} — {e.company}
                </h3>
                <span className="text-[#374151]">{e.period}</span>
              </div>
              <ul className="mt-1 list-disc pl-5">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-5">
          <h2 className="resume-h2">Notable projects</h2>
          {projects.map((p) => (
            <div key={p.id} className="resume-block mt-3">
              <h3 className="font-semibold">
                {p.name}
                {p.demoUrl ? <span className="font-normal text-[#374151]"> · {p.demoUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</span> : null}
              </h3>
              <p>{p.context}</p>
              <p>
                <span className="font-semibold">Outcome:</span> {p.outcome}
              </p>
              <p className="text-[#374151]">{p.tags.join(", ")}</p>
            </div>
          ))}
          <div className="resume-block mt-3">
            <h3 className="font-semibold">{directJobs.title} (own product)</h3>
            <p>{directJobs.text}</p>
            <p className="text-[#374151]">{directJobs.stats.map((s) => `${s.value} ${s.label}`).join(" · ")}</p>
          </div>
        </section>

        <section className="mt-5">
          <h2 className="resume-h2">Skills</h2>
          <dl className="mt-2 flex flex-col gap-1">
            {skillGroups.map((g) => (
              <div key={g.category}>
                <dt className="inline font-semibold">{g.category}: </dt>
                <dd className="inline">{g.skills.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-5">
          <h2 className="resume-h2">Education &amp; achievements</h2>
          {education.map((e) => (
            <p key={e.degree} className="mt-2">
              <span className="font-semibold">{e.degree}</span>, {e.school} ({e.period})
            </p>
          ))}
          <ul className="mt-1 list-disc pl-5">
            {achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
