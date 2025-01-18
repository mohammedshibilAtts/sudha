import React from "react";
import Insta from "@/assets/Home/insta.svg";
import Linkedin from "@/assets/Home/linkedin.svg";
import youtube from "@/assets/Home/youtube.svg";
import x from "@/assets/Home/x.svg";
import fb from "@/assets/Home/fb.svg";
import { icons } from "lucide-react";
import Image from "next/image";
const AppointmentForm = () => {
  return (
    <div
      className="py-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://sudhafertilitycentre.com/testing.sudhafertilitycentre.com/public/assets/img/Contact.png)",
        position: "relative",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-[32px] font-bold text-black mb-2">
                Book your Free Appointment
              </h2>
              <p className="text-black text-lg">
                Take the first step towards your parenthood journey.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path
                      d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-black uppercase tracking-wider">
                    CALL
                  </p>
                  <p className="text-black">9874651230</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-black uppercase tracking-wider">
                    EMAIL US
                  </p>
                  <p className="text-black">info@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-black">Connect with us:</p>
              <div className="flex gap-3">
                {[
                  { name: "facebook", icon: fb },
                  { name: "twitter", icon: x },
                  { name: "linkedin", icon: Linkedin },
                  { name: "youtube", icon: youtube },
                  { name: "instagram", icon: Insta },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={`https://${social.name}.com`}
                    className="w-12 h-12 rounded-full flex cursor-pointer items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label={social.name}
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      className="w-full h-full object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="rounded-3xl shadow-xl p-8 bg-white z-30 relative">
            <h3 className="text-xl font-semibold text-black mb-8">
              Ready to Start Your Journey to Meet Your Little One?
            </h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-black mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-1 focus:ring-gray-300 focus:border-gray-300 outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm text-black mb-1"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  placeholder="Enter your Mobile Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-1 focus:ring-gray-300 focus:border-gray-300 outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-sm text-black mb-1"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="Enter your Location"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-1 focus:ring-gray-300 focus:border-gray-300 outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="branch"
                  className="block text-sm text-black mb-1"
                >
                  Select Branch
                </label>
                <div className="relative">
                  <select
                    id="branch"
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-1 focus:ring-gray-300 focus:border-gray-300 outline-none appearance-none text-black"
                  >
                    <option value="" disabled>
                      Select Branch
                    </option>
                    <option value="branch1">Branch 1</option>
                    <option value="branch2">Branch 2</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1e3a8a] text-white py-3 px-6 rounded-lg hover:bg-blue-900 transition-colors flex items-center justify-center gap-2 mt-4"
              >
                Book A Free Appointment
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
