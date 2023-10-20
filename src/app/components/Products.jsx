"use client";
import React, { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Image from "next/image";
import productData from '../Data/productData';
import Link from "next/link";

const Products = () => {
  const scrollContainer = useRef(null);

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full overflow-hidden relative py-10 px-5">
      <h1 className="w-full h-10 text-center text-green-600 font-semibold">TIP: Click on the Box for more products</h1>
      <MdChevronLeft
        size={40}
        className="bg-white left-0 cursor-pointer rounded-full absolute opacity-50 hover:opacity-100 z-50 text-black top-1/2 transform -translate-y-1/2"
        onClick={scrollLeft}
      />
      <div
        ref={scrollContainer}
        className="flex overflow-x-auto scrollbar-hide whitespace-nowrap scroll-smooth space-x-10"
        style={{ minWidth: "100%" }}
      >
        {productData.map((item, index) => (
          <Link
          href={`${item.link}`} //to fix the console error "The prop `href` expects a `string` or `object` in `<Link>`, but got `undefined` instead", we raped into the template literal.
            key={index}
            className="flex flex-col items-center text-center cursor-pointer"
          >
            <div className={`w-48 h-48 ${item.bg} bg-cover bg-center rounded-xl p-5`}>
              <Image src={item.img} width={1} height={1} sizes="100%" className="w-full h-full bg-cover bg-no-repeat hover:scale-110 duration-150 transition-all ease-in-out" />
            </div>
            <div className="p-2 ml-5 font-semibold w-full">{item.desc}</div>
          </Link>
        ))}
      </div>
      <MdChevronRight
        size={40}
        className="bg-white right-0 cursor-pointer rounded-full absolute opacity-50 hover:opacity-100 z-50 text-black top-1/2 transform -translate-y-1/2"
        onClick={scrollRight}
      />
      
    </div>
  );
};

export default Products;
