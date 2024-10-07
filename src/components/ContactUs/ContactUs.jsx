import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, such as sending the data to a server.
    console.log(formData);
  };

  return (
    <section id="contactus" className="flex flex-col md:flex-row  msitems-center justify-center py-10 md:py-20 bg-gray-100">
      {/* Form Section */}
      <div className="md:w-1/2 w-full p-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-orange-500">Contact Us</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-6 md:px-8 pt-6 pb-8 mb-4">
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm md:text-base font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm md:text-base font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>

          {/* Contact Number */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm md:text-base font-bold mb-2" htmlFor="contact">
              Contact No
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contact"
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Your Contact Number"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm md:text-base font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="px-6 py-3 text-lg md:text-xl font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Map Section */}
      <div className="md:w-1/2 w-full h-64 md:h-96 mb-6 md:mb-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.7530655027053!2d70.77554947432223!3d22.149134879795565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395835006cc1fc39%3A0xcbf00e04518aa07c!2sMAHANT%20PRASAD%20INDUSTRIES!5e1!3m2!1sen!2sin!4v1725885226043!5m2!1sen!2sin"
          width="100%"  
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Map Location"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
