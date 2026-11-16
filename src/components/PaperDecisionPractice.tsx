"use client";

import type { CSSProperties, MouseEvent } from "react";
import type { getPaperDecisionPractice } from "@/content/paperDecision";
import { DotPlate } from "./eco/DotPlate";
import { ArrowRightIcon, ArrowUpRightIcon, CheckIcon } from "./eco/icons";
import { PaperTabs } from "./PaperDecisionControls";
import styles from "./PaperDecisionPractice.module.css";

type Practice = ReturnType<typeof getPaperDecisionPractice>;

function PracticePreview({ call, preview }: { call: Practice["calls"][number]; preview: Practice["preview"] }) {
  const command = (
    <code className={styles.previewCommand}><span aria-hidden="true">$ </span>{call.command}</code>
  );

  return (
    <div className={styles.preview}>
      <h3 className={styles.previewHeading}>{preview.title}</h3>
      <div className={styles.previewStage} data-allowed={call.allowed}>
        {call.allowed ? (
          <details className={`${styles.previewCard} ${styles.runPreview}`} open>
            <summary className={styles.runSummary}><CheckIcon />{preview.completed}</summary>
            <div className={styles.previewBody}>
              {command}
              <pre className={styles.previewOutput} lang="en">{preview.buildOutput}</pre>
            </div>
          </details>
        ) : (
          <div className={`${styles.previewCard} ${styles.previewBody}`}>
            <p className={styles.confirmTitle}>{preview.confirm}</p>
            {command}
            <div className={styles.previewActions}>
              <span>{preview.deny}</span>
              <span>{preview.permit}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function revealPractice(event: MouseEvent<HTMLElement>) {
  const disclosure = event.currentTarget.parentElement;
  if (!(disclosure instanceof HTMLDetailsElement) || disclosure.open) return;

  requestAnimationFrame(() => {
    if (disclosure.open && disclosure.getBoundingClientRect().bottom > window.innerHeight) {
      disclosure.scrollIntoView({ block: "start" });
    }
  });
}

export function PaperDecisionPractice({ title, practice }: {
  title: string;
  practice: Practice;
}) {
  return (
    <details className={styles.disclosure}>
      <summary className={styles.trigger} onClick={revealPractice}>
        {practice.jump} <ArrowRightIcon />
      </summary>
      <section id="practice" aria-labelledby="practice-heading" className={styles.practice}>
        <div className={styles.scene}>
          <header className={styles.header}>
            <div>
              <h2 id="practice-heading" className={styles.title}>{title}</h2>
              <p className={styles.lead}>{practice.lead}</p>
            </div>
            <div className={styles.logo} aria-hidden="true">
              <DotPlate shape="yaca" cols={22} rows={18} accent={0.75} bench={false} />
            </div>
          </header>

          <PaperTabs
            id="practice-example"
            label={practice.scenarios}
            tabs={practice.calls.map((call) => ({
              name: call.task,
              panel: (
                <>
                  <ol className={styles.steps} data-allowed={call.allowed}>
                    <li className={styles.step}>
                      <h3>{practice.command}</h3>
                      <p className={styles.command}><code><span aria-hidden="true">$ </span>{call.command}</code></p>
                      <p className={styles.context}>{practice.question}</p>
                    </li>
                    <li className={styles.step}>
                      <h3>{practice.response}</h3>
                      <p className={styles.assessment}>{call.assessment}</p>
                      <p className={styles.score}>{call.scorePercent}</p>
                      <p className={styles.context}>{practice.scoreMeaning}</p>
                      <details className={styles.raw}>
                        <summary>{practice.rawResponse}</summary>
                        <code>{'{ "type": "noul", "noul": ' + call.scoreValue + " }"}</code>
                      </details>
                    </li>
                    <li className={styles.step}>
                      <h3>{practice.action}</h3>
                      <p className={styles.outcome}>{call.outcome}</p>
                      <div
                        className={styles.scale}
                        style={{
                          "--score": (call.score * 100) + "%",
                          "--threshold": (practice.threshold * 100) + "%",
                        } as CSSProperties}
                        aria-hidden="true"
                      >
                        <div className={styles.track} />
                        <div className={styles.ticks}>
                          <span>0%</span>
                          <span>{practice.thresholdPercent}</span>
                          <span>100%</span>
                        </div>
                      </div>
                      <p className={styles.context}>{practice.rule}</p>
                    </li>
                  </ol>
                  <PracticePreview call={call} preview={practice.preview} />
                </>
              ),
            }))}
          />
        </div>
        <p className={styles.source}>
          {practice.note} {practice.model}. <a href={practice.source} target="_blank" rel="noreferrer">{practice.sourceLabel} <ArrowUpRightIcon /></a>
        </p>
      </section>
    </details>
  );
}
