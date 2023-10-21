import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaMapMarker,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
  return ( 
    <footer className="bg-gray-800 text-white relative text-center md:text-left px-10">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Section 1: Social Icons */}
          <div className='text-center'>
            <h2 className="text-2xl font-bold">Follow Us</h2>
            <div className="flex justify-center mt-4">
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <FaFacebook className="text-2xl mx-2" />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-500">
                <RiTwitterXFill className="text-2xl mx-2" />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-600">
                <FaInstagram className="text-2xl mx-2" />
              </a>
            </div>
          </div>

          {/* Section 2: Contact Info */}
          <div className=''>
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <div className="mt-4 text-center md:text-left w-full">
              <div className="mb-2 w-full flex jusc items-center flex-col md:flex-row space-y-3">
                <FaMapMarker className="text-xl" />
                <p className="ml-2">123 Main Street, City, Country</p>
              </div>
              <div className="mb-2 w-full flex jusc items-center flex-col md:flex-row space-y-3">
                <FaPhone className="text-xl" />
                <p className="ml-2">(+123) 456-7890</p>
              </div>
              <div className="mb-2 w-full flex jusc items-center flex-col md:flex-row space-y-3">
                <FaEnvelope className="text-xl" />
                <p className="ml-2">info@example.com</p>
              </div>
            </div>
          </div>

          {/* Section 3: Additional Links */}
          <div>
            <h2 className="text-2xl font-bold">Useful Links</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Section 4: Newsletter Signup */}
          <div>
            <h2 className="text-2xl font-bold">Newsletter</h2>
            <p className="mt-4">
              Subscribe to our newsletter for updates and promotions.
            </p>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 bg-gray-700 text-white rounded"
              />
              <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="md:col-span-4 text-center border-t border-gray-600 mt-8 pt-8">
          <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
