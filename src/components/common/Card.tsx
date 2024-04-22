import classNames from "@/utils/classNames";
import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

const Card: FC<Props> = ({ children, className }) => {
  return <div className={classNames("p-4 bg-white shadow-lg rounded-xl", className)}>{children}</div>;
};

export default Card;
