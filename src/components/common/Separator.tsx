import classNames from "@/utils/classNames";
import { FC } from "react";

interface Props {
  text?: string;
  color?: string;
  height?: string;
}

const Separator: FC<Props> = ({ text, color, height }) => {
  return (
    <div
      className={classNames("relative flex items-center justify-center")}
      style={{ height: height }}
    >
      {text && <span className="text-center px-2 bg-white text-dark-500 relative text-sm z-[1]">{text}</span>}

      <hr
        className={classNames(
          "absolute right-0 left-0 top-1/2 -translate-y-1/2",
          color && `bg-[${color}]`
        )}
      />
    </div>
  );
};

export default Separator;
