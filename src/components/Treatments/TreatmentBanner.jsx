import React from "react";
import IVF from '@/assets/Treatment/IVF/banner.webp'
const TreatmentBanner = () => {
  return (
    <div className="relative w-full">
      {/* Background Image Container */}
      <div 
        className="relative h-[300px] md:h-[400px] w-full bg-cover bg-center bg-no-repeat"
        style={{
          "backgroundImage": `url(${IVF.src})`
        }}
      >
        {/* Gradient Overlay */}
        
        {/* Content Container */}
        <div className="container mx-auto relative h-full">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full">
            {/* Text Content */}
            <div className="flex items-center h-full ">
              <div className="max-w-2xl mt-32">
                <h1 className="text-[#173366] text-2xl md:text-4xl font-bold ">
                  In Vitro Fertilization (IVF)
                </h1>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentBanner;