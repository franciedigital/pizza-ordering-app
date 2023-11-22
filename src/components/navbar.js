"use client";
import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="flex items-center justify-between ml-4  p-4 ">
      <img
        src="https://res.cloudinary.com/ilove2support/image/upload/v1699863114/pizza-logo_afsvzn.png"
        alt="Logo"
        className="w-24 h-auto "
      />

      <div className=" mt-[-4]">
        <img src="../../images/pizza-header.png" className="w-48 h-auto" />
      </div>
      <div className={`lg:hidden ${isMenuOpen ? 'hidden' : 'block'}`}>
        <FaBars className="text-black cursor-pointer" onClick={toggleMenu} />
      </div>
      <div
        className={`lg:flex ml-8 space-x-8 ${isMenuOpen ? "block" : "hidden"}`}
      >
        <ul className=" lg:flex ml-8 space-x-8">
          <li className="hover:text-gray-300 text-black">HOME</li>
          <li className="hover:text-gray-300 text-black">PRODUCTS</li>
          <li className="hover:text-gray-300 text-black">PAGES</li>
          <li className="hover:text-gray-300 text-black">BLOG</li>
          <li className="hover:text-gray-300 text-black">CONTACT</li>
        </ul>
        <div className="flex space-x-4 ml-8">
          <FaSearch
            size={20}
            className="text-black hover:text-gray-300 cursor-pointer"
          />
          {/* Cart icon with tooltip */}
          <div data-tip="3">
            <FaShoppingCart
              size={20}
              className="text-blue-800 hover:text-gray-300 cursor-pointer"
            />
          </div>
          {/* React-tooltip */}
        </div>
      </div>
    </nav>
  );
}
