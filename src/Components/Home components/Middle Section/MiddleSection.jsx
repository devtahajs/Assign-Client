import { useEffect, useState } from "react";
import "./middlesection.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAssign } from "../../../Store/Slices/Assignmentslice";
import LoadingSpinner from "../../Spinner/Spinner";
import { addsingle } from "../../../Store/taskhandleSlice/taskSlice";
import { resetpending } from "../../../Store/PendingSlice/PendingSlice";
// ------------------***--------------------------

const MiddleSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading } = useSelector((state) => state.assign);
  const { category } = useSelector((state) => state.task);

  

  const handleClick = (data) => {
    dispatch(addsingle(data));
    localStorage.setItem("single", JSON.stringify(data));
    navigate("/single");
    dispatch(resetpending());
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="middlecont">
          {data &&
            data
              .filter((ele) => {
                if (category === "html") {
                  return ele.category === category;
                } else if (category === "css") {
                  return ele.category === category;
                } else if (category === "js") {
                  return ele.category === category;
                } else if (category === "all") {
                  return ele;
                } else {
                  return ele;
                }
              })
              .map((data) => (
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

export default MiddleSection;
