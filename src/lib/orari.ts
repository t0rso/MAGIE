import type { Orari } from './types';
import info from '../data/info.json';

export const orari: Orari = info.orari;

export const GIORNI_LABEL: Record<string, string> = {
  lun: 'Lunedì', mar: 'Martedì', mer: 'Mercoledì', gio: 'Giovedì',
  ven: 'Venerdì', sab: 'Sabato', dom: 'Domenica',
};
export const GIORNI_ORDINATI = ['lun', 'mar', 'mer', 'gio', 'ven', 'sab', 'dom'];

export function formattaFasce(fasce: string[][] | null): string {
  if (!fasce || fasce.length === 0) return 'Chiuso';
  return fasce.map(([a, b]) => `${a} – ${b === '24:00' ? 'mezzanotte' : b}`).join(', ');
}

/** True se tutti i giorni hanno le stesse fasce: permette di scrivere "tutti i giorni 14:30–24". */
export function orariUniformi(o: Orari): string | null {
  const vals = GIORNI_ORDINATI.map((g) => JSON.stringify(o[g] ?? null));
  return vals.every((v) => v === vals[0]) ? formattaFasce(o[GIORNI_ORDINATI[0]]) : null;
}

export function orariSchema(o: Orari) {
  const map: Record<string, string> = {
    lun: 'Monday', mar: 'Tuesday', mer: 'Wednesday', gio: 'Thursday',
    ven: 'Friday', sab: 'Saturday', dom: 'Sunday',
  };
  return Object.entries(o).flatMap(([g, fasce]) =>
    (fasce ?? []).map(([opens, closes]) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: map[g],
      opens,
      closes: closes === '24:00' ? '23:59' : closes,
    })),
  );
}
