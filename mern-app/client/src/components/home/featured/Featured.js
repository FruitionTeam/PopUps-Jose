import React from "react";
import FeaturedCard from "./FeaturedCard";

function Featured() {
  return (
    <div className="pt-[40px] pb-[35px]">
      <h1 className="text-4xl heading py-[9px] text-gray-800">Featured</h1>
      <div className="py-[20px] flex gap-3 flex-wrap">
        <FeaturedCard
          delay={1}
          title="Jia's Noodles 1"
          cuisine="Chinese"
          rating="★★★★★"
        />
        <FeaturedCard
          delay={2}
          title="Jia's Noodles 2"
          cuisine="Chinese"
          rating="★★★"
        />
        <FeaturedCard
          delay={3}
          title="Jia's Noodles 3"
          cuisine="Chinese"
          rating="★★"
        />
        <FeaturedCard
          delay={4}
          title="Jia's Noodles 4"
          cuisine="Chinese"
          rating="★★★★"
        />
      </div>
    </div>
  );
}

export default Featured;
