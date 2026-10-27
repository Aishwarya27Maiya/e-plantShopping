import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      const { name, image, cost } = action.payload
      const existingItem = state.items.find((item) => item.name === name)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ name, image, cost, quantity: 1 })
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.name !== action.payload)
    },
    updateQuantity(state, action) {
      const { name, quantity } = action.payload
      const item = state.items.find((entry) => entry.name === name)
      if (item) item.quantity = quantity
    },
  },
})

export const { addItem, removeItem, updateQuantity } = cartSlice.actions

export const selectCartItems = (state) => state.cart.items
export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0)
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.cost * item.quantity, 0)

export default cartSlice.reducer
