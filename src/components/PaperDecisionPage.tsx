import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { otherLang, paperDecisionLlmsPath, paperDecisionPath, paperPath, type Lang } from "@/content";
import {
  PAPER_DECISION_DATE,
  PAPER_DECISION_EXPERIMENTS,
  PAPER_DECISION_IMAGES,
  PAPER_DECISION_INDEX_DETAIL_SOURCES,
  PAPER_DECISION_INDEX_WEIGHTS,
  PAPER_DECISION_PRICE_CALLS,
  PAPER_DECISION_PRICE_KEYS,
  PAPER_DECISION_PRICE_MAX,
  PAPER_DECISION_PRICES,
  PAPER_DECISION_RANKING,
  PAPER_DECISION_SECTIONS,
  PAPER_DECISION_SOURCES,
  PAPER_DECISION_TIMELINE,
  PAPER_DECISION_TIMING,
  PAPER_DECISION_USES,
  formatPaperDate,
  formatPaperDuration,
  formatPaperNumber,
  formatPaperRatio,
  formatPaperUsd,
  getPaperDecision,
  getPaperDecisionExample,
  getPaperDecisionExperiment,
  getPaperDecisionPractice,
  paperArchivedTiming,
  paperPriceRanges,
  paperPriceTariffs,
  priceOfMillionCalls,
  type PaperDecisionAnswer,
  type PaperDecisionSection,
  type PaperDecisionStrings,
} from "@/content/paperDecision";
import { EcoShell } from "./eco/EcoShell";
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon } from "./eco/icons";
import { PaperDecisionBackground } from "./PaperDecisionBackground";
import { PaperJson, PaperTabs } from "./PaperDecisionControls";
import styles from "./PaperDecisionPage.module.css";
import { PaperDecisionPractice } from "./PaperDecisionPractice";
import { PaperHalftone } from "./PaperHalftone";

type Example = ReturnType<typeof getPaperDecisionExample>;
type Experiment = ReturnType<typeof getPaperDecisionExperiment>;
type Labels = PaperDecisionStrings["exampleLabels"];
type Rubric = NonNullable<PaperDecisionAnswer["rubric"]>;
type SourceId = keyof typeof PAPER_DECISION_SOURCES;
type ReadingSection = Exclude<PaperDecisionSection, "practice" | "sources">;

function SourceLinks({ ids }: { ids: readonly SourceId[] }) {
  return (
    <ul className={styles.citations}>
      {ids.map((id) => {
        const source = PAPER_DECISION_SOURCES[id];
        return <li key={id}><a href={source.href} target="_blank" rel="noreferrer">{source.label}</a></li>;
      })}
    </ul>
  );
}

function NumberTiles({ figures }: { figures: readonly { value: string; label: ReactNode }[] }) {
  return (
    <ul className={styles.numberTiles}>
      {figures.map(({ value, label }) => (
        <li key={value}>
          <strong>{value}</strong>
          <div>{label}</div>
        </li>
      ))}
    </ul>
  );
}

