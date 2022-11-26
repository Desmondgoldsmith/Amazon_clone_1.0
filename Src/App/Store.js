import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/basketSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});