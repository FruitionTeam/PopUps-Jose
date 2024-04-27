import React from "react";

function CallToAction() {
  return (
    <div className="h-auto flex flex-col pb-10">
      <div className="rounded-2xl shadow-xl background4 p-10 mx-auto text-center flex flex-col md:max-w-[90%] lg:w-[100%] lg:max-w-[100%] justify-center items-center mt-5 transition-transform duration-500 transform hover:scale-105">
        <h1 className="text-center font-bold text-white text-shadow heading text-5xl">
          Don't Miss Out!
        </h1>
        <h2 className="font-bold text-white text-shadow-md underline mt-4 mb-1 max-w-[50%] text-2xl">
          Secure your spot on the waitlist to be featured on Food Drops
        </h2>
        <input
          type="text"
          placeholder="Restaurant Name"
          className="bg-[#FFFFFF] mt-6 mx-auto w-[45%] shadow-lg text-slate-600 text-lg h-[50px] flex items-center px-8 rounded-full"
        ></input>
        <input
          type="email"
          placeholder="Email"
          className="bg-[#FFFFFF] mt-6 mx-auto w-[45%] shadow-lg text-slate-600 text-lg h-[50px] flex items-center px-8 rounded-full"
        ></input>
        <button className="background-test2 px-9 py-3 font-bold text-white mt-7 mb-1 rounded-lg mx-auto shadow-2xl">
          Submit
        </button>
      </div>
    </div>
  );
}

export default CallToAction;
