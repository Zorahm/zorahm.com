#!/usr/bin/env node
/**
 * Контактный лист: каждая планета в четырёх фазах петли.
 *
 *   node scripts/planets/preview.mjs            все восемь
 *   node scripts/planets/preview.mjs mars       одна
 *
 * Нужен, чтобы смотреть на кадры, не открывая GIF: строка на планету,
 * колонка на четверть петли. Первая и последняя колонки — соседи по кругу,
 * так что по ним видно, сходится ли петля.
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { createCanvas } from "@napi-rs/canvas";
import { PLANETS, ORDER } from "./planets/index.mjs";
import { computeGeometry } from "./core/geometry.mjs";
import { drawFrame, VOID } from "./core/render.mjs";

const SIZE = 480;
const STEP = 7;
const TILE = 200;
const PHASES = [0, 0.25, 0.5, 0.75];

const names = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const list = names.length ? names : ORDER;

const sheet = createCanvas(TILE * PHASES.length, TILE * list.length);
const sctx = sheet.getContext("2d");
sctx.fillStyle = `rgb(${VOID.join(",")})`;
sctx.fillRect(0, 0, sheet.width, sheet.height);

const frame = createCanvas(SIZE, SIZE);
const fctx = frame.getContext("2d");

list.forEach((name, row) => {
  const planet = PLANETS[name];
  const geom = computeGeometry({ size: SIZE, step: STEP });
  const { field } = planet.create(geom);

  PHASES.forEach((t, col) => {
    drawFrame(fctx, geom, field, planet.accent, t);
    sctx.drawImage(frame, col * TILE, row * TILE, TILE, TILE);
  });

  sctx.fillStyle = "#78828f";
  sctx.font = "13px sans-serif";
  sctx.fillText(planet.title, 8, row * TILE + 18);
});

mkdirSync(resolve(process.cwd(), "gifs"), { recursive: true });
const out = resolve(process.cwd(), "gifs/preview.png");
writeFileSync(out, sheet.toBuffer("image/png"));
console.log(out);
