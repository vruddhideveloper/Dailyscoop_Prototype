import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Entertainment from "./pages/entertainment/Entertainment";
import { Sports } from "./pages/sports/Sports";
import { Gadget } from "./pages/gadget/Gadget";
function App() {
  return (
    <div className="App">
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route exact path="/sports" element={<Sports />} />
            <Route path="/gadget" element={<Gadget />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
