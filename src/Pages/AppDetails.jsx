import React from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { DownloadIcon, Star, ThumbsUpIcon } from "lucide-react";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const app = apps.find((p) => String(p.id) === id);

  if (loading) return <p>Loading.....</p>;

  const {
    image,
    title,
    reviews,
    downloads,
    ratingAvg,
    companyName,
    size,
    description,
  } = app;

  return (
    <div className="bg-[#F5F5F5] ">
      <div className="bg-[#F5F5F5] w-11/12 mx-auto py-20 space-y-20 ">
        <div className="flex flex-row items-center gap-10  ">
          <div className=" flex-1/4 ">
            <img
              className=" w-full h-full overflow-hidden"
              src={image}
              alt=""
            />
          </div>
          <div className="space-y-6 flex-3/4">
            <div>
              <h1 className="font-bold text-3xl text-[#001931]">{title}</h1>
              <p className="text-xl font-bold text-[#627382]">
                Developed by{" "}
                <span className="text-[#632EE3]">{companyName}</span>
              </p>
            </div>
            <div className="flex flex-row gap-8">
              <div className="flex flex-col gap-1.5">
                <DownloadIcon className="text-[#00827A]"></DownloadIcon>
                <p className="text-sm font-normal text-[#627382]">Downloads</p>
                <h1 className="font-extrabold text-4xl text-[#001931]">
                  {downloads}
                </h1>
              </div>
              <div className="flex flex-col gap-1.5">
                <Star className="text-[#FF8811]" />
                <p className="text-sm font-normal text-[#627382]">
                  Average Ratings
                </p>
                <h1 className="font-extrabold text-4xl text-[#001931]">
                  {ratingAvg}
                </h1>
              </div>
              <div className="flex flex-col gap-1.5">
                <ThumbsUpIcon className="text-[#632EE3]" />
                <p className="text-sm font-normal text-[#627382]">
                  Total Reviews
                </p>
                <h1 className="font-extrabold text-4xl text-[#001931]">
                  {reviews}
                </h1>
              </div>
            </div>
            <button className="btn btn-secondary">
              Install Now <span>({size})</span>
            </button>
          </div>
        </div>
        <div></div>
        <div>
          <h1 className="font-semibold text-2xl text-[#001931] pb-5">
            Description
          </h1>
          <p className="font-normal text-xl text-[#33383dfb]">
            <span>{description}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
