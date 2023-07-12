import { useSelector } from "react-redux";
import "./BottomSection.css";
import { useNavigate } from "react-router-dom";

const BottomSection = () => {
  const navigate = useNavigate();

  const { isPending } = useSelector((state) => state.task);

  const PendingPage = () => {
    navigate("/pendings");
  };

  return (
    <div className="bottomcont">
      <div className="leftbot" onClick={PendingPage}>
        Pending({isPending.length})
      </div>
      <div className="rightbot">Completed</div>
    </div>
  );
};

export default BottomSection;
