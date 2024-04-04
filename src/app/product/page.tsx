import Breadcrumb from "@/components/common/Breadcrumb";
import ProductDetails from "@/components/products/ProductDetails";
import { FC } from "react";

const ProductPage: FC = () => {
  return (
    <div className="px-40 py-20 space-y-8">
      <Breadcrumb />

      <ProductDetails />
    </div>
  );
};

export default ProductPage;
