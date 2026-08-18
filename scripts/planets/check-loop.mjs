#!/usr/bin/env node
/**
 * Проверка бесшовности петли.
 *
 *   node scripts/planets/check-loop.mjs
 *
 * Кадр при t = 1 обязан совпасть с кадром при t = 0 узел в узел: последний
 * кадр GIF показывается ровно перед первым, и любое расхождение видно как
 * рывок. Ломается это легко — достаточно задать спутнику дробное число
 * оборотов за петлю или привязать что-нибудь к абсолютному времени.
 */

import { PLANETS, ORDER } from "./planets/index.mjs";
import { computeGeometry } from "./core/geometry.mjs";

/** Разница в яркости, ниже которой узел считается неподвижным */
const TOLERANCE = 1e-9;

const geom = computeGeometry({ size: 480, step: 7 });
let failed = 0;

for (const name of ORDER) {
  const planet = PLANETS[name];
  const { field } = planet.create(geom);

  let worst = 0;
  let where = "";
  for (let y = 0; y < geom.rows; y++) {
    for (let x = 0; x < geom.cols; x++) {
      const diff = Math.abs(field(x, y, 1) - field(x, y, 0));
      if (diff > worst) {
        worst = diff;
        where = `${x},${y}`;
      }
    }
  }

  const ok = worst <= TOLERANCE;
  if (!ok) failed++;
  console.log(
    `${ok ? "✓" : "✗"} ${planet.title.padEnd(9)} расхождение ${worst.toExponential(1)}${ok ? "" : ` в узле ${where}`}`,
  );
}

process.exit(failed ? 1 : 0);
