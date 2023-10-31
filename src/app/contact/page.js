"use client";
import React, { useEffect, useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Spinner from "../components/Spinner";

const ContactUsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);
  return (
    <div className=" bg-[#fefae0] dark:bg-gray-900 dark:text-white min-h-screen flex justify-center items-center p-4 sm:p-8 lg:p-12">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="container mx-auto max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-semibold text-center mb-8">
              Contact Us
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#fefae0] dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Send us an Email</h2>
                <div className="flex items-center space-x-4">
                  <FiMail className="text-2xl text-blue-500" />
                  <a href="mailto:info@example.com">info@example.com</a>
                </div>
              </div>
              <div className="bg-[#fefae0] dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Call Us</h2>
                <div className="flex items-center space-x-4">
                  <FiPhone className="text-2xl text-blue-500" />
                  <a href="tel:+123456789">123-456-789</a>
                </div>
              </div>
            </div>
            <div className="bg-[#fefae0] dark:bg-gray-900 p-6 rounded-lg shadow-md mt-6">
              <h2 className="text-xl font-semibold mb-4">Visit Us</h2>
              <div className="flex items-center space-x-4">
                <FiMapPin className="text-2xl text-blue-500" />
                <p>1234 Main Street, City</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactUsPage;
