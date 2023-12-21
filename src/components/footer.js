// Import React at the top of your file if not already done
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-yellow-50 text-black p-8 mt-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">INFORMATION</h3>
          <p>Home</p>
          <p>Blog</p>
          <p>About Us</p>
          <p>Menu</p>
          <p>Contact Us</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">TOP ITEMS</h3>
          <p>Pepperoni.</p>
          <p>Swiss Mushroom</p>
          <p>barbeque Chicken</p>
          <p>Ham & Cheese</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">OTHERS</h3>
          <p>Checkout</p>
          <p>Cart</p>
          <p>Product</p>
          <p>Locations</p>
          <p>Legal</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">SOCIAL MEDIA</h3>
          <div className="flex items-center mb-2">
            <img
              src="../../images/facebook.png"
              alt="Facebook Icon"
              className="w-12 h-10 mr-2"
            />
            <img
              src="../../images/twitter.png"
              alt="Twitter Icon"
              className="w-9 h-7 mr-2"
            />
            <img
              src="../../images/intagram.jpeg"
              alt="Instagram Icon"
              className="w-12 h-10 mr-2"
            />
            <img
              src="../../images/pintrest.png"
              alt="Pintrest Icon"
              className="w-8 h-8"
            />
          </div>
          <p>Sigup and get exclusive offers and coupon codes</p>
          <Link href="/signup">
            <button className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-full mt-4 w-max">
              <span>SIGN UP</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
