import React from "react";

function Featured() {
  return (
    <div className="bg-[#f5e6cb] px-[150px] py-[40px]">
      <h1 className="text-4xl titan inline py-[9px] text-slate-700">
        Featured
      </h1>
      <div className="py-[20px] flex justify-between flex-wrap">
        <div className="flex flex-col bg-[#FFFFFF] h-[340px] w-[280px] shadow-md hover:shadow-2xl rounded-lg px-5 pt-5 pb-4">
          <div className="flex flex-col gap-0">
            <p className="text-2xl font-bold text-slate-700">Jia's Noodles</p>
            <p className="text-md -mt-0.5">Chinese</p>
          </div>
          <div className="bg-[#dbdbdb] h-[230px] w-[235px] mx-auto mt-2 items-center justify-center flex">
            image
          </div>
          <div className="mt-2 text-3xl text-yellow-300">★★★★★</div>
        </div>
        <div className="flex bg-[#FFFFFF] h-[340px] w-[280px] shadow-md hover:shadow-2xl rounded-lg"></div>
        <div className="flex bg-[#FFFFFF] h-[340px] w-[280px] shadow-md hover:shadow-2xl rounded-lg"></div>
        <div className="flex bg-[#FFFFFF] h-[340px] w-[280px] shadow-md hover:shadow-2xl rounded-lg"></div>
      </div>
    </div>
  );
}

export default Featured;
