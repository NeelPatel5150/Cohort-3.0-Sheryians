import CardPage from "@/pages/components/CardPage";
import InputPage from "@/pages/components/InputPage";
import ModalPage from "@/pages/components/ModalPage";
import NavbarPage from "@/pages/components/NavbarPage";
import TooltipPage from "@/pages/components/TooltipPage";
import { createBrowserRouter, RouterProvider } from "react-router";
import ComponentLayout from "../layouts/ComponentLayout";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/HomePage";
import ButtonPage from "../pages/components/ButtonPage";

type Props = {};

const AppRouter = ({}: Props) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "components",
          element: <ComponentLayout />,
          children: [
            {
              path: "button",
              element: <ButtonPage />,
            },
            {
              path: "card",
              element: <CardPage />,
            },
            {
              path: "modal",
              element: <ModalPage />,
            },
            {
              path: "input",
              element: <InputPage />,
            },
            {
              path: "navbar",
              element: <NavbarPage />,
            },
            {
              path: "tooltip",
              element: <TooltipPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
