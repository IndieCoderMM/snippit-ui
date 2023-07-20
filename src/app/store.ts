import { configureStore } from '@reduxjs/toolkit';
import snippetReducer from '../features/snippets/snippetsSlice';
import contributorReducer from '../features/contributors/contributorsSlice'

const store = configureStore({
  reducer: {
    snippets: snippetReducer,
    contributors: contributorReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
