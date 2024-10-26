import {configureStore} from "@reduxjs/toolkit";
import pokemonReducer from './pokemonSlice'

const store = configureStore({
    reducer: {
        pokemonReducer
    }
})

export default store;