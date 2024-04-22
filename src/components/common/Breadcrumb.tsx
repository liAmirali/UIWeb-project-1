import { FC } from "react";
import RightChevronIcon from "@/public/icons/huge-icon/arrows/outline/direction-right 01.svg";

const Breadcrumb: FC = () => {
  const pages = ["Home", "Shop", "Apple iPhone 14 Pro"];

  return (
    <div className="flex gap-x-2 item-center">
      {pages.map((p, i) => (
        <>
          <span key={i}>{p}</span>

          {i < pages.length - 1 && (
            <span>
              <RightChevronIcon />
            </span>
          )}
        </>
      ))}
    </div>
  );
};

export default Breadcrumb;
