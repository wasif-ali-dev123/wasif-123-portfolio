import { contact, social } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { btnPrimary, btnSecondary } from "./ui";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title={contact.heading}>
      <Reveal>
        <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
          <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{contact.message}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${social.email}`} className={btnPrimary}>
              <MailIcon width={16} height={16} />
              Email me
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className={btnSecondary}
              aria-label="GitHub profile (opens in a new tab)"
            >
              <GitHubIcon width={16} height={16} />
              GitHub
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={btnSecondary}
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <LinkedInIcon width={16} height={16} />
              LinkedIn
            </a>
          </div>

          <div className="mt-8 grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
            <p className="text-sm text-muted">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Email</span>
              <br />
              <a href={`mailto:${social.email}`} className="font-medium text-accent hover:underline">
                {social.email}
              </a>
            </p>
            <p className="text-sm text-muted">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Phone</span>
              <br />
              <a
                href={`tel:${social.phone.replace(/\s+/g, "")}`}
                className="font-medium text-accent hover:underline"
              >
                {social.phone}
              </a>
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
