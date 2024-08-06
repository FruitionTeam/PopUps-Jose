import React from "react";

function TestimonialCard({ name, review }) {
  return (
    <div
      className={`bg-white h-[250px] md:w-[48%] lg:w-[32%] rounded-xl py-12 px-14 shadow-lg flex flex-col items-center`}
    >
      <p className="text-gray-700 text-2xl font">{review}</p>
      <p className="text-lg text-gray-600 mt-3 mx-auto font">- {name}</p>
    </div>
  );
}

export default TestimonialCard;
