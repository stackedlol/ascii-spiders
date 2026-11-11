import type { SpiderKind } from "../src";
import { mountFigures, type Figure } from "./figures";
import { flag } from "./query";

const still = flag("still") || matchMedia("(prefers-reduced-motion: reduce)").matches;

/** One web in the middle of the plate, nobody home: the silk alone. */
const web = (extra: Partial<Figure> = {}): Figure => ({
  spiders: [],
  webs: 1,
  corner: false,
  jumper: false,
  flies: 0,
  still,
  ...extra,
});

/** One spider on its own web. */
const one = (kind: SpiderKind, extra: Partial<Figure> = {}): Figure => web({ spiders: [{ kind, size: 1.25 }], ...extra });

const KINDS: SpiderKind[] = ["araneus", "argiope", "nephila"];

mountFigures({
  silk: web({ stage: "frame" }),
  radials: web({ stage: "radials" }),
  spiral: web({ stage: "spiral" }),
  glyphs: web({ ring: true }),
  build: one("araneus", { build: true }),
  gait: { spiders: [], webs: 0, jumper: true, flies: 0, still },
  body: one("araneus", { spiders: [{ kind: "araneus", size: 1.6 }] }),
  ...Object.fromEntries(KINDS.map((kind) => [`species-${kind}`, one(kind, { pointer: false })])),
  "species-jumper": { spiders: [], webs: 0, jumper: true, flies: 0, pointer: false, still },
  hunt: one("nephila", { flies: 3, drip: true }),
  hedge: { still },
});
