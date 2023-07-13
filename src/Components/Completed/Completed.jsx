import { useEffect, useState } from "react";
import { MdDoneOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LoadingSpinner from "../Spinner/Spinner";
import { addsingle } from "../../Store/taskhandleSlice/taskSlice";
import {
  getPendingData,
  resetpending,
} from "../../Store/PendingSlice/PendingSlice";

import { getCompletedData } from "../../Store/CompletedSlice/CompletedSlice";
import "./comp.css";

// ------------------***--------------------------

const Completed = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCompletedData());
  }, []);

  const { CompletedData, isLoading } = useSelector((state) => state.completed);
 
  const handleClick = (data) => {
    dispatch(addsingle(data));
    localStorage.setItem("single", JSON.stringify(data));
    navigate("/pendcomp");
    dispatch(resetpending());
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="compcont">
          <div className="headcomp">
            <h3> Wow,😃 You Completed ({CompletedData.length}) Tasks </h3>
          </div>

          {CompletedData &&
            CompletedData.map((data) => (
              <div
                className="Card"
                key={data.data._id}
                onClick={() => handleClick(data.data)}
              >
                <div className="up">
                  <h3>{data.data.title}</h3>
                </div>
                <div className="down">
                  <div className="down1">
                    <h4>{data.data.date}</h4>
                  </div>

                  <h4 className="down2">{data.data.category}</h4>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Completed;
