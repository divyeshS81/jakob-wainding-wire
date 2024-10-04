import React from "react";

const WhyUsSection = () => {
  return (
    <div className="bg-black text-white py-10">
      {/* Section for "WHY US?" */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 max-w-3xl mx-auto">
        <div className="mb-8 md:mb-10">
          <h2 className="text-orange-500 text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
            WHY US?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center md:text-left leading-relaxed">
            Our company always believes in offering high-grade quality products
            to our valued clients all across the market. Some of the features
            are: highly experienced professionals, wide product range,
            competitive prices, and prompt delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
