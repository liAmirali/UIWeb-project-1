import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: CartSliceState = {
  items: [],
  totalQuantity: 0,
  isCacheValid: false,
  discount: null,
  total_cost: 0,
  discount_value: null,
  net_price: 0,
};

const slice = createSlice({
  name: "cart",
  reducers: {
    setCart(
      state,
      action: PayloadAction<{
        cart_items: CartItem[];
        discount: DiscountT | null;
        total_cost: number;
        discount_value: number | null;
        net_price: number;
      }>
    ) {
      const { cart_items, discount, discount_value, net_price, total_cost } = action.payload;
      state.items = cart_items;
      state.discount = discount;
      state.discount_value = discount_value;
      state.net_price = net_price;
      state.total_cost = total_cost;

      state.totalQuantity = cart_items.reduce((acc, item) => acc + item.quantity, 0);
    },

    setCacheValid(state, action: PayloadAction<boolean>) {
      state.isCacheValid = action.payload;
    },
  },

  initialState,
});

export const cartActions = slice.actions;
export default slice.reducer;
