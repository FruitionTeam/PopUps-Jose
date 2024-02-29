import React from "react";

function Featured() {
  return (
    <div className="pt-[40px] pb-[35px]">
      <h1 className="text-4xl heading inline py-[9px] text-gray-800">
        Featured
      </h1>
      <div className="py-[20px] flex gap-3 flex-wrap">
        <div className="flex flex-col background3 h-[340px] w-[280px] shadow-md hover:shadow-2xl rounded-lg px-5 pt-5 pb-4 drop-in delay-1">
          <div className="flex flex-col gap-0">
            <p className="text-2xl font-bold text-gray-700">Jia's Noodles</p>
            <p className="text-md  text-gray-600 mt-0.4">Chinese</p>
          </div>
          <div className="bg-[#dbdbdb] h-[230px] w-[235px] mx-auto mt-2 items-center justify-center flex">
            image
          </div>
          <div className="mt-2 text-3xl text-yellow-300">★★★★★</div>
        </div>
        <div className="flex background3  h-[340px] w-[280px] shadow-md hover:shadow-2xl rounded-lg drop-in delay-2"></div>
        <div className="flex background3  h-[340px] w-[280px] shadow-md hover:shadow-2xl rounded-lg drop-in delay-3"></div>
        <div className="flex background3  h-[340px] w-[280px] shadow-md hover:shadow-2xl rounded-lg drop-in delay-4"></div>
      </div>
    </div>
  );
}

export default Featured;
