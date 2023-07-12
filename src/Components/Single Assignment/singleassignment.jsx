import { useDispatch, useSelector } from "react-redux";
import "./singleassignment.css";
import { GoGoal } from "react-icons/go";
import { MdDateRange, MdCategory } from "react-icons/md";
import { pendingtask } from "../../Store/taskhandleSlice/taskSlice";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  sendPending,
  resetpending,
} from "../../Store/PendingSlice/PendingSlice";
import { toast } from "react-toastify";
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
      toast.success("Added To Pending");
    }
    dispatch(resetpending());
  }, [isError, isSuccess, message, navigate, dispatch]);

  //Handling Pending
  const Pendinghandle = () => {
    const datasend = { data };
    dispatch(sendPending(datasend));
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
            <MdDateRange />
            {data ? data.date : null}
          </p>
          <p>
            <MdCategory />
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
        <button className="btn2 ">Completed</button>
      </div>
    </div>
  );
};

export default Singleassignment;

//
//       {single.category}
//       {single.date}
//
