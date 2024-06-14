import { FC, FormEventHandler, useCallback, useEffect, useState } from "react";
import Modal from "../common/Modal";
import Card from "../common/Card";
import Input from "../common/Input";
import Button from "../common/Button";
import Separator from "../common/Separator";

import RegisterModal from "./RegisterModal";
import { postLoginInfo } from "@/api";
import { toast } from "react-toastify";
import { LS_ACCESS_TOKEN, LS_REFRESH_TOKEN } from "@/constants/localStorage";
import { saveToLocalStorage } from "@/utils/localStorage";
import { useDispatch } from "react-redux";
import { authActions } from "@/store/auth";

type LoginResT = {
  access: string;
  refresh: string;
};

interface Props extends ModalProps {}

const LoginModal: FC<Props> = ({ open, setOpen }) => {
  const dispatch = useDispatch();

  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const [postLoginRes, setPostLoginRes] = useState<ApiCallStatus<LoginResT>>({
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
    const usernameInput = target.username as HTMLInputElement;
    const passwordInput = target.password as HTMLInputElement;

    if (usernameInput && passwordInput) {
      setPostLoginRes((p) => ({
        ...p,
        isLoading: true,
      }));

      try {
        const res = await postLoginInfo({
          username: usernameInput.value,
          password: passwordInput.value,
        });
        setPostLoginRes({
          data: res,
          error: null,
          isLoading: false,
        });
      } catch (_error) {
        const error = _error as Error;
        setPostLoginRes({
          data: null,
          error: error.message || "An error was occurred.",
          isLoading: false,
        });
      }
    }
  };

  useEffect(() => {
    if (postLoginRes.data && !postLoginRes.isLoading) {
      toast("Logged in successfully! ", { type: "success" });
      console.log(postLoginRes.data);

      saveToLocalStorage(LS_ACCESS_TOKEN, postLoginRes.data.access);
      saveToLocalStorage(LS_REFRESH_TOKEN, postLoginRes.data.refresh);

      dispatch(authActions.setAuth(true));
      handleClose();
    } else if (postLoginRes.error) {
      toast("Couldn't login: " + postLoginRes.error, { type: "error" });
    }

    return () => {
      if (postLoginRes.data || postLoginRes.error || postLoginRes.isLoading)
        setPostLoginRes({
          data: null,
          error: null,
          isLoading: false,
        });
    };
  }, [dispatch, postLoginRes, handleClose]);

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Card className="flex flex-col min-w-[25rem] p-5">
          <b className="text-3xl">Welcome 👋</b>
          <span className="text-gray-500 mb-8">Please login here</span>

          <form onSubmit={handleFormSubmit}>
            <div className="space-y-4">
              <Input
                name="username"
                label="Username"
                className="border-primary-500"
                placeholder="example@gmail.com"
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
                <input type="checkbox" />
                Remember Me
              </label>

              <span className="text-sm">Forgot Password?</span>
            </div>

            <div className="flex flex-col space-y-2">
              <Button type="submit">{postLoginRes.isLoading ? "Submitting..." : "Login"}</Button>
              <Button
                variant="outlined"
                onClick={() => {
                  setShowRegisterModal(true);
                  setOpen(false);
                }}
              >
                Register
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

      <RegisterModal open={showRegisterModal} setOpen={setShowRegisterModal} />
    </>
  );
};

export default LoginModal;
