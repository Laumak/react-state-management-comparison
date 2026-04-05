import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { FilterValue } from '@repo/ui';
import type { Todo } from '@repo/mock-api';

interface TodosState {
  items: Todo[];
  filter: FilterValue;
}

const initialState: TodosState = {
  items: [],
  filter: 'all',
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: crypto.randomUUID(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.items.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
    setFilter: (state, action: PayloadAction<FilterValue>) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, setFilter } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
