import { atom } from 'jotai';
import type { Pokemon } from '@repo/mock-api';
import { fetchPokemon, fetchPokemonList } from '@repo/mock-api';

type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

export const pokemonListAtom = atom<Pokemon[]>([]);
export const pokemonStatusAtom = atom<Status>('idle');
export const pokemonErrorAtom = atom<string | null>(null);

// Write-only atom that triggers the async load
export const loadPokemonAtom = atom(null, async (get, set) => {
  if (get(pokemonStatusAtom) !== 'idle') return;
  set(pokemonStatusAtom, 'loading');
  set(pokemonErrorAtom, null);
  try {
    const listResponse = await fetchPokemonList(20);
    const list = await Promise.all(listResponse.results.map((item) => fetchPokemon(item.name)));
    set(pokemonListAtom, list);
    set(pokemonStatusAtom, 'succeeded');
  } catch (err) {
    set(pokemonErrorAtom, err instanceof Error ? err.message : 'Unknown error');
    set(pokemonStatusAtom, 'failed');
  }
});
