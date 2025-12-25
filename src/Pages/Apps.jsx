import React, { useEffect, useState } from "react";
import useApps from "../Hooks/useApps";
import TrendingAppsCards from "../Components/TrendingAppsCards";
import LoaddingSpinner from "../Components/LoaddingSpinner";

const Apps = () => {
  const { apps, loading } = useApps();

  const [search, setSearch] = useState("");

  const [searchLoading, setSearchLoading] = useState(false);

  const term = search.trim().toLocaleLowerCase();

  useEffect(() => {
    if (!search) return;

    setSearchLoading(true);

    const timer = setTimeout(() => {
      setSearchLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  if (loading) return <LoaddingSpinner />;

  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  return (
    <div className="bg-[#F5F5F5]">
      <div className="w-11/12 mx-auto space-y-10 items-center text-center py-20">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">Our All Applications</h1>
          <p className="text-xl text-[#627382] font-normal">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-[#001931 text-xl sm:text-2xl font-semibold]">
            <span className="text-[#001931 text-2xl font-semibold]">
              ({searchedApps.length})
            </span>
            Apps Found
          </h1>

          <label className="input  w-full sm:w-auto">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search Apps"
              className="w-full sm:w-64"
            />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchLoading ? (
            <LoaddingSpinner />
          ) : searchedApps.length === 0 ? (
            <p className="col-span-full text-center text-5xl font-bold text-gray-500">
              No Apps Found!
            </p>
          ) : (
            searchedApps.map((app) => (
              <TrendingAppsCards key={app.id} app={app} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Apps;
