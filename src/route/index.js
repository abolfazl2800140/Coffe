import React from "react";
import { Route, Routes } from "react-router";
import Login from "../pages/Login";

const PageRoute = () => {

    // const CheckLogin = () => {
    //     const token = localStorage.getItem("userToken");
    //     if (token) true;
    //     else false;
    // }

    return(
        <Routes>
            <Route path="/">
                <Route element={<Login />} path="/login"/>
            </Route>
        </Routes>
    )
}

export default PageRoute;