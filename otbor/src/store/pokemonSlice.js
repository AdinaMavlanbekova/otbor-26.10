import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getPokemons  = createAsyncThunk(
    'getPokemons',
    async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
        return response.data
    }
)

const pokemonSlice = createSlice({
    name: 'pokemonSlice',
    initialState: {
        cards: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPokemons.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(getPokemons.fulfilled, (state, action) => {
                state.loading = false
                state.cards = action.payload.results
            })
            .addCase(getPokemons.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export default pokemonSlice.reducer