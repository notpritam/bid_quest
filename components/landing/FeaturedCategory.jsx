"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const FeaturedCategory = () => {
  const { theme, setTheme } = useTheme();

  const data = [
    [
      {
        categoryName: "Category 1",
        imageLink: "https://example.com/category1.jpg",
        link: "https://example.com/category1",
      },
      {
        categoryName: "Category 2",
        imageLink: "https://example.com/category2.jpg",
        link: "https://example.com/category2",
      },
    ],
    [
      {
        categoryName: "Category 3",
        imageLink: "https://example.com/category3.jpg",
        link: "https://example.com/category3",
      },
      {
        categoryName: "Category 4",
        imageLink: "https://example.com/category4.jpg",
        link: "https://example.com/category4",
      },
    ],
    [
      {
        categoryName: "Category 3",
        imageLink: "https://example.com/category3.jpg",
        link: "https://example.com/category3",
      },
      {
        categoryName: "Category 4",
        imageLink: "https://example.com/category4.jpg",
        link: "https://example.com/category4",
      },
    ],
  ];
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
    <section className="pr-[40px] pl-[40px] mt-24 mb-24">
      <div>
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <span className="font-bold text-[26px] ">FEATURED CATEGORY</span>
            <div className="w-[160px] h-[1px] bg-black dark:bg-white opacity-50"></div>
          </div>
        </div>

        <div className="flex justify-between">
          {data.map((item, index) => (
            <>
              <div
                className={
                  index == 1
                    ? "mt-48 flex flex-col gap-32"
                    : "mt-24 flex flex-col gap-32"
                }
              >
                <div className="w-[404px] h-[404px] relative ">
                  <img
                    className="w-[100%] h-[100%]  object-cover object-bottom rounded-[10px]  "
                    src="https://images.pexels.com/photos/2606612/pexels-photo-2606612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  ></img>

                  <div className=" h-[40px] font-jost text-[18px]  pl-[16px] pr-[16px] pb-[10px] flex items-center gap-2  absolute bottom-16 left-4">
                    <span className="text-white">{item[0].categoryName}</span>
                    <Image
                      height={20}
                      width={20}
                      className=""
                      src={getImagePath("/assets/forward_arrow", "svg")}
                      alt=""
                    />
                  </div>
                </div>

                <div className="w-[404px] h-[404px] relative ">
                  <img
                    className="w-[100%] h-[100%]  object-cover object-bottom rounded-[10px]  "
                    src="https://images.pexels.com/photos/2606612/pexels-photo-2606612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  ></img>

                  <div className=" h-[40px] font-jost text-[18px]  pl-[16px] pr-[16px] pb-[10px] flex items-center gap-2  absolute bottom-16 left-4">
                    <span className="text-white">{item[1].categoryName}</span>
                    <Image
                      height={20}
                      width={20}
                      className=""
                      src={getImagePath("/assets/forward_arrow", "svg")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategory;
