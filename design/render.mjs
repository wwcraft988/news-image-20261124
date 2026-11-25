// Renders design/page.html with headless Chrome (or Edge) to design/raw.png, then design/finish.py writes
// entry.png: exactly 1024x1024, no metadata, under 1 MiB.

import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = (p) => fileURLToPath(new URL(p, import.meta.url));
const browsers = [
  process.env.CHROME,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/google-chrome', '/usr/bin/chromium',
].filter(Boolean);
const browser = browsers.find((b) => existsSync(b));
if (!browser) throw new Error('no Chrome or Edge found: set CHROME to its path');

execFileSync(browser, [
  '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
  '--window-size=1024,1024', `--screenshot=${here('./raw.png')}`, pathToFileURL(here('./page.html')).href,
], { stdio: 'inherit' });

execFileSync('python', [here('./finish.py'), here('./raw.png'), here('../entry.png')], { stdio: 'inherit' });
