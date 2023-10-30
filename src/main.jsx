import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Main from "./layout/Main";
import CheckOut from "./components/CheckOut";
import AddNewService from "./components/AddNewService";
import SignUp from "./components/auth/SignUp";
import ErrorPage from "./components/ErrorPage";
import AuthProvider from "./providers/AuthProvider";
import Login from "./components/auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/checkout",
        element: <CheckOut></CheckOut>,
      },
      {
        path: "/services/new",
        element: <AddNewService></AddNewService>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);