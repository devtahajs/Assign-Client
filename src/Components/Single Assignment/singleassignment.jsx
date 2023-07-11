import { useDispatch, useSelector } from "react-redux";
import "./singleassignment.css";
import { GoGoal } from "react-icons/go";
import { MdDateRange, MdCategory } from "react-icons/md";
import { pendingtask } from "../../Store/taskhandleSlice/taskSlice";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Singleassignment = () => {
  const [singledata, setSingledata] = useState();

  const dispatch = useDispatch();
  const { single } = useSelector((state) => state.task);

  useEffect(() => {
    const data = window.localStorage.getItem("single");
    const finaldata = JSON.parse(data);
    setSingledata(finaldata);
  }, []);

  

  //Handling Pending
  const Pendinghandle = () => {
    dispatch(pendingtask(single));
  };

  return (
    <div className="singleCont">
      <div className="upper">
        <div>
          <div className="titl">
            <GoGoal />
            {singledata ? singledata.title : null}
          </div>
        </div>
        <div className="dateholder">
          <p>
            <MdDateRange />
            {singledata ? singledata.date : null}
          </p>
          <p>
            <MdCategory />
            {singledata ? singledata.category : null}
          </p>
        </div>
      </div>
      <div className="desccont"> <p> {singledata ? singledata.desc : null}</p> </div>
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
