import React from "react";

const TrendingAppsCards = ({ app }) => {
  const { title, downloads, ratingAvg } = app;
  return (
    <div className="card bg-base-100 shadow-sm p-2">
      <figure className="rounded-s-sm">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="space-y-3">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{downloads}</div>
          <div className="badge badge-outline">{ratingAvg}</div>
        </div>
      </div>
    </div>
  );
};

export default TrendingAppsCards;
