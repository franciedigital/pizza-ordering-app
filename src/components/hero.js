// Import React at the top of your file if not already done
import React from "react";
import OrderButton from "./common/order-button";
import Link from "next/link";

const Hero = () => {
  const HeroImage = () => {
    return (
      <div className="p-8 relative overflow-hidden">
        <div className=" rounded-full bg-yellow-500  "></div>
        <div className=" md:max-w-xl relative z-20">
          <img
            src="../../images/pizza-hero.png"
            alt="Hero Image"
            className="absolute  w-[75%] top-[-40px] mb-4  right-0 left-8 mt-24  relative  z-20"
          />
          <img
            src="../../images/pizza-onion.png"
            alt="Onion Image"
            className="absolute left-0 bottom-0 w-[20%] z-20"
          />
          <img
            src="../../images/pizza-small.png"
            alt="Small pizza Image"
            className="absolute right-0 bottom-0 z-20 w-[20%] md:w-[30%]"
          />
        </div>
      </div>
    );
  };
  return (
    <div className="mt-24 p-4 items-center">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {/* Left column */}
        <div className="p-8 flex flex-col justify-center z-10 md:max-w-xl">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 whitespace-pre-line leading-tight">
            Handmade, With an Extra Pinch of{" "}
            <span className="text-red-500"> Love</span>
          </h1>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            facilisis risus at turpis bibendum, in hendrerit erat tristique.
          </p>
          <Link href={"/products"}>
            {" "}
            <OrderButton />
          </Link>
        </div>

        {/* Right column with semi-circle */}
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
