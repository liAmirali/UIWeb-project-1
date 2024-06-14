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
