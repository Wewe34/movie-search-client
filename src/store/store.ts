import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './reducers/favorites';
import watchlistReducer from './reducers/watchlist';
import recentlyViewedReducer from './reducers/recentlyViewed';
import userReducer from './reducers/user';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    watchlist: watchlistReducer,
    recentlyViewed: recentlyViewedReducer,
    user: userReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch