import puppeteer from 'puppeteer';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';

const url = process.argv[2] || 'http://localhost:4321';
const label = process.argv[3] || '';

const dir = './screenshots';
if (!existsSync(dir)) mkdirSync(dir);

// Find the next available index
const existing = existsSync(dir)
  ? readdirSync(dir).filter(f => f.startsWith('screenshot-') && f.endsWith('.png'))
  : [];
const indices = existing.map(f => {
  const m = f.match(/^screenshot-(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
});
const nextIndex = indices.length > 0 ? Math.max(...indices) + 1 : 1;

const filename = label
  ? `screenshot-${nextIndex}-${label}.png`
  : `screenshot-${nextIndex}.png`;
const filepath = join(dir, filename);

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2' });
await page.screenshot({ path: filepath, fullPage: true });
await browser.close();

console.log(`Screenshot saved: ${filepath}`);