function DataTable({
  caption,
  columns,
  rows,
}: {
  caption?: string;
  columns: readonly string[];
  rows: readonly (readonly ReactNode[])[];
}) {
  return (
    <table className={styles.table}>
      {caption && <caption>{caption}</caption>}
      <thead>
        <tr>{columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map(([name, ...values], row) => (
          <tr key={row}>
            <th scope="row">{name}</th>
            {values.map((value, column) => <td key={column}>{value}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function RubricDistribution({ levels, labels }: { levels: Rubric["levels"]; labels: Labels["rubric"] }) {
  const highestProbability = Math.max(...levels.map(({ probability }) => probability));

  return (
    <table className={styles.rubricTable}>
      <thead>
        <tr>
          <th scope="col">{labels.level}</th>
          <th scope="col">{labels.probability}</th>
        </tr>
      </thead>
      <tbody>
        {levels.map(({ label, probability, percent }) => (
          <tr key={label} data-highest={probability === highestProbability}>
            <th scope="row">{label}</th>
            <td>
              <span className={styles.rubricProbability}>
                <span className={styles.rubricTrack} aria-hidden="true">
                  <span style={{ width: probability * 100 + "%" }} />
                </span>
                <span>{percent}</span>
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Answer({ answer, labels }: { answer: PaperDecisionAnswer; labels: Labels }) {
  if (answer.rubric) {
    const { maximum, levels } = answer.rubric;
    return (
      <div className={styles.rubric}>
        <div className={styles.rubricSummary}>
          <strong className={styles.answerValue}>
            {answer.value}{maximum && " " + labels.rubric.outOf + " " + maximum}
          </strong>
          <span>{labels.rubric.mean}</span>
        </div>
        {answer.detail && <span className={styles.answerDetail}>{answer.detail}</span>}
        <details className={styles.disclosure}>
          <summary>{labels.rubric.distribution}</summary>
          <RubricDistribution levels={levels} labels={labels.rubric} />
        </details>
      </div>
    );
  }

  return (
    <>
      <strong className={styles.answerValue}>{answer.selectedLevel ?? answer.value}</strong>
      {answer.detail && <span className={styles.answerDetail}>{answer.detail}</span>}
    </>
  );
}

function Json({ value, labels, name }: { value: string; labels: Labels; name: string }) {
  return (
    <PaperJson
      json={value}
      label={name}
      copy={labels.copy}
      copied={labels.copied}
      copyFailed={labels.copyFailed}
    />
  );
}

function ExampleResult({ row, labels, levelLabel }: {
  row: Example["calls"][number]["rows"][number];
  labels: Labels;
  levelLabel: string;
}) {
  const question = (
    <span className={styles.exampleQuestion}>
      <span>{labels.kinds[row.kind]}</span>
      <strong>{row.question}</strong>
    </span>
  );

  if (row.rubric) {
    const { mean, maximum, levels } = row.rubric;
    return (
      <li className={styles.exampleResult}>
        <details open>
          <summary className={styles.exampleRow}>
            {question}
            <span className={styles.exampleRating}>
              <span className={styles.exampleMetric}>
                <strong>{row.value}</strong>
                <span>{maximum && `${labels.rubric.outOf} ${maximum} · `}{labels.rubric.mean}</span>
              </span>
              {maximum && (
                <span className={styles.exampleMeter} aria-hidden="true">
                  <span style={{ width: (mean / Number(maximum)) * 100 + "%" }} />
                </span>
              )}
              <span className={styles.exampleToggle}>{labels.rubric.distribution}</span>
            </span>
          </summary>
          <div className={styles.exampleDistribution}>
            <RubricDistribution levels={levels} labels={{ ...labels.rubric, level: levelLabel }} />
          </div>
        </details>
      </li>
    );
  }

  return (
    <li className={styles.exampleResult}>
      <div className={styles.exampleRow}>
        {question}
        {row.choice ? (
          <div className={styles.exampleChoice}>
            <strong>{row.choice.label} <span>{row.choice.percent}</span></strong>
            {row.detail && <small>{row.detail}</small>}
          </div>
        ) : (
          <div className={styles.exampleMetric}>
            <strong>{row.selectedLevel ?? row.value}</strong>
            {row.detail && <span>{row.detail}</span>}
          </div>
        )}
      </div>
    </li>
  );
}

function ExampleCalls({ example, labels, inputLabel = labels.state, levelLabel = labels.rubric.level, commandInput = false }: {
  example: Example;
  labels: Labels;
  inputLabel?: string;
  levelLabel?: string;
  commandInput?: boolean;
}) {
  return (
    <>
      {example.calls.map((call) => (
        <figure key={call.state} className={styles.exampleCard} aria-label={example.label}>
          <div className={styles.exampleInput}>
            <span className={styles.exampleInputLabel}>{inputLabel}</span>
            {commandInput ? <pre><code>{call.state}</code></pre> : <blockquote><p>{call.state}</p></blockquote>}
          </div>
          <p className={styles.exampleOutputHeading}>{labels.output}</p>
          <ol className={styles.exampleResults}>
            {call.rows.map((row) => (
              <ExampleResult key={row.id} row={row} labels={labels} levelLabel={levelLabel} />
            ))}
          </ol>
          <details className={`${styles.disclosure} ${styles.exampleJson}`}>
            <summary>{labels.json}</summary>
            <Json value={call.rawJson} labels={labels} name={labels.json} />
          </details>
        </figure>
      ))}
    </>
  );
}

function Prices({ paper, lang }: { paper: PaperDecisionStrings; lang: Lang }) {
  const { price } = paper;

  return (
    <figure className={styles.panel}>
      <figcaption>
        <div className={styles.panelTitle}>{price.caption}</div>
        <p className={styles.smallNote}>{price.barScale} {formatPaperUsd(PAPER_DECISION_PRICE_MAX, lang)}.</p>
      </figcaption>
      <PaperTabs
        id="price"
        label={price.caption}
        tabs={PAPER_DECISION_PRICE_CALLS.map((call, index) => {
          const copy = price.calls[index];
          const cost = priceOfMillionCalls(call);

          return {
            name: copy.label,
            panel: (
              <>
                <p className={styles.tokenCounts}>
                  <span>{formatPaperNumber(call.inputTokens, lang)} {price.tokens.input}</span>
                  <span>{formatPaperNumber(call.answerTokens, lang)} {price.tokens.output}</span>
                </p>
                <p className={styles.smallNote}>{copy.basis}</p>
                <DataTable
                  columns={[paper.index.model, price.amount, price.ratio]}
                  rows={PAPER_DECISION_PRICE_KEYS.map((key) => [
                    <>
                      {price.names[key]}
                      {key === "haikuLow" && (
                        <small>{PAPER_DECISION_PRICES.thinkingTokens} {price.thinkingAssumption}</small>
                      )}
                      <span className={styles.priceTrack} aria-hidden="true">
                        <span
                          data-baseline={key === "decision"}
                          style={{ width: (cost[key] / PAPER_DECISION_PRICE_MAX) * 100 + "%" }}
                        />
                      </span>
                    </>,
                    formatPaperUsd(cost[key], lang),
                    formatPaperRatio(cost[key] / cost.decision, lang),
                  ])}
                />
              </>
            ),
          };
        })}
      />
    </figure>
  );
}

function ExperimentResult({
  experiment,
  labels,
  lang,
}: {
  experiment: Experiment;
  labels: Labels;
  lang: Lang;
}) {
  return (
    <>
      <p className={styles.comparisonSituation}>{experiment.situation}</p>
      <div className={styles.comparisonCards}>
        {experiment.models.map((model, index) => (
          <section key={model.name} className={styles.comparisonCard} data-local={index === 0}>
            <header className={styles.comparisonHeader}>
              <div>
                <p>{model.origin}</p>
                <h3>{model.name}</h3>
              </div>
              <dl className={styles.comparisonLatency}>
                <dt>{index === 0 ? labels.localInference : labels.apiTime}</dt>
                <dd>{formatPaperDuration(model.latencyMs, lang)}</dd>
              </dl>
            </header>
            <dl className={styles.comparisonAnswers}>
              {experiment.rows.map((row) => {
                const answer = row.answers[index];
                return (
                  <div key={row.id} data-kind={answer.kind}>
                    <dt>{row.question}</dt>
                    <dd>
                      {answer.choice ? (
                        <div className={styles.comparisonChoice}>
                          <strong>{answer.choice.label}</strong>
                          <span title={answer.detail}>{answer.choice.percent}</span>
                        </div>
                      ) : (
                        <Answer answer={answer} labels={labels} />
                      )}
                    </dd>
                  </div>
                );
              })}
            </dl>
            <dl className={styles.comparisonMetrics}>
              <div>
                <dt>{labels.inputTokens}</dt>
                <dd>{formatPaperNumber(model.inputTokens, lang)}</dd>
              </div>
              {index === 0 && (
                <div>
                  <dt>{labels.localRoundTrip}</dt>
                  <dd>{formatPaperDuration(experiment.localRoundTripMs, lang)}</dd>
                </div>
              )}
            </dl>
          </section>
        ))}
      </div>
      <p className={styles.resultNote}>{experiment.takeaway}</p>
      <details className={styles.disclosure}>
        <summary>{labels.excerpt}</summary>
        <div className={styles.input}>
          <span>{labels.state}</span>
          <p lang="en">{experiment.state}</p>
        </div>
        {experiment.evidenceNote && <p className={styles.smallNote}>{experiment.evidenceNote}</p>}
        {experiment.models.map((model) => (
          <div key={model.name}>
            <p className={styles.jsonModel}>{model.name}</p>
            <Json value={model.rawJson} labels={labels} name={model.name + " · JSON"} />
          </div>
        ))}
      </details>
    </>
  );
}

function IndexResults({ paper, lang }: { paper: PaperDecisionStrings; lang: Lang }) {
  const { index } = paper;
  const columns = [index.model, index.rank, index.score];
  const rankings = PAPER_DECISION_RANKING.map(({ model, score }, position) => [
    model,
    position + 1,
    formatPaperNumber(score, lang, { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
  ]);

  return (
    <>
      <p>{index.lead}</p>
      <p>{index.v21Note}</p>
      <div className={styles.panel}>
        <DataTable caption={index.rankCaption} columns={columns} rows={rankings.slice(0, 5)} />
        <details className={styles.disclosure}>
          <summary>{paper.detailLabels.rankings}</summary>
          <DataTable columns={columns} rows={rankings.slice(5)} />
        </details>
      </div>
      <SourceLinks ids={["aaIndex", "nace"]} />
      <details className={styles.disclosure}>
        <summary>{index.methodology}</summary>
        <p>{index.metricNote}</p>
        <DataTable
          columns={[index.metric, index.weight]}
          rows={PAPER_DECISION_INDEX_WEIGHTS.map(({ evaluation, weight }, position) => [
            <>{evaluation}<small>{index.metricDescriptions[position]}</small></>,
            formatPaperNumber(weight / 100, lang, { style: "percent" }),
          ])}
        />
        <SourceLinks ids={["aaMethod"]} />
      </details>
      <details className={styles.disclosure}>
        <summary>{index.details.title}</summary>
        {index.details.notes.map((note) => <p key={note}>{note}</p>)}
        <SourceLinks ids={PAPER_DECISION_INDEX_DETAIL_SOURCES} />
      </details>
      <details className={styles.disclosure}>
        <summary>{index.archiveTitle}</summary>
        <p>{index.v1Note}</p>
        <div className={styles.archives}>
          {(["before", "after", "v2"] as const).map((id) => {
            const image = PAPER_DECISION_IMAGES[id];
            const copy = index.archives[id];

            return (
              <figure key={id} className={styles.archive}>
                <figcaption>
                  <h3>{copy.title}</h3>
                  <p>{copy.caption}</p>
                </figcaption>
                <Image {...image} alt={copy.alt} />
                <a href={image.src} target="_blank" rel="noreferrer">{index.original} <ArrowUpRightIcon /></a>
              </figure>
            );
          })}
        </div>
      </details>
    </>
  );
}

export function PaperDecisionPage({ lang }: { lang: Lang }) {
  const paper = getPaperDecision(lang);
  const ticket = getPaperDecisionExample(lang, "ticket");
  const sections = PAPER_DECISION_SECTIONS.filter((id) => id !== "practice" && id !== "sources");
  const blocks: Record<ReadingSection, ReactNode> = {
    what: (
      <>
        <p>{paper.intro.scenario}</p>
        <ExampleCalls example={ticket} labels={paper.exampleLabels} inputLabel={paper.intro.message} levelLabel={paper.intro.urgencyLevel} />
        <p>{paper.intro.explanation}</p>
        <details className={styles.disclosure}>
          <summary>{paper.detailLabels.types}</summary>
          <p className={styles.smallNote}>{paper.intro.model}</p>
          <dl className={styles.types}>
            {paper.intro.types.map(({ name, text }) => (
              <div key={name}><dt>{name}</dt><dd>{text}</dd></div>
            ))}
          </dl>
          {ticket.explanation.map((text) => <p key={text} className={styles.smallNote}>{text}</p>)}
          <p>{paper.intro.extensions}</p>
          <p>{paper.intro.calibration}</p>
          <SourceLinks ids={["jevUpdate", "liquidTypes", "gemini", "openrouter", "aaMethod"]} />
        </details>
      </>
    ),
    use: (
      <>
        <PaperTabs
          id="use"
          label={paper.sections.use}
          tabs={PAPER_DECISION_USES.map((id) => {
            const example = getPaperDecisionExample(lang, id);
            return {
              name: example.label,
              panel: (
                <>
                  {example.explanation.map((text) => <p key={text} className={styles.tabIntro}>{text}</p>)}
                  {example.sources.length > 0 && <SourceLinks ids={example.sources} />}
                  <ExampleCalls example={example} labels={paper.exampleLabels} commandInput={id === "commands"} />
                </>
              ),
            };
          })}
        />
        <p className={styles.warning}>{paper.useWarning}</p>
      </>
    ),
    models: (
      <>
        <ol className={styles.timeline}>
          {PAPER_DECISION_TIMELINE.map(({ date, source }, index) => (
            <li key={date}>
              <details className={styles.disclosure} name="decision-timeline">
                <summary>
                  <span className={styles.milestone}>
                    <time dateTime={date}>{formatPaperDate(date, lang)}</time>
                    <span>{paper.timeline[index].title}</span>
                  </span>
                </summary>
                <p>{paper.timeline[index].text}</p>
                <SourceLinks ids={[source]} />
              </details>
            </li>
          ))}
        </ol>
        <details className={styles.disclosure}>
          <summary>{paper.modelNotes.title}</summary>
          <dl className={styles.limitList}>
            {paper.modelNotes.entries.map(({ name, text, sources }) => (
              <div key={name}>
                <dt>{name}</dt>
                <dd>{text}<SourceLinks ids={sources} /></dd>
              </div>
            ))}
          </dl>
        </details>
      </>
    ),
    index: <IndexResults paper={paper} lang={lang} />,
    why: (
      <>
        <p>{paperPriceRanges(lang)}</p>
        <Prices paper={paper} lang={lang} />
        <details className={styles.disclosure}>
          <summary>{paper.detailLabels.pricing}</summary>
          <p>{paper.price.intro}</p>
          <NumberTiles figures={paperPriceTariffs(lang)} />
          <p className={styles.smallNote}>{paper.price.billingNote}</p>
          <p className={styles.smallNote}>{paper.price.geminiComparison}</p>
          <SourceLinks ids={["openrouter", "haiku", "liquid", "gemini"]} />
        </details>
        <div className={styles.panel}>
          <DataTable
            caption={paper.timing.caption}
            columns={[paper.index.model, paper.index.score, paper.timing.duration]}
            rows={PAPER_DECISION_TIMING.map(({ model, score, durationMs }) => [
              model, score, formatPaperDuration(durationMs, lang),
            ])}
          />
          <p className={styles.smallNote}>{paper.timing.note}</p>
          <SourceLinks ids={["aaV2"]} />
        </div>
        <p>{paper.timing.extra}</p>
        <SourceLinks ids={["aaV2", "nace", "gemini"]} />
        <details className={styles.disclosure}>
          <summary>{paper.timing.archive.title}</summary>
          <NumberTiles figures={paperArchivedTiming(lang).map(([label, value]) => ({ value, label }))} />
          <p className={styles.smallNote}>{paper.timing.archive.note}</p>
          <SourceLinks ids={["jev", "haikuPerformance"]} />
        </details>
      </>
    ),
    scale: (
      <>
        <p>{paper.scale.intro}</p>
        <PaperTabs
          id="experiment"
          label={paper.sections.scale}
          tabs={PAPER_DECISION_EXPERIMENTS.map((id) => {
            const experiment = getPaperDecisionExperiment(lang, id);
            return {
              name: experiment.label,
              panel: <ExperimentResult experiment={experiment} labels={paper.exampleLabels} lang={lang} />,
            };
          })}
        />
        <details className={styles.disclosure}>
          <summary>{paper.detailLabels.measurement}</summary>
          <p className={styles.smallNote}>{paper.scale.setup}</p>
          <p className={styles.smallNote}>{paper.scale.note}</p>
        </details>
        <details className={styles.disclosure}>
          <summary>{paper.scale.footprint.title}</summary>
          <NumberTiles figures={paper.scale.footprint.cards.map(({ model, amount, text }) => ({
            value: amount,
            label: <><b>{model}</b><p>{text}</p></>,
          }))} />
          <p className={styles.smallNote}>{paper.scale.footprint.note}</p>
        </details>
      </>
    ),
    limits: (
      <div className={styles.limitAccordion}>
        {paper.limits.map(({ title, text }) => (
          <details key={title} name="decision-limits" className={styles.disclosure}>
            <summary>{title}</summary>
            <p>{text}</p>
          </details>
        ))}
      </div>
    ),
  };

  return (
    <EcoShell lang={lang} otherHref={paperDecisionPath(otherLang(lang))} current="paper">
      <article className={styles.article}>
        <PaperDecisionBackground />
        <header className={styles.hero}>
          <PaperHalftone />
          <Link href={paperPath(lang)} className={styles.back}><ArrowLeftIcon />{paper.back}</Link>
          <div className={styles.opening}>
            <p className={styles.format}>{paper.opening.format}</p>
            <h1>{paper.title}</h1>
            <p className={styles.lead}>{paper.lead}</p>
          </div>
          <div className={styles.startLinks}>
            <a href="#what" className={styles.begin}>{paper.opening.example} <ArrowRightIcon /></a>
            <a href="#scale" className={styles.begin}>{paper.opening.research} <ArrowRightIcon /></a>
          </div>
        </header>
        <div className={styles.main}>
          {sections.map((id) => (
            <section
              key={id}
              id={id}
              aria-labelledby={id + "-heading"}
              className={styles.part}
              tabIndex={-1}
            >
              <h2 id={id + "-heading"} className={styles.chapterTitle}>{paper.sections[id]}</h2>
              {blocks[id]}
            </section>
          ))}
          <section id="sources" aria-label={paper.sections.sources} className={styles.endnotes} tabIndex={-1}>
            <details className={styles.disclosure}>
              <summary>{paper.sections.sources}</summary>
              <ul className={styles.sources}>
                {Object.values(PAPER_DECISION_SOURCES).map((source) => (
                  <li key={source.href}>
                    <a href={source.href} target="_blank" rel="noreferrer">{source.label} <ArrowUpRightIcon /></a>
                  </li>
                ))}
              </ul>
            </details>
            <p className={styles.edition}>
              <a href={paperDecisionLlmsPath(lang)}>{paper.textVersion}</a>
              <span>{paper.dates.updated} <time dateTime={PAPER_DECISION_DATE}>{formatPaperDate(PAPER_DECISION_DATE, lang, true)}</time></span>
            </p>
          </section>
        </div>
        <PaperDecisionPractice title={paper.sections.practice} practice={getPaperDecisionPractice(lang)} />
      </article>
    </EcoShell>
  );
}
