/**
 * Кисти для карт планет. Карта — это поверхность, развёрнутая в прямоугольник
 * «долгота × широта»; шейдер потом натягивает её обратно на шар.
 *
 * Всё задаётся в градусах, а не в пикселях: планета описывается тем же языком,
 * каким её описывают атласы. Две вещи кисти берут на себя.
 *
 *   1. Растяжение по долготе. Круглое пятно на шаре в равнопромежуточной
 *      проекции тем шире, чем ближе к полюсу, — отсюда делитель cos(lat).
 *   2. Шов на 180-м меридиане. Каждая фигура рисуется трижды, со сдвигом на
 *      ширину карты влево и вправо, иначе пятно у края обрывается.
 */

export type MapBox = {
  width: number;
  height: number;
  /** Долгота в градусах → X в пикселях */
  lonX: (deg: number) => number;
  /** Широта в градусах → Y в пикселях */
  latY: (deg: number) => number;
  /** Пикселей в одном градусе */
  degX: number;
  degY: number;
};

export type MapDraw = (ctx: CanvasRenderingContext2D, box: MapBox) => void;

/** Рисует карту в новый холст. Ширина всегда вдвое больше высоты. */
export function drawEquirect(height: number, draw: MapDraw): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = height * 2;
  canvas.height = height;

  const ctx = canvas.getContext("2d");
  if (ctx) {
    draw(ctx, {
      width: canvas.width,
      height: canvas.height,
      lonX: (deg) => ((deg + 180) / 360) * canvas.width,
      latY: (deg) => ((90 - deg) / 180) * canvas.height,
      degX: canvas.width / 360,
      degY: canvas.height / 180,
    });
  }

  return canvas;
}

/**
 * Складывает два слоя в одну текстуру: первый в красный канал, второй
 * в зелёный. Так Земля получает материки и облака порознь, не занимая
 * второй сэмплер в шейдере.
 */
export function mergeLayers(
  red: HTMLCanvasElement,
  green: HTMLCanvasElement,
): HTMLCanvasElement {
  const ctx = red.getContext("2d");
  const source = green.getContext("2d");
  if (!ctx || !source) return red;

  const target = ctx.getImageData(0, 0, red.width, red.height);
  const layer = source.getImageData(0, 0, green.width, green.height);
  for (let i = 0; i < target.data.length; i += 4) {
    target.data[i + 1] = layer.data[i];
  }
  ctx.putImageData(target, 0, 0);
  return red;
}

const gray = (level: number) => {
  const c = Math.round(Math.max(0, Math.min(1, level)) * 255);
  return `rgb(${c},${c},${c})`;
};

/** Детерминированный ГПСЧ: карта обязана быть одинаковой при каждой загрузке */
export function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function fillBase(ctx: CanvasRenderingContext2D, box: MapBox, level: number) {
  ctx.fillStyle = gray(level);
  ctx.fillRect(0, 0, box.width, box.height);
}

/** Рисует fn три раза, покрывая шов карты */
function wrapped(
  ctx: CanvasRenderingContext2D,
  box: MapBox,
  lon: number,
  fn: (ctx: CanvasRenderingContext2D) => void,
) {
  for (const shift of [-box.width, 0, box.width]) {
    ctx.save();
    ctx.translate(box.lonX(lon) + shift, 0);
    fn(ctx);
    ctx.restore();
  }
}

export type Blob = {
  lon: number;
  lat: number;
  /** Полуоси в градусах */
  rx: number;
  ry: number;
  level: number;
  alpha?: number;
  /** Поворот в плоскости карты, радианы */
  spin?: number;
};

/** Пятно на поверхности */
export function blob(ctx: CanvasRenderingContext2D, box: MapBox, o: Blob) {
  const stretch = 1 / Math.max(Math.cos((o.lat * Math.PI) / 180), 0.2);
  wrapped(ctx, box, o.lon, (c) => {
    c.translate(0, box.latY(o.lat));
    c.globalAlpha = o.alpha ?? 1;
    c.fillStyle = gray(o.level);
    c.beginPath();
    c.ellipse(
      0,
      0,
      o.rx * box.degX * stretch,
      o.ry * box.degY,
      o.spin ?? 0,
      0,
      Math.PI * 2,
    );
    c.fill();
  });
}

