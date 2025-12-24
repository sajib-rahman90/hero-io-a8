import { DownloadIcon, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import useApps from "../Hooks/useApps";
import LoaddingSpinner from "../Components/LoaddingSpinner";

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
    alert("Un-installed from your device!");
    const existingList = JSON.parse(localStorage.getItem("installlist"));

    let updateList = existingList.filter((a) => a.id !== id);

    setInstalllist(updateList);
    localStorage.setItem("installlist", JSON.stringify(updateList));
  };

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
                className=" flex items-center justify-between card-side bg-base-100 shadow p-3.5 rounded-sm  "
              >
                <div className="flex gap-2.5 items-center">
                  <img
                    className="w-26 h-26 rounded-lg object-cover"
                    src={a.image}
                    alt=""
                  />

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">{a.title}</h3>
                    </div>
                    <div className="flex  items-center gap-4">
                      <div className="flex   gap-1.5">
                        <DownloadIcon className="text-[#00827A]  "></DownloadIcon>

                        <h1 className=" font-normal text-[#00827A]">
                          {a.downloads}
                        </h1>
                      </div>
                      <div className="flex gap-2.5">
                        <Star className="text-[#FF8811]" />

                        <h1 className=" font-normal text-[#FF8811]">
                          {a.ratingAvg}
                        </h1>
                      </div>
                      <span className="text-[#627382]">{a.size}</span>
                    </div>
                  </div>
                </div>
                <div className="">
                  <button
                    onClick={() => handleRemove(a.id)}
                    className="btn btn-outline text-white bg-[#00D390]"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
