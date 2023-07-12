import { useSelector } from "react-redux";
import "./topsection.css";
import { useEffect, useState } from "react";
import { category } from "../../../Store/taskhandleSlice/taskSlice";
import { useDispatch } from "react-redux";

const Topsection = () => {
  const dispatch = useDispatch();

  const handleOnclick = (value) => {
    dispatch(category(value));
  };

  return (
    <div className="topcont">
      <button className="pribtn" onClick={() => handleOnclick("html")}>
        Html
      </button>
      <button className="pribtn" onClick={() => handleOnclick("css")}>
        Css
      </button>
      <button className="pribtn" onClick={() => handleOnclick("js")}>
        Js
      </button>
      <button className="lastbtn" onClick={() => handleOnclick("all")}>
        All
      </button>
    </div>
  );
};

export default Topsection;
