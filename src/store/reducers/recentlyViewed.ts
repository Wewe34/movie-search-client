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
      state.recentlyViewedList.push(action.payload);
    },
    clearRecentlyViewedHistory: (state) => {
        state.recentlyViewedList = [];
    },
  },
})

export const { addToRecentlyViewed, clearRecentlyViewedHistory } = recentlyViewedSlice.actions

export default recentlyViewedSlice.reducer