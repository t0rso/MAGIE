# MAGIE · sito prototipo per gelateria

Sito vetrina statico (Astro 7 + Tailwind CSS 4) pensato come **prototipo commerciale**: si mostra al gelatiere da telefono, si personalizza in pochi minuti con i dati reali e si mette online gratis.

**Demo:** https://gelateria-magie.netlify.app (aggiorna dopo il deploy) · QR in `public/qr.png`
**Area gestione demo:** `/admin`, PIN `1234`

## Cosa c'è dentro

| Pagina | Funzioni |
|---|---|
| `/` | Hero, badge **Aperto ora/Chiuso** calcolato dagli orari, gusti *oggi in vetrina*, torte, recensioni, mappa + orari |
| `/gusti` | Tutti i gusti con filtri (categoria, vegano, senza lattosio, senza glutine, stagionale, solo oggi) + ricerca, icone allergeni |
| `/torte` | Catalogo torte e vaschette, **form di prenotazione che apre WhatsApp** con messaggio precompilato (nessun backend) |
| `/chi-siamo` | Storia e valori |
| `/contatti` | Mappa Google, orari con giorno corrente evidenziato, click-to-call, social |
| `/admin` | Pannello demo: accendi/spegni i gusti del giorno, il sito si aggiorna (salvato nel browser) |

SEO locale incluso: meta/Open Graph, `sitemap`, `robots.txt`, dati strutturati `IceCreamShop` (indirizzo, orari, telefono) per la scheda Google.

## Comandi

```bash
npm install        # prima volta
npm run dev        # http://localhost:4321
npm run build      # genera dist/
npm run preview    # anteprima della build
npm run check      # controllo tipi
npm run qr         # rigenera public/qr.png (usa `site` da astro.config.mjs, oppure: npm run qr -- https://...)
```

## Personalizzare per un cliente reale

Tutti i contenuti stanno in tre file JSON, niente codice da toccare:

- `src/data/info.json` — nome, claim, indirizzo (+ lat/lng per la mappa), telefono, **numero WhatsApp** (formato `39333…`, senza `+`), email, social, **orari** (`null` = chiuso, fasce `[["12:00","23:00"]]`), recensioni.
- `src/data/gusti.json` — un oggetto per gusto: `categoria` (`creme` | `frutta` | `sorbetti`), `colore` della card, `allergeni` (`latte`, `uova`, `glutine`, `frutta a guscio`), `tag` (`vegano`, `senza lattosio`, `senza glutine`, `stagionale`, `signature`), `disponibileOggi`.
- `src/data/torte.json` — torte (porzioni, prezzo), formati vaschette, testo sul preavviso.

Poi:
1. Sostituisci le foto Unsplash in `src/components/Hero.astro` e `src/pages/chi-siamo.astro` con foto vere (mettile in `public/`).
2. Cambia `site` in `astro.config.mjs` con l'URL definitivo e rigenera il QR.
3. Palette e font: `src/styles/global.css` (blocco `@theme`).

## Deploy (Netlify, gratis)

1. Crea un repository su GitHub e fai push.
2. Su [netlify.com](https://app.netlify.com) → *Add new site* → *Import from Git* → scegli il repo. Le impostazioni sono già in `netlify.toml` (build `npm run build`, publish `dist`).
3. Il sito è online in ~1 minuto su `https://<nome>.netlify.app`. Da *Site settings → Domain* puoi rinominarlo o collegare un dominio del cliente.

In alternativa, senza GitHub: `npx netlify-cli deploy --prod --dir=dist` dopo un `npm run build`.

## Nota sull'area gestione (`/admin`)

È una **demo**: il PIN è visibile e le modifiche restano nel browser di chi le fa. Serve a far vedere al gelatiere l'esperienza "aggiorno la vetrina dal telefono in 30 secondi". Nella versione venduta il pannello si collega a un CMS (es. [Decap CMS](https://decapcms.org), gratuito, con login vero) e le modifiche si pubblicano per tutti.

## Roadmap (fase 2, da proporre al cliente)

- CMS reale per gusti/orari/torte con login
- Multilingua IT/EN
- Dominio personalizzato + Google Business Profile collegato
- Feed Instagram e recensioni Google in tempo reale
- Ordini vaschette con pagamento online
- Tessera fedeltà digitale / newsletter
