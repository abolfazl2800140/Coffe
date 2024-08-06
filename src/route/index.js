import React from "react";
import { Route, Routes } from "react-router";
import Login from "../pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const PageRoute = () => {

    const routes = createBrowserRouter([
        {
            element: <Login />,
            path: "/"
        }
    ])

    return(
            <RouterProvider router={routes}/>
    )
}

export default PageRoute;