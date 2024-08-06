import React from "react";

function Signup() {
  return (
    <div className=" background2 h-[80vh] flex flex-col text-center py-9">
      <form className="background4 mx-auto w-[700px] pt-8 pb-10 px-20 rounded-xl shadow-xl">
        <h1 className="heading text-5xl text-white text-shadow leading-tight">
          Sign up
        </h1>
        <input
          type="email"
          placeholder="Email"
          className="background3 mt-6 mx-auto w-[65%] text-slate-600 shadow-md text-lg h-[50px] flex items-center px-8 rounded-full"
        ></input>

        <input
          type="text"
          placeholder="Password"
          className="background3 mt-5 mx-auto w-[65%] text-slate-600 shadow-md text-lg h-[50px] flex items-center px-8 rounded-full"
        ></input>
        <input
          type="text"
          placeholder="Confirm Password"
          className="background3 mt-5 mx-auto w-[65%] text-slate-600 shadow-md text-lg h-[50px] flex items-center px-8 rounded-full"
        ></input>
        <input
          type="text"
          placeholder="Account Type"
          className="background3 mt-5 mx-auto w-[65%] text-slate-600 shadow-md text-lg h-[50px] flex items-center px-8 rounded-full"
        ></input>
        <button className="background3 px-9 py-3 font-bold text-red-lt mt-7 mb-5 rounded-lg mx-auto shadow-md">
          <a href="/finish-restaurant-account">Next</a>
        </button>
        <div className="flex gap-2 items-center justify-center">
          <p className="font-bold text-white text-shadow-md">
            Already have an account?
          </p>
          <a
            href="/login"
            className="underline font-bold text-white text-shadow-md"
          >
            Log in
          </a>
        </div>
      </form>
    </div>
  );
}

export default Signup;
