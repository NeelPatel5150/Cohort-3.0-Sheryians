import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import { productsApi } from '../features/products/productsApi'

// Global Redux store
// - cart: createSlice reducer (Add / Update / Delete cart data)
// - productsApi: RTK Query (Display products from API + caching)
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  // RTK Query middleware caching, invalidation, polling ke liye zaroori hai
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})
