import Axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Reloader } from "../components/Tools";
import { STATUSES } from "./categorySlice";
import { baseURL } from "./store";


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
export interface MCATableType {
  aspect: string;
  complianceRequirement: string;
  frequency: string;
  WhyImportant: string;
}
export interface docRTableType {
  category: string;
  documentType: string;
  specificExamples: string;
  Purpose: string;
}
export interface differencTableType {
  KeyFeature: string;
  PrivateLC: string;
  PublicLC: string;
  LLP: string;
  SoleProprietorship: string;
  PartnershipFirm: string;
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
export interface ProductInfoValType {
  title: string;
  metaTitle: string;
  metaDescription: string;
}
export interface ProductDataType {
  title: string;
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
    tableData: {
      KeyFeature: string;
      PrivateLC: string;
      PublicLC: string;
      LLP: string;
      SoleProprietorship: string;
      PartnershipFirm: string;
    }[];
  };
  documentsRequired?: {
    title: string;
    summarys: string[];
    tableData: docRTableType[];
  };
  MCACompliance?: {
    title: string;
    summarys: string[];
    tableData: MCATableType[];
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
    tableData: DueDateableType[];
  };
  Steps?: stepDataType[];
  FAQ?: FAQType[];
  priceData?: priceDataProps[];
  _id?: string;
}

// interface UpdateProductType {
//   title?: string;
//   imageUrl?: string;
//   rating?: number;
//   category?: categoryProps;
//   feturePoints?: feturePointsProps[];
//   priceData?: priceDataProps[];
//   FAQ?: FAQType[];
// }
// interface UpdateProductArgs {
//   id: string;
//   data: UpdateProductType;
// }

// Define the initial state type
interface ProductState {
  data: ProductDataType[];
  status: STATUSES;
}
// Initial state
const initialState: ProductState = {
  data: [],
  status: STATUSES.LOADING,
};

// **Fetch Services - Async Thunk**
export const FetchProdcut = createAsyncThunk<ProductDataType[]>(
  "product/fetch",
  async () => {
    const response = await fetch(`${baseURL}/products`);
    const data = await response.json();
    return data;
  }
);

export const CreateProduct = createAsyncThunk<ProductDataType, ProductDataType>(
  "product/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await Axios.post(`${baseURL}/product/create`, {
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

//Delete product
export const DeleteProduct = createAsyncThunk<void, string>(
  "product/delete",
  async (id) => {
    try {
      await Axios.post(`${baseURL}/product/delete/${id}`).then(() => {
        toast.info("Product deleted successfully !");
        Reloader(1000);
      });
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Internal server error!");
      Reloader(600);
    }
  }
);

//Update Product----------------------------------------------
// export const UpdateProduct = createAsyncThunk<
//   UpdateProductType,
//   UpdateProductArgs
// >("product/update", async ({ data, id }, { rejectWithValue }) => {
//   try {
//     const response = await Axios.post(`${baseURL}/product/update/${id}`, data);
//     toast.success("Product updated successfully !");
//     Reloader(1000);
//     return response.data;
//   } catch (error: any) {
//     toast.error("Failed to update product");
//     return rejectWithValue(error.response?.data || "An error occurred");
//   }
// });

//Add FAQ
export const AddFAQ = createAsyncThunk<FAQType, FAQArgs>(
  "product/FAQ/update",
  async ({ data, id }, { rejectWithValue }) => {
    try {
      const response = await Axios.post(
        `${baseURL}/product/faq/add/${id}`,
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
      const response = await Axios.post(`${baseURL}/product/faq/update`, data);
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
      await Axios.post(`${baseURL}/product/faq/delete`, ids).then(() => {
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
        `${baseURL}/product/price/add/${id}`,
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
      `${baseURL}/product/price/update/${id}/${priceItemId}`,
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
      `${baseURL}/product/price/delete/${id}/${priceItemId}`
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
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    get: (state, action: PayloadAction<ProductDataType[]>) => {
      state.data = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(FetchProdcut.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(FetchProdcut.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(FetchProdcut.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { get } = productSlice.actions;
export default productSlice.reducer;
