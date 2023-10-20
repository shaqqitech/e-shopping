'use client'
import { useEffect, useState } from "react";
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs'
import Delivery from "./components/Delivery";
import Discount from "./components/Discount";
import Main from "./components/Main";
import NowInTrending from "./components/NowInTrending";
import Products from "./components/Products";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

const toggleDarkMode = () => {
  setDarkMode(!darkMode)
}

  return (
    <main className={`w-screen min-h-screen relative ${darkMode ? 'bg-gray-800 text-white' : 'bg-[#fefae0]'}`}>
      <Main />
      <Products />
      <Discount />
      <Delivery />
      <NowInTrending />
      <div className="sticky w-12 h-12 border-2 border-black rounded-full left-5 bottom-5 flex justify-center items-center cursor-pointer" onClick={toggleDarkMode}>
        {darkMode ? <BsFillSunFill size={25} /> : <BsFillMoonStarsFill size={25} />}
      </div>
    </main>
  )
}
