import Axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Reloader } from "../components/Tools";
import { baseURL } from "../App";
import { STATUSES } from "./statusTypes";


export interface TableState {
  headers: string[];
  rows: Array<Record<string, string>>;
};

export interface stepDataType {
  title: string;
  summary: { summary: string }[];
  steps: { step: string }[];
}
export interface DueDateableType {
  quarter: string;
  period: string;
  TDSReturnDue: string;
}
export interface ELGBTBulletType {
  title: string;
  bulletPoints: {
    bullet: string;
  }[];
}

export interface featureDataType {
  title: string;
  summary: string;
}

export interface categoryProps {
  title: string;
  Id: string;
}
export interface FAQType {
  question: string;
  answer: string;
  _id?: string;
}
export interface FAQArgs {
  id: string;
  data: FAQType;
}
export interface FAQUpdatTeype {
  productId?: string;
  faqId?: string;
  question?: string;
  answer?: string;
  _id?: string;
}
export interface FAQUpdatTeypeArgs {
  data: FAQUpdatTeype;
}
export interface feturePointsProps {
  title: string;
  summary: string;
  _id?: string;
}
export interface priceDataProps {
  title: string;
  basicPrice: string;
  price: string;
  summary: string;
  fetures?: string[];
  MostPopular?: boolean;
  _id?: string;
}

interface priceArgs {
  id: string;
  data: priceDataProps;
}
export interface priceDataUpdateProps {
  title?: string;
  basicPrice?: string;
  price?: string;
  summary?: string;
  fetures?: string[];
  MostPopular?: boolean;
  _id?: string;
}
interface priceUpdateArgs {
  id: string;
  priceItemId: string;
  data: priceDataUpdateProps;
}
export interface ServiceInfoValType {
  title: string;
  metaTitle: string;
  metaDescription: string;
}
export interface ServiceDataType {
  title: string;
  Slug: string;
  displayName: string;
  metaTitle: string;
  metaDescription: string;
  category: {
    title: string;
    id: string;
  };
  feturePoints: { title: string; summary: string }[];
  overView?: {
    title?: string;
    summarys?: string[];
  };
  whatIs?: {
    summarys: string[];
    liList: {
      title: string;
      summary: string;
    }[];
    Notice: {
      noticeTitle: string;
      noticeSummary: string;
    };
  };
  keyFeature?: {
    title: string;
    summarys: string[];
    keyFeatureItems: {
      title: string;
      summary: string;
    }[];
  };
  benefits?: {
    title: string;
    summarys: string[];
    benefitsItems: {
      title: string;
      summary: string;
    }[];
  };
  difference?: {
    title: string;
    summarys: string[];
    tableData: TableState;
  };
  documentsRequired?: {
    title: string;
    summarys: string[];
    tableData: TableState;
  };
  MCACompliance?: {
    title: string;
    summarys: string[];
    tableData: TableState;
  };
  ThresholdLimits?: {
    title: string;
    summarys: string[];
  };
  Eligibility?: {
    title: string;
    summarys: string[];
    eligibilityPoints: {
      title: string;
      bulletPoints: { bullet: string }[];
    }[];
  };
  DueDate?: {
    title: string;
    summarys: string[];
    tableData: TableState;
  };
  Steps?: stepDataType[];
  FAQ?: FAQType[];
  priceData?: priceDataProps[];
  display?: string;
  _id?: string;
}

// Define the initial state type
interface ServiceState {
  data: ServiceDataType[];        // all products
  Service: ServiceDataType | null; // single product
  status: string;
}

const initialState: ServiceState = {
  data: [],
  Service: null,
  status: STATUSES.LOADING,
};

// **Fetch Services - Async Thunk**
export const FetchService = createAsyncThunk<ServiceDataType[]>(
  "product/fetch",
  async () => {
    const response = await fetch(`${baseURL}/service`);
    const data = await response.json();
    return data;
  }
);
//get service by id
export const FetchServiceById = createAsyncThunk<ServiceDataType, { id: string }>(
  "ServiceById/fetch",
  async ({ id }) => {
    const response = await fetch(`${baseURL}/service/${id}`);
    const data = await response.json();
    return data;
  }
);

