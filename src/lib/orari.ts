import type { Orari } from './types';
import info from '../data/info.json';

/** Orari di apertura tipizzati (fonte: src/data/info.json). */
export const orari: Orari = info.orari;

export const GIORNI = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'] as const;
export const GIORNI_LABEL: Record<string, string> = {
  lun: 'Lunedì', mar: 'Martedì', mer: 'Mercoledì', gio: 'Giovedì',
  ven: 'Venerdì', sab: 'Sabato', dom: 'Domenica',
};
// Ordine di visualizzazione (settimana italiana)
export const GIORNI_ORDINATI = ['lun', 'mar', 'mer', 'gio', 'ven', 'sab', 'dom'];

export function formattaFasce(fasce: string[][] | null): string {
  if (!fasce || fasce.length === 0) return 'Chiuso';
  return fasce.map(([a, b]) => `${a} – ${b}`).join(', ');
}

/** Orari nel formato schema.org (OpeningHoursSpecification). */
export function orariSchema(orari: Orari) {
  const map: Record<string, string> = {
    lun: 'Monday', mar: 'Tuesday', mer: 'Wednesday', gio: 'Thursday',
    ven: 'Friday', sab: 'Saturday', dom: 'Sunday',
  };
  return Object.entries(orari).flatMap(([g, fasce]) =>
    (fasce ?? []).map(([opens, closes]) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: map[g],
      opens,
      closes: closes === '24:00' ? '23:59' : closes,
    })),
  );
}
