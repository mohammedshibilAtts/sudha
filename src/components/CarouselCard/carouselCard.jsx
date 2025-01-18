"use client"
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const SplitCarousel = ({slides}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      <div className="relative overflow-hidden rounded-xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="flex flex-col lg:flex-row"> {/* Changed to flex-col by default */}
                {/* Image Section */}
                <div className="relative w-full h-64 lg:w-1/2 sm:h-96"> {/* Adjusted width and height for mobile */}
                  <Image
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                
                {/* Content Section */}
                <div className="w-full lg:w-1/2 p-6 lg:p-8 flex flex-col  "> {/* Added background color */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                  25 Years of Hope, A Lifetime of Love
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    {slide.content}
                  </p>

                  {slide.subContent &&(
                    <div className='mt-3'>
                     <p className="text-gray-600 flex-grow">
                    {slide.subContent}
                  </p>
                     <p className="text-gray-600 flex-grow mt-3 mb-3">
                    {slide.wish}
                  </p>
                    </div>
                  )}
                 
                  <p className="text-gray-600  flex-grow">
                    {slide.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        

        {/* Dots Navigation */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="flex justify-center space-x-2 pb-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index
                    ? 'bg-blue-600 '
                    : 'bg-gray-300 '
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <button
          onClick={prevSlide}
          className="absolute left-4 top-1/4 lg:top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/4 lg:top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
    </div>
  );
};

export default SplitCarousel;