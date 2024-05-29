import { FC } from "react";
import Modal from "../common/Modal";
import Card from "../common/Card";
import Button from "../common/Button";
import CircularIcon from "../common/CircularIcon";

interface Props extends ModalProps {}

const SuccessfulLoginModal: FC<Props> = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={handleClose} noCloseButton>
      <Card className="flex flex-col items-center max-w-[27rem] p-5 space-y-6">
        <CircularIcon color="primary" />

        <b className="text-2xl text-center px-8">Password Changed Successfully</b>
        <span className="text-gray-500 mb-8 text-center px-8">
          Your password has been updated successfully
        </span>

        <div className="flex flex-col mt-8 self-stretch">
          <Button
            onClick={() => {
              handleClose();
            }}
          >
            Back to Login
          </Button>
        </div>
      </Card>
    </Modal>
  );
};

export default SuccessfulLoginModal;
