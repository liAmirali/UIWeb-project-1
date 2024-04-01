import { FC } from "react";
import Button from "../common/Button";
import classNames from "@/utils/classNames";
import Image from "next/image";

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
        <div className="bg-primary-500 bg-opacity-10 text-primary-500 p-2 uppercase rounded-md text-xs">
          {badge}
        </div>
      )}
      <h4 className="font-bold text-3xl">{heading}</h4>
      {description && <p>{description}</p>}

      {link && (
        <Button rightIconUrl="/icons/huge-icon/arrows/solid/arrow-right.svg" className="mt-6">
          Shop Now
        </Button>
      )}

      {image && (
        <div className="absolute right-0 bottom-0">
          <Image src={image} alt={heading} width="235" height="235" />
        </div>
      )}
    </div>
  );
};

export default OnSaleItem;
