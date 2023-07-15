import { configureStore } from '@reduxjs/toolkit';
import snippetReducer from '../features/snippets/snippetsSlice';

export default configureStore({
  reducer: {
    snippets: snippetReducer,
  },
});
