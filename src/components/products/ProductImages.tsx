import classNames from "@/utils/classNames";
import Image from "next/image";
import { FC } from "react";

interface Props {
  className?: string;
}

const ProductImages: FC<Props> = ({ className }) => {
  return (
    <div className={classNames("flex flex-col gap-y-4", className)}>
      <div className="flex items-center justify-center p-4 bg-gray-500 bg-opacity-5">
        <Image src="/images/products/iphone/iphone-big.png" alt="iphone" width="346" height="420" />
      </div>
      <div className="flex justify-between gap-x-4">
        <div className="flex items-center justify-center size-28 p-4 bg-gray-500 bg-opacity-5">
          <Image
            src="/images/products/iphone/iphone-small.png"
            alt="iphone"
            width="71"
            height="86"
          />
        </div>
        <div className="flex items-center justify-center size-28 p-4 bg-gray-500 bg-opacity-5">
          <Image
            src="/images/products/iphone/iphone-small.png"
            alt="iphone"
            width="71"
            height="86"
          />
        </div>
        <div className="flex items-center justify-center size-28 p-4 bg-gray-500 bg-opacity-5">
          <Image
            src="/images/products/iphone/iphone-small.png"
            alt="iphone"
            width="71"
            height="86"
          />
        </div>
        <div className="flex items-center justify-center size-28 p-4 bg-gray-500 bg-opacity-5">
          <Image
            src="/images/products/iphone/iphone-small.png"
            alt="iphone"
            width="71"
            height="86"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
