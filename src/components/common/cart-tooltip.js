import { FaShoppingCart } from "react-icons/fa";

const CartWithTooTip = () => {
  const numberOfItemsInCart = 0; // Replace with the actual number of items in the cart

  return (
    <div className="relative">
      {/* Cart icon */}
      <div data-tip={numberOfItemsInCart}>
        <FaShoppingCart
          size={20}
          className="text-blue-800 hover:text-blue-800 cursor-pointer"
        />
      </div>

      {/* Permanent Tooltip */}
      <div className="absolute  bg-red-500 text-white py-0 px-1 rounded-full top-0 right-0 transform translate-x-1/2 -translate-y-full">
        {numberOfItemsInCart}
      </div>
    </div>
  );
};

export default CartWithTooTip;
