"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { getUi, langPath, type Lang } from "@/content";
import { useStageDriver } from "@/lib/scroll";
import type { FieldFrame } from "./field/Halftone";
import hud from "./Hud.module.css";
import styles from "./NotFoundPage.module.css";

const Field = dynamic(() => import("./field/Field"), { ssr: false });

/** Две фигуры страницы: число и то, что за ним сидит */
const FRAMES: readonly FieldFrame[] = [
  { id: "notfound", accent: 0.3 },
  { id: "waifik", accent: 0.65 },
];

// Страница 404 отдаётся одним файлом на оба языка, поэтому язык берётся из
// адреса уже в браузере. На сервере адрес неизвестен — там всегда английский.
const noSubscribe = () => () => {};
const langFromPath = (): Lang =>
  window.location.pathname.startsWith("/ru") ? "ru" : "en";
const langOnServer = (): Lang => "en";

/**
 * Страница 404: то же поле точек, что и на главной, только цифры вместо кадров.
 *
 * Клик по полю переводит сцену на второй кадр, и число перетекает в Вайфика —
 * маскота экосистемы. Переход делает та же механика, что и на главной: страница
 * лишь двигает цель, а смешивание фигур остаётся за полем.
 */
export function NotFoundPage() {
  const lang = useSyncExternalStore(noSubscribe, langFromPath, langOnServer);
  const [egg, setEgg] = useState(false);

  useStageDriver(egg ? 1 : 0);

  const ui = getUi(lang);
  const screen = egg ? ui.waifik : ui.notFound;

  return (
    <>
      <Field frames={FRAMES} />

      <button
        type="button"
        className={styles.egg}
        aria-label={ui.eggLabel}
        aria-pressed={egg}
        onClick={() => setEgg((found) => !found)}
      />

      <Link href={langPath(lang)} className={`${hud.hud} ${hud.mark}`}>
        Z<span>\</span>M
      </Link>

      <div className={`${hud.hud} ${hud.frame}`}>{screen.status}</div>

      <main className={styles.main}>
        {/* Ключ по заголовку: смена состояния перезапускает проявление текста */}
        <div key={screen.title} className={styles.copy}>
          <p className={styles.eyebrow}>{screen.eyebrow}</p>
          <h1 className={styles.title}>{screen.title}</h1>
          <p className={styles.body}>{screen.body}</p>
          <p className={`${styles.body} ${styles.muted}`}>{screen.muted}</p>
          <Link href={langPath(lang)} className={styles.biglink}>
            {ui.notFoundHome}
            <i aria-hidden="true">→</i>
          </Link>
        </div>
      </main>
    </>
  );
}
