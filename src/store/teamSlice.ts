import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { STATUSES } from "./statusTypes";
export const baseURL = import.meta.env.VITE_BASE_URL;

export interface TeamDataType {
  name: string;
  email: string;
  imgUrl: string;
  role: string;
  summary: string;
  media: {
    facebook: string;
    twitter: string
    linkedin: string
  }
  _id?: string;
}

interface teamState {
  data: TeamDataType[];
  status: STATUSES;
}
// Initial state
const initialState: teamState = {
  data: [],
  status: STATUSES.LOADING,
};

//Fetch user
export const FetchTeam = createAsyncThunk<TeamDataType[]>(
  "team/fetch",
  async () => {
    const response = await fetch(`${baseURL}/teams`);
    const data = await response.json();
    return data;
  }
);


const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    get: (state, action: PayloadAction<TeamDataType[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchTeam.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(FetchTeam.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(FetchTeam.rejected, (state) => {
        state.status = STATUSES.ERROR;
      })
  },
});

export const { get } = teamSlice.actions;
export default teamSlice.reducer;
