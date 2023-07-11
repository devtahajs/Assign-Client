
import "./RegLogCont.css";
import { Navigate, Outlet } from "react-router-dom";

const RegLogCont = () => {
  return (
    <div className="container">
      <Outlet/>
    </div>
  );
};

export default RegLogCont;
