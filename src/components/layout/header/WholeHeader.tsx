"use client";

import { FC } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import classNames from "@/utils/classNames";
import { usePathname } from "next/navigation";

const WholeHeader: FC = () => {
  const pathname = usePathname();

  return (
    <div className={classNames(pathname === "/" && "bg-gray-500 bg-opacity-10")}>
      <Header />
      <Navigation />
    </div>
  );
};

export default WholeHeader;
