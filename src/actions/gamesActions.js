import { fetchAllGames } from '../services/service'

export const fetchGames = () => {
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
