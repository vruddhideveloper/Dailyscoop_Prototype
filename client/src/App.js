import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Entertainment from "./pages/entertainment/Entertainment";
import { Sports } from "./pages/sports/Sports";
import { GadgetPage } from "./pages/gadget/Gadget";
import { VisualStories } from "./components/visualStories/VisualStories";
import Reviews from "./components/reviews/Reviews";
import Stocks from "./components/stocks/Stocks";
function App() {
  return (
    <div className="App">
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route exact path="/sports" element={<Sports />} />
            <Route path="/gadget" element={<GadgetPage />} />
            <Route path="/visualStories" element={<VisualStories />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/stocks" element={<Stocks />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
