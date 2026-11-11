import { SpiderEngine } from "../src";
import { ALL_SPIDERS, flag, HERO_SPIDERS, spidersFromQuery } from "./query";

// The chat's first screen, on black: webs over the page, the cursor plucking the silk, and
// the hubs keeping a soft pool clear in the middle. ?all puts every species in; ?still=1 draws one frame.
new SpiderEngine(document.querySelector("canvas")!, spidersFromQuery() ?? (flag("all") ? ALL_SPIDERS : HERO_SPIDERS), {
  theme: "dark",
  clearCentre: true,
  still: flag("still"),
});
