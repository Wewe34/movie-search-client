import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './reducers/favorites';
import watchlistReducer from './reducers/watchlist';


export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    watchlist: watchlistReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch