import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Slices/Cartslice";
// globak store
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});