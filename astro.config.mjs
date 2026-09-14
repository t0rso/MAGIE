// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Da aggiornare con il dominio definitivo (serve a sitemap, canonical e Open Graph)
  site: 'https://gelateria-magie.netlify.app',
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap()],
});