export const CreateService = createAsyncThunk<ServiceDataType, ServiceDataType>(
  "Service/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await Axios.post(`${baseURL}/service/create`, {
        ...data,
      });
      toast.success("Product created successfully.");
      Reloader(600);
      return response.data;
    } catch (error: any) {
      toast.error("Something went wrong", error.response?.data);
      console.log(error.response?.data);
      Reloader(600);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

//Delete Service
export const DeleteService = createAsyncThunk<void, string>(
  "Service/delete",
  async (id) => {
    try {
      await Axios.post(`${baseURL}/service/delete/${id}`).then(() => {
        toast.info("Service deleted successfully !");
        Reloader(1000);
      });
    } catch (error) {
      console.error("Error deleting Service:", error);
      toast.error("Internal server error!");
      Reloader(600);
    }
  }
);

//Add FAQ
export const AddFAQ = createAsyncThunk<FAQType, FAQArgs>(
  "Service/FAQ/update",
  async ({ data, id }, { rejectWithValue }) => {
    try {
      const response = await Axios.post(
        `${baseURL}/service/faq/add/${id}`,
        data
      );
      toast.success("FAQ updated successfully !");
      Reloader(1000);
      return response.data;
    } catch (error: any) {
      toast.error("Failed to update FAQ");
      Reloader(600);
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);

//Update FAQ----------------------------------------------
export const UpdateFAQ = createAsyncThunk<FAQUpdatTeype, FAQUpdatTeypeArgs>(
  "faq/update",
  async ({ data }, { rejectWithValue }) => {
    try {
      const response = await Axios.post(`${baseURL}/service/faq/update`, data);
      toast.success("FAQ updated successfully !");
      Reloader(1000);
      return response.data;
    } catch (error: any) {
      toast.error("Failed to update FAQ");
      Reloader(600);
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);

//Delete FAQ
export const DeleteFAQ = createAsyncThunk<void, object>(
  "faq/delete",
  async (ids) => {
    try {
      await Axios.post(`${baseURL}/service/faq/delete`, ids).then(() => {
        toast.info("FAQ deleted successfully !");
        Reloader(1000);
      });
    } catch (error) {
      console.error("Error deleting FAQ:", error);
      toast.error("Internal server error!");
      Reloader(600);
    }
  }
);

//Add price
export const AddPrice = createAsyncThunk<priceDataProps, priceArgs>(
  "product/price/add",
  async ({ data, id }, { rejectWithValue }) => {
    try {
      const response = await Axios.post(
        `${baseURL}/service/price/add/${id}`,
        data
      );
      toast.success("Add price plan successfully!");
      // Reloader(1000);
      return response.data;
    } catch (error: any) {
      toast.error("Failed to add price plan");
      // Reloader(600);
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);

//Update Price plan
export const UpdatePlan = createAsyncThunk<
  priceDataUpdateProps,
  priceUpdateArgs
>("price/update", async ({ data, id, priceItemId }, { rejectWithValue }) => {
  try {
    const response = await Axios.post(
      `${baseURL}/service/price/update/${id}/${priceItemId}`,
      data
    );
    toast.success("Price plan updated successfully !");
    Reloader(1000);
    return response.data;
  } catch (error: any) {
    toast.error("Failed to update Price plan!");
    Reloader(600);
    return rejectWithValue(error.response?.data || "An error occurred");
  }
});

//Delete Price plan
export const DeletePricePlan = createAsyncThunk<
  void,
  { id: string; priceItemId: string }
>("pricePlan/delete", async ({ id, priceItemId }) => {
  try {
    await Axios.post(
      `${baseURL}/service/price/delete/${id}/${priceItemId}`
    ).then(() => {
      toast.info("Plan deleted successfully !");
      Reloader(1000);
    });
  } catch (error) {
    console.error("Error deleting Plan:", error);
    toast.error("Internal server error!");
    Reloader(600);
  }
});

// **Service Slice**
const serviceSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    get: (state, action: PayloadAction<ServiceDataType[]>) => {
      state.data = action.payload;
    },
  },

  extraReducers: (builder) => {
    // Fetch all Service
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

    // Fetch product by ID
    builder
      .addCase(FetchServiceById.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(FetchServiceById.fulfilled, (state, action) => {
        state.Service = action.payload; // 👈 store single product separately
        state.status = STATUSES.IDLE;
      })
      .addCase(FetchServiceById.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });

    // Create Product
    builder
      .addCase(CreateService.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(CreateService.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.status = STATUSES.IDLE;
      })
      .addCase(CreateService.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });

    // Delete Service
    builder
      .addCase(DeleteService.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(DeleteService.fulfilled, (state, action) => {
        state.data = state.data.filter((p) => p._id !== action.meta.arg);
        state.status = STATUSES.IDLE;
      })
      .addCase(DeleteService.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });

    // Add FAQ
    builder
      .addCase(AddFAQ.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(AddFAQ.fulfilled, (state, action) => {
        const { id } = action.meta.arg;
        const product = state.data.find((p) => p._id === id);
        if (product) {
          product.FAQ = [...(product.FAQ || []), action.payload];
        }
        state.status = STATUSES.IDLE;
      })
      .addCase(AddFAQ.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });

    // Delete FAQ
    builder
      .addCase(DeleteFAQ.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(DeleteFAQ.fulfilled, (state, action) => {
        const { productId, faqId } = action.meta.arg as any;
        const product = state.data.find((p) => p._id === productId);
        if (product?.FAQ) {
          product.FAQ = product.FAQ.filter((faq) => faq._id !== faqId);
        }
        state.status = STATUSES.IDLE;
      })
      .addCase(DeleteFAQ.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });

    // Add Price
    builder
      .addCase(AddPrice.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(AddPrice.fulfilled, (state, action) => {
        const { id } = action.meta.arg;
        const product = state.data.find((p) => p._id === id);
        if (product) {
          product.priceData = [...(product.priceData || []), action.payload];
        }
        state.status = STATUSES.IDLE;
      })
      .addCase(AddPrice.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });

    // Update Price Plan
    builder
      .addCase(UpdatePlan.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(UpdatePlan.fulfilled, (state, action) => {
        const { id, priceItemId } = action.meta.arg;
        const product = state.data.find((p) => p._id === id);
        if (product?.priceData) {
          product.priceData = product.priceData.map((plan) =>
            plan._id === priceItemId ? { ...plan, ...action.payload } : plan
          );
        }
        state.status = STATUSES.IDLE;
      })
      .addCase(UpdatePlan.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });

    // Delete Price Plan
    builder
      .addCase(DeletePricePlan.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(DeletePricePlan.fulfilled, (state, action) => {
        const { id, priceItemId } = action.meta.arg;
        const product = state.data.find((p) => p._id === id);
        if (product?.priceData) {
          product.priceData = product.priceData.filter(
            (plan) => plan._id !== priceItemId
          );
        }
        state.status = STATUSES.IDLE;
      })
      .addCase(DeletePricePlan.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  }

});

export const { get } = serviceSlice.actions;
export default serviceSlice.reducer;
