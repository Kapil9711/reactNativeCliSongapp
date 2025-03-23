import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import rootApi from './rootApi';

export const store = configureStore({
  reducer: {
    [rootApi.reducerPath]: rootApi.reducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rootApi.middleware), // Add RTK Query middleware
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
