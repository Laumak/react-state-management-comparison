import type { Pokemon, PokemonListResponse } from './types';

const BASE_URL = 'https://pokeapi.co/api/v2';

export async function fetchPokemonList(limit = 20): Promise<PokemonListResponse> {
  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokémon list: ${response.statusText}`);
  }
  return response.json() as Promise<PokemonListResponse>;
}

export async function fetchPokemon(idOrName: string | number): Promise<Pokemon> {
  const response = await fetch(`${BASE_URL}/pokemon/${idOrName}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokémon "${idOrName}": ${response.statusText}`);
  }
  return response.json() as Promise<Pokemon>;
}
