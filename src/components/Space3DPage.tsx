"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  getBodies,
  getUi,
  langPath,
  otherLang,
  space3dPath,
  spacePath,
  type Lang,
} from "@/content";
import type { Stats } from "./space3d/renderer";
import {
  DEFAULT_PARAMS,
  releaseRoam,
  resetScene,
  resetView,
  roamKey,
  selectBody3d,
  setParam,
  toggleAuto,
  toggleHidden,
  useView3dStore,
  type Params,
} from "./space3d/state";
import styles from "./Space3DPage.module.css";

// WebGL живёт только в браузере, на сервере рендерить нечего
const Scene3D = dynamic(() => import("./space3d/Scene3D"), { ssr: false });

/** Ползунки панели: ключ параметра и пределы в процентах */
const SLIDERS: { key: keyof Params; max: number }[] = [
  { key: "time", max: 400 },
  { key: "exposure", max: 220 },
  { key: "orbits", max: 200 },
  { key: "glow", max: 200 },
  { key: "stars", max: 200 },
];

/**
 * Страница /space-3d: солнечная система, посчитанная лучами.
 *
 * Сцена намеренно выпадает из стиля сайта — здесь нет ни точек, ни золота
 * Golden Record, а интерфейс приборный: частота кадров, разрешение сцены,
 * панель параметров и горячие клавиши. Общее с /space только одно — тексты
 * тел: они берутся из тех же словарей и соединяются по идентификатору.
 *
 * Всё, что меняется каждый кадр, сюда не поднимается. Частота кадров
 * пишется прямо в узлы через ссылки, минуя React: перерисовывать дерево
 * дважды в секунду ради двух чисел незачем.
 */
