# with-xstate

This app implements the state management comparison scenarios using **[XState](https://xstate.js.org/)**.

XState models application logic as explicit finite state machines (FSMs) and statecharts. Every possible state and transition is declared up-front, making complex async flows easy to visualise and reason about.

## Scenarios

### Local State — Todo List

A classic to-do list (add, complete, delete, filter todos) modelled as an XState machine with states like `idle`, and events like `ADD_TODO`, `TOGGLE_TODO`, `DELETE_TODO`.

### Async / Server State — PokéAPI

Fetching Pokémon data from the [PokéAPI](https://pokeapi.co/) using an XState machine with explicit `loading`, `success`, and `failure` states and `invoke`d promises.

## Key concepts explored

- Finite state machines and statecharts
- Invoked promises for async flows
- Guards, actions, and context
- `useMachine` / `useActor` React integration

## Status

> 🚧 **Not yet implemented.** This folder is a placeholder — implementation will be added in a follow-up PR.
