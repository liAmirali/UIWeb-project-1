"use client";

import classNames from "@/utils/classNames";
import { FC, KeyboardEvent, PropsWithChildren, useEffect } from "react";

import XIcon from "@/public/icons/huge-icon/interface/outline/remove.svg?react";

interface Props extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  className?: string;
  noCloseButton?: boolean;
}

const Modal: FC<Props> = ({ children, open, onClose, noCloseButton, className }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log("E:", e);
      if (e.key! === "Escape") onClose();
    };

    if (open) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
      // @ts-ignore
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.getElementsByTagName("body")[0].style.overflow = "auto";
      // @ts-ignore
      window.removeEventListener("keydown", handleKeyDown);
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
      <div className="flex flex-col">
        {!noCloseButton && (
          <div
            className="border size-10 rounded-lg bg-white flex items-center justify-center self-end mb-2 cursor-pointer hover:bg-neutral-100"
            onClick={onClose}
          >
            <XIcon color="black" />
          </div>
        )}

        {children}
      </div>
    </div>
  );
};

export default Modal;
