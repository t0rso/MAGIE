import type { Orari } from '../lib/types';
import { GIORNI } from '../lib/orari';

function minuti(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

export interface Stato {
  aperto: boolean;
  giorno: string;
  /** Testo secondario, es. "chiude alle 23:00" o "apre domani alle 12:00". */
  dettaglio: string;
}

const LABEL: Record<string, string> = {
  lun: 'lunedì', mar: 'martedì', mer: 'mercoledì', gio: 'giovedì',
  ven: 'venerdì', sab: 'sabato', dom: 'domenica',
};

export function statoApertura(orari: Orari, ora = new Date()): Stato {
  const idx = ora.getDay();
  const giorno = GIORNI[idx];
  const adesso = ora.getHours() * 60 + ora.getMinutes();
  const fasce = orari[giorno] ?? [];

  for (const [a, b] of fasce) {
    if (adesso >= minuti(a) && adesso < minuti(b)) {
      return { aperto: true, giorno, dettaglio: `chiude alle ${b === '24:00' ? 'mezzanotte' : b}` };
    }
  }
  // Prossima apertura oggi?
  const prossima = fasce.find(([a]) => adesso < minuti(a));
  if (prossima) return { aperto: false, giorno, dettaglio: `apre oggi alle ${prossima[0]}` };

  // Altrimenti cerca nei prossimi giorni
  for (let i = 1; i <= 7; i++) {
    const g = GIORNI[(idx + i) % 7];
    const f = orari[g];
    if (f && f.length) {
      const quando = i === 1 ? 'domani' : LABEL[g];
      return { aperto: false, giorno, dettaglio: `apre ${quando} alle ${f[0][0]}` };
    }
  }
  return { aperto: false, giorno, dettaglio: 'chiuso' };
}
