import Image from "next/image";
import { FC } from "react";

import FacebookIcon from "@/public/icons/huge-icon/social/solid/facebook.svg";
import InstagramIcon from "@/public/icons/huge-icon/social/solid/instagram.svg";
import TwitterIcon from "@/public/icons/huge-icon/social/solid/twitter.svg";

const FooterBottom: FC = () => {
  return (
    <div className="flex flex-row items-center justify-center relative py-6 border-t border-t-[#A5A9AC] border-opacity-20">
      {/* Cards */}
      <div className="flex flex-row items-start justify-start gap-4 absolute left-0">
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
