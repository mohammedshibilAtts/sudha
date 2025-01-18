"use client";
import Image from "next/image";
import React, { useState } from "react";
import Banner from "@/assets/Home/Banner.png";
import AppointmentForm from "@/components/Appointment/Appointment";
import happayStory from "@/assets/Home/happayStory.webp";
import happayStory2 from "@/assets/Home/happayStory2.webp";
import thumbnail from "@/assets/Home/dhanabagyam-thumbnail.webp";
import SplitCarousel from "@/components/CarouselCard/carouselCard";
import BabiesIcon from "@/assets/Home/1LBabies.svg";
import Users from "@/assets/Home/Users.svg";
import Smiley from "@/assets/Home/Smiley.svg";
import branches from "@/assets/Home/branches.svg";
import AchievementsBanner from "@/assets/Home/AchievementsBanner.webp";
import Counselled from "@/assets/Home/Counselled.svg";
import Surgeries from "@/assets/Home/Surgeries.svg";
import IUI_Babies from "@/assets/Home/IUI_Babies.svg";
import Women from "@/assets/Home/women.svg";
import IVF from "@/assets/Home/IVF.svg";
import ICSI from "@/assets/Home/ICSI.svg";
import Hysteroscopy from "@/assets/Home/Hysteroscopy.svg";
import Male from "@/assets/Home/Male.svg";
import Button from "@/components/button/button";
import JoinTeam from "@/components/join-our-team/join-our-team";

const slides = [
  {
    image: happayStory,
    title: "Card Title 1",
    content:
      "We have been married for 18 years and had no children. After consulting many doctors and visiting several hospitals, we became hopeless. Finally, my uncle referred us to the Sudha Fertility Centre, mentioning that almost 90% of patients had successfully conceived there. We decided to visit and met the fertility specialists, who gave us great hope and assured us that we would definitely get pregnant.",
    subContent:
      "Within 4 months of treatment, my life is now filled with hope and happiness—I am pregnant!",
    wish: "Thank you so much to the entire team at Sudha Fertility Centre.",
    name: "- Mrs Nagalakshi & Mr Anjineyalu.",
  },
  {
    image: happayStory2,
    title: "Card Title 2",
    content:
      "We approached Sudha Hospital for a regular pregnancy checkup.We’re incredibly grateful to Dr. Dhanabagyam and the team at Sudha Hospital for their exceptional support throughout our pregnancy journey. From regular scans to guidance at each checkup, they ensured we were informed and prepared. The team made sure to provide proper follow-up for a normal delivery. During labor, the doctors and nurses provided constant support, making a normal delivery possible. The entire staff was approachable and responsive. Highly recommend for both normal and test-tube pregnancies—trustworthy care that truly makes a difference.",
    name: "-Siva Ranjani..",
  },
];

  const faqs = [
    {
      question: 'Can I cancel at anytime?',
      answer:
        'Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.',
    },
    {
      question: 'My team has credits. How do we use them?',
      answer:
        'Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.',
    },
    {
      question: 'How does Preline\'s pricing work?',
      answer:
        'Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.',
    },
    {
      question: 'How secure is Preline?',
      answer:
        'Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.',
    },
    {
      question: 'Do you offer discounts?',
      answer:
        'We\'ve built in discounts at each tier for teams. The time has come to bring those ideas and plans to life.',
    },
    {
      question: 'What is your refund policy?',
      answer:
        'We offer refunds. We aim high at being focused on building relationships with our clients and community.',
    },
  ];


const achievements = [
  {
    number: "3.5L+",
    description: "Infertile Couples Counselled",
    icon: Counselled,
  },
  {
    number: "1L+",
    description: "Laparoscopic Surgeries",
    icon: Surgeries,
  },
  {
    number: "35K+",
    description: "IUI Babies",
    icon: IUI_Babies,
  },
  {
    number: "60K+",
    description: "IVF Babies",
    icon: Women,
  },
];

const TestimonialCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
          <span>V</span>
        </div>
        <div>
          <h3 className="font-medium">Valli Senna</h3>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-400 fill-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <span className="text-black text-sm ml-2">1 month ago</span>
          </div>
        </div>
      </div>
      <p className="mt-4 text-black text-sm">
        I have been married for 3 years and was trying to get pregnant, but all
        our efforts failed. Later, I heard about Sudha Fertility Centre,
        Bangalore and visited the centre five months back. The doctor explained
        all the treatments in a very polite and understandable way. The team at
        Bangalore Sudha treated me as their sister. I need to certainly thank
        the hospital staff who treated me with respect. Now I am pregnant and so
        happy to be a parent now. My entire family is celebrating Sudha
        Fertility Center, Bangalore for the great blessing.
      </p>
    </div>
  );
};

const FertilityClinicHero = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleThumbnailClick = () => {
    setShowVideo(true);
  };
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://sudhafertilitycentre.com/testing.sudhafertilitycentre.com/public/assets/img/banner/banner.png)",
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            {/* Split screen layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left section - Heading and Review */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl font-bold text-black leading-tight mb-4">
                    Turning Dreams of Parenthood{" "}
                    <span className="xl:block">
                      into Reality for{" "}
                      <span className="text-blue-600">40 Years</span>{" "}
                    </span>{" "}
                  </h1>
                  <p className="text-xl text-black italic">
                    "Cherish the Boon of Motherhood"
                  </p>
                </div>

                {/* Testimonial Card - Below the heading */}
                <div className="relative">
                  <TestimonialCard />

                  <button className="absolute -left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
                    <svg
                      className="w-6 h-6 text-black"
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

                  <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50">
                    <svg
                      className="w-6 h-6 text-black"
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
              <div className="relative w-full xl:w-[400px] max-w-sm mx-auto">
                {/* Adjust max-w-xl for smaller container */}
                <div className="relative pt-[100%] lg:pt-[105%] w-full">
                  {/* Reduced the padding-top percentage */}
                  <Image
                    src={Banner}
                    alt="Mother and child laughing together"
                    fill
                    className="object-cover rounded-lg absolute"
                    sizes="(max-width: 268px) 20vw, 20vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Happy Parenthood Stories from Sudha Parents */}

      <div className="main bg-[#F0F5FF]">
        <div className="container mx-auto pt-10  px-4 py-16 sm:px-6 lg:px-8">
          <div className="Heading flex justify-center text-4xl  text-black leading-tight mb-4">
            <h1>Happy Parenthood Stories from Sudha Parents</h1>
          </div>
          <div className="carousel ">
            <SplitCarousel slides={slides} />
          </div>
        </div>
      </div>

      {/* The Soul of Our Mission to Help Couples Achieve Parenthood */}
      <div className="main ">
        <div className="container mx-auto pt-10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="Heading flex justify-center text-4xl text-black leading-tight mb-4">
            <h1>The Soul of Our Mission to Help Couples Achieve Parenthood</h1>
          </div>
          <div className="content flex justify-center">
            <div className="video relative w-full flex justify-center">
              {/* Show thumbnail initially */}
              {!showVideo ? (
                <Image
                  src={thumbnail} // Replace with your thumbnail image URL
                  alt="Thumbnail"
                  className="cursor-pointer w-full lg:w-3/4 h-96 object-cover rounded-lg"
                  onClick={handleThumbnailClick}
                />
              ) : (
                // Show iframe after thumbnail click
                <iframe
                  src="https://www.youtube.com/embed/E6aWzjaivps?si=c84XrMIQzG7TPsd7"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="w-full lg:w-3/4 h-96"
                  title="YouTube video"
                ></iframe>
              )}
            </div>
          </div>

          {/* Text content below the video */}
          <div className="content mt-8 text-center xl:px-40">
            <p className="text-black text-md">
              The journey of Sudha Fertility Centre began with a heartfelt
              mission to help couples achieve parenthood by empathizing with the
              pain and emotions they face daily amid societal pressures. Dr. S.
              Dhanabagyam, the founder of Sudha Fertility Centre, shares her
              vision behind our unwavering commitment.
            </p>
          </div>
        </div>
      </div>

      {/* Why choose us? */}

      <div className="main">
        <div className="container mx-auto pt-10 px-4 py-16 sm:px-6 xl:px-32">
          <div className="Heading flex justify-center text-4xl text-black leading-tight mb-4">
            <h1>Why choose us? </h1>
          </div>

          <div>
            <div className="tiles grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:px-16 mt-9">
              {/* Tile 1 */}
              <div className="tiles-1 bg-[#FEEDFA] p-4 rounded-lg shadow-md">
                <div className="main-tail flex items-center">
                  <div className="icon mr-4">
                    <Image
                      src={BabiesIcon}
                      alt="icon"
                      className="w-12 h-12 rounded-full"
                    />
                  </div>
                  <div className="content">
                    <div className="title">
                      <h1 className="text-xl font-semibold">1L+ Babies</h1>
                    </div>
                    <div className="des">
                      <p className="text-black">Healthy Babies</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tile 2 */}
              <div className="tiles-1 bg-[#E7F5E8] p-4 rounded-lg shadow-md">
                <div className="main-tail flex items-center">
                  <div className="icon mr-4">
                    <Image
                      src={Users}
                      alt="icon"
                      className="w-12 h-12 rounded-full"
                    />
                  </div>
                  <div className="content">
                    <div className="title">
                      <h1 className="text-xl font-semibold">40+</h1>
                    </div>
                    <div className="des">
                      <p className="text-black">Years of Experience</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tile 3 */}
              <div className="tiles-1 bg-[#FFF9EE] p-4 rounded-lg shadow-md">
                <div className="main-tail flex items-center">
                  <div className="icon mr-4">
                    <Image
                      src={Smiley}
                      alt="icon"
                      className="w-12 h-12 rounded-full"
                    />
                  </div>
                  <div className="content">
                    <div className="title">
                      <h1 className="text-xl font-semibold">100+</h1>
                    </div>
                    <div className="des">
                      <p className="text-black">
                        Eminent fertility specialists
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tile 4 */}
              <div className="tiles-1 bg-[#F1EBFF] p-4 rounded-lg shadow-md">
                <div className="main-tail flex items-center">
                  <div className="icon mr-4">
                    <Image src={branches} alt="icon" className="w-12 h-12 " />
                  </div>
                  <div className="content">
                    <div className="title">
                      <h1 className="text-xl font-semibold">20+</h1>
                    </div>
                    <div className="des">
                      <p className="text-black">Branches</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="detail xl:px-16 mt-2">
              <div className="1L-babies pt-6">
                <div className="title">
                  <h1 className="text-[#173366] text-2xl font-bold">
                    1 Lakh+ Healthy Babies
                  </h1>
                  <p className="text-md mt-2 ">
                    As a leading fertility hospital in South India, Sudha
                    Fertility Centre serves as a beacon of hope and brings
                    happiness to families. With experienced fertility doctors
                    and world-class fertility treatments, Sudha Fertility Centre
                    has delivered 95k+ healthy babies.   We are identified as a
                    renowned IVF hospital in South India offering personalized
                    solutions and treatments for couples trying hard for
                    pregnancy from young couples to older couples to make their
                    family complete.  
                  </p>
                </div>
              </div>

              <div className="Excellence  pt-6">
                <div className="title">
                  <h1 className="text-[#173366] text-2xl font-bold">
                    40+ Years of Excellence 
                  </h1>
                  <p className="text-md mt-2">
                    Sudha Fertility Centre is known as an icon in fertility care
                    with more than 4 decades of excellence in making thousands
                    of parents' dreams into reality. With experienced Fertility
                    specialists, we offer you the best treatments personalized
                    according to your needs and medical history.   As the
                    leading IVF Centre in South India, we conduct free medical
                    camps throughout South India every month in different cities
                    make fertility treatments accessible to everyone, and help
                    thousands of families begin their parenthood journey.
                  </p>
                </div>
              </div>

              <div className="Experts pt-6">
                <div className="title">
                  <h1 className="text-[#173366] text-2xl font-bold">
                    100+ Fertility Experts
                  </h1>
                  <p className="text-md mt-2">
                    With more than hundreds of fertility experts, we offer you
                    comprehensive and specialized treatments. Our experienced
                    IVF specialists and IUI Doctors will guide you throughout
                    your parenthood journey. With the support and care of our
                    Fertility specialists, thousands of happy parents have
                    welcomed beautiful and healthy babies into their families.
                  </p>
                </div>
              </div>

              <div className="Branches  pt-6">
                <div className="title">
                  <h1 className="text-[#173366] text-2xl font-bold">
                    20+ Branches 
                  </h1>
                  <p className="text-md mt-2">
                    The parenthood journey is now made easily accessible to 20+
                    cities across South India and Sri Lanka, especially in the
                    metropolitan cities where the majority of fertility
                    complications arise. Sudha Fertility Centre is located in
                    the heart of the cities making it easy for the parents
                    longing for a baby to start their journey in a few steps.
                    All the branches are equipped with cutting-edge
                    technologies, state-of-the-art facilities, experienced
                    Fertility specialists, IVF experts, and well-equipped
                    laboratories.  
                  </p>
                </div>
              </div>

              <div className="Treatments  pt-6">
                <div className="title">
                  <h1 className="text-[#173366] text-2xl font-bold">
                    World-Class Fertility Treatments 
                  </h1>
                  <p className="text-md mt-2">
                    Understanding the emotional trauma of the couple longing for
                    a baby, Sudha Fertility Centre offers a wide range of
                    world-class fertility treatments and help you achieve your
                    dream of holding your baby.  As a leading fertility Centre
                    in South India, with experienced lab technicians and
                    fertility specialists, we specialize in offering various
                    treatments such as, In vitro fertilization (IVF),
                    Intrauterine Insemination (IUI) Intracytoplasmic Sperm
                    Injection (ICSI), Laparoscopy, Hysteroscopy, Male
                    Infertility, Laser Assisted Hatching, Blastocyst Culture and
                    Transfer, Assisted Reproduction Treatments, Female
                    Infertility.  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}

      <div className="bg-[#F0F5FF]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-32">
          <div className="relative ">
            {" "}
            {/* Added minimum height */}
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={AchievementsBanner}
                alt="Achievements Banner "
                className="w-full h-full object-cover rounded-xl"
                priority
              />
            </div>
            {/* Content Overlay */}
            <div className="relative z-10 ">
              {" "}
              {/* Added z-index to ensure content appears above image */}
              <div className="flex flex-col md:flex-row items-center p-8 ">
                {/* Left side with title */}
                <div className="md:w-2/4 mb-8 md:mb-0">
                  <h2 className="text-3xl font-bold text-black mb-4 text-center">
                    Our Achievements
                  </h2>
                  <p className="text-black text-center">
                    Driven by the happiness of thousands of families.
                  </p>
                </div>

                {/* Right side with statistics */}
                <div className="md:w-2/3 ">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="p-2 ">
                          <Image
                            className="rounded-xl"
                            src={achievement.icon}
                            alt="Achievements"
                          />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-black">
                            {achievement.number}
                          </div>
                          <div className="text-sm text-black">
                            {achievement.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Treatments */}

      <div className="main ">
        <div className="container mx-auto pt-10  px-4 py-16 sm:px-6 lg:px-8">
          <div className="Heading flex justify-center text-4xl  text-black leading-tight mb-4">
            <h1>Treatments</h1>
          </div>
          <div className="content xl:px-64 text-center">
            <h1 className="text-black">
              Begin your parenthood journey guided by the best fertility
              specialists in India with world-class fertility treatments. With
              decades of expertise and excellence, we empathize with the
              emotions of couples longing for a baby and provide you with the
              best quality treatments with personalized care and support.
            </h1>
          </div>

          <div className="card-data pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {/* Card 1 */}
            <div className="relative card-1 border p-6 rounded-lg max-w-xs mx-auto">
              <div className="icon flex justify-center mt-4">
                <Image src={IVF} alt="IVF Icon" />
              </div>
              <div className="title text-center mt-4">
                <h1 className="text-xl font-semibold text-black">IVF</h1>
              </div>
              <div className="desc text-center mt-3 pb-9">
                <p className="text-black">
                  In vitro fertilization (IVF) is one of the well-known and most
                  successful fertility treatments preferred for couples with
                  complicated fertility problems.
                </p>
              </div>
              <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 mb-4">
                <Button title={"Read More"} />
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative card-2 border p-6 rounded-lg max-w-xs mx-auto">
              <div className="icon flex justify-center mt-4">
                <Image src={ICSI} alt="ICSI Icon" />
              </div>
              <div className="title text-center mt-4">
                <h1 className="text-xl font-semibold text-black">ICSI</h1>
              </div>
              <div className="desc text-center mt-3 pb-9">
                <p className="text-black">
                  Intracytoplasmic Sperm Injection (ICSI) is a type of assisted
                  reproductive technology that involves injecting the male sperm
                  directly into the egg’s cytoplasm.
                </p>
              </div>
              <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 mb-4">
                <Button title={"Read More"} />
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative card-3 border p-6 rounded-lg max-w-xs mx-auto">
              <div className="icon flex justify-center mt-4">
                <Image src={IVF} alt="Laparoscopic Icon" />
              </div>
              <div className="title text-center mt-4">
                <h1 className="text-xl font-semibold text-black">Laparoscopic</h1>
              </div>
              <div className="desc text-center mt-3 pb-9">
                <p className="text-black">
                  Laparoscopy is a minimally invasive procedure performed to
                  examine the stomach or pelvis. In this process, a thin lighted
                  tube with a video camera is inserted with a tiny incision.
                </p>
              </div>
              <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 mb-4">
                <Button title={"Read More"} />
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative card-4 border p-6 rounded-lg max-w-xs mx-auto">
              <div className="icon flex justify-center mt-4">
                <Image src={Hysteroscopy} alt="Hysteroscopy Icon" />
              </div>
              <div className="title text-center mt-4">
                <h1 className="text-xl font-semibold text-black">Hysteroscopy</h1>
              </div>
              <div className="desc text-center mt-3 pb-9">
                <p className="text-black">
                  Hysteroscopy is a procedure used to examine the inside of the
                  uterus.
                </p>
              </div>
              <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 mb-4">
                <Button title={"Read More"} />
              </div>
            </div>

            {/* Card 5 */}
            <div className="relative card-5 border p-6 rounded-lg max-w-xs mx-auto">
              <div className="icon flex justify-center mt-4">
                <Image src={Male} alt="Male Infertility Icon" />
              </div>
              <div className="title text-center mt-4">
                <h1 className="text-xl font-semibold text-black">Male Infertility</h1>
              </div>
              <div className="desc text-center mt-3 pb-9">
                <p className="text-black">
                  Male infertility involves the inability of a man to fertilize
                  an egg.
                </p>
              </div>
              <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 mb-4">
                <Button title={"Read More"} />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Book your Free Appointment */}

      <div className="main bg-[#F0F5FF]">
        <div className="">
          <AppointmentForm/>
        </div>
      </div>

      <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* Title */}
  <div className="max-w-4xl mx-auto text-center mb-10 lg:mb-14">
    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-black">
      Your questions, answered
    </h2>
    <p className="mt-1 text-black">
      Answers to the most frequently asked questions.
    </p>
  </div>
  {/* End Title */}

  <div className="max-w-4xl mx-auto">
    {/* Accordion Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6"
        >
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



      <div className="main  container mx-auto mb-8 xl:px-32 hidden md:block">
        <div className="">
          <JoinTeam/>
        </div>
      </div>            
    </>
  );
};

export default FertilityClinicHero;
