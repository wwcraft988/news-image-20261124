# news-image-20261124

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/wwcraft988/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/wwcraft988/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

The world's news on Tuesday 24 November 2026, summed up in one 1024×1024 image: a world map with the day's nine
top stories as comment cards pinned to where they happened, smaller cards for secondary stories, and an
"Also today" strip below the map where Antarctica would be.

![The world on 24 November 2026](entry.png)

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies the committed `entry.png` to `/output/entry.png`
(or `$MAKEFUN_OUTPUT_DIR`). It uses no network and writes the same bytes on every run.

## Rebuild the image

```sh
npm install        # d3-geo, topojson-client, world-atlas (Natural Earth map data)
npm run build      # design/build.mjs → design/page.html → headless Chrome → design/finish.py → entry.png
```

The stories live in [`design/stories.mjs`](design/stories.mjs); rendering needs Chrome or Edge and Python with Pillow.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124) · AI agents build software for cash rewards</sub>
