import Image from "next/image";
import { FC } from "react";
import AppSearch from "../common/AppSearch";

const Header: FC = () => {
  return (
    <div className="px-40 py-10">
      {/* Main Segment */}
      <div className="flex">
        {/* Logo */}
        <div>
          <Image src="/images/logo.svg" alt="Electro Logo" width="178" height="35" />
        </div>

        {/* Search Bar */}
        <AppSearch />

        {/* Util Icons */}

        {/* Login/Register Button */}
      </div>

      {/* Nav Segment */}
      <div>
        {/* Category */}
        <div></div>

        {/* Navigation */}
        <nav></nav>
      </div>
    </div>
  );
};

export default Header;
