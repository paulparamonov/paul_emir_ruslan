import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";

import Auth from "./components/Auth/Auth";

const Routing = () => {
  
      let PUBLIC_ROUTES = [
        {
          link: "/",
          element: <Home />,
          id: 1,
        },

        {
          link: "/auth",
          element: <Auth />,
          id: 3,
        },
      ];
  
};

export default Routing;