/** Широтная полоса во всю карту */
export function band(
  ctx: CanvasRenderingContext2D,
  box: MapBox,
  o: { lat0: number; lat1: number; level: number; alpha?: number },
) {
  const y0 = box.latY(Math.max(o.lat0, o.lat1));
  const y1 = box.latY(Math.min(o.lat0, o.lat1));
  ctx.save();
  ctx.globalAlpha = o.alpha ?? 1;
  ctx.fillStyle = gray(o.level);
  ctx.fillRect(0, y0, box.width, y1 - y0);
  ctx.restore();
}

/** Широтная полоса с гуляющим краем: граница поясов не по линейке */
export function wavyBand(
  ctx: CanvasRenderingContext2D,
  box: MapBox,
  o: {
    lat0: number;
    lat1: number;
    level: number;
    alpha?: number;
    waves?: number;
    amp?: number;
    phase?: number;
  },
) {
  const waves = o.waves ?? 5;
  const amp = o.amp ?? 2;
  const phase = o.phase ?? 0;
  const step = box.width / 240;

  ctx.save();
  ctx.globalAlpha = o.alpha ?? 1;
  ctx.fillStyle = gray(o.level);
  ctx.beginPath();
  for (let x = 0; x <= box.width; x += step) {
    const u = (x / box.width) * Math.PI * 2 * waves + phase;
    ctx.lineTo(x, box.latY(o.lat1 + Math.sin(u) * amp));
  }
  for (let x = box.width; x >= 0; x -= step) {
    const u = (x / box.width) * Math.PI * 2 * waves + phase * 1.7;
    ctx.lineTo(x, box.latY(o.lat0 + Math.cos(u) * amp));
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

/** Кратер: тёмное дно, светлый вал, у молодых — лучи выброса */
export function crater(
  ctx: CanvasRenderingContext2D,
  box: MapBox,
  o: {
    lon: number;
    lat: number;
    /** Радиус в градусах */
    radius: number;
    floor?: number;
    rim?: number;
    rays?: number;
    random: () => number;
  },
) {
  const stretch = 1 / Math.max(Math.cos((o.lat * Math.PI) / 180), 0.2);
  wrapped(ctx, box, o.lon, (c) => {
    c.translate(0, box.latY(o.lat));
    c.scale(stretch, 1);

    const r = o.radius * box.degX;

    if (o.rays) {
      c.save();
      c.globalAlpha = 0.5;
      c.strokeStyle = gray(0.92);
      c.lineWidth = r * 0.18;
      for (let i = 0; i < o.rays; i++) {
        const a = o.random() * Math.PI * 2;
        const len = r * (2.5 + o.random() * 4);
        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(Math.cos(a) * len, Math.sin(a) * len * (box.degY / box.degX));
        c.stroke();
      }
      c.restore();
    }

    c.fillStyle = gray(o.rim ?? 0.95);
    c.beginPath();
    c.arc(0, 0, r, 0, Math.PI * 2);
    c.fill();

    c.fillStyle = gray(o.floor ?? 0.34);
    c.beginPath();
    c.arc(0, 0, r * 0.72, 0, Math.PI * 2);
    c.fill();
  });
}

/** Многоугольник по списку [долгота, широта] — так задаются материки */
export function polygon(
  ctx: CanvasRenderingContext2D,
  box: MapBox,
  points: readonly (readonly [number, number])[],
  level: number,
  alpha = 1,
) {
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

/** Лёгкое размытие: убирает пиксельные ступени с краёв материков и поясов */
export function soften(ctx: CanvasRenderingContext2D, radius = 2) {
  ctx.save();
  ctx.filter = `blur(${radius}px)`;
  ctx.drawImage(ctx.canvas, 0, 0);
  ctx.restore();
  ctx.filter = "none";
}
