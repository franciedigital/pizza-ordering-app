import { BsCart2 } from "react-icons/bs";
import { useCart } from "../context/CartContext";

const CartWithTooTip = () => {
  const { cartItems } = useCart();

  return (
    <>
      <BsCart2 className="text-blue-500 text-[25px]" />
      <div className="h-4 w-4 text-[10px] rounded-full bg-red-500 text-white flex left-3 absolute top-[-4px] justify-center items-center">
        {cartItems.length}
      </div>
    </>
  );
};

export default CartWithTooTip;
