import { useSelector } from "react-redux";
import "./singleassignment.css";
import { GoGoal } from "react-icons/go";
import { MdDateRange, MdCategory } from "react-icons/md";

const Singleassignment = () => {
  const { single } = useSelector((state) => state.task);

  return (
    <div className="singleCont">
      <div className="upper">
        <div>
          <div className="titl">
            <GoGoal />
            {single.title}
          </div>
        </div>
        <div className="dateholder">
          <p>
            <MdDateRange />
            {single.date}
          </p>
          <p>
            <MdCategory />
            {single.category}
          </p>
        </div>
      </div>
      <div className="desccont">
        <p> {single.desc}</p>
      </div>
      <div className="downx">
        <button className="btn1">Pending</button>
        <button className="btn2">Completed</button>
      </div>
    </div>
  );
};

export default Singleassignment;

//
//       {single.category}
//       {single.date}
//
