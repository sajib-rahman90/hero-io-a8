import { Download, StarIcon } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router";

const TrendingAppsCards = ({ app }) => {
  const { title, downloads, ratingAvg, image, id } = app;

  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/app/${id}`)}
      className="card bg-base-100 shadow-sm p-2 space-y-2.5 hover:scale-105 transition ease-in-out "
    >
      <figure className="rounded-[10px]">
        <img className="w-full h-56 object-cover " src={image} alt="" />
      </figure>
      <div className="space-y-3">
        <h2 className="card-title text-[#001931] text-xl font-medium">
          {title}
        </h2>
        <div className="card-actions justify-between">
          <div className="py-1.5 px-3 rounded-sm bg-[#f1f5e8]">
            <span className="text-[#00d390] flex gap-1.5">
              <Download /> {downloads}
            </span>
          </div>
          <div className="py-1.5 px-3 rounded-sm bg-[#fff0e1]">
            <span className="text-[#ff8811] flex gap-1.5">
              <StarIcon />
              {ratingAvg}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingAppsCards;
