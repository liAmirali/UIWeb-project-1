import Image from "next/image";
import { FC } from "react";

const HeaderUtils: FC = () => {
  return (
    <div className="flex gap-x-5">
      <Image src="/icons/huge-icon/interface/solid/search 01.svg" alt="" width="24" height="24" />
      <Image src="/icons/huge-icon/ecommerce/outline/favourite.svg" alt="" width="24" height="24" />
      <Image src="/icons/huge-icon/ecommerce/outline/cart.svg" alt="" width="24" height="24" />
    </div>
  );
};

export default HeaderUtils;
