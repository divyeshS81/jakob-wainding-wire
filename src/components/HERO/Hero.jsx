import React from 'react';
import LogoJakob from "../../assets/IMAGES/LOGOJAKOB.png";
import WindingWire from "../../assets/IMAGES/winding-wire4.jpg";

const Hero = () => {
  return (
    <section className="bg-gray-100 text-gray-800">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 py-12">
        {/* Left side content */}
        <div className="flex flex-col items-start justify-center space-y-4 lg:w-1/2 animate-slide-in">
          <h1 className="text-4xl font-bold lg:text-6xl flex">
            Welcome to
            <span>
              <img src={LogoJakob} alt="Logo" className="h-20 w-68 animate-fade-in" />
            </span>
          </h1>
          <p className="text-lg lg:text-xl animate-fade-in">
            Delivering precision-engineered winding wires for your industry needs. Let's power your success with reliability and excellence.
          </p>
          <a
            href="#contact"
            className="px-6 py-3 text-lg   font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 animate-bounce"
          >
            Get Started
          </a>
        </div>

        {/* Right side image */}
        <div className="lg:w-1/2 h-[600px] w-[400px] rounded-lg flex justify-center mb-10 lg:mb-0">
          <img
            src={WindingWire}
            alt="Hero Image"
            className="w-full h-auto rounded-lg shadow-lg animate-fade-in"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
