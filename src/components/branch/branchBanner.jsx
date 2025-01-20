import { TestimonialCard } from "@/app/Home/page";
import Image from "next/image";
import React from "react";
import Banner from "@/assets/Home/Banner.png";
import NamaskarIcon from "@/assets/Branch/namaskar.svg";

function BranchBanner() {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://sudhafertilitycentre.com/testing.sudhafertilitycentre.com/public/assets/img/banner/banner.png)",
      }}
    >
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left section - Heading and Review */}
            <div className="space-y-6">
              <div>
                <h1 className="md:text-1xl text-2xl  text-[#0B63E5] leading-tight flex items-center">
                  NAMASKARA BENGALURU
                  <Image
                    src={NamaskarIcon}
                    className="ms-1 mb-1 h-8 w-auto object-contain"
                    alt="namaskar"
                  />
                </h1>
                <h2 className="md:text-3xl text-2xl  text-black leading-tight mt-1">
                  Best Fertility Centre In
                  <span className="bg-white inline-block p-1 text-[#0B63E5] mt-2">
                    {" Ambattur"}
                  </span>
                </h2>
              </div>

              {/* Testimonial Card */}
              <div className="relative mt-8">
                <TestimonialCard />

                <button className="absolute -left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black rounded-full shadow-lg hover:bg-[#292828]">
                  <svg
                    className="w-6 h-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black rounded-full shadow-lg hover:bg-[#292828]">
                  <svg
                    className="w-6 h-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right section - Image */}
            <div className="h-full flex items-end justify-end">
              <div className="relative w-full aspect-square md:max-w-md">
                <Image
                  src={Banner}
                  alt="Mother and child laughing together"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Rating card positioned at the bottom portion of the image */}
                <div className="absolute bottom-16 lg:right-0 lg:-left-10">
                  <div className="bg-white rounded-lg shadow-lg p-2.5 inline-block">
                    <div className="flex flex-col gap-1">
                      <div className="text-sm font-semibold">
                        Sudha Hospital-Bangalore
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="bg-black  text-white px-1.5 py-0.5 rounded-sm text-xs font-medium">
                          4.7
                        </span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, index) => (
                            <svg
                              key={index}
                              className={`w-3 h-3 ${
                                index < 4 ? "text-yellow-400" : "text-gray-300"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">
                          (215 Reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BranchBanner;
