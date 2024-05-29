import { FC } from "react";
import Button from "../common/Button";

import RightArrowIcon from "@/public/icons/huge-icon/arrows/solid/arrow-right.svg?react";
import LeftArrowIcon from "@/public/icons/huge-icon/arrows/solid/arrow-left.svg?react";
import CategoryItem from "./CategoryItem";

const categories = [
  {
    image: "/images/products/categories/image 9.png",
    title: "Mobile Phones",
  },
  {
    image: "/images/products/categories/image 11.png",
    title: "Smart TV",
  },
  {
    image: "/images/products/categories/image 13.png",
    title: "Smart Watch",
  },
  {
    image: "/images/products/categories/image 10.png",
    title: "Laptop",
  },
  {
    image: "/images/products/categories/image 14.png",
    title: "Drones",
  },
  {
    image: "/images/products/categories/image 12.png",
    title: "Headphones",
  },
];

const ShopCategories: FC = () => {
  return (
    <div className="px-40 py-20">
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-3xl font-bold">Shop by Categories</h3>

        <div className="flex gap-x-5">
          <Button style="gray" className="!p-3">
            <LeftArrowIcon />
          </Button>
          <Button className="!p-3">
            <RightArrowIcon />
          </Button>
        </div>
      </div>

      <div className="flex justify-between gap-4 flex-wrap">
        {categories.map((category, index) => (
          <CategoryItem key={index} image={category.image} title={category.title} />
        ))}
      </div>
    </div>
  );
};

export default ShopCategories;
