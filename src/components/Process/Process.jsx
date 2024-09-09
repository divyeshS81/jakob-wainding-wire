import React from "react";
import JakobLogo from "../../assets/IMAGES/winding-wire.png";

const Process = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-gray-900 text-3xl font-bold mb-8">
          MANUFACTURING <span className="text-orange-500">PROCESS</span>
        </h2>

        {/* Steps */}
        <div className="flex justify-around items-center">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <img
              src={JakobLogo}
              alt="Manufacturing our Machinery Unit"
              className="rounded-full h-24 w-24 object-cover mb-2"
            />
            <p className="text-sm text-gray-800">MANUFACTURING</p>
          </div>

          <span className="text-orange-500 text-2xl">→</span>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <img
              src={JakobLogo}
              alt="Research & Development Facilities"
              className="rounded-full h-24 w-24 object-cover mb-2"
            />
            <p className="text-sm text-gray-800">RESEARCH & DEVELOPMENT FACILITIES</p>
          </div>

          <span className="text-orange-500 text-2xl">→</span>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <img
              src={JakobLogo}
              alt="Wire"
              className="rounded-full h-24 w-24 object-cover mb-2"
            />
            <p className="text-sm text-gray-800">WIRE</p>
          </div>

          <span className="text-orange-500 text-2xl">→</span>

          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <img
              src={JakobLogo}
              alt="Packing"
              className="rounded-full h-24 w-24 object-cover mb-2"
            />
            <p className="text-sm text-gray-800">PACKING</p>
          </div>

          <span className="text-orange-500 text-2xl">→</span>

          <div className="flex flex-col items-center">
            <img
              src={JakobLogo}
              alt="Packing"
              className="rounded-full h-24 w-24 object-cover mb-2"
            />
            <p className="text-sm text-gray-800">PACKING</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
