# with-zustand

This app implements the state management comparison scenarios using
**[Zustand](https://zustand-demo.pmnd.rs/)**.

Zustand is a small, fast, and scalable state management library. It uses simplified flux principles
and has a minimal API based on hooks — no providers, no boilerplate.

## Scenarios

### Local State — Todo List

A classic to-do list (add, complete, delete, filter todos) using a Zustand store.

### Async / Server State — PokéAPI

Fetching Pokémon data from the [PokéAPI](https://pokeapi.co/) with async actions inside the Zustand
store, combined with loading/error state tracked alongside the data.

## Key concepts explored

- Creating a store with `create`
- Async actions inside a store
- Derived/computed values via selectors
- Minimal boilerplate compared to Redux

## Status

> 🚧 **Not yet implemented.** This folder is a placeholder — implementation will be added in a
> follow-up PR.
