// Import React at the top of your file if not already done
import React from "react";
import { FaStar } from "react-icons/fa";
import OrderButton from "./common/order-button";

const ProductGrid = () => {
  // Dummy product data (replace with your actual data)
  const products = [
    {
      id: 1,
      name: "Burga Pizza",
      image_url: "../../images/burga.jpg",
      price: "$20",
      description: "This is a burga pizza",
      rating: 5,
    },
    {
      id: 2,
      name: "Burga Pizza",
      image_url: "../../images/burga.jpg",
      price: "$20",
      description: "This is a burga pizza",
      rating: 5,
    },
    {
      id: 3,
      name: "New Pizza",
      image_url: "../../images/pizza-hero.png",
      price: "$10",
      description: "This is a new pizza",
      rating: 5,
    },
    {
      id: 4,
      name: "Greek Pizza",
      image_url: "../../images/pizza-small.png",
      price: "$40",
      description: "This is a greek pizza",
      rating: 5,
    },
    // Add more products as needed
  ];

  return (
    <section className="container mx-auto mb-12">
      <div className="p-4 mb-4">
        <h2 className="text-red-500 font-bold text-xl tracking-tight mb-2">
          Popular Dishes
        </h2>
        <h1 className="text-3xl font-bold tracking-tight text-black">
          Browse our Menu
        </h1>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8">
        {/* Map through products and create product cards */}
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded shadow p-4">
            <div className="flex flex-col justify-center mb-4">
              <img
                src={product.image_url}
                alt={product.description}
                className="w-[50%]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col justify-left space-y-8">
                <h2 className="text-2xl font-semibold ">{product.name}</h2>
                {/* insert rating here with react-icons star icon and make text color yellow */}
                <div className="flex items-center text-yellow-500">
                  {Array.from({ length: product.rating }, (_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>

                <p className="text-lg">{product.description}</p>
                <OrderButton />
              </div>

              <div>
                <p className=" text-red-500 text-2xl font-semibold mb-2">
                  {product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
