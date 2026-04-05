import type { Pokemon } from '@repo/mock-api';
import { PokemonCard } from './PokemonCard';

interface Props {
  pokemon: Pokemon[];
  isLoading?: boolean;
  error?: string | null;
}

export function PokemonList({ pokemon, isLoading, error }: Props) {
  if (isLoading) {
    return <p style={{ color: '#666', fontStyle: 'italic' }}>Loading Pokémon…</p>;
  }
  if (error) {
    return <p style={{ color: '#c00' }}>Error: {error}</p>;
  }
  if (pokemon.length === 0) {
    return <p style={{ color: '#999', fontStyle: 'italic' }}>No Pokémon found.</p>;
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
        gap: '16px',
      }}
    >
      {pokemon.map((p) => (
        <PokemonCard key={p.id} pokemon={p} />
      ))}
    </div>
  );
}
