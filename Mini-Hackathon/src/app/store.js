import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'

// Global Redux store — app ke saare shared state yahan rehte hain
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})
