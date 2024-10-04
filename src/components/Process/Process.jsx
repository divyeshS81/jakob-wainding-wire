import React from "react";
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
        <div className="flex flex-wrap justify-between items-center gap-4 md:gap-0">
          {/* Step 1 */}
          <div className="flex flex-col items-center flex-1 md:flex-none">
            <img
              src={ManufacturingUnit}
              alt="Manufacturing Unit"
              className="rounded-full h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 object-cover mb-3"
            />
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
              MANUFACTURING
            </p>
          </div>

          {/* Arrow */}
          <span className="text-orange-500 text-xl sm:text-2xl md:text-3xl lg:text-5xl">→</span>

          {/* Step 2 */}
          <div className="flex flex-col items-center flex-1 md:flex-none">
            <img
              src={OurMachinery}
              alt="Our Machinery"
              className="rounded-full h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 object-cover mb-3"
            />
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
              OUR MACHINERY
            </p>
          </div>

          {/* Arrow */}
          <span className="text-orange-500 text-xl sm:text-2xl md:text-3xl lg:text-5xl">→</span>

          {/* Step 3 */}
          <div className="flex flex-col items-center flex-1 md:flex-none">
            <img
              src={Research}
              alt="Research & Development"
              className="rounded-full h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 object-cover mb-3"
            />
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 text-center">
              RESEARCH & DEVELOPMENT
            </p>
          </div>

          {/* Arrow */}
          <span className="text-orange-500 text-xl sm:text-2xl md:text-3xl lg:text-5xl">→</span>

          {/* Step 4 */}
          <div className="flex flex-col items-center flex-1 md:flex-none">
            <img
              src={Wire}
              alt="Wire"
              className="rounded-full h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 object-cover mb-3"
            />
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
              WIRE
            </p>
          </div>

          {/* Arrow */}
          <span className="text-orange-500 text-xl sm:text-2xl md:text-3xl lg:text-5xl">→</span>

          {/* Step 5 */}
          <div className="flex flex-col items-center flex-1 md:flex-none">
            <img
              src={Packeging}
              alt="Packaging"
              className="rounded-full h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 object-cover mb-3"
            />
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
              PACKING
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
