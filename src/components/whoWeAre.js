import React from "react";

const WhoWeAre = () => {
  return (
    <section className="p-8 bg-yellow-50 mb-12">
      <div className="flex justify-between">
        <div>
          <h3 className="text-red-500 text-xl font-bold mb-4">Our Strength</h3>
          <h2 className="font-bold text-4xl mb-4">Why We Are The Best?</h2>
        </div>
        <div>
            <img src="../../images/pizza-strength.png" alt="Pizza Strength" className="w-[80%]" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        <div className="flex flex-col ">
          <div className="w-80">
            <img
              src="../../images/all-kinds-of-food.png"
              alt="All kinds of food"
              className="w-[10%] mb-4"
            />

            <h3 className="text-black font-bold mb-4 text-small">
              All Kinds of Foods
            </h3>
            <p className="text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and the type
              setting industry.
            </p>
          </div>
        </div>

        <div className="flex flex-col ">
          <div className=""></div>

          <div className="w-80">
            <img
              src="../../images/fresh-foods.png"
              alt="All kinds of food"
              className="w-[10%] mb-4"
            />

            <h3 className="text-black font-bold mb-4 text-small">
              All Kinds of Foods
            </h3>
            <p className="text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and the type
              setting industry.
            </p>
          </div>
        </div>

        <div className="flex flex-col ">
          <div className=""></div>

          <div className="w-80">
            <img
              src="../../images/best-taste.png"
              alt="All kinds of food"
              className="w-[10%] mb-4"
            />

            <h3 className="text-black font-bold mb-4 text-small">
              All Kinds of Foods
            </h3>
            <p className="text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and the type
              setting industry.
            </p>
          </div>
        </div>

        <div className="flex flex-col ">
          <div className=""></div>

          <div className="w-80">
            <img
              src="../../images/one-time-delivery.png"
              alt="All kinds of food"
              className="w-[10%] mb-4"
            />

            <h3 className="text-black font-bold mb-4 text-small">
              All Kinds of Foods
            </h3>
            <p className="text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and the type
              setting industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
