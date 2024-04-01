import AppSearch from "@/components/common/AppSearch";
import Image from "next/image";
import { FC } from "react";
import HeaderUtils from "./HeaderUtils";
import Button from "@/components/common/Button";

const Header: FC = () => {
  return (
    <div className="px-40 py-10">
      {/* Main Segment */}
      <div className="flex justify-between">
        {/* Logo */}
        <div>
          <Image src="/images/logo.svg" alt="Electro Logo" width="178" height="35" />
        </div>

        {/* Search Bar */}
        <AppSearch />

        <div className="flex gap-5">
          {/* Util Icons */}
          <HeaderUtils />

          {/* Login/Register Button */}
          <Button>Login</Button>
        </div>
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
