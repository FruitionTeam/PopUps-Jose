import React from "react";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <>
      <div className="py-5">
        <h1 className="text-5xl heading mt-5 mb-3 text-center text-gray-800">
          Testimonials
        </h1>
        <div className="sm:flex-cols-2 flex-wrap md:flex-cols-3 flex gap-3 justify-between h-auto pt-5 pb-[80px]">
          <TestimonialCard
            name="Testimonial #1"
            review='"I love Food Drops it is the best"'
          />
          <TestimonialCard
            name="Testimonial #2"
            review='"Food Drops changed my life and my business."'
          />
          <TestimonialCard
            name="Testimonial #3"
            review='"Food Drops is the best thing that ever happened to me"'
          />
        </div>
      </div>
    </>
  );
}

export default Testimonials;
