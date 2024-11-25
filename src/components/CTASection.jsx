import React from "react";
import classNames from "classnames";
import {
  useScroll,
  motion,
  useTransform,
} from 'framer-motion';

const CTASection = ({ header, content, buttonText, className, onButtonClick }) => {
  const { scrollY } = useScroll();
  const y0 = useTransform(scrollY, [4000, 6000], [-300, 0]);

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
          className="w-[500px] absolute left-1/3 "
          alt=""
          style={{ y: y0 }}
        />
        <div className="container mx-auto relative bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white rounded-lg p-8 shadow-lg flex flex-col items-center justify-center text-center">
          

          {/* Header */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{header}</h2>

          {/* Content */}
          <p className="text-lg md:text-xl text-white/90 mb-6">{content}</p>

          {/* Button */}
          <button
            className="px-6 py-3 bg-purple-700 hover:bg-purple-800 rounded-lg font-semibold text-lg"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default CTASection;