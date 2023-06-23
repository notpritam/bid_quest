"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
const Header = () => {
  const { theme, setTheme } = useTheme();
  const [checkbox, setCheckbox] = useState(false);
  useEffect(() => {
    console.log(theme);
    if (theme == "dark") {
      setCheckbox(true);
      setTheme("dark");
    } else {
      setCheckbox(false);
      setTheme("light");
    }
  }, [theme]);

  const handleThemeChange = (e) => {
    if (checkbox) {
      setCheckbox(false);
      setTheme("light");
    } else {
      setCheckbox(true);
      setTheme("dark");
    }
  };

  const getImagePath = (url, extension) => {
    if (theme === "light") {
      return url + "." + extension;
    } else if (theme === "dark") {
      return url + "_dark." + extension;
    }
    // If theme is not 'light' or 'dark', you can provide a fallback image path here.
    return url + "." + extension;
  };

  return (
    <div className="">
      <header className="h-[90px] flex justify-between items-center pl-[40px] pr-[40px]">
        <div className="flex gap-10">
          <Image
            height={36}
            width={130}
            src={getImagePath("/assets/logo", "svg")}
            alt=""
          />

          <div className="text-[15px] font-jost flex gap-[60px] align-middle items-center">
            <span className="hover:text-[#3A628B]">Catalog</span>
            <span className="hover:text-[#3A628B]">Choose an auction</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <input
            className="rounded-[32px] h-[40px]  p-4 w-[406px] bg-bgGray dark:bg-bgGrayDark flex items-center"
            placeholder="I want to bid on..."
          ></input>
          <div className="flex gap-1">
            <Image
              height={20}
              width={20}
              src={getImagePath("/assets/map_icon", "svg")}
              alt="Done"
            />
            <span className="font-jost text-4">Bangalore</span>
          </div>
        </div>

        <div className="flex gap-[30px] items-center">
          <Image
            height={20}
            width={20}
            src={getImagePath("/assets/user", "svg")}
            alt=""
          />
          <Image
            height={20}
            width={20}
            src={getImagePath("/assets/heart", "svg")}
            alt=""
          />
          <Image
            height={20}
            width={20}
            src={getImagePath("/assets/bag", "svg")}
            alt=""
          />

          <label className="relative inline-flex items-center  cursor-pointer align-middle">
            <input
              type="checkbox"
              checked={checkbox}
              onChange={handleThemeChange}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-[#3A628B] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#3A628B]"></div>
          </label>
        </div>
      </header>

      <div className="flex items-center gap-8 justify-center font-jost text-[16px] font-light  ">
        <span className=" opacity-70 hover:opacity-100">Sofas & Armchair</span>
        <span className=" opacity-70 hover:opacity-100">
          Beds and mattresses
        </span>
        <span className=" opacity-70 hover:opacity-100">Texttiles</span>
        <span className=" opacity-70 hover:opacity-100">Chairs</span>
        <span className=" opacity-70 hover:opacity-100">Clothes</span>
        <span className=" opacity-70 hover:opacity-100">Electronics</span>
      </div>
    </div>
  );
};

export default Header;
