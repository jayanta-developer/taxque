import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import blogReducer from "./blogSlice";
import teamReducer from "./teamSlice";
import jobReducer from "./jobSlice";
import applicationReducer from "./Application"

export const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    product: productReducer,
    blog: blogReducer,
    team: teamReducer,
    job: jobReducer,
    application: applicationReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
