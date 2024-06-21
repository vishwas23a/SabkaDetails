import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import Details from "./components/Details.jsx";
import FirstPage from "./components/FirstPage.jsx";
import Form from "./components/Form.jsx";
import AllData from "./components/AllData.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />,
  },
  {
    path: "/Form",
    element: <Form/>,
  },
  {
    path: "/Details",
    element: <Details />,
  },
  {
    path:'/AllData',
    element:<AllData/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
