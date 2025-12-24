import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { DownloadIcon, Star, ThumbsUpIcon } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import LoaddingSpinner from "../Components/LoaddingSpinner";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const app = apps.find((p) => String(p.id) === id);

  if (loading) return <LoaddingSpinner></LoaddingSpinner>;

  const {
    image,
    title,
    reviews,
    downloads,
    ratingAvg,
    companyName,
    size,
    description,
    ratings,
  } = app;

  const handleToInstalledList = () => {
    alert("Installed Succesfull!");
    const existingList = JSON.parse(localStorage.getItem("installlist"));
    let updateList = [];
    if (existingList) {
      const isDuplicate = existingList.some((a) => a.id === app.id);
      if (isDuplicate)
        return alert("sorrry! You have allrady selected this items");
      updateList = [...existingList, app];
    } else {
      updateList.push(app);
    }
    localStorage.setItem("installlist", JSON.stringify(updateList));
  };

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
            <button
              onClick={handleToInstalledList}
              className="btn text-white bg-[#00D390]"
            >
              Install Now <span>({size})</span>
            </button>
          </div>
        </div>

        {/* Rating chart */}
        <div className=" space-y-3">
          <h1>Ratings</h1>
          <div className="bg-base-100 border rounded-xl p-4 ">
            <BarChart
              style={{
                width: "100%",
                maxWidth: "700px",
                maxHeight: "70vh",
                aspectRatio: 1.618,
              }}
              responsive
              data={ratings}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis width="count" />
              <Tooltip />
              <Legend />

              <Bar
                dataKey="count"
                fill="#82ca9d"
                activeBar={{ fill: "gold", stroke: "purple" }}
                radius={[10, 10, 0, 0]}
              />
              {/* <RechartsDevtools /> */}
            </BarChart>
          </div>
        </div>
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
