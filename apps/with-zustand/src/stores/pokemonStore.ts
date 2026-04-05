import { create } from 'zustand';
import type { Pokemon } from '@repo/mock-api';
import { fetchPokemon, fetchPokemonList } from '@repo/mock-api';

type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

interface PokemonState {
  list: Pokemon[];
  status: Status;
  error: string | null;
  load: () => Promise<void>;
}

export const usePokemonStore = create<PokemonState>((set, get) => ({
  list: [],
  status: 'idle',
  error: null,
  load: async () => {
    if (get().status !== 'idle') return;
    set({ status: 'loading', error: null });
    try {
      const listResponse = await fetchPokemonList(20);
      const list = await Promise.all(listResponse.results.map((item) => fetchPokemon(item.name)));
      set({ status: 'succeeded', list });
    } catch (err) {
      set({
        status: 'failed',
        error: err instanceof Error ? err.message : 'Unknown error',
      });
    }
  },
}));
