'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {BiSolidShoppingBag} from 'react-icons/bi'
import {BsFillPersonFill} from 'react-icons/bs'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    const toggle = isMobile
    setIsMobile(!toggle);
  };

  return (
    <nav className="bg-[#fefae0] sticky top-0 text-white p-5 z-10">
      <div className="container mx-auto flex justify-between items-center text-black">
        <Link href={'/'} className="text-3xl md:text-4xl font-bold text-black">E-Shopping</Link>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">About</a>
          <a href="#" className="hover:text-blue-500">Services</a>
          <a href="#" className="hover:text-blue-500">Contact</a>
          <Link href={['#']} className='flex font-bold'><BsFillPersonFill size={20} /></Link>
          <Link href={['/']} className='flex font-bold'><BiSolidShoppingBag size={20} /> <span>0</span></Link>
        </div>
        <div className="md:hidden flex items-center justify-between space-x-3">
          <div onClick={toggleMobileMenu}>
            {isMobile ? (
              <FaTimes className="text-2xl cursor-pointer" />
            ) : (
              <FaBars className="text-2xl cursor-pointer" />
            )}
          </div>
            <Link href={['#']} className='flex font-bold'><BsFillPersonFill size={20} /></Link>
            <Link href={['/']} className='flex font-bold'><BiSolidShoppingBag size={20} /> <span>0</span></Link>
        </div>
      </div>
      {isMobile && (
        <div className="md:hidden text-center flex justify-center items-center flex-col absolute w-24 h-44 top-16 right-5 rounded-xl bg-gray-700">
          <a href="#" className="block py-2 hover:bg-gray-600">Home</a>
          <a href="#" className="block py-2 hover:bg-gray-600">About</a>
          <a href="#" className="block py-2 hover:bg-gray-600">Services</a>
          <a href="#" className="block py-2 hover:bg-gray-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
