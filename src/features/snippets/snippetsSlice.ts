import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiService from '../../common/services';
import { Status } from '../../common/constants';

export const getAllSnippets = createAsyncThunk('snippets/get', async () => {
  const res = await ApiService.getAllSnippets();
  const data = res.data.results;

  return data;
});

const initialState = {
  status: Status.Idle,
  data: [],
  error: null,
};

const snippetsSlice = createSlice({
  name: 'snippets',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getAllSnippets.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(getAllSnippets.fulfilled, (state, action) => {
        state.status = Status.Success;
        state.data = action.payload;
      });
  },
  reducers: {},
});

export default snippetsSlice.reducer;
