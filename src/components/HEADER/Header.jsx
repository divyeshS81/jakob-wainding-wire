import React from 'react';
import {Link} from "react-scroll"
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import JakobLogo from "../../assets/IMAGES/LOGOJAKOB.png"  //logo   

const Header = () => {
  return (
    <>
    <header className="border-b shadow-md font-['poppins']">
      {/* Top bar with contact info and social icons */}
      <div className="flex justify-between items-center px-4 py-2 bg-gray-100 text-sm">
        <div className="flex items-center space-x-10">
          <div className="flex items-center space-x-1 ml-10">
            <span className="material-icons text-sm"><EmailIcon/></span>
            <a href="mailto:jakobwire@gmail.com" className="text-gray-600 font-semibold">jakobwire@gmail.com</a>
          </div>
          <div className="flex items-center space-x-1">
            <span className="material-icons text-xs"><CallIcon/> </span>
            <a href="tel:+917436010203" className='text-gray-600 font-semibold'>+91 74360 10203</a>
          </div>
        </div>
        {/* Social icons */}
        <div className="flex space-x-3 mr-10">
          <a href="https://www.facebook.com/profile.php?id=100095599447406" className=" text-orange-500 hover:text-[#1877F2] text-lg facebook"><FaFacebookSquare/></a>
          <a href="https://www.instagram.com/jakob.wire/" className=" text-orange-500 hover:text-[#E1306C] text-lg instagram"><FaInstagram/></a>
          <a href="https://www.linkedin.com/school/akshar-institute---india/posts/?feedView=all" className=" text-orange-500 hover:text-[#0077B5] text-lg linkedin"><FaLinkedin/></a>
          <a href="https://www.youtube.com/@JakobWindingWire" className=" text-orange-500 hover:text-[#ff0000] text-lg youtube"><IoLogoYoutube/></a>
        </div>
      </div>
      
      {/* Logo and navigation */}
      <div className="flex justify-between items-center px-4 py-4 ml-10">
        {/* Logo */}
        <div className="text-4xl font-bold text-gray-800">
        <img src={JakobLogo} alt="Jakob Logo" className="h-16 w-auto cursor-pointer" />
        </div>
        {/* Navigation links */}
        <nav className="space-x-8 text-lg font-medium text-gray-700 mr-[50px]">
          <Link to="welcome" smooth={true}  duration='1000' className="hover:text-orange-500 cursor-pointer">ABOUT US</Link>
          <Link to="process" smooth={true}  duration='1000' className="hover:text-orange-500 cursor-pointer">PROCESS</Link>
          <Link to="material" smooth={true}  duration='1000' className="hover:text-orange-500 cursor-pointer">MATERIAL</Link>
          <Link to="productapplication" smooth={true}  duration='1000' className="hover:text-orange-500 cursor-pointer">SECTOR</Link>
          <Link to="contactus" smooth={true}  duration='1000' className="hover:text-orange-500 cursor-pointer">CONTACT US</Link>
        </nav>
      </div>
    </header>
    </>
  );
}

export default Header;
