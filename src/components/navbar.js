"use client";
import Image from "next/image";
import Link from "next/link";
import CartWithTooTip from "./common/cart-tooltip";
import { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex  bg-white overflow-hidden justify-between z-[1000] items-center gap-28 md:px-10 py-2 px-3 cursor-pointer w-full ease-in-out transition-all relative">
      <Link href="/">
        <Image
          src="https://res.cloudinary.com/ilove2support/image/upload/v1699863114/pizza-logo_afsvzn.png"
          alt="Logo"
          width={70}
          height={70}
          className="w-24 h-auto"
        />
      </Link>
      <Image
        alt="header-logo"
        src="https://res.cloudinary.com/ilove2support/image/upload/v1699863113/pizza-header-img_krzjsl.png"
        width={150}
        height={150}
        className="ease-in-out transition-all hidden md:flex"
      />
      <div className="flex justify-center items-center gap-6 font-bold">
        <div className="hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex gap-7">
          <Link
            href="/"
            className="text-red-600 text-[17px] font-bold hover:text-red-600"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-[17px] font-bold hover:text-red-600"
          >
            Products
          </Link>

          <Link
            href="/blog"
            className="text-[17px] font-bold hover:text-red-600"
          >
            Blog
          </Link>
          <Link
            href="/contacts"
            className="text-[17px] font-bold hover:text-red-600"
          >
            Contact
          </Link>
          <Link
            href="/signin"
            className="text-[17px] font-bold hover:text-red-600"
          >
            Signin
          </Link>
        </div>
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx={11} cy={11} r={8}></circle>
          <line x1={21} y1={21} x2={16.65} y2={16.65}></line>
        </svg>
        <Link href="/cart" className="relative">
          <CartWithTooTip />
        </Link>
        <div className="md:hidden flex text-[40px] transform ease-in-out">
          {isMenuOpen ? (
            <FaTimes
              onClick={closeMenu}
              className="text-black cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={toggleMenu}
              className="text-black cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Side Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-full bg-white overflow-hidden transition-transform transform w-64">
          {/* Close Icon */}
          <div className="absolute top-4 right-4">
            <FaTimes
              className="text-black cursor-pointer"
              onClick={closeMenu}
            />
          </div>

          {/* Menu Items */}
          <ul className="md:flex flex-col ml-8 space-y-4 mt-8">
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
      )}
    </nav>
  );
};

export default Navbar;
