import { FC } from "react";
import Rating from "../products/Rating";
import Image from "next/image";

interface Props {
  product: ProductItemT;
}

const ProductItem: FC<Props> = ({ product }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="bg-gray-500 bg-opacity-5 p-2 flex items-center justify-center">
        <Image src={product.image} alt={product.title} width="200" height="230" />
      </div>

      <b>{product.title}</b>

      <Rating rating={product.rating} />

      <span>${product.price.toFixed(2)}</span>
    </div>
  );
};

export default ProductItem;
