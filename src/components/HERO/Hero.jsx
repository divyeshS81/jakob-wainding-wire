import React from 'react';
import LogoJakob from "../../assets/IMAGES/LOGOJAKOB.png";
import WindingWire from "../../assets/IMAGES/winding-wire4.jpg";

const Hero = () => {
  return (
    <section className="bg-gray-100 text-gray-800">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Left side content */}
        <div className="flex flex-col items-center lg:items-start justify-center space-y-4 lg:w-1/2 text-center lg:text-left animate-slide-in">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold flex items-center justify-center lg:justify-start">
            Welcome to
            <span className="ml-2">
              <img
                src={LogoJakob}
                alt="Logo"
                className="h-10 sm:h-14 lg:h-20 w-auto animate-fade-in"
              />
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl animate-fade-in max-w-md sm:max-w-lg">
            Delivering precision-engineered winding wires for your industry needs. Let's power your success with reliability and excellence.
          </p>
          <a
            href="#contact"
            className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out animate-bounce"
          >
            Get Started
          </a>
        </div>

        {/* Right side image */}
        <div className="lg:w-1/2 w-full flex justify-center mb-8 lg:mb-0">
          <img
            src={WindingWire}
            alt="Hero Image"
            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg animate-fade-in"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
