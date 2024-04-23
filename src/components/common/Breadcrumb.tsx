import { FC, Fragment } from "react";
import RightChevronIcon from "@/public/icons/huge-icon/arrows/outline/direction-right 01.svg?react";

const Breadcrumb: FC = () => {
  const pages = ["Home", "Shop", "Apple iPhone 14 Pro"];

  return (
    <div className="flex gap-x-2 item-center">
      {pages.map((p, i) => (
        <Fragment key={i}>
          <span>{p}</span>

          {i < pages.length - 1 && (
            <span>
              <RightChevronIcon />
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
