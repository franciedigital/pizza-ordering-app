// Import necessary libraries
"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import CartWithTooTip from "./common/cart-tooltip";

// Navbar component
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex justify-between p-4 z-[1000] items-center gap-24 md:px-10 cursor-pointer  w-full ease-in-out transition-all  fixed top-0 right-0 z-50 bg-white">
      <Link href="/">
        <img
          src="https://res.cloudinary.com/ilove2support/image/upload/v1699863114/pizza-logo_afsvzn.png"
          alt="Logo"
          className="w-24 h-auto"
        />
      </Link>

      <div className="mt-[-4]">
        <img src="../../images/pizza-header.png" className="w-48 h-auto" />
      </div>

      <div className="lg:hidden">
        {/* Toggle Icon */}
        <FaBars className="text-black cursor-pointer" onClick={toggleMenu} />
      </div>

      {/* Side Menu */}
      <div
        className={`lg:flex fixed top-0 right-0 h-full bg-white overflow-hidden transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } w-64`}
      >
        {/* Close Icon */}
        <div className="absolute top-4 right-4">
          <FaTimes className="text-black cursor-pointer" onClick={closeMenu} />
        </div>

        {/* Menu Items */}
        <ul className="lg:flex flex-col ml-8 space-y-4 mt-8">
          <li className="hover:text-gray-300">
            <Link href={"/"}>HOME</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link href={"/products"}>PRODUCTS</Link>
          </li>
          <li className="hover:text-gray-300">PAGES</li>
          <li className="hover:text-gray-300">BLOG</li>
          <li className="hover:text-gray-300">CONTACT</li>
        </ul>

        {/* Search and Cart Icons */}
        <div className="flex space-x-4 ml-8 mt-auto">
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
