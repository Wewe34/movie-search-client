import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISelectionDetails } from '../../components/SelectionDetails'

interface FavoritesState {
  favoritesList: ISelectionDetails[]
}

const initialState: FavoritesState = {
  favoritesList: []
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<ISelectionDetails>) => {
      state.favoritesList.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<ISelectionDetails>) => {
      state.favoritesList.filter(favorite => favorite.imdbID != action.payload.imdbID);
    },
  },
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer