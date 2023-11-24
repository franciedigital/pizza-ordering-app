import { FaHeart } from "react-icons/fa";
import Footer from "@/components/footer";
import { products } from "@/data"; // replace when live api is available

const { default: Navbar } = require("@/components/navbar");

const Product = ({ params }) => {
  const product = products.filter(
    (prdt) => prdt.id === parseInt(params.slug, 10)
  )[0];

  // Sample list of additional ingredients
  const additionalIngredients = [
    "Sauce",
    "Cheese",
    "Tomatoes",
    "Mushrooms",
    "Peppers",
    "Olives",
  ];

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-8 p-8 mt-40">
        <div className="flex items-center ml-8">
          <img src={product.image_url} alt={product.name} className="w-[60%]" />
        </div>

        <div className="flex  flex-col space-y-8  ">
          <div className="mb-8  space-y-2">
            <h1 className="text-5xl font-bold tracking-wide">{product.name}</h1>
            <p className="text-xl">
              <span className="text-red-500 mr-4">{product.price}</span>
              <span className="text-gray-500">{product.reviews} Reviews</span>
            </p>
            <p className="text-xl">{product.description}</p>
            <p className="text-xl">Category: {product.category.join(", ")}</p>
            <p className="text-xl">Tags: {product.tags.join(", ")}</p>
          </div>
          <div className="space-y-4 mb-12">
            <h1 className="text-3xl font-medium tracking-wide">
              Choose Pizza Size
            </h1>
            <div className="flex items-center space-x-6">
              <img
                src="https://res.cloudinary.com/ilove2support/image/upload/v1700494359/Pizza-icon_ns1nad.png"
                alt="Pizza Sizes"
                className="w-[5%] flex-grow-0"
              />
              <img
                src="https://res.cloudinary.com/ilove2support/image/upload/v1700494359/Pizza-icon_ns1nad.png"
                alt="Pizza Sizes"
                className="w-[8%] flex-grow-0"
              />
              <img
                src="https://res.cloudinary.com/ilove2support/image/upload/v1700494359/Pizza-icon_ns1nad.png"
                alt="Pizza Sizes"
                className="w-[10%] flex-grow-0"
              />
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-xl font-medium tracking-wide">
              Choose additional ingredients
            </h1>
            {/* insert checkbox here */}
            {additionalIngredients.map((ingredient, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input type="checkbox" id={ingredient} name={ingredient} />
                <label htmlFor={ingredient}>{ingredient}</label>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-6">
            {/* Input Box */}
            <input
              type="text"
              placeholder=""
              defaultValue="1"
              className="border border-gray-500 p-2 focus:outline-none focus:border-black"
            />
            {/* Button with Shopping Cart Icon */}
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-full">
              ADD TO CART
            </button>
            {/* Like Icon with Heart Icon */}
            <div className="bg-gray-500 text-white p-2 rounded-full flex items-center">
              <FaHeart />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
