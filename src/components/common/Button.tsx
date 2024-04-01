import classNames from "@/utils/classNames";
import Image from "next/image";
import { FC, PropsWithChildren, Suspense } from "react";
import DynamicSvg from "../icons/DynamicSvg";

interface Props extends PropsWithChildren {
  size?: "xl" | "lg" | "md" | "sm";
  style?: "primary" | "white" | "gray";
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
        "cursor-pointer rounded-lg text-white flex gap-x-3",
        style === "primary"
          ? "bg-primary-500 hover:bg-primary-400 [border:none]"
          : style === "gray"
          ? "bg-gray-500 bg-opacity-10"
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
      {leftIconUrl && (
        <Suspense fallback={<>Loading...</>}>
          <DynamicSvg path={leftIconUrl} />
        </Suspense>
      )}

      <div className={classNames("flex", style === "primary" ? "text-white" : "text-dark-500")}>
        {children}
      </div>

      {rightIconUrl && (
        <Suspense fallback={<>Loading...</>}>
          <DynamicSvg path={rightIconUrl} />
        </Suspense>
      )}
    </button>
  );
};

export default Button;