export function Space3DPage({ lang }: { lang: Lang }) {
  const bodies = getBodies(lang);
  const ui = getUi(lang);
  const t = ui.space3d;
  const other = otherLang(lang);
  const otherUi = getUi(other);

  const selected = useView3dStore((s) => s.selected);
  const auto = useView3dStore((s) => s.auto);
  const hidden = useView3dStore((s) => s.hidden);
  const params = useView3dStore((s) => s.params);
  const body = selected >= 0 ? bodies[selected] : null;

  const fpsRef = useRef<HTMLElement>(null);
  const resRef = useRef<HTMLElement>(null);

  /**
   * Экран сборки. Три состояния, а не два: между «собралось» и «убрано»
   * лежит полсекунды затухания, и всё это время экран обязан оставаться
   * в разметке — иначе он не растворится, а исчезнет щелчком.
   */
  const [build, setBuild] = useState<"running" | "fading" | "done">("running");
  /** Долгая ли сборка. По ней показывается объяснение, см. ниже */
  const [slow, setSlow] = useState(false);

  // Уходя со страницы, возвращаем сцену к обзору: состояние живёт в модуле
  // и само по себе не сбросится
  useEffect(() => resetScene, []);

  // На быстрой видеокарте сборка укладывается в пару секунд, и объясняться
  // не за что: строка про минуту ожидания сама по себе тревожит. Она ждёт
  // ровно столько, сколько ждёт терпеливый зритель
  useEffect(() => {
    if (build !== "running") return;
    const timer = window.setTimeout(() => setSlow(true), 4000);
    return () => window.clearTimeout(timer);
  }, [build]);

  useEffect(() => {
    if (build !== "fading") return;
    const timer = window.setTimeout(() => setBuild("done"), 600);
    return () => window.clearTimeout(timer);
  }, [build]);

  const onSettled = useCallback(() => {
    setBuild((phase) => (phase === "running" ? "fading" : phase));
  }, []);

  const onStats = useCallback(({ fps, width, height }: Stats) => {
    if (fpsRef.current) fpsRef.current.textContent = fps.toFixed(0);
    if (resRef.current) resRef.current.textContent = `${width}×${height}`;
  }, []);

  useEffect(() => {
    // Ползунки живут своей клавиатурой, кнопки — пробелом
    const typing = (e: KeyboardEvent) => {
      const node = e.target as HTMLElement | null;
      return (
        node instanceof HTMLInputElement ||
        (e.key === " " && node instanceof HTMLButtonElement)
      );
    };

    const onKey = (e: KeyboardEvent) => {
      if (typing(e)) return;

      const key = e.key.toLowerCase();
      // Полёт разбирает свои клавиши сам и держит их до отпускания
      if (roamKey(key, true)) return;

      if (key === "escape") selectBody3d(-1);
      else if (key === "h") toggleHidden();
      else if (key === "r") resetView();
      else if (key === " ") {
        e.preventDefault();
        toggleAuto();
      } else if (key === "f") {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen?.();
      }
    };

    const onKeyUp = (e: KeyboardEvent) => roamKey(e.key.toLowerCase(), false);

    // Уход с вкладки не отпускает клавиши: без этого зажатая W улетала бы
    // в бесконечность, пока страница висит в фоне
    const onBlur = () => releaseRoam();

    window.addEventListener("keydown", onKey);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("blur", onBlur);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  const ui_ = hidden ? `${styles.ui} ${styles.gone}` : styles.ui;

  return (
    <div className={styles.host}>
      <Scene3D
        label={t.description}
        error={t.error}
        onStats={onStats}
        onSettled={onSettled}
      />

      {build !== "done" && (
        <div
          className={`${styles.loading} ${build === "fading" ? styles.loadingGone : ""}`}
          role="status"
          aria-live="polite"
        >
          <p className={styles.loadingTitle}>{t.loading.title}</p>
          <div className={styles.loadingBar} aria-hidden="true" />
          <p
            className={`${styles.loadingNote} ${slow ? styles.shown : ""}`}
            aria-hidden={!slow}
          >
            {t.loading.note}
          </p>
        </div>
      )}

      <div className={`${ui_} ${styles.brand}`}>
        <Link href={langPath(lang)} className={styles.mark}>
          Z<span>\</span>M
        </Link>
        <h1 className={styles.status}>{body ? body.name : t.overview}</h1>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </div>

      <div className={`${ui_} ${styles.corner}`}>
        <nav className={styles.links} aria-label={ui.switchLanguage}>
          <Link href={spacePath(lang)}>{t.dotsView}</Link>
          <span className={styles.sep} aria-hidden="true">
            ·
          </span>
          <span className={styles.active} aria-current="page">
            {ui.langName}
          </span>
          <span className={styles.sep} aria-hidden="true">
            /
          </span>
          <Link href={space3dPath(other)} hrefLang={other} lang={other}>
            {otherUi.langName}
          </Link>
        </nav>
        {/* Управление и горячие клавиши идут одной строкой под навигацией:
            в углу они читаются как подпись к сцене, а не спорят за низ
            экрана с рядом тел */}
        <p className={styles.hint} aria-hidden="true">
          {t.hint}
          {/* Клавиши уходят первыми, когда строка перестаёт помещаться:
              без мыши сцену не покрутить, а без хоткеев — вполне */}
          <span className={styles.keys}>
            {" · "}
            <kbd>WASD</kbd> {t.keys.roam} · <kbd>H</kbd> {t.keys.hide} ·{" "}
            <kbd>R</kbd> {t.keys.reset} · <kbd>Space</kbd> {t.keys.auto} ·{" "}
            <kbd>F</kbd> {t.keys.fullscreen}
          </span>
        </p>

        <p className={styles.stats}>
          <b ref={fpsRef}>–</b> FPS · <span ref={resRef}>–</span>
        </p>
      </div>

      <section className={`${ui_} ${styles.panel}`} aria-label={t.panel}>
        <h2>{t.panel}</h2>
        {SLIDERS.map(({ key, max }) => (
          <div key={key} className={styles.row}>
            <label htmlFor={`p-${key}`}>
              {t.params[key]}
              <span>{Math.round(params[key] * 100)}%</span>
            </label>
            <input
              id={`p-${key}`}
              type="range"
              min={0}
              max={max}
              step={1}
              value={Math.round(params[key] * 100)}
              onChange={(e) => setParam(key, Number(e.target.value) / 100)}
            />
          </div>
        ))}
        <div className={styles.buttons}>
          <button
            type="button"
            className={auto ? styles.on : undefined}
            aria-pressed={auto}
            onClick={toggleAuto}
          >
            {t.autoOrbit}
          </button>
          <button
            type="button"
            onClick={() => {
              resetView();
              (Object.keys(DEFAULT_PARAMS) as (keyof Params)[]).forEach((key) =>
                setParam(key, DEFAULT_PARAMS[key]),
              );
            }}
          >
            {t.reset}
          </button>
        </div>

        {/* Сноска под приборами, а не над сценой: масштаб — свойство этой
            модели, и признаваться в нём уместно там же, где её крутят */}
        <p className={styles.note}>{t.scaleNote}</p>
      </section>

      <nav className={`${ui_} ${styles.rail}`} aria-label={t.bodiesLabel}>
        {bodies.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={styles.railItem}
            aria-pressed={index === selected}
            onClick={() => selectBody3d(index === selected ? -1 : index)}
          >
            {item.name}
          </button>
        ))}
      </nav>

      <main className={`${ui_} ${styles.main}`} aria-live="polite">
        {body && (
          // Ключ по телу: смена выбора перезапускает проявление карточки
          <article key={body.id} className={styles.card}>
            <p className={styles.eyebrow}>{body.eyebrow}</p>
            <h2 className={styles.title}>{body.name}</h2>
            <p className={styles.tagline}>{body.tagline}</p>

            <dl className={styles.values}>
              {body.stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>

            <p className={styles.text}>{body.body}</p>

            <button
              type="button"
              className={styles.back}
              onClick={() => selectBody3d(-1)}
            >
              <i aria-hidden="true">←</i>
              {t.back}
            </button>
          </article>
        )}
      </main>
    </div>
  );
}
