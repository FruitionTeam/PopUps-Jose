import React from "react";
import "../../App.css";
import Location from "./Location";
import Featured from "./Featured";
import Sorted from "./Sorted";

function Home() {
  return (
    // <div className="bg-[#e0c299] py-[10px]">
    <div>
      <Location />
      <Featured />
      <Sorted />
    </div>
  );
}

export default Home;
