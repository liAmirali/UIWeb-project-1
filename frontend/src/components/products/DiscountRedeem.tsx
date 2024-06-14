import { FC, FormEvent } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { applyDiscount } from "@/api";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/store";
import { cartActions } from "@/store/cart";

interface Props {
  wrapperClassName: string;
}

const DiscountRedeem: FC<Props> = ({ wrapperClassName }) => {
  const dispatch = useAppDispatch();

  const appliedDiscount = useAppSelector((state) => state.cart.discount);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const discountCodeInput = target.discountCode as HTMLInputElement;

    if (discountCodeInput.value)
      try {
        await applyDiscount({
          discount_code: discountCodeInput.value,
        });
        toast("Discount was applied successfully!", { type: "success" });
        dispatch(cartActions.setCacheValid(false));
      } catch (_e) {
        toast("Couldn't redeem discount.", { type: "error" });
      }
  };
  return (
    <form onSubmit={handleSubmit} className={wrapperClassName}>
      <div className="flex items-end gap-x-4">
        <Input name="discountCode" label="Discount Code" />
        <Button type="submit">Redeem</Button>
      </div>

      {appliedDiscount && <p>Applied: {appliedDiscount.code}</p>}
    </form>
  );
};

export default DiscountRedeem;
