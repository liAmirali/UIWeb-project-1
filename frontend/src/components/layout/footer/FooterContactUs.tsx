import { FC } from "react";

import CallIcon from "@/public/icons/huge-icon/communication/outline/calling.svg?react";
import GmailIcon from "@/public/icons/huge-icon/social/outline/gmail.svg?react";
import LocationIcon from "@/public/icons/huge-icon/device/outline/location.svg?react";

const FooterContactUs: FC = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-8">
      <div>
        <img src={"@/images/logo/logo-white.png"} alt="" />
      </div>

      <div className="flex-1 flex flex-col items-start justify-start gap-4">
        <div className="flex gap-x-3">
          <CallIcon />

          <p>(316) 555-0116</p>
        </div>
        <div className="flex gap-x-3">
          <GmailIcon />

          <p>electro@example.com</p>
        </div>
        <div className="flex gap-x-3">
          <LocationIcon />

          <p>
            4140 Parker Rd. Allentown,
            <br />
            New Mexico 31134
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterContactUs;
