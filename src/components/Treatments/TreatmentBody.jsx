"use client";
import Image from "next/image";
import React, { useState } from "react";
import IVF from "@/assets/Treatment/IVF/IVF.webp";
import IVF_Fecility from "@/assets/Treatment/IVF/IVF-Fecility.webp";
import Why_choice from "@/assets/Treatment/why-choice.webp";
import { FaRegHandPointRight } from "react-icons/fa";

const Fertility_CentreData = [
  {
    title: "Initial Consultation",
    description:
      "The IVF experts in Sudha Fertility Centre will review your medical history, examine you with necessary tests, and discuss treatment options. This step is vital to tailor a personalised treatment plan for a successful pregnancy.",
  },
  {
    title: "Super Ovulation or Super Stimulation",
    description:
      "After setting the treatment plan, the first step in the IVF process is ovarian stimulation. In this process, the patient is prescribed certain medications to increase the production of eggs. During this period, the IVF doctors in Sudha will monitor you via ultrasounds and blood tests for positive results.",
  },
  {
    title: "Egg Retrieval and Sperm Collection",
    description:
      "The next process involves a minor surgical procedure by the fertility specialists in Sudha to retrieve the eggs under sedation. Simultaneously, sperm samples will be collected from the male.",
  },
  {
    title: "Fertilization and Embryo Culture",
    description:
      "After retrieving the eggs and sperm, they will be fertilized in the laboratory by the IVF experts in Sudha. After fertilization, the eggs grow as embryos and the fertility doctors will monitor to identify the risk of passing genetic disorders to the baby.",
  },
  {
    title: "Embryo Transfer",
    description:
      "After proper monitoring, the healthy embryos will be placed into the woman’s womb.",
  },
];

const When_or_Why = [
  " Elderly women above 40, as they produce less quality eggs or don’t produce eggs.",
  " Individuals who had their ovaries removed.",
  " Women with blocked or damaged fallopian tubes.",
  "Men with less sperm count, motility, or abnormal sperm shape.",
  "Couple who want to be parents after menopause",
  "For couples who have a history of failed fertility treatments.",
  "Couples with genetic disorders, to prevent the transmission of genetic diseases.",
];

const prepare_For_IVF = [
  "Focus on a balanced and nutritious diet, moderate exercise, and avoid alcohol and tobacco to support your body for IVF. consultation from 8.00 AM to 6.00 PM",
  "Ensure conditions like PCOS, diabetes, or thyroid issues are under control, as these can impact IVF success.",
  "Include folic acid and prenatal vitamins to boost reproductive health and reduce birth risks.",
  "IVF can be an emotional journey. Communicate with your partner and your closed ones to help manage stress.",
  "Follow the prescribed medications properly and make sure you don’t skip regular checkups.",
  "Engage yourself in activities like yoga, meditation, or other relaxation techniques to maintain mental and physical well-being.",
  "ABI",
];

const dos = [
  "Drink plenty of water to keep your body hydrated",
  "Focus on nutrient-dense foods rich in vitamins, minerals, and protein to support reproductive health.",
  "Seek emotional support as IVF can be an emotional journey.",
  "Prioritise sleep and rest. Aim for at least 7 hours of quality sleep.",
  "Engage in gentle activities like walking or stretching.",
];

const dont = [
  "Avoid heavy exercises",
  "Restrict from alcohol and caffeine intake.",
  "Avoid long travel to reduce body stress.",
  "Never skip the prescribed medications or intake unprescribed ones.",
  "Avoid exposure to toxins",
];

const faqs = [
  {
    question: "Can I cancel at anytime?",
    answer:
      "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.",
  },
  {
    question: "My team has credits. How do we use them?",
    answer:
      "Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.",
  },
  {
    question: "How does Preline's pricing work?",
    answer:
      "Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.",
  },
  {
    question: "How secure is Preline?",
    answer:
      "Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.",
  },
  {
    question: "Do you offer discounts?",
    answer:
      "We've built in discounts at each tier for teams. The time has come to bring those ideas and plans to life.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer refunds. We aim high at being focused on building relationships with our clients and community.",
  },
];

