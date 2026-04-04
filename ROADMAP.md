# Delivery Roadmap (PR Plan)

This file captures the intended PR-by-PR rollout so the project plan is tracked in-repo.

## PR 1 (this PR): Common Vite + React baseline only

- Set up shared app scaffolding conventions
- Wire shared TS config usage for React apps
- Add/align app scripts (`dev`, `build`, `lint`, `typecheck`) consistently
- Ensure Turbo pipeline compatibility
- Keep feature implementation out of scope

## PR 2: Reference implementation foundation (single app)

- Pick one app as reference (suggest `with-redux-toolkit`)
- Implement minimal runnable shell for Todo + Pokédex routes/screens
- Validate integration with shared packages (`@repo/ui`, `@repo/mock-api`) at a basic level

## PR 3: Shared package hardening

- Finalize `packages/mock-api` typed contracts and fetch helpers
- Finalize `packages/ui` core shared presentational components
- Keep behavior generic and library-agnostic

## PR 4–7: Per-library app implementations

- Port full scenarios app-by-app (Zustand, Jotai, XState, TanStack Query)
- Maintain strict parity of UX/behavior between apps

## PR 8: Comparison polish + docs

- Cross-app parity pass, cleanup, and consistency checks
- Update root and package README guidance for running and comparing apps
