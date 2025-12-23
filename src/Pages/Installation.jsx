import React, { useEffect, useState } from "react";

const Installation = () => {
  const [installlist, setInstalllist] = useState([]);
  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("installlist"));
    if (saveList) setInstalllist(saveList);
  }, []);
  return (
    <div className="bg-[#F5F5F5] ">
      <div className="bg-[#F5F5F5]  w-11/12 mx-auto py-20 space-y-20 ">
        <div className="text-center space-y-4">
          <h1 className="text-5xl text-[#001931] font-bold">
            Your Installed Apps
          </h1>
          <p className="text-xl text-[#4e555e] font-normal">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <h1>Installation pages: {installlist.length}</h1>
      </div>
    </div>
  );
};

export default Installation;
