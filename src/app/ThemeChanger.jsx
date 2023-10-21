"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="sticky w-12 h-12 border-4 border-black dark:border-white rounded-full left-5 bottom-5 flex justify-center items-center cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <BsFillSunFill size={25} />
      ) : (
        <BsFillMoonStarsFill size={25} />
      )}
    </div>
  );
};

export default ThemeChanger;
