"use client";
import React, { useState, useEffect, useRef } from "react";
import Home, { faqs } from "@/app/Home/page";
import Image from "next/image";
import Test from "@/assets/Branch/test.png";
import Erode_pradeepa from "@/assets/Branch/Erode_pradeepa.webp";
import Doc from "@/assets/Branch/doc.jpeg";
import FacilitiePng from "@/assets/Branch/facilities.png";
import { FaGraduationCap } from "react-icons/fa";
import Gallery from "./gallery";
import Location from "./location";

function BranchBody() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track the active section
  const navRef = useRef(null); // Reference to the nav element
  const sectionRefs = useRef({}); // Create a ref for each section

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  // List of sections to highlight the active navigation item
  const sections = [
    "about",
    "facilities",
    "specialists",
    "gallery",
    "location",
    "faqs",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const navTop = navRef.current.getBoundingClientRect().top;
        setIsSticky(navTop <= 0); // Set sticky when nav reaches the top
      }

      // Highlight the active section on scroll
      let currentSection = "";
      sections.forEach((section) => {
        const sectionEl = sectionRefs.current[section];
        if (sectionEl) {
          const sectionTop = sectionEl.getBoundingClientRect().top;
          if (
            sectionTop <= window.innerHeight / 2 &&
            sectionTop >= -sectionEl.offsetHeight / 2
          ) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection); // Update active section
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleNavClick = (section) => {
    // Smooth scroll to the section
    sectionRefs.current[section].scrollIntoView({ behavior: "smooth" });
  };

  const list = [
    "IVF - In vitro fertilization",
    "IUI - Intrauterine insemination",
    "ICSI - Intracytoplasmic Sperm Injection",
    "PICSI - Physiological intracytoplasmic sperm injection",
    "IMSI - Intracytoplasmic morphologically selected sperm injection",
    "TESE - Testicular sperm extraction",
    "LAH - Laser-Assisted Hatching",
    "PRP - Platelet-Rich Plasma",
    "LSCS - Lower segment Cesarian section",
  ];

  const subList = [
    "800+ couples blessed with babies",
    "100+ elderly couples delivered healthy babies",
    "Free Medical camps conducted every month",
  ];

  const facilitiesList = [
    "State-of-the-art Laboratories for IVF Treatment",
    "Cutting-Edge 20 bed facility",
    "24/7 Access to Pharmacy",
    "Dedicated Labour Room for Childbirth",
    "Round-the-Clock care",
    "Experienced Multidisciplinary Team",
    "Comprehensive Diagnostic Services",
    "Fully equipped Neonatal Intensive Care Unit (NICU)",
  ];

  return (
    <>
      {/* Navigation section */}
      <header>
        <div className="container mx-auto text-center">
          <h1 className="text-2xl text-black  py-6" ref={navRef}>
            Where Parenthood Dreams Come To Life
          </h1>

          <nav
            className={`transition-all duration-300 ${
              isSticky
                ? "fixed top-20 left-0 right-0 bg-white shadow-md z-30"
                : "relative"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-x-3 md:space-x-8 py-4">
                {[
                  { name: "About", href: "about" },
                  { name: "Facilities", href: "facilities" },
                  { name: "Fertility Specialists", href: "specialists" },
                  { name: "Gallery", href: "gallery" },
                  { name: "Location", href: "location" },
                  { name: "FAQ's", href: "faqs" },
                ].map((item) => (
                  <a
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-base relative cursor-pointer ${
                      activeSection === item.href
                        ? "text-blue-600 font-medium border-b-2 border-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Sections with Refs for Active State */}
      <div ref={(el) => (sectionRefs.current["about"] = el)} id="about">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto pt-16 pb-5">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="content flex-1 p-4">
                <h2 className="text-[#0B63E5] text-xl sm:text-2xl">About</h2>
                <h1 className="mt-3 text-lg sm:text-2xl text-black  font-bold">
                  Sudha Fertility Center In Bangalore
                </h1>
                <p className="mt-3 text-base ">
                  Sudha Fertility Centre has launched its branch in Bangalore in
                  2021. With more than four decades of expertise in fertility
                  care, Sudha Fertility Centre has become a beacon of hope for
                  thousands of families to begin their parenthood journey. As a
                  leading fertility hospital in Bangalore, we pride ourselves on
                  delivering personalised care through advanced medical
                  technology making us a trusted name across the region.
                </p>
                <p className="mt-3 text-base ">
                  Our experienced team is committed to providing compassionate
                  support at every step in the journey, making us a trusted name
                  in the region for turning dreams of parenthood into reality.
                  At Sudha, our experienced team is dedicated to turning your
                  dreams of parenthood into reality. Comprehensive Fertility
                  Treatments in
                </p>

                <h2 className="mt-3 ">Branch Name:</h2>
                <p className="mt-3 text-base ">
                  At Sudha Fertility Centre, with experienced fertility
                  specialists in Bangalore, we offer a comprehensive range of
                  fertility treatments with world-class medical expertise and
                  compassionate care to support every patient in every step
                  through their fertility journey.
                </p>
              </div>
              <div className="image flex-1 mt-6 lg:mt-0">
                <Image
                  src={Test}
                  alt="branch"
                  className="lg:ms-9 object-cover w-full lg:w-[80%] rounded-lg"
                />
              </div>
            </div>

            <div className="px-2 mt-6">
              <p>
                As a leading IVF center in Bangalore, we specialise in offering
                various treatments such as
              </p>
              <ul className="mt-4 px-4 list-disc">
                {list.map((item, index) => (
                  <li className="text-base " key={index}>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-base ">
                All gynaec-related laparoscopic surgeries, as well as fertility
                preservation options under the guidance of the best fertility
                experts in Bangalore. With cutting-edge technology and
                state-of-the-art facilities, Sudha Fertility Centre has earned
                its reputation as a trusted and renowned IVF hospital in
                Bangalore offering hope and personalised solutions for couples
                trying so hard for pregnancy from young couples to older couples
                to make their family complete.
              </p>

              <h1 className="my-4 ">
                Stories of Hope and Success - A Trusted Name in Fertility Care:
              </h1>
              <p className="mt-3 text-base ">
                At Sudha Fertility Centre, we have helped countless families
                overcome complications in conception. Each family that walks
                through our doors with hope is treated with utmost care and it
                is our greatest joy to see parents hold their little one for the
                first time. Our success stories in Sudha Fertility Centre in
                Bangalore range from young couples to older individuals who want
                to start their journey in parenthood. With the best fertility
                experts in Bangalore, since 2021 we’ve achieved the following
              </p>

              <ul className="mt-4 px-4 list-disc">
                {subList.map((item, index) => (
                  <li className="text-base " key={index}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-base ">
                Our fertility center in Bangalore has a record of consistently
                bringing hope and joy with fertility treatments to the family
                facing complex fertility challenges, offering solutions that
                turn dreams into reality. Under the guidance of the best
                fertility and IVF specialists in Bangalore couples who have been
                longing for a baby for years have been blessed with babies and
                made their dream of parenthood come true with Sudha Fertility
                Centre.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={(el) => (sectionRefs.current["facilities"] = el)}
        id="facilities"
      >
        <div className="bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto pt-16 pb-5">
              <div className="facilities flex flex-col lg:flex-row gap-6">
                <div className="image w-full lg:w-1/3">
                  <Image
                    src={FacilitiePng}
                    alt="facility"
                    className="object-cover w-full h-auto"
                  />
                </div>

                <div className="content flex-1  px-4">
                  <h3 className="text-[#0B63E5] text-xl sm:text-2xl">
                    Facilities
                  </h3>
                  <h1 className="mt-3 text-lg sm:text-2xl  font-bold">
                    Our Best Facilities
                  </h1>
                  <p className="mt-3 ">
                    In our pursuit to help you in your parenthood dream, we
                    ensure that no stone is left unturned. Here’s why you should
                    choose us.
                  </p>
                  <ul className="mt-4 px-4 list-disc">
                    {facilitiesList.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add other sections similarly... */}
      {/* Fertility Specialists  */}
      <div
        ref={(el) => (sectionRefs.current["specialists"] = el)}
        id="specialists"
        className="mt-5"
      >
        <div className="">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto pt-16 pb-1">
              <div className="specialists flex flex-col">
                <div className="first flex flex-col lg:flex-row">
                  {/* Content Section */}
                  <div className="content flex-1 lg:w-1/2">
                    <div className="title">
                      <h1 className="text-2xl text-[#0B63E5]">
                        Fertility Specialists in Bangalore
                      </h1>
                      <h2 className="mt-2 text-3xl text-[#061C3D]  font-bold">
                        Chief Experts of Sudha Fertility Centre in Bangalore
                      </h2>
                      <h2 className="mt-4 text-lg sm:text-xl text-[#061C3D]">
                        Dr. S. Pradeepa
                      </h2>
                      <p className="mt-3 flex items-center">
                        <FaGraduationCap className="mr-2" />{" "}
                        {/* Adds margin to the right of the icon */}
                        <span>DGO, DNB(OG), MNAMS, ART</span>
                      </p>

                      <p className="mt-3">
                        The leading fertility expert in India, Dr. Pradeepa’s
                        commitment to excellence has gained her respect and
                        global acclaim. As the Vice President of Sudha Fertility
                        Centre, her intellectual and empathetic initiatives led
                        to the establishment of 19 branches within just 5 years.
                        Her selfless commitment and care sustain as a great
                        pillar in making Sudha Fertility Centre the best
                        fertility centre in fertility care.
                      </p>
                    </div>
                  </div>
                  {/* Image Section */}
                  <div className="image mt-6 lg:mt-0 lg:w-1/2">
                    <Image
                      src={Erode_pradeepa}
                      alt="Fertility Specialist"
                      className="rounded-xl lg:ms-5"
                    />
                  </div>
                </div>

                <div className="second mt-10 flex flex-col lg:flex-row">
                  <div className="image flex-1 mb-6 lg:mb-0">
                    <h1 className="text-[#061C3D] text-2xl px-5 mb-3 font-bold">
                      Our Fertility Specialist in Bangalore
                    </h1>
                    <div className="image p-4">
                      <Image
                        src={Doc}
                        alt="Fertility Specialist"
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="content flex-1 p-5 lg:mt-16">
                    <div className="p-2 mt-">
                      <h1 className="text-[#061C3D] text-2xl mb-3 font-bold">
                        Dr. T. Naga Tejaswi
                      </h1>
                      <p className="mt-3 flex items-center">
                        <FaGraduationCap className="mr-2" />
                        <span>MBBS.,MS(OBG), FRM - IVF CONSULTANT</span>
                      </p>
                      <p className="mt-3">
                        Dr. Naga Tejaswi T, a renowned consultant at Sudha
                        Fertility Centre, Bangalore, specializes in infertility
                        treatment, including procedures such as IUI, IVF,
                        laparoscopy, and hysteroscopy. With over 500 ART
                        procedures and a wealth of experience, Dr. Naga Tejaswi,
                        with 1.5 years of experience, is dedicated to providing
                        compassionate care and helping patients fulfill their
                        dreams of parenthood. Her expertise and interpersonal
                        skills make her an invaluable asset to the Sudha
                        Fertility Centre.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div ref={(el) => (sectionRefs.current["gallery"] = el)} id="gallery">
        <div className="container mx-auto sm:px-6 lg:px-8">
          <div className="max-w-max mx-auto  pb-5">
            <Gallery
              slides={[
                { image: Doc },
                { image: Doc },
                { image: Erode_pradeepa },
              ]}
            />
          </div>
        </div>
      </div>

      <div ref={(el) => (sectionRefs.current["location"] = el)} id="location">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto pt-8 pb-5">
            <Location />
          </div>
        </div>
      </div>


      {/* faqs */}

      <div ref={(el) => (sectionRefs.current["faqs"] = el)} id="faqs">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto pt-8 pb-5">
            <div className="max-w-4xl mx-auto text-center mb-10 lg:mb-14">
              <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-black">
                FAQ’s
              </h2>
            </div>
            {/* Accordion Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="hs-accordion  rounded-xl p-6">
                  <button
                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-black rounded-lg transition hover:text-black focus:outline-none focus:text-black "
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openIndex === index ? "true" : "false"}
                    aria-controls={`hs-collapse-${index}`}
                  >
                    {faq.question}
                    <svg
                      className={`hs-accordion-active:hidden block shrink-0 size-5 text-black group-hover:text-black${
                        openIndex === index ? "hidden" : "block"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    <svg
                      className={`hs-accordion-active:block hidden shrink-0 size-5 text-black group-hover:text-black${
                        openIndex === index ? "block" : "hidden"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>
                  <div
                    id={`hs-collapse-${index}`}
                    className={`hs-accordion-content ${
                      openIndex === index ? "block" : "hidden"
                    } w-full overflow-hidden transition-[height] duration-300`}
                    role="region"
                    aria-labelledby={`hs-collapse-${index}`}
                  >
                    <p className="text-black">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BranchBody;
