import React from "react";
import classNames from "classnames";
import {
  useScroll,
  motion,
  useTransform,
} from 'framer-motion';

const CTASection = ({ header, content, buttonText, className, onButtonClick }) => {
  const { scrollY } = useScroll();
  const y0 = useTransform(scrollY, [4000, 6000], [-200, 0]);

  return (
    <section
      className={classNames(
        className,
        "cta-section py-32"
      )}
    >
      <div className="relative p-4">
        <motion.img 
          src={`${process.env.PUBLIC_URL + "/images/pattern-dots.png"}`} 
          className="w-[500px] absolute left-0"
          alt=""
          style={{ y: y0 }}
        />
        <div className="container mx-auto relative bg-gradient-to-b from-orange-400 to-rose-500/80 rounded-lg py-20 px-8 shadow-lg flex flex-col items-center justify-center text-center overflow-hidden">
          {/* Header */}
          <h2 className="text-h3 md:text-h1 font-bold mb-4">{header}</h2>

          {/* Content */}
          <p className="text-lg md:text-xl text-white/90 mb-6 md:w-1/2">{content}</p>

          {/* Button */}
          <button
            className="px-6 py-3 bg-purple-700 hover:bg-purple-800 rounded-lg font-semibold text-lg z-10"
            onClick={onButtonClick}
            >
            {buttonText}
          </button>

          {/* BG */}
          <img 
            src={`${process.env.PUBLIC_URL + "/images/cta-bg.png"}`} 
            className="absolute object-cover"
            alt=""
          />

        </div>
      </div>
      
    </section>
  );
};

export default CTASection;