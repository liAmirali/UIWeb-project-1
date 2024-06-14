import { FC, useEffect } from "react";
import Modal from "../common/Modal";

import TrashIcon from "@/public/icons/huge-icon/interface/outline/trash.svg?react";
import Button from "../common/Button";
import { useAppDispatch, useAppSelector } from "@/store";
import { cartActions } from "@/store/cart";
import { decrementCartItem, getCartDetail } from "@/api";
import { API_SERVER_ADDR } from "@/constants/urls";

interface Props extends ModalProps {}

const CartList: FC<Props> = ({ open, setOpen }) => {
  const dispatch = useAppDispatch();
  const isCacheValid = useAppSelector((state) => state.cart.isCacheValid);

  const cartItems = useAppSelector((state) => state.cart.items);

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveClick = async (item: CartItem) => {
    await decrementCartItem({ cart_item_id: item.id, quantity: item.quantity });
    dispatch(cartActions.setCacheValid(false));
  };

  useEffect(() => {
    if (!isCacheValid) {
      const fetchCartDetail = async () => {
        try {
          const res = await getCartDetail();
          dispatch(cartActions.setCartItems(res.cart_items));
          dispatch(cartActions.setCacheValid(true));
        } catch (_error) {
          /* empty */
        }
      };

      fetchCartDetail();
    }
  }, [dispatch, isCacheValid]);

  return (
    <Modal open={open} onClose={handleClose} className="!justify-end items-stretch" noCloseButton>
      <div className="flex-1 flex flex-col bg-white self-stretch float-right py-4 px-6 space-y-8 min-w-[25rem]">
        <span>
          You have{" "}
          <span className="font-bold">
            {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
          </span>{" "}
          in your cart
        </span>

        <div className="space-y-3 divide-y">
          {cartItems.map((item, i) => (
            <div key={i} className="flex gap-x-2 pt-3 relative">
              <div className="bg-gray-500 bg-opacity-5 p-2">
                {item.product.media.length > 0 && (
                  <img
                    src={API_SERVER_ADDR + item.product.media[0].file}
                    alt={item.product.title}
                    width="41"
                    height="50"
                  />
                )}
              </div>

              <div className="flex flex-col gap-y-1">
                <span className="text-dark-500">{item.product.title}</span>
                <span className="font-bold">${item.product.price.toFixed(2)}</span>
                <span>QTY: {item.quantity}</span>
              </div>

              <span
                className="text-red-500 absolute right-0 bottom-0"
                onClick={() => handleRemoveClick(item)}
              >
                <TrashIcon />
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-6 !mt-auto">
          <div className="flex justify-between font-bold">
            <span>Subtotal</span>
            <span>
              $
              {cartItems
                .reduce((a, b) => {
                  return a + b.product.price * b.quantity;
                }, 0)
                .toFixed(2)}
            </span>
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
