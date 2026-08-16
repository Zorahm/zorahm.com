# zorahm.com

Personal site: a single scroll-driven page told in eight frames. Each frame
pairs a short text with a halftone figure — Saturn, data noise, a neural
network, an eye, a globe, ripples, the GitHub mark, the `Z\M` sign — rendered
in WebGL and reassembled as you scroll.

English lives at `/`, Russian at `/ru`.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript, static export) |
| Field of dots | WebGL via React Three Fiber |
| DOM animation | `motion` |
| Scroll state | `zustand` |
| Styles | CSS Modules |
| Tests | Vitest |

No server, no environment variables, no backend calls. `next build` emits a
static `out/` directory.

## Running

```bash
npm ci
npm run dev     # http://localhost:3000
```

```bash
npm test        # unit tests
npm run lint
npm run build   # static export into out/
```

## How the field works

The original prototype (kept in `reference/`) drew every frame on an offscreen
2D canvas and read it back with `getImageData` on every animation frame — a
synchronous GPU→CPU stall — then stroked ~13 000 arcs on the CPU.

This version does it in two GPU passes:

1. **Shapes into render targets.** Only two are ever active — the current frame
   and the next one. They are drawn at grid resolution (~100×60), not screen
   resolution.
2. **One instanced draw call.** A vertex shader reads both fields via
   `texelFetch`, blends them by scroll progress, and computes each dot's
   position, size and colour.

Five shapes are procedural GLSL; three (Saturn, the GitHub mark, the `Z\M`
sign) are baked once with Canvas2D into a texture and animated in the shader.

## Layout

```
src/
  app/          two root layouts — (en) at /, (ru) at /ru — plus robots, sitemap, llms.txt
  content/      frame composition and per-language texts, kept separate
  components/
    field/      WebGL field: grid, frame mechanics, shaders
```

Frame composition (order, alignment, accent) is language-independent and lives
in `content/structure.ts`; texts live in `content/en.ts` and `content/ru.ts`.
`getFrames(lang)` joins them, so a translation edit cannot drift out of sync
with the layout — and tests enforce that both dictionaries stay aligned.

## Licence

Code is available for reading and reuse; the texts and visual identity are not.
