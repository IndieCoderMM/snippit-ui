import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiService from '../../common/services';

export const getAllSnippets = createAsyncThunk('snippets/get', async () => {
  const res = await ApiService.getAllSnippets();
  const data = res.data.results;

  return data;
});

const initialState = {
  status: 'idle',
  data: [],
  error: null,
};

const snippetsSlice = createSlice({
  name: 'snippets',
  initialState,
  extraReducers(builder) {
    builder.addCase(getAllSnippets.pending, (state) => {
      state.status = 'loading';
    });
  },
});
