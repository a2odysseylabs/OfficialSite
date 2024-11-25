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

  console.log(scrollY.get());

  const serviceItem = (contentTitle, contentText, customClasses, y) => (
    <motion.div 
      className={classNames(
        "services-section__service__item card-style w-[37%] h-fit", 
        customClasses,
      )}
      style={{ y: y }}
    >
      <p className="font-bold text-purple-500 mb-3">{contentTitle}</p>
      <p>{contentText}</p>
    </motion.div>
  );

  // Data for the services
  const services = [
    {
      title: "Concept & Design",
      content: "Explore our cutting-edge design services including UI/UX design, design systems, and data visualization.",
      content1title: "UI Design",
      content1text: "From wireframes to pixel-perfect mockups and rapid prototyping.",
      content2title: "UI Design",
      content2text: "From wireframes to pixel-perfect mockups and rapid prototyping.",
      content3title: "UI Design",
      content3text: "From wireframes to pixel-perfect mockups and rapid prototyping.",
      image: `${process.env.PUBLIC_URL + "/images/Img-design.png"}`
    },
    {
      title: "Development",
      content: "Our development services include React, Next.js, and mobile app development using React Native.",
      content1title: "UI Design",
      content1text: "From wireframes to pixel-perfect mockups and rapid prototyping.",
      content2title: "UI Design",
      content2text: "From wireframes to pixel-perfect mockups and rapid prototyping.",
      content3title: "UI Design",
      content3text: "From wireframes to pixel-perfect mockups and rapid prototyping.",
      image: `${process.env.PUBLIC_URL + "/images/Img-development.png"}`
    },
    {
      title: "AI & AR Solutions",
      content: "We offer AI chatbot development, AI security solutions, and immersive AR/VR experiences.",
      content1title: "UI Design",
      content1text: "From wireframes to pixel-perfect mockups and rapid prototyping.",
      content2title: "UI Design",
      content2text: "From wireframes to pixel-perfect mockups and rapid prototyping.",
      content3title: "UI Design",
      content3text: "From wireframes to pixel-perfect mockups and rapid prototyping.",
      image: `${process.env.PUBLIC_URL + "/images/Img-ai.png"}`
    },
  ];

  return (
    <section className={classNames(className, "services-section relative w-full max-sm:h-[800px] sm:h-[1000px] flex items-center px-4")} id="services">
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
          <div className="relative">
            <h2 className="heading-2 absolute-center">{services[activeIndex].title}</h2>
            <img src={services[activeIndex].image} alt={services[activeIndex].title} className="w-full mb-4" />
          </div>
          <p>{services[activeIndex].content}</p>
          <div className="flex flex-row pt-8">
            {serviceItem(services[activeIndex].content1title, services[activeIndex].content1text, "", y1)}
            {serviceItem(services[activeIndex].content2title, services[activeIndex].content2text, "-ml-3", y2)}
            {serviceItem(services[activeIndex].content3title, services[activeIndex].content3text, "-ml-3", y3)}
          </div>          
        </div>

        {/* Accordion (Mobile View) */}
        <div className="services-section__accordion md:hidden relative">
        <motion.img 
            alt=""
            className="w-[500px] absolute -right-16 top-0" 
            src={`${process.env.PUBLIC_URL + "/images/pattern-dots.png"}`} 
            style={{ y: y01 }}
          />
          <p className="section-title mb-4 relative z-[1]">Services</p>
          {services.map((service, index) => (
            <div key={index} className="accordion-item card-style">
              <div
                className="accordion-header p-4 cursor-pointer"
                onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
              >
                <h2 className="font-bold text-lg text-purple-500">{service.title}</h2>
              </div>
              <div
                className={classNames(
                  "accordion-content overflow-hidden transition-all",
                  {
                    "max-h-40 p-4 ": activeIndex === index,
                    "max-h-0": activeIndex !== index,
                  }
                )}
              >
                <p>{service.content}</p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;