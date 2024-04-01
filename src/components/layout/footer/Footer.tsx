import { FC } from "react";

import FooterBottom from "./FooterBottom";
import FooterContactUs from "./FooterContactUs";
import FooterPages from "./FooterPages";
import FooterSubscribe from "./FooterSubscribe";

const Footer: FC = () => {
  return (
    <footer className="bg-primary-500 self-stretch flex flex-col items-center justify-start pt-[1.875rem] px-[1.25rem] pb-[1rem] box-border relative gap-[4rem] max-w-full text-left text-[1rem] text-white font-body-1-regular lg:gap-[2rem_4rem] mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border mq750:gap-[1rem_4rem]">
      <div className="w-[71.25rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1050:flex-wrap mq1050:justify-center">
        <FooterContactUs />

        <FooterPages />

        <FooterPages />

        <FooterSubscribe />
      </div>

      <FooterBottom />
    </footer>
  );
};

export default Footer;
