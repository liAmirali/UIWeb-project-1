import { FC } from "react";
import Modal from "../common/Modal";


import TrashIcon from "@/public/icons/huge-icon/interface/outline/trash.svg?react";
import Button from "../common/Button";

interface Props extends ModalProps {}

const CartList: FC<Props> = ({ open, setOpen }) => {
  const cart = [
    {
      title: "Apple iPhone 14 Pro",
      price: 1999,
      image: "/images/products/iphone/iphone-small.png",
      quantity: 1,
    },
    {
      title: "Asus ROG Delta S",
      price: 250,
      image: "/images/products/top-selling/image 25.png",
      quantity: 1,
    },
  ];

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Modal open={open} onClose={handleClose} className="!justify-end items-stretch" noCloseButton>
      <div className="flex-1 flex flex-col bg-white self-stretch float-right py-4 px-6 space-y-8 min-w-[25rem]">
        <span>
          You have <span className="font-bold">2 items</span> items in your cart
        </span>

        <div className="space-y-3 divide-y">
          {cart.map((item, i) => (
            <div key={i} className="flex gap-x-2 pt-3 relative">
              <div className="bg-gray-500 bg-opacity-5 p-2">
                <img src={item.image} alt={item.title} width="41" height="50" />
              </div>

              <div className="flex flex-col gap-y-1">
                <span className="text-dark-500">{item.title}</span>
                <span className="font-bold">${item.price.toFixed(2)}</span>
                <span>QTY: {item.quantity}</span>
              </div>

              <span className="text-red-500 absolute right-0 bottom-0">
                <TrashIcon />
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-6 !mt-auto">
          <div className="flex justify-between font-bold">
            <span>Subtotal</span>
            <span>$2249.00</span>
          </div>

          <div className="flex flex-col gap-y-2">
            <Button style="gray">View Cart</Button>
            <Button onClick={handleClose}>Checkout</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CartList;
