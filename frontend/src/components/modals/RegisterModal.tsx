import { FC, FormEventHandler, useCallback, useEffect, useState } from "react";
import Modal from "../common/Modal";
import Card from "../common/Card";
import Input from "../common/Input";
import Button from "../common/Button";
import Separator from "../common/Separator";
import OTPModal from "./OTPModal";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { postSingUpInfo } from "@/api";

type RegisterResT = {
  //
};

interface Props extends ModalProps {}

const RegisterModal: FC<Props> = ({ open, setOpen }) => {
  const dispatch = useDispatch();

  const [showOTPModal, setShowOTPModal] = useState(false);

  const [postRegisterRes, setPostRegisterRes] = useState<ApiCallStatus<RegisterResT>>({
    data: null,
    error: null,
    isLoading: false,
  });

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const firstNameInput = target.firstName as HTMLInputElement;
    const lastNameInput = target.lastName as HTMLInputElement;
    const emailInput = target.email as HTMLInputElement;
    const usernameInput = target.username as HTMLInputElement;
    const passwordInput = target.password as HTMLInputElement;

    if (usernameInput && passwordInput) {
      setPostRegisterRes((p) => ({
        ...p,
        isLoading: true,
      }));

      try {
        const res = await postSingUpInfo({
          firstName: firstNameInput.value,
          lastName: lastNameInput.value,
          email: emailInput.value,
          username: usernameInput.value,
          password: passwordInput.value,
        });
        setPostRegisterRes({
          data: res,
          error: null,
          isLoading: false,
        });
      } catch (_error) {
        const error = _error as Error;
        setPostRegisterRes({
          data: null,
          error: error.message || "An error was occurred.",
          isLoading: false,
        });
      }
    }
  };

  useEffect(() => {
    if (postRegisterRes.data && !postRegisterRes.isLoading) {
      toast("Registered successfully! ", { type: "success" });
      console.log(postRegisterRes.data);
      handleClose();
      setShowOTPModal(true);
    } else if (postRegisterRes.error) {
      toast("Couldn't register: " + postRegisterRes.error, { type: "error" });
    }

    return () => {
      if (postRegisterRes.data || postRegisterRes.error || postRegisterRes.isLoading)
        setPostRegisterRes({
          data: null,
          error: null,
          isLoading: false,
        });
    };
  }, [dispatch, postRegisterRes, handleClose]);

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Card className="flex flex-col min-w-[25rem] p-5">
          <b className="text-3xl">Create New Account</b>
          <span className="text-gray-500 mb-8">Please enter details</span>

          <form onSubmit={handleFormSubmit}>
            <div className="space-y-4">
              <Input
                name="firstName"
                label="First Name"
                className="border-primary-500"
                placeholder="Amirali"
                autoComplete="off"
              />

              <Input
                name="lastName"
                label="Last Name"
                className="border-primary-500"
                placeholder="Lotfi"
                autoComplete="off"
              />

              <Input
                name="email"
                label="Email Address"
                type="email"
                className="border-primary-500"
                placeholder="example@gmail.com"
                autoComplete="off"
                required
              />

              <Input
                name="username"
                label="Username"
                className="border-primary-500"
                placeholder="liamirali"
                autoComplete="off"
                required
              />

              <Input
                name="password"
                label="Password"
                className="border-primary-500"
                type="password"
                placeholder="••••••••••"
                autoComplete="off"
                required
              />
            </div>

            <div className="flex justify-between mt-2 mb-8">
              <label className="flex items-center gap-x-3 text-sm">
                <input type="checkbox" />I agree to the Terms & Conditions
              </label>
            </div>

            <div className="flex flex-col space-y-2">
              <Button type="submit">
                {postRegisterRes.isLoading ? "Submitting..." : "Register"}
              </Button>
            </div>
          </form>

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

      <OTPModal open={showOTPModal} setOpen={setShowOTPModal} />
    </>
  );
};

export default RegisterModal;
