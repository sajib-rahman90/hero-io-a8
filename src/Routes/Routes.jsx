import { createBrowserRouter } from "react-router";
import App from "../App";
import Apps from "../Pages/Apps";
import Home from "../Pages/Home";
import Installation from "../Pages/Installation";
import MainLayout from "../Layouts/MainLayout";
import Eroor404 from "../Pages/Eroor404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Eroor404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
    ],
  },
]);

export default router;
