import { FC } from "react";

import FooterBottom from "./FooterBottom";
import FooterContactUs from "./FooterContactUs";
import FooterPages from "./FooterPages";
import FooterSubscribe from "./FooterSubscribe";

const Footer: FC = () => {
  return (
    <footer className="bg-primary-500 flex flex-col px-40 py-10 text-white">
      <div className="flex justify-between w-full flex-wrap">
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
