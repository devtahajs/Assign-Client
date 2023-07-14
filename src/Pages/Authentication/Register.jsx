//Imports
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../Store/Slices/AuthSlice";
import "./Form.css";
import LoadingSpinner from "../../Components/Spinner/Spinner";
// ---------------***----------------------------------------------------

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Register
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
      toast.success("Hey,New User");
      navigate("/home");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  //------Handle Submit
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        toast.error("PassWord Dont Match");
      } else {
        const userData = { name, email, password };
        dispatch(register(userData));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner className="spinn" />
      ) : (
        <div className="FormContainer">
          <h2>Hey,Register Here</h2>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Enter Your Name Here"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

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

            <input
              type="password"
              placeholder="Enter Password Again"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button className="SignUp">Register</button>
            <div className="linkcen">
              <Link to="/login" className="link">Already Have A Account</Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Register;
