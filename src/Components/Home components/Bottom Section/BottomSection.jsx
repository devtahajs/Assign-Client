import { useDispatch, useSelector } from "react-redux";
import "./BottomSection.css";
import { useNavigate } from "react-router-dom";
import { getPendingData, resetpending, } from "../../../Store/PendingSlice/PendingSlice";
import { useEffect } from "react";
// -----------------***---------------------------

const BottomSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
    
  
  // }, []);

  const { pendingData } = useSelector((state) => state.pending);

  const PendingPage = () => {
    navigate("/pendings");
    dispatch(resetpending())
  };

  return (
    <div className="bottomcont">
      <div className="leftbot" onClick={PendingPage}>
        Pending({pendingData ? pendingData.length : "0"})
      </div>
      <div className="rightbot">Completed</div>
    </div>
  );
};

export default BottomSection;
