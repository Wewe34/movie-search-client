import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { User } from '../../models/user';

interface UserState {
  user: {
    id: string,
    name: string
  },
  searchInput: string,
  searchHistory: string[]
}

const initialState: UserState = {
  user: {
    id: '',
    name: ''
  },
  searchInput: '',
  searchHistory: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userSearchInput: (state, action: PayloadAction<string>) => {
        state.searchInput = action.payload;
    },
    userSearchHistory: (state, action: PayloadAction<string>) => {
      state.searchHistory.push(action.payload);
  },
    signInUser: (state, action: PayloadAction<User>) => {
        state.user = action.payload;
    },
    signOutUser: (state) => {
        state.user = { id: '', name: ''}
    },
  },
})

export const { signInUser, signOutUser, userSearchInput } = userSlice.actions

export default userSlice.reducer