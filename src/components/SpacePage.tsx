"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { getBodies, getUi, langPath, otherLang, space3dPath, spacePath, type Lang } from "@/content";
import { EcoShell } from "./eco/EcoShell";
import { ArrowLeftIcon, ArrowRightIcon } from "./eco/icons";
import { resetSpace, selectBody, useSpaceStore, zoomCamera } from "./space/camera";
import eco from "./eco/eco.module.css";
import styles from "./SpacePage.module.css";

// WebGL живёт только в браузере, на сервере рендерить нечего
const SpaceField = dynamic(() => import("./space/SpaceField"), { ssr: false });

/** One press of a zoom button, as a factor */
const ZOOM_STEP = 1.35;

/** Counters and indices are set in two digits: 01, 04 */
const twoDigits = (n: number) => String(n).padStart(2, "0");

/**
 * Страница /space: солнечная система теми же точками, что и кадры главной.
 *
 * The scene is a dark frame in the page, dark in both themes: space stays
 * night, and on the ground it reads as a photograph pasted in. Next to it sits
 * the list of bodies and, once one is picked, its card. On narrow screens
 * the list becomes a row of chips under the frame and the card follows it,
 * so the text never covers the scene.
 *
 * Разделение обязанностей строгое. Сцена знает про камеру, попадание кликом
 * и рендер; страница — про тексты и разметку. Связывает их одно число:
 * индекс выбранного тела.
 */
export function SpacePage({ lang }: { lang: Lang }) {
  const bodies = getBodies(lang);
  const ui = getUi(lang);
  const page = ui.space;
  const view3d = ui.home.sections.space3d;

  const selected = useSpaceStore((s) => s.selected);
  const body = selected >= 0 ? bodies[selected] : null;
  const listRef = useRef<HTMLOListElement>(null);

  // A body picked in the scene may sit off screen in the row of chips
  useEffect(() => {
    const list = listRef.current;
    const chip = list?.children[selected] as HTMLElement | undefined;
    if (!list || !chip || list.scrollWidth <= list.clientWidth) return;
    const left = chip.offsetLeft - (list.clientWidth - chip.offsetWidth) / 2;
    list.scrollTo({ left, behavior: "smooth" });
  }, [selected]);

  // Уходя со страницы, возвращаем сцену к обзору: состояние живёт в модуле
  // и само по себе не сбросится
  useEffect(() => resetSpace, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") selectBody(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <EcoShell lang={lang} otherHref={spacePath(otherLang(lang))} current="space">
      <section className={eco.section}>
        <div className={styles.head}>
          <Link href={langPath(lang)} className={styles.back}>
            <ArrowLeftIcon />
            {page.home}
          </Link>
          <h1 className={`${eco.displayXl} ${styles.title}`}>{page.heading}</h1>
          <p className={`${eco.body} ${eco.muted}`}>{page.lead}</p>
        </div>

        <div className={styles.explorer} data-open={body ? "true" : undefined}>
          <div className={styles.stageColumn}>
            <div className={styles.stage}>
              <SpaceField label={page.description} />

              <p className={styles.status} aria-hidden="true">
                {body ? body.name : page.overview}
              </p>

              <div className={styles.zoom}>
                <button
                  type="button"
                  className={styles.zoomButton}
                  onClick={() => zoomCamera(ZOOM_STEP)}
                  aria-label={page.zoomIn}
                >
                  +
                </button>
                <button
                  type="button"
                  className={styles.zoomButton}
                  onClick={() => zoomCamera(1 / ZOOM_STEP)}
                  aria-label={page.zoomOut}
                >
                  −
                </button>
              </div>
            </div>

            <p className={`${eco.hint} ${styles.hintMouse}`}>{page.hint}</p>
            <p className={`${eco.hint} ${styles.hintTouch}`}>{page.hintTouch}</p>
          </div>

          <div className={styles.side}>
            <nav className={styles.bodies} aria-label={page.bodiesLabel}>
              <p className={`${eco.label} ${styles.bodiesLabel}`}>{page.overview}</p>
              <ol ref={listRef} className={styles.list}>
                {bodies.map((item, index) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={styles.item}
                      aria-pressed={index === selected}
                      onClick={() => selectBody(index === selected ? -1 : index)}
                    >
                      <span className={`${eco.code} ${styles.itemIndex}`}>
                        {twoDigits(index + 1)}
                      </span>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemTag}>{item.eyebrow}</span>
                    </button>
                  </li>
                ))}
              </ol>
            </nav>

            <div className={styles.cardSlot} aria-live="polite">
              {body && (
                // Ключ по телу: смена выбора перезапускает проявление карточки
                <article key={body.id} className={styles.card}>
                  <button
                    type="button"
                    className={styles.back}
                    onClick={() => selectBody(-1)}
                  >
                    <ArrowLeftIcon />
                    {page.back}
                  </button>
                  <p className={`${eco.label} ${eco.labelInk}`}>{body.eyebrow}</p>
                  <h2 className={eco.displayL}>{body.name}</h2>
                  <p className={styles.tagline}>{body.tagline}</p>

                  <dl className={styles.stats}>
                    {body.stats.map((stat) => (
                      <div key={stat.label} className={styles.stat}>
                        <dt className={eco.label}>{stat.label}</dt>
                        <dd>{stat.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <p className={eco.body}>{body.body}</p>
                </article>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Та же система, посчитанная лучами: вторая сцена живёт отдельной
          страницей и в стиль сайта намеренно не попадает */}
      <section className={`${eco.section} ${styles.more}`}>
        <Link href={space3dPath(lang)} className={styles.view3d}>
          <span className={styles.view3dText}>
            <span className={eco.label}>{view3d.tag}</span>
            <span className={eco.heading}>{view3d.name}</span>
            <span className={eco.hint}>{view3d.line}</span>
          </span>
          <ArrowRightIcon className={eco.arrowMuted} />
        </Link>
      </section>
    </EcoShell>
  );
}
