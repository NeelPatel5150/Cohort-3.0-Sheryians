import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Product cart me add karo. Agar pehle se hai to quantity +1, warna naya item quantity 1 ke saath push karo.
    addToCart(state, action) {
      const product = action.payload
      const existingItem = state.items.find((item) => item.id === product.id)

      if (existingItem) {
        existingItem.quantity = existingItem.quantity + 1
      } else {
        state.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        })
      }
    },

    // Cart se product completely hata do (id se match karke).
    removeFromCart(state, action) {
      const id = action.payload
      state.items = state.items.filter((item) => item.id !== id)
    },

    // Quantity badhao — sirf us item ki jiski id match karti hai.
    increaseQuantity(state, action) {
      const id = action.payload
      const item = state.items.find((item) => item.id === id)

      if (item) {
        item.quantity = item.quantity + 1
      }
    },

    // Quantity kam karo. Agar 0 ho jaye to item cart se remove kar do.
    decreaseQuantity(state, action) {
      const id = action.payload
      const item = state.items.find((item) => item.id === id)

      if (!item) {
        return
      }

      if (item.quantity === 1) {
        state.items = state.items.filter((cartItem) => cartItem.id !== id)
      } else {
        item.quantity = item.quantity - 1
      }
    },

    // Poora cart empty kar do.
    clearCart(state) {
      state.items = []
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer
