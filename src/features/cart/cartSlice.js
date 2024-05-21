import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalCartPrice: 0,
    shippingCost: 50,
  },
  reducers: {
    addItemToCart(state, { payload }) {
        const newItem = payload;
        const exitingItem = state.items.find((item) => item.id === newItem.id);
        state.totalQuantity += newItem.quantity;
        state.totalCartPrice += newItem.price * newItem.quantity;
        if (!exitingItem) {
            state.items.push(newItem);
        } else {
            exitingItem.quantity += newItem.quantity;
            exitingItem.totalPrice += newItem.price * newItem.quantity;
        }
    },
    removeItemFromCart(state, { payload }) {
        const id = payload;
        const existingItem = state.items.find((item) => item.id === id);
        state.totalQuantity--;
        state.totalCartPrice -= existingItem.price;
        if (existingItem.quantity === 1) {
            state.items = state.items.filter((item) => item.id !== id);
        } else {
            existingItem.quantity--;
            existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        }
    },
    increaseCartItem(state, { payload }) {
        const id = payload;
        const existingItem = state.items.find((item) => item.id === id);
        state.totalQuantity++;
        state.totalCartPrice = state.totalCartPrice + existingItem.price;
        if (existingItem) {
            existingItem.quantity++;
        }
    },
    clearCart(state){
        state.items = [];
        state.totalQuantity = 0;
        state.totalCartPrice = 0;
    }
  },
});

export const { addItemToCart, removeItemFromCart, increaseCartItem, clearCart } = cartSlice.actions

export default cartSlice.reducer