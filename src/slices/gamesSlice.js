import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchAllGames, fetchPopularGames } from '../services/service'

// Thunks para obtener juegos
export const fetchGames = createAsyncThunk(
  'games/fetchGames',
  async () => {
    const games = await fetchAllGames()
    return games
  }
)

export const fetchPopularGamesThunk = createAsyncThunk(
  'games/fetchPopularGames',
  async () => {
    const popularGames = await fetchPopularGames()
    return popularGames
  }
)

// Slice de juegos
const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    games: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearGames: (state) => {
      state.games = []
      state.loading = false
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.loading = false
        state.games = action.payload
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(fetchPopularGamesThunk.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPopularGamesThunk.fulfilled, (state, action) => {
        state.loading = false
        state.games = action.payload
      })
      .addCase(fetchPopularGamesThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

// Exporta los reducers y thunks
export const { clearGames } = gamesSlice.actions
export default gamesSlice.reducer