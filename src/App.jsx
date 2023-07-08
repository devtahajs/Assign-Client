// Imports
import Navbar from "./Components/Navbar/Navbar.jsx";
import RegLogContainer from "./Components/Reg-LogContainer/Reg-LogCont.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer.jsx";
// ----------***-----------------
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <RegLogContainer>
        <Outlet />
      </RegLogContainer>
      <Footer />
    </div>
  );
};

export default App;
