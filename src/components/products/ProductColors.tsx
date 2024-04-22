import { FC } from "react";

const ProductColors: FC = () => {
  return (
    <div>
      <b>Color</b>

      <div className="flex gap-x-2">
        <span className="rounded-lg size-9 bg-[#BEBEC6]"></span>
        <span className="rounded-lg size-9 bg-[#304FBE]"></span>
        <span className="rounded-lg size-9 bg-[#101316]"></span>
        <span className="rounded-lg size-9 bg-[#5D30BE]"></span>
      </div>
    </div>
  );
};

export default ProductColors;
