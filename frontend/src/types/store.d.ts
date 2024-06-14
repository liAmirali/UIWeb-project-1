type CartSliceState = {
  items: CartItem[];
  totalQuantity: number;
  isCacheValid: boolean;
  discount: DiscountT | null;
  total_cost: number;
  discount_value: number | null;
  net_price: number;
};

type AuthSliceState = {
  isAuth: boolean;
};
