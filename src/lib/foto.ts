import type { ImageMetadata } from 'astro';
import mappa from '../assets/foto/provvisorie/mappa.json';

type Glob = Record<string, { default: ImageMetadata }>;
const reali = import.meta.glob<{ default: ImageMetadata }>('../assets/foto/*.{jpg,jpeg,png,webp,avif}', { eager: true }) as Glob;
const provvisorie = import.meta.glob<{ default: ImageMetadata }>('../assets/foto/provvisorie/*.{jpg,jpeg,png,webp,avif}', { eager: true }) as Glob;

const base = (p: string) => p.split('/').pop()!.replace(/\.\w+$/, '');
const cerca = (g: Glob, nome: string) => Object.entries(g).find(([p]) => base(p) === nome)?.[1].default;

export interface FotoTrovata { img: ImageMetadata; provvisoria: boolean }

/** Foto reale per lo slot, altrimenti la provvisoria mappata, altrimenti undefined. */
export function trovaFoto(nome: string): FotoTrovata | undefined {
  const reale = cerca(reali, nome);
  if (reale) return { img: reale, provvisoria: false };
  const prov = (mappa as Record<string, string>)[nome];
  const img = prov ? cerca(provvisorie, prov) : undefined;
  return img ? { img, provvisoria: true } : undefined;
}

/** Tutte le foto hero-1, hero-2, … in ordine (reali se ce n'è almeno una, altrimenti provvisorie). */
export function fotoHero(): FotoTrovata[] {
  const realiHero = Object.entries(reali).filter(([p]) => /\/hero-\d+\.\w+$/.test(p)).sort(([a], [b]) => a.localeCompare(b)).map(([, m]) => ({ img: m.default, provvisoria: false }));
  if (realiHero.length) return realiHero;
  return Object.keys(mappa).filter((k) => /^hero-\d+$/.test(k)).sort()
    .map((k) => trovaFoto(k)).filter((f): f is FotoTrovata => !!f);
}
