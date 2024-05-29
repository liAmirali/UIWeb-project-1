import classNames from "@/utils/classNames";
import { FC } from "react";
import Button from "./Button";

interface Props {
  bgImageUrl: string;
  heading: string;
  description?: string;
  buttonLabel: string;
  className?: string;
}

const CoverCallToAction: FC<Props> = ({
  bgImageUrl,
  heading,
  description,
  buttonLabel,
  className,
}) => {
  return (
    <div
      className={classNames(
        "flex flex-col items-start gap-y-8 text-light-500 py-32 px-40",
        className
      )}
      style={{
        backgroundImage: `url('${bgImageUrl}')`,
        backgroundSize: "cover",

        backgroundPosition: "center center",
      }}
    >
      <b className="text-5xl">{heading}</b>

      {description && <span className="text-lg">{description}</span>}

      <Button rightIconUrl="/icons/huge-icon/arrows/solid/arrow-right-white.svg">{buttonLabel}</Button>
    </div>
  );
};

export default CoverCallToAction;
