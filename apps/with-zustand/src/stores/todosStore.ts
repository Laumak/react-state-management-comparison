import { create } from 'zustand';
import type { FilterValue } from '@repo/ui';
import type { Todo } from '@repo/mock-api';

interface TodosState {
  items: Todo[];
  filter: FilterValue;
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  setFilter: (filter: FilterValue) => void;
}

export const useTodosStore = create<TodosState>((set) => ({
  items: [],
  filter: 'all',
  addTodo: (text) =>
    set((state) => ({
      items: [...state.items, { id: crypto.randomUUID(), text, completed: false }],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      items: state.items.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      items: state.items.filter((t) => t.id !== id),
    })),
  setFilter: (filter) => set({ filter }),
}));
