import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(null || false);
  const MenuItem = (
    <React.Fragment>
      {/* <Link
        to="/"
        onClick={() => setShow(!show)}
        className=" pr-[25px] focus:outline-none transition duration-150 ease-in-out hover:bg-[#00ae87] hover:text-white rounded font-medium   px-5 py-2 "
      >
        Home
      </Link> */}
      <Link
        to="/"
        onClick={() => setShow(!show)}
        className=" pr-[25px] focus:outline-none  transition duration-150 ease-in-out hover:bg-[#FFFFFF] rounded font-medium  px-5 py-2 "
      >
        Home
      </Link>
      <Link
        to="/map"
        onClick={() => setShow(!show)}
        className=" pr-[25px] focus:outline-none  transition duration-150 ease-in-out hover:bg-[#FFFFFF] rounded font-medium  px-5 py-2 "
      >
        Interactive Map
      </Link>
      <Link
        to="/about"
        onClick={() => setShow(!show)}
        className=" pr-[25px] focus:outline-none  transition duration-150 ease-in-out hover:bg-[#FFFFFF] rounded font-medium  px-5 py-2 "
      >
        About Us
      </Link>
      <Link
        to="/account"
        onClick={() => setShow(!show)}
        className=" pr-[25px] focus:outline-none -gray-300  transition duration-150 ease-in-out hover:bg-[#FFFFFF] rounded font-medium  px-5 py-2 "
      >
        Account
      </Link>
    </React.Fragment>
  );
  return (
    <div>
      <div className=" h-full text-slate-800">
        {/* Code block starts */}
        <nav className="shadow xl:block hidden w-full bg-[#f7f6f2] z-40">
          <div className="mx-auto container flex flex-col items-center justify-center pt-4 pb-3">
            <h1 className="mx-auto mb-2 mt-2 text-5xl font-bold titan">
              FOOD DROPS
            </h1>
            <div className="items-center justify-center flex w-full">
              {/* lg ---start */}
              <div className="">
                <Link to="/" className="">
                  {/* <h2 className="hidden sm:block text-3xl font-bold leading-normal pl-3">
                    
                  </h2> */}
                </Link>
              </div>
              {/* lg ----- items ----- */}
              <div className="flex">
                <div className="hidden xl:flex items-center gap-2 md:mr-6 xl:mr-16 ">
                  {MenuItem}
                </div>
                {/* lg------end-section ------- */}
              </div>
            </div>
          </div>
        </nav>
        <nav className="">
          <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center z-40">
            {/* sm-----menubar */}
            <div className="flex items-center  p-2 ">
              <div
                id="menu"
                className="text-gray-500 bg-[#00ae87]"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  ""
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon  icon-tabler icon-tabler-menu-2"
                    width="42"
                    height="42"
                    style={{
                      //   border: "2px solid white",
                      padding: "3px 3px",
                      borderRadius: "60px",
                      fontSize: "40px",
                    }}
                    color="white"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1={4} y1={6} x2={20} y2={6} />
                    <line x1={4} y1={12} x2={20} y2={12} />
                    <line x1={4} y1={18} x2={20} y2={18} />
                  </svg>
                )}
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}

          <div
            className={
              show
                ? "w-full xl:hidden h-full absolute z-40  transform  translate-x-0 "
                : "   w-full xl:hidden h-full absolute z-40  transform -translate-x-full"
            }
          >
            <div
              className=" opacity-50 w-full h-full"
              onClick={() => setShow(!show)}
            />
            <div className="w-64 z-40 fixed overflow-y-auto top-0 shadow-2xl h-[100%] flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out bg-slate-300  ">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full  ">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <p className="text-2xl font-bold fonts">
                            Choose Menu
                          </p>
                        </div>
                        <div
                          id="cross"
                          className="text-gray-800"
                          onClick={() => setShow(!show)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-x"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* sm------nav---middle  Item */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
