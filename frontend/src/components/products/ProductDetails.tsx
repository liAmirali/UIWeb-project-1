import { FC, useState } from "react";
import ProductImages from "./ProductImages";
import Badge from "../common/Badge";
import Rating from "./Rating";
import ProductColors from "./ProductColors";

import FavoriteIcon from "@/public/icons/huge-icon/ecommerce/outline/favourite.svg?react";
import Button from "../common/Button";
import ProductCounter from "./ProductCounter";
import { useAppDispatch } from "@/store";
import { cartActions } from "@/store/cart";

const colors: ColorT[] = [
  {
    colorHex: "#BEBEC6",
    price: 100,
  },
  {
    colorHex: "#304FBE",
    price: 200,
  },
  {
    colorHex: "#101316",
    price: 300,
  },
  {
    colorHex: "#5D30BE",
    price: 400,
  },
];

interface Props {
  product: ProductT;
}

const ProductDetails: FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();

  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const [quantityCounter, setQuantityCounter] = useState(1);

  const handleColorChange = (color: ColorT) => {
    setSelectedColor(color);
  };

  const handleAddToCartClick = () => {
    dispatch(
      cartActions.increaseQuantity({
        id: product.id,
        product: product,
        quantity: quantityCounter,
      })
    );
  };

  return (
    <div className="flex flex-row-reverse gap-x-6">
      <div className="space-y-8 flex-1">
        <div className="flex justify-between">
          <b className="text-4xl">{product.title}</b>
          <Badge text="In Stock" color="success" />
        </div>

        <div className="flex gap-x-4 items-center">
          <Rating rating={product.rating} />
          <span className="text-gray-500 text-sm">{`${product.rating} (121 Reviews)`}</span>
        </div>

        <div className="text-lg">${(product.price + selectedColor.price).toFixed(2)}</div>

        <p>{product.description}</p>

        <ProductColors
          colors={colors}
          selectedColor={selectedColor}
          onColorChange={handleColorChange}
        />

        <div className="flex items-center justify-between gap-x-8">
          <ProductCounter
            className="w-32 self-stretch"
            count={quantityCounter}
            onIncrease={() => setQuantityCounter((prev) => prev + 1)}
            onDecrease={() => setQuantityCounter((prev) => (prev > 1 ? prev - 1 : 1))}
          />

          <Button className="flex-1" onClick={handleAddToCartClick}>
            Add to Cart
          </Button>

          <FavoriteIcon />
        </div>
      </div>

      <ProductImages className="flex-1" />
    </div>
  );
};

export default ProductDetails;
