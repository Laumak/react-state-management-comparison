# Delivery Roadmap (PR Plan)

This file captures the intended PR-by-PR rollout so the project plan is tracked in-repo.

## PR 1 — Common Vite + React baseline ✅

- Shared packages: `@repo/mock-api` types + PokéAPI fetch helpers, `@repo/ui` presentational
  components
- All 5 app scaffolds with Vite + React + TypeScript + react-router-dom shell
- Stub pages (no state management logic yet)

## PR 2 — Reference implementation: Redux Toolkit

- Implement Todo + Pokédex scenarios in `with-redux-toolkit`
- `createSlice`, `createAsyncThunk`, `configureStore`

## PR 3 — Zustand implementation

- Implement Todo + Pokédex scenarios in `with-zustand`

## PR 4 — Jotai implementation

- Implement Todo + Pokédex scenarios in `with-jotai`

## PR 5 — XState implementation

- Implement Todo + Pokédex scenarios in `with-xstate`

## PR 6 — TanStack Query implementation

- Implement Todo + Pokédex scenarios in `with-tanstack-query`

## PR 7 — Comparison polish + docs

- Cross-app parity pass, cleanup, and consistency checks
- Update root and package README guidance for running and comparing apps
