import React from "react";

const TrustedMillions = () => {
  return (
    <div className="flex flex-col items-center gap-10 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))] text-white p-20 ">
      <div>
        <h1 className="text-5xl font-bold capitalize">
          Trusted by Millions, Built for You
        </h1>
      </div>
      <div className="flex flex-row gap-3">
        <div className="text-center py-9 px-16">
          <p className="text-[16px] text-[#E4D9FA] font-normal">
            Total Downloads
          </p>
          <h1 className="text-6xl font-extrabold my-4">29.6M</h1>
          <p className="text-[16px] text-[#E4D9FA] font-normal capitalize">
            21% more than last month
          </p>
        </div>
        <div className="text-center py-9 px-16 ">
          <p className="text-[16px] text-[#E4D9FA] font-normal">
            Total Reviews
          </p>
          <h1 className="text-6xl font-extrabold my-4">906K</h1>
          <p className="text-[16px] text-[#E4D9FA] font-normal capitalize">
            46% more than last month
          </p>
        </div>
        <div className="text-center py-9 px-16 ">
          <p className="text-[16px] text-[#E4D9FA] font-normal">Active Apps</p>
          <h1 className="text-6xl font-extrabold my-4">132+</h1>
          <p className="text-[16px] text-[#E4D9FA] font-normal capitalize">
            31 more will Launch
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustedMillions;
