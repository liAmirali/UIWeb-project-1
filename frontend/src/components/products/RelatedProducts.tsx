import { FC } from "react";
import ProductItem from "../homepage/ProductItem";

const RelatedProducts: FC = () => {
  const products: ProductT[] = [
    {
      title: "Apple iPhone 14 Plus",
      price: 850,
      image: "/images/products/best-sellers/image 22.png",
      rating: 5,
    },
    {
      title: "Xiaomi Fimi X8 Mini",
      price: 650,
      image: "/images/products/top-selling/image 26.png",
      rating: 5,
    },
    {
      title: "Apple iPad Mini 6 Wi-Fi",
      price: 500,
      image: "/images/products/best-sellers/image 19.png",
      rating: 5,
    },
    {
      title: "Asus ROG Delta S",
      price: 250,
      image: "/images/products/top-selling/image 25.png",
      rating: 5,
    },
  ];

  return (
    <div>
      <h2 className="font-bold text-3xl mb-8">Related Products</h2>
      <div className="flex justify-between">
        {products.map((p, i) => (
          <ProductItem key={i} product={p} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
