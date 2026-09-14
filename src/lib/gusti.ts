import type { Gusto, Torta, Vincolo, VincoloId } from './types';
import gustiJson from '../data/gusti.json';
import torteJson from '../data/torte.json';
import vincoliJson from '../data/vincoli.json';

export const gusti = gustiJson.gusti as Gusto[];
export const torte = torteJson.torte as Torta[];
export const preavvisoGiorni = torteJson.preavvisoGiorni;
export const vincoli = vincoliJson as Vincolo[];

export const vincoloById = Object.fromEntries(vincoli.map((v) => [v.id, v])) as Record<VincoloId, Vincolo>;

export const CATEGORIE: Record<string, string> = { creme: 'Creme', frutta: 'Frutta', sorbetti: 'Sorbetti' };

export function gustiCon(v: VincoloId): Gusto[] {
  return gusti.filter((g) => g.vincoli.includes(v));
}

export const gustiSignature = gusti.filter((g) => g.signature);

/** Un colore "scuro" richiede testo chiaro sopra. */
export function isScuro(hex: string): boolean {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return (r * 299 + g * 587 + b * 114) / 1000 < 140;
}
