import { FC } from "react";

import Button from "../common/Button";
import { Link } from "react-router-dom";

const MainHero: FC = () => {
  return (
    <div className="relative bg-objects-group bg-contain w-full h-[calc(100vh-166px)] bg-gray-500 bg-opacity-10">
      <div className="relative h-full">
        {/* White background circle */}
        <div className="absolute size-[30vw] bg-white rounded-full top-20 right-24"></div>

        {/* Headphone guy */}
        <div className="absolute right-16 top-0 bottom-0 overflow-hidden">
          <img src={"/images/bg/headphone-dude.png"} className="h-full" alt="" />
        </div>
      </div>

      <div className="absolute top-1/2 left-40 -translate-y-1/2">
        <h2 className="text-7xl font-bold text-dark-500 leading-snug">
          Great Sound
          <br />
          With Solo
          <br />
          Headphone
        </h2>

        <p className="text-dark-500 mt-4 mb-8 leading-normal">
          It is a long established fact that a reader will be
          <br /> distracted by the readable content of a page when
          <br /> looking at its layout. The point of using Lorem Ipsum.
        </p>

        <Link to="/product">
          <Button rightIconUrl="/icons/huge-icon/arrows/solid/arrow-right-white.svg">Shop Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default MainHero;
