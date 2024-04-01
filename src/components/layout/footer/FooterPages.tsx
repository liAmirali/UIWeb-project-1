import { FC } from "react";

const FooterPages: FC = () => {
  return (
    <div className="w-[6.25rem] flex flex-col items-start justify-start gap-[0.625rem] z-[1]">
      <b className="self-stretch relative leading-[1.875rem]">Information</b>
      <div className="w-[6rem] flex flex-col items-start justify-start gap-[0.625rem]">
        <div className="self-stretch relative leading-[1.875rem]">My Account</div>
        <div className="w-[2.875rem] relative leading-[1.875rem] inline-block">Login</div>
        <div className="relative leading-[1.875rem] inline-block min-w-[3.938rem]">My Cart</div>
        <div className="w-[5.75rem] relative leading-[1.875rem] inline-block">My Wishlist</div>
        <div className="w-[4.875rem] relative leading-[1.875rem] inline-block">Checkout</div>
      </div>
    </div>
  );
};

export default FooterPages;
