import React from "react";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 20 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const FeaturedAuction = async () => {
  const data = await getData();

  const categories = [
    {
      categoryName: "Nature",
      image:
        "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      categoryName: "Food",
      image:
        "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      categoryName: "Sports",
      image:
        "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      categoryName: "Travel",
      image:
        "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      categoryName: "Fashion",
      image:
        "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      categoryName: "Technology",
      image:
        "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      categoryName: "Animals",
      image:
        "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      categoryName: "Music",
      image:
        "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <section className="pl-[40px] pr-[40px] mb-40 mt-32">
      <div className="mt-16 ">
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <span className="font-bold text-[26px] ">FEATURED AUCTIONS</span>
            <div className="w-[160px] h-[1px] bg-black dark:bg-white opacity-50"></div>
          </div>
          <span>View All</span>
        </div>

        <div className="flex flex-nowrap gap-16 mt-24 mb-24  scrollbar-none overflow-x-auto _horizontalScroll ">
          {categories.map((item) => (
            <>
              <div className=" flex-shrink-0 relative overflow-hidden rounded-[10px] w-[240px] h-[240px] border-borderColor border-[1px] border-opacity-30 ">
                <img
                  src={item.image}
                  className="w-[100%] h-[100%]  object-cover object-center rounded-[10px]  "
                ></img>

                <div className="_items-bg-Linear h-[40px] w-[100%] font-jost text-[18px]  pl-[16px] pr-[16px] pb-[10px] flex items-end  absolute bottom-0">
                  <span className="text-white">{item.categoryName}</span>
                  <hr className="w-[74px] h-[1px]"></hr>
                </div>
              </div>
            </>
          ))}
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default FeaturedAuction;
