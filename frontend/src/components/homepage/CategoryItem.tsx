import { FC } from "react";

interface Props {
  image: string;
  title: string;
}

const CategoryItem: FC<Props> = ({ image, title }) => {
  return (
    <div className="text-center">
      <div className="size-40 flex items-center justify-center rounded-full bg-gray-500 bg-opacity-10 mb-5">
        <img src={image} alt={title} width="105" height="120" />
      </div>

      <b>{title}</b>
    </div>
  );
};

export default CategoryItem;
