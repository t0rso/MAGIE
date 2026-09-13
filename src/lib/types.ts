export type Categoria = 'creme' | 'frutta' | 'sorbetti';

export interface Gusto {
  id: string;
  nome: string;
  categoria: Categoria;
  descrizione: string;
  colore: string;
  allergeni: string[];
  tag: string[];
  disponibileOggi: boolean;
}

// Fasce orarie [apertura, chiusura] per giorno; null = chiuso
export type Orari = Record<string, string[][] | null>;
