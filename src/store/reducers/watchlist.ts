import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ISelectionDetails } from '../../components/SelectionDetails'

interface WatchlistState {
  watchlistList: ISelectionDetails[]
}

const initialState: WatchlistState = {
  watchlistList: []
}

export const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    loadWatchlistToView: (state, action: PayloadAction<ISelectionDetails[]>) => {
      state.watchlistList = action.payload;
    },
    addToWatchlist: (state, action: PayloadAction<ISelectionDetails>) => {
      state.watchlistList.push(action.payload);
    },
    removeFromWatchlist: (state, action: PayloadAction<ISelectionDetails>) => {
        state.watchlistList = state.watchlistList.filter(selection => selection.imdbID != action.payload.imdbID)
    },
  },
})

export const { addToWatchlist, removeFromWatchlist, loadWatchlistToView } = watchlistSlice.actions

export default watchlistSlice.reducer