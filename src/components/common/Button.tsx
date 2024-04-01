import classNames from "@/utils/classNames";
import Image from "next/image";
import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  size?: "xl" | "lg" | "md" | "sm";
  style?: "primary" | "white";
  className?: string;
  leftIconUrl?: string;
  rightIconUrl?: string;
}

const Button: FC<Props> = ({
  children,
  size = "md",
  style = "primary",
  leftIconUrl,
  rightIconUrl,
  className,
}) => {
  return (
    <button
      className={classNames(
        "cursor-pointer rounded-lg text-white",
        style === "primary"
          ? "bg-primary-500 hover:bg-primary-400 [border:none]"
          : "bg-white-500 border",
        size === "xl"
          ? "py-4 px-10 text-lg"
          : size === "lg"
          ? "py-3 px-8 text-lg"
          : size === "md"
          ? "py-3 px-6 text-medium"
          : size === "sm"
          ? "py-2 px-6 text-sm"
          : "",
        className
      )}
    >
      <div
        className={classNames("flex", style === "primary" ? "text-white" : "text-dark-500")}
        style={{
          ...(leftIconUrl
            ? {
                backgroundImage: `url('${leftIconUrl}')`,
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "left",
                paddingLeft: "24px",
              }
            : rightIconUrl
            ? {
                backgroundImage: `url('${rightIconUrl}')`,
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "24px",
                paddingRight: "24px",
              }
            : undefined),
        }}
      >
        {children}
      </div>
    </button>
  );
};

export default Button;
