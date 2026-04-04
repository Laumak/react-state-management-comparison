# @repo/mock-api

Shared typed wrappers around the [PokéAPI](https://pokeapi.co/) REST endpoints, plus shared
TypeScript interfaces used across all apps.

Centralising the fetch logic here means every app calls the same functions and works with the same
types — the only difference is _how_ each app manages the resulting state.

## What belongs here

### TypeScript interfaces

- `Pokemon` — full Pokémon shape returned from `/pokemon/{id}`
- `PokemonListItem` — lightweight shape from the `/pokemon?limit=N` list endpoint
- `PokemonListResponse` — paginated list response wrapper
- `Todo` — shared Todo type used by all apps

### Fetch helpers

- `fetchPokemonList(limit?: number): Promise<PokemonListResponse>`
- `fetchPokemon(idOrName: string | number): Promise<Pokemon>`

## Status

> 🚧 **Not yet implemented.** This folder is a placeholder — types and helpers will be added once
> the app scaffolds are in place.
