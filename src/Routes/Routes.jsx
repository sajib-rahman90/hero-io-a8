import { createBrowserRouter } from "react-router";
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
    hydrateFallbackElement: <p>Loadding..</p>,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("./hero-io.json"),
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
