import { FC } from "react";
import Modal from "../common/Modal";
import Card from "../common/Card";
import Input from "../common/Input";
import Button from "../common/Button";
import Separator from "../common/Separator";

const RegisterModal: FC = () => {
  return (
    <Modal open={true} onClose={() => {}}>
      <Card className="flex flex-col min-w-[25rem] p-5">
        <b className="text-3xl">Create New Account</b>
        <span className="text-gray-500 mb-8">Please enter details</span>

        <div className="space-y-4">
          <Input
            label="Name"
            className="border-primary-500"
            placeholder="Amirali Lotfi"
            autoComplete="off"
          />

          <Input
            label="Email Address"
            type="email"
            className="border-primary-500"
            placeholder="example@gmail.com"
            autoComplete="off"
          />

          <Input
            label="Password"
            className="border-primary-500"
            type="password"
            placeholder="••••••••••"
            autoComplete="off"
          />
        </div>

        <div className="flex justify-between mt-2 mb-8">
          <label className="flex items-center gap-x-3 text-sm">
            <input type="checkbox" />I agree to the Terms & Conditions
          </label>
        </div>

        <div className="flex flex-col space-y-2">
          <Button>Register</Button>
        </div>

        <Separator text="Or Login With" height="4rem" />

        <div className="flex flex-col gap-y-2">
          <Button leftIconUrl="/icons/google-logo.svg" style="white">
            Login with Google
          </Button>
          <Button leftIconUrl="/icons/apple-logo.svg" style="white">
            Login with Apple
          </Button>
        </div>
      </Card>
    </Modal>
  );
};

export default RegisterModal;
