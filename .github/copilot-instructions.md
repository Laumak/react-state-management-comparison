# Copilot Instructions

This file gives AI coding agents (GitHub Copilot, etc.) the context they need to contribute
effectively to this repository.

---

## What We're Building

A **pnpm + Turborepo monorepo** that compares popular React state management libraries side-by-side.
Every app implements the **same two scenarios** so the libraries can be evaluated on equal footing:

1. **Todo List** — local/client state (add, complete, delete, filter todos)
2. **Pokédex** — async/server state fetched from the real [PokéAPI](https://pokeapi.co/)

### Phase 1 — State Management Comparison

| App                        | Library        | Paradigm              |
| -------------------------- | -------------- | --------------------- |
| `apps/with-redux-toolkit`  | Redux Toolkit  | Flux / unidirectional |
| `apps/with-zustand`        | Zustand        | Minimal store         |
| `apps/with-jotai`          | Jotai          | Atomic / bottom-up    |
| `apps/with-xstate`         | XState         | State machines        |
| `apps/with-tanstack-query` | TanStack Query | Server state          |

### Phase 2 — GraphQL Client Comparison (future)

Apollo Client vs URQL, reusing the same Pokémon domain through the
[unofficial GraphQL PokéAPI](https://github.com/mazipan/graphql-pokeapi). Phase 2 apps live in their
own `apps/` sub-folders and are kept separate from Phase 1.

---

## Tech Stack

| Tool       | Version        | Role                 |
| ---------- | -------------- | -------------------- |
| Node.js    | 22 LTS         | Runtime              |
| pnpm       | 9.15.9         | Package manager      |
| Turborepo  | 2.9.3          | Monorepo task runner |
| TypeScript | 6.x            | Language             |
| React      | 19.x (planned) | UI framework         |
| Vite       | (planned)      | Bundler / dev server |
| oxfmt      | 0.43.x         | Code formatter       |

---

## Monorepo Structure

```
/
├── apps/
│   ├── with-redux-toolkit/
│   ├── with-zustand/
│   ├── with-jotai/
│   ├── with-xstate/
│   └── with-tanstack-query/
├── packages/
│   ├── ui/           # Shared React components
│   ├── mock-api/     # PokéAPI fetch helpers & shared TypeScript interfaces
│   └── tsconfig/     # Shared tsconfig base files (base.json, react.json)
├── .github/
│   └── copilot-instructions.md
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

---

## Coding & Configuration Preferences

### General

- Keep changes **surgical and minimal** — do not touch unrelated code.
- Separate concerns into **distinct commits** (one commit per logical change).
- Prefer **existing libraries** over adding new ones. When in doubt, ask.

### Dependencies

- Always pin **exact versions** — no `^` or `~` in `package.json`.
- Check the [GitHub Advisory Database](https://github.com/advisories) before adding a new
  dependency.
- Each app installs only the dependencies it actually needs. Shared logic belongs in `packages/`.

### Configuration Files

- Keep config files **lean and relevant**. Do not add options speculatively ("just in case").
- **Document every non-obvious option** with an inline comment. TypeScript's JSONC parser allows
  `//` comments inside `tsconfig*.json` files.
- `turbo.json` must remain strict JSON (no comments). Explain Turborepo behaviour in the README
  instead.

### TypeScript

- All TypeScript targets `ES2020` / `ESNext` and uses `"moduleResolution": "bundler"`.
- Shared base config lives in `packages/tsconfig/base.json`; React-specific overrides in
  `packages/tsconfig/react.json`.
- `strict: true` is non-negotiable.

### Formatting

- oxfmt (Oxc formatter) is the repo formatter — run `pnpm format` to fix, `pnpm format:check` to
  verify.
- oxfmt config lives in `.oxfmtrc.json` at the repo root.
- Do not manually format code; let oxfmt handle it.

### README / Documentation

- Update the root `README.md` when adding new top-level tooling or changing developer workflows.
- Per-package `README.md` files describe what that package does and how to use it.

### Git

- Write clear, lower-case conventional commit messages: `feat:`, `fix:`, `chore:`, `docs:`,
  `refactor:`.
- Do not commit lock files, `node_modules`, `dist`, `.turbo`, or other build artefacts.

---

## Running Tasks

```bash
pnpm install          # Install all workspace dependencies
pnpm dev              # Start all apps in dev mode (via Turborepo)
pnpm build            # Build all apps (via Turborepo)
pnpm lint             # Lint all packages (via Turborepo)
pnpm typecheck        # Type-check all packages (via Turborepo)
pnpm format           # Format all files with oxfmt
pnpm format:check     # Check formatting without writing changes
```
