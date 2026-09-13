// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Aggiorna con l'URL definitivo dopo il deploy (serve a sitemap e meta Open Graph)
  site: 'https://gelateria-magie.netlify.app',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
