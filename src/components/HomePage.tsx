"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";
import { Hud } from "./Hud";
import { SaturnGate } from "./SaturnGate";
import { Section } from "./Section";
import { getFrames, type Lang } from "@/content";
import { useScrollDriver } from "@/lib/scroll";
import styles from "./HomePage.module.css";

// WebGL живёт только в браузере, на сервере рендерить нечего
const Field = dynamic(() => import("./field/Field"), { ssr: false });

// Год берётся на клиенте: при статической сборке он иначе застыл бы на дате
// билда. Подписка пустая — значение меняется раз в год, следить не за чем.
const noSubscribe = () => () => {};
const currentYear = () => new Date().getFullYear();
const noYearOnServer = () => null;

export function HomePage({ lang }: { lang: Lang }) {
  const frames = getFrames(lang);
  useScrollDriver(frames.length);

  const year = useSyncExternalStore(noSubscribe, currentYear, noYearOnServer);

  return (
    <>
      <Field />
      <Hud lang={lang} />

      <main className={styles.main}>
        {/* Раньше секций в разметке: текст кадра позиционирован и потому
            перекрывает ворота сам собой, а клик по абзацу остаётся кликом
            по абзацу */}
        <SaturnGate lang={lang} />

        {frames.map((frame, index) => (
          <Section key={frame.id} frame={frame} index={index} lang={lang} />
        ))}
      </main>

      <footer className={styles.footer}>zorahm.com — {year ?? ""}</footer>
    </>
  );
}
