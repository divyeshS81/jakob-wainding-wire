import React from 'react';
import WindingWire from "../../assets/IMAGES/winding-wire.png"

const WelcomeSection = () => {
  return (
    <section className="bg-gray-200 text-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="text-right mr-[400px] mb-8">
          <h2 className="text-3xl font-bold text-orange-500">Welcome to JAKOB Wire</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content - Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={WindingWire}
              alt="Jakob Winding Wire"
              className="w-full h-[600px] rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content - Text and Button */}
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              We <span className="font-bold">"Jakob Winding Wire"</span> established as a Proprietor firm in the year 2020, are a leading Manufacturer and Wholesale Trader of a wide range of Submersible Winding Wire and Copper Wire.
            </p>
            <p className="text-lg leading-relaxed">
              Our professionals work in close coordination to assure a high-quality assortment of products to the customers. We have recruited a team of professionals dedicated to maintaining quality and avoiding workplace disputes.
            </p>
            <p className="text-lg leading-relaxed">
              Owing to our fair policies and top-quality products, we have built a reputation for excellence in the industry.
            </p>
            <p className="text-lg leading-relaxed">
              Under the direction of our mentor, <span className="font-bold">Mr. Vasu Ratanpara</span>, we have been able to create a long list of satisfied clients. Thanks to his knowledge, commitment, skills, and ethical business strategies, we have secured a renowned position in the market.
            </p>
            
            {/* Contact Us Button */}
            <div className="text-center mt-6">
              <a
                href="/contact" // Update this link to your contact page URL
                className="inline-block px-6 py-3 text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-lg  animate-bounce"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
