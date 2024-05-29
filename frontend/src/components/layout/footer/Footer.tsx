import { FC } from "react";

import FooterBottom from "./FooterBottom";
import FooterContactUs from "./FooterContactUs";
import FooterPages from "./FooterPages";
import FooterSubscribe from "./FooterSubscribe";

const header1 = "Information";
const pages1 = [
  {
    label: "My Account",
  },
  {
    label: "Login",
  },
  {
    label: "My Cart",
  },
  {
    label: "My Whishlist",
  },
  {
    label: "Checkout",
  },
];

const header2 = "Service";
const pages2 = [
  {
    label: "About Us",
  },
  {
    label: "Careers",
  },
  {
    label: "Delivery Information",
  },
  {
    label: "Privacy Policy",
  },
  {
    label: "Terms & Conditions",
  },
];

const Footer: FC = () => {
  return (
    <footer className="bg-primary-500 flex flex-col px-40 text-white">
      <div className="flex justify-between w-full flex-wrap pt-10 pb-20">
        <FooterContactUs />

        <FooterPages header={header1} pages={pages1} />

        <FooterPages header={header2} pages={pages2} />

        <FooterSubscribe />
      </div>

      <FooterBottom />
    </footer>
  );
};

export default Footer;
