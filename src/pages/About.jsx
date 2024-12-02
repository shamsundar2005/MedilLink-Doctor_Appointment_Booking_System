import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate=useNavigate();
  const handleButtonClick = () => {
    navigate('/doctors'); // Navigate to doctors page
    window.scrollTo(0, 0); // Scroll to top of the page
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-10 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-primary mb-6 animate-fadeIn tracking-wide">
        About Us
      </h1>
      <p className="text-gray-700 text-lg text-center max-w-3xl mb-10 animate-fadeIn">
        At MediLink Hospital, we are committed to providing exceptional healthcare services with compassion, innovation, and excellence. Our state-of-the-art facilities, combined with a dedicated team of professionals, ensure that every patient receives top-notch care tailored to their needs.
      </p>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-16 animate-slideInLeft">
        <div className="space-y-8 text-center lg:text-left">
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To enhance the well-being of our community by providing accessible, high-quality healthcare services and promoting healthier lifestyles.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To be a leader in innovative healthcare solutions, recognized for excellence in patient care, education, and research.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Compassionate Care</li>
              <li>Patient-Centered Approach</li>
              <li>Innovation and Excellence</li>
              <li>Integrity and Respect</li>
            </ul>
          </div>
        </div>

        <img
          src={assets.about_image}
          alt="Hospital"
          className="w-full lg:w-1/2 rounded-xl shadow-lg hover:shadow-2xl transition-shadow animate-slideInRight"/>
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

export default About;
