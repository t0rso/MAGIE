/**
 * Applica gli override di disponibilità salvati dall'area /admin (demo).
 * In produzione questo dato arriverebbe da un CMS; qui vive in localStorage.
 */
import { STORAGE_KEY } from '../lib/gusti';

export type Override = Record<string, boolean>;

export function leggiOverride(): Override {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}');
  } catch {
    return {};
  }
}

export function salvaOverride(o: Override) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(o));
  } catch { /* storage non disponibile: la demo continua senza persistenza */ }
}

/** Aggiorna gli attributi data-disponibile delle card presenti in pagina. */
export function applicaOverride(root: ParentNode = document) {
  const o = leggiOverride();
  root.querySelectorAll<HTMLElement>('[data-gusto-id]').forEach((el) => {
    const id = el.dataset.gustoId!;
    if (id in o) el.dataset.disponibile = String(o[id]);
  });
}
