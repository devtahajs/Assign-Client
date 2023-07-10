// imports-
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../Store/Slices/AuthSlice.js";

// --------------***----------------------

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //UseSelector
  const { user } = useSelector((state) => state.auth);

  //Logout handler
  const LogoutHandle = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <div className="NavCont">
      {user ? (
        <>
          <div className="left">
            <h3>{user.name}</h3>
          </div>
          <div className="right">
            <Link to="/home" className="SignIn">
              Home
            </Link>
            <button className="SignUp" onClick={LogoutHandle}>
              LogOut
            </button>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="left">
            <h3>Task Giver</h3>
          </div>
          <div className="right">
            <Link to="/login" className="SignIn">
              SignIn
            </Link>
            <Link to="/" className="SignUp">
              SignUp
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