function TreatmentBody() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 lg:mt-7 sm:px-6 lg:px-8 h-full">
          {/* About IVF Section */}
          <div className="aboutTreatment flex flex-col-reverse md:flex-row">
            {/* Image Section */}
            <div className="image  mt-12 lg:mb-0 md:w-2/5 lg:w-1/3">
              <Image
                src={IVF}
                alt="Treatment-Image"
                width={600}
                height={400}
                layout="responsive"
                className="rounded-lg "
              />
            </div>

            {/* Content Section */}
            <div className="content flex-1 lg:ms-3">
              <div className="title mt-7 p-2">
                <h1 className="text-[#0B63E5] text-xl sm:text-2xl font-bold">
                  About IVF
                </h1>
              </div>
              <div className="content p-2 mt-4">
                <p className=" leading-relaxed">
                  In vitro fertilization (IVF) is one of the well-known and most
                  successful fertility treatments preferred for couples with
                  complicated fertility problems. IVF treatment is one of the
                  assisted reproductive technology types chosen by millions of
                  couples worldwide with fertility problems. With a 90% success
                  rate around India, IVF is known as a successful fertility
                  treatment. For a few couples, the first IVF cycle might be
                  successful, for some couples, it may take more than one cycle.
                  This treatment involves several medical processes from initial
                  consultation to embryo transfer.
                </p>
              </div>
            </div>
          </div>

          {/* Fertility Centre Treatment */}

          <div className="FertilityTreatment flex  flex-col-reverse md:flex-row-reverse mt-9">
            {/* Image Section */}
            <div className="image md:mt-12 lg:mb-0 md:w-2/5 lg:w-1/3 flex justify-center items-center md:justify-start md:items-start">
              <Image
                src={IVF_Fecility}
                alt="Treatment-Image"
                width={600}
                height={400}
                layout="responsive"
                className="rounded-lg"
              />
            </div>

            {/* Content Section */}
            <div className="content flex-1 lg:ms-3">
              <div className="title mt-7 p-2">
                <h1 className="text-black text-xl sm:text-2xl md:text-3xl font-bold">
                  IVF in Sudha Fertility Centre:
                </h1>
              </div>
              <div className="content p-2 mt-4">
                {Fertility_CentreData.map((data, index) => (
                  <div key={index} className="mt-3">
                    <h2 className=" text-xl sm:text-1xl font-semibold text-gray-800 mt-3">
                      {data.title}
                    </h2>
                    <p className="mt-2  leading-relaxed text-gray-600">
                      {data.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why choose us for IVF? */}
          <div className="aboutTreatment mt-7">
            <div className="title mt-5">
              <h1 className=" text-xl sm:text-2xl font-bold text-center">
                {" "}
                Why choose us for IVF?{" "}
              </h1>
              <h2 className="sm:text-1xl font-bold text-center">
                With IVF, Your Little Miracle is Just Around the Corner.
              </h2>
            </div>
            <div className="flex flex-col-reverse md:flex-row lg:mt-6">
              {/* Image Section */}
              <div className="image mb-8 lg:mb-0 flex-1 lg:w-1/3 flex justify-center items-center">
                <Image
                  src={Why_choice}
                  alt="Treatment-Image"
                  width={600}
                  height={400}
                  layout="responsive"
                  className="rounded-lg"
                />
              </div>

              {/* Content Section */}
              <div className="content flex-1 lg:ms-3">
                <div className="title mt-7 p-2"></div>
                <div className="content p-2 lg:mt-4">
                  <p className=" leading-relaxed">
                    As a leading IVF center in India, Sudha Fertility Centre has
                    a success rate of 85% in IVF treatments. With over 4 decades
                    of expertise in fertility care, we have delivered thousands
                    of healthy IVF babies. With the best IVF doctors in India,
                    we provide you the exceptional IVF treatments in India,
                    guiding you through every step of your parenthood journey
                    and helping you achieve your dream. We offer personalised
                    counselling and compassionate care from consultation to
                    delivery. The dedication of the IVF doctors in Sudha
                    Fertility Centre prioritising every step to maximize the
                    chances of a successful healthy pregnancy and also focusing
                    on the health of both mother and baby retains us as the best
                    IVF hospital in India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* When and Why Choose IVF? */}
          <div className="why-choose mt-6 mb-6">
            <div className="title">
              <h1 className="text-xl sm:text-2xl font-bold text-center">
                {" "}
                Why choose us for IVF?{" "}
              </h1>
            </div>
            <div className="points ">
              {When_or_Why.map((item, index) => (
                <div className="flex items-center space-x-3 mt-3" key={index}>
                  <div className="icon">
                    <FaRegHandPointRight className="text-xl text-[#2C416C]" />
                  </div>
                  <div className="content">
                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How to prepare for IVF? */}
      <div className="bg-[#F0F5FF] py-5">
        <div className="container mx-auto relative h-full">
          <div className="max-w-7xl mx-auto px-4 pb-5 sm:px-6 lg:px-8 h-full">
            <div className="why-choose mt-5 ">
              <div className="title">
                <h1 className="text-xl sm:text-2xl font-bold text-center">
                  {" "}
                  How to prepare for IVF?{" "}
                </h1>
              </div>
              <div className="points mt-11">
                {prepare_For_IVF.map((item, index) => (
                  <div className="flex items-center space-x-3 mt-5" key={index}>
                    <div className="icon">
                      <FaRegHandPointRight className="text-xl text-[#2C416C]" />
                    </div>
                    <div className="content">
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Do’s & Don’ts During IVF. */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-8 pb-5 sm:px-6 lg:px-8 h-full">
          <div className="title">
            <h1 className="text-xl sm:text-2xl font-bold text-center">
              Do’s & Don’ts During IVF
            </h1>
          </div>
          <div className="main-do's grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
            <div className="left flex-1 p-4">
              <h1 className="mb-3 text-lg sm:text-xl font-bold ]">Do’s</h1>
              {dos.map((item, index) => (
                <div className="flex items-center space-x-3 mt-3" key={index}>
                  <div className="icon">
                    <FaRegHandPointRight className="text-xl text-[#2C416C]" />
                  </div>
                  <div className="content">
                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="right flex-1 p-4">
              <h1 className="mb-3 text-lg sm:text-xl font-bold ]">Don’ts</h1>
              {dont.map((item, index) => (
                <div className="flex items-center space-x-3 mt-3" key={index}>
                  <div className="icon">
                    <FaRegHandPointRight className="text-xl text-[#2C416C]" />
                  </div>
                  <div className="content">
                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
}

export default TreatmentBody;
