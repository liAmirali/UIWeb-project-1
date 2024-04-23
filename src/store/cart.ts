import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: CartSliceState = {
  items: [
    {
      product: {
        id: "1",
        title: "Apple iPhone 14 Pro",
        price: 1999,
        image: "/images/products/iphone/iphone-small.png",
      },
      quantity: 1,
    },
    {
      product: {
        id: "2",
        title: "Asus ROG Delta S",
        price: 250,
        image: "/images/products/top-selling/image 25.png",
      },
      quantity: 1,
    },
  ],
  totalQuantity: 2,
};

const slice = createSlice({
  name: "cart",
  reducers: {
    increaseQuantity: (state, action: PayloadAction<{ id: string; quantity?: number }>) => {
      for (const item of state.items) {
        if (item.product.id === action.payload.id) {
          item.quantity += action.payload.quantity || 1;
          state.totalQuantity += action.payload.quantity || 1;
          break;
        }
      }
    },
  },
  initialState,
});

export const cartActions = slice.actions;
export default slice.reducer;
