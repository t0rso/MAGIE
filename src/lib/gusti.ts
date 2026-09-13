import gustiData from '../data/gusti.json';
import type { Gusto, Categoria } from './types';

export const gusti = gustiData as Gusto[];

export const CATEGORIE: Record<Categoria, string> = {
  creme: 'Creme',
  frutta: 'Frutta',
  sorbetti: 'Sorbetti',
};

// Filtri dietetici mostrati nella vetrina (l'ordine è quello di visualizzazione)
export const TAG_FILTRI = ['vegano', 'senza lattosio', 'senza glutine', 'stagionale'];

export const ALLERGENI: Record<string, { label: string; icona: string }> = {
  latte: { label: 'Latte', icona: '🥛' },
  uova: { label: 'Uova', icona: '🥚' },
  glutine: { label: 'Glutine', icona: '🌾' },
  'frutta a guscio': { label: 'Frutta a guscio', icona: '🌰' },
};

// Chiave localStorage condivisa da /admin e dalle pagine pubbliche (override demo)
export const STORAGE_KEY = 'magie:disponibilita';

/** Contrasto testo per una card colorata: chiaro su fondo scuro e viceversa. */
export function testoSuColore(hex: string): 'light' | 'dark' {
  const n = parseInt(hex.replace('#', ''), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  const luminanza = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminanza > 0.6 ? 'dark' : 'light';
}
