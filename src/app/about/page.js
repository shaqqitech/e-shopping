'use client'
import React, { useEffect, useState } from "react";
import { FaRegHandshake, FaUndo, FaUserFriends, FaStar } from 'react-icons/fa';
import Spinner from "../components/Spinner";

const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);
  return (
    <div className="bg-[#fefae0] dark:bg-gray-900 py-12">
      {loading ? (<Spinner />) : (
        <>
            <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Section 1 */}
          <div className="bg-[#fefae0] dark:bg-gray-800 p-4 md:p-8 rounded-lg shadow-xl border-2 md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <FaStar className="text-yellow-500 mr-2" />
                Over 5 years of experience in delivering the best services.
              </div>
              <div className="flex items-center mb-2">
                <FaUndo className="text-blue-500 mr-2" />
                Hassle-free return process to make your life easier.
              </div>
            </div>
            <p className="mb-4">
              Welcome to E-Shopping, your trusted source for all your shopping needs. We take pride in offering you a wide range of high-quality products.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-[#fefae0] dark:bg-gray-800 p-4 md:p-8 rounded-lg shadow-xl border-2 md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <FaUserFriends className="text-green-500 mr-2" />
                We genuinely care about our customers and their needs.
              </div>
              <div className="flex items-center">
                <FaRegHandshake className="text-purple-500 mr-2" />
                We are committed to building strong relationships with our customers.
              </div>
            </div>
            <p className="mb-4">
              At E-Shopping, we are more than just an e-commerce platform; we are your shopping partner, delivering excellence with every click.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-[#fefae0] dark:bg-gray-800 p-4 md:p-8 rounded-lg shadow-xl border-2 mt-8">
          <h2 className="text-4xl font-bold mb-4">Thank You</h2>
          <p className="mb-4">
            Thank you for choosing E-Shopping as your preferred destination for online shopping.
          </p>
        </div>
      </div>
        </>
      )}
  
    </div>
  );
};

export default AboutUs;
