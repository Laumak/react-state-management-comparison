import { useReducer } from 'react';
import type { FilterValue } from '@repo/ui';
import type { Todo } from '@repo/mock-api';

interface State {
  items: Todo[];
  filter: FilterValue;
}

type Action =
  | { type: 'ADD'; text: string }
  | { type: 'TOGGLE'; id: string }
  | { type: 'DELETE'; id: string }
  | { type: 'SET_FILTER'; filter: FilterValue };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        items: [...state.items, { id: crypto.randomUUID(), text: action.text, completed: false }],
      };
    case 'TOGGLE':
      return {
        ...state,
        items: state.items.map((t) => (t.id === action.id ? { ...t, completed: !t.completed } : t)),
      };
    case 'DELETE':
      return { ...state, items: state.items.filter((t) => t.id !== action.id) };
    case 'SET_FILTER':
      return { ...state, filter: action.filter };
  }
}

const initialState: State = { items: [], filter: 'all' };

export function useTodos() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    items: state.items,
    filter: state.filter,
    addTodo: (text: string) => dispatch({ type: 'ADD', text }),
    toggleTodo: (id: string) => dispatch({ type: 'TOGGLE', id }),
    deleteTodo: (id: string) => dispatch({ type: 'DELETE', id }),
    setFilter: (filter: FilterValue) => dispatch({ type: 'SET_FILTER', filter }),
  };
}
