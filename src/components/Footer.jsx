import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate=useNavigate();
  return (
    <footer className="bg-gray-200 text-black py-10 rounded-lg m-3">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
        
        {/* Logo and About Section */}
        <div>
          <img src={assets.logo} alt="Medilink Logo" onClick={()=>navigate('/')}/>
        
          <p className="text-black mt-3 ">
            Providing trusted healthcare solutions with a team<br/>of highly skilled professionals.
          </p>
        </div>
        
        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="/about" className="text-black hover:text-gray-800">About Us</a>
            </li>
            <li className="mb-2">
              <a href="/services" className="text-black hover:text-gray-800">Services</a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="text-black hover:text-gray-800">Contact</a>
            </li>
            <li className="mb-2">
              <a href="/faq" className="text-black hover:text-gray-800">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-black mb-2">Email: medilink@gmail.com</p>
          <p className="text-black mb-2">Phone: +91 9944102264</p>
          <p className="text-black">Address: 27, South Street, Thiruvasi</p>
        </div>
      </div>

      {/* Social Media Icons and Divider */}
      <div className="flex justify-center space-x-6 mt-8 items-center border-b border-gray-400 pb-4">
        <a href="#" className="text-black hover:text-gray-800">
          <FontAwesomeIcon icon={faFacebookF} size="lg" />
        </a>
        <a href="#" className="text-black hover:text-gray-800">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
        <a href="#" className="text-black hover:text-gray-800">
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        </a>
        <a href="#" className="text-black hover:text-gray-800">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
      </div>

      <div className="text-center text-black mt-6">
        &copy; {new Date().getFullYear()} Medilink. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
