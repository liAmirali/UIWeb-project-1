import { FC } from "react";
import Modal from "../common/Modal";
import Card from "../common/Card";
import Input from "../common/Input";
import Button from "../common/Button";

const OTPModal: FC = () => {
  return (
    <Modal open={true} onClose={() => {}}>
      <Card className="flex flex-col max-w-[25rem] p-5">
        <b className="text-3xl">Enter OTP</b>
        <span className="text-gray-500 mb-8">
          We have share a code of your registered email address kristin.watson@example.com
        </span>

        <div className="flex gap-x-4">
          <Input
            containerClassName="flex-1"
            className="border-primary-500 min-w-0"
            autoComplete="off"
          />
          <Input
            containerClassName="flex-1"
            className="border-primary-500 min-w-0"
            autoComplete="off"
          />
          <Input
            containerClassName="flex-1"
            className="border-primary-500 min-w-0"
            autoComplete="off"
          />
          <Input
            containerClassName="flex-1"
            className="border-primary-500 min-w-0"
            autoComplete="off"
          />
          <Input
            containerClassName="flex-1"
            className="border-primary-500 min-w-0"
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col mt-8">
          <Button>Send OTP</Button>
        </div>
      </Card>
    </Modal>
  );
};

export default OTPModal;
