import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: CartSliceState = {
  items: [],
  totalQuantity: 0,
  isCacheValid: false,
};

const slice = createSlice({
  name: "cart",
  reducers: {
    setCartItems(state, action: PayloadAction<CartItem[]>) {
      state.items = action.payload;

      state.totalQuantity = action.payload.reduce((acc, item) => acc + item.quantity, 0);
    },

    setCacheValid(state, action: PayloadAction<boolean>) {
      state.isCacheValid = action.payload;
    },
  },

  initialState,
});

export const cartActions = slice.actions;
export default slice.reducer;
