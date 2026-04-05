# with-jotai

This app implements the state management comparison scenarios using **[Jotai](https://jotai.org/)**.

Jotai takes an atomic, bottom-up approach to state management. Each piece of state lives in a small
"atom", and components subscribe only to the atoms they care about — no selector boilerplate, no
unnecessary re-renders.

## Scenarios

### Local State — Todo List

A classic to-do list (add, complete, delete, filter todos) with todo items stored as atoms (or a
single atom holding an array).

### Async / Server State — PokéAPI

Fetching Pokémon data from the [PokéAPI](https://pokeapi.co/) using Jotai's async atoms, which
natively support Promises and Suspense.

## Key concepts explored

- Primitive and derived atoms
- Async atoms (with Suspense or without)
- `atomFamily` for per-Pokémon atoms
- Fine-grained reactivity

## Status

✅ **Implemented.** Run `pnpm dev --filter @repo/with-jotai` from the repo root to start the dev
server.
