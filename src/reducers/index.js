// src/reducers/index.js
import { combineReducers } from 'redux'
import gamesReducer from './gamesReducer' // Asegúrate de que este archivo exista

const rootReducer = combineReducers({
  games: gamesReducer,
  // Puedes agregar más reducers aquí si es necesario
})

export default rootReducer
