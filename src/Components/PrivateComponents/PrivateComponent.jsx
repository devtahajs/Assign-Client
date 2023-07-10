import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Private.css";

const PrivateRoute = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="privatecontainer">
      {user ? <Outlet /> : <Navigate to="/login" replace />}
    </div>
  );
};
export default PrivateRoute;
