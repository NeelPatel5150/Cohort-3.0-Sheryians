import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MainLayout from "../layout/MainLayout";

const AppRoutes = () => {

    let router = createBrowserRouter([
      {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                }
            ]
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ]);

    return <RouterProvider router={router} />;
};

export default AppRoutes;

