import Axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Reloader } from "../components/Tools";
import { baseURL } from "./store";

export enum STATUSES {
  IDLE = "idle",
  ERROR = "error",
  LOADING = "loading",
}

export interface UserDataType {
  name: string;
  email: string;
  token?: string;
  _id?: string;
}
export interface findUserArgeType {
  email: string;
}
export interface FindUserResponseType {
  user: UserDataType;
}

interface userState {
  data: UserDataType[];
  status: STATUSES;
}
// Initial state
const initialState: userState = {
  data: [],
  status: STATUSES.LOADING,
};

//Fetch user
export const FetchUser = createAsyncThunk<UserDataType[]>(
  "service/fetch",
  async () => {
    const response = await fetch(`${baseURL}/service`);
    const data = await response.json();
    return data;
  }
);

//create User
export const CreateUser = createAsyncThunk<UserDataType, UserDataType>(
  "user/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await Axios.post(`${baseURL}/user/create`, {
        ...data,
      });
      toast.success("User created successfully.");
      Reloader(600);
      return response.data.user;
    } catch (error: any) {
      toast.error("Something went wrong", error.response?.data);
      Reloader(900);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

//Finde user by email
export const FindUser = createAsyncThunk<UserDataType, findUserArgeType>(
  "find user/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await Axios.post(`${baseURL}/user/get-by-email`, {
        ...data,
      });
      // Reloader(600);
      const user = response.data.user;
      return user;
    } catch (error: any) {
      toast.error("Something went wrong", error.response?.data);
      // Reloader(900);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    get: (state, action: PayloadAction<UserDataType[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchUser.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(FetchUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(FetchUser.rejected, (state) => {
        state.status = STATUSES.ERROR;
      })
      .addCase(CreateUser.fulfilled, (state, action) => {
        state.data.push(action.payload); // Append the new user
        state.status = STATUSES.IDLE;
      })

      .addCase(FindUser.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(FindUser.fulfilled, (state, action) => {
        state.data = [action.payload]; // Store user in an array to match `UserDataType[]`
        state.status = STATUSES.IDLE;
      })
      .addCase(FindUser.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { get } = userSlice.actions;
export default userSlice.reducer;
