import { assign, fromPromise, setup } from 'xstate';
import type { Pokemon } from '@repo/mock-api';
import { fetchPokemon, fetchPokemonList } from '@repo/mock-api';

interface Context {
  list: Pokemon[];
  error: string | null;
}

export const pokemonMachine = setup({
  types: {
    context: {} as Context,
  },
  actors: {
    loadPokemon: fromPromise(async (): Promise<Pokemon[]> => {
      const listResponse = await fetchPokemonList(20);
      return Promise.all(listResponse.results.map((item) => fetchPokemon(item.name)));
    }),
  },
}).createMachine({
  id: 'pokemon',
  initial: 'idle',
  context: { list: [], error: null },
  states: {
    idle: {
      on: { LOAD: 'loading' },
    },
    loading: {
      invoke: {
        src: 'loadPokemon',
        onDone: {
          target: 'success',
          actions: assign({ list: ({ event }) => event.output }),
        },
        onError: {
          target: 'failure',
          actions: assign({
            error: ({ event }) => String((event.error as Error).message ?? 'Unknown error'),
          }),
        },
      },
    },
    success: {},
    failure: {
      on: { RETRY: 'loading' },
    },
  },
});
