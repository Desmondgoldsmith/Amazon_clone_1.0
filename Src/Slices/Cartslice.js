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
      const index  = state.items.findIndex((cartItem) => cartItem.id === action.payload.id)
      let newCart = [...state.items]

      if(index >= 0){
        newCart.splice(index,1)
      }else{
        console.warn(`the product with id of ${state.items.id} does not exist`)
      }
      state.items = newCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.cart.items;
export const sumTotal = (state) => state.cart.items.reduce((sum, item) => sum + item.price,0)

export default cartSlice.reducer;