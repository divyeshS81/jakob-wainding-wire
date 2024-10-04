import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => {
  const handleClick = () => {
    window.open('https://wa.me/917436010203', '_blank'); // Replace with your WhatsApp number
  };

  return (
    <div
      className="fixed bottom-4 left-4 z-50 cursor-pointer p-2 sm:p-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      onClick={handleClick}
    >
      <FaWhatsapp className="text-white text-2xl sm:text-3xl" />
    </div>
  );
};

export default Whatsapp;
