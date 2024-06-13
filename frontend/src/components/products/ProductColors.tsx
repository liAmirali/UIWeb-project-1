import classNames from "@/utils/classNames";
import { FC } from "react";

interface Props {
  colors: ColorT[];
  selectedColor: ColorT;
  onColorChange: (color: ColorT) => void;
}

const ProductColors: FC<Props> = ({ colors, selectedColor, onColorChange }) => {
  return (
    <div>
      <b>Color</b>

      <div className="flex gap-x-2">
        {colors.map((c) => (
          <span
            key={c.id}
            onClick={() => onColorChange(c)}
            className={classNames(
              `rounded-lg size-9`,
              selectedColor.hex_code === c.hex_code && "border-2 border-primary-600"
            )}
            style={{ backgroundColor: c.hex_code }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProductColors;
