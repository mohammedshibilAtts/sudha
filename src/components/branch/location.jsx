import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Location = () => {
  return (
    <div className="max-w-7xl mx-auto pb-5">
      <h2 className="text-3xl font-bold text-center mb-12 text-black">Locations</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-2">
        {/* Map Section - Takes up 3 columns */}
        <div className="lg:col-span-4 w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8358.193523371205!2d80.148121!3d13.12139!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263175ec024d3%3A0x26114c44a7aad14b!2sSudha%20Fertility%20Centre%20-%20Ambattur!5e1!3m2!1sen!2sin!4v1737379519271!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact Information Section - Takes up 1 column */}
        <div className="lg:col-span-3 bg-[#173366] text-white p-6 rounded-lg shadow-lg flex justify-center items-center">
          <div className="space-y-8 w-full max-w-md ">
            {/* Phone Number */}
            <div className="flex items-start space-x-4 ">
              <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className=''>
                <p className="text-sm text-white">PHONE NUMBER</p>
                <p className="text-base text-white">+91 8270417007</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-white">EMAIL US</p>
                <p className="text-base break-words text-white">care@sudhahospitals.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-white">ADDRESS</p>
                <p className="text-base text-white">
                  Door no - 1534, 21st Main, 7th Cross Rd, 1st Sector, HSR Layout,
                  Bengaluru, Karnataka 560102
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
