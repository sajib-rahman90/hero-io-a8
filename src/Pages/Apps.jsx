import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import TrendingAppsCards from "../Components/TrendingAppsCards";

const Apps = () => {
  const { apps } = useApps();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();

  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;
  return (
    <div className="bg-[#F5F5F5]">
      <div className="w-11/12 mx-auto space-y-10 items-center text-center py-20">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">Our All Applications</h1>
          <p className="text-xl font-normal">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between">
          <h1>
            <span>({searchedApps.length})</span> Apps Found
          </h1>

          <label className="input">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search Apps"
            />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchedApps.map((app) => (
            <TrendingAppsCards key={app.id} app={app} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
