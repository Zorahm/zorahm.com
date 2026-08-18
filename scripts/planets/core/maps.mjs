/**
 * Кисти для рисования карт планет.
 *
 * Всё рисуется в градусах (долгота, широта), а не в пикселях: так планета
 * описывается тем же языком, каким её описывают атласы. Две вещи кисти берут
 * на себя:
 *
 *   1. Растяжение по долготе. Круглое пятно на шаре в равнопромежуточной
 *      проекции тем шире, чем ближе к полюсу, — отсюда делитель cos(lat).
 *   2. Шов на 180-м меридиане. Каждая фигура рисуется трижды, со сдвигом на
 *      ширину карты влево и вправо, иначе пятно у края обрывается.
 */

const gray = (level) => {
  const c = Math.round(Math.max(0, Math.min(1, level)) * 255);
  return `rgb(${c},${c},${c})`;
};

/** Фон карты */
export function fillBase(ctx, box, level) {
  ctx.fillStyle = gray(level);
  ctx.fillRect(0, 0, box.width, box.height);
}

/** Рисует fn три раза, покрывая шов карты */
export function wrapped(ctx, box, lon, fn) {
  for (const shift of [-box.width, 0, box.width]) {
    ctx.save();
    ctx.translate(box.lonX(lon) + shift, 0);
    fn(ctx);
    ctx.restore();
  }
}

/**
 * Пятно на поверхности: эллипс с осями в градусах.
 * spin поворачивает его в плоскости карты — полосы получаются косыми.
 */
export function blob(ctx, box, { lon, lat, rx, ry, level, alpha = 1, spin = 0 }) {
  const stretch = 1 / Math.max(Math.cos((lat * Math.PI) / 180), 0.2);
  wrapped(ctx, box, lon, (c) => {
    c.translate(0, box.latY(lat));
    c.globalAlpha = alpha;
    c.fillStyle = gray(level);
    c.beginPath();
    c.ellipse(0, 0, rx * box.degX * stretch, ry * box.degY, spin, 0, Math.PI * 2);
    c.fill();
  });
}

/** Широтная полоса во всю карту */
export function band(ctx, box, { lat0, lat1, level, alpha = 1 }) {
  const y0 = box.latY(Math.max(lat0, lat1));
  const y1 = box.latY(Math.min(lat0, lat1));
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = gray(level);
  ctx.fillRect(0, y0, box.width, y1 - y0);
  ctx.restore();
}

/**
 * Волнистая широтная полоса: край гуляет синусом, поэтому граница поясов
 * не выглядит начерченной по линейке.
 */
export function wavyBand(ctx, box, { lat0, lat1, level, alpha = 1, waves = 5, amp = 2, phase = 0 }) {
  const step = box.width / 240;
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = gray(level);
  ctx.beginPath();
  for (let x = 0; x <= box.width; x += step) {
    const u = (x / box.width) * Math.PI * 2 * waves + phase;
    ctx.lineTo(x, box.latY(lat1 + Math.sin(u) * amp));
  }
  for (let x = box.width; x >= 0; x -= step) {
    const u = (x / box.width) * Math.PI * 2 * waves + phase * 1.7;
    ctx.lineTo(x, box.latY(lat0 + Math.cos(u) * amp));
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

/**
 * Кратер: тёмное дно, светлый вал, иногда лучи выброса.
 * Лучи достаются только молодым кратерам — их задаёт вызывающая сторона.
 */
export function crater(ctx, box, { lon, lat, radius, floor = 0.34, rim = 0.95, rays = 0, random }) {
  const stretch = 1 / Math.max(Math.cos((lat * Math.PI) / 180), 0.2);
  wrapped(ctx, box, lon, (c) => {
    c.translate(0, box.latY(lat));
    c.scale(stretch, 1);

    if (rays > 0) {
      c.save();
      c.globalAlpha = 0.5;
      c.strokeStyle = gray(0.92);
      for (let i = 0; i < rays; i++) {
        const a = random() * Math.PI * 2;
        const len = radius * box.degX * (2.5 + random() * 4);
        c.lineWidth = box.degX * radius * 0.18;
        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(Math.cos(a) * len, Math.sin(a) * len * (box.degY / box.degX));
        c.stroke();
      }
      c.restore();
    }

    const r = radius * box.degX;
    c.fillStyle = gray(rim);
    c.beginPath();
    c.arc(0, 0, r, 0, Math.PI * 2);
    c.fill();

    c.fillStyle = gray(floor);
    c.beginPath();
    c.arc(0, 0, r * 0.72, 0, Math.PI * 2);
    c.fill();
  });
}

/** Многоугольник по списку [lon, lat] — так задаются материки */
export function polygon(ctx, box, points, level, alpha = 1) {
  for (const shift of [-box.width, 0, box.width]) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = gray(level);
    ctx.beginPath();
    points.forEach(([lon, lat], i) => {
      const x = box.lonX(lon) + shift;
      const y = box.latY(lat);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
}

/** Лёгкое размытие карты: убирает пиксельные ступени с краёв материков и поясов */
export function soften(ctx, box, radius = 2) {
  ctx.save();
  ctx.filter = `blur(${radius}px)`;
  ctx.drawImage(ctx.canvas, 0, 0);
  ctx.restore();
  ctx.filter = "none";
}
