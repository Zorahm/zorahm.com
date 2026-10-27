"use client";

import { getContacts, getUi, type Lang } from "@/content";
import { ContributionGraph } from "./ContributionGraph";
import { ArrowUpRightIcon } from "./icons";
import eco from "./eco.module.css";

/**
 * Closing section of the content pages: one large inverted card that leads to
 * GitHub. The words sit on top, the owner's contribution calendar in dots runs
 * the full width under them. The other contacts live in the footer.
 */
export function GitHubCard({ lang }: { lang: Lang }) {
  const text = getUi(lang).shell.github;
  const href = getContacts(lang).find((contact) => contact.label === "GitHub")!.href;

  return (
    <section className={eco.section}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${eco.inverted} ${eco.github}`}
      >
        <div className={eco.githubHead}>
          <div className={eco.githubTitle}>
            <p className={eco.label}>{text.label}</p>
            <h2 className={eco.displayL}>{text.heading}</h2>
          </div>
          <div className={eco.githubAside}>
            <p className={`${eco.body} ${eco.muted}`}>{text.line}</p>
            <span className={`${eco.primary} ${eco.githubButton}`}>
              {text.open}
              <ArrowUpRightIcon />
            </span>
          </div>
        </div>
        <ContributionGraph lang={lang} />
      </a>
    </section>
  );
}
