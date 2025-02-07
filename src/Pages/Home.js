import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import TechStackSection from "../components/TechStackSection";
import WhyUs from "../components/WhyUs";
import OurWork from "../components/OurWork";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  const navigate = useNavigate(); 

  const handleContactClick = () => {
    navigate("/contact"); 
  };

  const dotsRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (dotsRef.current) {
        const initialY = parseFloat(dotsRef.current.dataset.initialY || "0");
        dotsRef.current.style.transform = `translateY(${initialY + scrollY * 0.5}px)`;
      }
    };

    if (dotsRef.current) {
      dotsRef.current.dataset.initialY =
        getComputedStyle(dotsRef.current).transform.match(/matrix.*\((.+)\)/)?.[1]?.split(", ")[5] || "0";
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Sections */}
      <HeroSection />
      <ServicesSection />
      <TechStackSection />
      <WhyUs />
      <OurWork />
      <CTASection
        header="Ready to start your journey?"
        content="Contact A2 Odyssey Labs to discuss your project needs. Whether you're envisioning a new product or need a fresh perspective on an existing one, we're here to help."
        buttonText="Contact Us"
        onButtonClick={handleContactClick}
        className="bg-purple-900"
      />
      <Footer />
    </div>
  );
};

export default Home;