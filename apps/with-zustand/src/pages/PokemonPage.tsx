import { useEffect } from 'react';
import { PokemonList } from '@repo/ui';
import { usePokemonStore } from '../stores/pokemonStore';

export function PokemonPage() {
  const { list, status, error, load } = usePokemonStore();

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div>
      <h1 style={{ marginBottom: '4px' }}>Pokédex</h1>
      <p style={{ margin: '0 0 20px', fontSize: '0.875rem', color: '#888' }}>
        Async state with <strong>Zustand</strong> — async actions inside the store
      </p>
      <PokemonList pokemon={list} isLoading={status === 'loading'} error={error} />
    </div>
  );
}
