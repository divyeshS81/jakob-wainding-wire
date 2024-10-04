import React from 'react';
import Copper from "../../assets/IMAGES/carbon-steel.jpg";
import Polyster from "../../assets/IMAGES/brass.jpg";
import BgImage from "../../assets/IMAGES/bg3.jpg"; 
import JakobBrochure from "../../assets/Brochure/JAKOB_Brochure.pdf";

const Material = () => {
  return (
    <div id='material'>
      {/* Material Section */}
      <div
        className="relative bg-cover bg-center mt-[50px] min-h-[700px] sm:min-h-[900px] lg:min-h-[1000px] flex items-center justify-center"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content on top of the background */}
        <div className="relative z-10 text-white text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">Material</h2>

          {/* Centering the sections */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 lg:space-x-16">
            {/* Copper Section */}
            <div className="bg-black bg-opacity-70 p-5 sm:p-6 lg:p-8 rounded-lg">
              <img
                src={Copper}
                alt="Copper"
                className="h-20 sm:h-24 lg:h-28 w-20 sm:w-24 lg:w-28 object-cover mx-auto rounded-full mb-4"
              />
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold">Copper</p>
            </div>

            {/* Polyester Film Section */}
            <div className="bg-black bg-opacity-70 p-5 sm:p-6 lg:p-8 rounded-lg">
              <img
                src={Polyster}
                alt="Polyester Film"
                className="h-20 sm:h-24 lg:h-28 w-20 sm:w-24 lg:w-28 object-cover mx-auto rounded-full mb-4"
              />
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold">Polyester Film</p>
            </div>
          </div>
        </div>
      </div>

      {/* Brochure Download Section */}
      <div className="bg-[#FF8A00] py-8 sm:py-10 lg:py-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
          {/* Left Side: Title and Subtitle */}
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">SOME QUICK DETAILS ABOUT US</h2>
            <p className="text-white text-base sm:text-lg lg:text-xl">Some quick details about us.</p>
          </div>

          {/* Right Side: Download Button */}
          <div>
            <a
              href={JakobBrochure}
              className="text-white border-white border-2 px-5 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full hover:bg-white hover:text-[#FF8A00] transition duration-300"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Material;
