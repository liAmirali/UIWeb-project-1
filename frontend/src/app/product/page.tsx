import { fetchProductDetails } from "@/api";
import Breadcrumb from "@/components/common/Breadcrumb";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import ProductDetails from "@/components/products/ProductDetails";
import ProductInfo from "@/components/products/ProductInfo";
import RelatedProducts from "@/components/products/RelatedProducts";

import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage: FC = () => {
  const params = useParams<{ productId: string }>();
  const productId = params.productId!;

  const [productDetailsRes, setProductDetailsRes] = useState<ApiCallStatus<ProductT>>({
    data: null,
    error: null,
    isLoading: false,
  });

  console.log("productId:", productId);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setProductDetailsRes({
          isLoading: true,
          data: null,
          error: null,
        });

        const res = await fetchProductDetails(productId);
        console.log(res);

        setProductDetailsRes({
          isLoading: false,
          data: res.data,
          error: null,
        });
      } catch (error) {
        console.log("error:", error);

        setProductDetailsRes({
          data: null,
          error: error?.message || "An error was occurred.",
          isLoading: false,
        });
      }
    };

    fetchProduct();
  }, [productId]);

  const product = {
    title: "Apple iPhone 14 Plus",
    price: 850,
    image: "/images/products/best-sellers/image 22.png",
    rating: 5,
  };

  return (
    <div className="px-40 py-20 space-y-8">
      <Breadcrumb />

      {productDetailsRes.isLoading ? (
        <LoadingSpinner />
      ) : productDetailsRes.data ? (
        <ProductDetails product={productDetailsRes.data} />
      ) : productDetailsRes.error ? (
        <p>{productDetailsRes.error}</p>
      ) : null}

      <ProductInfo />

      <RelatedProducts />
    </div>
  );
};

export default ProductPage;
