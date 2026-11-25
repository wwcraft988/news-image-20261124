// Builds design/page.html: a 1024x1024 front page with a world map, comment cards pinned to the places in the
// news, and an "Also today" strip where Antarctica would be. design/render.mjs turns it into entry.png.

import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { geoProjection, geoPath, geoGraticule10 } from 'd3-geo';
import { feature, mesh } from 'topojson-client';
import { date, major, secondary, others } from './stories.mjs';

const require = createRequire(import.meta.url);
const world = JSON.parse(readFileSync(require.resolve('world-atlas/countries-50m.json'), 'utf8'));

const W = 1024, MAP_TOP = 76, MAP_BOTTOM = 790;
const STRETCH = 1.2; // a slightly taller Mercator, so the map fills the space between header and footer
const k = W / (2 * Math.PI);
const mercY = (phi) => Math.log(Math.tan(Math.PI / 4 + phi / 2));
const raw = (lambda, phi) => [lambda, STRETCH * mercY(phi)]; // d3 flips y itself
const projection = geoProjection(raw)
  .rotate([-10, 0])
  .scale(k)
  .translate([W / 2, MAP_TOP + STRETCH * k * mercY((80 * Math.PI) / 180)])
  .clipExtent([[0, MAP_TOP], [W, MAP_BOTTOM]]);
const path = geoPath(projection);

const countries = feature(world, world.objects.countries).features;
const inNews = new Set([
  'United States of America', 'Estonia', 'Ukraine', 'Libya', 'Israel', 'Palestine', 'Lebanon', 'Yemen',
  'Sudan', 'China', 'Pakistan', 'Mexico',
]);
const land = countries
  .map((c) => `<path d="${path(c)}" class="${inNews.has(c.properties.name) ? 'hot' : 'land'}"/>`)
  .join('');
const borders = path(mesh(world, world.objects.countries, (a, b) => a !== b));
const grid = path(geoGraticule10());

// The point of a card's box nearest its pin, where the leader line starts.
function anchor([x, y, w, h], [px, py]) {
  return [Math.min(Math.max(px, x), x + w), Math.min(Math.max(py, y), y + h)];
}

const MAJOR = [206, 144], SECOND = [150, 40];
const lines = [];
const pins = [];
for (const [list, size, cls] of [[major, MAJOR, 'major'], [secondary, SECOND, 'minor']]) {
  for (const s of list) {
    const [px, py] = projection(s.pin);
    const [ax, ay] = anchor([...s.at, ...size], [px, py]);
    lines.push(`<line x1="${ax}" y1="${ay}" x2="${px}" y2="${py}" class="${cls}" style="stroke:${s.tint ?? '#334155'}"/>`);
    pins.push(`<circle cx="${px}" cy="${py}" r="${cls === 'major' ? 9 : 6}" class="halo" style="fill:${s.tint ?? '#334155'}"/>` +
      `<circle cx="${px}" cy="${py}" r="${cls === 'major' ? 4 : 3}" class="dot" style="fill:${s.tint ?? '#334155'}"/>`);
  }
}

const majorCards = major.map((s) => `
  <div class="card" style="left:${s.at[0]}px;top:${s.at[1]}px;--t:${s.tint}">
    <div class="head">
      <div class="img">${s.icon}</div>
      <div><div class="who">${s.place}</div><div class="where">${s.where}</div></div>
    </div>
    <div class="title">${s.title}</div>
    <div class="text">${s.text}</div>
    <div class="comment">💬 ${s.comment}</div>
  </div>`).join('');

const minorCards = secondary.map((s) => `
  <div class="mini" style="left:${s.at[0]}px;top:${s.at[1]}px">
    <div class="mimg">${s.icon}</div><div><b>${s.place}</b> ${s.text}</div>
  </div>`).join('');

const otherItems = others.map((s) => `<div class="item"><span>${s.icon}</span><div>${s.text}</div></div>`).join('');

