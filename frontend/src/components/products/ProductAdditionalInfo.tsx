import { FC } from "react";

const ProductAdditionalInfo: FC = () => {
  const specs = [
    {
      label: "Brand",
      value: "Apple",
    },
    {
      label: "Item Height",
      value: "65 CM",
    },
    {
      label: "Item Width",
      value: "31.4 CM",
    },
    {
      label: "Screen Size",
      value: "6.5 Inch",
    },
    {
      label: "Model Number",
      value: "MF841HN/A",
    },
    {
      label: "RAM Size",
      value: "6 GB",
    },
    {
      label: "Operating System",
      value: "ios 17",
    },
  ];

  return (
    <div className="flex flex-col gap-y-2 justify-center">
      {specs.map((s, i) => (
        <div key={i}>
          <span className="inline-block font-bold min-w-56">{s.label}</span>
          <span className="inline-block text-sm font-light">{s.value}</span>
        </div>
      ))}
    </div>
  );
};

export default ProductAdditionalInfo;
