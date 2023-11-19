import React from "react";

const Plans = () => {
  return (
    <div className="md:px-14 px-4 my-24 max-w-screen-2xl mx-auto">
      <div>
        <div className="w-full md:w-[600px] mx-auto">
          <h3 className="text-3xl md:text-5xl text-primary font-bold">
            Here are all our plans
          </h3>
          <p className="text-base font-semibold text-tartiary mt-2 w-full md:w-[400px] md:ml-12">
            A simple paragraph is comprised of three major components. The which
            is often a declarative sentence.
          </p>
        </div>
        <div className="mt-10 w-full md:w-[600px] px-10 py-4 mx-auto ">
          <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-[520px] md:ml-10">
            <h3 className="text-4xl font-bold text-primary">Monthly</h3>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              
            </label>
            <h3 className="text-4xl font-bold text-primary">Yearly</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 mt-14">

            <div className="px-4 py-6 rounded-2xl shadow-3xl">
                <div>
                    <h3 className="text-3xl text-primary font-bold text-center">Start</h3>
                    <p className="text-base text-tartiary font-semibold mt-6 text-center">A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="mt-6 flex items-center justify-center">
                        <h3 className="text-5xl text-secondary font-bold">50$</h3>
                        <span className="mt-3">/month</span>

                    </div>
                    <div className="flex items-center gap-4 mt-6 ml-6">
                    <div className="w-[28px] h-[28px] bg-[#39DC98] rounded-[50%]">

                    </div>
                    <h5 className="text-base text-primary font-[500]">Video Lessons</h5>
                    </div>
                    <div className="flex items-center gap-4 mt-6 ml-6">
                    <div className="w-[28px] h-[28px] bg-[#39DC98] rounded-[50%]">

                    </div>
                    <h5 className="text-base text-primary font-[500]">Homework Check</h5>
                    </div>
                    <div className="flex items-center gap-4 mt-6 ml-6">
                    <div className="w-[28px] h-[28px] bg-[#FD809E] rounded-[50%]">

                    </div>
                    <h5 className="text-base text-primary font-[500]">Additional practice task</h5>
                    </div>
                    <div className="flex items-center gap-4 mt-6 ml-6">
                    <div className="w-[28px] h-[28px] bg-[#FD809E] rounded-[50%]">

                    </div>
                    <h5 className="text-base text-primary font-[500]">Monthly conference</h5>
                    </div>
                    <div className="flex items-center gap-4 mt-6 ml-6">
                    <div className="w-[28px] h-[28px] bg-[#FD809E] rounded-[50%]">

                    </div>
                    <h5 className="text-base text-primary font-[500]">Personal advice for teachers</h5>
                    </div>
                    <div className="flex items-center gap-4 mt-6 ml-6">
                    <div className="w-[28px] h-[28px] bg-[#39DC98] rounded-[50%]">

                    </div>
                    <h5 className="text-base text-primary font-[500]">Video Lessons</h5>
                    </div>
                    <button className="text-secondary border border-solid border-[#9A7AF1] px-10 py-3 text-base font-bold rounded-2xl mt-6 ml-[25%] hover:bg-secondary hover:text-white transition-all duration-300">Get Started</button>
                </div>
            </div>


        </div>
      </div>
    </div>
  );
};

export default Plans;
