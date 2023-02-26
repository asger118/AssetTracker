import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Market from "./pages/Market";
import MyAssets from "./pages/myAssets";
import Navbar from "./pages/Navbar";
import Settings from "./pages/Settings";
import Stock from "./pages/Stock";
import Crypto from "./pages/Crypto";
import Funds from "./pages/Funds";

import "./scripts/DarkmodeScript";
import "./styles/NavbarStyle.css";
import "./styles/Dashboard.css";

function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="Market" element={<Market />}>
        <Route path="Stock" element={<Stock />} />
        <Route path="Funds" element={<Funds />} />
        <Route path="Cryto" element={<Crypto />} />
        <Route /></Route>
        <Route path="MyAssets" element={<MyAssets />} />
        <Route path="Settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};
export default App;