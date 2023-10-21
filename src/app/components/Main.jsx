import Image from "next/image";
import React from "react";
import HomePic from "../../../public/assets/mainPic.png";

const Main = () => {
  return (
    <div className={`max-h-screen grid grid-cols-1 md:grid-cols-2 relative top-0 p-8 bg-[#fefae0] dark:bg-gray-900`}>
      <div className="flex flex-col justify-end md:justify-center items-center md:items-start p-5 md:p-10 md:ml-10">
        <h1 className="text-3xl md:text-5xl lg:text-8xl font-bold mb-6">Online Shopping</h1>
        <p className="text-center">Now, Everything at your Door-Step because of E-Shopping.</p>
        <button className="w-48 h-10 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold mt-4">
          Checkout Products
        </button>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={HomePic}
          alt="Home Pic"
          width={10}
          height={10} // Adjust the height to an appropriate value
          sizes="100%"
          priority='lazy'
          className="w-72 lg:w-2/3 h-auto"
        />
      </div>
    </div>
  );
};

export default Main;
