import React, { useState } from "react";
import classNames from "classnames";
import {
  useScroll,
  motion,
  useTransform,
} from 'framer-motion';

const ServicesSection = (props) => {
  const { className } = props;

  const [activeIndex, setActiveIndex] = useState(0); // Tracks active menu item or accordion

  const { scrollY } = useScroll();
  const y0 = useTransform(scrollY, [0, 2000], [0, 200]);
  const y01 = useTransform(scrollY, [0, 2000], [0, 100]);
  const y1 = useTransform(scrollY, [0, 2000], [0, 70]);
  const y2 = useTransform(scrollY, [0, 2000], [0, 20]);
  const y3 = useTransform(scrollY, [0, 2000], [0, 50]); 

  // console.log(scrollY.get());

  const serviceItem = (contentTitle, contentText, customClasses, y) => (
    <motion.div 
      className={classNames(
        "services-section__service__item card-style h-fit", 
        customClasses,
      )}
      style={{ y: y }}
    >
      <p className="font-semibold text-lg text-purple-500 mb-3">{contentTitle}</p>
      <p>{contentText}</p>
    </motion.div>
  );

  // Data for the services
  const services = [
    {
      title: "Concept & Design",
      content: "From initial ideas to refined digital experiences, we provide a full spectrum of design services, including UI/UX design, scalable design systems, and data visualization solutions to elevate your brand’s digital presence.",
  
      content1title: "UI Design",
      content1text: "We design intuitive and visually stunning user interfaces through wireframes, pixel-perfect mockups, and interactive prototypes. Our process ensures optimal user experience, accessibility, and seamless brand integration.",
  
      content2title: "Design Systems",
      content2text: "We build scalable design systems that unify your brand across all digital touchpoints. Our solutions include style guides, pattern libraries, component documentation, and version control strategies to create a consistent and maintainable design language.",
  
      content3title: "Branding",
      content3text: "We develop comprehensive branding guides, visual identity systems, and digital assets to ensure brand consistency across your platforms. Our branding services include typography, color schemes, iconography, and messaging strategy.",
  
      image: `${process.env.PUBLIC_URL + "/images/Img-design.png"}`
    },
    {
      title: "Development",
      content: "We build high-performance web and mobile applications using modern frameworks. Our expertise spans React, Next.js, and React Native to create scalable, fast, and maintainable digital solutions that drive business success.",
  
      content1title: "App Development",
      content1text: "We provide end-to-end mobile app solutions using React Native. From conceptualization to deployment, we create cross-platform applications optimized for performance, security, and seamless user experience.",
  
      content2title: "Website Development",
      content2text: "We specialize in front-end and full-stack web development using React, JavaScript, TypeScript, Next.js, Sass, and Tailwind. Our approach ensures responsive, fast-loading, and accessible websites tailored to your business goals.",
  
      image: `${process.env.PUBLIC_URL + "/images/Img-development.png"}`
    },
    {
      title: "AI & AR Solutions",
      content: "Harness the power of AI and AR to create intelligent, automated, and immersive digital experiences. We specialize in chatbot development, AI-driven product innovation, and advanced security solutions.",
  
      content1title: "Chatbot Services",
      content1text: "We develop AI-powered chatbots that enhance customer engagement and automate workflows. Our solutions leverage NLP (Natural Language Processing) and machine learning to create responsive, intuitive virtual assistants.",
  
      content2title: "AI Product Development",
      content2text: "We integrate AI into digital products to enable automation, predictive analytics, and intelligent decision-making. Our expertise includes machine learning models, AI-driven personalization, and computer vision applications.",
  
      content3title: "Security",
      content3text: "We provide AI-driven security solutions, including threat detection, fraud prevention, and biometric authentication. Our AI security systems help protect sensitive data and enhance cybersecurity resilience.",
  
      image: `${process.env.PUBLIC_URL + "/images/Img-ai.png"}`
    },
  ];

  return (
    <section className={classNames(className, "services-section relative w-full pt-32 pb-40 flex items-center px-4 bg-purple-900")} id="services">
      <div className="container mx-auto flex flex-col md:flex-row h-fit">
        {/* Left Menu */}
        <div className="services-section__menu hidden md:flex md:flex-col md:w-1/4 md:gap-8">
          <p className="section-title relative z-[1]">Services</p>
          {services.map((service, index) => (
            <div
              key={index}
              className={classNames(
                "services-section__menu-item heading-3 cursor-pointer",
                { " text-purple-500": activeIndex === index }
              )}
              onClick={() => setActiveIndex(index)}
            >
              {service.title}
            </div>
          ))}
        </div>

        {/* Right Content (Desktop View) */}
        <div className="services-section__service md:w-3/4 hidden md:block relative">
          <motion.img 
            alt=""
            className="w-[500px] absolute -right-16" 
            src={`${process.env.PUBLIC_URL + "/images/pattern-dots.png"}`} 
            style={{ y: y0 }}
          />
          <div className="relative mb-12">
            <h2 className="heading-2 absolute-center">{services[activeIndex].title}</h2>
            <img src={services[activeIndex].image} alt={services[activeIndex].title} className="w-full mb-4" />
          </div>

          <p className="text-lg font-semibold">{services[activeIndex].content}</p> 

          <div className="flex flex-row pt-8">
            {services[activeIndex] &&
              Object.keys(services[activeIndex])
                .filter((key) => key.includes("content") && key.includes("title"))
                .map((key, index) => {
                  const textKey = key.replace("title", "text");
                  return serviceItem(services[activeIndex][key], services[activeIndex][textKey], "first:ml-0 -ml-3", [y1, y2, y3][index]);
                })}
          </div>           
        </div>

        {/* Mobile View - Tabs */}
        <div className="services-section__tabs md:hidden relative">
          <motion.img 
            alt=""
            className="w-[500px] absolute -right-16 top-0 pointer-events-none" 
            src={`${process.env.PUBLIC_URL + "/images/pattern-dots.png"}`} 
            style={{ y: y01 }}
          />
          
          <p className="section-title mb-4 relative z-[1]">Services</p>

          {/* Tab Navigation */}
          <div className="services-section__tabs__nav flex justify-around border-b border-purple-500 mb-6 relative z-10">
            {services.map((service, index) => (
              <button
                key={index}
                className={classNames(
                  "py-4 px-4 text-sm font-semibold text-white focus:outline-none transition-all",
                  { "": activeIndex === index }
                )}
                onClick={() => setActiveIndex(index)}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="services-section__tabs__content">
            <h2 className="font-bold text-lg text-purple-500 mb-4">{services[activeIndex].title}</h2>
            <p className="">{services[activeIndex].content}</p>
            {/* Dynamically Map Through Service Items for Mobile */}
            {Object.keys(services[activeIndex])
              .filter((key) => key.includes("content") && key.includes("title"))
              .map((key, subIndex) => {
                const textKey = key.replace("title", "text");
                return (
                  <div key={subIndex} className="">
                    {serviceItem(services[activeIndex][key], services[activeIndex][textKey], "mt-4")}
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;