import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ISelectionDetails } from '../../components/SelectionDetails'

interface recentlyViewedState {
  recentlyViewedList: ISelectionDetails[]
}

const initialState: recentlyViewedState = {
  recentlyViewedList: []
}

export const recentlyViewedSlice = createSlice({
  name: 'recentlyViewed',
  initialState,
  reducers: {
    addToRecentlyViewed: (state, action: PayloadAction<ISelectionDetails>) => {
        const doubleIndex = state.recentlyViewedList.findIndex(viewed => viewed.imdbID === action.payload.imdbID);
        if (doubleIndex != -1) {
            state.recentlyViewedList.splice(doubleIndex, 1) 
        }
        state.recentlyViewedList.push(action.payload);
        state.recentlyViewedList.reverse();
    },
    clearRecentlyViewedHistory: (state) => {
        state.recentlyViewedList = [];
    },
  },
})

export const { addToRecentlyViewed, clearRecentlyViewedHistory } = recentlyViewedSlice.actions

export default recentlyViewedSlice.reducer