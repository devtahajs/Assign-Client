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
import "./pending.css";
import { DeletePendingData } from "../../Store/PendingSlice/PendingSlice";
import "./pending.css";
import { toast } from "react-toastify";
import { sendCompleted } from "../../Store/CompletedSlice/CompletedSlice";

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
    navigate("/pendcomp");
    dispatch(resetpending());
  };

  const handleDelete = (id, data) => {
    const datap = { data };
    dispatch(DeletePendingData(id));
    dispatch(sendCompleted(datap))
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
                    <h3 className="up1">{data.data.title}</h3>
                  </div>
                  <div className="downp">
                    <h4>{data.data.date}</h4>
                    <h4>{data.data.category}</h4>
                  </div>
                </div>
                <div
                  className="rightdivs"
                  onClick={() => handleDelete(data._id, data.data)}
                >
                  <h4 className="trash">
                    <MdDoneOutline />
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
