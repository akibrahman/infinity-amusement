import React from "react";
import ReactDOM from "react-dom/client";
// import NavBar from "./Components/NavBar/NavBar.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import ContactUs from "./Components/ContactUs/ContactUs";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import Events from "./Components/Events/Events";
import HomaPage from "./Components/HomePage/HomaPage";
import Login from "./Components/Login/Login";
import Registration from "./Components/Login/Registration";
import PrivateR from "./Components/PrivateR/PrivateR";
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
        loader: () => fetch("/events.json"),
        element: (
          <PrivateR>
            <Events></Events>
          </PrivateR>
        ),
      },

      {
        path: "/profile",
        element: (
          <PrivateR>
            <Profile></Profile>
          </PrivateR>
        ),
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/service/details/:id",
        loader: () => fetch("/services-details.json"),
        element: (
          <PrivateR>
            <DetailsPage></DetailsPage>
          </PrivateR>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
