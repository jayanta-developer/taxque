import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { STATUSES } from "./statusTypes";

export const baseURL = import.meta.env.VITE_BASE_URL;

//job Type
export interface jobInpoutDataType {
  title: string;
  location: string;
  salary: string;
  metaTitle: string;
  metaDescription: string;
}

export interface JobDataType {
  title: string;
  location: string;
  salary: string;
  experience: string;
  metaTitle: string;
  metaDescription: string;
  type: string;
  skills: string[];
  description: string;
  postedDate: number;
  jobLocation: string;
  _id?: string;
}

// Define the initial state type
interface JobState {
  data: JobDataType[];
  status: STATUSES;
}

// Initial state
const initialState: JobState = {
  data: [],
  status: STATUSES.LOADING,
};

export const FetchJob = createAsyncThunk<JobDataType[]>(
  "job/fetch",
  async () => {
    const response = await fetch(`${baseURL}/jobs`);
    const data = await response.json();
    return data;
  }
);

// **Service Slice**
const serviceSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    get: (state, action: PayloadAction<JobDataType[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchJob.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(FetchJob.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(FetchJob.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { get } = serviceSlice.actions;
export default serviceSlice.reducer;
