import { FC } from "react";

import RightArrowIcon from "@/public/icons/huge-icon/arrows/outline/arrow-right.svg";
import GmailIcon from "@/public/icons/huge-icon/social/outline/gmail.svg";

const FooterSubscribe: FC = () => {
  return (
    <div className="w-[20.125rem] flex flex-col items-start justify-start gap-[0.625rem] max-w-full z-[1]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.625rem]">
        <b className="relative leading-[1.875rem] inline-block min-w-[5.188rem]">Subscribe</b>
        <div className="self-stretch relative leading-[1.875rem]">
          Enter your email below to be the first to know about new collections.
        </div>
      </div>
      <div className="w-full h-14 rounded-lg bg-[#A5A9AC] bg-opacity-5 overflow-hidden shrink-0 flex flex-col items-start justify-start py-[0.813rem] px-[1rem] box-border">
        <div className="flex w-full h-full items-center justify-start gap-2">
          <GmailIcon />
          <span>Your Email</span>
          <div className="ml-auto">
            <RightArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSubscribe;
