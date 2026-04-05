import { assign, setup } from 'xstate';
import type { FilterValue } from '@repo/ui';
import type { Todo } from '@repo/mock-api';

interface Context {
  items: Todo[];
  filter: FilterValue;
}

type Event =
  | { type: 'ADD'; text: string }
  | { type: 'TOGGLE'; id: string }
  | { type: 'DELETE'; id: string }
  | { type: 'SET_FILTER'; filter: FilterValue };

export const todosMachine = setup({
  types: {
    context: {} as Context,
    events: {} as Event,
  },
}).createMachine({
  id: 'todos',
  context: { items: [], filter: 'all' },
  on: {
    ADD: {
      actions: assign({
        items: ({ context, event }) => [
          ...context.items,
          { id: crypto.randomUUID(), text: event.text, completed: false },
        ],
      }),
    },
    TOGGLE: {
      actions: assign({
        items: ({ context, event }) =>
          context.items.map((t) => (t.id === event.id ? { ...t, completed: !t.completed } : t)),
      }),
    },
    DELETE: {
      actions: assign({
        items: ({ context, event }) => context.items.filter((t) => t.id !== event.id),
      }),
    },
    SET_FILTER: {
      actions: assign({
        filter: ({ event }) => event.filter,
      }),
    },
  },
});
