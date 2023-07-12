import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LoadingSpinner from "../Spinner/Spinner";
import { addsingle } from "../../Store/taskhandleSlice/taskSlice";
import { getPendingData, resetpending } from "../../Store/PendingSlice/PendingSlice";

// ------------------***--------------------------

const Pending = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { pendingData, isLoading } = useSelector((state) => state.pending);


  const handleClick = (data) => {
    dispatch(addsingle(data));
    localStorage.setItem("single", JSON.stringify(data));
    navigate("/single");
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="middlecont">
          {pendingData &&
            pendingData.map((data) => (
              <div
                className="Card"
                key={data.data._id}
                onClick={() => handleClick(data.data)}
              >
                <div className="up">
                  <h3>{data.data.title}</h3>
                </div>
                <div className="down">
                  <h4>{data.data.date}</h4>
                  <h4>{data.data.category}</h4>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Pending;
