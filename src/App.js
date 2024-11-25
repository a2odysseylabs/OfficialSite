import { useEffect, useRef } from "react";

import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TechStackSection from "./components/TechStackSection";
import WhyUs from "./components/WhyUs";
import OurWork from "./components/OurWork";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import { ReactComponent as FullLogo} from './assets/web-logo-full-white.svg'; 
import { ReactComponent as LogoMark} from './assets/logoMark.svg'; 

function App() {
  const handleContactClick = () => {
    console.log("Contact Us button clicked!");
    // Add navigation or modal opening logic here
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
      dotsRef.current.dataset.initialY = getComputedStyle(dotsRef.current).transform.match(/matrix.*\((.+)\)/)?.[1]?.split(", ")[5] || "0";
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0F0717] font-sans overflow-x-hidden">
      <div className=" bg-[#0f071781] backdrop-blur-xl fixed top-0 z-50 w-full">
        <header className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div>
            <LogoMark className="md:hidden" />
            <FullLogo className="max-md:hidden h-10" />
          </div>
          <nav className="hidden md:flex items-center justify-end space-x-8">
            <a href="#services" className="text-white hover:text-purple-500">Services</a>
            <a href="#why-A2" className="text-white hover:text-purple-500">Why A2</a>
            <a href="#our-work" className="text-white hover:text-purple-500">Our Work</a>
            <button onClick={handleContactClick} className="px-6 py-2 bg-purple-500 text-white rounded-lg font-semibold">Contact Us</button>
          </nav>
        </header>
      </div>
      <HeroSection className="-mt-14" />
      <ServicesSection />
      <TechStackSection  />
      <WhyUs/>
      <OurWork  />
      <CTASection 
        header="Ready to start your journey?"
        content="Contact A2 Odyssey Labs to discuss your project needs. Whether you're envisioning a new product or need a fresh perspective on an existing one, we're here to help."
        buttonText="Contact Us"
        onButtonClick={handleContactClick}
      />
      <Footer />
    </div>
  )
}

export default App;
