import React from "react";
import "../../App.css";
import Location from "./Location";
import Featured from "./Featured";
import CallToAction from "./CallToAction";
// import Sorted from "./Sorted";

function Home() {
  return (
    // <div className="bg-[#e0c299] py-[10px]">
    <div>
      <Location />
      <div className="background2 px-[150px]">
        <Featured />
        <CallToAction />
        {/* <Sorted /> */}
      </div>
    </div>
  );
}

export default Home;
