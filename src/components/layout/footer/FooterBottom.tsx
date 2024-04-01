import Image from "next/image";
import { FC } from "react";

import FacebookIcon from "@/public/icons/huge-icon/social/solid/facebook.svg";
import InstagramIcon from "@/public/icons/huge-icon/social/solid/instagram.svg";
import TwitterIcon from "@/public/icons/huge-icon/social/solid/twitter.svg";

const FooterBottom: FC = () => {
  return (
    <div className="w-[71.25rem] flex flex-col items-start justify-start gap-[1rem] max-w-full text-center">
      <div className="self-stretch h-[0.063rem] relative bg-darkgray-500 z-[1]" />
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1050:flex-wrap">
        <div className="w-[44.875rem] flex flex-row items-start justify-start gap-[12.688rem] max-w-full mq450:gap-[12.688rem_3.188rem] mq750:flex-wrap mq750:gap-[12.688rem_6.313rem]">
          <div className="h-[1.5rem] flex flex-row items-start justify-start gap-[0.625rem] z-[1]">
            <Image
              width="36"
              height="24"
              className="relative"
              loading="lazy"
              alt=""
              src="/images/Payment Method/Visa-bg.png"
            />
            <Image
              width="36"
              height="24"
              className="relative"
              loading="lazy"
              alt=""
              src="/images/Payment Method/Mastercard-bg.png"
            />
            <Image
              width="36"
              height="24"
              className="relative"
              alt=""
              src="/images/Payment Method/GooglePay-bg.png"
            />
            <Image
              width="36"
              height="24"
              className="relative"
              alt=""
              src="/images/Payment Method/Amex-bg.png"
            />
            <Image
              width="36"
              height="24"
              className="relative"
              alt=""
              src="/images/Payment Method/PayPal-bg.png"
            />
          </div>
          <div className="flex-1 relative leading-[1.875rem] inline-block min-w-[12rem] z-[1]">{`© 2023 Electro All Rights are reserved`}</div>
        </div>
        <div className="h-[1.5rem] text-white flex flex-row items-start justify-start gap-[1.25rem] z-[1]">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
