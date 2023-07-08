import { Link } from "react-router-dom";
import "./Form.css";

const Login = () => {
  return (
    <div className="FormContainer">
      <h2>Welcome,LogIn Please</h2>
      <form>
        <input type="email" placeholder="Enter Your Email Here" />

        <input type="password" placeholder="Enter Password Here" />

        <button className="SignIn">Register</button>
        <div className="link">
          <Link to="/">Don't Have A Account</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
