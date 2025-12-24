import React from "react";

const LoaddingSpinner = () => {
  return (
    <div>
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-3 bg-white/70">
        <div className="h-12 w-12 rounded-full border-4 border-gray-200 border-t-purple-600 animate-spin"></div>
        <p className="text-5xl font-medium text-[#632EE3]">
          Please wait! Loading...
        </p>
      </div>
    </div>
  );
};

export default LoaddingSpinner;
