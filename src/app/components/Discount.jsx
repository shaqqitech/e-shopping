"use client";
import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Image from "next/image";
import { discount } from "../Data/productData";

const Discount = () => {


  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const showPreviousItem = () => {
    if (currentItemIndex > 0) {
      setCurrentItemIndex(currentItemIndex - 1);
    } else {
      // If at the start, loop to the last item
      setCurrentItemIndex(discount.length - 1);
    }
  };
  
  const showNextItem = () => {
    if (currentItemIndex < discount.length - 1) {
      setCurrentItemIndex(currentItemIndex + 1);
    } else {
      // If at the end, loop to the first item
      setCurrentItemIndex(0);
    }
  };
  

  const currentDiscountItem = discount[currentItemIndex];

  return (
    <>
      <main className="w-screen max-1/2 md:h-96 px-7 py-16 flex items-center justify-center bg-[#fefae0] dark:bg-gray-900">
        <div className=" flex flex-col space-y-10 md:flex-row justify-around items-center relative">
          <p className="md:w-1/2 py-5 rounded-xl bg-white dark:bg-gray-800 border-2 flex justify-center items-center text-center h-full text-4xl md:text-6xl font-semibold md:mr-4">
            {currentDiscountItem.disc}
          </p>
          <div className="md:w-1/3 flex justify-center items-center h-full">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-xl relative">
              <MdChevronLeft
                size={30}
                onClick={showPreviousItem}
                className="bg-white left-0 cursor-pointer rounded-full absolute opacity-50 hover:opacity-100 z-50 text-black top-1/2 transform -translate-y-1/2"
              />
              <div
                className={`absolute w-full h-full top-0 left-0 ${currentDiscountItem.bg} rounded-xl`}
              >
                <Image
                  src={currentDiscountItem.img}
                  alt={currentDiscountItem.desc}
                  width={1}
                  height={1}
                  sizes="100%"
                  className="w-full h-full object-cover absolute top-0 left-0 p-8 hover:scale-110 duration-150 transition-all ease-in-out"
                />
              </div>
              <MdChevronRight
                size={30}
                onClick={showNextItem}
                className="bg-white right-0 cursor-pointer rounded-full absolute opacity-50 hover:opacity-100 z-50 text-black top-1/2 transform -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
  


};

export default Discount;
