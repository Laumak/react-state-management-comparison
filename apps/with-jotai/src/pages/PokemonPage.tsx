import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { PokemonList } from '@repo/ui';
import {
  loadPokemonAtom,
  pokemonErrorAtom,
  pokemonListAtom,
  pokemonStatusAtom,
} from '../atoms/pokemonAtom';

export function PokemonPage() {
  const list = useAtomValue(pokemonListAtom);
  const status = useAtomValue(pokemonStatusAtom);
  const error = useAtomValue(pokemonErrorAtom);
  const loadPokemon = useSetAtom(loadPokemonAtom);

  useEffect(() => {
    loadPokemon();
  }, [loadPokemon]);

  return (
    <div>
      <h1 style={{ marginBottom: '4px' }}>Pokédex</h1>
      <p style={{ margin: '0 0 20px', fontSize: '0.875rem', color: '#888' }}>
        Async state with <strong>Jotai</strong> — write-only atom as async action
      </p>
      <PokemonList pokemon={list} isLoading={status === 'loading'} error={error} />
    </div>
  );
}
