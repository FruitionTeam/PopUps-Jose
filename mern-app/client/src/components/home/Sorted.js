import React from "react";

function Sorted() {
  return (
    <div className="bg-[#f5e6cb] px-[150px] py-[20px]">
      <div className="flex mb-[20px]">
        <div className="flex h-[50px] w-[275px] bg-[#FFFFFF] ml-0 rounded-full items-center px-8 text-xl shadow-md">
          <p>Sort By...</p>
          <button className="h-[20px] w-[20px] bg-[#d4d2cf] shadow mr-0 ml-auto text-gray-500 flex pb-0.5 justify-center items-center rounded">
            +
          </button>
        </div>
        <div className="flex h-[50px] w-[275px] bg-[#FFFFFF] ml-auto rounded-full items-center px-8 text-xl shadow-md">
          <p>Filter By...</p>
          <button className="h-[20px] w-[20px] bg-[#d4d2cf] shadow mr-0 ml-auto text-gray-500 flex pb-0.5 justify-center items-center rounded">
            +
          </button>
        </div>
      </div>
      {/* these are placeholders, probably replace with a component later on*/}
      <div className="py-[20px] flex justify-between flex-wrap">
        <div className="flex bg-[#FFFFFF] h-[300px] w-[275px] shadow-md hover:shadow-2xl rounded-lg mb-5"></div>
        <div className="flex bg-[#FFFFFF] h-[300px] w-[275px] shadow-md hover:shadow-2xl rounded-lg mb-5"></div>
        <div className="flex bg-[#FFFFFF] h-[300px] w-[275px] shadow-md hover:shadow-2xl rounded-lg mb-5"></div>
        <div className="flex bg-[#FFFFFF] h-[300px] w-[275px] shadow-md hover:shadow-2xl rounded-lg mb-5"></div>
        <div className="flex bg-[#FFFFFF] h-[300px] w-[275px] shadow-md hover:shadow-2xl rounded-lg mb-5"></div>
        <div className="flex bg-[#FFFFFF] h-[300px] w-[275px] shadow-md hover:shadow-2xl rounded-lg mb-5"></div>
        <div className="flex bg-[#FFFFFF] h-[300px] w-[275px] shadow-md hover:shadow-2xl rounded-lg mb-5"></div>
        <div className="flex bg-[#FFFFFF] h-[300px] w-[275px] shadow-md hover:shadow-2xl rounded-lg mb-5"></div>
      </div>
    </div>
  );
}

export default Sorted;
