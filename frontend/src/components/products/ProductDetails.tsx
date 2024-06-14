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
import { addToCart } from "@/api";
import { toast } from "react-toastify";

interface Props {
  product: ProductT;
}

const ProductDetails: FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();

  const [selectedColor, setSelectedColor] = useState(
    product.colors && product.colors.length > 0 ? product.colors[0] : null
  );

  const [quantityCounter, setQuantityCounter] = useState(1);

  const handleColorChange = (color: ColorT) => {
    setSelectedColor(color);
  };

  const handleAddToCartClick = async () => {
    await addToCart({
      product_id: product.id,
      color_id: selectedColor?.id,
      quantity: quantityCounter,
    });

    dispatch(cartActions.setCacheValid(false));
    toast("Items were added to cart.", { type: "success" });
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

        <div className="text-lg">
          ${(+product.price + (selectedColor?.extra_cost || 0)).toFixed(2)}
        </div>

        <p>{product.description}</p>

        {product.colors && (
          <ProductColors
            colors={product.colors}
            selectedColor={selectedColor!}
            onColorChange={handleColorChange}
          />
        )}

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
