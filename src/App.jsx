import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import NavBar from "./Components/NavBar/NavBar";
import Services from "./Components/Services/Services";
import Sliders from "./Components/Sliders/Sliders";
import Team from "./Components/Team/Team";

function App() {
  return (
    <div className="relative">
      <NavBar></NavBar>
      <Sliders></Sliders>
      <AboutUs></AboutUs>
      <Services></Services>
      <Team></Team>
    </div>
  );
}

export default App;
