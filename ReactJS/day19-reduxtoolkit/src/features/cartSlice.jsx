import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems:null,
  },
  reducers: {
    addtocart: (state, action) => {
      state.cartitems.push(action.payload)
    },
    removefromcart: (state, action) => {
      state.cartitems = state.cartitems.filter((item) => item.id !== action.payload.id)
    }
  }
})

export const { addtocart, removefromcart } = cartSlice.actions;

export default cartSlice.reducer;
