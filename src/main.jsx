import React from "react";
import ReactDOM from "react-dom/client";
// import NavBar from "./Components/NavBar/NavBar.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ContactUs from "./Components/ContactUs/ContactUs";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import Events from "./Components/Events/Events";
import HomaPage from "./Components/HomePage/HomaPage";
import Profile from "./Components/Profile/Profile";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <HomaPage></HomaPage>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },

      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/service/details/:id",
        loader: () => fetch("/services-details.json"),
        element: <DetailsPage></DetailsPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
