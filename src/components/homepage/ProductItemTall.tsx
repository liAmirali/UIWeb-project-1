import classNames from "@/utils/classNames";

import { FC } from "react";

interface Props {
  product: ProductItemT;
  className?: string;
}

const ProductItemTall: FC<Props> = ({ product, className }) => {
  return (
    <div className={classNames("flex flex-col relative bg-gray-500 bg-opacity-5 p-10 gap-y-6", className)}>
      <b className="text-4xl font-bold">{product.title}</b>

      <span className="text-3xl font-light">${product.price}</span>

      <img className="absolute bottom-0 right-0" src={product.image} alt={product.title} width="350" height="500" />
    </div>
  );
};

export default ProductItemTall;
