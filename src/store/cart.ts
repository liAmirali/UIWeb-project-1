import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: CartSliceState = {
  items: [
    {
      product: {
        id: "1",
        title: "Apple iPhone 14 Pro",
        price: 1999,
        image: "/images/products/iphone/iphone-small.png",
        rating: 4,
      },
      quantity: 1,
    },
    {
      product: {
        id: "2",
        title: "Asus ROG Delta S",
        price: 250,
        image: "/images/products/top-selling/image 25.png",
        rating: 5,
      },
      quantity: 1,
    },
  ],
  totalQuantity: 2,
};

const slice = createSlice({
  name: "cart",
  reducers: {
    increaseQuantity: (
      state,
      action: PayloadAction<{ id: string, product?: ProductItemT; quantity?: number }>
    ) => {
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
  },
  initialState,
});

export const cartActions = slice.actions;
export default slice.reducer;
