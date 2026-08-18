#!/usr/bin/env node
/**
 * Генератор halftone-GIF планет.
 *
 *   node scripts/planets/render-gifs.mjs               все восемь
 *   node scripts/planets/render-gifs.mjs mars jupiter  выборочно
 *   node scripts/planets/render-gifs.mjs --size=640 --step=10
 *   node scripts/planets/render-gifs.mjs --jitter=0   без дрожания, файл легче
 *
 * Кадры считаются на CPU: сетка узлов, поле яркости, точки. Сайт делает то же
 * самое на GPU, но там время бесконечно, а здесь всё обязано сойтись в петлю.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { PLANETS, ORDER } from "./planets/index.mjs";
import { renderPlanet } from "./core/render.mjs";

const DEFAULTS = {
  size: 480,
  step: 7,
  fps: 20,
  seconds: 5,
  /** Дрожание точек: живое, но прибавляет около 40% к весу файла */
  jitter: 1,
  out: "gifs",
};

function parseArgs(argv) {
  const options = { ...DEFAULTS };
  const names = [];

  for (const arg of argv) {
    if (!arg.startsWith("--")) {
      names.push(arg.toLowerCase());
      continue;
    }
    const [key, value = "true"] = arg.slice(2).split("=");
    if (!(key in options)) {
      throw new Error(`Неизвестный ключ --${key}. Доступны: ${Object.keys(options).join(", ")}`);
    }
    options[key] = key === "out" ? value : Number(value);
  }

  const unknown = names.filter((n) => !PLANETS[n]);
  if (unknown.length) {
    throw new Error(`Нет такой планеты: ${unknown.join(", ")}. Доступны: ${ORDER.join(", ")}`);
  }

  return { options, names: names.length ? names : ORDER };
}

const { options, names } = parseArgs(process.argv.slice(2));
const outDir = resolve(process.cwd(), options.out);
mkdirSync(outDir, { recursive: true });

const kb = (n) => `${(n / 1024).toFixed(0)} КБ`;
let total = 0;

for (const name of names) {
  const planet = PLANETS[name];
  const started = Date.now();
  process.stdout.write(`${planet.title.padEnd(9)} `);

  const { bytes, frames, geom } = renderPlanet(planet, {
    ...options,
    jitter: Boolean(options.jitter),
  });
  const file = resolve(outDir, `${planet.id}.gif`);
  writeFileSync(file, bytes);
  total += bytes.length;

  const seconds = ((Date.now() - started) / 1000).toFixed(1);
  console.log(
    `${geom.cols}×${geom.rows} узлов · ${frames} кадров · ${kb(bytes.length)} · ${seconds} c`,
  );
}

console.log(`\n${names.length} шт., ${kb(total)} → ${outDir}`);
