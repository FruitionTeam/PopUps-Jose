import React from "react";

function Login() {
  return (
    <div className=" background2 h-[75vh] flex flex-col text-center py-9">
      <form className="background4 mx-auto w-[700px] pt-8 pb-10 px-20 rounded-xl shadow-xl">
        <h1 className="heading text-5xl text-white text-shadow leading-tight">
          Log in to your account
        </h1>
        <input
          type="email"
          placeholder="Email"
          className="bg-[#FFFFFF] mt-6 mx-auto w-[65%] text-slate-600 shadow-md text-lg h-[50px] flex items-center px-8 rounded-full"
        ></input>

        <input
          type="text"
          placeholder="Password"
          className="bg-[#FFFFFF] mt-5 mx-auto w-[65%] text-slate-600 shadow-md text-lg h-[50px] flex items-center px-8 rounded-full"
        ></input>
        <button className="background-test2 px-9 py-3 font-bold text-white mt-7 mb-5 rounded-lg mx-auto shadow-2xl">
          Log in
        </button>
        <div className="flex gap-2 items-center justify-center">
          <p className="font-bold text-test2">Don't have an account yet?</p>
          <a href="/signup" className="underline font-bold text-test2">
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
