import type { Shape } from "./common";

type Cluster = {
  /** Centre as a fraction of the grid: x to the right, y up */
  x: number;
  y: number;
  /** Spread in units of the grid's reference scale */
  r: number;
  /** Whether the dense core may turn gold */
  gold?: boolean;
};

/**
 * Clouds of the map, placed around the first screen of the page: the heading
 * and the lead take the left and the middle, the language switch the top
 * right corner, so those stay nearly empty and the clouds gather around them.
 */
const CLUSTERS: Cluster[] = [
  { x: 0.77, y: 0.77, r: 0.25 },
  { x: 0.86, y: 0.44, r: 0.12, gold: true },
  { x: 0.5, y: 0.95, r: 0.07 },
  { x: 0.44, y: 0.1, r: 0.18 },
  { x: 0.12, y: 0.16, r: 0.22 },
  { x: 0.3, y: 0.86, r: 0.08, gold: true },
  { x: 0.98, y: 0.1, r: 0.1 },
];

/** Edges between cluster centres, by index: a sparse neighbourhood graph */
const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [2, 5],
  [1, 3],
  [1, 6],
  [3, 4],
];

/** The cluster the dashed search radius is drawn around */
const QUERY = 1;

const vec = (c: Cluster) => `vec2(${c.x.toFixed(3)}, ${c.y.toFixed(3)})`;

/**
 * The /ai figure: an embedding map. Points gather into clouds of different
 * density, a thin graph links the clouds, and a dashed circle marks a nearest
 * neighbour search around one of them.
 *
 * Unlike the home page figures it is not centred but spread over the whole
 * screen: the page scrolls over a fixed field, and whatever part of it shows
 * between the blocks has to carry the picture.
 *
 * There is no time in it. The page asks for a still field, and the figure
 * does not rely on animation to read.
 */
export const latent: Shape = {
  id: "latent",

  glsl: /* glsl */ `
/** Grid node of a point given as a fraction of the grid */
vec2 at(vec2 f){
  return f * (uGrid - 1.0);
}

/** Gaussian cloud: 1 at the centre, spread r in units of uScale */
float cloud(vec2 p, vec2 f, float r){
  vec2 d = p - at(f);
  float s = r * uScale;
  return exp(-dot(d, d) / (2.0 * s * s));
}

float field(vec2 p){
  float density = 0.0;
  float gold = 0.0;

${CLUSTERS.map(
  (c) =>
    `  density += cloud(p, ${vec(c)}, ${c.r.toFixed(3)});` +
    (c.gold ? `\n  gold = max(gold, cloud(p, ${vec(c)}, ${c.r.toFixed(3)}));` : ""),
).join("\n")}

  density = clamp(density, 0.0, 1.0);

  // Samples: every node is lit or not, with the odds set by the density, so
  // the clouds read as scattered points and not as smooth blobs. A thin
  // sprinkle covers the whole screen, so the field never goes blank.
  float lit = step(hash(p.x, p.y, 11.0), 0.03 + 0.78 * smoothstep(0.03, 0.8, density));
  float size = mix(0.22, 0.95, hash(p.x, p.y, 23.0)) * mix(0.42, 1.0, density);
  float v = lit * size;

  // The dense core fills in as a continuous halftone gradient
  v = max(v, smoothstep(0.5, 1.0, density) * 0.9);

  // Graph edges between the cloud centres
${EDGES.map(
  ([a, b]) =>
    `  v = max(v, stroke(segDist(p, at(${vec(CLUSTERS[a])}), at(${vec(CLUSTERS[b])})), 1.0) * 0.42);`,
).join("\n")}

  // Search radius: a dashed circle around the query cloud
  vec2 qc = at(${vec(CLUSTERS[QUERY])});
  float qr = ${CLUSTERS[QUERY].r.toFixed(3)} * uScale * 3.0;
  vec2 qd = p - qc;
  // Dashes about seven nodes long: shorter ones break up into noise
  float dash = step(0.4, fract(atan(qd.y, qd.x) * qr / 7.0));
  v = max(v, stroke(abs(length(qd) - qr), 1.0) * 0.62 * dash);

  // Gold goes by brightness: the cores of the gold clouds are pushed over the
  // threshold, and everything else is held just under it
  return gold > 0.45 && v > 0.55 ? 1.0 : min(v, 0.9);
}
`,
};
