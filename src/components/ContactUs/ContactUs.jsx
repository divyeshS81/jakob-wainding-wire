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
    <section className="flex flex-col md:flex-row items-center justify-center py-20 bg-gray-100">
      {/* Map Section */}
      <div className="md:w-1/2 w-full h-96">
        <iframe
          src="https://www.google.com/maps/dir/22.2882883,70.7839106/mahant+prasad+industries+shapar+address/@22.2201011,70.6965088,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x395835006cc1fc39:0xcbf00e04518aa07c!2m2!1d70.7781244!2d22.1491349?hl=en-in&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Map Location"
        ></iframe>
      </div>

      {/* Form Section */}
      <div className="md:w-1/2 w-full p-6">
        <h2 className="text-3xl font-semibold text-center mb-6 text-orange-500">Contact Us</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
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
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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
            />
          </div>

          {/* Contact Number */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
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
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
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
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center">
          <a
            href="#contact"
            className="px-6 py-3 text-lg   font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 animate-bounce"
          >
            Get Started
          </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
