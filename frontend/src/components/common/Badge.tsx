import classNames from "@/utils/classNames";
import { FC } from "react";

interface Props {
  text: string;
  color?: "primary" | "success" | "error";
}

const Badge: FC<Props> = ({ text, color = "primary" }) => {
  return (
    <div
      className={classNames(
        "bg-opacity-10 p-2 uppercase rounded-md text-xs flex items-center",
        color === "primary"
          ? "bg-primary-500 text-primary-500"
          : color === "success"
          ? "bg-green-500 text-green-500"
          : color === "error"
          ? "bg-red-500 text-red-500"
          : undefined
      )}
    >
      {text}
    </div>
  );
};

export default Badge;
