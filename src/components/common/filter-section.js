import React from "react";
import { IoFilterSharp, IoChevronDownSharp } from "react-icons/io5";
import ProductsGrid from "../product-grid";
import Footer from "../footer";

const FilterSection = () => {
  return (
    <section className="mt-8 md:mt-16 p-4">
      <div className="flex flex-col md:flex-row justify-between p-4">
        <div className="mb-4 md:mb-0">
          <button className="flex items-center bg-yellow-500 text-white p-2 rounded-full w-40">
            <IoFilterSharp size={20} className="mr-2 ml-2" />
            <span className="text-xl tracking-wide">Filter</span>
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h3 className="mb-4 md:mb-0 md:mr-8 text-xl font-bold tracking-wide">
            Showing all 9 results
          </h3>
          {/* Form input with drop-down icon */}
          <div className="relative mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Default Sorting"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
            />
            <IoChevronDownSharp className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>
      <ProductsGrid />
      <Footer />
    </section>
  );
};

export default FilterSection;
