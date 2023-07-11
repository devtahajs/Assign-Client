import { useSelector } from "react-redux";
import "./topsection.css";
import { useEffect } from "react";
import {
  addfilterdata,
  getAssign,
} from "../../../Store/Slices/Assignmentslice";
import { useDispatch } from "react-redux";

const Topsection = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.assign);


  return (
    <div className="topcont">
      <button className="pribtn" >
        Html
      </button>
      <button className="pribtn" >
        Css
      </button>
      <button className="pribtn">Js</button>
      <button className="lastbtn">React</button>
    </div>
  );
};

export default Topsection;
