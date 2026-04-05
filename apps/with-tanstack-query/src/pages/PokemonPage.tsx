import { useQuery } from '@tanstack/react-query';
import { PokemonList } from '@repo/ui';
import { fetchPokemon, fetchPokemonList } from '@repo/mock-api';

export function PokemonPage() {
  const {
    data: pokemon = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['pokemon'],
    queryFn: async () => {
      const listResponse = await fetchPokemonList(20);
      return Promise.all(listResponse.results.map((item) => fetchPokemon(item.name)));
    },
  });

  return (
    <div>
      <h1 style={{ marginBottom: '4px' }}>Pokédex</h1>
      <p style={{ margin: '0 0 20px', fontSize: '0.875rem', color: '#888' }}>
        Async state with <strong>TanStack Query</strong> — <code>useQuery</code> with automatic
        caching
      </p>
      <PokemonList pokemon={pokemon} isLoading={isLoading} error={error?.message ?? null} />
    </div>
  );
}
