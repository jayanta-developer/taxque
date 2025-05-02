import Axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Reloader } from "../components/Tools";
import { baseURL } from "../App";

export enum STATUSES {
  IDLE = "idle",
  ERROR = "error",
  LOADING = "loading",
}

//service Type
export interface ServiceDataType {
  title: string;
  summary: string;
  imageUrl: string;
  category?: string;
  imgAltTag?: string;
  metaTitle?: string;
  metaDescription?: string;
  _id?: string;
}

//Service Update type
export interface UpdatedServiceValType {
  title?: string;
  summary?: string;
  imageUrl?: string;
  imgAltTag?: string;
  metaTitle?: string;
  metaDescription?: string;
  category?: string;
}
interface UpdateServiceArgs {
  id: string;
  data: UpdatedServiceValType;
}

// Define the initial state type
interface ServiceState {
  data: ServiceDataType[];
  status: STATUSES;
}

// Initial state
const initialState: ServiceState = {
  data: [],
  status: STATUSES.LOADING,
};

// **Fetch Services - Async Thunk**
export const FetchService = createAsyncThunk<ServiceDataType[]>(
  "service/fetch",
  async () => {
    const response = await fetch(`${baseURL}/service`);
    const data = await response.json();
    return data;
  }
);

export const CreateService = createAsyncThunk<ServiceDataType, ServiceDataType>(
  "service/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await Axios.post(`${baseURL}/service/create`, {
        ...data,
      });
      toast.success("Service created successfully.");
      Reloader(600);
      return response.data;
    } catch (error: any) {
      toast.error("Something went wrong", error.response?.data);
      Reloader(900);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

// **Delete service - Async Thunk**
export const DeleteService = createAsyncThunk<void, string>(
  "service/delete",
  async (id) => {
    try {
      await Axios.post(`${baseURL}/service/delete/${id}`).then(() => {
        toast.info("Service deleted successfully !");
        Reloader(1000);
      });
    } catch (error) {
      console.error("Error deleting service:", error);
      toast.error("Internal server error!");
    }
  }
);

//Update service

export const UpdateService = createAsyncThunk<
  UpdatedServiceValType,
  UpdateServiceArgs
>("service/update", async ({ data, id }, { rejectWithValue }) => {
  try {
    const response = await Axios.post(`${baseURL}/service/update/${id}`, data);
    toast.success("Service updated successfully !");
    Reloader(1000);
    return response.data;
  } catch (error: any) {
    toast.error("Failed to update service");
    return rejectWithValue(error.response?.data || "An error occurred");
  }
});

// **Service Slice**
const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    get: (state, action: PayloadAction<ServiceDataType[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchService.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(FetchService.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(FetchService.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { get } = serviceSlice.actions;
export default serviceSlice.reducer;
