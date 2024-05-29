import classNames from "@/utils/classNames";
import { FC, InputHTMLAttributes, Ref } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  iconUrl?: string;
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
  inputRef?: Ref<HTMLInputElement>;
}

const Input: FC<Props> = ({
  iconUrl,
  label,
  labelClassName,
  containerClassName,
  className,
  inputRef,
  ...inputProps
}) => {
  return (
    <div className={classNames("flex flex-col", containerClassName)}>
      {label && <label className={classNames("text-xs", labelClassName)}>{label}</label>}
      <input
        ref={inputRef}
        className={classNames("border outline-none rounded-lg py-3 px-4", className)}
        style={
          iconUrl
            ? {
                background: `url('${iconUrl}') no-repeat left`,
                backgroundPositionX: "1rem",
                backgroundSize: "1.5rem",
                paddingLeft: "3rem",
              }
            : undefined
        }
        {...inputProps}
      />
    </div>
  );
};

export default Input;
