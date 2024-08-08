import React from "react";
// import { Outlet } from "react-router";
import Login from "../pages/Login";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Layout from "../layout";

const PageRoute = () => {
  const routes = createBrowserRouter([
    {
      element: <Layout />,
      path: "/",
      children: [
        {
          element: <Login />,
          path: "login",
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default PageRoute;
