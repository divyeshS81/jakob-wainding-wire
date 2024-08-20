import React from 'react';
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import JakobLogo from "../../assets/IMAGES/LOGOJAKOB.png";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className=" flex space-y-8 md:space-y-0 md:space-x-0">
                {/* Section 1: Logo and Description */}
                <div className=" container md:w-1/4  space-y-4">
                    <img src={JakobLogo} alt="Jakob Logo" className="h-16 w-auto" />   
                    <p>JAKOB, driven by innovation and precision, delivers top-tier winding wires designed to power industries with unmatched reliability and efficiency, ensuring every coil meets the highest standards of excellence.</p>
                    <div className="flex space-x-2">
                        <a href="#" className="text-white">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="text-white">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-white">
                            <FaFacebookSquare />
                        </a>
                        <a href="#" className="text-white">
                            <IoLogoYoutube />
                        </a>
                    </div>
                </div>
                
                {/* Section 2: Useful Links */}
                <div className=" md:w-1/4 ml-[50px] space-y-4">
                    <h3 className="text-xl font-semibold">Useful Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">Company Profile</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Technical Property</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                    </ul>
                </div>
                
              
                
                {/* Section 4: Contact Us */}
                <div className=" md:w-1/4 ">
                    <h3 className="text-xl font-semibold">Contact Us</h3>
                    <p>Survey No. 133/3, Mahendragadh Road,<br />
                    Near Pipaliya Cross Road, Navlakhi Highway,<br />
                    At: Pipaliya- 363660, Dist.: Morbi, Gujarat.</p>
                    <p>Phone: +91 74360 10203</p>
                    <p>Email: jakobwire@gmail.com</p>
                    
                </div>
            </div>
            <div className="text-center mt-10 leading-10 bg-black text-gray-400">
                <p>&copy; 2024. All Rights Reserved by JAKOB</p>
            </div>
        </footer>
    );
}

export default Footer;
