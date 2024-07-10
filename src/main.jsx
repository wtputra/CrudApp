import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AddPost from "./pages/AddPost.jsx";
import Home from "./pages/Home.jsx";
import DetailPost from "./pages/DetailPost.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "add-post",
        element: <AddPost />,
      },
      {
        path: "detail-post/:id",
        element: <DetailPost />,
      },
      {
        path: "edit-post/:id",
        element: <AddPost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
