// Genera public/qr.png con il link al sito, da mostrare/stampare per la demo.
// Uso: npm run qr            → usa `site` da astro.config.mjs
//      npm run qr -- https://url-personalizzata.it
import QRCode from 'qrcode';
import { readFile } from 'node:fs/promises';

let url = process.argv[2];
if (!url) {
  const config = await readFile(new URL('../astro.config.mjs', import.meta.url), 'utf8');
  url = config.match(/site:\s*'([^']+)'/)?.[1];
}
if (!url) throw new Error('Nessun URL: passa il link come argomento o imposta `site` in astro.config.mjs');

await QRCode.toFile(new URL('../public/qr.png', import.meta.url).pathname, url, {
  width: 800,
  margin: 2,
  color: { dark: '#33211a', light: '#fdfaf3' },
});
console.log(`QR generato in public/qr.png → ${url}`);
