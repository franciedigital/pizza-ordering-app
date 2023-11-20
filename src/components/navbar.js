// Import React at the top of your file if not already done
import React from 'react';

export default function Navbar() {
    return (
        <nav className="flex justify-end items-center bg-gray-100 p-4 text-black">
            {/* List items */}
            <ul className="flex space-x-4">
                <li className="hover:text-gray-300">Home</li>
                <li className="hover:text-gray-300">About</li>
                <li className="hover:text-gray-300">Products</li>
                <li className="hover:text-gray-300">Cart</li>
                <li className="hover:text-gray-300">Signup</li>
                <li className="hover:text-gray-300">Login</li>
            </ul>

            {/* Search Icon */}
            <div className="flex items-center ml-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-5.2-5.2"
                    ></path>
                    <circle cx="10" cy="10" r="8" />
                </svg>
            </div>
        </nav>
    );
}
