import { FC } from "react";
import classNames from "@/utils/classNames";

import MinusIcon from "@/public/icons/huge-icon/interface/outline/minus.svg?react";
import PlusIcon from "@/public/icons/huge-icon/interface/outline/plus.svg?react";

interface Props {
  className?: string;
}

const ProductCounter: FC<Props> = ({ className }) => {
  return (
    <div className={classNames("flex border rounded-lg", className)}>
      <span className="h-full flex items-center justify-center flex-1 border-r">
        <MinusIcon />
      </span>
      <span className="h-full flex items-center justify-center flex-1">1</span>
      <span className="h-full flex items-center justify-center flex-1 border-l">
        <PlusIcon />
      </span>
    </div>
  );
};

export default ProductCounter;
