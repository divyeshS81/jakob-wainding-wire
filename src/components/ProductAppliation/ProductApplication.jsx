import React from 'react'
import SubmersibleImage from "../../assets/IMAGES/submersibleimage.png";

const ProductApplication = () => {
  return (
    <div id='productapplication' className="bg-gray-100 py-16">
    {/* Title Section */}
    <h2 className="text-center text-4xl font-bold text-gray-900 mb-12">
      PRODUCT APPLICATION SECTOR
    </h2>

    {/* Image and Caption Section */}
    <div className="flex flex-col items-center">
      {/* Centered Image */}
      <img
        src={SubmersibleImage} // Image path
        alt="Submersible Pump"
        className="w-64 h-64 object-contain mb-4" // Adjust width and height as needed
      />

      {/* Caption Below Image */}
      <p className="text-lg font-semibold text-gray-700">
        Submersible Pump
      </p>
    </div>
  </div>
  )
}

export default ProductApplication
