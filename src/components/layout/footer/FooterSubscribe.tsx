import { FC } from "react";

import RightArrowIcon from "@/public/icons/huge-icon/arrows/outline/arrow-right.svg";
import GmailIcon from "@/public/icons/huge-icon/social/outline/gmail.svg";

const FooterSubscribe: FC = () => {
  return (
    <div className="max-w-[21rem] flex flex-col items-start justify-start gap-2 z-[1]">
      <div className="flex flex-col items-start justify-start gap-4">
        <b>Subscribe</b>

        <div>Enter your email below to be the first to know about new collections.</div>
      </div>

      <div className="flex h-14 rounded-lg bg-gray-500 bg-opacity-5 p-4 gap-x-4">
        <div>
          <GmailIcon />
        </div>

        <input placeholder="Your Email" className="bg-transparent outline-none flex-1" />

        <div>
          <RightArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default FooterSubscribe;
