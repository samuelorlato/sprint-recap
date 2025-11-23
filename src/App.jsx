import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import SprintRecap from "./pages/SprintRecap";
import Summary from "./pages/Summary";
import SprintWrapped from "./pages/SprintWrapped";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/recap" element={<SprintRecap />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/wrapped" element={<SprintWrapped />} />
      </Routes>
    </Router>
  );
}

export default App;
