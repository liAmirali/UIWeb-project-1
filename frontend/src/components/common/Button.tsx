import classNames from "@/utils/classNames";
import { FC, PropsWithChildren, Suspense } from "react";

interface Props extends PropsWithChildren {
  size?: "xl" | "lg" | "md" | "sm";
  type?: "button" | "reset" | "submit";
  style?: "primary" | "white" | "gray";
  variant?: "contained" | "outlined";
  className?: string;
  leftIconUrl?: string;
  rightIconUrl?: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({
  children,
  size = "md",
  style = "primary",
  variant = "contained",
  type,
  leftIconUrl,
  rightIconUrl,
  className,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        "cursor-pointer rounded-lg text-white flex gap-x-3 justify-center transition-all duration-300",
        style === "primary" && variant === "contained"
          ? "bg-primary-500 hover:bg-primary-400 [border:none]"
          : style === "primary" && variant === "outlined"
          ? "bg-white hover:bg-gray-100 border border-primary-500"
          : style === "gray"
          ? "bg-gray-500 bg-opacity-10"
          : "bg-white-500 hover:bg-gray-100 border",
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
          <img src={leftIconUrl} />
        </Suspense>
      )}

      <div
        className={classNames(
          "flex text-center",
          style === "primary" && variant === "contained"
            ? "text-white"
            : style === "primary" && variant === "outlined"
            ? "text-primary-500"
            : "text-dark-500"
        )}
      >
        {children}
      </div>

      {rightIconUrl && (
        <Suspense fallback={<>Loading...</>}>
          <img src={rightIconUrl} />
        </Suspense>
      )}
    </button>
  );
};

export default Button;
