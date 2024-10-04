import React from 'react';
import SubmersibleImage from "../../assets/IMAGES/submersibleimage.png";

const ProductApplication = () => {
  return (
    <div id='productapplication' className="bg-gray-100 py-16">
      {/* Title Section */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
        PRODUCT APPLICATION SECTOR
      </h2>

      {/* Image and Caption Section */}
      <div className="flex flex-col items-center">
        {/* Centered Image */}
        <img
          src={SubmersibleImage} // Image path
          alt="Submersible Pump"
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain mb-4" // Responsive width and height
        />

        {/* Caption Below Image */}
        <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 text-center">
          Submersible Pump
        </p>
      </div>
    </div>
  );
}

export default ProductApplication;
