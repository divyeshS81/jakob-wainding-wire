import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LogoJakobWhite from "../../assets/IMAGES/LOGOJAKOB-White.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="flex flex-col md:flex-row justify-around md:space-y-0 md:space-x-0 space-y-8 px-4 lg:px-20">
        {/* Section 1: Logo and Description */}
        <div className="md:w-1/4 space-y-4 text-center md:text-left">
          <img
            src={LogoJakobWhite}
            alt="Jakob Logo"
            className="h-16 w-auto mx-auto md:mx-0"
          />
          <p className="text-sm md:text-base leading-relaxed">
            JAKOB, driven by innovation and precision, delivers top-tier winding
            wires designed to power industries with unmatched reliability and
            efficiency, ensuring every coil meets the highest standards of
            excellence.
          </p>
        </div>

        {/* Section 2: Contact Us */}
        <div className="md:w-1/4 space-y-3 text-center md:text-left">
          <h3 className="text-lg md:text-xl font-semibold">Contact Us</h3>
          <p className="text-sm md:text-base leading-relaxed">
            Survey No. 64, Shed No.23
            <br />
            Sapar Industrial Area, NH 27,
            <br />
            Inside Dharti Agro Gate, At: Shapar-360026, Dist.: Rajkot, Gujarat.
          </p>
          <div className="flex justify-center md:justify-start items-center space-x-2">
            <CallIcon className="text-xs" />
            <a
              href="tel:+917436010203"
              className="font-semibold text-sm md:text-base"
            >
              +91 74360 10203
            </a>
          </div>
          <div className="flex justify-center md:justify-start items-center space-x-2">
            <CallIcon className="text-xs" />
            <a
              href="tel:+919879212027"
              className="font-semibold text-sm md:text-base"
            >
              +91 98792 12027
            </a>
          </div>
          <div className="flex justify-center md:justify-start items-center space-x-2">
            <EmailIcon className="text-xs" />
            <a
              href="mailto:jakobwire@gmail.com"
              className="font-semibold text-sm md:text-base"
            >
              jakobwire@gmail.com
            </a>
          </div>
        </div>

        {/* Section 3: Social Icons */}
        <div className="flex flex-row md:flex-col justify-around items-center space-y-4 md:space-y-0 md:space-x-0 text-2xl">
          <a
            href="https://www.linkedin.com/school/akshar-institute---india/posts/?feedView=all"
            className="hover:text-[#0077B5]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/jakob.wire/"
            className="hover:text-[#E1306C]"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100095599447406"
            className="hover:text-[#3b5998]"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.youtube.com/@JakobWindingWire"
            className="hover:text-[#ff0000]"
          >
            <IoLogoYoutube />
          </a>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-400 text-sm md:text-base">
        <p>&copy; 2024. All Rights Reserved by JAKOB</p>
      </div>
    </footer>
  );
};

export default Footer;
