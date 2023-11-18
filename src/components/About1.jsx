import React from "react";
import img from "../assets/undraw_My_universe_803e 1.png";

const About1 = () => {
  return (
    <div className="md:px-14 px-4 max-w-screen-2xl my-24 mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-5">
        <div className="w-full lg:w-1/2 ">
          <div className="lg:px-6">
            <div className="md:text-5xl text-4xl text-primary font-bold ">
              You can Practice at any{" "}
              <span className="md:text-5xl text-4xl text-secondary font-bold ml-2">
                time convenient for you.
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
        <div className="w-full lg:w-1/2">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About1;
