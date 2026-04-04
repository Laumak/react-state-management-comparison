# with-redux-toolkit

This app implements the state management comparison scenarios using **[Redux Toolkit](https://redux-toolkit.js.org/)** (RTK).

Redux Toolkit is the official, opinionated toolset for Redux. It reduces boilerplate with utilities like `createSlice`, `createAsyncThunk`, and the `configureStore` helper.

## Scenarios

### Local State — Todo List
A classic to-do list (add, complete, delete, filter todos) implemented with a Redux `slice`.

### Async / Server State — PokéAPI
Fetching Pokémon data from the [PokéAPI](https://pokeapi.co/) using RTK's `createAsyncThunk` and/or **RTK Query** for data fetching, caching, and loading/error state management.

## Key concepts explored
- `createSlice` for reducer + action creator co-location
- `createAsyncThunk` for async side effects
- RTK Query for server state (optional — can be compared to plain `createAsyncThunk`)
- Selector patterns for derived state

## Status

> 🚧 **Not yet implemented.** This folder is a placeholder — implementation will be added in a follow-up PR.
