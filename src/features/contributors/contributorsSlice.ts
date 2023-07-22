import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiService from "../../common/services";
import { Status } from "../../common/constants";
import { Contributor } from "../../app/common.types";

interface ContributorState {
    status: Status;
    data: Contributor[];
    error: string;
}

const initialState: ContributorState = {
    status: Status.Idle,
    data: [],
    error: ''
}

const contributorSlice = createSlice({
    name: 'contributor',
    initialState,
    reducers: {
        setContributors(state, action){
            state.data = action.payload;
        }
    }
})

export const fetchContributors = createAsyncThunk('contributors/get', async () => {
    try {
      const response = await ApiService.getAllContributors();
      const data = response.data;
      console.log("Fetched contributors data:", data);
      return data;
    } catch (error) {
      console.error("Error fetching contributors:", error);
      throw error; 
    }
  });
  
  


export const {setContributors} = contributorSlice.actions;
export default contributorSlice.reducer;