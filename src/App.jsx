import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import CityToCity from "./pages/cityToCity";
import AirportTransfer from "./components/AirportTransfer/AirportTransfer";
import HourlyHire from "./components/HourlyHire/HourlyHire";
import ChoufferServices from "./components/ChoufferServices/ChoufferServices";
import LimousineServices from "./components/LimousineServices/LimousineServices";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/city-to-city" element={<CityToCity />}></Route>
          <Route path="/airportTransfer" element={<AirportTransfer />}></Route>
          <Route path="/hourlyHire" element={<HourlyHire />} />
          <Route path="/choufferservices" element={<ChoufferServices />} />
          <Route path="/limousineservices" element={<LimousineServices />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
