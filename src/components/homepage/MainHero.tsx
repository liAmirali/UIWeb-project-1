import Image from "next/image";
import { FC } from "react";

import HeadphoneDude from "@/public/images/bg/headphone-dude.png";
import Button from "../common/Button";

const MainHero: FC = () => {
  return (
    <div className="bg-objects-group bg-contain w-full h-screen relative bg-gray-500 bg-opacity-10">
      <div className="relative bg-yellow-50">
        {/* White background circle */}
        <div className="absolute size-[30vw] bg-white rounded-full top-20 right-24"></div>

        {/* Headphone guy */}
        <div className="absolute right-16 top-0">
          <Image src={HeadphoneDude} className="w-[30vw]" alt="" />
        </div>
      </div>

      <div>
        <h2 className="text-7xl font-bold text-dark-500 leading-snug">
          Great Sound
          <br />
          With Solo
          <br />
          Headphone
        </h2>
        <p className="text-dark-500">
          It is a long established fact that a reader will be
          <br /> distracted by the readable content of a page when
          <br /> looking at its layout. The point of using Lorem Ipsum.
        </p>

        <Button rightIconUrl="/icons/huge-icon/arrows/solid/arrow-right.svg">Shop Now</Button>
      </div>
    </div>
  );
};

export default MainHero;
