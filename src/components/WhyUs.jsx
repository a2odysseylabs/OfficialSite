import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useScroll,
  motion,
  useTransform,
} from 'framer-motion';
import classNames from "classnames";

const WhyUs = (props) => {
  const { className } = props;
  const { scrollY } = useScroll();
  const y0 = useTransform(scrollY, [2000, 4000], [0, 200]);

  const navigate = useNavigate();
  
  const handleContactClick = () => {
      navigate("/contact");
  };

  const features = [
    {
      title: "End-to-End Services",
      description:
        "From ideation to launch, our comprehensive services cover every step of your journey.",
    },
    {
      title: "Agile and Adaptive",
      description:
        "We’re a nimble team, always adapting to evolving technologies to ensure you stay ahead.",
    },
    {
      title: "Focus on Quality and Detail",
      description:
        "Our design systems and development protocols ensure consistency, quality, and precision in every project.",
    },
    {
      title: "Client-Centric Approach",
      description:
        "Your vision is our mission. We listen, collaborate, and innovate to meet your needs.",
    },
  ];

  return (
    <section className={classNames("why-us relative w-full pt-20 pb-40 bg-purple-900", className)} id="why-A2">
      <div className="container mx-auto relative">

        <motion.img 
          src={`${process.env.PUBLIC_URL + "/images/pattern-dots.png"}`} 
          className="w-[500px] absolute -left-32" 
          alt=""
          style={{ y: y0 }}
        />

        {/* Title */}
        <div className="text-left lg:w-3/4 z-[1] relative">
          <h2 className="section-title text-orange-400 my-10">
            Why Choose A2?
          </h2>
          <p className="mt-4 text-lg md:text-xl mb-8">
            When you choose A2 Odyssey Labs, you’re not just hiring a team—you’re
            gaining partners who understand the intricacies of digital
            transformation. We believe in merging creativity with technology to
            deliver solutions that are both innovative and reliable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-style"
            >
              <h3 className="text-xl font-semibold text-purple-500">
                {feature.title}
              </h3>
              <p className="mt-4">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button 
            className="px-6 py-3 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-lg text-black font-semibold text-lg hover:from-yellow-500 hover:to-orange-400 transition-all relative z-10" 
            onClick={handleContactClick}
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;