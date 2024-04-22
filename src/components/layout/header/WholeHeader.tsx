"use client";

import { FC } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import classNames from "@/utils/classNames";
import { useLocation } from "react-router-dom";

const WholeHeader: FC = () => {
  const { pathname } = useLocation();

  return (
    <div className={classNames(pathname === "/" && "bg-gray-500 bg-opacity-10")}>
      <Header />
      <Navigation />
    </div>
  );
};

export default WholeHeader;
