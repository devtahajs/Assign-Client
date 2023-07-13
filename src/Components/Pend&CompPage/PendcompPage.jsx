// import "./singleassignment.css";
import { GoGoal } from "react-icons/go";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// ----------------------***-----------------------------------------

const PendCompPage = () => {
  const navigate = useNavigate();
  const [data, setSingledata] = useState();

  // const dispatch = useDispatch();
  // const { single } = useSelector((state) => state.task);
  // const { isError, isSuccess, message, pendingData } = useSelector(
  //   (state) => state.pending
  // );

  useEffect(() => {
    const data = window.localStorage.getItem("single");
    const finaldata = JSON.parse(data);
    setSingledata(finaldata);
  }, []);

  

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
      
    </div>
  );
};

export default PendCompPage;

































