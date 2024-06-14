import fetcher from "./config";

export async function fetchProductDetails(productId: string | number) {
  try {
    const response = await fetcher.get(`/store/products/${productId}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error;
  }
}

export async function postLoginInfo(data: { username: string; password: string }) {
  try {
    const response = await fetcher.post(`/auth/login/`, data);
    return response.data;
  } catch (error) {
    console.error("Error posting login information:", error);
    throw error;
  }
}

export async function postSingUpInfo(data: {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}) {
  try {
    const response = await fetcher.post(`/auth/signup/`, data);
    return response.data;
  } catch (error) {
    console.error("Error posting signup information:", error);
    throw error;
  }
}

export async function addToCart(data: {
  product_id: number;
  color_id?: number;
  quantity?: number;
}) {
  try {
    const response = await fetcher.post(`/store/cart/add/`, data);
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
}

export async function incrementCartItem(data: { cart_item_id: string; quantity: number }) {
  try {
    const response = await fetcher.post(`/store/cart/increment/`, data);
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
}

export async function decrementCartItem(data: { cart_item_id: string; quantity: number }) {
  try {
    const response = await fetcher.post(`/store/cart/decrement/`, data);
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
}

export async function clearCart() {
  try {
    const response = await fetcher.post(`/store/cart/clear/`);
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
}

export async function getCartDetail() {
  try {
    const response = await fetcher.get(`/store/cart/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cart details:", error);
    throw error;
  }
}

export async function applyDiscount(data: { discount_code: string }) {
  try {
    const response = await fetcher.post(`/store/cart/apply-discount/`, data);
    return response.data;
  } catch (error) {
    console.error("Error applying discount:", error);
    throw error;
  }
}
