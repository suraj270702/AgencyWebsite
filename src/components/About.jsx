import React from "react";
import img from "../assets/undraw_Reading_time_re_phf7 2.png";
const About = () => {
  return (
    <div className="md:px-14 px-4 max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
        <div className="w-full lg:w1/2">
          <img src={img} alt="" />
        </div>
        <div className="w-full lg:w-1/2 lg:px-6">
          <div class="sm:w-full md:text-5xl text-4xl text-primary font-semibold">
            We have been improving our product 
               <span class=" ml-2 md:text-5xl text-4xl font-semibold text-secondary">
               for many years
            </span>
          </div>
          <p className="text-base text-tartiary mt-6">
            A good example of a paragraph contains a topic conclusion. 'There
            are many different kinds of animals that live in China.
          </p>
          <button className="px-4 py-2 text-white bg-secondary hover:bg-primary text-xl transition-all duration-300 mt-6">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
