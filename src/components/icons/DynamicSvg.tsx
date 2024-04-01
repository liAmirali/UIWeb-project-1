import dynamic from "next/dynamic";
import { ComponentProps, FC } from "react";

interface Props {
  path: string;
  svgProps?: ComponentProps<"svg">;
}

const DynamicSvg: FC<Props> = ({ path, svgProps }) => {
  const Svg = dynamic(() => import("../../../public" + path));

  return <Svg {...svgProps} />;
};

export default DynamicSvg;
