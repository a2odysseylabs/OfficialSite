import React from "react";

import { ReactComponent as FullLogo} from '../assets/web-logo-full-white.svg'; 

const Footer = () => {
  return (
    <footer className="footer py-10 px-4">
      <div className="container mx-auto text-center">
        {/* Logo */}
        <img 
          src={`${process.env.PUBLIC_URL + "/images/logoMark.png"}`}
          alt="A2Logo" 
          className="mx-auto h-16"
        />

        {/* Tagline */}
        <p className="text-lg md:text-2xl mt-4">
          Empowering Journeys in Digital Innovation
        </p>

        {/* Divider */}
        <hr className="my-6 border-purple-700 w-1/2 mx-auto" />

        {/* Contact Info */}
        <p className="text-sm md:text-base">
          info@a2odysseylabs.com
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500"
          >
            <i className="fab fa-facebook text-xl"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500"
          >
            <i className="fab fa-twitter text-xl"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-purple-700 mt-6">
            &copy; 2024 A2 Odyssey Labs LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;