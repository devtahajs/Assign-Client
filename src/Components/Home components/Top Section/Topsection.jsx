import "./topsection.css";
import { category } from "../../../Store/taskhandleSlice/taskSlice";
import { useDispatch } from "react-redux";
import { BsFiletypeHtml, BsFiletypeCss, BsReplyAll } from "react-icons/bs";
import { BiLogoJavascript } from "react-icons/bi";
// --------------------***------------

const Topsection = () => {
  const dispatch = useDispatch();

  const handleOnclick = (value) => {
    dispatch(category(value));
  };

  return (
    <div className="topcont">
      <button className="pribtn1" onClick={() => handleOnclick("html")}>
        <BsFiletypeHtml />
      </button>
      <button className="pribtn2" onClick={() => handleOnclick("css")}>
        <BsFiletypeCss />
      </button>
      <button className="pribtn3" onClick={() => handleOnclick("js")}>
        <BiLogoJavascript />
      </button>
      <button className="pribtn4" onClick={() => handleOnclick("all")}>
        <BsReplyAll />
      </button>
    </div>
  );
};

export default Topsection;
