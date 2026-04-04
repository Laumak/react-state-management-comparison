# React State Management Comparison

A Turborepo + pnpm monorepo for comparing popular React state management solutions side-by-side. Every app implements the **same two scenarios** so you can judge each library on an equal footing.

---

## Project Purpose

React's ecosystem offers a wide variety of state management approaches — from Redux's predictable flux architecture to atomic libraries like Jotai, to server-state specialists like TanStack Query. This project lets you explore the trade-offs between them by building identical features in each one.

**Libraries compared (Phase 1):**

| App | Library | Paradigm |
|-----|---------|----------|
| `apps/with-redux-toolkit` | [Redux Toolkit](https://redux-toolkit.js.org/) | Flux / unidirectional |
| `apps/with-zustand` | [Zustand](https://zustand-demo.pmnd.rs/) | Minimal store |
| `apps/with-jotai` | [Jotai](https://jotai.org/) | Atomic / bottom-up |
| `apps/with-xstate` | [XState](https://xstate.js.org/) | State machines |
| `apps/with-tanstack-query` | [TanStack Query](https://tanstack.com/query) | Server state |

---

## Scenarios

Each application implements the following two scenarios so comparisons stay fair:

### 1. Local State — Todo List

A classic to-do list app covering:

- Add a new todo
- Mark a todo as complete / incomplete
- Delete a todo
- Filter todos (all / active / completed)
- Derived state: count of remaining todos

### 2. Async / Server State — PokéAPI

Data fetched from the [PokéAPI](https://pokeapi.co/):

| Feature | Endpoint |
|---------|----------|
| List view | `GET /pokemon?limit=20` |
| Single item | `GET /pokemon/{id}` |

This exercises loading/error states, caching behaviour, and how each library handles async data fetching. TanStack Query in particular shines here — and pairing it with a client-state library for the todo list reflects a real-world pattern.

---

## Folder Structure

```
/
├── apps/
│   ├── with-redux-toolkit/   # Todo + Pokémon with Redux Toolkit
│   ├── with-zustand/         # Todo + Pokémon with Zustand
│   ├── with-jotai/           # Todo + Pokémon with Jotai
│   ├── with-xstate/          # Todo + Pokémon with XState
│   └── with-tanstack-query/  # Todo + Pokémon with TanStack Query
├── packages/
│   ├── ui/                   # Shared React UI components
│   ├── mock-api/             # PokéAPI wrappers & shared fetch helpers
│   └── tsconfig/             # Shared TypeScript configuration
├── turbo.json                # Turborepo pipeline config
├── pnpm-workspace.yaml       # pnpm workspace roots
└── package.json              # Root workspace manifest
```

### Package Descriptions

| Package | Description |
|---------|-------------|
| `packages/ui` | Shared, unstyled (or lightly styled) React components used by all apps — e.g. `TodoItem`, `PokemonCard`, layout primitives |
| `packages/mock-api` | Typed wrappers around the PokéAPI REST endpoints plus shared TypeScript interfaces (`Pokemon`, `Todo`, etc.) |
| `packages/tsconfig` | Shared `tsconfig` base files (`base.json`, `react.json`) extended by every app and package |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18
- [pnpm](https://pnpm.io/) ≥ 9 — install with `npm install -g pnpm`

### Install

```bash
pnpm install
```

### Run all apps in development mode

```bash
pnpm dev
```

### Build all apps

```bash
pnpm build
```

### Lint all packages

```bash
pnpm lint
```

### Type-check all packages

```bash
pnpm typecheck
```

> Turborepo caches task outputs automatically. Subsequent runs will only re-execute tasks for packages that have changed.

---

## Phase 2 — GraphQL Comparison (Future)

Once the state management comparison is complete, a **Phase 2** will be added to explore GraphQL client libraries:

- **Apollo Client** vs **URQL** (vs potentially URQL + Jotai)
- The same Pokémon domain will be reused, but through a GraphQL API (the [unofficial graphql-pokeapi](https://github.com/mazipan/graphql-pokeapi) wraps the same data)
- Phase 2 apps will live in their own `apps/` sub-folders and will be kept intentionally separate from the REST-based Phase 1 apps so the comparisons remain apples-to-apples

---

## Contributing

This is a personal learning/comparison project, but PRs and suggestions are welcome. Each app should only add dependencies relevant to its own state management library — shared logic belongs in `packages/`.
