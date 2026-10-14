"use client";

import Link from "next/link";
import { getUi, langPath, noticePath, otherLang, type Lang } from "@/content";
import { DotPlate } from "./eco/DotPlate";
import { EcoShell } from "./eco/EcoShell";
import { ArrowLeftIcon, ArrowUpRightIcon } from "./eco/icons";
import eco from "./eco/eco.module.css";
import styles from "./NoticePage.module.css";

/** The provider's own incident page; the same address for both languages */
const INCIDENT_URL = "https://status.yandex.cloud/ru/incidents/2136";

/**
 * The /notice page: a temporary note that ZorahM services may be unstable
 * because of outages at Yandex. Delete the routes, this component and its
 * strings once the incident is over.
 */
export function NoticePage({ lang }: { lang: Lang }) {
  const page = getUi(lang).notice;
  const facts = [page.facts.status, page.facts.cause, page.facts.scope, page.facts.page];

  return (
    <EcoShell lang={lang} otherHref={noticePath(otherLang(lang))}>
      <section className={`${eco.section} ${styles.hero}`}>
        <div className={styles.heroText}>
          <Link href={langPath(lang)} className={styles.back}>
            <ArrowLeftIcon />
            {page.home}
          </Link>

          <p className={`${eco.label} ${styles.status}`}>
            <i aria-hidden="true" />
            {page.eyebrow}
          </p>
          <h1 className={`${eco.displayXl} ${styles.title}`}>{page.heading}</h1>

          {page.lead.map((text, index) => (
            <p key={index} className={`${eco.body} ${index > 0 ? eco.muted : ""}`}>
              {text}
            </p>
          ))}

          <dl className={styles.facts}>
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className={eco.label}>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className={eco.actions}>
            <a
              href={INCIDENT_URL}
              className={eco.secondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              {page.source}
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>

        <div className={styles.heroPlate}>
          <DotPlate shape="network" accent={0.5} cols={30} rows={20} lens arrive />
        </div>
      </section>
    </EcoShell>
  );
}
