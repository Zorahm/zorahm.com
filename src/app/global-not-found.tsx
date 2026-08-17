import type { Metadata } from "next";
import "./globals.css";
import { NotFoundPage } from "@/components/NotFoundPage";
import { fontClassName, viewport } from "./shared";

/**
 * Страница 404 для всего сайта.
 *
 * Не not-found.tsx: корневых макетов у сайта два — свой на каждый язык, — и
 * собрать общий 404 поверх одного из них нельзя. global-not-found работает до
 * рендера макетов, поэтому <html>, шрифты и стили подключает сам.
 */
export const metadata: Metadata = {
  title: "404 — ZorahM",
  description: "Страница не найдена / Page not found",
};

export { viewport };

export default function GlobalNotFound() {
  return (
    <html lang="en" className={fontClassName}>
      <body>
        <NotFoundPage />
      </body>
    </html>
  );
}
