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
import Singleassignment from "./Components/Single Assignment/singleassignment.jsx";
import { Provider } from "react-redux";
import store from "./Store/Store.js";
import Pending from "./Components/PendingPage/Pending.jsx";
//------------***---------------***----------
//Route SetUp
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* Private Routes */}
      <Route  element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/single" element={<Singleassignment />} />
        <Route path="/pendings" element={<Pending />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
