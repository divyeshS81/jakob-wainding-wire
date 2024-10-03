import React from 'react';
import Copper from "../../assets/IMAGES/carbon-steel.jpg";
import Polyster from "../../assets/IMAGES/brass.jpg";
import BgImage from "../../assets/IMAGES/bg3.jpg"; 
import JakobBrochure from "../../assets/Brochure/JAKOB_Brochure.pdf";

const Material = () => {
  return (
    <div id='material'>
    <div
      className="relative bg-cover mt-[50px] bg-center h-96"
      style={{ backgroundImage: `url(${BgImage})` }} // Use the imported image here
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay */}

      <div className="relative z-10 text-center py-10 text-white">
        <h2 className="text-4xl font-bold mb-8">Material</h2>

        <div className="flex justify-center space-x-28">
          {/* Copper Section */}
          <div className="bg-black w-1/3 bg-opacity-70 p-5 rounded-lg">
            <img
              src={Copper}
              alt="Copper"
              className="h-20 w-20 object-cover mx-auto rounded-full mb-4"
            />
            <p className=" text-xl font-semibold">Copper</p>
          </div>

          {/* Polyester Film Section */}
          <div className="bg-black w-1/3 bg-opacity-70 p-5 rounded-lg">
            <img
              src={Polyster}
              alt="Polyester Film"
              className="h-20 w-20 object-cover mx-auto rounded-full mb-4"
            />
            <p className="text-xl font-semibold">Polyester Film</p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#FF8A00] py-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        {/* Left Side: Title and Subtitle */}
        <div>
          <h2 className="text-white text-3xl font-bold mb-2">SOME QUICK DETAILS ABOUT US</h2>
          <p className="text-white text-lg">Some quick details about us.</p>
        </div>

        {/* Right Side: Download Button */}
        <div>
          <a
            href={JakobBrochure}
            className="text-white border-white border-2 px-6 py-3 rounded-full hover:bg-white hover:text-[#FF8A00] transition duration-300"
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
