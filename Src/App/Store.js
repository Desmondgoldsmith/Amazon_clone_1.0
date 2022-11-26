import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Slices/Cartslice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});