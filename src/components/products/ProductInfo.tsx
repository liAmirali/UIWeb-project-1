"use client";

import { FC, useState } from "react";
import ProductDescription from "./ProductDescription";
import ProductAdditionalInfo from "./ProductAdditionalInfo";
import ProductReviews from "./ProductReviews";
import classNames from "@/utils/classNames";

const ProductInfo: FC = () => {
  const [activeTab, setActiveTab] = useState<"description" | "additionalInfo" | "reviews">(
    "description"
  );

  return (
    <div>
      {/* Tabs */}
      <div className="flex border-b justify-start items-stretch transition-all duration-300">
        <span
          className={classNames(
            "cursor-pointer px-4 py-2",
            activeTab === "description" ? "text-primary-500 font-bold border-b-2 border-b-primary-500" : ""
          )}
          onClick={() => setActiveTab("description")}
        >
          Descriptions
        </span>
        <span
          className={classNames(
            "cursor-pointer px-4 py-2",
            activeTab === "additionalInfo" ? "text-primary-500 font-bold border-b-2 border-b-primary-500" : ""
          )}
          onClick={() => setActiveTab("additionalInfo")}
        >
          Additional Information
        </span>
        <span
          className={classNames(
            "cursor-pointer px-4 py-2",
            activeTab === "reviews" ? "text-primary-500 font-bold border-b-2 border-b-primary-500" : ""
          )}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </span>
      </div>

      {/* Content */}
      <div>
        {activeTab === "description" && <ProductDescription />}
        {activeTab === "additionalInfo" && <ProductAdditionalInfo />}
        {activeTab === "reviews" && <ProductReviews />}
      </div>
    </div>
  );
};

export default ProductInfo;
