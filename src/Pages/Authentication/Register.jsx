import { Link } from "react-router-dom";
import "./Form.css";

const Register = () => {
  return (
    <div className="FormContainer">
      <h2>Hey,Register Here</h2>
      <form>
        <input type="text" placeholder="Enter Your Name Here" />

        <input type="email" placeholder="Enter Your Email Here" />

        <input type="password" placeholder="Enter Password Here" />

        <input type="password" placeholder="Enter Password Again" />

        <button className="SignUp">Register</button>
        <div className="link">
          <Link to="/login" >
            Already Have A Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
