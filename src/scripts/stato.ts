// Stato apertura in tempo reale (fuso Europe/Rome). Aggiorna tutti gli elementi [data-stato].
type Fasce = Record<string, string[][] | null>;
const GIORNI = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'];

function minuti(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

function adesso() {
  const parts = new Intl.DateTimeFormat('it-IT', {
    timeZone: 'Europe/Rome', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false,
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  const wd = get('weekday').slice(0, 3).toLowerCase();
  return { giorno: wd, min: Number(get('hour')) % 24 * 60 + Number(get('minute')) };
}

function calcola(orari: Fasce) {
  const { giorno, min } = adesso();
  const idx = GIORNI.indexOf(giorno);
  const oggi = orari[giorno] ?? [];
  for (const [a, b] of oggi) {
    if (min >= minuti(a) && min < minuti(b)) {
      const chiudeTra = minuti(b) - min;
      return { aperto: true, testo: chiudeTra <= 30 ? `Aperto · chiude tra ${chiudeTra} min` : `Aperto adesso · fino a ${b === '24:00' ? 'mezzanotte' : b}` };
    }
  }
  const prossima = oggi.find(([a]) => minuti(a) > min);
  if (prossima) return { aperto: false, testo: `Chiuso · apre alle ${prossima[0]}` };
  for (let i = 1; i <= 7; i++) {
    const g = GIORNI[(idx + i) % 7];
    const f = orari[g];
    if (f && f.length) return { aperto: false, testo: `Chiuso · ${i === 1 ? 'domani' : `${g}`} apre alle ${f[0][0]}` };
  }
  return { aperto: false, testo: 'Chiuso' };
}

const nodi = document.querySelectorAll<HTMLElement>('[data-stato]');
if (nodi.length) {
  const orari: Fasce = JSON.parse(nodi[0].dataset.stato || '{}');
  const aggiorna = () => {
    const s = calcola(orari);
    nodi.forEach((n) => {
      n.dataset.aperto = String(s.aperto);
      const t = n.querySelector('[data-stato-testo]');
      if (t) t.textContent = s.testo;
    });
  };
  aggiorna();
  setInterval(aggiorna, 60_000);
}
