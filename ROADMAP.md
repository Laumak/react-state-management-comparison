# Delivery Roadmap (PR Plan)

This file captures the intended PR-by-PR rollout so the project plan is tracked in-repo.

## PR 1 (this PR): Common Vite + React baseline only

- Set up shared app scaffolding conventions
- Wire shared TS config usage for React apps
- Add/align app scripts (`dev`, `build`, `lint`, `typecheck`) consistently
- Ensure Turbo pipeline compatibility
- Keep feature implementation out of scope

## PR 2: Reference implementation foundation (single app) ✅

- Implemented `with-redux-toolkit` as the reference app (Todo list + Pokédex)
- Validated integration with `@repo/ui` and `@repo/mock-api`

## PR 3: Shared package hardening ✅

- Implemented `packages/mock-api` — typed interfaces and PokéAPI fetch helpers
- Implemented `packages/ui` — presentational components (TodoInput, TodoItem, TodoList, PokemonCard,
  PokemonList)

## PR 4–7: Per-library app implementations ✅

- Implemented Zustand, Jotai, XState, and TanStack Query apps in full parity with the reference

## PR 8: Comparison polish + docs

- Cross-app parity pass, cleanup, and consistency checks
- Update root and package README guidance for running and comparing apps
