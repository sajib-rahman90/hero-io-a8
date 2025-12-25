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
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const app = apps.find((p) => String(p.id) === id);

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem("installlist")) || [];

    const alreadyInstalled = existingList.some((a) => a.id === app?.id);

    if (alreadyInstalled) {
      setIsInstalled(true);
    }
  }, [app]);

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
    toast.success(`Yahoo! ${title} Installed Successfully. `);
    const existingList = JSON.parse(localStorage.getItem("installlist"));
    let updateList = [];
    if (existingList) {
      const isDuplicate = existingList.some((a) => a.id === app.id);
      if (isDuplicate)
        return toast.success("Sorry! You have allrady selected this items");
      updateList = [...existingList, app];
    } else {
      updateList.push(app);
    }
    localStorage.setItem("installlist", JSON.stringify(updateList));

    setIsInstalled(true);
  };

  return (
    <div className="bg-[#F5F5F5] ">
      <div className="bg-[#F5F5F5] w-11/12 mx-auto py-20 space-y-20 ">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-20">
          <div className="w-full lg:w-2/7">
            <img
              className="w-full h-auto rounded-[12px] object-cover"
              src={image}
              alt=""
            />
          </div>

          <div className="space-y-6 w-full lg:w-5/7">
            <div>
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-3xl text-[#001931]">
                {title}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl font-bold text-[#627382]">
                Developed by{" "}
                <span className="text-[#632EE3]">{companyName}</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-6 lg:gap-8">
              <div className="flex flex-col gap-1.5 items-start sm:items-center">
                <DownloadIcon className="text-[#00827A] text-xl sm:text-2xl" />
                <p className="text-sm sm:text-base font-normal text-[#627382]">
                  Downloads
                </p>
                <h1 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#001931]">
                  {downloads}
                </h1>
              </div>

              <div className="flex flex-col gap-1.5 items-start sm:items-center">
                <Star className="text-[#FF8811] text-xl sm:text-2xl" />
                <p className="text-sm sm:text-base font-normal text-[#627382]">
                  Average Ratings
                </p>
                <h1 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#001931]">
                  {ratingAvg}
                </h1>
              </div>

              <div className="flex flex-col gap-1.5 items-start sm:items-center">
                <ThumbsUpIcon className="text-[#632EE3] text-xl sm:text-2xl" />
                <p className="text-sm sm:text-base font-normal text-[#627382]">
                  Total Reviews
                </p>
                <h1 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#001931]">
                  {reviews}
                </h1>
              </div>
            </div>

            <button
              onClick={handleToInstalledList}
              disabled={isInstalled}
              className="btn w-full sm:w-auto text-white bg-[#00D390]"
            >
              {isInstalled ? "Installed" : `Install Now (${size})`}
            </button>

            <ToastContainer position="top-center" theme="light" />
          </div>
        </div>

        {/* Rating chart */}
        <div className="space-y-3">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#001931]">
            Ratings
          </h1>

          <div className="bg-base-100 border rounded-xl p-4 w-full overflow-x-auto">
            <BarChart
              style={{
                width: "90%",
                maxWidth: "90%",
                maxHeight: "80vh",
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
              <YAxis width={60} />
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
          <h1 className="font-semibold text-lg  md:text-2xl lg:text-2xl text-[#001931] pb-3 sm:pb-4 md:pb-5">
            Description
          </h1>
          <p className="font-normal text-sm  md:text-lg lg:text-xl text-[#33383dfb]">
            <span>{description}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
