// ProductsGrid.jsx
import React from "react";
import { FaStar } from "react-icons/fa";
import OrderButton from "./common/order-button";
import { products } from "@/data"; // replace when live api is available
import Link from "next/link";

const ProductsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 md:mt-8">
      {/* Map through products and create product cards */}
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded shadow p-4 mx-auto">
          <Link href={`/products/${product.id}`}>
            <div className="flex flex-col justify-center mb-4">
              <img
                src={product.image_url}
                alt={product.description}
                className="w-full h-auto md:w-full md:h-[400px] object-cover mx-auto"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col justify-left space-y-4 md:space-y-8">
                <h2 className="text-xl md:text-2xl font-semibold ">
                  {product.name}
                </h2>
                <div className="flex items-center text-yellow-500">
                  {Array.from({ length: product.rating }, (_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
                <p className="text-base md:text-lg">{product.description}</p>
                <OrderButton />
              </div>
              <div className="text-center md:text-left">
                <p className="text-red-500 text-lg md:text-2xl font-semibold mb-2">
                  ${product.price}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
