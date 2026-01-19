import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.findIndex(p => p.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    removeProduct: (state, action) => {
      return state.filter(p => p.id !== action.payload);
    }
  }
});

export const { addProduct, updateProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
