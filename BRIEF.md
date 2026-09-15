# Gelateria Magie Rimini — Brief del sito

## Obiettivo (uno solo)

Essere il primo risultato a Rimini per chi cerca **gelato vegano, senza zucchero (stevia), senza lattosio o senza glutine**, e trasformare quella ricerca in:

1. un **ordine di torta** (conversione principale — valore più alto, e chi è celiaco/diabetico/vegano non trova torte altrove)
2. una **visita serale** (orario 14:30–24:00: Magie è il gelato del dopo cena)

Tutto il resto (gusti, storia, mappa, recensioni) esiste per sostenere questi due.

## Chi è Magie (fatti verificati dalla pagina Facebook)

- Via Covignano 152, 47923 Rimini — collina/residenziale, **non lungomare** → cliente riminese, famiglie, sportivi. Non il turista di passaggio.
- 20+ anni di attività. Google 4.6★ / ~196 recensioni. Facebook 1.200 follower, 100% consigliata.
- Aperto **tutti i giorni 10:00–24:00** (dalla loro grafica orari). Motto ufficiale: **"Il gelato senza peccato"**. Colore brand: verde `#1C3E2C` con crema `#F9FBE7`.
- È anche **pasticceria**: pasticcini mignon, biscotti gelato, torte decorate con scritta.
- Tel 0541 012388 · WhatsApp 328 818 4273 · IG/FB `magierimini`.
- Offerta dichiarata: gelato artigianale, coppe, torte personalizzate, yogurt naturale, granite; **opzioni vegane e con stevia "per sportivi, diabetici e intolleranti"**; tavolini fuori, asporto, consegna a domicilio; bombardino/caldi d'inverno.
- Le recensioni parlano soprattutto di: opzioni vegane, zuccheri non raffinati, cremosità, cordialità.

## Chi è il visitatore (in ordine di importanza)

1. **Chi ha un vincolo alimentare** (proprio o di un figlio/ospite) e cerca su Google "gelato vegano Rimini", "gelateria senza lattosio Rimini", "torta gelato senza glutine Rimini". Arriva scettico: vuole capire in 5 secondi *se può fidarsi*.
2. **Chi deve ordinare una torta** per un compleanno, spesso con un invitato intollerante. Vuole sapere: si può, quanto costa, quanto prima devo prenotare, come.
3. **Il riminese la sera**: "è aperto adesso?", "fino a che ora?", "che gusti ci sono oggi?".

## Cosa deve fare la home, in ordine

1. Dichiarare subito la specialità: *gelato artigianale per tutti, anche per chi normalmente non può* (vegano · stevia · senza lattosio · senza glutine). Non "benvenuti nella nostra gelateria".
2. Stato **aperto adesso / apre alle 14:30** + indirizzo + tasto chiama/WhatsApp.
3. CTA **Ordina una torta**.
4. Prova sociale: 4.6★, 196 recensioni, citazioni che parlano di vegano/stevia.
5. Gusti: filtrabili per vincolo (vegano, stevia, senza lattosio, senza glutine) prima ancora che per crema/frutta.
6. Come arrivare, orari, social.

## Pagine

| Pagina | Scopo | Priorità |
|---|---|---|
| `/` | Posizionamento + aperto adesso + CTA torte | alta |
| `/torte` | Catalogo torte + form ordine (data, porzioni, gusti, vincoli alimentari, scritta) → WhatsApp/email | alta |
| `/gusti` | Lista gusti con filtri per vincolo alimentare e allergeni | alta |
| `/senza-zucchero`, `/vegano` | Landing SEO dedicate: cosa offriamo, per chi, con quali ingredienti | media |
| `/contatti` | Orari, mappa, telefono, WhatsApp, consegna a domicilio | media |
| `/chi-siamo` | 20 anni, laboratorio, perché la stevia | bassa |

## Tono

Diretto, concreto, romagnolo senza folklore. Zero "magia" come metafora ripetuta. Parla di ingredienti e di persone, non di "emozioni".

## Stack e vincoli

- Astro + Tailwind, statico su Netlify. Dati in JSON (`src/data`), zero backend.
- Form torte → Netlify Forms (email) + link WhatsApp precompilato come alternativa.
- Mobile first: il 90% arriva da Google Maps sul telefono.
- Schema.org `IceCreamShop` con orari, geo, rating: serve per il local pack.

## Da chiedere alla gelateria (prima di scrivere contenuti)

- [ ] Lista gusti **reale** con: quali sono vegani / con stevia / senza lattosio / senza glutine, allergeni, quali fissi e quali stagionali
- [ ] Come dolcificano davvero (solo stevia? eritritolo? "zucchero non raffinato" nelle recensioni)
- [ ] Torte: formati, prezzi, preavviso minimo, si possono fare vegane/senza glutine/con stevia? decorazioni/foto in cialda?
- [ ] Consegna a domicilio: zona, minimo, orari, come si ordina
- [ ] Email vera (nel prototipo era inventata)
- [ ] Foto: locale, banco, torte, laboratorio, persone (almeno 10–15 buone)
- [ ] Orari invernali: cambiano? giorno di chiusura?
- [ ] Nomi e storia: chi sono, da quando, perché stevia/vegano
- [ ] Hanno già un dominio? Google Business Profile lo gestiscono loro?

## Cosa NON fare

- Non riusare la lista gusti del prototipo precedente: era inventata.
- Non mettere prezzi finché non confermati.
- Non fare l'hero "foto cono + slogan": chi cerca vegano/stevia deve trovare la parola nella prima riga.
