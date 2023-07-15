import { configureStore } from '@reduxjs/toolkit';
import snippetReducer from '../features/snippets/snippetsSlice';

const store = configureStore({
  reducer: {
    snippets: snippetReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
