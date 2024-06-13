import { FC } from "react";
import ProductItem from "./ProductItem";
import ProductItemTall from "./ProductItemTall";

interface Props {
  heading: string;
  products: ProductT[];
}

const ProductGrid: FC<Props> = ({ heading, products }) => {
  return (
    <div className="px-40 py-20">
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-3xl font-bold">{heading}</h3>

        <div className="flex gap-x-5 text-lg underline-offset-8">
          <span className="underline text-primary-500">New</span>
          <span className="">Featured</span>
          <span className="">Top Rated</span>
        </div>
      </div>

      <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] grid-rows-2 gap-6">
        <ProductItemTall product={products[0]} className="row-span-2" />

        {products.slice(1).map((p, i) => (
          <ProductItem key={i} product={p} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
