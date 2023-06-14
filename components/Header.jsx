import React from "react";

const Header = () => {
  return (
    <header className="h-[90px] flex justify-between items-center pl-[40px] pr-[40px]">
      <div className="flex gap-10">
        <span>BidQuest</span>
        <div>
          <span>Catalog</span>
          <span>Choose an auction</span>
        </div>
      </div>

      <div>
        <div></div>
        <div>
          Map Icon
          <span>Bangalore</span>
        </div>
      </div>

      <div className="flex gap-[29px]">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
    </header>
  );
};

export default Header;
