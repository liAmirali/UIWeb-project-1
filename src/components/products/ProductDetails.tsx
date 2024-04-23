import { FC, useState } from "react";
import ProductImages from "./ProductImages";
import Badge from "../common/Badge";
import Rating from "./Rating";
import ProductColors from "./ProductColors";

import FavoriteIcon from "@/public/icons/huge-icon/ecommerce/outline/favourite.svg?react";
import Button from "../common/Button";
import ProductCounter from "./ProductCounter";

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

const ProductDetails: FC = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColorChange = (color: ColorT) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex flex-row-reverse gap-x-6">
      <div className="space-y-8 flex-1">
        <div className="flex justify-between">
          <b className="text-4xl">Apple iPhone 14 Pro</b>
          <Badge text="In Stock" color="success" />
        </div>

        <div className="flex gap-x-4 items-center">
          <Rating rating={5} />
          <span className="text-gray-500 text-sm">{"5.0 (121 Reviews)"}</span>
        </div>

        <div className="text-lg">${(1999 + selectedColor.price).toFixed(2)}</div>

        <p>
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution.
        </p>

        <ProductColors
          colors={colors}
          selectedColor={selectedColor}
          onColorChange={handleColorChange}
        />

        <div className="flex items-center justify-between gap-x-8">
          <ProductCounter className="w-32 self-stretch" />

          <Button className="flex-1">Add to Cart</Button>

          <FavoriteIcon />
        </div>
      </div>

      <ProductImages className="flex-1" />
    </div>
  );
};

export default ProductDetails;
