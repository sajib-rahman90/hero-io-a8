import React from "react";

const LoaddingSpinner = () => {
  return (
    <div>
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-2 sm:gap-3 bg-white/70 px-4">
        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-4 border-gray-200 border-t-purple-600 animate-spin"></div>

        <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#632EE3] text-center">
          Please wait! Loading...
        </p>
      </div>
    </div>
  );
};

export default LoaddingSpinner;
