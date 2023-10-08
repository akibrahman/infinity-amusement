import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="relative">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
