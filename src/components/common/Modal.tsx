"use client";

import classNames from "@/utils/classNames";
import { FC, PropsWithChildren, useEffect } from "react";

interface Props extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  className?: string;
}

const Modal: FC<Props> = ({ children, open, className }) => {
  useEffect(() => {
    if (open) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }

    return () => {
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    };
  }, [open]);

  if (!open) return <></>;

  return (
    <div
      className={classNames(
        "fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Modal;
