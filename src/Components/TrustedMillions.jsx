import React from "react";

const TrustedMillions = () => {
  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))] text-white px-4 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 lg:py-20">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold capitalize text-center">
          Trusted by Millions, Built for You
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-3">
        <div className="text-center py-6 sm:py-8 px-6 sm:px-10 lg:px-16">
          <p className="text-sm sm:text-base text-[#E4D9FA] font-normal">
            Total Downloads
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold my-3 sm:my-4">
            29.6M
          </h1>
          <p className="text-sm sm:text-base text-[#E4D9FA] font-normal capitalize">
            21% more than last month
          </p>
        </div>

        <div className="text-center py-6 sm:py-8 px-6 sm:px-10 lg:px-16">
          <p className="text-sm sm:text-base text-[#E4D9FA] font-normal">
            Total Reviews
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold my-3 sm:my-4">
            906K
          </h1>
          <p className="text-sm sm:text-base text-[#E4D9FA] font-normal capitalize">
            46% more than last month
          </p>
        </div>

        <div className="text-center py-6 sm:py-8 px-6 sm:px-10 lg:px-16">
          <p className="text-sm sm:text-base text-[#E4D9FA] font-normal">
            Active Apps
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold my-3 sm:my-4">
            132+
          </h1>
          <p className="text-sm sm:text-base text-[#E4D9FA] font-normal capitalize">
            31 more will Launch
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustedMillions;
