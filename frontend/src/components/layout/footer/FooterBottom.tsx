import { FC } from "react";

import FacebookIcon from "@/public/icons/huge-icon/social/solid/facebook.svg?react";
import InstagramIcon from "@/public/icons/huge-icon/social/solid/instagram.svg?react";
import TwitterIcon from "@/public/icons/huge-icon/social/solid/twitter.svg?react";

const FooterBottom: FC = () => {
  return (
    <div className="flex flex-row items-center justify-center relative py-6 border-t border-t-[#A5A9AC] border-opacity-20">
      {/* Cards */}
      <div className="flex flex-row items-start justify-start gap-4 absolute left-0">
        <img
          width="36"
          height="24"
          className="relative"
          loading="lazy"
          alt=""
          src="/images/Payment Method/Visa-bg.png"
        />
        <img
          width="36"
          height="24"
          className="relative"
          loading="lazy"
          alt=""
          src="/images/Payment Method/Mastercard-bg.png"
        />
        <img
          width="36"
          height="24"
          className="relative"
          alt=""
          src="/images/Payment Method/GooglePay-bg.png"
        />
        <img
          width="36"
          height="24"
          className="relative"
          alt=""
          src="/images/Payment Method/Amex-bg.png"
        />
        <img
          width="36"
          height="24"
          className="relative"
          alt=""
          src="/images/Payment Method/PayPal-bg.png"
        />
      </div>

      {/* CopyRight */}
      <div className="relative leading-[1.875rem] inline-block min-w-[12rem] z-[1]">{`© 2023 Electro All Rights are reserved`}</div>

      {/* Social Media */}
      <div className="text-white flex flex-row items-start justify-start gap-4 absolute right-0">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
    </div>
  );
};

export default FooterBottom;
