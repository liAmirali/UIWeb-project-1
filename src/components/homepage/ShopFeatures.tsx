import { FC } from "react";

import FastShippingIcon from "@/public/icons/huge-icon/shipping and delivery/outline/fast delivery.svg";
import DollarCoinIcon from "@/public/icons/huge-icon/finance and payment/outline/coin-dollar.svg";
import HeadphoneMicIcon from "@/public/icons/huge-icon/multimedia and audio/outline/headphones-1.svg";
import CardIcon from "@/public/icons/huge-icon/ecommerce/outline/card.svg";

const ShopFeatures: FC = () => {
  return (
    <div className="flex justify-between px-40 mb-10">
      <div className="flex flex-col gap-y-2">
        <FastShippingIcon />
        <b>Free Shipping</b>
        <span className="text-sm">Free shipping for order above $150</span>
      </div>
      <div className="flex flex-col gap-y-2">
        <DollarCoinIcon />
        <b>Money Guarantee</b>
        <span className="text-sm">Within 30 days for an exchange</span>
      </div>
      <div className="flex flex-col gap-y-2">
        <HeadphoneMicIcon />
        <b>Online Support</b>
        <span className="text-sm">F24 hours a day, 7 days a week</span>
      </div>
      <div className="flex flex-col gap-y-2">
        <CardIcon />
        <b>Flexible Payment</b>
        <span className="text-sm">Pay with multiple credit cards</span>
      </div>
    </div>
  );
};

export default ShopFeatures;
