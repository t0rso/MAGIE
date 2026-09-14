# Gelateria Magie · Rimini

Sito statico (Astro + Tailwind 4) per la Gelateria Magie, via Covignano 152, Rimini.
L'obiettivo e le scelte sono in [BRIEF.md](BRIEF.md).

## Sviluppo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run check    # type-check
```

## Dove stanno i contenuti

| File | Cosa |
|---|---|
| `src/data/info.json` | Anagrafica, orari, contatti, recensioni, social |
| `src/data/gusti.json` | Lista gusti con vincoli alimentari e allergeni |
| `src/data/torte.json` | Torte, porzioni, prezzi, preavviso |
| `src/data/vincoli.json` | I quattro vincoli (vegano, stevia, senza lattosio, senza glutine) |
| `src/data/nonSoloGelato.json` | Coppe, yogurt, granite, caldi |

Ogni dato ancora da verificare con la gelateria ha `daConfermare: true` e mostra il badge "da confermare" sul sito. Quando è confermato, basta togliere la chiave.

## Deploy

Netlify: `netlify.toml` è già pronto. Il form torte usa Netlify Forms (`name="ordine-torta"`): attivare le notifiche email dal pannello Netlify.
Aggiornare `site` in `astro.config.mjs` con il dominio definitivo.
