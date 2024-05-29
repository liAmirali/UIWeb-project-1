import { FC } from "react";
import OnSaleItem from "./OnSaleItem";

const OnSaleProducts: FC = () => {
  return (
    <div className="flex px-40 justify-between">
      <OnSaleItem
        heading="Macbook Air M2"
        description="Don’t miss the last opportunity."
        image="/images/products/off/image 15.png"
        badge="50% OFF"
        link="#"
        className="flex-1 max-w-3xl"
      />
      <OnSaleItem
        heading="iPhone 14 Pro"
        description="Don’t miss the last opportunity."
        image="/images/products/off/image 16.png"
        badge="50% OFF"
        link="#"
        className="flex-1 max-w-3xl"
      />
    </div>
  );
};

export default OnSaleProducts;
