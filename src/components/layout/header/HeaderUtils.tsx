import CartList from "@/components/products/CartList";

import { FC, useState } from "react";

const HeaderUtils: FC = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="flex gap-x-5 items-center">
      <div>
        <img src="/icons/huge-icon/interface/solid/search 01.svg" alt="" width="24" height="24" />
      </div>
      <div>
        <img
          src="/icons/huge-icon/ecommerce/outline/favourite.svg?react"
          alt=""
          width="24"
          height="24"
        />
      </div>
      <div
        className="relative cursor-pointer"
        onClick={() => {
          setShowCart(true);
        }}
      >
        <img src="/icons/huge-icon/ecommerce/outline/cart.svg" alt="" width="24" height="24" />
        <div className="size-4 absolute -top-2 -right-2 rounded-full bg-primary-500 z-[1] flex items-center justify-center p-2.5">
          <span className="font-bold text-white text-sm">2</span>
        </div>
      </div>

      {showCart && <CartList open={showCart} setOpen={setShowCart} />}
    </div>
  );
};

export default HeaderUtils;
