"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const { theme, setTheme } = useTheme();
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
    <section className="mt-48 pt-24 bg-main flex justify-center items-center flex-col w-[100%]">
      <div className="flex justify-center flex-col items-center gap-8 w-[60%] mb-[50px]">
        <Image height={48} width={174} src="/assets/logo_dark.svg" alt="" />
        <div className="h-[1px] bg-borderColor opacity-40 w-full"></div>

        <div className="font-jost text-[20px] text-white flex gap-[80px] ">
          <span className="">Our Story</span>
          <span className="">About the Project</span>
          <span className="">Contact Us</span>
        </div>

        <div className="h-[1px] bg-borderColor opacity-40 w-full"></div>
        <span className="font-jost text-[14px] opacity-60 text-white text-center">
          * This statement has not been evaluated by the FDA. This product is
          not intended to diagnose, treat, cure, or prevent any disease.† Free
          Shipping on all domestic lower 48 states typical delivery time 4-5
          business days
        </span>
      </div>
      <div className=" w-full h-[40px] pl-[40px] pr-[40px] text-white">
        <span>© BIDQUEST. 2023</span>
      </div>
    </section>
  );
};

export default Footer;
