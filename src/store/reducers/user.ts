import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { User } from '../../models/user';

interface UserState {
  user: {
    id: string,
    name: string
  }
}

const initialState: UserState = {
  user: {
    id: '',
    name: ''
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInUser: (state, action: PayloadAction<User>) => {
        state.user = action.payload;
    },
    signOutUser: (state) => {
        state.user = { id: '', name: ''}
    },
  },
})

export const { signInUser, signOutUser } = userSlice.actions

export default userSlice.reducer