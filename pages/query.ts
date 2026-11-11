import type { SpiderKind, SpiderSpec } from "../src";

/** ?spiders=nephila,argiope,araneus — one per web, the first in the bottom-left, the rest step down. */
export function spidersFromQuery(): SpiderSpec[] | undefined {
  const kinds = new URLSearchParams(location.search).get("spiders")?.split(",").filter(Boolean) as SpiderKind[] | undefined;
  return kinds?.map((kind, i) => ({ kind, size: 1 - i * 0.04 }));
}

export const flag = (name: string) => new URLSearchParams(location.search).has(name);

/**
 * The chat's first screen: a garden spider in the bottom-left, then golden orb weavers and wasp spiders on
 * the big webs around the middle, and a second garden spider. The centre stays clear for the prompt.
 */
export const HERO_SPIDERS: SpiderSpec[] = [
  { kind: "araneus", size: 1 },
  { kind: "nephila", size: 1.05 },
  { kind: "argiope", size: 1 },
  { kind: "nephila", size: 0.95 },
  { kind: "araneus", size: 0.95 },
  { kind: "argiope", size: 0.92 },
];

/** Every species once (?all), sized so the big ones read as nearer. */
export const ALL_SPIDERS: SpiderSpec[] = [
  { kind: "nephila", size: 1.1 },
  { kind: "argiope", size: 1 },
  { kind: "araneus", size: 0.95 },
];
