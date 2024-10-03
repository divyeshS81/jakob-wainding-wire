import React from "react";
import JakobLogo from "../../assets/IMAGES/winding-wire.png";
import ManufacturingUnit from "../../assets/IMAGES/manufactring.png";
import OurMachinery from "../../assets/IMAGES/ourMachinery.png";
import Packeging from "../../assets/IMAGES/packeging.png";
import Wire from "../../assets/IMAGES/wire.png";
import Research from "../../assets/IMAGES/research.png";

const Process = () => {
  return (
    <div id="process" className="bg-white mt-[30px] py-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-gray-900 text-3xl font-bold mb-8">
          MANUFACTURING <span className="text-orange-500">PROCESS</span>
        </h2>

        {/* Steps */}
        <div className="flex mt-[60px] justify-between items-center space-x-6">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <img
              src={ManufacturingUnit}
              alt="Manufacturing our Machinery Unit"
              className="rounded-full h-24 w-24 object-cover mb-2"
            />
            <p className="text-lg font-semibold text-gray-800">MANUFACTURING</p>
          </div>

          <span className="text-orange-500 text-[40px]">→</span>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <img
              src={OurMachinery}
              alt="our machinery"
              className="rounded-full h-24 w-24 object-cover mb-2"
            />
            <p className="text-lg font-semibold text-gray-800">OUR MACHINERY</p>
          </div>

          <span className="text-orange-500 text-[40px]">→</span>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <img
              src={Research}
              alt="Research & Development Facilitie"
              className="rounded-full h-24 w-24 object-cover mb-2"
            />
            <p className="text-lg font-semibold text-gray-800">RESEARCH & DEVELOPMENT </p>
          </div>

          <span className="text-orange-500 text-[40px]">→</span>

          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <img
              src={Wire}
              alt="wire"
              className="rounded-full h-24 w-24 object-cover mb-2"
            />
            <p className="text-lg font-semibold text-gray-800">WIRE</p>
          </div>

          <span className="text-orange-500 text-[40px]">→</span>

          <div className="flex flex-col items-center">
            <img
              src={Packeging}
              alt="Packing"
              className="rounded-full h-24 w-24 object-cover mb-2"
            />
            <p className="text-lg font-semibold text-gray-800">PACKING</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
