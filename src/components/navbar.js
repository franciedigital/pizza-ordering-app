"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import CartWithTooTip from "./common/cart-tooltip";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between z-[1000] items-center gap-28 md:px-10  py-2 px-3 cursor-pointer  w-full ease-in-out transition-all  fixed  top-0   z-50 bg-white">
      <img
        src="https://res.cloudinary.com/ilove2support/image/upload/v1699863114/pizza-logo_afsvzn.png"
        alt="Logo"
        className="w-24 h-auto "
      />

      <div className=" mt-[-4]">
        <img src="../../images/pizza-header.png" className="w-48 h-auto" />
      </div>
      <div className={`lg:hidden ${isMenuOpen ? "hidden" : "block"}`}>
        <FaBars className="text-black cursor-pointer" onClick={toggleMenu} />
      </div>
      <div
        className={`lg:flex ml-8 space-x-8 ${isMenuOpen ? "block" : "hidden"}`}
      >
        <ul className=" lg:flex ml-8 space-x-8 font-bold text-black">
          <li className="hover:text-gray-300 ">
            <Link href={"/"}>HOME</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link href={"/products"}> PRODUCTS</Link>
          </li>
          <li className="hover:text-gray-300">PAGES</li>
          <li className="hover:text-gray-300 ">BLOG</li>
          <li className="hover:text-gray-300 ">CONTACT</li>
        </ul>
        <div className="flex space-x-4 ml-8">
          <FaSearch
            size={20}
            className="text-black hover:text-gray-300 cursor-pointer"
          />
          <Link href="/cart" className="relative">
            <CartWithTooTip />
          </Link>
        </div>
      </div>
    </nav>
  );
}
