// Import React at the top of your file if not already done
import React from 'react';

const Hero = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left column */}
            <div className="p-8">
                <h1 className="text-4xl font-bold mb-4">Handmade, With an Extra Pinch of Love</h1>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis
                    risus at turpis bibendum, in hendrerit erat tristique.
                </p>
                {/* Add other content or components as needed */}
            </div>

            {/* Right column */}
            <div className="hidden md:block">
                {/* Replace 'path/to/your/image.jpg' with the actual path to your hero image */}
                <img
                    src="../../images/pizza.jpg"
                    alt="Hero Image"
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
    );
};

export default Hero;
