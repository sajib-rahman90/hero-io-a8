import { createBrowserRouter } from "react-router";
import App from "../App";
import Apps from "../Pages/Apps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/apps",
    element: <Apps></Apps>,
  },
]);

export default router;
