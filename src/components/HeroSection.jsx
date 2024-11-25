import React, { useRef, useEffect } from "react";
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

  const { scrollY } = useScroll();
  const y0 = useTransform(scrollY, [0, 1000], [-200, 300]);
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 100]);

  // const [ref, inView, entry] = useInView({
  //   /* Optional options */
  //   threshold: 0.5,
  //   triggerOnce: false
  // });

  return (
    <section className={classNames(className, "hero-section relative w-full max-sm:h-screen sm:h-[1000px] px-4")}>
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
        className="hero-section__layer hero-section__layer--third absolute top-0 left-0 w-full h-full"
        style={{ y: y2 }}  
      >
        <img
          src={`${process.env.PUBLIC_URL + "/images/techBg.png"}`}
          alt="Third Layer"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text Layer */}
      <div
        className="hero-section__layer hero-section__layer--text absolute"
      >
        <div className="lg:w-3/4 text-center">
          <h1 className="hero-text text-white text-5xl md:text-7xl font-bold mb-4">
            Guiding Digital Journeys with Scalable Design & Cutting-Edge Development Solutions
          </h1>
          <p >
            At A2 Odyssey Labs, we guide businesses on a transformative journey from concept to completion. With a focus on UI/UX, app and web development, AI, and AR, we bridge gaps and bring ideas to life. Embark on an odyssey with us—your trusted partners in crafting impactful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;