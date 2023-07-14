import { Link, useNavigate } from "react-router-dom";
import "./Form.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../Store/Slices/AuthSlice";
import { toast } from "react-toastify";
import LoadingSpinner from "../../Components/Spinner/Spinner";
// ------------***-------------------

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //State manage
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //useSelector
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  
  //useEffect
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success(`Welcome Back  😃 ${user.name}`);
      navigate("/home");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  //Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="FormContainer">
            <h2>Welcome,LogIn Please</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter Your Email Here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Enter Password Here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="SignIn">LogIn</button>
              <div className="linkcen">
                <Link to="/register" className="link">Don't Have A Account</Link>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
