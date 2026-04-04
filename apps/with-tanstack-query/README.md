# with-tanstack-query

This app implements the state management comparison scenarios using **[TanStack Query](https://tanstack.com/query)** (formerly React Query).

TanStack Query is a server-state library — it manages fetching, caching, synchronisation, and updating of asynchronous data. For client state (the todo list), it is paired with a lightweight solution such as `useState`/`useReducer` or Zustand.

## Scenarios

### Local State — Todo List

A classic to-do list (add, complete, delete, filter todos) using React's built-in `useState` / `useReducer` — demonstrating that TanStack Query intentionally leaves client state to you.

### Async / Server State — PokéAPI

Fetching Pokémon data from the [PokéAPI](https://pokeapi.co/) using `useQuery` (list) and `useQuery` with a dynamic key (single item), showcasing automatic caching, background refetching, and loading/error states.

## Key concepts explored

- `useQuery` for data fetching
- Query keys and caching
- `staleTime` / `gcTime` configuration
- Pairing a server-state library with minimal client state

## Status

> 🚧 **Not yet implemented.** This folder is a placeholder — implementation will be added in a follow-up PR.
