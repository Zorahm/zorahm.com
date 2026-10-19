"use client";

import Link from "next/link";
import { Fragment, useState } from "react";
import {
  PAPER_DECISION_DATE,
  PAPER_DECISION_IMAGES,
  PAPER_DECISION_PRICE_CALLS,
  PAPER_DECISION_SOURCES,
  PAPER_DECISION_SPEED,
  getPaperDecision,
  otherLang,
  paperDecisionPath,
  paperPath,
  priceOfMillionCalls,
  type Lang,
  type PaperDecisionStrings,
} from "@/content";
import { DotPlate } from "./eco/DotPlate";
import { EcoShell } from "./eco/EcoShell";
import { ImageViewer } from "./eco/ImageViewer";
import { ArrowLeftIcon, ArrowUpRightIcon } from "./eco/icons";
import eco from "./eco/eco.module.css";
import styles from "./PaperDecisionPage.module.css";

const twoDigits = (n: number) => String(n).padStart(2, "0");

/** Paragraph text with `backtick` spans set as code */
function Inline({ text }: { text: string }) {
  return text.split("`").map((part, index) =>
    index % 2 === 1 ? (
      <code key={index} className={eco.chipCode}>
        {part}
      </code>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    ),
  );
}

function Paragraphs({ items, muted = false }: { items: string[]; muted?: boolean }) {
  return items.map((text, index) => (
    <p key={index} className={muted ? styles.textMuted : styles.text}>
      <Inline text={text} />
    </p>
  ));
}

/**
 * A row of tabs that switches the panel below it. Follows the usual pattern:
 * arrows, Home and End move between the tabs, and only the chosen one is in
 * the tab order. `name` keeps the ids of two switchers on one page apart.
 */
