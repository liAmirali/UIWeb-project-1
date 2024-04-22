import classNames from "@/utils/classNames";
import { FC } from "react";
import DynamicSvg from "../icons/DynamicSvg";

interface Props {
  color: "primary" | "error" | "success";
  iconUrl: string;
}

const CircularIcon: FC<Props> = ({ color, iconUrl }) => {
  const bgColor =
    color === "primary" ? "bg-primary-500" : color === "error" ? "bg-red-500" : "bg-green-500";

  return (
    <div className={classNames("p-4 bg-opacity-10 rounded-full", bgColor)}>
      <div className={classNames("p-4 bg-opacity-20 rounded-full", bgColor)}>
        <div className={classNames("p-6 rounded-full", bgColor)}>
          <DynamicSvg
            path={iconUrl}
            svgProps={{ className: "text-white", width: "24", height: "24" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CircularIcon;
