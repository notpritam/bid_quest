"use client";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const NewArrival = () => {
  const { theme, setTheme } = useTheme();
  const products = [
    {
      freeDelivery: true,
      imageLink: "https://example.com/product1.jpg",
      productTitle: "Product 1",
      category: "Category A",
      bidsCount: 5,
      favorite: false,
    },
    {
      freeDelivery: false,
      imageLink: "https://example.com/product2.jpg",
      productTitle: "Product 2",
      category: "Category B",
      bidsCount: 10,
      favorite: true,
    },
    {
      freeDelivery: true,
      imageLink: "https://example.com/product3.jpg",
      productTitle: "Product 3",
      category: "Category C",
      bidsCount: 3,
      favorite: false,
    },
    {
      freeDelivery: false,
      imageLink: "https://example.com/product4.jpg",
      productTitle: "Product 4",
      category: "Category A",
      bidsCount: 8,
      favorite: true,
    },
    {
      freeDelivery: true,
      imageLink: "https://example.com/product5.jpg",
      productTitle: "Product 5",
      category: "Category B",
      bidsCount: 2,
      favorite: false,
    },
    {
      freeDelivery: true,
      imageLink: "https://example.com/product6.jpg",
      productTitle: "Product 6",
      category: "Category C",
      bidsCount: 6,
      favorite: true,
    },
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
    <section className="pl-[40px] pr-[40px] pb-16 border-b-[1px] border-borderColor dark:border-borderColorDark mb-32">
      <div>
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <span className="font-bold text-[26px] ">NEW ARRIVALS</span>
            <div className="w-[160px] h-[1px] bg-main dark:bg-white opacity-50"></div>
          </div>
          <span>View All</span>
        </div>

        <div className="flex flex-nowrap gap-16 mt-24 mb-24  scrollbar-none overflow-x-auto _horizontalScroll ">
          {products.map((product) => (
            <>
              <div className="flex flex-col gap-[20px]">
                <div className="h-[316px] w-[316px] relative">
                  <img
                    className="w-[100%] h-[100%]  object-cover object-bottom rounded-[10px]  "
                    src="https://images.pexels.com/photos/2606612/pexels-photo-2606612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  ></img>
                  {/* <div className=" h-[40px] font-jost text-[18px]  pl-[16px] pr-[16px] pb-[10px] flex items-center gap-2  absolute top-2 right-4">
                    <hr className="w-[74px] h-[1px] bg-green-700"></hr>
                    <span className="text-green-700">Free Shipping</span>
                  </div> */}
                </div>

                <div className="relative flex-col gap-6">
                  <div>
                    <span className="text-[12px] text-[#888888] uppercase font-inter font-thin">
                      Direct Sofa
                    </span>
                  </div>
                  <div>
                    <span className="text-[16px]  font-inter ">
                      Comfortab Product Titel
                    </span>
                  </div>
                  <div className=" flex items-end  ">
                    <span className="text-[16px] text-textBid font-jost font-extrabold">
                      13 Bids
                    </span>
                    <hr className="w-[74px] h-[1px]"></hr>
                  </div>
                  <Image
                    height={20}
                    width={20}
                    className="absolute top-0 right-4"
                    src={getImagePath("/assets/heart", "svg")}
                    alt=""
                  />
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <span className="text-[14px] font-bold font-inter">01</span>
            <div className="w-[252px] h-[2px] bg-borderColorDark">
              <div className="h-[2px] w-[30%] bg-red-600"></div>
            </div>
            <span className="text-[14px] font-bold font-inter">06</span>
          </div>

          <div className="flex gap-2 items-center">
            <div className="w-[150px] h-[2px] bg-borderColor dark:bg-borderColorDark"></div>
            <div className="h-[50px] w-[50px] rounded-full bg-black  dark:bg-white flex items-center justify-center">
              <Image
                height={20}
                width={20}
                className=""
                src={getImagePath("/assets/back_arrow", "svg")}
                alt=""
              />
            </div>
            <div className="h-[50px] w-[50px] rounded-full border-2 border-black  dark:border-white flex items-center justify-center">
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
      </div>
    </section>
  );
};

export default NewArrival;
