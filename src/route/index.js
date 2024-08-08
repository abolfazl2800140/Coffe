import React from "react";
import { Outlet, Route, Routes } from "react-router";
import Login from "../pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const PageRoute = () => {
  const routes = createBrowserRouter([
    {
      element: (
        <div>
          <Login />
          <Outlet />
        </div>
      ),
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
