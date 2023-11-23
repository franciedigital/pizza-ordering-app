import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const OrderButton = () => {
    return (
        <button className="flex items-center bg-yellow-500 text-white p-4 rounded-full w-max">
          <FaShoppingCart size={20} className="mr-2" />
          <span>ORDER NOW</span>
        </button>
    )
}

export default OrderButton;