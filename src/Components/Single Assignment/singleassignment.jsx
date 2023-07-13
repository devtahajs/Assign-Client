import { useDispatch, useSelector } from "react-redux";
import "./singleassignment.css";
import { GoGoal } from "react-icons/go";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  sendPending,
  resetpending,
} from "../../Store/PendingSlice/PendingSlice";
import { toast } from "react-toastify";
import { sendCompleted } from "../../Store/CompletedSlice/CompletedSlice";
import { DeleteAssignData } from "../../Store/Slices/Assignmentslice";
import {CiCalendarDate} from "react-icons/ci"
// ----------------------***-----------------------------------------

const Singleassignment = () => {
  const navigate = useNavigate();
  const [data, setSingledata] = useState();

  const dispatch = useDispatch();
  const { single } = useSelector((state) => state.task);
  const { isError, isSuccess, message, pendingData } = useSelector(
    (state) => state.pending
  );

  useEffect(() => {
    const data = window.localStorage.getItem("single");
    const finaldata = JSON.parse(data);
    setSingledata(finaldata);
  }, []);

  //useEffect
  useEffect(() => {
    dispatch(resetpending());
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success("Task Added Pending");
    }
    dispatch(resetpending());
  }, [isError, isSuccess, message, navigate, dispatch]);

  //Handling Pending
  const Pendinghandle = () => {
    const datasend = { data };
    dispatch(sendPending(datasend));
    dispatch(DeleteAssignData(data._id));
  };

  //?Handle Complete
  const handleCompleted = () => {
    const datasend = { data };
    dispatch(sendCompleted(datasend));
    dispatch(DeleteAssignData(data._id));
    toast.success("Congrats,For Clearing this Task");
    navigate("/home");
  };

  return (
    <div className="singleCont">
      <div className="upper">
        <div>
          <div className="titl">
            <GoGoal />
            {data ? data.title : null}
          </div>
        </div>
        <div className="dateholder">
          <p>
            {data ? data.date : null}
          </p>
          <p>
            {data ? data.category : null}
          </p>
        </div>
      </div>
      <div className="desccont">
        {" "}
        <p> {data ? data.desc : null}</p>{" "}
      </div>
      <div className="downx">
        <button className="btn1" onClick={Pendinghandle}>
          Pending
        </button>
        <button className="btn2 " onClick={handleCompleted}>
          Completed
        </button>
      </div>
    </div>
  );
};

export default Singleassignment;

