import AppSearch from "@/components/common/AppSearch";

import { FC, useState } from "react";
import HeaderUtils from "./HeaderUtils";
import Button from "@/components/common/Button";
import LoginModal from "@/components/modals/LoginModal";
import classNames from "@/utils/classNames";

const Header: FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className={classNames("px-40 py-10")}>
      {/* Main Segment */}
      <div className="flex justify-between">
        {/* Logo */}
        <div>
          <img src="/images/logo/logo.svg" alt="Electro Logo" width="178" height="35" />
        </div>

        {/* Search Bar */}
        <AppSearch />

        <div className="flex gap-5">
          {/* Util Icons */}
          <HeaderUtils />

          {/* Login/Register Button */}
          <Button onClick={() => setShowLoginModal(true)}>Login</Button>
        </div>
      </div>

      <LoginModal open={showLoginModal} setOpen={setShowLoginModal} />
    </div>
  );
};

export default Header;
