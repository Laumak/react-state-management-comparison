import { configureStore } from '@reduxjs/toolkit';
import { pokemonReducer } from './features/pokemon/pokemonSlice';
import { todosReducer } from './features/todos/todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    pokemon: pokemonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
