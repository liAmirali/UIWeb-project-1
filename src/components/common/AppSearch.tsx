import { FC } from "react";
import Input from "./Input";
import Button from "./Button";

const AppSearch: FC = () => {
  return (
    <div className="flex">
      {/* Category */}
      <div>
        <Button
          className="rounded-r-none"
          style="white"
          rightIconUrl="/icons/huge-icon/arrows/solid/direction-down 01.svg?react"
        >
          All
        </Button>
      </div>
      {/* Input */}

      <Input
        type="search"
        iconUrl={"/icons/huge-icon/interface/solid/search 02.svg"}
        placeholder="Search"
        className="rounded-l-none border-l-0 rounded-r-none border-r-0 h-full"
      />

      {/* Submit */}
      <div>
        <Button className="rounded-l-none">Search</Button>
      </div>
    </div>
  );
};

export default AppSearch;
