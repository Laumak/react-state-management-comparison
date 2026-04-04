# @repo/tsconfig

Shared TypeScript configuration files extended by every app and package in this monorepo.

## Files

| File | Purpose |
|------|---------|
| `base.json` | Base `tsconfig` suitable for any Node.js or browser TypeScript package |
| `react.json` | Extends `base.json`, adds React/JSX transform settings |

## Usage

In an app or package `tsconfig.json`:

```json
{
  "extends": "@repo/tsconfig/react.json",
  "compilerOptions": {
    "outDir": "dist"
  },
  "include": ["src"]
}
```
