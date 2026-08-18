"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect } from "react";
import {
  getBodies,
  getUi,
  langPath,
  otherLang,
  spacePath,
  type Lang,
} from "@/content";
import { resetSpace, selectBody, useSpaceStore } from "./space/camera";
import hud from "./Hud.module.css";
import styles from "./SpacePage.module.css";

// WebGL живёт только в браузере, на сервере рендерить нечего
const SpaceField = dynamic(() => import("./space/SpaceField"), { ssr: false });

/**
 * Страница /space: солнечная система теми же точками, что и кадры главной.
 *
 * Разделение обязанностей строгое. Сцена знает про камеру, попадание кликом
 * и рендер; страница — про тексты и разметку. Связывает их одно число:
 * индекс выбранного тела.
 */
export function SpacePage({ lang }: { lang: Lang }) {
  const bodies = getBodies(lang);
  const ui = getUi(lang);
  const other = otherLang(lang);
  const otherUi = getUi(other);

  const selected = useSpaceStore((s) => s.selected);
  const body = selected >= 0 ? bodies[selected] : null;

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
    <>
      <SpaceField label={ui.space.description} />

      <Link href={langPath(lang)} className={`${hud.hud} ${hud.mark}`}>
        Z<span>\</span>M
      </Link>

      <nav
        className={`${hud.hud} ${hud.lang}`}
        aria-label={ui.switchLanguage}
      >
        <span className={hud.langActive} aria-current="page">
          {ui.langName}
        </span>
        <span className={hud.langSep} aria-hidden="true">
          /
        </span>
        <Link href={spacePath(other)} hrefLang={other} lang={other}>
          {otherUi.langName}
        </Link>
      </nav>

      <p className={styles.status}>{body ? body.name : ui.space.overview}</p>
      <p className={styles.hint}>{ui.space.hint}</p>

      <nav className={styles.rail} aria-label={ui.space.bodiesLabel}>
        {bodies.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={styles.railItem}
            aria-pressed={index === selected}
            onClick={() => selectBody(index === selected ? -1 : index)}
          >
            {item.name}
          </button>
        ))}
      </nav>

      <main className={styles.main} aria-live="polite">
        {body && (
          // Ключ по телу: смена выбора перезапускает проявление карточки
          <article key={body.id} className={styles.card}>
            <p className={styles.eyebrow}>{body.eyebrow}</p>
            <h1 className={styles.title}>{body.name}</h1>
            <p className={styles.tagline}>{body.tagline}</p>

            <dl className={styles.stats}>
              {body.stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>

            <p className={styles.body}>{body.body}</p>

            <button
              type="button"
              className={styles.back}
              onClick={() => selectBody(-1)}
            >
              <i aria-hidden="true">←</i>
              {ui.space.back}
            </button>
          </article>
        )}
      </main>
    </>
  );
}
