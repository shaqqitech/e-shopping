"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiSolidShoppingBag } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { PiSignOutBold } from "react-icons/pi";
import { useSelector } from "react-redux";
import { tilt_neon } from "../font";
import ProtectedRoute from "./ProtectedRoute";
import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { user, logOut } = UserAuth();
  const router = useRouter()

  const handleLogOut = async () => {
    try {
      await logOut();
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const toggleMobileMenu = () => {
    const toggle = isMobile;
    setIsMobile(!toggle);
  };

  const items = useSelector((state) => state.cart);

  return (
    <nav className=" sticky top-0 p-5 z-[200] dark:bg-gray-800 dark:text-white bg-[#fefae0] shadow-gray-300 shadow-sm">
      <div className="container mx-auto flex justify-between items-center text-black dark:bg-gray-800 dark:text-white">
        <Link
          href={"/"}
          className={`text-3xl md:text-4xl font-bold text-black dark:text-white ${tilt_neon.className}`}
        >
          E-Shopping
        </Link>
        <div className="hidden md:flex space-x-4">
          <a href={"/"} className="hover:text-blue-500">
            Home
          </a>
          <a href={"/about"} className="hover:text-blue-500">
            About
          </a>
          <a href={"/headphones"} className="hover:text-blue-500">
            Products
          </a>
          <a href={"/contact"} className="hover:text-blue-500">
            Contact
          </a>
          <ProtectedRoute>
            <Link href={"/cart"} className="flex font-bold">
              <BiSolidShoppingBag size={20} /> <span>{items.length}</span>
            </Link>
          </ProtectedRoute>
          {user?.email ? (
            <div className="flex justify-between space-x-2">
              <RiAccountPinCircleFill size={20} className="cursor-pointer" />
              <PiSignOutBold
                size={20}
                className="cursor-pointer"
                onClick={handleLogOut}
              />
            </div>
          ) : (
            <Link href={"/signup"} className="flex font-bold">
              <BsFillPersonFill size={20} />
            </Link>
          )}
        </div>
        <div className="md:hidden flex items-center justify-between space-x-3">
          <div onClick={toggleMobileMenu}>
            {isMobile ? (
              <FaTimes className="text-2xl cursor-pointer" />
            ) : (
              <FaBars className="text-2xl cursor-pointer" />
            )}
          </div>
          <ProtectedRoute>
            <Link href={"/cart"} className="flex font-bold">
              <BiSolidShoppingBag size={20} /> <span>{items.length}</span>
            </Link>
          </ProtectedRoute>
          {user?.email ? (
            <div className="flex justify-between space-x-2">
              <RiAccountPinCircleFill size={20} className="cursor-pointer" />
              <PiSignOutBold
                size={20}
                className="cursor-pointer"
                onClick={handleLogOut}
              />
            </div>
          ) : (
            <Link href={"/signup"} className="flex font-bold">
              <BsFillPersonFill size={20} />
            </Link>
          )}
        </div>
      </div>
      {isMobile && (
        <div className="md:hidden text-center flex justify-center items-center flex-col absolute w-28 h-44 top-16 right-5 rounded-xl bg-gray-900 text-white ">
          <a href={"/"} className="block py-2 w-full hover:bg-gray-600">
            Home
          </a>
          <a href={"/about"} className="block py-2 w-full hover:bg-gray-600">
            About
          </a>
          <a
            href={"/headphones"}
            className="block py-2 w-full hover:bg-gray-600"
          >
            Products
          </a>
          <a href={"/contact"} className="block py-2 w-full hover:bg-gray-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
