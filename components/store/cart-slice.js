import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cartQty: 0,
    cartSubtotal: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.itemId === newItem.id
      );
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          itemTitle: newItem.title,
          itemPrice: newItem.price,
          qty: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.qty++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }

      state.cartQty = state.items.length;
      state.cartSubtotal = state.items
        .map((item) => item.totalPrice)
        .reduce((prev, curr) => prev + curr, 0);
    },

    removeItemFromCart(state, action) {
      const id = +action.payload;
      const existingItem = state.items.find((item) => item.itemId === id);
      console.log(id);
      if (existingItem.qty === 1) {
        state.items.filter((item) => item.itemId !== id);
      } else {
        existingItem.qty--;
        existingItem.totalPrice =
          existingItem.totalPrice - existingItem.itemPrice;
        state.cartSubtotal -= existingItem.totalPrice;
      }
    },

    increaseQty(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.itemId === id);

      existingItem.qty++;
      existingItem.totalPrice =
        existingItem.totalPrice + existingItem.itemPrice;
      state.cartSubtotal = state.items
        .map((item) => item.totalPrice)
        .reduce((prev, curr) => prev + curr, 0);
    },

    decreaseQty(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.itemId === id);

      existingItem.qty--;
      existingItem.totalPrice =
      existingItem.totalPrice - existingItem.itemPrice;
      state.cartSubtotal = state.items
        .map((item) => item.totalPrice)
        .reduce((prev, curr) => prev + curr, 0);
    },
  },
});
export const cartSliceActions = cartSlice.actions;
export default cartSlice;
