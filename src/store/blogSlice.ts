import Axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Reloader } from "../components/Tools";
import { baseURL } from "../App";
import { STATUSES } from "./statusTypes";

export interface blogTextType {
  title: string;
  summarys: { summary: string }[];
}
export interface BlogDataType {
  title: string;
  Slug: string;
  metaTitle: string;
  metaDescription: string
  imageUrl?: string;
  blogText: blogTextType[];
  date?: string;
  category?: string;
  _id?: string;
}
interface UpdateBlogArgs {
  id: string;
  data: BlogDataType;
}
interface blogState {
  data: BlogDataType[];
  Blog: BlogDataType | null;
  status: STATUSES;
}

// Initial state
const initialState: blogState = {
  data: [],
  Blog: null,
  status: STATUSES.LOADING,
};

//Fetch user
export const FetchBlog = createAsyncThunk<BlogDataType[]>(
  "blog/fetch",
  async () => {
    const response = await fetch(`${baseURL}/blogs`);
    const data = await response.json();
    return data.blog;
  }
);


export const FetchBlogBySlug = createAsyncThunk<BlogDataType, { slug: string }>(
  "blogBySlug/fetch",
  async ({ slug }) => {
    const response = await fetch(`${baseURL}/blog/${slug}`);
    const data = await response.json();
    return data;
  }
);

// create User
export const CreateBlog = createAsyncThunk<BlogDataType, BlogDataType>(
  "blog/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await Axios.post(`${baseURL}/blog/create`, {
        ...data,
      });
      toast.success("Blog created successfully.");
      Reloader(600);
      return response.data;
    } catch (error: any) {
      toast.error("Something went wrong", error.response?.data);
      Reloader(900);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

//Delete blog
export const DeleteBlog = createAsyncThunk<void, string>(
  "blog/delete",
  async (id) => {
    try {
      await Axios.post(`${baseURL}/blog/delete/${id}`).then(() => {
        toast.info("Blog deleted successfully !");
        Reloader(1000);
      });
    } catch (error) {
      console.error("Error deleting service:", error);
      toast.error("Internal server error!");
    }
  }
);

export const UpdateBlog = createAsyncThunk<BlogDataType, UpdateBlogArgs>(
  "blog/update",
  async ({ data, id }, { rejectWithValue }) => {
    try {
      const response = await Axios.post(`${baseURL}/blog/update/${id}`, data);
      toast.success("Blog updated successfully !");
      Reloader(1000);
      return response.data;
    } catch (error: any) {
      toast.error("Failed to update service");
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    get: (state, action: PayloadAction<BlogDataType[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchBlog.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(FetchBlog.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(FetchBlog.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });

    builder
      .addCase(FetchBlogBySlug.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(FetchBlogBySlug.fulfilled, (state, action) => {
        state.Blog = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(FetchBlogBySlug.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { get } = blogSlice.actions;
export default blogSlice.reducer;
