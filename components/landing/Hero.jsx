"use client";
import { useTheme } from "next-themes";
import React from "react";

const Hero = () => {
  const { theme, setTheme } = useTheme();

  const getImagePath = (url, extension) => {
    if (theme === "light") {
      return url + "." + extension;
    } else if (theme === "dark") {
      return url + "_dark." + extension;
    }
    return url + "." + extension;
  };
  return (
    <section className="mt-4 pb-8 mb-16 h-[90vh] border-b-[1px] dark:border-b-borderColorDark dark:border-opacity-40 border-b-borderColor">
      <div className="_box relative z-10 w-[100%] h-[100%] flex align-bottom">
        <div className="_bgTextLayer z-0 absolute  w-[100%] h-[100%] overflow-hidden">
          <span className="absolute top-40 left-8  text-[140px] font-inter uppercase font-bold text-bgText dark:text-bgTextDark">
            Treasure
          </span>
          <span className="absolute top-12 -right-8  text-[76px] font-inter uppercase font-bold text-bgText dark:text-bgTextDark">
            Competition
          </span>
          <span className="absolute bottom-12 left-[50vw]  text-[76px] font-inter uppercase font-bold text-bgText dark:text-bgTextDark">
            Opportunity
          </span>
        </div>
        <div className="_imageLayer relative z-1"></div>
        <div className="_headerTextLayer z-2 relative flex align-bottom w-[37vw] p-8 ">
          <div className="flex flex-col gap-[24px] items-start justify-end ">
            <span className="font-asap text-[32px] font-light pr-10 uppercase">
              Where Bids Turn into Wins. Your Gateway to Amazing Deals.
            </span>
            <span className="font-asap text-[16px]">
              Are you ready to embrace the rush of the auction floor?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
