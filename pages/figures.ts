import { SpiderEngine, type SpiderOptions, type SpiderSpec } from "../src";

export interface Figure extends SpiderOptions {
  spiders?: SpiderSpec[];
  /** A fly drops onto the web every few seconds, so there is always something to hunt. */
  drip?: boolean;
  /** The silk is plucked somewhere every second or so, so it is never still. */
  ring?: boolean;
}

/** One engine per `<canvas data-fig>`; off-screen figures pause themselves. */
export function mountFigures(figures: Record<string, Figure>) {
  const engines: Record<string, SpiderEngine> = {};
  for (const canvas of document.querySelectorAll<HTMLCanvasElement>("canvas[data-fig]")) {
    const id = canvas.dataset.fig ?? "";
    const fig = figures[id];
    if (!fig) continue;
    const { spiders, drip, ring, ...options } = fig;
    const engine = new SpiderEngine(canvas, spiders, options);
    engines[id] = engine;
    if (options.still) continue;
    if (drip) {
      setInterval(() => {
        const web = engine.world.webs[0];
        if (!web) return;
        const a = Math.random() * Math.PI * 2;
        const r = web.radius * (0.35 + 0.4 * Math.random());
        engine.world.release(web.cx + Math.cos(a) * r, web.cy + Math.sin(a) * r);
      }, 5200);
    }
    if (ring) {
      setInterval(() => {
        const web = engine.world.webs[0];
        if (!web) return;
        const a = Math.random() * Math.PI * 2;
        const r = web.radius * (0.3 + 0.6 * Math.random());
        const x = web.cx + Math.cos(a) * r;
        const y = web.cy + Math.sin(a) * r;
        web.pluck(x, y, Math.cos(a + 1.6) * 6, Math.sin(a + 1.6) * 6, engine.renderer.cellWidth * 3);
      }, 1100);
    }
  }
  return engines;
}
