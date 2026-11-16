import * as d3 from "d3-geo";
import * as topojson from "topojson-client";

export type EarthTextureHandle = {
  texture: WebGLTexture;
  loaded: boolean;
  dispose(): void;
};

/**
 * Загрузка и рендеринг реальной карты Земли (суша, границы, шельф)
 * в 3-канальную WebGLTexture.
 *
 * Канал R: маска суши
 * Канал G: внутренние границы стран
 * Канал B: береговой шельф
 */
export function createEarthTexture(
  gl: WebGLRenderingContext | WebGL2RenderingContext,
  onLoaded?: () => void,
): EarthTextureHandle {
  const tex = gl.createTexture()!;
  gl.bindTexture(gl.TEXTURE_2D, tex);

  // Заглушка 1x1 пока идёт загрузка
  const dummy = new Uint8Array([0, 0, 0, 255]);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA,
    1,
    1,
    0,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    dummy,
  );
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

  const handle: EarthTextureHandle = {
    texture: tex,
    loaded: false,
    dispose() {
      gl.deleteTexture(tex);
    },
  };

  if (typeof window === "undefined" || typeof document === "undefined") {
    return handle;
  }

  const loadData = async () => {
    try {
      let res: Response;
      try {
        res = await fetch("/countries-110m.json");
        if (!res.ok) throw new Error("Local fetch failed");
      } catch {
        res = await fetch(
          "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",
        );
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const world: any = await res.json();

      const width = 2048;
      const height = 1024;
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const projection = d3
        .geoEquirectangular()
        .fitSize([width, height], { type: "Sphere" });
      const path = d3.geoPath(projection, ctx);

      // Чёрный фон (океан)
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.fillRect(0, 0, width, height);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const land: any = topojson.feature(world, world.objects.land);

      // Канал B: береговой шельф (размытый ореол вокруг суши в сторону океана)
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.strokeStyle = "rgba(0, 0, 255, 0.45)";
      ctx.lineWidth = 18;
      ctx.beginPath();
      path(land);
      ctx.stroke();

      ctx.strokeStyle = "rgba(0, 0, 255, 0.85)";
      ctx.lineWidth = 8;
      ctx.beginPath();
      path(land);
      ctx.stroke();

      // Канал R: суша
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
      ctx.beginPath();
      path(land);
      ctx.fill();

      // Канал G: внутренние границы стран
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const borders: any = topojson.mesh(
        world,
        world.objects.countries,
        (a, b) => a !== b,
      );
      ctx.strokeStyle = "rgba(0, 255, 0, 1)";
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      path(borders);
      ctx.stroke();

      // Загрузка в WebGL-текстуру
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        canvas,
      );
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

      handle.loaded = true;
      onLoaded?.();
    } catch (e) {
      console.warn("space3d: не удалось загрузить реальную карту Земли", e);
    }
  };

  loadData();

  return handle;
}
