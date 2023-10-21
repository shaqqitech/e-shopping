'use client'
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

function DropDown() {
  const [selectCategory, setSelectedCategory] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const categories = [
    {text: 'HeadPhones', link: '/headphones'},
    {text: 'Bed Sheets', link: '/bedsheets'},
    {text: 'Caps', link: '/caps'},
    {text: 'Gaming Chairs', link: '/gaming-chairs'},
    {text: 'Jeans', link: '/jeans-pants'},
    {text: 'T-Shirts', link: '/t-shirts'},
    {text: 'Beds', link: '/bed'},
    {text: 'Makeup Boxes', link: '/makeup-box'},
    {text: 'Ovens', link: '/oven'},
    {text: 'Pillows', link: '/pillow'},
    {text: 'Refrigerators', link: '/refrigerator'},
  ]

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectingCategory = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className=' bg-gray-300 dark:bg-gray-800 flex justify-center items-center'>
      <div className="relative inline-block text-left" ref={dropdownRef}>
        <div>
          <button
            type="button"
            className="bg-[#fefae0] dark:bg-gray-800  hover:bg-gray-00 w-56 px-4 py-2 rounded flex items-center justify-around"
            onClick={toggleDropdown}
          >
            {selectCategory ? (
              <span className='text-black'>{selectCategory}</span>
            ) : (
              <span className="text-black dark:text-white w-full">Change Category</span>
            )}
            <svg
              className={`ml-2 h-5 w-5 transition-transform transform ${
                isOpen ? '-rotate-180' : 'rotate-0'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
                className=' text-black dark:text-white'
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-56 h-40 overflow-y-auto rounded-md shadow-md shadow-gray-700 bg-gray-900 ">
            <div className="py-1">
              {categories.map((items) => (
                <Link
                  key={items.text}
                  href={`${items.link}`}
                  onClick={() => selectingCategory(items.text)}
                  className="block w-full text-start px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                >
                  {items.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropDown;