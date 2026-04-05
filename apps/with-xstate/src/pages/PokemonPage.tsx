import { useMachine } from '@xstate/react';
import { useEffect } from 'react';
import { PokemonList } from '@repo/ui';
import { pokemonMachine } from '../machines/pokemonMachine';

export function PokemonPage() {
  const [state, send] = useMachine(pokemonMachine);

  useEffect(() => {
    send({ type: 'LOAD' });
  }, [send]);

  return (
    <div>
      <h1 style={{ marginBottom: '4px' }}>Pokédex</h1>
      <p style={{ margin: '0 0 20px', fontSize: '0.875rem', color: '#888' }}>
        Async state with <strong>XState</strong> — invoked promise with explicit states
      </p>
      <PokemonList
        pokemon={state.context.list}
        isLoading={state.matches('loading')}
        error={state.context.error}
      />
    </div>
  );
}
