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

export interface UserDataType {
  name: string;
  email: string;
  token?: string;
  purchase?: {
    orderData: string;
    requireDoc: [
      {
        docTitle: String;
        docUrl: String;
        status: String;
        rejectMessage: String;
      }
    ];
    productId: string;
    _id?: string;
  }[];
  _id?: string;
}
export interface findUserArgeType {
  email: string;
}
export interface UserUpdateDataType {
  requireDoc?: {
    docTitle: String;
    docUrl: String[];
    status: String;
    rejectMessage: String;
  }
  _id?: string;
}
export interface docType {
  docTitle?: String;
  docUrl?: String[];
  status?: String;
  rejectMessage?: String;
}
interface UpdateUserArgs {
  productId: string;
  userId: string;
  data: docType[];
  _id?: string;
}

export interface contactUserType {
  name: string;
  email: string;
  phone: string;
  pincode: string;
  city: string;
  date: string
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
  "user/fetch",
  async () => {
    const response = await fetch(`${baseURL}/users`);
    const data = await response.json();
    return data.user;
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
      const user = response.data.user;
      return user;
    } catch (error: any) {
      toast.error("Something went wrong", error.response?.data);
      Reloader(900);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
export const GetUser = createAsyncThunk<UserDataType, { _id: string }>(
  "get user/fetch",
  async ({ _id }, { rejectWithValue }) => {
    try {
      const response = await Axios.get(`${baseURL}/user/get-by-id/${_id}`);
      const user = response.data.user;
      return user;
    } catch (error: any) {
      toast.error("Something went wrong", error.response?.data);
      Reloader(900);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const UpdateDoc = createAsyncThunk<UserUpdateDataType, UpdateUserArgs>(
  "user/updateDOC",
  async ({ data, userId, productId }, { rejectWithValue }) => {
    try {
      const response = await Axios.post(`${baseURL}/user/update_doc/${userId}/${productId}`, data);
      toast.success("Document updated successfully !");
      Reloader(1000);
      return response.data;
    } catch (error: any) {
      toast.error("Failed to update document");
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);


//create contact user 
export const CreateContactUser = createAsyncThunk<contactUserType, contactUserType>(
  "contact_user/create",
  async (data, { rejectWithValue }) => {
    const selectedProductId = localStorage.getItem("selectedProduct");

    try {
      const response = await Axios.post(`${baseURL}/contact-user/create`, {
        ...data,
      });
      toast.success("Your information submited successfully.");
      if (selectedProductId) {
        localStorage.setItem("checkoutProduct", selectedProductId)
      }
      Reloader(600);
      return response.data.user;
    } catch (error: any) {
      toast.error("Something went wrong", error.response?.data);
      Reloader(900);
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

      .addCase(GetUser.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(GetUser.fulfilled, (state, action) => {
        state.data = [action.payload]; // Store user in an array to match `UserDataType[]`
        state.status = STATUSES.IDLE;
      })
      .addCase(GetUser.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { get } = userSlice.actions;
export default userSlice.reducer;
