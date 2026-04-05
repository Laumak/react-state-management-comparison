import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Pokemon } from '@repo/mock-api';
import { fetchPokemon, fetchPokemonList } from '@repo/mock-api';

type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

interface PokemonState {
  list: Pokemon[];
  status: Status;
  error: string | null;
}

const initialState: PokemonState = {
  list: [],
  status: 'idle',
  error: null,
};

export const loadPokemon = createAsyncThunk('pokemon/load', async () => {
  const listResponse = await fetchPokemonList(20);
  return Promise.all(listResponse.results.map((item) => fetchPokemon(item.name)));
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPokemon.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadPokemon.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(loadPokemon.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Unknown error';
      });
  },
});

export const pokemonReducer = pokemonSlice.reducer;
