import { FC } from "react";

import Logo from "@/public/images/logo.svg";

import CallIcon from "@/public/icons/huge-icon/communication/outline/calling.svg";
import GmailIcon from "@/public/icons/huge-icon/social/outline/gmail.svg";
import LocationIcon from "@/public/icons/huge-icon/device/outline/location.svg";

const FooterContactUs: FC = () => {
  return (
    <div className="h-[13.875rem] flex flex-col items-start justify-start gap-[1.875rem]">
      <div className="w-[200px]">
        <Logo className="text-white" />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[1rem]">
        <div className="flex flex-row items-start justify-start gap-[0.625rem] z-[1]">
          <div className="h-[1.688rem] flex flex-col items-start justify-start pt-[0.188rem] px-[0rem] pb-[0rem] box-border">
            <CallIcon />
          </div>
          <div className="relative leading-[1.875rem] inline-block min-w-[6.563rem]">
            (316) 555-0116
          </div>
        </div>
        <div className="w-[13.438rem] flex flex-row items-start justify-start gap-[0.625rem] z-[1]">
          <div className="flex flex-col items-start justify-start pt-[0.188rem] px-[0rem] pb-[0rem]">
            <div className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0">
              <div className="absolute h-[81.25%] w-[89.58%] top-[9.58%] right-[5%] bottom-[9.17%] left-[5.42%] rounded box-border border-[1.5px] border-solid border-white" />
              <GmailIcon />
            </div>
          </div>
          <div className="flex-1 relative leading-[1.875rem] whitespace-nowrap">
            electro@example.com
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start gap-[0.625rem] z-[1]">
          <LocationIcon />
          <div className="relative leading-[1.875rem]">
            <p className="m-0">{`4140 Parker Rd. Allentown, `}</p>
            <p className="m-0">New Mexico 31134</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContactUs;
