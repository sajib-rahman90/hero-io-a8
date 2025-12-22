import React from "react";
import ProductiveApps from "../Components/ProductiveApps";
import TrustedMillions from "../Components/TrustedMillions";
import { Link } from "react-router";
import TrendingAppsCards from "../Components/TrendingAppsCards";
import useApps from "../Hooks/useApps";

const Home = () => {
  const { apps, loading, error } = useApps();
  const trandingApps = apps.slice(0, 8);

  return (
    <div className="bg-[#F5F5F5]">
      <section>
        <ProductiveApps></ProductiveApps>
        <TrustedMillions></TrustedMillions>
      </section>
      <section className="w-11/12 mx-auto space-y-10 items-center text-center py-20">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">Trending Apps</h1>
          <p className="text-xl font-normal">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {trandingApps.map((app) => (
            <TrendingAppsCards key={app.id} app={app} />
          ))}
        </div>

        <div>
          <Link className="btn btn-outline " to={"/apps"}>
            Show All
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
