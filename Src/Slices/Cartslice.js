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
      // getting the index of the product we want to delete
      const index  = state.itmes.findIndex((cartItem) => cartItem.id === action.payload.id)
      let newCart = [...state.items]
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.cart.items;

export default cartSlice.reducer;