"use client";
import { FaHeart } from "react-icons/fa";
import Footer from "@/components/footer";
import { products } from "@/data";
import Navbar from "@/components/navbar"; // Use the correct path to your Navbar component
import Image from "next/image"; // Import the Next.js Image component
import { useState } from "react";
import { useCart } from "@/components/context/CartContext";

const Product = ({ params }) => {
  const { addToCart } = useCart();
  const [size, setSize] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  const product = products.filter(
    (prdt) => prdt.id === parseInt(params.slug, 10)
  )[0];

  const additionalIngredients = [
    "Sauce",
    "Cheese",
    "Tomatoes",
    "Mushrooms",
    "Peppers",
    "Olives",
  ];

  const handleSelectIngredients = (e) => {
    const ingredient = e.target.value;

    // Check if the ingredient is already selected
    if (selectedIngredients.includes(ingredient)) {
      // If selected, remove it
      setSelectedIngredients((prevIngredients) =>
        prevIngredients.filter((item) => item !== ingredient)
      );
    } else {
      // If not selected, add it
      setSelectedIngredients((prevIngredients) => [
        ...prevIngredients,
        ingredient,
      ]);
    }
  };

  const updateCart = () => {
    addToCart({
      product: product,
      name: product.name,
      size: size,
      quantity: quantity,
      ingredients: selectedIngredients,
      liked: liked,
    });
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-8 p-8 mt-20 md:mt-40">
        <div className="flex items-center ml-4 md:ml-8">
          {/* Use Next.js Image component for optimized image loading */}
          <Image
            src={product.image_url}
            alt={product.name}
            width={600}
            height={400}
            className="w-full md:w-[60%]"
          />
        </div>

        <div className="flex flex-col space-y-8 mt-8 md:mt-0">
          <div className="mb-8 space-y-2">
            <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
              {product.name}
            </h1>
            <p className="text-xl md:text-2xl">
              <span className="text-red-500 mr-4">{product.price}</span>
              <span className="text-gray-500">{product.reviews} Reviews</span>
            </p>
            <p className="text-lg md:text-xl">{product.description}</p>
            <p className="text-lg md:text-xl">
              Category: {product.category.join(", ")}
            </p>
            <p className="text-lg md:text-xl">
              Tags: {product.tags.join(", ")}
            </p>
          </div>

          <div className="space-y-4 md:mb-12">
            <h1 className="text-xl md:text-3xl font-medium tracking-wide">
              Choose Pizza Size
            </h1>
            <div className="relative flex justify-left items-center space-x-8">
              <div
                className="relative cursor-pointer "
                onClick={() => setSize("small")}
              >
                <img
                  src="https://res.cloudinary.com/ilove2support/image/upload/v1700494359/Pizza-icon_ns1nad.png"
                  alt="Pizza Sizes"
                  className="w-8 md:w-8 lg:w-10 flex-grow-0"
                />
                <span className="bg-red-500 text-white absolute text-xs px-1 rounded-3xl left-4 top-[-4px] flex justify-center items-center">
                  small
                </span>
              </div>
              <div
                className="relative  cursor-pointer "
                onClick={() => setSize("medium")}
              >
                <img
                  src="https://res.cloudinary.com/ilove2support/image/upload/v1700494359/Pizza-icon_ns1nad.png"
                  alt="Pizza Sizes"
                  className="w-10 md:w-12 lg:w-14 flex-grow-0"
                />
                <span className="bg-red-500 text-white absolute text-xs md:text-md px-1 rounded-3xl left-4  top-[-4px] flex justify-center items-center">
                  meduim
                </span>
              </div>
              <div
                className="relative  cursor-pointer "
                onClick={() => setSize("large")}
              >
                <img
                  src="https://res.cloudinary.com/ilove2support/image/upload/v1700494359/Pizza-icon_ns1nad.png"
                  alt="Pizza Sizes"
                  className="w-12 md:w-16 lg:w-20 flex-grow-0"
                />
                <span className="bg-red-500 text-white absolute text-sm md:text-md px-2 rounded-3xl  left-8  top-[-4px] flex justify-center items-center">
                  large
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h1 className="text-lg md:text-xl font-medium tracking-wide">
              Choose additional ingredients
            </h1>
            {additionalIngredients.map((ingredient, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={ingredient}
                  name={ingredient}
                  className="mr-2"
                  value={ingredient}
                  onChange={handleSelectIngredients}
                />
                <label htmlFor={ingredient}>{ingredient}</label>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row space-x-0  md:space-x-4 space-y-4 ">
            <input
              type="number"
              placeholder=""
              defaultValue="1"
              className="border border-gray-500 p-2 focus:outline-none focus:border-black"
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            />
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-red-500 w-max"
              onClick={updateCart}
            >
              ADD TO CART
            </button>
            <div className="bg-red-500 text-white p-2 rounded-full flex items-center w-max h-max  cursor-pointer ">
              <FaHeart
                onClick={() =>
                  setLiked((prevLiked) => (prevLiked = !prevLiked))
                }
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
