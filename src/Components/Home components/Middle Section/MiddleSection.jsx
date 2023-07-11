import { useEffect } from "react";
import "./middlesection.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAssign } from "../../../Store/Slices/Assignmentslice";
import LoadingSpinner from "../../Spinner/Spinner";
import { addsingle } from "../../../Store/taskhandleSlice/taskSlice";
// ------------------***--------------------------

const MiddleSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAssign());
  }, [dispatch]);

  const { data, isLoading } = useSelector((state) => state.assign);

  const handleClick = (data) => {
    dispatch(addsingle(data));
    navigate("/single");
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="middlecont">
          {data &&
            data.map((data) => (
              <div
                className="Card"
                key={data.id}
                onClick={() => handleClick(data)}
              >
                <div className="up">
                  <h3>{data.title}</h3>
                </div>
                <div className="down">
                  <h4>{data.date}</h4>
                  <h4>{data.category}</h4>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default MiddleSection;
