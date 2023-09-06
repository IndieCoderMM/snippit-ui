import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiService from '../../services';
import { Status } from '../../constants';
import { Snippet } from '../../app/common.types';

interface SnippetState {
  status: Status;
  data: Snippet[];
  error: string;
}

const initialState: SnippetState = {
  status: Status.Idle,
  data: [],
  error: '',
};

export const getAllSnippets = createAsyncThunk('snippets/get', async () => {
  const res = await ApiService.getAllSnippets();

  const data = res.data as Snippet[];

  return data;
});

const snippetsSlice = createSlice({
  name: 'snippets',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getAllSnippets.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(getAllSnippets.rejected, (state, action) => {
        state.status = Status.Error;
        state.error = action.error.message!;
      })
      .addCase(getAllSnippets.fulfilled, (state, action) => {
        state.status = Status.Success;
        state.data = action.payload;
      });
  },
  reducers: {},
});

export default snippetsSlice.reducer;
