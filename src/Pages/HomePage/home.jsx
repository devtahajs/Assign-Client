import Topsection from "../../Components/Home components/Top Section/Topsection";
import MiddleSection from "../../Components/Home components/Middle Section/MiddleSection";
import "./home.css";
import BottomSection from "../../Components/Home components/Bottom Section/BottomSection";

const Home = () => {
  return (
    <div className="homecont">
      <Topsection />
      <MiddleSection />
      <BottomSection />
    </div>
  );
};

export default Home;
