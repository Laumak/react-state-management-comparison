export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonSprites {
  front_default: string | null;
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: PokemonSprites;
  types: PokemonType[];
}

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}
