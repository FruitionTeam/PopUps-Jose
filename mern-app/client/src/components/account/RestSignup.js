import React from "react";

function RestSignup() {
  return (
    <div className=" background2 h-[88vh] flex flex-col text-center py-9">
      <form className="background4 mx-auto w-[700px] pt-8 pb-10 px-20 rounded-xl shadow-xl">
        <h1 className="heading text-5xl text-white text-shadow leading-tight">
          Finish setting up your account
        </h1>
        <input
          type="text"
          placeholder="Restaurant Name"
          className="bg-[#FFFFFF] mt-6 mx-auto w-[65%] text-slate-600 shadow-md text-lg h-[50px] flex items-center px-8 rounded-full"
        ></input>

        <input
          type="text"
          placeholder="Restaurant Type"
          className="bg-[#FFFFFF] mt-5 mx-auto w-[65%] text-slate-600 shadow-md text-lg h-[50px] flex items-center px-8 rounded-full"
        ></input>
        <input
          type="text"
          placeholder="Restaurant Size"
          className="bg-[#FFFFFF] mt-5 mx-auto w-[65%] text-slate-600 shadow-md text-lg h-[50px] flex items-center px-8 rounded-full"
        ></input>
        <input
          type="text"
          placeholder="Date Opened"
          className="bg-[#FFFFFF] mt-5 mx-auto w-[65%] text-slate-600 shadow-md text-lg h-[50px] flex items-center px-8 rounded-full"
        ></input>

        <button className="background-test2 px-9 py-3 font-bold text-white mt-7 mb-5 rounded-lg mx-auto shadow-2xl">
          Sign Up
        </button>

        <div className="flex gap-2 items-center justify-center">
          <p className="font-bold text-test2">Already have an account?</p>
          <a href="/login" className="underline font-bold text-test2">
            Log in
          </a>
        </div>
      </form>
    </div>
  );
}

export default RestSignup;