function Tabs({
  name,
  label,
  items,
  active,
  onChange,
}: {
  name: string;
  label: string;
  items: string[];
  active: number;
  onChange: (index: number) => void;
}) {
  const move = (event: React.KeyboardEvent, index: number) => {
    const last = items.length - 1;
    let next: number | null = null;
    if (event.key === "ArrowRight") next = index === last ? 0 : index + 1;
    if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;
    if (next === null) return;
    event.preventDefault();
    onChange(next);
    document.getElementById(`${name}-tab-${next}`)?.focus();
  };

  return (
    <div className={styles.tabs} role="tablist" aria-label={label}>
      {items.map((item, index) => (
        <button
          key={item}
          type="button"
          role="tab"
          id={`${name}-tab-${index}`}
          aria-selected={index === active}
          aria-controls={`${name}-panel`}
          tabIndex={index === active ? 0 : -1}
          className={styles.tab}
          onClick={() => onChange(index)}
          onKeyDown={(event) => move(event, index)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

/** One call drawn as a slip, with a switch between several examples */
function CallExamples({ paper }: { paper: PaperDecisionStrings }) {
  const [active, setActive] = useState(0);
  const { examples } = paper;
  const example = examples[active];

  return (
    <figure className={styles.call}>
      <figcaption className={styles.callHead}>
        <span>{paper.illustrationLabel}</span>
        <span className={styles.callNote}>{paper.illustrationNote}</span>
      </figcaption>

      <Tabs
        name="call"
        label={paper.illustrationLabel}
        items={examples.map((item) => item.tab)}
        active={active}
        onChange={setActive}
      />

      <div
        id="call-panel"
        role="tabpanel"
        aria-labelledby={`call-tab-${active}`}
        className={styles.callPanel}
      >
        <p className={styles.callState}>
          <span>{example.stateLabel}</span>
          {example.state}
        </p>
        <ul className={styles.callRows}>
          {example.rows.map((row, index) => (
            <li key={index}>
              <span className={styles.callKind}>{row.kind}</span>
              <span className={styles.callQuestion}>{row.question}</span>
              <b className={styles.callAnswer}>{row.answer}</b>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}

const dollars = (value: number) =>
  `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

/**
 * The bill for a million identical calls, decision model against Claude
 * Haiku 5.5. The sums are done here from the prices and token counts in the
 * content file, so a changed price cannot leave a stale figure in the text.
 * Bars share one scale per call: the longest is the dearest row.
 */
function PriceCalls({ paper }: { paper: PaperDecisionStrings }) {
  const [active, setActive] = useState(0);
  const call = PAPER_DECISION_PRICE_CALLS[active];
  const text = paper.priceCalls[active];
  const price = priceOfMillionCalls(call);
  const top = Math.max(price.decision, price.haiku, price.haikuLow);

  const rows = [
    { key: "decision", label: paper.priceRows.decision, value: price.decision },
    { key: "haiku", label: paper.priceRows.haiku, value: price.haiku },
    { key: "haikuLow", label: paper.priceRows.haikuLow, value: price.haikuLow },
  ] as const;

  return (
    <figure className={styles.call}>
      <figcaption className={styles.callHead}>
        <span>{paper.priceLabel}</span>
        <span className={styles.callNote}>{paper.priceUnit}</span>
      </figcaption>

      <Tabs
        name="price"
        label={paper.priceLabel}
        items={paper.priceCalls.map((item) => item.tab)}
        active={active}
        onChange={setActive}
      />

      <div
        id="price-panel"
        role="tabpanel"
        aria-labelledby={`price-tab-${active}`}
        className={styles.pricePanel}
      >
        <p className={styles.priceWhat}>{text.text}</p>
        <p className={styles.priceTokens}>
          <span>
            <b>{call.inputTokens}</b> {paper.priceTokens.input}
          </span>
          <span>
            <b>{call.answerTokens}</b> {paper.priceTokens.answer}
          </span>
        </p>

        <ul className={styles.priceRows}>
          {rows.map((row) => (
            <li key={row.key} data-kind={row.key}>
              <span className={styles.priceLabel}>{row.label}</span>
              <span className={styles.priceTrack} aria-hidden="true">
                <span
                  className={styles.priceBar}
                  style={{ width: `${(row.value / top) * 100}%` }}
                />
              </span>
              <b className={styles.priceValue}>{dollars(row.value)}</b>
              <span className={styles.priceTimes}>
                {row.key === "decision" ? "" : `×${(row.value / price.decision).toFixed(1)}`}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}

/**
 * How long a call takes, decision model against Claude Haiku 5.5 (Low). The
 * decision model's bar runs to the slow end of its range and is solid up to
 * the fast end, so the spread reads at a glance. Both bars share one scale.
 */
function SpeedBars({ paper }: { paper: PaperDecisionStrings }) {
  const { decisionMs, haikuFirstTokenMs } = PAPER_DECISION_SPEED;
  const pct = (ms: number) => `${(ms / haikuFirstTokenMs) * 100}%`;
  const times = (ms: number) => `×${Math.round(haikuFirstTokenMs / ms)}`;

  return (
    <figure className={styles.call}>
      <figcaption className={styles.callHead}>
        <span>{paper.speedLabel}</span>
        <span className={styles.callNote}>{paper.speedUnit}</span>
      </figcaption>

      <ul className={styles.priceRows}>
        <li data-kind="decision">
          <span className={styles.priceLabel}>{paper.speedRows.decision}</span>
          <span className={styles.priceTrack} aria-hidden="true">
            <span
              className={`${styles.priceBar} ${styles.priceBarRange}`}
              style={{ width: pct(decisionMs.max) }}
            >
              <span className={styles.priceBarFloor} style={{ width: pct(decisionMs.min) }} />
            </span>
          </span>
          <b className={styles.priceValue}>{paper.speedRows.decisionValue}</b>
          <span className={styles.priceTimes} />
        </li>
        <li data-kind="haiku">
          <span className={styles.priceLabel}>{paper.speedRows.haiku}</span>
          <span className={styles.priceTrack} aria-hidden="true">
            <span className={styles.priceBar} style={{ width: "100%" }} />
          </span>
          <b className={styles.priceValue}>{paper.speedRows.haikuValue}</b>
          <span className={styles.priceTimes}>
            {times(decisionMs.max)}
            {paper.speedTo}
            {times(decisionMs.min)}
          </span>
        </li>
      </ul>
    </figure>
  );
}

/**
 * The /paper/decision page: a short article on decision models, what they
 * are for, and how far they have caught up with ordinary LLMs.
 *
 * It borrows the reading layout of /spirit: a contents list in the margin
 * and one column of text. All words come from getPaperDecision, so the two
 * languages cannot drift apart in structure.
 */
export function PaperDecisionPage({ lang }: { lang: Lang }) {
  const paper = getPaperDecision(lang);
  const { before, after } = PAPER_DECISION_IMAGES;

  const contents = [
    { id: "what", label: paper.whatLabel },
    { id: "models", label: paper.modelsLabel },
    { id: "why", label: paper.whyLabel },
    { id: "use", label: paper.useLabel },
    { id: "index", label: paper.indexLabel },
    { id: "limits", label: paper.limitsLabel },
    { id: "sources", label: paper.sourcesLabel },
  ];

  return (
    <EcoShell lang={lang} otherHref={paperDecisionPath(otherLang(lang))} current="paper">
      <article>
        <header className={styles.hero}>
          <Link href={paperPath(lang)} className={styles.back}>
            <ArrowLeftIcon />
            {paper.back}
          </Link>

          <h1 className={styles.title}>{paper.heading}</h1>

          <div className={styles.heroBody}>
            <div className={styles.heroText}>
              <p className={styles.dateLine}>
                <span>{paper.eyebrow}</span>
                <time dateTime={PAPER_DECISION_DATE}>{paper.date}</time>
              </p>
              {paper.lead.map((text, index) => (
                <p key={index} className={index === 0 ? styles.lead : styles.leadMuted}>
                  {text}
                </p>
              ))}
            </div>

            <div className={styles.heroPlate}>
              <DotPlate shape="network" accent={0.5} cols={30} rows={20} lens arrive />
            </div>
          </div>
        </header>

        <div className={styles.layout}>
          <nav className={styles.contents} aria-label={paper.contentsLabel}>
            <ol>
              {contents.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className={styles.main}>
            <section id="what" className={styles.part}>
              <h2 className={styles.h2}>{paper.whatLabel}</h2>
              <Paragraphs items={paper.what} />

              <dl className={styles.questions}>
                {paper.questions.map((question) => (
                  <div key={question.name}>
                    <dt>{question.name}</dt>
                    <dd>{question.text}</dd>
                  </div>
                ))}
              </dl>

              <CallExamples paper={paper} />

              <Paragraphs items={paper.whatAfter} />
            </section>

            <section id="models" className={styles.part}>
              <h2 className={styles.h2}>{paper.modelsLabel}</h2>
              <Paragraphs items={paper.models} />
              <ol className={styles.steps}>
                {paper.modelList.map((model, index) => (
                  <li key={model.name}>
                    <span className={styles.stepNo}>{twoDigits(index + 1)}</span>
                    <div>
                      <h3 className={styles.stepMark}>{model.name}</h3>
                      <p className={styles.text}>{model.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <Paragraphs items={[paper.modelsAfter]} />
            </section>

            <section id="why" className={styles.part}>
              <h2 className={styles.h2}>{paper.whyLabel}</h2>
              <Paragraphs items={paper.why} />
              <ul className={styles.numbers}>
                {paper.numbers.map((number) => (
                  <li key={number.value}>
                    <b className={styles.value}>{number.value}</b>
                    <span>{number.label}</span>
                  </li>
                ))}
              </ul>

              <PriceCalls paper={paper} />
              <div className={styles.priceNotes}>
                <Paragraphs items={paper.priceNotes} muted />
              </div>
              <Paragraphs items={paper.priceVerdict} />

              <SpeedBars paper={paper} />
              <div className={styles.priceNotes}>
                <Paragraphs items={paper.speedNotes} muted />
              </div>
              <Paragraphs items={paper.speedVerdict} />
            </section>

            <section id="use" className={styles.part}>
              <h2 className={styles.h2}>{paper.useLabel}</h2>
              <Paragraphs items={[paper.useIntro]} />
              <ol className={styles.steps}>
                {paper.use.map((item, index) => (
                  <li key={item.mark}>
                    <span className={styles.stepNo}>{twoDigits(index + 1)}</span>
                    <div className={styles.stepBody}>
                      <h3 className={styles.stepMark}>{item.mark}</h3>
                      <Paragraphs items={item.text} />
                    </div>
                  </li>
                ))}
              </ol>
              <Paragraphs items={[paper.useMore]} />
              <p className={styles.warning}>{paper.useWarning}</p>
            </section>

            <section id="index" className={styles.part}>
              <h2 className={styles.h2}>{paper.indexLabel}</h2>
              <Paragraphs items={paper.index} />

              <h3 className={styles.h3}>{paper.beforeLabel}</h3>
              <ImageViewer
                src={before.src}
                width={before.width}
                height={before.height}
                alt={paper.beforeAlt}
                caption={paper.beforeCaption}
                openLabel={paper.viewImage}
                closeLabel={paper.closeImage}
              />
              <Paragraphs items={paper.before} />

              <h3 className={styles.h3}>{paper.afterLabel}</h3>
              <ImageViewer
                src={after.src}
                width={after.width}
                height={after.height}
                alt={paper.afterAlt}
                caption={paper.afterCaption}
                openLabel={paper.viewImage}
                closeLabel={paper.closeImage}
              />
              <Paragraphs items={paper.after} />

              <div className={styles.verdict}>
                <Paragraphs items={paper.indexVerdict} />
              </div>
            </section>

            <section id="limits" className={styles.part}>
              <h2 className={styles.h2}>{paper.limitsLabel}</h2>
              <ol className={styles.steps}>
                {paper.limits.map((limit, index) => (
                  <li key={limit.mark}>
                    <span className={styles.stepNo}>{twoDigits(index + 1)}</span>
                    <div>
                      <h3 className={styles.stepMark}>{limit.mark}</h3>
                      <p className={styles.text}>{limit.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <footer id="sources" className={styles.part}>
              <h2 className={styles.h3}>{paper.sourcesLabel}</h2>
              <ul className={styles.sources}>
                {PAPER_DECISION_SOURCES.map((source) => (
                  <li key={source.href}>
                    <a href={source.href} target="_blank" rel="noreferrer">
                      <span>{source.label}</span>
                      <ArrowUpRightIcon className={eco.arrowMuted} />
                    </a>
                  </li>
                ))}
              </ul>
              <p className={styles.disclaimer}>{paper.disclaimer}</p>
            </footer>
          </div>
        </div>
      </article>
    </EcoShell>
  );
}
