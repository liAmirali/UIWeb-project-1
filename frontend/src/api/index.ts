import fetcher from './config';

export async function fetchProductDetails(productId: string | number) {
  try {
    const response = await fetcher.get(`/store/products/${productId}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
}