import { configureStore } from '@reduxjs/toolkit';
import snippetReducer from '../features/snippets/snippetsSlice';
import tagReducer from '../features/tags/tagsSlice';

const store = configureStore({
  reducer: {
    snippets: snippetReducer,
    tags: tagReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
