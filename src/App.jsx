// Imports
import Navbar from "./Components/Navbar/Navbar.jsx";
import RegLogContainer from "./Components/Reg-LogContainer/Reg-LogCont.jsx";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer/Footer.jsx";


// ----------***-----------------
const App = () => {
  
  return (
    
      <div className="App">
        <Navbar />
        <RegLogContainer>
          <Outlet />
        </RegLogContainer>
        <ToastContainer
          position="bottom-center"
          autoClose={1000}
          theme="colored"
        />
        <Footer />
      </div>
  );
};

export default App;
