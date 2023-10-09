import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="font-poppins">
      <ToastContainer position="top-center"></ToastContainer>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
