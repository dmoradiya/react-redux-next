import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productList",
  initialState: {
    loading: true,
    products: [],
    error: "",
  },
  reducers: {
    isLoading(state) {
      state.loading = true;
    },
    isData(state, payload) {
        state.loading = !state.loading,
        state.products = [...state.products, payload.products]
    },
    isAssetError(state){
        state.error = payload.error
    }

  },
});
export const productSliceActions = productSlice.actions;
export default productSlice;
