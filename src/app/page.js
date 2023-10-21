"use client";
import { useEffect, useState } from "react";

import Delivery from "./components/Delivery";
import Discount from "./components/Discount";
import Main from "./components/Main";
import NowInTrending from "./components/NowInTrending";
import Products from "./components/Products";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <main className={`w-screen min-h-screen relative`}>
      <Main />
      <Products />
      <Discount />
      <Delivery />
      <NowInTrending />
    </main>
  );
}
