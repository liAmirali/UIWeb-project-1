import { ChangeEvent, FC, useRef, useState } from "react";
import Modal from "../common/Modal";
import Card from "../common/Card";
import Input from "../common/Input";
import Button from "../common/Button";
import classNames from "@/utils/classNames";

const OTP_LEN = 5;

const OTPModal: FC = () => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [inputValues, setInputValues] = useState<(number | "")[]>(
    Array.from(Array(OTP_LEN).keys()).map((i) => "")
  );

  console.log("inputRefs:", inputRefs);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;

    console.log("e:", e);
    console.log("i:", index);

    if (value.length > 0) {
      setInputValues((prevValue) => {
        const newValues = Array.from(prevValue);
        newValues[index] = +value;
        return newValues;
      });
      if (index === OTP_LEN - 1 && inputRefs.current[index]) {
        console.log("HERE!");
        inputRefs.current[index]!.blur();
      } else if (inputRefs.current[index + 1]) {
        // Move focus to the next input if a digit is entered
        inputRefs.current[index + 1]!.focus();
      }
    }
  };

  const handleInputFocus = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;

    console.log("HIII");

    if (value.length > 0) {
      setInputValues((prevValue) => {
        const newValues = Array.from(prevValue);
        newValues[index] = "";
        return newValues;
      });
    }
  };

  return (
    <Modal open={true} onClose={() => {}}>
      <Card className="flex flex-col max-w-[27rem] p-5">
        <b className="text-3xl">Enter OTP</b>
        <span className="text-gray-500 mb-8">
          We have share a code of your registered email address kristin.watson@example.com
        </span>

        <div className="flex justify-between">
          {inputValues.map((val, i) => (
            <Input
              key={i}
              value={val}
              containerClassName="size-[3.75rem]"
              className={classNames(
                "w-full h-full text-center text-2xl",
                val ? "border-primary-500" : undefined
              )}
              autoComplete="off"
              type="number"
              onChange={(e) => handleInputChange(e, i)}
              onFocus={(e) => handleInputFocus(e, i)}
              inputRef={(input) => {
                inputRefs.current[i] = input;
              }}
            />
          ))}
        </div>

        <div className="flex flex-col mt-8">
          <Button>Send OTP</Button>
        </div>
      </Card>
    </Modal>
  );
};

export default OTPModal;
