import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { ReactComponent as FullLogo } from "../assets/web-logo-full-white.svg";
import { ReactComponent as LogoMark } from "../assets/logoMark.svg";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
        <div className="bg-purple-950/70 backdrop-blur-xl fixed top-0 z-50 w-full">
            <header className="container mx-auto px-4 py-2 flex items-center justify-between">
                <Link to="/">
                    <LogoMark className="md:hidden" />
                    <FullLogo className="max-md:hidden h-10" />
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Open menu"
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>

                {/* Desktop Nav */}
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
        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
            <motion.div
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: "0%" }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed inset-2 rounded-2xl bg-gradient-to-b from-purple-800 to-purple-950 backdrop-blur-lg flex flex-col items-center justify-center text-white z-50"
            >
                {/* Close Button */}
                <button
                    className="absolute top-5 right-5 text-3xl"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>

                {/* Mobile Nav Items */}
                <nav className="flex flex-col items-center space-y-8 text-2xl">
                    <a
                        href="#services"
                        className="hover:text-purple-500"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Services
                    </a>
                    <a
                        href="#why-A2"
                        className="hover:text-purple-500"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Why A2
                    </a>
                    <a
                        href="#our-work"
                        className="hover:text-purple-500"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Our Work
                    </a>
                    <Link
                        to={"/contact"}
                        className="px-6 py-2 bg-purple-500 rounded-lg font-semibold"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact Us
                    </Link>
                </nav>
            </motion.div>
        )}
        </>
    );
};

export default Header;