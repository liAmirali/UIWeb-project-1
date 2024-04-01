import Image from "next/image";
import { FC } from "react";

import HeadphoneDude from "@/public/images/bg/headphone-dude.png";

const MainHero: FC = () => {
  return (
    <div className="bg-objects-group bg-contain w-full h-screen relative bg-[#A5A9AC] bg-opacity-10">
      <div className="relative bg-yellow-50">
        {/* White background circle */}
        <div className="absolute size-[30vw] bg-white rounded-full top-20 right-24"></div>

        {/* Headphone guy */}
        <div className="absolute right-16 top-0">
          <Image src={HeadphoneDude} className="w-[30vw]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainHero;
