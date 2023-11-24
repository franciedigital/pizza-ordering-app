import { FaStar } from "react-icons/fa";
import OrderButton from "./common/order-button";
import { products } from "@/data"; // replace when live api is available
import Link from "next/link";

const ProductsGrid = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8">
      {/* Map through products and create product cards */}
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded shadow p-4">
          <Link href={`/products/${product.id}`}>
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
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
