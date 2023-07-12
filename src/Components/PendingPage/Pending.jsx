import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LoadingSpinner from "../Spinner/Spinner";
import { addsingle } from "../../Store/taskhandleSlice/taskSlice";
// ------------------***--------------------------

const Pending = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading } = useSelector((state) => state.assign);

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
          {data &&
            data.map((data) => (
              <div
                className="Card"
                key={data._id}
                onClick={() => handleClick(data)}
              >
                <div className="up">
                  <h3>{data.title}</h3>
                </div>
                <div className="down">
                  <h4>{data.date}</h4>
                  <h4>{data.category}</h4>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Pending;
