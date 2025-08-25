import { configureStore } from "@reduxjs/toolkit";

import { nubloApi } from "./service/nubloApi";

// Configure the Redux store using configureStore from Redux Toolkit
export const store = configureStore({
  reducer: {
    // Assign reducers and paths for various API services
    [nubloApi.reducerPath]: nubloApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      // Concatenate middleware for various API services
      nubloApi.middleware,
    ]),
});
