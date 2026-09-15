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
| `src/data/nonSoloGelato.json` | Coni e coppe, pasticcini, torte, biscotti gelato |

Ogni dato ancora da verificare con la gelateria ha `daConfermare: true` e mostra il badge "da confermare" sul sito. Quando è confermato, basta togliere la chiave.

## Foto

Le foto stanno in `src/assets/foto/` con nomi descrittivi; `alias.json` collega ogni slot usato nel codice (es. `torta-hero`) al file. Un file con lo stesso nome dello slot vince sull'alias.

Le foto reali vanno in `src/assets/foto/` con i nomi elencati in [src/assets/foto/README.md](src/assets/foto/README.md) (lista scatti da dare alla gelateria). Finché un file manca, il sito mostra un segnaposto che dice quale scatto serve; appena c'è, compare ottimizzato (WebP, più formati) senza toccare il codice.

## Gerarchia bottoni

Un solo `btn-primary` per schermata (sempre "Ordina una torta" o l'azione principale), `btn-secondary` in outline per l'alternativa, `btn-link` per tutto il resto. Sui fondi colorati la sezione ha classe `on-dark` e i bottoni si invertono da soli.

## Deploy

Netlify: `netlify.toml` è già pronto. Il form torte usa Netlify Forms (`name="ordine-torta"`): attivare le notifiche email dal pannello Netlify.
Aggiornare `site` in `astro.config.mjs` con il dominio definitivo.
