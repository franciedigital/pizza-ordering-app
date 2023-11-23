// Import React at the top of your file if not already done
import React from "react";
import OrderButton from "./common/order-button";

const Hero = () => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
      {/* Left column */}
      <div className="p-8 flex flex-col justify-center z-10">
        <h1 className="text-7xl font-bold mb-4 whitespace-pre-line leading-tight">
          Handmade, With an Extra Pinch of{" "}
          <span className="text-red-500"> Love</span>
        </h1>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          facilisis risus at turpis bibendum, in hendrerit erat tristique.
        </p>
        <OrderButton />
      </div>

      {/* Right column with semi-circle */}
      <div className="relative overflow-hidden">
        <img
          src="../../images/pizza-hero.png"
          alt="Hero Image"
          className="absolute top-[-60px] right-0 left-16 object-cover relative w-[60%]  z-20"
        />
        <img src="../../images/pizza-onion.png"  alt="Onion Image" className="absolute left-0 bottom-16 z-20" />
        <img src="../../images/pizza-small.png"  alt="Small pizza Image" className="absolute right-32 bottom-0 z-20 w-[30%]" />
        <div className="absolute w-full h-full rounded-bl-full bg-yellow-500 top-[-30px] right-[-30px] left-[50%] "></div>
      </div>
    </div>
  );
};

export default Hero;
