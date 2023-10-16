import React from 'react';
import { FaFacebook, FaInstagram, FaMapMarker, FaPhone, FaEnvelope } from 'react-icons/fa';
import {RiTwitterXFill} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white relative">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1: Social Icons */}
          <div className="text-center">
            <h2 className="text-2xl font-bold">Follow Us</h2>
            <div className="flex justify-center mt-4">
              <a href="#">
                <FaFacebook className="text-2xl text-blue-500 mx-2" />
              </a>
              <a href="#">
                <RiTwitterXFill className="text-2xl text-blue-400 mx-2" />
              </a>
              <a href="#">
                <FaInstagram className="text-2xl text-pink-500 mx-2" />
              </a>
            </div>
          </div>

          {/* Section 2: Contact Info */}
          <div>
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <div className="mt-4">
              <div className="flex items-center mb-2">
                <FaMapMarker className="text-xl" />
                <p className="ml-2">123 Main Street, City, Country</p>
              </div>
              <div className="flex items-center mb-2">
                <FaPhone className="text-xl" />
                <p className="ml-2">(+123) 456-7890</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-xl" />
                <p className="ml-2">info@example.com</p>
              </div>
            </div>
          </div>

          {/* Section 3: Copyright */}
        </div>
          <div className="text-center border-gray-500 mt-10">
            <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
