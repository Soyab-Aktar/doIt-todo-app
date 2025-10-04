import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/layout/HomePage";
import Dashboard_Page from "./components/pages/Dashboard_Page";
import Tasks_Page from "./components/pages/Tasks_Page";
import Calender_page from "./components/pages/Calender_page";
import Context from "./components/context/Context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children: [
      {
        path: "/",
        element: <Dashboard_Page></Dashboard_Page>,
      },
      {
        path: "/tasks",
        element: <Tasks_Page></Tasks_Page>,
      },
      {
        path: "/calender",
        element: <Calender_page></Calender_page>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router}></RouterProvider>
    </Context>
  </StrictMode>
);
