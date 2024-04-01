import { FC } from "react";
import Input from "./Input";
import Button from "./Button";

const AppSearch: FC = () => {
  return (
    <div>
      {/* Category */}
      <div></div>
      {/* Input */}
      <div>
        <Button
          className="rounded-r-none"
          style="white"
          leftIconUrl="/icons/huge-icon/arrows/solid/direction-down 01.svg"
        >
          All
        </Button>

        <Input
          type="search"
          iconUrl={"/icons/huge-icon/interface/solid/search 02.svg"}
          placeholder="Search"
          className="rounded-l-none border-l-0"
        />
        <Button className="rounded-l-none">Search</Button>
      </div>
      {/* Submit */}
      <div></div>
    </div>
  );
};

export default AppSearch;
