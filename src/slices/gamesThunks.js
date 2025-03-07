// Aquí se realizan las llamadas a la API importando las funciones necesarias de service.js.
import { fetchAllGames, fetchPopularGames } from '../services/service'

export const fetchGamesThunk = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_GAMES_REQUEST' })
    try {
      const games = await fetchAllGames()
      dispatch({ type: 'FETCH_GAMES_SUCCESS', payload: games })
    } catch (error) {
      dispatch({ type: 'FETCH_GAMES_FAILURE', payload: error.message })
    }
  }
}

export const fetchPopularGamesThunk = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_GAMES_REQUEST' })
    try {
      const popularGames = await fetchPopularGames()
      dispatch({ type: 'FETCH_GAMES_SUCCESS', payload: popularGames })
    } catch (error) {
      dispatch({ type: 'FETCH_GAMES_FAILURE', payload: error.message })
    }
  }
}
