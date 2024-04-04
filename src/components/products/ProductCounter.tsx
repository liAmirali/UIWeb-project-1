import { FC } from "react";
import classNames from "@/utils/classNames";

import MinusIcon from "@/public/icons/huge-icon/interface/outline/minus.svg";
import PlusIcon from "@/public/icons/huge-icon/interface/outline/plus.svg";

interface Props {
  className?: string;
}

const ProductCounter: FC<Props> = ({ className }) => {
  return (
    <div className={classNames("flex border rounded-lg", className)}>
      <span className="px-3 h-full flex items-center border-r">
        <MinusIcon />
      </span>
      <span className="px-3 h-full flex items-center">1</span>
      <span className="px-3 h-full flex items-center border-l">
        <PlusIcon />
      </span>
    </div>
  );
};

export default ProductCounter;
