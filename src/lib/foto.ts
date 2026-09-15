import type { ImageMetadata } from 'astro';
import alias from '../assets/foto/alias.json';

type Glob = Record<string, { default: ImageMetadata }>;
const tutte = import.meta.glob<{ default: ImageMetadata }>('../assets/foto/*.{jpg,jpeg,png,webp,avif}', { eager: true }) as Glob;

const base = (p: string) => p.split('/').pop()!.replace(/\.\w+$/, '');
const cerca = (nome: string) => Object.entries(tutte).find(([p]) => base(p) === nome)?.[1].default;

/** Foto per lo slot: file con lo stesso nome, altrimenti l'alias in alias.json. */
export function trovaFoto(nome: string): ImageMetadata | undefined {
  return cerca(nome) ?? (() => { const a = (alias as Record<string, string>)[nome]; return a ? cerca(a) : undefined; })();
}

/** hero-1, hero-2, … in ordine. */
export function fotoHero(): ImageMetadata[] {
  const nomi = new Set<string>([...Object.keys(tutte).map(base), ...Object.keys(alias)].filter((k) => /^hero-\d+$/.test(k)));
  return [...nomi].sort().map(trovaFoto).filter((f): f is ImageMetadata => !!f);
}
