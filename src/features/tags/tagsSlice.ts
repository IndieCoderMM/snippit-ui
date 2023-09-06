import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiService from '../../services';
import { Status } from '../../constants';
import { Tag } from '../../app/common.types';

interface TagState {
  status: Status;
  data: Tag[];
  error: string;
}

const initialState: TagState = {
  status: Status.Idle,
  data: [],
  error: '',
};

export const getAllTags = createAsyncThunk('tags/get', async () => {
  const res = await ApiService.getAllTags();

  const data = res.data as Tag[];

  return data;
});

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getAllTags.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(getAllTags.rejected, (state, action) => {
        state.status = Status.Error;
        state.error = action.error.message!;
      })
      .addCase(getAllTags.fulfilled, (state, action) => {
        state.status = Status.Success;
        state.data = action.payload;
      });
  },
  reducers: {},
});

export default tagsSlice.reducer;
