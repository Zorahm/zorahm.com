"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SPACE_STRUCTURE, getUi, spacePath, type Lang } from "@/content";
import { arriveAt } from "./space/camera";
import { scrollState, useHudStore } from "@/lib/scroll";
import styles from "./SaturnGate.module.css";

/** Сколько длится нырок в кадр, мс */
const DIVE = 620;

const SATURN = SPACE_STRUCTURE.findIndex((body) => body.id === "saturn");

/**
 * Переход с главной страницы в космос.
 *
 * Кадр «Сатурн» кликабелен: точки разлетаются от центра и гаснут, а сцена
 * /space открывается на том же Сатурне и отъезжает к обзору системы. Два
 * экрана сшиты не общей анимацией, а общим состоянием: страница помечает,
 * откуда прилетели, и сцена подхватывает камеру с того же места.
 *
 * Ворота живут внутри main, до секций: там их перекрывает позиционированный
 * текст кадра, и клик по абзацу остаётся кликом по абзацу. Снаружи main это
 * не работало бы — у него свой слой.
 */
export function SaturnGate({ lang }: { lang: Lang }) {
  const router = useRouter();
  const ui = getUi(lang);
  const target = spacePath(lang);

  // Ворота открыты только на первом кадре: дальше по ленте Сатурна на экране нет
  const onSaturn = useHudStore((s) => s.frameIndex === 0);
  const [active, setActive] = useState(false);
  const divingRef = useRef(false);

  // Возврат назад по истории поднимает страницу из кеша, а поле осталось
  // разлетевшимся — возвращаем кадр на место
  useEffect(() => {
    scrollState.exit = 0;
    divingRef.current = false;
    return () => {
      scrollState.exit = 0;
    };
  }, []);

  const dive = () => {
    if (divingRef.current) return;
    divingRef.current = true;
    arriveAt(SATURN);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      router.push(target);
      return;
    }

    const started = performance.now();
    const step = () => {
      const t = Math.min(1, (performance.now() - started) / DIVE);
      // Разгон, а не равномерный отъезд: кадр сначала едва трогается с места
      scrollState.exit = t * t;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);

    // Переход ведёт таймер, а не кадры анимации: в фоновой вкладке
    // requestAnimationFrame встаёт, и клик остался бы без последствий
    window.setTimeout(() => router.push(target), DIVE);
  };

  if (!onSaturn) return null;

  return (
    <div className={styles.gate}>
      <button
        type="button"
        className={styles.hit}
        aria-label={ui.space.enter}
        onPointerEnter={() => {
          setActive(true);
          router.prefetch(target);
        }}
        onPointerLeave={() => setActive(false)}
        onFocus={() => {
          setActive(true);
          router.prefetch(target);
        }}
        onBlur={() => setActive(false)}
        onClick={dive}
      />
      <span className={`${styles.caption} ${active ? styles.captionOn : ""}`}>
        {ui.space.enter} <i aria-hidden="true">→</i>
      </span>
    </div>
  );
}
