import { DownloadIcon, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import useApps from "../Hooks/useApps";
import LoaddingSpinner from "../Components/LoaddingSpinner";
import { ToastContainer, toast } from "react-toastify";

const Installation = () => {
  const [installlist, setInstalllist] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  const { loading } = useApps();

  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("installlist"));
    if (saveList) setInstalllist(saveList);
  }, []);

  if (loading) return <LoaddingSpinner></LoaddingSpinner>;

  const parseDownloads = (value) => {
    return Number(value.replace("M", ""));
  };

  const sortedItem = (() => {
    if (sortOrder === "downloads-asc") {
      return [...installlist].sort(
        (a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)
      );
    } else if (sortOrder === "downloads-desc") {
      return [...installlist].sort(
        (a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads)
      );
    } else {
      return installlist;
    }
  })();

  const handleRemove = (id) => {
    toast("Un-installed from your device.");
    const existingList = JSON.parse(localStorage.getItem("installlist"));

    let updateList = existingList.filter((a) => a.id !== id);

    setInstalllist(updateList);
    localStorage.setItem("installlist", JSON.stringify(updateList));
  };

  return (
    <div className="bg-[#F5F5F5] ">
      <div className="bg-[#F5F5F5]  w-11/12 mx-auto py-20 space-y-20 ">
        <div className="text-center space-y-3 md:space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#001931] font-bold">
            Your Installed Apps
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-[#4e555e] font-normal">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div>
          <div className="flex justify-between items-center p-3.5">
            <h1 className="text-2xl font-semibold text-[#001931]">
              {sortedItem.length} Apps Found
            </h1>

            <label className="form-control w-full max-w-xs">
              <select
                className="select select-bordered"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="none">Sort By Size</option>
                <option value="downloads-asc">Low-&gt;High</option>
                <option value="downloads-desc">High-&gt;Low</option>
              </select>
            </label>
          </div>
          <div className="space-y-3 mt-3.5">
            {sortedItem.map((a) => (
              <div
                key={a.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between card-side bg-base-100 shadow p-3.5 rounded-sm"
              >
                <div className="flex flex-col sm:flex-row gap-2.5 items-start sm:items-center">
                  <img
                    className="w-full sm:w-26 h-40 sm:h-26 rounded-lg object-cover"
                    src={a.image}
                    alt=""
                  />

                  <div className="space-y-3 sm:space-y-4 mt-2 sm:mt-0">
                    <div>
                      <h3 className="text-base sm:text-lg font-medium">
                        {a.title}
                      </h3>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                      <div className="flex gap-1.5 items-center">
                        <DownloadIcon className="text-[#00827A]" />
                        <h1 className="font-normal text-[#00827A]">
                          {a.downloads}
                        </h1>
                      </div>
                      <div className="flex gap-2.5 items-center">
                        <Star className="text-[#FF8811]" />
                        <h1 className="font-normal text-[#FF8811]">
                          {a.ratingAvg}
                        </h1>
                      </div>
                      <span className="text-sm sm:text-base text-[#627382]">
                        {a.size}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 sm:mt-0">
                  <button
                    onClick={() => handleRemove(a.id)}
                    className="btn btn-outline text-white bg-[#00D390] w-full sm:w-auto"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ToastContainer position="top-center" theme="light" />
      </div>
    </div>
  );
};

export default Installation;
