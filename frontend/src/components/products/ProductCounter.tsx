import { FC } from "react";
import classNames from "@/utils/classNames";

import MinusIcon from "@/public/icons/huge-icon/interface/outline/minus.svg?react";
import PlusIcon from "@/public/icons/huge-icon/interface/outline/plus.svg?react";

interface Props {
  className?: string;
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const ProductCounter: FC<Props> = ({ count, onDecrease, onIncrease, className }) => {
  return (
    <div className={classNames("flex border rounded-lg", className)}>
      <span
        className="h-full flex items-center justify-center flex-1 border-r"
        onClick={onDecrease}
      >
        <MinusIcon />
      </span>
      <span className="h-full flex items-center justify-center flex-1 select-none">{count}</span>
      <span
        className="h-full flex items-center justify-center flex-1 border-l"
        onClick={onIncrease}
      >
        <PlusIcon />
      </span>
    </div>
  );
};

export default ProductCounter;
