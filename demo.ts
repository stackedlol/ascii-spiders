import { SpiderEngine, type SpiderKind, type SpiderSpec } from "./src";

// ?spiders=nephila,argiope,araneus — one per web, the first in the bottom-left. No param: the classic six.
const kinds = new URLSearchParams(location.search).get("spiders")?.split(",").filter(Boolean) as SpiderKind[] | undefined;
const spiders: SpiderSpec[] | undefined = kinds?.map((kind) => ({ kind }));

new SpiderEngine(document.querySelector("canvas")!, spiders);
