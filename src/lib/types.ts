export type VincoloId = 'vegano' | 'stevia' | 'senza-lattosio' | 'senza-glutine';
export type Categoria = 'creme' | 'frutta' | 'sorbetti';

export interface Vincolo {
  id: VincoloId;
  nome: string;
  breve: string;
  sigla: string;
  colore: string;
  emoji: string;
  url: string;
  descrizione: string;
}

export interface Gusto {
  id: string;
  nome: string;
  categoria: Categoria;
  descrizione: string;
  colore: string;
  allergeni: string[];
  vincoli: VincoloId[];
  signature?: boolean;
  stagionale?: boolean;
  daConfermare?: boolean;
}

export interface Torta {
  id: string;
  nome: string;
  descrizione: string;
  porzioni: string;
  prezzo: number | null;
  colori: string[];
  vincoli: VincoloId[];
  daConfermare?: boolean;
}

/** Fasce orarie per giorno: chiave lun..dom, valore lista di [apre, chiude]. */
export type Orari = Record<string, string[][] | null>;
