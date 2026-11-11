# ascii spiders

```
     |            |
     |            |
     |   `@#@@.   |
     |   X@++@8   |
     |   X++++8   |
     -__ ##++%@  _-|
   \-_  ¯-,@@.--¯  /
   /\ ¯--_8S%@___--/\
  /  \ -- ,8X'¯¯-_/  \
  /   ¯-¯¯    ¯-_    \
 /  |¯           ¯-_  \
/   |              |   \
    |              |
    |              |
    |              |
     |             |
     |             |
```

Orb webs and spiders drawn as ASCII on a canvas. Zero dependencies.

```sh
npm install && npm run dev
```

```ts
import { SpiderEngine } from "./src";

const engine = new SpiderEngine(canvas, [{ kind: "nephila", size: 1 }]);

// Options: fly count (0 = none), "dark" | "light" theme, a drawing stage
// ("frame" | "radials" | "spiral" | "full"), pointer on/off, a single still frame,
// web count, the jumping spider on/off, build: true to watch every web go up from bare frames,
// and clearCentre: true to keep the middle clear for a headline.
new SpiderEngine(canvas, undefined, { theme: "light", flies: 0, pointer: false, still: true });
```

Routes:

```
/            the demo
/light       the chat hero scene, on paper
/dark        the chat hero scene, on black
/blueprints  ten frames on one grid, from a strand of silk to the spiders
```

`?spiders=nephila,argiope,araneus` picks the cast on any spider page, `?all` puts every species in, and `?still=1` draws one settled frame.

MIT
