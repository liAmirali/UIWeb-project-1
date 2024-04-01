import { FC } from "react";

interface Props {
  header: string;
  pages: {
    label: string;
    href?: string;
  }[];
}

const FooterPages: FC<Props> = ({ header, pages }) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[0.625rem] z-[1]">
      <b className="self-stretch relative leading-[1.875rem]">{header}</b>
      <div className="flex flex-col items-start justify-start gap-[0.625rem]">
        {pages.map((item, index) => (
          <span key={index}>{item.label}</span>
        ))}
      </div>
    </div>
  );
};

export default FooterPages;
