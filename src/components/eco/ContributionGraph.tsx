"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { getUi, type Lang } from "@/content";
import {
  CONTRIBUTIONS_PATH,
  NO_CONTRIBUTIONS,
  layoutContributions,
  type Contributions,
} from "@/lib/contributions";
import { DotPlate } from "./DotPlate";
import styles from "./ContributionGraph.module.css";

/** Dot radius per level, as a share of the cell: an empty day is a small grey point */
const RADIUS = [0.17, 0.25, 0.32, 0.39, 0.46];
const OPACITY = [1, 0.55, 0.72, 0.86, 1];
/** Height of the month row above the dots, in cells */
const MONTH_BAND = 1.4;

/**
 * The owner's GitHub contribution calendar, drawn in dots the way GitHub
 * draws squares: a column per week, a dot per day, its size and colour by
 * level. The dots grow in week by week the first time the graph is seen.
 * Until the calendar loads, or if the build could not reach GitHub, the
 * GitHub figure stands in its place.
 */
export function ContributionGraph({ lang }: { lang: Lang }) {
  const text = getUi(lang).shell.github;
  const [data, setData] = useState<Contributions | null>(null);
  const [shown, setShown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let live = true;
    fetch(CONTRIBUTIONS_PATH)
      .then((response) => (response.ok ? response.json() : NO_CONTRIBUTIONS))
      .catch(() => NO_CONTRIBUTIONS)
      .then((loaded: Contributions) => live && setData(loaded));
    return () => {
      live = false;
    };
  }, []);

  const layout = useMemo(() => layoutContributions(data?.days ?? []), [data]);

  // The dots grow in once, when the graph first comes into view
  useEffect(() => {
    const node = ref.current;
    if (!node || layout.weeks === 0) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [layout.weeks]);

  if (!data || layout.weeks === 0) {
    return (
      <div aria-hidden="true">
        <DotPlate shape="github" accent={0.45} cols={30} rows={20} bench={false} />
      </div>
    );
  }

  const form = new Intl.PluralRules(lang).select(data.total);
  const caption = (form in text.total ? text.total[form as keyof typeof text.total] : text.total.other).replace(
    "{count}",
    new Intl.NumberFormat(lang).format(data.total),
  );
  const monthName = new Intl.DateTimeFormat(lang, { month: "short", timeZone: "UTC" });
  const height = 7 + MONTH_BAND;

  return (
    <div ref={ref} className={styles.graph} data-shown={shown ? "true" : undefined}>
      <div className={styles.window}>
        <svg
          viewBox={`0 0 ${layout.weeks} ${height}`}
          className={styles.svg}
          role="img"
          aria-label={caption}
        >
          {layout.months.map((month) => (
            <text
              key={`${month.year}-${month.month}`}
              x={month.col + 0.1}
              y={0.9}
              className={styles.month}
            >
              {monthName.format(Date.UTC(month.year, month.month, 1)).replace(".", "")}
            </text>
          ))}
          {layout.cells.map((cell) => (
            <circle
              key={cell.date}
              cx={cell.col + 0.5}
              cy={cell.row + 0.5 + MONTH_BAND}
              r={RADIUS[cell.level]}
              className={styles.dot}
              data-level={cell.level}
              style={{ opacity: OPACITY[cell.level], animationDelay: `${cell.col * 16}ms` }}
            />
          ))}
        </svg>
      </div>

      <div className={styles.footer}>
        <p className={styles.caption}>{caption}</p>
        <p className={styles.legend} aria-hidden="true">
          {text.less}
          <svg viewBox="0 0 5 1" className={styles.legendDots}>
            {RADIUS.map((r, level) => (
              <circle
                key={level}
                cx={level + 0.5}
                cy={0.5}
                r={r}
                className={styles.dot}
                data-level={level}
                style={{ opacity: OPACITY[level] }}
              />
            ))}
          </svg>
          {text.more}
        </p>
      </div>
    </div>
  );
}
