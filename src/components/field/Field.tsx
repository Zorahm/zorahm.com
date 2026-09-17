"use client";

import { Canvas } from "@react-three/fiber";
import { FRAME_STRUCTURE } from "@/content";
import { useMotionAck } from "@/lib/motionAck";
import { Halftone, type FieldFrame } from "./Halftone";
import styles from "./Field.module.css";

/**
 * Поле точек на весь экран. Всё содержимое декоративное, поэтому целиком
 * скрыто от скринридеров.
 *
 * По умолчанию показывает ленту главной страницы; служебные страницы передают
 * свой набор фигур.
 *
 * Не рендерится, пока не принят дисклеймер о движении: до согласия сцена
 * не должна крутиться даже за непрозрачным экраном поверх неё.
 *
 * A still field only draws while it appears and when the viewport changes.
 * The rest of the time the canvas keeps its last frame, so whatever blurs the
 * field from above does not have to be recomputed every frame either.
 */
export default function Field({
  frames = FRAME_STRUCTURE,
  still = false,
}: {
  frames?: readonly FieldFrame[];
  /** No drift and no push from the pointer: the dots stay where they are */
  still?: boolean;
}) {
  const acknowledged = useMotionAck();
  if (!acknowledged) return null;

  return (
    <>
      <div className={styles.field} aria-hidden="true">
        <Canvas
          dpr={[1, 2]}
          frameloop={still ? "demand" : "always"}
          gl={{
            antialias: false,
            alpha: true,
            powerPreference: "high-performance",
          }}
        >
          <Halftone frames={frames} still={still} />
        </Canvas>
      </div>
      <div className={styles.vignette} aria-hidden="true" />
    </>
  );
}
