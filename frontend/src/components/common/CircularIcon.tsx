import classNames from "@/utils/classNames";
import { FC } from "react";

interface Props {
  color: "primary" | "error" | "success";
}

const CircularIcon: FC<Props> = ({ color }) => {
  const bgColor =
    color === "primary" ? "bg-primary-500" : color === "error" ? "bg-red-500" : "bg-green-500";

  return (
    <div className={classNames("p-4 bg-opacity-10 rounded-full", bgColor)}>
      <div className={classNames("p-4 bg-opacity-20 rounded-full", bgColor)}>
        <div className={classNames("p-6 rounded-full", bgColor)}>
           
        </div>
      </div>
    </div>
  );
};

export default CircularIcon;
