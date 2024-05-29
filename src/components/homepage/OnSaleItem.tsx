import { FC } from "react";
import Button from "../common/Button";
import classNames from "@/utils/classNames";
import Badge from "../common/Badge";

interface Props {
  heading: string;
  badge?: string;
  description?: string;
  link?: string;
  image?: string;
  className?: string;
}

const OnSaleItem: FC<Props> = ({ badge, heading, description, link, image, className }) => {
  return (
    <div
      className={classNames(
        "flex flex-col gap-y-3 items-start p-8 bg-gray-500 bg-opacity-10 relative",
        className
      )}
    >
      {badge && (
        <Badge text="50% OFF" />
      )}
      <h4 className="font-bold text-3xl">{heading}</h4>
      {description && <p>{description}</p>}

      {link && (
        <Button rightIconUrl="/icons/huge-icon/arrows/solid/arrow-right-white.svg" className="mt-6">
          Shop Now
        </Button>
      )}

      {image && (
        <div className="absolute right-0 bottom-0">
          <img src={image} alt={heading} width="235" height="235" />
        </div>
      )}
    </div>
  );
};

export default OnSaleItem;
