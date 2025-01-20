"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState('');
  const [activeMobileBranch, setActiveMobileBranch] = useState('');
  const navRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setActiveMobileSubmenu('');
        setActiveMobileBranch('');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const treatments = [
    "IVF Treatment",
    "IUI Treatment",
    "ICSI Treatment",
    "Laparoscopy",
    "Hysteroscopy",
    "Male Infertility",
    "PGD Treatment"
  ];

  const branches = [
    {
      city: "Bangalore",
      locations: ["Jayanagar", "Whitefield", "Electronic City"]
    },
    {
      city: "Chennai",
      locations: ["Anna Nagar", "T Nagar", "OMR"]
    },
    {
      city: "Hyderabad",
      locations: ["Banjara Hills", "Jubilee Hills", "HITEC City"]
    },
    {
      city: "Mumbai",
      locations: ["Andheri West", "Bandra", "Powai"]
    },
    {
      city: "Delhi",
      locations: ["South Extension", "Dwarka", "Rohini"]
    }
  ];

  const toggleMobileSubmenu = (menu) => {
    if (menu !== activeMobileSubmenu) {
      setActiveMobileBranch(''); // Reset active branch when changing main menu
    }
    setActiveMobileSubmenu(activeMobileSubmenu === menu ? '' : menu);
  };

  const toggleMobileBranch = (city) => {
    setActiveMobileBranch(activeMobileBranch === city ? '' : city);
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <nav ref={navRef} className="w-full mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section - Left */}
          <div className="flex-shrink-0">
            <Image 
              src="https://sudhafertilitycentre.com/testing.sudhafertilitycentre.com/public/assets/img/logo.svg" 
              width={200} 
              height={80} 
              alt="Sudha Fertility Centre" 
              className="h-12 w-auto"
            />
          </div>

          {/* Mobile menu button */}
          <button 
            type="button" 
            className="xl:hidden text-black inline-flex items-center justify-center p-2 rounded-md  hover:text-[#173366] focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Navigation Items - Center */}
          <div className="hidden xl:flex xl:items-center xl:justify-center flex-1 mx-8">
            <div className="flex items-center space-x-7">
              <Link href="/" className={'hover:text-[#173366]  font-medium'}>Home</Link>
              <Link href="/about" className=" hover:text-[#173366] font-medium">About Us</Link>
              
              {/* Treatments Dropdown */}
              <div className="relative group">
                <button className=" group-hover:text-[#173366] font-medium inline-flex items-center">
                  Treatments
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    {treatments.map((treatment, index) => (
                      <Link
                        key={index}
                        href={`/treatments/${treatment.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 text-sm  hover:bg-blue-50 hover:text-[#173366]"
                      >
                        {treatment}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Branches Dropdown */}
              <div className="relative group">
                <button className=" group-hover:text-[#173366] font-medium inline-flex items-center">
                  Branches
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2">
                    {branches.map((branch, index) => (
                      <div key={index} className="group/sub relative">
                        <Link
                          href={`/branches/${branch.city.toLowerCase()}`}
                          className="block px-4 py-2 text-sm  hover:bg-blue-50 hover:text-[#173366] flex justify-between items-center"
                        >
                          {branch.city}
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                        <div className="absolute left-full top-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 -ml-2">
                          <div className="py-2">
                            {branch.locations.map((location, locationIndex) => (
                              <Link
                                key={locationIndex}
                                href={`/branches/${branch.city.toLowerCase()}/${location.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block px-4 py-2 text-sm  hover:bg-blue-50 hover:text-[#173366]"
                              >
                                {location}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/gallery" className=" hover:text-[#173366] font-medium">Gallery</Link>
              <Link href="/international" className=" hover:text-[#173366] font-medium">International Patients</Link>
              <Link href="/contact" className=" hover:text-[#173366] font-medium">Contact Us</Link>
            </div>
          </div>

          {/* Book Appointment Button - Right */}
          <div className="hidden xl:block flex-shrink-0">
            <Link href="/book-appointment" className="inline-flex items-center justify-center px-4 py-2 border border-[#173366] rounded-md text-[#173366] bg-white hover:bg-[#173366] hover:text-white font-medium transition-colors whitespace-nowrap">
              BOOK A FREE APPOINTMENT
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`xl:hidden fixed inset-0 top-20 bg-white transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="h-full overflow-y-auto pb-20">
            <div className="flex flex-col space-y-4 px-4 pt-4">
              <Link href="/" className="text-[#173366] font-medium py-2">Home</Link>
              <Link href="/about" className=" hover:text-[#173366] font-medium py-2">About Us</Link>
              
              {/* Mobile Treatments */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleMobileSubmenu('treatments')}
                  className="flex justify-between items-center w-full py-2  font-medium"
                >
                  Treatments
                  <svg className={`h-4 w-4 transform transition-transform ${activeMobileSubmenu === 'treatments' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`pl-4 space-y-2 transition-all duration-300 ${activeMobileSubmenu === 'treatments' ? 'max-h-96 py-2' : 'max-h-0 overflow-hidden'}`}>
                  {treatments.map((treatment, index) => (
                    <Link
                      key={index}
                      href={`/treatments/${treatment.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block py-2 text-black hover:text-[#173366] text-sm"
                    >
                      {treatment}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Branches */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleMobileSubmenu('branches')}
                  className="flex justify-between items-center w-full py-2  font-medium"
                >
                  Branches
                  <svg className={`h-4 w-4 transform transition-transform ${activeMobileSubmenu === 'branches' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`pl-4 space-y-2 transition-all duration-300 ${activeMobileSubmenu === 'branches' ? 'max-h-screen py-2' : 'max-h-0 overflow-hidden'}`}>
                  {branches.map((branch, index) => (
                    <div key={index} className="border-gray-200">
                      <button
                        onClick={() => toggleMobileBranch(branch.city)}
                        className="flex justify-between items-center w-full py-2  font-medium text-sm"
                      >
                        {branch.city}
                        <svg className={`h-4 w-4 transform transition-transform ${activeMobileBranch === branch.city ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className={`pl-4 space-y-2 transition-all duration-300 ${activeMobileBranch === branch.city ? 'max-h-48 py-2' : 'max-h-0 overflow-hidden'}`}>
                        {branch.locations.map((location, locationIndex) => (
                          <Link
                            key={locationIndex}
                            href={`/branches/${branch.city.toLowerCase()}/${location.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block py-2 text-black hover:text-[#173366] text-sm"
                          >
                            {location}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/gallery" className=" hover:text-[#173366] font-medium py-2">Gallery</Link>
              <Link href="/international" className=" hover:text-[#173366] font-medium py-2">International Patients</Link>
              <Link href="/contact" className=" hover:text-[#173366] font-medium py-2">Contact Us</Link>
              
              <Link href="/book-appointment" className="inline-flex items-center justify-center px-4 py-2 border border-[#173366] rounded-md text-[#173366] bg-white hover:bg-[#173366] hover:text-white font-medium transition-colors">
                BOOK A FREE APPOINTMENT
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;