import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import JakobLogo from "../../assets/IMAGES/LOGOJAKOB.png";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LogoJakobWhite from "../../assets/IMAGES/LOGOJAKOB-White.png"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="flex justify-evenly md:space-y-0 md:space-x-0">
        {/* Section 1: Logo and Description */}
        <div className=" md:w-1/4  space-y-4">
          <img src={LogoJakobWhite} alt="Jakob Logo" className="h-16 w-auto" />
          <p className="">
            JAKOB, driven by innovation and precision, delivers top-tier winding
            wires designed to power industries with unmatched reliability and
            efficiency, ensuring every coil meets the highest standards of
            excellence.
          </p>
        </div>

        {/* Section 4: Contact Us */}
        <div className=" md:w-1/4 space-y-3">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p>
            Survey No. 64, Shed No.23
            <br />
            Sapar Industrial Area,NH 27,
            <br />
            Indside Dharti Agro Gate, At: Shapar-360026,Dist.:Rajkot,Gujarat.
          </p>
          <div className="flex items-center space-x-1">
            <span className="material-icons text-xs"><CallIcon/> </span>
            <a href="tel:+917436010203" className=' font-semibold'>+91 74360 10203</a>
          </div>
          <div className="flex items-center space-x-1">
            <span className="material-icons text-xs"><CallIcon/> </span>
            <a href="tel:+919879212027" className=' font-semibold'>+91 98792 12027</a>
          </div>    
          <div className="flex items-center space-x-1 ">
            <span className="material-icons text-sm">
              <EmailIcon />
            </span>
            <a
              href="mailto:jakobwire@gmail.com"
              className=" font-semibold"
            >
              jakobwire@gmail.com
            </a>
          </div>
          
        </div>

        <div className="text-2xl space-x-1">
          <a href="https://www.linkedin.com/school/akshar-institute---india/posts/?feedView=all">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/jakob.wire/" className="text-white hover:text-[#E1306C]">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100095599447406" className="text-white hover:text-[#0077B5]">
            <FaFacebookSquare />
          </a>
          <a href="https://www.youtube.com/@JakobWindingWire" className="text-white hover:text-[#ff0000] ">
            <IoLogoYoutube />
          </a>
        </div>
      </div>
      <div className="text-center mt-10 leading-10  text-gray-400">
        <p>&copy; 2024. All Rights Reserved by JAKOB</p>
      </div>
    </footer>
  );
};

export default Footer;
