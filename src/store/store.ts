import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import categoryReducer from "./categorySlice";
import productReducer from "../store/productSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
