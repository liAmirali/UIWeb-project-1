import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: CartSliceState = {
  items: [],
  totalQuantity: 0,
};

const slice = createSlice({
  name: "cart",
  reducers: {
    increaseQuantity(
      state,
      action: PayloadAction<{ id: string; product?: ProductT; quantity?: number }>
    ) {
      const { id: productId, product, quantity } = action.payload;

      let found = false;
      for (const item of state.items) {
        if (item.product.id === productId) {
          item.quantity += quantity || 1;
          state.totalQuantity += quantity || 1;
          found = true;
          break;
        }
      }

      if (!found && !!product) {
        state.items.push({
          product: product,
          quantity: 1,
        });
        state.totalQuantity += 1;
      }
    },

    removeItem(state, action: PayloadAction<{ id: string }>) {
      const { id: productId } = action.payload;

      state.items = state.items.filter((item) => item.product.id !== productId);
      state.totalQuantity = state.items.reduce((a, b) => {
        return a + b.quantity;
      }, 0);
    },
  },

  initialState,
});

export const cartActions = slice.actions;
export default slice.reducer;
