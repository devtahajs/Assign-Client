import { useSelector } from "react-redux";
import "./BottomSection.css";

const BottomSection = () => {
  const { isPending } = useSelector((state) => state.task);
  return (
    <div className="bottomcont">
      <div className="leftbot">Pending({isPending.length})</div>
      <div className="rightbot">Completed</div>
    </div>
  );
};

export default BottomSection;
