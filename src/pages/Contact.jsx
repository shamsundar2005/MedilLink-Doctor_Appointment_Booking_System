import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { assets } from '../assets/assets';

const Contact = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleButtonClick = () => {
    navigate('/doctors'); // Navigate to doctors page
    window.scrollTo(0, 0); // Scroll to top of the page
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-10 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-primary mb-6 animate-fadeIn tracking-wide">
        Contact Us
      </h1>
      <p className="text-gray-700 text-lg text-center max-w-3xl mb-10 animate-fadeIn">
        Have questions or need assistance? Our friendly support team is here to help you with any inquiries. Get in touch with us via email, phone, or visit us at our location. We look forward to connecting with you!
      </p>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-16 animate-slideInLeft">
        <div className="space-y-8 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <FaEnvelope className="text-4xl text-primary mb-2" />
            <h2 className="text-xl font-semibold text-gray-800">Email</h2>
            <a href="mailto:medilink@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
              medilink@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <FaPhone className="text-4xl text-primary mb-2" />
            <h2 className="text-xl font-semibold text-gray-800">Phone</h2>
            <p className="text-gray-600">+91 9944102264</p>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <FaMapMarkerAlt className="text-4xl text-primary mb-2" />
            <h2 className="text-xl font-semibold text-gray-800">Address</h2>
            <p className="text-gray-600">27, South Street, Thiruvasi</p>
          </div>
        </div>

        <img
          src={assets.contact_image}
          alt="Contact Us"
          className="w-full lg:w-1/2 rounded-xl shadow-lg hover:shadow-2xl transition-shadow animate-slideInRight"
        />
      </div>

      <button
        onClick={handleButtonClick} // Trigger the function on button click
        className="bg-primary text-gray-100 px-12 py-3 rounded-lg mt-10 hover:bg-blue-700 transition-all"
      >
        Book an Appointment
      </button>
    </div>
  );
};

export default Contact;
