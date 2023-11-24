// Import React at the top of your file if not already done
import React from "react";

import ProductsGrid from "./product-grid";


const Products = () => {

  return (
    <section className="p-8 mb-12">
      <div className="p-4 mb-4">
        <h2 className="text-red-500 font-bold text-xl tracking-tight mb-2">
          Popular Dishes
        </h2>
        <h1 className="text-3xl font-bold tracking-tight text-black">
          Browse our Menu
        </h1>
      </div>
      
      <ProductsGrid />
    </section>
  );
};

export default Products;
