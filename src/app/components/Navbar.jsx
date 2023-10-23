'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {BiSolidShoppingBag} from 'react-icons/bi'
import {BsFillPersonFill} from 'react-icons/bs'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    const toggle = isMobile
    setIsMobile(!toggle);
  };

  const items = useSelector(state => state.cart)

  return (
    <nav className=" sticky top-0 p-5 z-[200] dark:bg-gray-800 dark:text-white bg-[#fefae0] shadow-gray-300 shadow-sm">
      <div className="container mx-auto flex justify-between items-center text-black dark:bg-gray-800 dark:text-white">
        <Link href={'/'} className="text-3xl md:text-4xl font-bold text-black dark:text-white ">E-Shopping</Link>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">About</a>
          <a href="#" className="hover:text-blue-500">Services</a>
          <a href={'/contact'} className="hover:text-blue-500">Contact</a>
          <Link href={'/signup'} className='flex font-bold'><BsFillPersonFill size={20} /></Link>
          <Link href={'/cart'} className='flex font-bold'><BiSolidShoppingBag size={20} /> <span>{items.length}</span></Link>
        </div>
        <div className="md:hidden flex items-center justify-between space-x-3">
          <div onClick={toggleMobileMenu}>
            {isMobile ? (
              <FaTimes className="text-2xl cursor-pointer" />
            ) : (
              <FaBars className="text-2xl cursor-pointer" />
            )}
          </div>
            <Link href={['/signup']} className='flex font-bold'><BsFillPersonFill size={20} /></Link>
            <Link href={'/cart'} className='flex font-bold'><BiSolidShoppingBag size={20} /> <span>{items.length}</span></Link>
        </div>
      </div>
      {isMobile && (
        <div className="md:hidden text-center flex justify-center items-center flex-col absolute w-24 h-44 top-16 right-5 rounded-xl bg-gray-700 dark:bg-gray-800 dark:text-white">
          <a href="#" className="block py-2 hover:bg-gray-600">Home</a>
          <a href="#" className="block py-2 hover:bg-gray-600">About</a>
          <a href="#" className="block py-2 hover:bg-gray-600">Services</a>
          <a href={'/contact'} className="block py-2 hover:bg-gray-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
