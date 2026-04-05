import { atom } from 'jotai';
import type { FilterValue } from '@repo/ui';
import type { Todo } from '@repo/mock-api';

export const todosAtom = atom<Todo[]>([]);

export const filterAtom = atom<FilterValue>('all');

export const filteredTodosAtom = atom((get) => {
  const todos = get(todosAtom);
  const filter = get(filterAtom);
  if (filter === 'active') return todos.filter((t) => !t.completed);
  if (filter === 'completed') return todos.filter((t) => t.completed);
  return todos;
});
