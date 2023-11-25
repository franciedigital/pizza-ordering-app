// Import necessary components and functions
"use client";
import { useCart } from "@/components/context/CartContext";
import Footer from "@/components/footer";
//import { formatCurrency } from "@/utils/formatCurrency"; // Import a utility function to format currency

const { default: Navbar } = require("@/components/navbar");

const Cart = () => {
  const { cartItems } = useCart();

  // Function to calculate the total price for each item
  const calculateTotal = (item) => {
    return item.price * item.quantity;
  };

  const TableSection = () => {
    return (
      <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] bg-white">
        {/* Display the table containing the items in the cart */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Product</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Extra</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index} className="border">
                {/* Product Image */}
                <td className="border p-2">
                  <img
                    src={item.product.image_url}
                    alt={item.product.name}
                    className="w-12 h-12 object-cover"
                  />
                </td>
                {/* Name */}
                <td className="border p-2">{item.product.name}</td>
                {/* Extra (Ingredients) */}
                <td className="border p-2">{item.ingredients.join(", ")}</td>
                {/* Price */}
                <td className="border p-2">{item.product.price}</td>
                {/* Quantity */}
                <td className="border p-2">{item.quantity}</td>
                {/* Total */}
                <td className="border p-2">
                  {calculateTotal(item)}
                  {/* {formatCurrency(calculateTotal(item))} */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const CheckoutCard = () => {
    return (
      <div className="w-[80%]   col-span-1 h-[60vh] p-4 bg-gray-700 text-white m-auto my-0 ">
        <div className="flex flex-col p-8 space-y-4 ">
            <h1 className="text-4xl font-bold mb-4">CARD TOTAL</h1>
            <div className="mb-4">
                <p>Subtotal: $160</p>
                <p>Discount: $79.60</p>
                <p>Total: $160</p>
            </div>
            <div>
                <button className={`bg-yellow-500 p-4 w-full rounded-full text-2xl font-bold`} >CHECKOUT NOW!</button>
            </div>

        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <section className="mt-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {/* Table section */}
          <TableSection />
          {/* Cart total card section */}
          <CheckoutCard />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
