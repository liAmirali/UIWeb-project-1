import classNames from "@/utils/classNames";
import { FC, InputHTMLAttributes, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  iconUrl?: string;
  className?: string;
}

const Input: FC<Props> = ({ iconUrl, className, ...inputProps }) => {
  return (
    <input
      className={classNames("border outline-none rounded-lg py-3 px-4", className)}
      style={{
        background: iconUrl && `url('${iconUrl}') no-repeat left`,
        backgroundPositionX: "1rem",
        backgroundSize: "1.5rem",
        paddingLeft: iconUrl && "3rem",
      }}
      {...inputProps}
    />
  );
};

export default Input;
