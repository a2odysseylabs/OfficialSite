import React from 'react';
import { Link } from "react-router-dom";

import { ReactComponent as FullLogo } from "../assets/web-logo-full-white.svg";
import { ReactComponent as LogoMark } from "../assets/logoMark.svg";

const Header = () => {
    return (
      <div className="bg-[#0f071781] backdrop-blur-xl fixed top-0 z-50 w-full">
        <header className="container mx-auto px-4 py-2 flex items-center justify-between">
            <Link to="/">
                <LogoMark className="md:hidden" />
                <FullLogo className="max-md:hidden h-10" />
            </Link>
            <nav className="hidden md:flex items-center justify-end space-x-8">
                <a href="#services" className="text-white hover:text-purple-500">
                    Services
                </a>
                <a href="#why-A2" className="text-white hover:text-purple-500">
                    Why A2
                </a>
                <a href="#our-work" className="text-white hover:text-purple-500">
                    Our Work
                </a>
                <Link
                    to={"/contact"}
                    className="px-6 py-2 bg-purple-500 text-white rounded-lg font-semibold"
                >
                    Contact Us
                </Link>
            </nav>
        </header>
    </div>
    );
};

export default Header;