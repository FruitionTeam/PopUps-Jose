import React from "react";

function FeaturedCard({ delay, title, cuisine }) {
  return (
    <div
      className={`flex flex-col background3 h-[340px] w-[280px] shadow-md hover:shadow-2xl rounded-lg px-5 pt-5 pb-4 drop-in delay-${delay}`}
    >
      <div className="flex flex-col gap-0">
        <p className="text-2xl font-bold text-gray-700">{title}</p>
        <p className="text-md text-gray-600 mt-0.4">{cuisine}</p>
      </div>
      <div className="bg-[#dbdbdb] h-[230px] w-[235px] mx-auto mt-2 items-center justify-center flex">
        image
      </div>
      <div className="mt-2 text-3xl text-yellow-300">★★★★★</div>
    </div>
  );
}

export default FeaturedCard;
