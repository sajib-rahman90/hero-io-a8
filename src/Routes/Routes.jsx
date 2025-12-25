import { createBrowserRouter } from "react-router";
import Apps from "../Pages/Apps";
import Home from "../Pages/Home";
import Installation from "../Pages/Installation";
import MainLayout from "../Layouts/MainLayout";
import Eroor404 from "../Pages/Eroor404";
import AppDetails from "../Pages/AppDetails";
import AppsEroor from "../Pages/AppsEroor";

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
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
      },
      {
        path: "/app/:id",
        element: <AppDetails />,
        errorElement: <AppsEroor />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
    ],
  },
]);

export default router;
