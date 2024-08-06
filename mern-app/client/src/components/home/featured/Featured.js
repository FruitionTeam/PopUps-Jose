import React from "react";
import FeaturedCard from "./FeaturedCard";

function Featured() {
  return (
    <div className="pt-[40px] pb-[35px]">
      <h1 className="text-4xl heading py-[9px] text-red-2">Featured</h1>
      <div className="py-[20px] flex gap-3 flex-wrap">
        <FeaturedCard
          delay={1}
          title="Restaurant Name"
          cuisine="Thai"
          rating="★★★★★"
        />
        <FeaturedCard
          delay={2}
          title="Restaurant Name"
          cuisine="Chinese"
          rating="★★★"
        />
        <FeaturedCard
          delay={3}
          title="Restaurant Name"
          cuisine="Italian"
          rating="★★"
        />
        <FeaturedCard
          delay={4}
          title="Restaurant Name"
          cuisine="Japanese"
          rating="★★★★"
        />
      </div>
    </div>
  );
}

export default Featured;
