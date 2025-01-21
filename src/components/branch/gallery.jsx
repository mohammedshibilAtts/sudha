import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Doc from '@/assets/Branch/doc.jpeg'

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef(null);

  const images = [
    
    {
      src: Doc,
      alt: 'Staff members standing together with rangoli decoration',
    },
    {
      src: Doc,
      alt: 'Medical equipment and facilities',
    },
    {
      src: Doc,
      alt: 'Waiting area with comfortable seating',
    },
    {
      src: Doc,
      alt: 'Staff members standing together with rangoli decoration',
    },
    {
      src: Doc,
      alt: 'Medical equipment and facilities',
    },
    {
      src: Doc,
      alt: 'Waiting area with comfortable seating',
    },
  ];

  const handleCardClick = (index) => {
    setCurrentSlide(index);
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust this value to control scroll distance
      const newScrollPosition = 
        scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-max mx-auto p-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Gallery</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          At our fertility hospital in Bangalore, advanced technology and world-class
          modern facilities come together to support your dream of parenthood in a
          comforting, safe, and secure environment.
        </p>
      </div>

      {/* Gallery Section with Scroll Controls */}
      <div className="relative">
        {/* Left Scroll Button */}
        {/* <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <ChevronLeft size={24} />
        </button> */}

        {/* Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide scroll-smooth justify-center"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-none w-96 relative bg-white  rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
              onClick={() => handleCardClick(index)}
            >
              <div className="relative w-full h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        {/* <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <ChevronRight size={24} />
        </button> */}
      </div>
    </div>
  );
};

export default Gallery;