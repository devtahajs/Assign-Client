//imports
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Register from "./Pages/Authentication/Register.jsx";
import Login from "./Pages/Authentication/Login.jsx";
import PrivateRoute from "./Components/PrivateComponents/PrivateComponent.jsx";
import Home from "./Pages/HomePage/home.jsx";

//------------***---------------***----------
//Route SetUp
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* Private Routes */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
