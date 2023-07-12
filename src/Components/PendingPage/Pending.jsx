import { useEffect, useState } from "react";
import { CiTrash } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LoadingSpinner from "../Spinner/Spinner";
import { addsingle } from "../../Store/taskhandleSlice/taskSlice";
import {
  getPendingData,
  resetpending,
} from "../../Store/PendingSlice/PendingSlice";
import "./pending.css";
import { DeletePendingData } from "../../Store/PendingSlice/PendingSlice";
import "./pending.css";
import { toast } from "react-toastify";

// ------------------***--------------------------

const Pending = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { pendingData, isLoading } = useSelector((state) => state.pending);

  useEffect(() => {
    dispatch(getPendingData());
  }, []);

  const handleClick = (data) => {
    dispatch(addsingle(data));
    localStorage.setItem("single", JSON.stringify(data));
    navigate("/single");
    dispatch(resetpending());
  };

  const handleDelete = (id) => {
    dispatch(DeletePendingData(id));
    toast.success("Nice,Pending Cleared");
    navigate("/home");
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="pendingcont">
          {pendingData &&
            pendingData.map((data) => (
              <div className="Cardp" key={data._id}>
                <div
                  className="leftdivs"
                  onClick={() => handleClick(data.data)}
                >
                  <div className="up">
                    <h3>{data.data.title}</h3>
                  </div>
                  <div className="downp">
                    <h4>{data.data.date}</h4>
                    <h4>{data.data.category}</h4>
                  </div>
                </div>
                <div className="rightdivs">
                  <h4 className="trash" onClick={() => handleDelete(data._id)}>
                    <CiTrash />
                  </h4>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Pending;
