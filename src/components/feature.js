import React from "react";

const Feature = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
      <div className="flex flex-col justify-center">
        <img
          src="../../images/feature-1.png"
          alt="feature"
          className="w-[60%]"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="p-4">
          <h1 className="text-black font-bold text-5xl mb-4 tracking-wide">
            Daily fresh and always tasty
          </h1>
          <p className="text-gray-500 text-xl tracking-tight">
            There are many variations of passages of Lorem Ipsum available, but
            majprity haved{" "}
          </p>
        </div>
      </div>
      <div className="relative p-4">
        <img src="../../images/onion-1.png" alt="Fine onion" className="absolute left-0 bottom-0 w-[20%]" />
      </div>
    </section>
  );
};

export default Feature;
