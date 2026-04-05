import { useEffect } from 'react';
import { PokemonList } from '@repo/ui';
import { useAppDispatch, useAppSelector } from '../hooks';
import { loadPokemon } from '../features/pokemon/pokemonSlice';

export function PokemonPage() {
  const dispatch = useAppDispatch();
  const { list, status, error } = useAppSelector((state) => state.pokemon);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(loadPokemon());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h1 style={{ marginBottom: '4px' }}>Pokédex</h1>
      <p style={{ margin: '0 0 20px', fontSize: '0.875rem', color: '#888' }}>
        Async state with <strong>Redux Toolkit</strong> — <code>createAsyncThunk</code>
      </p>
      <PokemonList pokemon={list} isLoading={status === 'loading'} error={error} />
    </div>
  );
}