const html = `<!doctype html>
<html><head><meta charset="utf-8"><style>
  * { box-sizing: border-box; margin: 0; }
  html, body { width: ${W}px; height: ${W}px; overflow: hidden; }
  body { font-family: 'Segoe UI', Arial, sans-serif; color: #0f172a; background: #0b2a4a; position: relative; }
  header { position: absolute; inset: 0 0 auto 0; height: ${MAP_TOP}px; background: #0f172a; color: #fff;
    display: flex; align-items: center; justify-content: space-between; padding: 0 22px; border-bottom: 3px solid #f43f5e; }
  header .l { font-size: 15px; letter-spacing: 3px; font-weight: 700; color: #fda4af; }
  header h1 { font-size: 34px; font-weight: 800; letter-spacing: .5px; line-height: 1; }
  header h1 span { color: #fbbf24; }
  header .r { text-align: right; font-size: 13px; color: #cbd5e1; line-height: 1.35; }
  svg { position: absolute; left: 0; top: 0; }
  .sea { fill: #bfe0f5; }
  .grid { fill: none; stroke: #9fcbe8; stroke-width: .6; }
  .land { fill: #f4efe3; }
  .hot { fill: #fcd9b6; }
  .borders { fill: none; stroke: #b9ab8f; stroke-width: .5; }
  line { stroke-width: 2; }
  line.minor { stroke-width: 1.3; stroke-dasharray: 3 2; }
  .halo { opacity: .28; } .dot { stroke: #fff; stroke-width: 1.5; }
  .card { position: absolute; width: ${MAJOR[0]}px; height: ${MAJOR[1]}px; background: #fff; border-radius: 10px;
    border-top: 4px solid var(--t); box-shadow: 0 3px 10px rgba(15,23,42,.35); padding: 6px 8px 0; overflow: hidden; }
  .head { display: flex; gap: 7px; align-items: center; }
  .img { width: 38px; height: 38px; border-radius: 50%; display: grid; place-items: center; font-size: 22px;
    background: color-mix(in srgb, var(--t) 22%, #fff); flex: none; }
  .who { font-size: 12px; font-weight: 800; color: var(--t); line-height: 1.1; text-transform: uppercase; }
  .where { font-size: 10px; color: #64748b; line-height: 1.1; }
  .title { font-size: 13px; font-weight: 800; line-height: 1.15; margin-top: 3px; }
  .text { font-size: 10.5px; line-height: 1.22; color: #334155; margin-top: 1px; }
  .comment { position: absolute; left: 0; right: 0; bottom: 0; padding: 3px 8px; font-size: 10.5px; font-style: italic;
    background: #f1f5f9; color: #0f172a; border-top: 1px solid #e2e8f0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .mini { position: absolute; width: ${SECOND[0]}px; height: ${SECOND[1]}px; background: rgba(255,255,255,.95);
    border-radius: 14px 14px 14px 3px; box-shadow: 0 2px 6px rgba(15,23,42,.3); display: flex; align-items: center;
    gap: 5px; padding: 3px 7px 3px 4px; font-size: 10.5px; line-height: 1.15; }
  .mini b { color: #be123c; }
  .mimg { font-size: 16px; flex: none; width: 24px; text-align: center; }
  footer { position: absolute; left: 0; right: 0; top: ${MAP_BOTTOM}px; bottom: 0; padding: 8px 18px 0;
    background: linear-gradient(#f8fbff, #e3eef8); border-top: 2px solid #94a3b8; }
  footer h2 { font-size: 13px; letter-spacing: 2.5px; color: #0f172a; font-weight: 800; margin-bottom: 6px; }
  footer h2 span { color: #64748b; font-weight: 600; letter-spacing: 1px; }
  .others { display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px 10px; }
  .item { display: flex; gap: 5px; align-items: center; background: #fff; border-radius: 8px; padding: 4px 7px;
    height: 43px; font-size: 10.5px; line-height: 1.2; box-shadow: 0 1px 3px rgba(15,23,42,.18); }
  .item span { font-size: 15px; flex: none; }
  .item b { color: #be123c; }
</style></head><body>
  <svg width="${W}" height="${W}" viewBox="0 0 ${W} ${W}">
    <rect class="sea" x="0" y="${MAP_TOP}" width="${W}" height="${MAP_BOTTOM - MAP_TOP}"/>
    <path class="grid" d="${grid}"/>
    ${land}
    <path class="borders" d="${borders}"/>
    ${lines.join('')}
    ${pins.join('')}
  </svg>
  <header>
    <div><div class="l">THE WORLD IN ONE PAGE</div><h1>${date.weekday}, <span>${date.day}</span></h1></div>
    <div class="r">What happened around the globe<br>on 24 Nov 2026 · ${major.length} top stories · ${secondary.length + others.length} more</div>
  </header>
  ${majorCards}
  ${minorCards}
  <footer><h2>ALSO TODAY <span>· 24 NOV 2026</span></h2><div class="others">${otherItems}</div></footer>
</body></html>`;

writeFileSync(new URL('./page.html', import.meta.url), html);
console.log('wrote design/page.html');
