import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import {
  useScroll,
  motion,
  useTransform,
} from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

import "./HeroSection.scss";

const HeroSection = (props) => {
  const { className } = props;

  const navigate = useNavigate();
      
  const handleContactClick = () => {
      navigate("/contact");
  };

  const { scrollY } = useScroll();
  const y0 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 100]);

  // const [ref, inView, entry] = useInView({
  //   /* Optional options */
  //   threshold: 0.5,
  //   triggerOnce: false
  // });

  return (
    <section className={classNames(className, "hero-section relative w-full max-sm:h-[650px] sm:h-[1000px] py-32")}>
      {/* Gradient Layer */}
      <motion.div 
        className="hero-section__layer hero-section__layer--gradient absolute top-0 left-0 w-full h-full]"
        style={{ y: y0 }}
      >
        <img
          src={`${process.env.PUBLIC_URL + "/images/hero-gradient.png"}`}
          alt="gradient Layer"
          className="w-full h-screen object-cover"
        />
      </motion.div>

      {/* A Layer */}
      <motion.div 
        className="hero-section__layer hero-section__layer--second absolute top-0 left-0 w-full h-full"
        style={{ y: y1 }}
      >
        <img
          src={`${process.env.PUBLIC_URL + "/images/asgroup.png"}`}
          alt="Second Layer"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* TechBg Layer */}
      <motion.div 
        className="hero-section__layer hero-section__layer--third absolute top-12 sm:top-0 left-1/2 w-[800px] sm:w-[1400px] h-full"
        style={{ y: y2, x: "-50%" }}  
      >
        <img
          src={`${process.env.PUBLIC_URL + "/images/techBg.png"}`}
          alt="Third Layer"
          className=""
        />
      </motion.div>

      {/* Text Layer */}
      <div
        className="container hero-section__layer hero-section__layer--text px-8 lg:px-32"
      >
        <div className="">
          <h1 className="hero-text text-white font-bold mb-4">
            Guiding Digital Journeys with Scalable Design & Cutting-Edge Development Solutions
          </h1>
          <p>
            At A2 Odyssey Labs, we guide businesses on a transformative journey from concept to completion. With a focus on UI/UX, app and web development, AI, and AR, we bridge gaps and bring ideas to life. Embark on an odyssey with us—your trusted partners in crafting impactful digital experiences.
          </p>
          {/* Call to Action */}
          <button 
            className="px-6 py-3 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-lg text-black font-semibold text-lg hover:from-yellow-500 hover:to-orange-400 transition-all relative z-10 mt-6" 
            onClick={handleContactClick}
          >
            Lets Connect About Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;