import React, { useState } from 'react';
import { Link } from 'react-scroll';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import JakobLogo from '../../assets/IMAGES/LOGOJAKOB.png'; // logo

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="border-b shadow-md font-['poppins'] bg-white">
        {/* Top bar with contact info and social icons */}
        <div className="flex flex-col md:flex-row justify-between items-center px-4 py-2 bg-gray-100 text-sm">
          {/* Contact Info */}
          <div className="flex items-center space-x-6 py-2">
            <div className="flex items-center space-x-2">
              <EmailIcon className="text-gray-600" />
              <a
                href="mailto:jakobwire@gmail.com"
                className="text-gray-600 font-semibold"
              >
                jakobwire@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <CallIcon className="text-gray-600" />
              <a href="tel:+917436010203" className="text-gray-600 font-semibold">
                +91 74360 10203
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 py-2">
            <a
              href="https://www.facebook.com/profile.php?id=100095599447406"
              className="text-orange-500 hover:text-[#1877F2] text-lg"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://www.instagram.com/jakob.wire/"
              className="text-orange-500 hover:text-[#E1306C] text-lg"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/school/akshar-institute---india/posts/?feedView=all"
              className="text-orange-500 hover:text-[#0077B5] text-lg"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@JakobWindingWire"
              className="text-orange-500 hover:text-[#ff0000] text-lg"
            >
              <IoLogoYoutube />
            </a>
          </div>
        </div>

        {/* Logo and Navigation */}
        <div className="flex justify-between items-center px-4 py-4 md:ml-10">
          {/* Logo */}
          <div className="text-4xl font-bold text-gray-800">
            <img
              src={JakobLogo}
              alt="Jakob Logo"
              className="h-16 w-auto cursor-pointer"
            />
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 text-lg font-medium text-gray-700 mr-10">
            <Link
              to="welcome"
              smooth={true}
              duration={1000}
              className="hover:text-orange-500 cursor-pointer"
            >
              ABOUT US
            </Link>
            <Link
              to="process"
              smooth={true}
              duration={1000}
              className="hover:text-orange-500 cursor-pointer"
            >
              PROCESS
            </Link>
            <Link
              to="material"
              smooth={true}
              duration={1000}
              className="hover:text-orange-500 cursor-pointer"
            >
              MATERIAL
            </Link>
            <Link
              to="productapplication"
              smooth={true}
              duration={1000}
              className="hover:text-orange-500 cursor-pointer"
            >
              SECTOR
            </Link>
            <Link
              to="contactus"
              smooth={true}
              duration={1000}
              className="hover:text-orange-500 cursor-pointer"
            >
              CONTACT US
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden px-4 pb-4 space-y-4 text-lg font-medium text-gray-700">
            <Link
              to="welcome"
              smooth={true}
              duration={1000}
              className="block hover:text-orange-500 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT US
            </Link>
            <Link
              to="process"
              smooth={true}
              duration={1000}
              className="block hover:text-orange-500 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              PROCESS
            </Link>
            <Link
              to="material"
              smooth={true}
              duration={1000}
              className="block hover:text-orange-500 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              MATERIAL
            </Link>
            <Link
              to="productapplication"
              smooth={true}
              duration={1000}
              className="block hover:text-orange-500 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SECTOR
            </Link>
            <Link
              to="contactus"
              smooth={true}
              duration={1000}
              className="block hover:text-orange-500 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT US
            </Link>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
