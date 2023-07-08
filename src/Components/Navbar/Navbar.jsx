import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="NavCont">
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
    </div>
  );
};

export default Navbar;
