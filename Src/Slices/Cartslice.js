import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {state.items = [...state.items, action.payload]},
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(cartItems) => cartItems.id === action.payload.id
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.cart.items;

export default cartSlice.reducer;