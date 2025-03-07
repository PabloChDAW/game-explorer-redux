// src/store.js
import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from './slices/gamesSlice' // Asegúrate de que la ruta sea correcta

const store = configureStore({
  reducer: {
    games: gamesReducer,
    // Puedes agregar más reducers aquí si es necesario
  },
})

export default store
