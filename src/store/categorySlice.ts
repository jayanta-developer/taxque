import Axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Reloader } from "../components/Tools";
import { baseURL } from "../App";
import { STATUSES } from "./statusTypes";


//Category Type
export interface CategoryDataType {
  title: string;
  summary: string;
  imageUrl: string;
  category?: string;
  imgAltTag?: string;
  Slug?:string;
  metaTitle?: string;
  metaDescription?: string;
  _id?: string;
}

//Category Update type
export interface UpdatedCategoryValType {
  title?: string;
  Slug?:string;
  summary?: string;
  imageUrl?: string;
  imgAltTag?: string;
  metaTitle?: string;
  metaDescription?: string;
  category?: string;
}
interface UpdateCategoryArgs {
  id: string;
  data: UpdatedCategoryValType;
}

// Define the initial state type
interface CategoryState {
  data: CategoryDataType[];
  status: STATUSES;
}

// Initial state
const initialState: CategoryState = {
  data: [],
  status: STATUSES.LOADING,
};

// **Fetch Category - Async Thunk**
export const FetchCategory = createAsyncThunk<CategoryDataType[]>(
  "Category/fetch",
  async () => {
    const response = await fetch(`${baseURL}/category`);
    const data = await response.json();
    return data;
  }
);

export const CreateCategory = createAsyncThunk<CategoryDataType, CategoryDataType>(
  "Category/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await Axios.post(`${baseURL}/category/create`, {
        ...data,
      });
      toast.success("category created successfully.");
      Reloader(600);
      return response.data;
    } catch (error: any) {
      toast.error("Something went wrong", error.response?.data);
      Reloader(900);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

// **Delete Category - Async Thunk**
export const DeleteCategory = createAsyncThunk<void, string>(
  "Category/delete",
  async (id) => {
    try {
      await Axios.post(`${baseURL}/category/delete/${id}`).then(() => {
        toast.info("Service deleted successfully !");
        Reloader(1000);
      });
    } catch (error) {
      console.error("Error deleting service:", error);
      toast.error("Internal server error!");
    }
  }
);

//Update Category

export const UpdateCategory = createAsyncThunk<
  UpdatedCategoryValType,
  UpdateCategoryArgs
>("Category/update", async ({ data, id }, { rejectWithValue }) => {
  try {
    const response = await Axios.post(`${baseURL}/category/update/${id}`, data);
    toast.success("Category updated successfully !");
    Reloader(1000);
    return response.data;
  } catch (error: any) {
    toast.error("Failed to update Category");
    return rejectWithValue(error.response?.data || "An error occurred");
  }
});

// **Category Slice**
const categorySlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    get: (state, action: PayloadAction<CategoryDataType[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchCategory.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(FetchCategory.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(FetchCategory.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { get } = categorySlice.actions;
export default categorySlice.reducer;
