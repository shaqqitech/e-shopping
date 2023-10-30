import Link from "next/link";
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const PlacedOrder = () => {
  return (
    <div className="bg-[#fefae0] dark:bg-gray-900 min-h-screen flex items-center justify-center px-6">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full md:w-1/2 lg:w-1/3 text-center">
        <AiOutlineCheckCircle className="text-6xl w-full text-center text-green-500 animate-bounce mb-4" />
        <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-4 animate-fade-in-up">
          Your Order Has Been Successfully Placed
        </h2>
        <p className="text-lg mb-6 animate-fade-in-up">
          Thank you for choosing our services. Your order has been placed
          successfully, and we will notify you once it's ready for delivery.
        </p>
        <Link
          href="/"
          passHref
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4 text-lg font-semibold transition duration-300 inline-block animate-fade-in-up"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default PlacedOrder;
